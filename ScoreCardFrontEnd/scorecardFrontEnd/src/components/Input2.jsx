import React, {useId} from 'react'

const Input2 = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full flex m-4  bg-red-600 rounded-xl' >
            {label && <label 
            className='inline-block size-auto p-2 text-white font-bold	 bg-blue-500 rounded-xl   w-full' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={` m-2 rounded-lg bg-white text-black font-bold outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input2