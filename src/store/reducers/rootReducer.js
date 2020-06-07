import { combineReducers } from 'redux';
import tasks from './tasks';
import newFolder from './newFolder';

export default combineReducers({ tasks, newFolder });
