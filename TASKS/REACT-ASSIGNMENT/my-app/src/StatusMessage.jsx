import React from 'react';

const StatusMessage = ({ status }) => {
    let message;

    if (status === 'success') {
        message = 'Operation was successful';
    } else if (status === 'error') {
        message = 'There was an error';
    } else {
        message = 'Status unknown';
    }

    return (
        <div className={`status-message ${status}`}>
            <p>{message}</p>
        </div>
    );
};

export default StatusMessage;
