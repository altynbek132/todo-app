import styles from './NewFolder.scss';

import classNames from 'classnames/bind';
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button';
import ColorPalette from './ColorPalette';
import {
  closeModal,
  setNewFolderName,
  setNewFolderColor,
  closeColorPalette,
  resetNewFolderInput,
} from '../../store/actions/newFolder';
import { addFolder } from '../../store/actions/tasks';

const cx = classNames.bind(styles);

const closeIcon = (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 492 492"
  >
    <g>
      <g>
        <path
          d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
			c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
			c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
			L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
			c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
			c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
			c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"
        />
      </g>
    </g>
  </svg>
);

const NewFolder = ({
  closeModal,
  setNewFolderName,
  setNewFolderColor,
  newName,
  newColor,
  closeColorPalette,
  addFolder,
  modalActive,
  resetNewFolderInput,
}) => {
  const inputRef = useRef(null);
  if (inputRef.current) inputRef.current.focus();

  const node = useRef(null);
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) return;
    resetNewFolderInput();
  };
  useEffect(() => {
    if (modalActive) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalActive]);

  return (
    <div className={cx('NewFolder')} ref={node}>
      <div className={cx('close-button')}>
        <Button
          onClick={() => {
            closeModal();
            resetNewFolderInput();
            console.log(' - close');
          }}
        >
          <span className={cx('close-icon')}>{closeIcon}</span>
        </Button>
      </div>

      <div className={cx('input-wrap')}>
        <input
          className={cx('input')}
          ref={inputRef}
          onChange={({ target: { value } }) => setNewFolderName(value)}
          value={newName}
          type="text"
          placeholder="input name of folder"
        />
      </div>

      <div className={cx('colorpane')}>
        <ColorPalette />
      </div>

      <div className={cx('add-button-wrap')}>
        <Button
          onClick={() => {
            if (newName.trim() === '') return;
            addFolder(newName, newColor);
            resetNewFolderInput();
          }}
        >
          <span className={cx('add-button')}>Add new folder</span>
        </Button>
      </div>
    </div>
  );
};

NewFolder.propTypes = {};

NewFolder.defaultProps = {};

const mapStateToProps = ({ newFolder: { name: newName, color: newColor, modalActive } }) => ({
  newName,
  newColor,
  modalActive,
});

const mapDispatchToProps = {
  closeModal,
  setNewFolderName,
  setNewFolderColor,
  closeColorPalette,
  addFolder,
  resetNewFolderInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFolder);
