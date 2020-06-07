import _ from 'lodash';
import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_FINISH_TASK,
  ADD_FOLDER,
  REMOVE_FOLDER,
  CHANGE_FOLDER_COLOR,
  RENAME_FOLDER,
  SELECT_FOLDER,
  RENAME_TASK,
} from '../actions/actionTypes';

const folders = [
  { name: 'front', color: 'red', id: _.uniqueId() },
  { name: 'back', color: 'green', id: _.uniqueId() },
  { name: 'dev-ops', color: 'blue', id: _.uniqueId() },
];

const tasks = folders.map(({ name, id: folderId }) => ({
  id: _.uniqueId(),
  folderId,
  text: `task of ${name}`,
  isFinished: Math.random() > 0.7,
}));
const addtasks = folders.map(({ name, id: folderId }) => ({
  id: _.uniqueId(),
  folderId,
  text: `task of ${name}`,
  isFinished: Math.random() > 0.7,
}));

const initialState = {
  folders,
  tasks: [...tasks, ...addtasks],
  selectedFolderId: null,
};

export default (state = initialState, { type, payload }) => {
  const { folders, tasks, selectedFolderId } = state;
  switch (type) {
    case ADD_TASK: {
      return { ...state, tasks: [...tasks, payload] };
    }
    case RENAME_TASK: {
      return {
        ...state,
        tasks: tasks.map((task) =>
          task.id === payload.id ? { ...task, text: payload.text } : task,
        ),
      };
    }
    case REMOVE_TASK: {
      return { ...state, tasks: tasks.filter(({ id }) => payload !== id) };
    }
    case TOGGLE_FINISH_TASK: {
      return {
        ...state,
        tasks: tasks.map((task) =>
          task.id === payload ? { ...task, isFinished: !task.isFinished } : task,
        ),
      };
    }
    case ADD_FOLDER: {
      return { ...state, folders: [payload, ...folders] };
    }
    case REMOVE_FOLDER: {
      return {
        ...state,
        folders: folders.filter(({ id }) => id !== payload),
        tasks: tasks.filter(({ folderId }) => folderId !== payload),
      };
    }
    case CHANGE_FOLDER_COLOR: {
      return {
        ...state,
        folders: folders.map((folder) =>
          folder.id === payload ? { ...folder, color: payload } : folder,
        ),
      };
    }
    case RENAME_FOLDER: {
      return {
        ...state,
        folders: folders.map((folder) =>
          folder.id === payload.id ? { ...folder, name: payload.name } : folder,
        ),
      };
    }
    case SELECT_FOLDER: {
      return { ...state, selectedFolderId: payload };
    }

    default:
      return state;
  }
};
