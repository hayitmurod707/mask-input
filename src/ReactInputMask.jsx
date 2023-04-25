import { func, object, string } from 'prop-types';
import Input from 'react-input-mask';
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
const ReactInputMask = props => <StyledInput {...props} />;
ReactInputMask.defaultProps = {
   formatChars: {},
   mask: '',
   maskChar: '',
   placeholder: '',
   value: '',
};
ReactInputMask.propTypes = {
   formatChars: object,
   mask: string,
   maskChar: string,
   onChange: func,
   onFocus: func,
   placeholder: string,
   value: string,
};
export default ReactInputMask;
