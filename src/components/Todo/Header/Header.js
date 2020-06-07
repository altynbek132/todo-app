import styles from './Header.scss';

import classNames from 'classnames/bind';
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContentEditable from 'react-contenteditable';

const cx = classNames.bind(styles);

function selectElementContents(el) {
  setTimeout(() => {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }, 0);
}

const editIcon = (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z"
      fill="#DFDFDF"
    />
  </svg>
);
const checkIcon = (
  <svg
    height="417pt"
    viewBox="0 -46 417.81333 417"
    width="417pt"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" />
  </svg>
);

const Header = ({ children, color, onNameChange }) => {
  const [hover, setHover] = useState(false);
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState(children);
  const inputRef = useRef(null);
  return (
    <div
      className={cx('Header')}
      style={{ color }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ContentEditable
        html={inputValue}
        disabled={!editable}
        innerRef={inputRef}
        onChange={({ currentTarget: { innerText } }) => setInputValue(innerText.replace('\n', ' '))}
        className={cx('text')}
      />

      {!editable ? (
        <button
          onClick={() => {
            setEditable(true);
            setInputValue(children);
            selectElementContents(inputRef.current);
          }}
          className={cx('icon', { visible: hover })}
        >
          {editIcon}
        </button>
      ) : (
        <button
          onClick={() => {
            onNameChange(inputValue);
            setEditable(false);
          }}
          className={cx('icon', { visible: true })}
        >
          {checkIcon}
        </button>
      )}
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
