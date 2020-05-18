export default {
  addToCart(state, payload) {
    payload.check = true
    payload.count = 1
    state.cartList.push(payload)
  },
  addCount(state, payload) {
    payload.count += 1
  },
  changeCheck(state, payload){
    payload.check = !payload.check
  },
  clearCheck(state){
    state.cartList.forEach(item => item.check = false)
  },
  allCheck(state){
    state.cartList.forEach(item => item.check = true)
  }
}