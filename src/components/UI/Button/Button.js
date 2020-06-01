import './Button.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Button = ({ onClick, children, type, isDisabled }) => {
  const cls = ['button', type];
  return (
    <button className={cls.join()} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
