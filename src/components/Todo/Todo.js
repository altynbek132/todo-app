import styles from './Todo.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header/index';
import TaskList from './TaskList/index';
import { renameFolder } from '../../store/actions/tasks';

const cx = classNames.bind(styles);

const Todo = ({ tasks, folders, selectedFolderId, renameFolder }) => {
  const renderContent = (id, name, color) => (
    <div key={id} className={cx('todo-item')}>
      <Header onNameChange={(name) => renameFolder({ name, id })} color={color}>
        {name}
      </Header>
      <TaskList folderId={id}>{tasks.filter(({ folderId }) => folderId === id)}</TaskList>
    </div>
  );

  if (selectedFolderId) {
    const selectedFolder = folders.find(({ id }) => id === selectedFolderId);
    const { id, color, name } = selectedFolder;
    return <div className={cx('Todo')}>{renderContent(id, name, color)}</div>;
  }

  return (
    <div className={cx('Todo')}>
      {folders.map(({ id, name, color }) => renderContent(id, name, color))}
    </div>
  );
};

Todo.propTypes = {};

Todo.defaultProps = {};

const mapStateToProps = ({ tasks: { tasks, folders, selectedFolderId } }) => ({
  tasks,
  folders,
  selectedFolderId,
});

const mapDispatchToProps = { renameFolder };

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
