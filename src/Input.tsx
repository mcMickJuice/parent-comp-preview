import React from 'react'

interface Props {
  label: string
  defaultValue: string
  selector: string
  onChange: (value: string) => void
}
const Input = ({ defaultValue, label, selector, onChange }: Props) => {
  return (
    <div>
      <label>{label}</label>
      {/* <input {...build(selector)} /> */}
      <input
        defaultValue={defaultValue}
        type="text"
        onBlur={evt => {
          const value = evt.currentTarget.value

          onChange(value)
        }}
      />
    </div>
  )
}

export default Input
