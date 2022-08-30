/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { FC, useState } from 'react';
import './AuthInformer.scss';

import warningIcon from './Warning.svg';

interface IAuthInformer {
  messagePosition: 'left-top' | 'right-bottom';
  onClick?: () => void;
}

const messagePositionVariants = {
  'left-top': 'auth-informer_message-position-left-top',
  'right-bottom': 'auth-informer_message-position-right-bottom'
};

const AuthInformer: FC<IAuthInformer> = (props) => {
  const { onClick, messagePosition } = props;

  const [isInfoVisible, setIsInfoVisible] = useState(false);
  let timeout: number;

  const showMessage = () => {
    setIsInfoVisible(true);
  };

  const createTimeOut = () => {
    timeout = window.setTimeout(showMessage, 1000);
  };

  const clearTimeOut = () => {
    window.clearTimeout(timeout);
  };

  const handlerMouseLeave = () => {
    clearTimeOut();
  };

  const handlerMouseEnter = () => {
    createTimeOut();
  };

  const classes = ['auth-informer', messagePositionVariants[messagePosition]].join(' ');

  return (
    <div className={classes}>
      {isInfoVisible && (
        <div className="auth-informer__info-block">
          <span className="auth-informer__description">You are not authorized</span>
          <button className="auth-informer__auth-button" type="button" onClick={onClick}>
            Auth
          </button>
        </div>
      )}
      <div
        className="auth-informer__warning-icon"
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}>
        <img className="auth-informer__warning-icon-img" src={warningIcon} alt="" />
      </div>
    </div>
  );
};

export default AuthInformer;
