import cls from './App.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const App = ({}) => {
  return <div className={cls['App']}>App</div>;
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
