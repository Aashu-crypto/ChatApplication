import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../Routes';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color, FontFamily} from '../../GlobalStyles';
import {useDarkMode} from '../../config/ColorMode';
import {ScrollView} from 'react-native';
type Option = {
  title: string;
  subTitle: string;
  route?: string | any;
  icon: string;
};

type Props = {
  option: Option;
};

const ProfileOption: React.FC<Props> = ({option}) => {
  const navigation = useNavigation();
  const dark = useDarkMode();

  return (
    <TouchableOpacity
    activeOpacity={0.7}
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
        backgroundColor: dark ? Color.colorSilver : Color.colorGainsboro,
      }}>
      <View
        style={{
          flexDirection: 'row',

          alignItems: 'center',
          gap: 20,
        }}>
        <Icon
          name={option.icon}
          size={18}
          color={dark ? Color.white : Color.black}
        />
        <View>
          <Text
            style={[styles.title, {color: dark ? Color.white : Color.black}]}>
            {option.title}
          </Text>
          <Text
            style={[
              styles.subTitle,
              {color: dark ? Color.white : Color.black},
            ]}>
            {option.subTitle}
          </Text>
        </View>
      </View>
      <Icon
        name="caret-right"
        size={15}
        color={dark ? Color.white : Color.black}
      />
    </TouchableOpacity>
  );
};

const ProfileOptions: React.FC = () => {
  const profileOptionsData: Option[] = [
    {
      title: 'Edit Profile',
      subTitle: 'Change name / Password',
      route: Routes.EDITPROFILE,
      icon: 'user-o',
    },
    {
      title: 'Saved Messages',
      subTitle: 'Check your saved messages',
      route: Routes.MYORDERS,
      icon: 'shopping-cart',
    },
    {
      title: 'Privacy and Security',
      subTitle: 'check your privacy',
      icon: 'address-book',
    },
    {title: 'Help', subTitle: 'for any query', icon: 'credit-card'},
    {title: 'Tell a Friend', subTitle: 'Earn rewards', icon: 'cog'},
  ];

  return (
    <ScrollView>
      <View style={{gap: 10}}>
        {profileOptionsData.map((option, index) => (
          <ProfileOption key={index} option={option} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileOptions;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,

    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
  },
  subTitle: {
    fontSize: 9,

    color: Color.gray,
  },
});
