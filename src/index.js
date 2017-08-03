import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Background from './Background'
import registerServiceWorker from './registerServiceWorker';



/*class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		posts: [1],
      	comments: [1]
    };
    this.handlerClick = this.handlerClick.bind(this)
  }

handlerClick(e){
 e.preventDefault()
 alert('hello')
}


render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>{this.state.posts[0]}+{this.state.comments[0]}</p>
        <a href='#' onClick={this.handlerClick} > Click Me </a>
      </div>
    );
  }
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
*/
/*ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);*/


/*function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React','ddd'];*/

ReactDOM.render(
  <Background />,
  document.getElementById('root')
);
registerServiceWorker()

