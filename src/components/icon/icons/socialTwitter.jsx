import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';

export default function SocialTwitter({
  stroke,
  fill,
  strokeWidth,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke="none" strokeWidth="1" fillRule="nonzero" fill={fill}>
        <path d="M5.03168,13.0009402 C11.06944,13.0009402 14.37184,7.99870018 14.37184,3.66078018 C14.37184,3.51870018 14.37184,3.37726018 14.36224,3.23646018 C15.0046921,2.77176313 15.5592675,2.19638299 16,1.53726018 C15.4008826,1.80273332 14.7653307,1.97683052 14.11456,2.05374018 C14.7998362,1.6434887 15.312719,0.998234251 15.55776,0.23806018 C14.9133808,0.620431582 14.2084135,0.889907873 13.47328,1.03486018 C12.455733,-0.0471274815 10.8388604,-0.311947766 9.52931154,0.388895334 C8.21976268,1.08973843 7.54321599,2.58194865 7.87904,4.02878018 C5.23961327,3.89645988 2.7804645,2.64978707 1.1136,0.59902018 C0.242318564,2.09895281 0.687352246,4.01781025 2.12992,4.98110018 C1.60751437,4.96561701 1.0964988,4.82469261 0.64,4.57022018 C0.64,4.58366018 0.64,4.59774018 0.64,4.61182018 C0.640427605,6.17443968 1.74192095,7.52032268 3.2736,7.82974018 C2.79031654,7.96154181 2.28325158,7.98080853 1.79136,7.88606018 C2.22140667,9.22329079 3.45380772,10.1393619 4.85824,10.1657402 C3.69583042,11.0792966 2.25987809,11.5752299 0.78144,11.5737402 C0.520258284,11.5732388 0.259330602,11.557425 0,11.5263802 C1.50120701,12.4897572 3.24794458,13.000759 5.03168,12.9983802" />
      </g>
    </svg>
  );
}

SocialTwitter.propTypes = {
  ...Icon.propTypes,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

SocialTwitter.defaultProps = {
  ...Icon.defaultProps,
  width: 16,
  height: 13,
  viewBox: '0 0 16 13',
};
