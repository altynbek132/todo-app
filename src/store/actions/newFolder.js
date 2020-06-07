import {
  ACTIVATE_MODAL,
  CLOSE_MODAL,
  ACTIVATE_COLOR_PALETTE,
  CLOSE_COLOR_PALETTE,
  SET_NEW_FOLDER_NAME,
  SET_NEW_FOLDER_COLOR,
  RESET_NEW_FOLDER_INPUT,
} from './actionTypes';

import _ from 'lodash';

export const activateModal = () => ({ type: ACTIVATE_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const activateColorPalette = () => ({ type: ACTIVATE_COLOR_PALETTE });
export const closeColorPalette = () => ({ type: CLOSE_COLOR_PALETTE });
export const setNewFolderName = (payload) => ({
  type: SET_NEW_FOLDER_NAME,
  payload,
});
export const setNewFolderColor = (payload) => ({
  type: SET_NEW_FOLDER_COLOR,
  payload,
});
export const resetNewFolderInput = () => ({
  type: RESET_NEW_FOLDER_INPUT,
});
