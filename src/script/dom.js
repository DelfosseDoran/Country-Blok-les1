import { data, blockAllAction, unblockAllAction } from './countries';
import { Country } from './Country';
import { storage } from './storage';

let cache = {
  available: -1,
  blocked: -1
}

let blockall
let seaschAvailble
let available
let unblockAll
let seaschBlock
let block
let cansle
let save

export const getDomElements = () => {
  blockall = document.querySelector('.js-block-all');
  seaschAvailble = document.querySelector('.js-seasch-available')
  available = document.querySelector('.js-availeble')
  unblockAll = document.querySelector('.js-unblock-all')
  seaschBlock = document.querySelector('.js-seasch-blocked')
  block = document.querySelector('.js-blocked')
  cansle = document.querySelector('.js-cancel')
  save = document.querySelector('.js-save')
  if (!blockall || !seaschAvailble || !available || !unblockAll || !seaschBlock || !block || !cansle || !save) {
    console.log('error')
  }
  return { blockall, seaschAvailble, available, unblockAll, seaschBlock, block, cansle, save }
}

const _showCountries = (type, domElements) => {
  domElements.innerHTML = ''
  //sort the countries alphabaticly
  for (const country in data[type]) {
    // todo click on the button to move the country to the other list
    const c = new Country(data[type][country], country)
    domElements.appendChild(c.genirateLi(type))
    console.log(c)
  }
  // domElements.innerHTML=countries
}

export const render = () => {
  //render the countries
  //to do check of the chache is not emty
  _showCountries('blocked', block)
  _showCountries('available', available)
  // available.innerHTML = availableCountries
  // block.innerHTML = blockedCountries
}

export const lissenToActions = () => {
  blockall.addEventListener('click', () => blockAllAction())
  unblockAll.addEventListener('click', () => unblockAllAction())
  save.addEventListener('click', (e) => { storage.save('Countrys', data) })
}