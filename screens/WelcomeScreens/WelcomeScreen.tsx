import {
  View,
  Text,
  Pressable,
  Image,
  LogBox,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../GlobalStyles';
import Button from '../../components/Button';
import {useAppSelector} from '../../redux/hooks';
import {screenName} from '../../redux/slice/screenNameSlice';
import Routes from '../../Routes';

const Welcome = ({navigation}: any) => {
  const scr = useAppSelector(screenName);
  console.log(scr);

  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[Color.secondary, Color.primary]}>
      <View style={{flex: 1}}>
        <View>
          <Image
            source={require('../../assets/img/hero1.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: 'absolute',
              top: 10,
              transform: [
                {translateX: 20},
                {translateY: 50},
                {rotate: '-15deg'},
              ],
            }}
          />

          <Image
            source={require('../../assets/img/hero3.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: 'absolute',
              top: -30,
              left: 100,
              transform: [
                {translateX: 50},
                {translateY: 50},
                {rotate: '-5deg'},
              ],
            }}
          />

          <Image
            source={require('../../assets/img/hero3.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: 'absolute',
              top: 130,
              left: -50,
              transform: [
                {translateX: 50},
                {translateY: 50},
                {rotate: '15deg'},
              ],
            }}
          />

          <Image
            source={require('../../assets/img/hero2.jpg')}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: 'absolute',
              top: 110,
              left: 100,
              transform: [
                {translateX: 50},
                {translateY: 50},
                {rotate: '-15deg'},
              ],
            }}
          />
        </View>

        {/* content  */}

        <View
          style={{
            paddingHorizontal: 22,
            position: 'absolute',
            top: 400,
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: '#fff',
            }}>
            Let's Get
          </Text>
          <Text
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: '#fff',
            }}>
            Started
          </Text>

          <View style={{marginVertical: 22}}>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                marginVertical: 4,
              }}>
              Connect with each other with chatting
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
              }}>
              Calling, Enjoy Safe and private texting
            </Text>
          </View>

          <Button
            title="Join Now"
            onPress={() => {
              navigation.navigate(Routes.SIGNUP);
            }}
            style={{
              marginTop: 22,
              width: '100%',
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
              }}>
              Already have an account ?
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate(Routes.LOGIN);
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: 'bold',
                  marginLeft: 4,
                }}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
export default Welcome;
