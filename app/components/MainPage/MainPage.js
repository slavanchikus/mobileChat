import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View, StyleSheet } from 'react-native';

import { socket } from '../../sagas/chatSagas';

import { userRequest, userCreate, getMessages, createMessage } from '../../actions/actions';
import { userSelector, messagesSelector } from '../../selectors/mainSelector';

import ChatContainer from '../ChatContainer/ChatContainer';
import Authentication from '../Authentication/Authentication';
import ErrorContainer from '../ErrorContainer/ErrorContainer';


const mapStateToProps = state => ({
  user: userSelector(state),
  messages: messagesSelector(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ userRequest, userCreate, getMessages, createMessage }, dispatch);

/* const storageUsername = localStorage.getItem('username_chat');
const storagePassword = localStorage.getItem('password_chat'); */

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#181818',
  },
});

class MainPage extends React.Component {

  componentWillMount() {
    /* if (storageUsername && storagePassword) {
      this.props.userRequest(storageUsername, storagePassword);
    } */
  }

  componentDidMount() {
    socket.on('fetch message', (data) => {
      this.props.getMessages(data.id);
    });
  }

  componentWillReceiveProps({ user }) {
    if (!this.props.user.userId && user.userId) {
      this.props.getMessages();
    }
  }

  render() {
    const { user, messages } = this.props;
    return (
      <View style={styles.container}>
        {user.error &&
          <ErrorContainer
            error={user.error}
          />
        }
        {!user.userId &&
          <Authentication
            onUserRequest={this.props.userRequest}
            onUserCreate={this.props.userCreate}
          />}
        {user.userId &&
          <ChatContainer
            user={user}
            messages={messages}
            onCreateMessage={this.props.createMessage}
          />}
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);