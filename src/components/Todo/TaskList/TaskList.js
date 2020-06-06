import styles from './TaskList.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import NewTaskButton from '../../NewTaskButton';

const cx = classNames.bind(styles);

const TaskList = ({ children: tasks }) => {
  return (
    <div className={cx('TaskList')}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <NewTaskButton />
    </div>
  );
};

TaskList.propTypes = {};

TaskList.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
