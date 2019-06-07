import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto 15px auto;
  overflow: hidden;
  width: 75%;

  img {
    padding: 5px;
    width: 70px;
  }

  img.wizard {
    padding: 5px;
    width: 90px;
  }

  @media screen and (max-width: 550px) {
    img {
      padding: 3px;
      width: 40px;
    }
  
    img.wizard {
      padding: 3px;
      width: 50px;
    }
  }
`;

export default Wrapper;