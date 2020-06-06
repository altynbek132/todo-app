import styles from './Input.scss';

import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);

const Input = ({ type, onChange, value, placeholder }) => {
  const [inputValue, setinputValue] = useState('');

  return (
    <input
      className={cx('Input')}
      type={type}
      value={inputValue}
      placeholder={placeholder}
      onChange={({ target: { value } }) => setinputValue(value)}
    />
  );
};

Input.propTypes = {};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
