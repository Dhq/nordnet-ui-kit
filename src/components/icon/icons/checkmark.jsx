import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function Checkmark({
  stroke,
  fill,
  strokeWidth,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg aria-hidden="true" focusable="false" {...rest}>
      <g id="Page-1" stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
        <g id="checkmark" stroke={stroke} strokeWidth={strokeWidth}>
          <path d="M0.700012207,3.44100952 L3.69873047,6.43997192 L9.29998779,0.839996338" id="Path-5" />
        </g>
      </g>
    </svg>
  );
}

Checkmark.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Checkmark.defaultProps = {
  ...Icon.defaultProps,
  width: 10,
  height: 8,
  viewBox: '0 0 10 8',
};