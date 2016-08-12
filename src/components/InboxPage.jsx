import React from 'react';

import MessagePreview from './MessagePreview.jsx';

import messages from '../messages.json';

const InboxPage = React.createClass({
    getInitialState() {
      return {
        messages
      };
    },

    handlePreviewClick(messageId) {
      alert(messageId);
    },

    render() {
      return (
        <div className="InboxPage">
          <div className="messages">
              {
                messages.map(message =>
                  <MessagePreview
                  key={message.id}
                  onClick={this.handlePreviewClick.bind(null, message.id)}
                  title={message.subject}
                  senderName={message.senderName}
                  />
                )
              }
          </div>

          <div className="message-container">
            {this.props.children}
          </div>
        </div>
      );
    }
});

export default InboxPage;
