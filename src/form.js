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

const Input = ({ label, selector }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...build(selector)} />
    </div>
  )
}

const Form = () => {
  return (
    <div>
      <h2>Form</h2>
      <div>
        <h3>Global</h3>
        <Input label="Headline" selector=".storyblock-header" />
      </div>
      <div>
        <h3>Section 1</h3>
        <Input label="Image" selector=".section-1  .image-container" />
        <Input label="Headline" selector=".section-1  .section-headline" />
        <Input label="Subhead" selector=".section-1  .section-subhead" />
      </div>
      <div>
        <h3>Section 2</h3>
        <Input label="Image" selector=".section-2  .image-container" />
        <Input label="Headline" selector=".section-2  .section-headline" />
        <Input label="Subhead" selector=".section-2  .section-subhead" />
      </div>
      <div>
        <h3>Section 3</h3>
        <Input label="Image" selector=".section-3 .image-container" />
        <Input label="Headline" selector=".section-3 .section-headline" />
        <Input label="Subhead" selector=".section-3 .section-subhead" />
      </div>
    </div>
  )
}

export default Form
