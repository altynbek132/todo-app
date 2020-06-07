import styles from './List.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoFolder from '../TodoFolder/index';
import Button from '../Button';
import NewTaskButton from '../NewTaskButton/index';
import AllTasksButton from '../AllTasksButton/AllTasksButton';
import NewFolderButton from '../NewFolderButton/index';
import _ from 'lodash';
import { removeFolder, selectFolder } from '../../store/actions/tasks';
import NewFolder from '../NewFolder/index';

const cx = classNames.bind(styles);

const List = ({ folders, selectedFolderId, removeFolder, selectFolder }) => {
  return (
    <div className={cx('List')}>
      <AllTasksButton onSelect={() => selectFolder(null)} isActive={!selectedFolderId} />

      <div className={cx('folders')}>
        {folders.map((todoFolder) => (
          <TodoFolder
            key={todoFolder.id}
            todoFolder={todoFolder}
            isActive={selectedFolderId === todoFolder.id}
            onSelect={() => selectFolder(todoFolder.id)}
            onRemove={() => {
              if (selectedFolderId === todoFolder.id) {
                selectFolder(null);
              }
              removeFolder(todoFolder.id);
            }}
          />
        ))}
      </div>

      <NewFolderButton />
    </div>
  );
};

List.propTypes = {};

List.defaultProps = {};

const mapStateToProps = ({ tasks: { folders, selectedFolderId } }) => ({
  folders,
  selectedFolderId,
});

const mapDispatchToProps = {
  removeFolder,
  selectFolder,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
