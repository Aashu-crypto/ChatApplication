import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'; // Import TouchableOpacity
import HeaderComponent from '../../components/HeaderComponent';
import firestore from '@react-native-firebase/firestore';
import Routes from '../../Routes';
import {Color, FontFamily} from '../../GlobalStyles';
import {useColorScheme} from 'react-native';
// Define the User interface
interface User {
  displayName: string;
  uid: string;
}

function HomeScreen({navigation}: any) {
  const [userData, setUserData] = useState<User[]>([]);
  const colorSchema = useColorScheme();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = await firestore().collection('Fusers').get();
        const usersData = usersCollection.docs.map(doc => doc.data() as User); // Explicit type assertion
        setUserData(usersData);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchUsers();
  }, []);

  const renderItem = ({item}: {item: User}) => (
    <TouchableOpacity
      style={[
        styles.userCard,
        {backgroundColor: colorSchema == 'dark' ? Color.black : Color.white},
      ]}
      onPress={() => {
        navigation.navigate(Routes.CHAT);
      }}>
      <View style={styles.cardContent}>
        <Image
          source={require('../../assets/img/hero1.jpg')}
          style={{height: 80, width: 80, borderRadius: 40}}
        />
        {/* You can add an Image component here to display the user's profile picture */}

        <View style={styles.userInfo}>
          <Text
            style={[
              styles.displayName,
              {color: colorSchema != 'dark' ? Color.black : Color.white},
            ]}>
            {item.displayName}
          </Text>
          {/* You can add additional user info here (e.g., last message, online status) */}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colorSchema == 'dark' ? Color.black : Color.white},
      ]}>
      <HeaderComponent title="Chats" />
      <FlatList
        data={userData}
        keyExtractor={item => item.uid}
        renderItem={renderItem}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  displayName: {
    fontSize: 18,

    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsBold,
  },
  userCard: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8, // Add rounded corners
    borderBottomWidth: 0.4,
  },
  cardContent: {
    flexDirection: 'row',
  },
  userInfo: {
    marginLeft: 20,
    marginTop: 5,
  },
});
