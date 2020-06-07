import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_FINISH_TASK,
  RENAME_TASK,
  ADD_FOLDER,
  REMOVE_FOLDER,
  CHANGE_FOLDER_COLOR,
  RENAME_FOLDER,
  SELECT_FOLDER,
  RESET_NEW_FOLDER_INPUT,
} from './actionTypes';

import _ from 'lodash';

export const addTask = (payload) => ({
  type: ADD_TASK,
  payload: { ...payload, isFinished: false, id: _.uniqueId() },
});
export const removeTask = (payload) => ({
  type: REMOVE_TASK,
  payload,
});
export const toggleFinishTask = (payload) => ({
  type: TOGGLE_FINISH_TASK,
  payload,
});
export const renameTask = (payload) => ({
  type: RENAME_TASK,
  payload,
});
export const addFolder = (name, color) => ({
  type: ADD_FOLDER,
  payload: { name, color, id: _.uniqueId() },
});
export const removeFolder = (payload) => ({
  type: REMOVE_FOLDER,
  payload,
});
export const changeFolderColor = (payload) => ({
  type: CHANGE_FOLDER_COLOR,
  payload,
});
export const renameFolder = (payload) => ({
  type: RENAME_FOLDER,
  payload,
});
export const selectFolder = (payload) => ({
  type: SELECT_FOLDER,
  payload,
});
