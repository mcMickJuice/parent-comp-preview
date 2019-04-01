import React from 'react'
import { focusElement, blurElement } from './frameService'

function build(selector) {
  return {
    onBlur: () => {
      blurElement(selector)
    },
    onFocus: () => {
      focusElement(selector)
    }
  }
}

const Form = () => {
  return (
    <div>
      <h2>Form</h2>
      <div>
        <label>Headline</label>
        <input {...build('.header')} />
      </div>
      <div>
        <label>Section 1</label>
        <input {...build('.section-1 > h3')} />
      </div>
      <div>
        <label>Section 2</label>
        <input {...build('.section-2 > h3')} />
      </div>
      <div>
        <label>Section 3</label>
        <input {...build('.section-3 > h3')} />
      </div>
    </div>
  )
}

export default Form
