import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import Profile from '../screens/setting/Profile';
import Welcome from '../screens/WelcomeScreens/WelcomeScreen';
import Login from '../screens/Profile/SignIn';
import Routes from '../Routes';
import {useAppSelector} from '../redux/hooks';
import {screen, screenName} from '../redux/slice/screenNameSlice';
import BottomTabNavigation from './BottomTabNavigation';
import SignUp from '../screens/Profile/SignUp';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import {useAppDispatch} from '../redux/hooks';
import ChatScreen from '../screens/Home/ChatScreen';
const Stack = createStackNavigator();
const WelcomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.SIGNUP}
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.CHAT}
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};
export {HomeStack, SettingStack};
const RootStack = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<string | null>();

  const dispatch = useAppDispatch();
  function onAuthStateChanged(user: any) {
    console.log('user2', user);
    console.log('initializing', initializing);
    setUser(user);
    if (user) {
      dispatch(screen(Routes.MAIN));
      setInitializing(false);
    } else {
      dispatch(screen(Routes.WELCOME));
    }
  }
  const navigation = useAppSelector(screenName);
  console.log(navigation);
  console.log(user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log('subscriber', subscriber);

    return subscriber; // unsubscribe on unmount
  }, []);

  switch (navigation) {
    case Routes.WELCOME:
      return <WelcomeStack />;
    case Routes.MAIN:
      return <BottomTabNavigation />;

    default:
      return <BottomTabNavigation />;
  }
};
export default RootStack;
