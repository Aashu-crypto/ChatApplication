import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import RootStack from './navigation/RootStackScreen';
import {useColorScheme} from 'react-native';
const App = () => {
  const colorSchema = useColorScheme();
  console.log('ColorSchema', colorSchema);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
