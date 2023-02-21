import { toggleCountry } from './countries';

export class Country {
    constructor(name, code) {
        this.name = name;
        this.code = code;
        this.flag = `https://flagcdn.com/${code.toLocaleLowerCase()}.svg`;
    }

    genirateLi(List) {
        const li = document.createElement('li');
        li.classList.add('c-button-country', 'o-flex', 'u-flex-align-center', 'u-space-between');

        const button = document.createElement('button');
        // button.classList.add('c-country');

        li.innerHTML += `
        <div class="o-flex u-flex-gap-05 u-flex-align-center">
        <img class="c-country-flag" src="${this.flag}" alt="flag of ${this.name}">
        <span>${this.name}</span>
        </div>`
        if (List === 'available') {
            button.innerHTML += `
            <svg class="c-button-arow">
            <path d="m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z" />
            </svg>`
        }
        else {
            button.classList.add('c-button-arow')
            button.innerHTML += `
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" />
                </svg>`
        }

        button.addEventListener('click', () => {
            console.log('click ', this.name)
            toggleCountry(this.code, List)
        })
        li.appendChild(button);
        return li
    }
}