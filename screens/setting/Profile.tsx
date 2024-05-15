import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {User} from '../../components/UserPic';
import {Color, FontFamily, width} from '../../GlobalStyles';
import auth from '@react-native-firebase/auth';
function Profile() {
  const handleLogOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TouchableOpacity
        style={{backgroundColor: 'aliceblue', height: 50, width: 200}}
        onPress={handleLogOut}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({});
