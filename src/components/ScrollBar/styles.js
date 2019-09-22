import styled from 'styled-components';

const ScrollBarStyles = styled.div`
   width: 200px;
   height: 100%;
   display: inline-block;
   overflow: hidden;

   button {
      font-family: 'Roboto Mono', monospace;
      color: ${props => (props.nightTime ? '#fff' : '#000')};
   }

   .title {
      writing-mode: tb-rl;
      transform: rotate(-180deg);
   }

   .line {
      height: 400px;
      display: inline-block;
      overflow: scroll;
      border-left: 1px solid ${props => (props.nightTime ? '#fff' : '#000')};
      ::-webkit-scrollbar { 
         display: none; 
      }
   }
   
   .timeline-content {
      margin-top: 400px;
      border-bottom: 1px solid ${props => (props.nightTime ? '#fff' : '#000')};
   }
   .timeline-content > h2,button{
      margin: 5px 20px 15px;
   }
`;

export default ScrollBarStyles;