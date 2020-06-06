import styles from './App.scss';

import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from '../Nav/index';
import Todo from '../Todo/index';
import NewFolder from '../NewFolder/NewFolder';

const cx = classNames.bind(styles);

const App = ({}) => {
  return (
    <div className={cx('App')}>
      <nav className={cx('nav')}>
        <div className={cx('nav-inner')}>
          <Nav />
        </div>
      </nav>
      <div className={cx('todo')}>
        <Todo />
      </div>

      {/* <NewFolder /> */}
    </div>
  );
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
