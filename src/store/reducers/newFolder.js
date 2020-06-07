import {
  ACTIVATE_MODAL,
  CLOSE_MODAL,
  ACTIVATE_COLOR_PALETTE,
  CLOSE_COLOR_PALETTE,
  SET_NEW_FOLDER_NAME,
  SET_NEW_FOLDER_COLOR,
  RESET_NEW_FOLDER_INPUT,
} from '../actions/actionTypes';

const initialState = {
  modalActive: false,
  colorPaletteActive: false,
  color: null,
  name: '',
};

export default (state = initialState, { type, payload }) => {
  const { modalActive, colorPaletteActive, color, name } = state;

  switch (type) {
    case ACTIVATE_MODAL: {
      return { ...state, modalActive: true };
    }
    case CLOSE_MODAL: {
      return { ...state, modalActive: false, colorPaletteActive: false };
    }
    case ACTIVATE_COLOR_PALETTE: {
      return { ...state, colorPaletteActive: true, isCustomColor: true };
    }
    case CLOSE_COLOR_PALETTE: {
      return { ...state, colorPaletteActive: false, isCustomColor: false };
    }
    case SET_NEW_FOLDER_NAME: {
      return { ...state, name: payload };
    }
    case SET_NEW_FOLDER_COLOR: {
      return { ...state, color: payload };
    }
    case RESET_NEW_FOLDER_INPUT: {
      return initialState;
    }

    default:
      return state;
  }
};
