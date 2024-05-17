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
import {useColorScheme} from 'react-native';
import ProfileView from '../../components/SettingScetions/ProfileView';
import HeaderComponent from '../../components/HeaderComponent';
import ProfileOptions from '../../components/SettingScetions/ProfileOptions';
import Icon from 'react-native-vector-icons/FontAwesome';

function Profile() {
  const isDark = useColorScheme() === 'dark';
  const handleLogOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? Color.black : Color.white,
      }}>
      <HeaderComponent title="Setting" name="settings" />
      <ProfileView />
      <ProfileOptions />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 55,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 1,
          padding: 15,
          borderRadius: 15,
          backgroundColor: isDark ? Color.colorSilver : Color.colorGainsboro,
        }}
        onPress={handleLogOut}>
        <Text
          style={[styles.title, {color: isDark ? Color.white : Color.black}]}>
          Logout
        </Text>
        <Icon
          name="caret-right"
          size={15}
          color={isDark ? Color.white : Color.black}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,

    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
  },
});
