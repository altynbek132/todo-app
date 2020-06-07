import styles from './TaskList.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import NewTaskButton from '../../NewTaskButton';
import { toggleFinishTask, removeTask, addTask } from '../../../store/actions/tasks';

const cx = classNames.bind(styles);

const TaskList = ({ children: tasks, removeTask, toggleFinishTask, addTask, folderId }) => {
  return (
    <div className={cx('TaskList')}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskFinished={() => toggleFinishTask(task.id)}
          onRemoveTask={() => removeTask(task.id)}
        />
      ))}
      <NewTaskButton onSubmit={(text) => addTask({ text, folderId })} />
    </div>
  );
};

TaskList.propTypes = {};

TaskList.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {
  removeTask,
  toggleFinishTask,
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
