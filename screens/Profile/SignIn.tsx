import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../GlobalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Button from '../../components/Button';
import Routes from '../../Routes';
import auth from '@react-native-firebase/auth';

import {useAppDispatch} from '../../redux/hooks';
import {screen} from '../../redux/slice/screenNameSlice';
const Login = ({navigation}: any) => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleLoginAccount = () => {
    console.log(email + password);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('user signed in');
      })
      .then(() => {
        dispatch(screen(Routes.MAIN));
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.log(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, marginHorizontal: 22}}>
        <View style={{marginVertical: 22}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 12,
              color: Color.black,
            }}>
            Hi Welcome Back ! 👋
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: Color.black,
            }}>
            Hello again you have been missed!
          </Text>
        </View>

        <View style={{marginBottom: 12}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}>
            Email address
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: Color.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={Color.black}
              keyboardType="email-address"
              style={{
                width: '100%',
              }}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={{marginBottom: 12}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}>
            Password
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: Color.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={Color.black}
              secureTextEntry={isPasswordShown}
              style={{
                width: '100%',
              }}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: 'absolute',
                right: 12,
              }}>
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={Color.black} />
              ) : (
                <Ionicons name="eye" size={24} color={Color.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 6,
          }}>
          <BouncyCheckbox
            style={{marginRight: 8}}
            onPress={(isChecked: boolean) => {}}
            fillColor={Color.primary}
            unFillColor="#FFFFFF"
          />

          <Text>Remenber Me</Text>
        </View>

        <Button
          title="Login"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={handleLoginAccount}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: Color.colorGray,
              marginHorizontal: 10,
            }}
          />
          <Text style={{fontSize: 14}}>Or Login with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: Color.colorGray,
              marginHorizontal: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => console.log('Pressed')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: Color.colorGray,
              marginRight: 4,
              borderRadius: 10,
            }}>
            <Image
              source={require('../../assets/img/facebook.png')}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />

            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Pressed')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: Color.colorGray,
              marginRight: 4,
              borderRadius: 10,
            }}>
            <Image
              source={require('../../assets/img/google.png')}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 22,
          }}>
          <Text style={{fontSize: 16, color: Color.black}}>
            Don't have an account ?{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate(Routes.SIGNUP)}>
            <Text
              style={{
                fontSize: 16,
                color: Color.primary,
                fontWeight: 'bold',
                marginLeft: 6,
              }}>
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
