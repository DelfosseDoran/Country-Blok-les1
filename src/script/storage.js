//iife || self invoking function
export const storage=(() => {
    const save = (key, value) => { localStorage.setItem(key, JSON.stringify(value)) }
    const get = key => JSON.parse(localStorage.getItem(key))
    return { save, get }
})()