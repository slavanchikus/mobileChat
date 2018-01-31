import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

import { unixstampConverter } from '../../../utils/convertUnixstamp';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  message: {
    width: 'auto',
    minWidth: 120,
    minHeight: 30,
    position: 'relative',
    marginLeft: 'auto',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderColor: 'rgba(255,255,255,0.10)',
    borderRadius: 5
  },
  username: {
    fontWeight: '600',
    color: '#ECC948'
  },
  content: {
    fontSize: 13.5,
    marginLeft: 2,
    paddingRight: 30,
    maxWidth: 300,
    overflow: 'scroll',
  },
  date: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    fontSize: 11
  }
});

export default class MessagesContainer extends Component {
  static propTypes = {
    currentUserId: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.container.scrollTop = this.container.scrollHeight;
  }

  componentDidUpdate() {
    this.container.scrollTop = this.container.scrollHeight;
  }

  /* setClassName = userId => cx(styles.message, {
    [styles.own_message]: userId === this.props.currentUserId
  }); */

  render() {
    const { messages } = this.props;
    return (
      <View style={styles.container} ref={node => (this.container = node)}>
        {messages.map(message =>
          <View key={message._id} style={styles.message}>
            <Text style={styles.username}>
              {message.username}
            </Text>
            <Text style={styles.content}>
              {message.content}
            </Text>
            <Text style={styles.date}>
              {unixstampConverter(message.date)}
            </Text>
          </View>)}
      </View>
    );
  }
}
