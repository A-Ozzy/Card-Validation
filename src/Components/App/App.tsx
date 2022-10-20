import React from 'react';
import CardImg from '../CardImg/CardImg';
import Form from '../Form/Form';

const App: React.FC = () => {

   return (
      <div className="font-body text-base min-w-[100vw] min-h-[100vh] p-8
       justify-center items-center flex
       bg-main-bg bg-no-repeat bg-left-top bg-[length:40%_100vh]
       lg:bg-[length:100vw_40%]">
         <div className="min-w-[80vw] min-h-[80vh] grid grid-cols-2 lg:grid-cols-1">
            <CardImg />
            <Form />
         </div>

      </div>
   );
}

export default App;
