import React from 'react'
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

export default Select
