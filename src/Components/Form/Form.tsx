import React from 'react';
import { Inputs } from '../Types/Types';
import { useForm, SubmitHandler } from 'react-hook-form';
import state from '../store/state';
import { observer } from 'mobx-react-lite';


const Form: React.FC = () => {


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

   const onSubmit: SubmitHandler<Inputs> = (data => {
      state.onCardInfoSubmit(data);
      reset();
   });

   
   return (
      <div className='form flex justify-center items-center extra-sm:self-start extra-sm:min-w-[90vw]'>
         <form onSubmit={handleSubmit(onSubmit)}
            className="container">
            <label className="label">
               CARDHOLD NAME
               <input placeholder="e.g. Jane Allpeseed" className='input-big'
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
                  onChange={(e)=> state.onOwnerChange(e)}
               />
               <div className="max-w-[100%] h-4">
                  {errors?.name && <span className='text-red-400'>
                     {errors?.name?.message || "This field is required"}
                  </span>}
               </div>
            </label>
            <label className="label">
               CARD NUMBER
               <input placeholder="e.g. 1234_5678_9123_0406" className='input-big'
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
                  onChange={(e)=> state.onCardNumberChange(e)}
               />
               <div className="max-w-[100%] h-4">
                  {errors?.cardNumber && <span className='text-red-400'>
                     {errors?.cardNumber?.message || "This field is required"}
                  </span>}
               </div>
            </label>
            <div className="input-box flex w-80 400:justify-center 400:w-full">
               <div className="input-small-box">
                  EXP. DATE (MM/YY)
                  <div className="flex">
                     <div className="input-box">
                        <input placeholder="MM" className='input-small'
                           {...register("cardMonth", {
                              required: "Не может быть пустым",
                              pattern: {
                                 value: /\d{1,2}/g,
                                 message: 'Не может быть букв'
                              },
                              min: {
                                 value: 1,
                                 message: 'Нет такого месяца'
                              },
                              max: {
                                 value: 12,
                                 message: 'Нет такого месяца'
                              },
                           })}
                           onChange={(e)=> state.onCardMonthChange(e)}
                        />
                        {errors.cardMonth && <span className='error'>{errors?.cardMonth?.message || "This field is required"}</span>}
                     </div>
                     <div className="input-box">
                        <input placeholder="YY" className='input-small'
                           {...register("cardYear", {
                              required: "Не может быть пустым",
                              valueAsNumber: true,
                              min: {
                                 value: new Date().getFullYear() - 2006,
                                 message: 'Карта старше 5 лет' 
                              },
                              max: {
                                 value: new Date().getFullYear() + 6 - 2000,
                                 message: 'Не может быть' 
                              },
                           })}
                           onChange={(e)=> state.onCardYearChange(e)}
                        />
                        {errors.cardYear && <div className='error'>{errors?.cardYear?.message || "This field is required"}</div>}
                     </div>
                  </div>
               </div>
               <div className="dorder-4 max-w-[50%]">
                  <label className="label-cvc">
                     CVC
                     <input placeholder="e.g. 123" className='input-cvc'
                        {...register("cvc", {
                           required: "Поле обязательно для заполнения",
                           pattern: {
                              value: /[0-9]{3}/g,
                              message: 'Требуется 3 цифры' 
                           },
                           maxLength: {
                              value: 3,
                              message: 'Максимум 3 цифры'
                           },
                        })}
                        onChange={(e)=> state.onCvcChange(e)}
                     />
                     <div className="max-w-[100%] h-4">
                        {errors?.cvc && <span className='text-red-400'>{errors?.cvc?.message || "This field is required"}</span>}
                     </div>

                  </label>
               </div>
            </div>
            <input type="submit"
               disabled={!isValid}
               value="Confirm" className='input-submit' />
         </form>
      </div>
   );
};

export default observer(Form);