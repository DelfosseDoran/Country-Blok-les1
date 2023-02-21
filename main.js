import './src/style/screen.scss'
import { getDomElements, lissenToActions, render } from './src/script/dom'
import { data, getCountries } from './src/script/countries'
import { storage } from './src/script/storage'

// get all dom elements
const { blockall, seaschAvailble, available, unblockAll, seaschBlock, block, cansle, save } = getDomElements()

// const renderCountrys = data                

// get all data
if (storage.get('Countrys')) {
  //set countries from storage
  let testdata = storage.get('Countrys')
  data.blocked = testdata.blocked
  data.available = testdata.available
  render()
} else {
  getCountries()
}
lissenToActions()
// console.log(data)
// populateCountries(data)
