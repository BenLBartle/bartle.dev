import styled from 'styled-components';
import 'typeface-vt323'

const SocialLink = styled.a`
  border: 1px solid #bfc8d2;
  border-radius: 5px;
  color: #3e465b;
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  text-decoration: none;
  font-family: vt323;
  font-size: large;

  svg {
    display: inline-block;
    height: 15px;
    margin-right: 5px;
    stroke: #6e849c;
    vertical-align: middle;
    width: 15px;
  }

  &:hover {
    border-color: #3e465b;
  }
`;

export default SocialLink;