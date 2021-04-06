const abv = 'abv'
const ibu = 'ibu'
const ebc = 'ebc'

export const catalogSort = (catalog, sortType) => {
  switch(sortType) {
    case abv:
      return catalog.sort((a, b) => a.abv > b.abv ? 1 : -1)
    case ibu:
      return catalog.sort((a, b) => a.ibu > b.ibu ? 1 : -1)
    case ebc:
      return catalog.sort((a, b) => a.ebc > b.ebc ? 1 : -1)
    default:
      return catalog
  }
}