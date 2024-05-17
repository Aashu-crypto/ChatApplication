import React, {useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';

export const useDarkMode = () => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  return isDark;
};
