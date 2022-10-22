import React from 'react';

type Errorrs = {
   // ["labelName"]?: {
   //    message?: string | undefined,
   // },
   name: string;
   exampleRequired: string;
   message: string;
   cardNumber: string;
   cardMonth: string; 
   cardYear: string;
   cvc: string;
};

interface inputI {
   labelName: string,
   errors?: Errorrs,
};

// const InputBig: React.FC<inputI> = ({labelName, errors }) => {
   // return (
   //    <label className="label">
   //       CARDHOLD NAME
   //       <input placeholder="e.g. Jane Allpeseed" className='input-big'
   //       // {...register(`${labelName}`, {
   //       //    required: "Обязательно для заполнения",
   //       //    minLength: {
   //       //       value: 4,
   //       //       message: 'Минимум 4 символов'
   //       //    },
   //       //    pattern: {
   //       //       value: /[A-Za-z]/g,
   //       //       message: 'Не может быть цифр'
   //       //    }
   //       // })}
   //          // {
   //          // ...children
   //          // }
   //       />
   //       <div className="w-80 h-4">
   //          {errors?.["labelName"] && <span className='text-red-400'>
   //             {errors?.["labelName"]?.message || "This field is required"}
   //          </span>}
   //       </div>
   //    </label>
   // );
// };

// export default InputBig;