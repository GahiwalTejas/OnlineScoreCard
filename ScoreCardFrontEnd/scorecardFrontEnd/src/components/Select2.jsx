import React, {useId} from 'react'

function Select2({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-3/6  m-3 rounded-xl '>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-blue-500 text-white  border-4 border-red-500  font-bold outline-none focus:bg-blue-600 duration-200 w-full ${className}`}
        >
            {options?.map((option,index) => (
                <option key={option} value={index}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select2)