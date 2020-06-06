import styles from './Circle.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);

const Circle = ({ color, radius, ...otherProps }) => {
  return (
    <span
      className={cx('Circle')}
      style={{ backgroundColor: color, width: 2 * radius, height: 2 * radius, borderRadius: '50%' }}
      {...otherProps}
    />
  );
};

Circle.propTypes = {};

Circle.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Circle);
