'use strict'

// Input value > cashLeft to donate
// When cashLeft = 0 -> print text on cash box


// Selections
const appBox = document.querySelector('.app-box')
const donatedBar = document.querySelector('.donated-bar');
const ctaText = document.querySelector('.cta-text')
const ctaSpanPpl = document.querySelector('.span-ppl')
const cashLabel = document.querySelector('.cash-label')
const cashLeft = document.querySelector('.cash-span')
const input = document.querySelector('.input')
const donateBtn = document.querySelector('.donate-btn')



let state = {
    moneyReq: 1000,
    donations: [100],
    donationsSum: function() {
        
        const newArr = this.donations.reduce((prev, next) => prev + next, 0)
        if (newArr > this.moneyReq) return
        return newArr
    }
}
    
    
// Finds out the percentage for the donation bar
const percentage = (partialValue, totalValue) =>  {
    return (100 * partialValue) / totalValue;
 } 

 // Donation bar loader
 const loadBar = () => {
    if(+input.value > state.moneyReq) return
    const percent = percentage(state.donationsSum(), state.moneyReq)

    donatedBar.value = `${percent}`
}

const loadCashSpan = () => {
    const left = state.moneyReq - state.donationsSum()
    cashLeft.textContent = left
}

const mockFetch = () => {
    cashLeft.textContent = state.moneyReq - state.donationsSum()
}

const init = async () => {
    try{
        mockFetch()
        loadBar()
        loadCashSpan()
        if(state.donationsSum() > state.moneyReq -1 || state.donationsSum() == state.moneyReq) {
            cashLabel.closest('div').style.backgroundColor = "#ef5f3b"
            cashLabel.style.fontWeight = '600'
            cashLabel.textContent = '🎉 🎉 🎉   Donation finished!  🎉 🎉 🎉  Thank you for participating'
            return
        }
        if( input.value > state.moneyReq ) {
            throw new Error(err)
                
            
        }
    } catch(err) {
        cashLabel.textContent = 'Something went wrong'
        
    } finally {
        setTimeout(() => {
            mockFetch()
            loadBar()
            loadCashSpan()
            
        }, 1000);
    }
}

init()

donateBtn.addEventListener('click', function() {
    const value = +input.value
    const moneyLeftToDonate = state.moneyReq - state.donationsSum()
 
    state.donations.push(value)
    console.log(state)
    init()


    // appBox.classList.add('hidden')
})




// if(state.donationsSum() == state.moneyReq) return
// if(value > state.moneyReq - state.donationsSum()) {
//     cashLabel.textContent = `Please donate no more than $${cashLeft.textContent}`
    
//     return
// } else {
//     cashLabel.textContent = `$${state.moneyReq - donationsSum()}`
//     state.donations.push(value)
// }









// Number(ctaText.children[0].textContent)

// const state = {
//     donations: [100, 100, 50, 50],
//     moneyRequired: '',
// }

// // const moneyRequired = 1000 
// // const donations = [100, 100, 50, 50]
// const donationsSum = state.donations.reduce((prev, next) => prev + next, 0)

// const people = state.donations.length
// ctaSpanPpl.textContent= people
// console.log(donationsSum)

// state.moneyRequired = 1000;

// const moneyDonated = state.moneyRequired - donationsSum 
// const render = (required, donationsSum) => {
    
// }

// // const moneyDonated = state.moneyRequired - donationsSum 
// console.log(moneyDonated)

// const percentage = (partialValue, totalValue) =>  {
//     return (100 * partialValue) / totalValue;
//  } 

// const changeValue = () =>{
//     const newVal = percentage(donationsSum, state.moneyRequired)
//     // console.log(newVal)
//     donatedBar.value = `${newVal}`
//     cashLeft.textContent = moneyDonated
// }

// const update =() => {
//     const value = document.querySelector('.input').value
//     state.donations.push(Number(value))

//     // console.log(newState)
//     changeValue()


//     console.log(state.donations)

//     appBox.classList.add('hidden')
//     const html =`
//     <div class="thank-you center-text">
//         <h1>Thank you for donating for this project!</h1>
//     </div>
//     `
//     document.querySelector('.container').insertAdjacentHTML('beforeend', html)




//     setTimeout(() => {
//         document.querySelector('.thank-you').classList.add('hidden')
//         appBox.classList.remove('hidden')
//     }, 3000);
// }

// donateBtn.addEventListener('click', update)

// // Logic

// if (ctaSpanPpl.textContent == 0 ) {
//     ctaText.textContent = `Be the first to donate to this incredible project. Every dollar helps.`
// }