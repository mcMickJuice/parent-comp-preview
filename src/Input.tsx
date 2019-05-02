import React from 'react'
import { focusElement, blurElement } from './frameService'

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
        onMouseEnter={() => {
          focusElement(selector)
        }}
        onMouseLeave={() => {
          blurElement(selector)
        }}
        onBlur={evt => {
          const value = evt.currentTarget.value

          onChange(value)
        }}
      />
    </div>
  )
}

export default Input
