import React from 'react'

interface Section {
  id: string
  imageUrl: string
  header: string
  subheader: string
}

interface Header {
  id: string
  header: string
}

export interface ComponentData {
  header: Header
  sections: Section[]
}

interface Props {
  initialData: ComponentData
  children: React.ReactNode
}

interface ContextType {
  getDefaultSectionValue: (
    sectionId: 'section-1' | 'section-2' | 'section-3'
  ) => Section
  updateSection: (section: Section) => void
  getDefaultHeaderValue: () => string
  updateHeader: (header: string) => void
}

const FormContext = React.createContext<ContextType>({
  getDefaultSectionValue: () => {
    throw new Error('Not implemented')
  },
  updateSection: () => {
    throw new Error('Not implemented')
  },
  getDefaultHeaderValue: () => {
    throw new Error('Not implemented')
  },
  updateHeader: () => {
    throw new Error('Not implemented')
  }
})

export default FormContext

export const FormContextProvider = ({ initialData, children }: Props) => {
  const [componentData, setComponentData] = React.useState(initialData)

  React.useEffect(() => {
    console.log('new component data', componentData)
  }, [componentData])

  function getDefaultSectionValue(
    sectionId: 'section-1' | 'section-2' | 'section-3'
  ) {
    const section = componentData.sections.find(s => s.id === sectionId)

    if (section == null) {
      throw new Error('section not found')
    }

    return section
  }

  function updateSection(section: Section) {
    const newSections = componentData.sections.map(s => {
      if (section.id === s.id) {
        return section
      }

      return s
    })

    setComponentData({
      ...componentData,
      sections: newSections
    })
  }

  function getDefaultHeaderValue() {
    return componentData.header.header
  }

  function updateHeader(header: string) {
    const newHeader = {
      ...componentData.header,
      header
    }

    setComponentData({
      ...componentData,
      header: newHeader
    })
  }

  return (
    <FormContext.Provider
      value={{
        getDefaultSectionValue,
        updateSection,
        updateHeader,
        getDefaultHeaderValue
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
