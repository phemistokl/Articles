import React from 'react';
import messages from '../messages.json'

const InboxPage = React.createClass({
    getInitialState() {
      return {
        messages
      };
    },

    render() {
      return (
        <div className="InboxPage">
          <div className="messages">
              {
                messages.map(message =>
                  <div key={message.id}>
                    {message.subject}
                  </div>
                )
              }
          </div>
        </div>
      );
    }
});

export default InboxPage;
