import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

const postImg = require('../../../img/send-button.png');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopWidth: 1,
    borderColor: '#ECC948',
  },
  input: {
    flex: 1,
    color: 'rgba(255,255,255,0.85)',
    padding: 2,
    paddingLeft: 5,
    fontSize: 11,
    borderWidth: 1,
    borderColor: 'hsla(0,0%,100%,.1)',
    borderRadius: 5,
  },
  send_img: {
    width: 20,
    height: 20,
    marginLeft: 10
  }
});

export default class InputForm extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onCreateMessage: PropTypes.func.isRequired
  };

  state = {
    content: ''
  };

  handleChange = (content) => {
    this.setState({ content });
  };

  handleClick = () => {
    const { content } = this.state;
    const { userId, username } = this.props.user;

    if (content) {
      this.props.onCreateMessage(content, userId, username);
      this.textInput.clear();
      this.textInput.focus();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref={(input) => { this.textInput = input; }}
          editable
          multiline
          maxHeight={60}
          placeholder="Напишите сообщение..."
          style={styles.input}
          spellCheck={false}
          underlineColorAndroid="transparent"
          onChangeText={this.handleChange}
        />
        <TouchableOpacity
          onPress={this.handleClick}
        >
          <Image
            style={styles.send_img}
            source={postImg}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
