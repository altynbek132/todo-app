import styles from './List.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from '../ListItem/index';
import TodoFolder from '../TodoFolder/index';
import Button from '../Button';
import NewTaskButton from '../NewTaskButton/index';
import AllTasksButton from '../AllTasksButton/AllTasksButton';
import NewFolderButton from '../NewFolderButton/index';
import _ from 'lodash';

const cx = classNames.bind(styles);

const List = ({}) => {
  const list = [
    { name: 'front', color: 'red', id: _.uniqueId() },
    { name: 'back', color: 'green', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
    { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
  ];

  return (
    <div className={cx('List')}>
      <AllTasksButton />

      <div className={cx('folders')}>
        {list.map((todoFolder) => (
          <TodoFolder key={todoFolder.id} todoFolder={todoFolder} />
        ))}
      </div>

      <NewFolderButton />
    </div>
  );
};

List.propTypes = {};

List.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
