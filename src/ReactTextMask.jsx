import { any, bool, func, string } from 'prop-types';
import Input from 'react-text-mask';
import styled from 'styled-components';
const StyledInput = styled(Input)`
   border-radius: 10px;
   border: 1.5px solid rgb(217, 219, 225);
   font-size: 18px;
   font-weight: 600;
   height: 40px;
   outline: none;
   padding: 0 0 0 20px;
   width: 100%;
   &:focus {
      border: 1.5px solid #5254f1;
   }
   &[data-warning='true'] {
      border: 1.5px solid #f1c752;
   }
   &[data-error='true'] {
      border: 1.5px solid #f15252;
   }
   &::placeholder {
      color: rgba(105, 111, 133, 0.8);
   }
`;
const ReactTextMask = props => <StyledInput {...props} />;
ReactTextMask.defaultProps = {
   guide: false,
   keepCharPositions: false,
   mask: [],
   placeholder: '',
   placeholderChar: '\u2000',
   value: '',
};
ReactTextMask.propTypes = {
   guide: bool,
   keepCharPositions: bool,
   mask: any,
   onChange: func.isRequired,
   placeholder: string,
   placeholderChar: string,
   value: string.isRequired,
};
export default ReactTextMask;
