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
  //console.log(carts)
  //console.log(listings)
    let arr=[]
    for(let cart of carts){
        let total=0
      for(let item of cart.items){
        for(let listing of listings){
           if (listing.name==item){
             total+=listing.price
          }
        }

      }
      arr.push(total)
    }
    //return arr
    console.log(arr)
  }

module.exports = {
  listing,
  cart,
  calculateTotals
}
