import styles from './Todo.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header/index';
import TaskList from './TaskList/index';

const cx = classNames.bind(styles);

const Todo = ({}) => {
  const folders = [
    { id: 1, name: 'Folder of tasks', color: 'red' },
    { id: 2, name: 'Folder of tasks2', color: 'blue' },
    { id: 3, name: 'Folder of tasks3', color: 'green' },
    { id: 4, name: 'Folder of tasks4', color: 'violet' },
  ];
  const tasks = [
    { id: 1, folderId: 1, text: 'task1', isFinished: false },
    { id: 2, folderId: 1, text: 'task2', isFinished: true },
    { id: 3, folderId: 2, text: 'task3', isFinished: false },
  ];
  return (
    <div className={cx('Todo')}>
      {folders.map(({ id: currentFolderId, name, color }) => (
        <div key={currentFolderId} className={cx('todo-item')}>
          <Header color={color}>{name}</Header>
          <TaskList>{tasks.filter(({ folderId }) => folderId === currentFolderId)}</TaskList>
        </div>
      ))}
    </div>
  );
};

Todo.propTypes = {};

Todo.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
