import styles from './Nav.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from '../List/index';

const cx = classNames.bind(styles);

const Nav = ({}) => {
  return (
    <div className={cx('Nav')}>
      <List />
    </div>
  );
};

Nav.propTypes = {};

Nav.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
