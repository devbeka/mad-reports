import server from './Server'

export async function getDataTables(tableName) {
  const response = await server.get(tableName)
  return response.data
}
