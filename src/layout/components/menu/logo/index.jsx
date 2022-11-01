/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import logoSmall from '../../../../assets/images/logo/icon.png';
import logoSmallDark from '../../../../assets/images/logo/icon.png';
import logo from '../../../../assets/images/logo/logo.png';
import logoDark from '../../../../assets/images/logo/logo.png';
import logoRTL from '../../../../assets/images/logo/logo.png';
import logoRTLDark from '../../../../assets/images/logo/logo.png';

export default function MenuLogo(props) {
  const customise = useSelector((state) => state.customise);

  return (
    <div className="hp-header-logo hp-d-flex hp-align-items-center">
      <Link to="/" onClick={props.onClose} className="hp-position-relative hp-d-flex">
        {props.small ? (
          customise.theme == 'light' ? (
            <img className="hp-logo" src={logoSmall} alt="logo" />
          ) : (
            <img className="hp-logo" src={logoSmallDark} alt="logo" />
          )
        ) : customise.direction == 'rtl' ? (
          customise.theme == 'light' ? (
            <img className="hp-logo" src={logoRTL} alt="logo" />
          ) : (
            <img className="hp-logo" src={logoRTLDark} alt="logo" />
          )
        ) : customise.theme == 'light' ? (
          <img className="hp-logo" src={logo} alt="logo" />
        ) : (
          <img className="hp-logo" src={logoDark} alt="logo" />
        )}
      </Link>
    </div>
  );
}
