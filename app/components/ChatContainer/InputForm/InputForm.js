import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

const postImg = require('../../../img/send-button.png');

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  input: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: 'hsla(0,0%,100%,.1)',
    borderRadius: 5,
  },
  post: {
    display: 'flex',
    width: 40,
    height: 40,
  }
});

export default class InputForm extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onCreateMessage: PropTypes.func.isRequired
  };

  handleClick = () => {
    const content = this.input.innerText;
    const { userId, username } = this.props.user;

    this.props.onCreateMessage(content, userId, username);
    this.input.innerText = '';
    this.input.focus();
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref={node => (this.input = node)}
          maxHeight={40}
          placeholder="Напишите сообщение..."
          style={styles.input}
          spellCheck={false}
        />
        <Image
          style={{
            width: 40,
            height: 40
          }}
          source={postImg}
        />
      </View>
    );
  }
}
