import React from 'react';

const CardImg: React.FC = () => {

   // w-[500px] h-[420px] 
   return (
      <div className='card-container lg:h-[320px] flex flex-col relative m-5'>
         <div className='absolute top-[0px] left-[0px]
           w-[400px] h-[200px] rounded-xl 
           bg-cart-face bg-no-repeat bg-left-top 
           bg-[length:100%_100%] z-10 lg:top-[120px]'>
         </div>
         <div className='absolute top-[220px] right-[0px]
            w-[400px] h-[200px] border rounded-xl
            bg-cart-back bg-no-repeat bg-left-top
            bg-[length:100%_100%] lg:top-0 lg:right-[20%] md:right-0'>
         </div>
      </div>
   );
};

export default CardImg;