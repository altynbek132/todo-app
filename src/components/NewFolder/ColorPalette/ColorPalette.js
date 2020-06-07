import styles from './ColorPalette.scss';

import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';
import {
  activateColorPalette,
  setNewFolderColor,
  closeColorPalette,
} from '../../../store/actions/newFolder';

const cx = classNames.bind(styles);

const ColorPalette = ({
  activeColor,
  colorPaletteActive,
  activateColorPalette,
  setNewFolderColor,
  closeColorPalette,
}) => {
  const colors = ['#42B883', '#64C4ED', '#FFBBCC', '#B6E6BD', '#C355F5', '#09011A', '#FF6464'];

  if (!activeColor) {
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    setNewFolderColor(randColor);
  }
  const activeColorIndex = colors.findIndex((color) => color === activeColor);

  const [customColor, setCustomColor] = useState('red');
  return (
    <div className={cx('ColorPalette')}>
      {colors.map((color, index) => (
        <button
          className={cx('btn')}
          key={color}
          onClick={() => {
            setNewFolderColor(color);
            closeColorPalette();
          }}
        >
          <span
            className={cx('color-btn', { active: index === activeColorIndex })}
            style={{ backgroundColor: color }}
          />
        </button>
      ))}
      <button
        className={cx('btn')}
        onClick={() => {
          setNewFolderColor('red');
          activateColorPalette();
        }}
      >
        <span
          className={cx('color-btn', 'color-btn-custom', { active: activeColorIndex === -1 })}
        />
      </button>

      <div className={cx('color-palette')}>
        {colorPaletteActive && (
          <SketchPicker
            color={customColor}
            onChangeComplete={() => setNewFolderColor(customColor.hex)}
            onChange={setCustomColor}
          />
        )}
      </div>
    </div>
  );
};

ColorPalette.propTypes = {};

ColorPalette.defaultProps = {
  colors: [],
};

const mapStateToProps = ({ newFolder: { colorPaletteActive, color: activeColor } }) => ({
  colorPaletteActive,
  activeColor,
});

const mapDispatchToProps = { activateColorPalette, setNewFolderColor, closeColorPalette };

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette);
