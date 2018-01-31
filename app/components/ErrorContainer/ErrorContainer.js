import React from 'react';

import { View, Text } from 'react-native';

export default ({ error }) => (
  <View>
      <Text>{error === 'invalid data' && 'Неправильный логин или пароль'}</Text>
      <Text>{error === 'user exists' && 'Юзернейм занят'}</Text>
  </View>
  );
