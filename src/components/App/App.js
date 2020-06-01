import './App.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const App = ({}) => {
  return <div>App</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
