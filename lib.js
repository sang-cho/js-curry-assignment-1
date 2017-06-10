'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals = listings => carts => {
    let arr=[]
    for(let cart of carts){
        let custTot={customer: cart.customer}
        let total=0
      for(let item of cart.items){
        for(let listing of listings){
           if (listing.name===item){
             total+=listing.price
          }
        }

      }
      custTot.total=total
      arr.push(custTot)
    }
    return arr
  }

module.exports = {
  listing,
  cart,
  calculateTotals
}
