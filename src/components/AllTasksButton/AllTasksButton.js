import styles from './AllTasksButton.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button';
import { selectFolder } from '../../store/actions/tasks';

const cx = classNames.bind(styles);

const icon = (
  <svg
    id="Layer_1"
    height="512"
    viewBox="0 0 512 512"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
    <path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" />
    <path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z" />
  </svg>
);

const AllTasksButton = ({ onSelect, isActive }) => {
  return (
    <div className={cx('AllTasksButton', { active: isActive })}>
      <button className={cx('btn')} onClick={() => onSelect()}>
        <span className={cx('icon')}>{icon}</span>
        <span className={cx('text')}>Show all tasks</span>
      </button>
    </div>
  );
};

AllTasksButton.propTypes = {};

AllTasksButton.defaultProps = {};

const mapStateToProps = ({ tasks: { selectedFolderId } }) => ({ id: selectedFolderId });

const mapDispatchToProps = { selectFolder };

export default connect(mapStateToProps, mapDispatchToProps)(AllTasksButton);
