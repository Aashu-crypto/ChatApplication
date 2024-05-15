import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Routes from '../Routes';
import HomeScreen from '../screens/Home/HomeScreen';
import Profile from '../screens/setting/Profile';
import {HomeStack, SettingStack} from './RootStackScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '../GlobalStyles';
import {useColorScheme} from 'react-native';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  const isDark = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: Color.secondary, // Active label color
        tabBarInactiveTintColor: isDark ? Color.white : Color.black,
        tabBarStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: Platform.OS === 'android' ? 60 : 80,
          borderTopWidth: 0, // Explicitly remove the top border
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
          display:
            getFocusedRouteNameFromRoute(route) === Routes.SEARCH
              ? 'none'
              : 'flex',
          backgroundColor: isDark ? Color.black : Color.white, // Consistent background
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.icon}>
              <AntDesign
                name="message1"
                color={
                  focused ? Color.secondary : isDark ? Color.white : Color.black
                } // Icon color logic
                size={30}
              />
            </View>
          ),
          tabBarLabel: 'Chats',
        }}
      />
      <Tab.Screen
        name="setting"
        component={SettingStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.icon}>
              <AntDesign
                name="setting"
                color={
                  focused ? Color.secondary : isDark ? Color.white : Color.black
                } // Icon color logic
                size={30}
              />
            </View>
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',

    padding: 3,
    borderRadius: 10,
  },
});
