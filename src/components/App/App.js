import styles from './App.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);

const App = ({}) => {
  return <div className={cx('App')}>App</div>;
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
