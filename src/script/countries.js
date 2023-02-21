import { get } from './network'
import { render } from './dom'

export const data = {
    blocked: {
    },
    available: {},
}

//todo
//get json data from endpoint when not saved lokaly
export const getCountries = async () => {
    const dataCountry = await get('./src/assets/backup-data.json')
    //populateCountries in available
    // console.log( await get('../assets/backup-data.json'))
    console.log({ dataCountry })
    for (const country of dataCountry) {
        data.available[country.alpha2Code] = country.name
    }
    console.log({ data })
    render()
}
export const toggleCountry = (countryCode, origan) => {
    //move country from blocked to available
    console.log({ countryCode })
    console.log({ origan })
    const destination = origan === 'available' ? 'blocked' : 'available'
    //move country from available to blocked
    data[destination][countryCode] = data[origan][countryCode]
    delete data[origan][countryCode]
    render()
}

//move all countries from available to blocked
export const blockAllAction = () => {
    console.log('block all')
    for (const country in data.available) {
        toggleCountry(country, 'available')
    }
    render()
}
export const unblockAllAction = () => {
    console.log('unblock all')
    for (const country in data.blocked) {
        toggleCountry(country, 'blocked')
    }
    render()
}
//move all countries from blocked to available