import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, TextInput, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    height: 300,
    paddingTop: 35,
    paddingBottom: 35,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  button: {
    minWidth: 150,
    backgroundColor: '#ffdb4d',
    borderRadius: 5
  },
  input: {
    width: 300,
    height: 40,
    padding: 10,
    color: 'rgba(255,255,255,0.85)',
  },
  text: {
    color: 'rgba(255,255,255,0.85)'
  },
  change: {
    marginTop: 'auto',
    textAlign: 'center',
    color: '#FF6557',
  }
});

export default class Authentication extends Component {
  static propTypes = {
    onUserRequest: PropTypes.func.isRequired,
    onUserCreate: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
    isRegistration: false
  };

  handleClick = () => {
    const { username, password, isRegistration } = this.state;
    if (isRegistration) {
      this.props.onUserCreate(username, password);
    } else {
      this.props.onUserRequest(username, password);
    }
  };

  putUsername = (text) => {
    this.setState({ username: text });
  };

  putPassword = (text) => {
    this.setState({ password: text });
  };

  render() {
    const { isRegistration } = this.state;
    return (
      <View>
        <View style={styles.container}>
          <Text h3 style={styles.text}>
            {isRegistration ? 'Регистрация' : 'Авторизация'}
          </Text>
          <TextInput style={styles.input} placeholder="Юзернейм" onChangeText={this.putUsername} />
          <TextInput style={styles.input} placeholder="Пароль" onChangeText={this.putPassword} />
          <Button
            buttonStyle={styles.button}
            color="black"
            title={isRegistration ? 'Регистрировать' : 'Войти'}
            onPress={this.handleClick}
          />
        </View>
        <Text
          style={styles.change}
          onPress={() => this.setState({ isRegistration: !this.state.isRegistration })}
        >
          {isRegistration ? 'Авторизоваться' : 'Зарегистрироваться'}
        </Text>
      </View>
    );
  }
}
