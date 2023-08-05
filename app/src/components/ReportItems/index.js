import React, { useEffect, useState } from 'react'
import { getDataTables } from '../../services/getDataTables'
import Loader from '../Loader'
import ReportTable from '../ReportItem'
import Select from '../Select'

import './styles.scss'

const dataOptions = [
  { id: 0, label: 'Project profit', requestName: 'projectProfit' },
  { id: 1, label: 'Developers', requestName: 'donation' },
  { id: 2, label: 'Donations', requestName: 'devs' }
]

const ReportItems = () => {
  const [tableHeader, setTableHeader] = useState([])
  const [tableData, setTableData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedItem, setSelectedItem] = useState(0)

  const handleDataChange = (e) => {
    const index = e.target.value
    const tableName = dataOptions[index].requestName

    getInitialData(tableName)

    setSelectedItem(index)
  }

  const getInitialData = async (value) => {
    const tableName = value ? value : dataOptions[0].requestName
    setIsLoading(true)

    try {
      const data = await getDataTables(tableName)
      setTableHeader(data.header)
      setTableData(data.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getInitialData()
  }, [])

  return (
    <div className='main-block'>
      <Select
        items={dataOptions}
        onSelect={handleDataChange}
        selected={selectedItem}
      />
      {isLoading ? (
        <div className='main-block__loading'>
          <Loader />
        </div>
      ) : (
        <ReportTable data={tableData} header={tableHeader} />
      )}
    </div>
  )
}

export default ReportItems
