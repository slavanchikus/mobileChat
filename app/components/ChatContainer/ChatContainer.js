import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import InputForm from './InputForm/InputForm';
import MessagesContainer from './MessagesContainer/MessagesContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'rgba(255,255,255,0.85)',
    paddingLeft: 15
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#ECC948',
  }
});

export default class ChatContainer extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    onCreateMessage: PropTypes.func.isRequired
  };

  render() {
    const { user, messages, onCreateMessage } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text} h3>Чатик</Text>
        </View>
        <MessagesContainer
          currentUserId={user.userId}
          messages={messages}
        />
        <InputForm
          user={user}
          onCreateMessage={onCreateMessage}
        />
      </View>
    );
  }
}
