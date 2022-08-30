import useOutsideTachHandler from 'hooks/useOutsideTachHandler';
import React, { FC, useRef, useState } from 'react';
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

  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const infoBlockRef = useRef<HTMLDivElement>(null);

  const some = () => {
    setIsInfoVisible(false);
  };

  const { addOutSideListener } = useOutsideTachHandler(infoBlockRef, some);

  const toggleShowMessage = () => {
    if (isInfoVisible) {
      setIsInfoVisible(false);
    } else {
      setIsInfoVisible(true);
      addOutSideListener();
    }
  };

  const handleWarningIconClick = () => {
    toggleShowMessage();
  };

  const handleWarningKeyDown = () => {
    toggleShowMessage();
  };

  const classes = ['auth-informer', messagePositionVariants[messagePosition]].join(' ');

  return (
    <div className={classes} ref={infoBlockRef}>
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
        role="button"
        tabIndex={0}
        onClick={handleWarningIconClick}
        onKeyDown={handleWarningKeyDown}>
        <img className="auth-informer__warning-icon-img" src={warningIcon} alt="" />
      </div>
    </div>
  );
};

export default AuthInformer;
