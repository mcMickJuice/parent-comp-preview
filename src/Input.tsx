import React from 'react'
import { focusElement, blurElement } from './frameService'

interface Props {
  label: string
  defaultValue: string
  selector: string
  onChange: (value: string) => void
}
const Input = ({ defaultValue, label, selector, onChange }: Props) => {
  const [hasFocus, setFocus] = React.useState(false)

  function updateInteraction(
    type: 'focus' | 'mouseenter' | 'blur' | 'mouseleave'
  ) {
    if (type === 'focus') {
      setFocus(true)
    } else if (hasFocus && type === 'mouseleave') {
      return
    } else if (type === 'blur') {
      setFocus(false)
    }

    if (type === 'mouseenter') {
      focusElement(selector)
    } else if (type === 'mouseleave' || type === 'blur') {
      blurElement(selector)
    }
  }

  return (
    <div>
      <label>{label}</label>
      {/* <input {...build(selector)} /> */}
      <input
        defaultValue={defaultValue}
        type="text"
        onMouseEnter={() => {
          updateInteraction('mouseenter')
        }}
        onMouseLeave={() => {
          updateInteraction('mouseleave')
        }}
        onBlur={evt => {
          const value = evt.currentTarget.value
          updateInteraction('blur')
          onChange(value)
        }}
        onFocus={() => updateInteraction('focus')}
      />
    </div>
  )
}

export default Input
