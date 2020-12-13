/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './screens/Home';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AntDesign name={'home'} size={30} />
        <Icon name={'home'} size={30} />
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import antFont from 'react-native-vector-icons/Fonts/AntDesign.ttf';

const iconFontStyles = `
@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}
@font-face {
  src: url(${antFont});
  font-family: AntDesign;
}
`;
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}
document.head.appendChild(style);
