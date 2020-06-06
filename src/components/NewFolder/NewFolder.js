import styles from './NewFolder.scss';

import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import Button from '../Button';
import ColorPalette from './ColorPalette';

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

const NewFolder = ({}) => {
  const colors = ['#42B883', '#64C4ED', '#FFBBCC', '#B6E6BD', '#C355F5', '#09011A', '#FF6464'];
  return (
    <div className={cx('NewFolder')}>
      <div className={cx('close-button')}>
        <Button>
          <span className={cx('close-icon')}>{closeIcon}</span>
        </Button>
      </div>

      <div className={cx('input')}>
        <Input placeholder="inpur name of folder" />
      </div>

      <div className={cx('colorpane')}>
        <ColorPalette colors={colors} />
      </div>

      <div className={cx('add-button-wrap')}>
        <Button>
          <span className={cx('add-button')}>Add new folder</span>
        </Button>
      </div>
    </div>
  );
};

NewFolder.propTypes = {};

NewFolder.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewFolder);
