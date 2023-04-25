import 'cleave.js/dist/addons/cleave-phone.uz';
import Input from 'cleave.js/react';
import { func, object, string } from 'prop-types';
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
const CleaveInput = props => <StyledInput {...props} />;
CleaveInput.defaultProps = {
   options: {},
   placeholder: '',
   value: '',
};
CleaveInput.propTypes = {
   onChange: func,
   onFocus: func,
   options: object,
   placeholder: string,
   value: string,
};
export default CleaveInput;
