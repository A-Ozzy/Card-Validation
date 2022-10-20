import React from 'react';

interface inputI {
   labelName: string,
   errors: {},
};

const InputBig = (labelName: inputI, errors: inputI) => {
   // return (
   //    <label className="flex flex-col text-sky-900 text-xs tracking-widest font-semibold my-2">
   //       {labelName}
   //       <input placeholder="e.g. Jane Appleseed" className='mt-1 block w-80 px-3 py-2 border-2 bg-white border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'
   //          {...register("firstName", {
   //             required: "Поле обязательно для заполнения",
   //          })}
   //       />
   //       <div className="w-80 h-4">
   //          {errors.firstName && <span className='text-red-400'>{errors?.firstName?.message || "This field is required"}</span>}
   //       </div>

   //    </label>
   // );
};

export default InputBig;