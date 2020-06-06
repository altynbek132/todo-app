import styles from './CheckFinished.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);

const checkIcon = (
  <svg
    id="Capa_1"
    enable-background="new 0 0 515.556 515.556"
    height="512"
    viewBox="0 0 515.556 515.556"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
  </svg>
);

const CheckFinished = ({ checked, onClick }) => {
  return (
    <button onClick={onClick} className={cx('CheckFinished', { checked })}>
      {checkIcon}
    </button>
  );
};

CheckFinished.propTypes = {};

CheckFinished.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckFinished);
