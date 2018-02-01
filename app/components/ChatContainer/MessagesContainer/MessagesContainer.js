import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ScrollView, View, Text, StyleSheet } from 'react-native';

import { unixstampConverter } from '../../../utils/convertUnixstamp';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    overflow: 'scroll',
    backgroundColor: '#181818',
  },
  content: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.85)',
    paddingRight: 30,
    maxWidth: 300
  },
  date: {
    fontSize: 8.5,
    color: 'rgba(255,255,255,0.85)',
    position: 'absolute',
    right: 4,
    bottom: 4,
  }
});

export default class MessagesContainer extends Component {
  static propTypes = {
    currentUserId: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.contentHeight = 0;
    this.scrollViewHeight = 0;
  }

  setMessageStyle = (userId) => {
    const marginHandler = () => {
      if (userId === this.props.currentUserId) {
        return {
          marginRight: 'auto'
        };
      }
      return {
        marginLeft: 'auto'
      };
    };
    return {
      width: 'auto',
      minWidth: 120,
      minHeight: 30,
      position: 'relative',
      borderWidth: 1,
      marginBottom: 10,
      padding: 5,
      borderColor: 'rgba(255,255,255,0.10)',
      borderRadius: 5,
      ...marginHandler()
    };
  };

  setUsernameStyle = (userId) => {
    const colorHandler = () => {
      if (userId === this.props.currentUserId) {
        return {
          color: '#35a14b'
        };
      }
      return {
        color: '#ECC948'
      };
    };
    return {
      fontSize: 11,
      fontWeight: '600',
      ...colorHandler()
    };
  };

  render() {
    const { messages } = this.props;
    return (
      <ScrollView
        style={styles.container}
        ref={(input) => { this.scrollView = input; }}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.contentHeight = contentHeight;
          this.scrollView.scrollToEnd({ animated: true });
        }}
      >
        {messages.map(message =>
          <View key={message._id} style={this.setMessageStyle(message.userId)}>
            <Text style={this.setUsernameStyle(message.userId)}>
              {message.username}
            </Text>
            <Text style={styles.content}>
              {message.content}
            </Text>
            <Text style={styles.date}>
              {unixstampConverter(message.date)}
            </Text>
          </View>)}
      </ScrollView>
    );
  }
}
