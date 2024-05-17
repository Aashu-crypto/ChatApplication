import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Color, FontFamily} from '../../GlobalStyles';
import {useDarkMode} from '../../config/ColorMode';
type Props = {};

const ProfileView = (props: Props) => {
  const mode = useDarkMode();
  const styles = StyleSheet.create({
    image: {
      alignItems: 'center',
      padding: 20,
    },
    textView: {
      alignItems: 'center',
    },
    name: {
      fontSize: 20,
      fontFamily: FontFamily.poppinsBold,
      color: mode ? Color.white : Color.colorDarkslategray,
    },
    subName: {
      color: mode ? Color.colorGrayLight : Color.colorDarkslategray,
      fontFamily: FontFamily.poppinsRegular,
      fontSize: 10,
    },
  });

  return (
    <View>
      <View style={styles.image}>
        <Image
          source={require('../../assets/img/hero1.jpg')}
          style={{height: 80, width: 80, borderRadius: 40}}
        />
      </View>
      <View style={styles.textView}>
        <Text style={[styles.name]}>Aashutosh Gandotra</Text>
        <Text style={styles.subName}>
          +918825012865 .<Text> @aashgandotra</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProfileView;
