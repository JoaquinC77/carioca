export const resetAllStorage = () => localStorage.clear()

export const resetStorageWithoutPlayers = () => {
  localStorage.removeItem('results')
  localStorage.removeItem('rounds')
}

export const findStorageByItem = (item) => {
  return JSON.parse(localStorage.getItem(item))
}
