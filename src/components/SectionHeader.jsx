import React from 'react'

const SectionHeader = ({tinyText,mainText}) => {
  return (
    <div className='section-header-container text-center py-4'>
      {tinyText && <h6>{tinyText}</h6>}
      {mainText && <h2>{mainText}</h2>}
    </div>
  )
}

export default SectionHeader
