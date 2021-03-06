import styled from 'styled-components';

const ContentDescriptionStyles = styled.div`
  float: left;
  max-width: 200px;
  margin-right: ${props => (props.mobile ? '0' : '200px')};
  margin-top: 25px;

  ul {
    padding-top: 30px;
  }
  .responsibility {
    margin-bottom: 30px;
  }
`;

export default ContentDescriptionStyles;
