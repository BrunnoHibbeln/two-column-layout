'use client'

import { useState } from 'react'

export default function Form({
  sectionClasses,
  inputClasses,
  placeholder,
  buttonClasses,
  buttonText,
  errorColor,
}) {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')
  const [inputProps, setInputProps] = useState('')
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!emailRegex.test(inputValue)) {
      setError('Please check your email')
      setInputProps('border-2 border-red-500')
    } else {
      setError('')
      setInputProps('')
    }
  }

  return (
    <>
      <form
        className={`flex flex-col items-center justify-center gap-5 font-raleway ${sectionClasses}`}
        onSubmit={handleSubmit}
      >
        <div
          className={`relative ${inputClasses} justify-center-center flex flex-col gap-2`}
        >
          <input
            value={inputValue}
            onChange={handleInputChange}
            className={`w-full rounded-md border px-5 py-3 text-dark-blue ${inputProps}`}
            type="text"
            placeholder={`${placeholder}`}
          ></input>

          <p
            className={`open-sans absolute -bottom-4 text-xs font-bold ${errorColor}`}
          >
            {error}
          </p>
        </div>

        <button
          className={`${buttonClasses} min-w-fit rounded-md bg-blue px-5 py-3 font-bold text-grayish duration-200 active:brightness-75 lg:w-2/4 lg:hover:brightness-125`}
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </>
  )
}
