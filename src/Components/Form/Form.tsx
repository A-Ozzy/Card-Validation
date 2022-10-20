import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';


const Form: React.FC = () => {

   type Inputs = {
      name: string,
      exampleRequired: string,
      message: string,
      cardNumber: number,
      cardMonth: number,
      cardYear: number,
      cvc: number,
   };

   const {
      register,
      formState: {
         errors,
         isValid,
      },
      handleSubmit,
      reset,
   } = useForm<Inputs>({
      mode: "onBlur",
      reValidateMode: 'onChange',
      shouldFocusError: true,
   });

   const onSubmit:SubmitHandler<Inputs> = (data => {
      console.log(data);
      reset();
   });

   
   return (
      <div className='form flex justify-center items-center'>
         <form onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center">
            <label className="flex flex-col text-sky-900 text-xs tracking-widest font-semibold my-2">
               CARDHOLD NAME
               <input placeholder="e.g. Jane Allpeseed" className='mt-1 block w-80 px-3 py-2 border-2 bg-white border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'
                  {...register("name", {
                     required: "Обязательно для заполнения",
                     minLength: {
                        value: 4,
                        message: 'Минимум 4 символов'
                     },
                     pattern: {
                        value: /[A-Za-z]/g,
                        message: 'Не может быть цифр'
                      }
                  })}
               />
               <div className="w-80 h-4">
                  {errors?.name && <span className='text-red-400'>
                     {errors?.name?.message || "This field is required"}
                  </span>}
               </div>

            </label>
            <label className="flex flex-col text-sky-900 text-xs tracking-widest font-semibold my-2">
               CARD NUMBER
               <input placeholder="e.g. 1234_5678_9123_0406" className='mt-1 block w-80 px-3 py-2 border-2 bg-white border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'
                  {...register("cardNumber", {
                     required: "Обязательно для заполнения",
                     pattern: {
                        value: /\d{16}/g,
                        message: 'Требуется 16 цифр'
                     },
                     maxLength: {
                        value: 16,
                        message: 'Максимум 16 цифр'
                     },

                  })}
               />
               <div className="w-80 h-4">
                  {errors?.cardNumber && <span className='text-red-400'>
                     {errors?.cardNumber?.message || "This field is required"}
                  </span>}
               </div>
            </label>
            <div className="input-box flex w-80 ">
               <div className="text-sky-900 text-xs tracking-widest font-semibold my-2 min-w-[45%]">
                  EXP. DATE (MM/YY)
                  <div className="flex">
                     <div className="input-box">
                        <input placeholder="MM" className='mt-1 mr-3 block w-14 px-3 py-2 border-2 bg-white border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'
                           {...register("cardMonth", {
                              required: "Не может быть пустым",
                              // valueAsNumber: true,
                              pattern: {
                                 value: /\d{1,2}/g,
                                 message: 'Не может быть букв'
                               },
                              min: {
                                 value: 1,
                                 message: 'Нет такого месяца' // JS only: <p>error message</p> TS only support string
                               },
                              max: {
                                 value: 12,
                                 message: 'Нет такого месяца' // JS only: <p>error message</p> TS only support string
                               },
                           })}
                        />
                        {errors.cardMonth && <span className='text-red-400 block max-w-[56px]'>{errors?.cardMonth?.message || "This field is required"}</span>}
                     </div>
                     <div className="input-box">
                        <input placeholder="YY" className='mt-1 block w-14 px-3 py-2 border-2 bg-white border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'
                           {...register("cardYear", {
                              required: "Не может быть пустым",
                              valueAsNumber: true,
                              min: {
                                 value: new Date().getFullYear() - 2006,
                                 message: 'Карта старше 5 лет' // JS only: <p>error message</p> TS only support string
                               },
                              max: {
                                 value: new Date().getFullYear() + 6 - 2000,
                                 message: 'Не может быть' // JS only: <p>error message</p> TS only support string
                               },
                           })}
                        />
                        {errors.cardYear && <div className='text-red-400 block max-w-[56px]'>{errors?.cardYear?.message || "This field is required"}</div>}
                     </div>
                  </div>
               </div>
               <div className="dorder-4 ">
                  <label className="flex flex-col text-sky-900 text-xs tracking-widest font-semibold my-2">
                     CVC
                     <input placeholder="e.g. 123" className='mt-1 block w-40 px-3 py-2 border-2 bg-white border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'
                        {...register("cvc", {
                           required: "Поле обязательно для заполнения",
                           // valueAsNumber: true,
                           pattern: {
                              value: /[0-9]{3}/g,
                              message: 'Требуется 3 цифры' // JS only: <p>error message</p> TS only support string
                           },
                           maxLength: {
                              value: 3,
                              message: 'Максимум 3 цифры'
                           },
                        })}
                     />
                     <div className="w-80 h-4">
                        {errors?.cvc && <span className='text-red-400'>{errors?.cvc?.message || "This field is required"}</span>}
                     </div>

                  </label>
               </div>
            </div>
            <input type="submit"
               disabled={!isValid}
               value="Confirm" className='disabled:bg-slate-300 my-5 text-yellow-50 tracking-widest w-80 h-[50px] bg-slate-700 rounded-md cursor-pointer' />
         </form>
      </div>
   );
};

export default Form;