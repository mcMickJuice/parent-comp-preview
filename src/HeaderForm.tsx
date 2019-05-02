import React from 'react'
import FormContext from './FormContext'
import Input from './Input'

function useForm() {
  const { getDefaultHeaderValue, updateHeader } = React.useContext(FormContext)

  const [headerState] = React.useState(() => {
    const value = getDefaultHeaderValue()

    return value
  })

  return {
    initialHeaderData: headerState,
    updateHeader
  }
}

const HeaderForm = () => {
  const { initialHeaderData, updateHeader } = useForm()

  function handleHeaderChange(header: string) {
    updateHeader(header)
  }
  return (
    <div>
      <h3>Global</h3>
      <Input
        defaultValue={initialHeaderData}
        onChange={handleHeaderChange}
        label="Headline"
        selector=".storyblock-header"
      />
    </div>
  )
}

export default HeaderForm
