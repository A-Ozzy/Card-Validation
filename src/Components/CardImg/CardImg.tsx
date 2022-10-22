import React, { useEffect, useMemo } from 'react';
import state from '../store/state';
import { observer } from 'mobx-react-lite';


const CardImg: React.FC = observer(() => {


   const formattedNum = (num: string) => {
      if (num.length <= 16) {
         return num.split(/(\d{4})/g).join(" ");
      }
   };


   return (
      <div className='card-container '>
         <div className='card-face '>
            <div className="logo-box">
               <div className="logo-big"></div>
               <div className="logo-small"></div>
            </div>
            <div className="mx-auto card-number tracking-widest self-end text-3xl">{formattedNum(state.cardNumber)}</div>
            <div className="info flex justify-between tracking-wide text-lg self-end">
               <div className="card-name">{state.owner}</div>
               <div className="card-date">{`${state.cardMonth}/${state.cardYear}`}</div>
            </div>
         </div>
         <div className='card-back relative'>
            <div className="cvc">{state.cvc}</div>
         </div>
      </div>
   );
});

export default CardImg;