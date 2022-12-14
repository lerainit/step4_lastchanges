import { incrementLikes, decrementLikes, setCounter } from "./actions";

const initialValue = {
  counter: [],
  isLoading: true
}

const likesReducer = (state = initialValue, action) => {

  switch (action.type) {
    case setCounter: {

      return { counter: action.payload, isLoading: false }
    }
    case incrementLikes: {
      let productsArr = action.payload.counter
   
      let products = productsArr[action.payload.userIndex].posts
      let likes = products[action.payload.index].likes


      products[action.payload.index].likes = likes + 1


      let index = action.payload.index

      fetch(`http://localhost:3001/posts/likes/${index}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post: products[action.payload.index], userIndex: action.payload.userIndex })
      })


     

      return { counter: productsArr, isLoading: false }
    }



    case decrementLikes: {
      let productsArr = action.payload.counter
      let products = productsArr[action.payload.userIndex].posts
      let likes = products[action.payload.index].likes


      products[action.payload.index].likes = likes - 1


    

      return { counter: productsArr, isLoading: false }
    }
    default: {
      return state
    }


  }



}
export default likesReducer