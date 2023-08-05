import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Select = ({ items, onSelect, selected }) => {
  return (
    <select className='select' value={selected} onChange={onSelect}>
      {items.map((item, index) => (
        <option key={item.id} value={index}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

Select.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}

export default Select
