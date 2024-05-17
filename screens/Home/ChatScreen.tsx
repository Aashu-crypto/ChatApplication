import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, IMessage, User} from 'react-native-gifted-chat';
import {useColorScheme} from 'react-native';
import {Color} from '../../GlobalStyles';
const ChatScreen: React.FC = () => {
  const isDark = useColorScheme() === 'dark';
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    console.log('websoclet');

    const newSocket = new WebSocket('ws://192.168.29.229:8080');
    console.log(newSocket);

    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    };
    console.log('after on open');

    newSocket.onmessage = message => {
      console.log('Message received:', message.data);
    };
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <View
      style={{flex: 1, backgroundColor: isDark ? Color.black : Color.white}}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{_id: 1} as User}
        showAvatarForEveryMessage={true}
        showUserAvatar ={true}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
