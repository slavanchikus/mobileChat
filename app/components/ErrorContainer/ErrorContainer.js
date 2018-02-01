import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#FF6557',
    textAlign: 'center',
  }
});

export default ({ error }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{error === 'invalid data' && 'Неправильный логин или пароль'}</Text>
    <Text style={styles.text}>{error === 'user exists' && 'Юзернейм занят'}</Text>
  </View>
  );
