import styles from './ListItem.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const cx = classNames.bind(styles);

const ListItem = ({ children }) => {
  return <div className={cx('ListItem')}>{children}</div>;
};

ListItem.propTypes = {};

ListItem.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
