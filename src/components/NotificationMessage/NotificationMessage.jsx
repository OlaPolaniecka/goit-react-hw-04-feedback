import React from 'react';
import PropTypes from 'prop-types';
import css from './NotificationMessage.module.css';

const Notification = ({ message }) => {
  return <p className={css.message}>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
