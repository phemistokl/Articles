import React from 'react';

const MessagePreview = React.createClass({
  render() {
    const { title, senderName, onClick } = this.props;

    return (
      <div className='MessagePreview' onClick={onClick}>
          <div className='title'>
            {title}
          </div>

          <div className='from'>
            {`from ${senderName}`}
          </div>
      </div>
    );
  }
});

export default MessagePreview;
