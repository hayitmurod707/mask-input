import { useState } from 'react';
import styled from 'styled-components';
import CleaveInput from './CleaveInput';
import ReactInputMask from './ReactInputMask';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   & h2,
   & h1,
   & h3,
   & h4 {
      text-align: center;
   }
   & .content {
      display: flex;
      flex-direction: column;
      padding: 30px 0;
      width: 350px;
   }
`;
const App = () => {
   const [cleaveCreditCard, setCleaveCreditCard] = useState('');
   const [cleaveDate, setCleaveDate] = useState('');
   const [cleavePhone, setCleavePhone] = useState('');
   const [cleaveTime, setCleaveTime] = useState('');
   const [creditCard, setCreditCard] = useState('');
   const [phone, setPhone] = useState('');
   return (
      <StyledElement>
         <h1>Mask input</h1>
         <h4>
            <a href='https://github.com/hayitmurod707/mask-input'>Github</a>
         </h4>
         <div className='content'>
            <h2>React input mask</h2>
            <h3>Phone</h3>
            <ReactInputMask
               formatChars={{ b: '[0-9]' }}
               mask='+998 (bb) bbb bb bb'
               onChange={e => {
                  const phone = e.target.value
                     .toString()
                     .replace(/\(/g, '')
                     .replace(/\)/g, '')
                     .replace(/\+/g, '')
                     .replace(/\s/g, '');
                  setPhone(phone);
               }}
               placeholder='Enter your phone'
               value={phone}
            />
         </div>
         <div className='content'>
            <h3>Credit card</h3>
            <ReactInputMask
               formatChars={{ b: '[0-9]' }}
               mask='bbbb bbbb bbbb bbbb'
               onChange={e => {
                  const creditCard = e.target.value
                     .toString()
                     .replace(/\s/g, '');
                  setCreditCard(creditCard);
               }}
               placeholder='Enter your credit card'
               value={creditCard}
            />
         </div>
         <div className='content'>
            <h2>Cleave input mask</h2>
            <h3>Phone</h3>
            <CleaveInput
               onChange={e => setCleavePhone(e.target.value)}
               options={{
                  phone: true,
                  phoneRegionCode: 'UZ',
                  // prefix: '+998',
               }}
               placeholder='Enter phone'
               value={cleavePhone}
            />
         </div>
         <div className='content'>
            <h3>Credit card</h3>
            <CleaveInput
               onChange={e => setCleaveCreditCard(e.target.value)}
               options={{
                  creditCard: true,
               }}
               placeholder='Enter credit card'
               value={cleaveCreditCard}
            />
         </div>
         <div className='content'>
            <h3>Date</h3>
            <CleaveInput
               onChange={e => setCleaveDate(e.target.value)}
               options={{
                  date: true,
                  datePattern: ['d', 'm', 'Y'],
                  delimiter: '.',
               }}
               placeholder='Enter date'
               value={cleaveDate}
            />
         </div>
         <div className='content'>
            <h3>Time</h3>
            <CleaveInput
               onChange={e => setCleaveTime(e.target.value)}
               options={{
                  time: true,
                  timePattern: ['h', 'm', 's'],
               }}
               placeholder='Enter time'
               value={cleaveTime}
            />
         </div>
      </StyledElement>
   );
};
export default App;
