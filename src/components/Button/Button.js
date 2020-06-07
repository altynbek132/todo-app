import styles from './Button.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);

const Button = ({ children, onClick, ...props }) => {
  return (
    <button className={cx('Button')} {...props} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {};

Button.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
