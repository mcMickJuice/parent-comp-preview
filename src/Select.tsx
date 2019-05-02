import React from 'react'
import { focusElement, blurElement } from './frameService'

interface Props {
  options: { display: string; value: string }[]
  defaultValue: string
  onChange: (value: string) => void
  selector: string
}

const Select = ({ options, defaultValue, onChange, selector }: Props) => {
  return (
    <select
      onMouseEnter={() => {
        focusElement(selector)
      }}
      onMouseLeave={() => {
        blurElement(selector)
      }}
      defaultValue={defaultValue}
      onChange={(evt: any) => {
        const { value } = evt.currentTarget

        onChange(value)
      }}
    >
      {options.map(o => (
        <option value={o.value}>{o.display}</option>
      ))}
    </select>
  )
}

export default Select
