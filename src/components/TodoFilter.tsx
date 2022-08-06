import * as React from 'react';

function TodoFilter() {
  return (
    <>
      <div className='text-center text-sm font-bold text-light_darkGreyBlue dark:text-dark_darkGreyBlue sm:text-base'>
        <span
          className={`cursor-pointer px-3 transition ease-linear hover:text-light_veryDarkGreyBlue dark:hover:text-dark_lightGreyBlue sm:px-2 
          `}
        >
          All
        </span>
        <span
          className={`cursor-pointer px-3 transition ease-linear hover:text-light_veryDarkGreyBlue dark:hover:text-dark_lightGreyBlue sm:px-2 
          `}
        >
          Active
        </span>
        <span
          className={`cursor-pointer px-3 transition ease-linear hover:text-light_veryDarkGreyBlue dark:hover:text-dark_lightGreyBlue sm:px-2 
            
        `}
        >
          Completed
        </span>
      </div>
    </>
  );
}

export default TodoFilter;
