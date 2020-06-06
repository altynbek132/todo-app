import styles from './ColorPalette.scss';

import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';

const cx = classNames.bind(styles);

const ColorPalette = ({ colors }) => {
  const [customColor, setCustomColor] = useState('red');
  return (
    <div className={cx('ColorPalette')}>
      {colors.map((color) => (
        <button className={cx('btn')} key={color}>
          <span className={cx('color-btn')} style={{ backgroundColor: color }} />
        </button>
      ))}
      <button className={cx('btn')}>
        <span className={cx('color-btn', 'color-btn-custom')} />
      </button>

      <div className={cx('color-palette')}>
        <SketchPicker
          color={customColor}
          onChangeComplete={setCustomColor}
          onChange={setCustomColor}
        />
      </div>
    </div>
  );
};

ColorPalette.propTypes = {};

ColorPalette.defaultProps = {
  colors: [],
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette);
