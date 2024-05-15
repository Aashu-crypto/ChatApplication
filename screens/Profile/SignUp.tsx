import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../GlobalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Button from '../../components/Button';
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Routes from '../../Routes';
import {useAppDispatch} from '../../redux/hooks';
import {screen} from '../../redux/slice/screenNameSlice';
import firestore from '@react-native-firebase/firestore';
const SignUp = ({navigation}: any) => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleCreateAccount = async () => {
    try {
      const {user} = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      await user.updateProfile({
        displayName: displayName,
      });

      // Store display name in Firestore
      await firestore().collection('Fusers').doc(user.uid).set({
        displayName: displayName,
        uid: user.uid,
      });

      dispatch(screen(Routes.MAIN));

      console.log('User account created & profile updated!');
    } catch (error) {
      console.error('Error creating account:', error);
    }
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
            Hi Lets create your Account 👋
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: Color.black,
            }}>
            Let begin your Journey!
          </Text>
        </View>
        <View style={{marginBottom: 12}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}>
            UserName
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
              placeholder="Enter your name"
              placeholderTextColor={Color.black}
              keyboardType="email-address"
              style={{
                width: '100%',
              }}
              onChangeText={setDisplayName}
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
            Password:
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

          <Text>
            {' '}
            I agree to the{' '}
            <Text
              style={styles.termsLink}
              onPress={() => {
                /* Implement link to your T&C */
              }}>
              Terms and Conditions
            </Text>
          </Text>
        </View>

        <Button
          title="Create your Accoount"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={handleCreateAccount}
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
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  termsLink: {
    color: Color.appDefaultColor,
    textDecorationLine: 'underline',
  },
});
