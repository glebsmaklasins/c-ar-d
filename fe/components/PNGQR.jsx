import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Linking,
  Image,
  Text,
  TextInput,
} from 'react-native';
import SendButton from './SendButton';

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'flex-end' },
  images: {
    width: 400,
    height: 400,
    alignItems: 'center',
  },
  hiro: {
    position: 'absolute',
    resizeMode: 'contain',
    height: 400,
    width: 400,
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 150,
    fontSize: 40,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
});

export default function Next({ navigation, route }) {
  const [sendEmail, setSendEmail] = useState('');
  console.log(route.params, 'props on input page');
  const { hiroUri, fileName, toWhom, from, message } = route.params;
  const browserLink = `https://richhouse83.github.io/c-ar-d-viewer/?video=${fileName}.mp4`;

  return (
    <View style={styles.container}>
      <Button
        title="Click here to see your AR message"
        onPress={() => {
          Linking.openURL(
            `https://richhouse83.github.io/c-ar-d-viewer/?video=${fileName}.mp4`,
          ).catch((err) => {
            // eslint-disable-next-line no-console
            console.error('Failed opening page because: ', err);
            // eslint-disable-next-line no-alert
            alert('Failed to open page');
          });
        }}
      />
      <TextInput
        placeholder="recipient email"
        onChangeText={(text) => {
          setSendEmail(text);
        }}
      />
      <SendButton
        email={sendEmail}
        browserLink={browserLink}
        {...route.params}
      />
    </View>
  );
}