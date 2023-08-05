import React from 'react'
import './styles.scss'

const ReportItem = ({ data, header }) => {
  const formatCell = (value, column) => {
    const { align, type } = column
    let textPosition = ''

    if (align) {
      textPosition = `table__item_${align}`
    } else {
      switch (type) {
        case 'float':
        case 'integer':
          textPosition = 'table__item_right'
          break
        case 'boolean':
          textPosition = 'table__item_center'
          return (<div className={`table__item ${textPosition}`}>{String(value)}</div>)
        default:
          textPosition = 'table__item_left'
          break
      }
    }
    return <div className={`table__item ${textPosition}`}>{value}</div>
  }

  return (
    <table className='table'>
      <thead className='table__header'>
        <tr>
          {header.map((column) => (
            <th key={column.id}>{column.caption}</th>
          ))}
        </tr>
      </thead>
      <tbody className='table__body'>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className='table__line'>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className='table__item'>
                {typeof cell === 'object'
                  ? formatCell(cell.d, header[cellIndex])
                  : formatCell(cell, header[cellIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ReportItem
