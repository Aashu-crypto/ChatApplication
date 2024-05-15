import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, IMessage, User} from 'react-native-gifted-chat';

const ChatScreen: React.FC = () => {
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
    <GiftedChat messages={messages} onSend={onSend} user={{_id: 1} as User} />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
