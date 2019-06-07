import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import userConfig from '../../../config';
import 'typeface-vt323'

const Link = styled(GatsbyLink)`

  color: ${userConfig.primaryColor};
  text-decoration: none;
  font-family: "vt323";
`;

export default Link;