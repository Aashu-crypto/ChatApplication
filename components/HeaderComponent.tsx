import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, width, height, FontFamily} from '../GlobalStyles';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Routes from '../Routes';
import {useColorScheme} from 'react-native';
interface HeaderComponentProps {
  title: string;
  name?: string;
}
const HeaderComponent: React.FC<HeaderComponentProps> = ({
  title,
  name = 'chatbubble-sharp',
}) => {
  const navigation = useNavigation();
  const colorSchema = useColorScheme();
  return (
    <View
      style={[
        styles.feedHeader,
        {backgroundColor: colorSchema == 'dark' ? Color.black : Color.white},
      ]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 26,
          marginLeft: 5,
        }}>
        <Text
          style={[
            styles.read,
            {color: colorSchema != 'dark' ? Color.black : Color.white},
          ]}>
          {title}
        </Text>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon name={name} size={25} color={Color.secondary} />
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  feedHeader: {
    height: 100,
    width: width,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  read: {
    color: Color.colorDarkslategray,
    fontWeight: '700',
    fontSize: 28,
    fontFamily: FontFamily.poppinsBold,
  },
});
