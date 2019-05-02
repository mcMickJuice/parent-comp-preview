import React from 'react'
import FormContext from './FormContext'
import Input from './Input'
import Select from './Select'

interface Props {
  sectionId: 'section-1' | 'section-2' | 'section-3'
}

function useForm(sectionId: 'section-1' | 'section-2' | 'section-3') {
  const { getDefaultSectionValue, updateSection } = React.useContext(
    FormContext
  )

  const [sectionState] = React.useState(() => {
    const sectionValue = getDefaultSectionValue(sectionId)

    return sectionValue
  })

  return {
    initialSectionData: sectionState,
    updateSection
  }
}

const images = [
  {
    display: 'Blue Wilderness',
    value:
      '//target.scene7.com/is/image/Target/Baxter168545-190319_1553004845762?wid=720&qlt=60&fmt=webp'
  },
  {
    display: 'Opalhouse',
    value:
      '//target.scene7.com/is/image/Target/Opalhouse_2168545-190319_1553004815885?wid=720&qlt=60&fmt=webp'
  },
  {
    display: 'Auden',
    value:
      '//target.scene7.com/is/image/Target/Auden168545-190313_1552509736086?wid=720&qlt=60&fmt=webp'
  }
]

const SectionForm = ({ sectionId }: Props) => {
  const { initialSectionData, updateSection } = useForm(sectionId)
  const [state, updateState] = React.useState(initialSectionData)

  React.useEffect(() => {
    updateSection(state)
  }, [state])

  function handleHeadlineChange(header: string) {
    updateState(state => {
      return {
        ...state,
        header
      }
    })
  }

  function handleSubheadChange(subheader: string) {
    updateState(state => {
      return {
        ...state,
        subheader
      }
    })
  }

  function handleImageChange(imageUrl: string) {
    updateState(state => {
      return { ...state, imageUrl }
    })
  }

  return (
    <div>
      <h3>{sectionId}</h3>
      <Select
        defaultValue={initialSectionData.imageUrl}
        onChange={handleImageChange}
        options={images}
        selector={`${sectionId}-image`}
      />
      <Input
        defaultValue={initialSectionData.header}
        label="Headline"
        selector={`${sectionId}-header`}
        onChange={handleHeadlineChange}
      />
      <Input
        defaultValue={initialSectionData.subheader}
        label="Subhead"
        selector={`${sectionId}-subheader`}
        onChange={handleSubheadChange}
      />
    </div>
  )
}

export default SectionForm
