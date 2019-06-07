import React from 'react';
import Link from 'gatsby-link';

import Wrapper from './Wrapper';
import imgSrc1 from '../../ben1.png';
import imgSrc2 from '../../ben2.png';
import imgSrc3 from '../../ben3.png';
import imgSrc4 from '../../ben4.png';

function HeaderImage() {
  return (
    <Wrapper>
      <Link to="/">
        <img src={imgSrc1} alt="" />
        <img src={imgSrc2} alt="" />
        <img src={imgSrc3} alt="" />
        <img src={imgSrc4} class="wizard" alt="" />
      </Link>
    </Wrapper>
  );
}

export default HeaderImage;
