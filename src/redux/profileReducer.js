let initialStore = {
    postData: [{
        id: 1,
        message: 'How are you?',
        likesCount: 130,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUg6Eeu3fdwd2GYFK_q0QVGCuowN3CbuyPo3x798pvx9f9FWs040ghDUx3kB-vUmnOng&usqp=CAU',
      },
      {
        id: 2,
        message: 'Iam Okey',
        likesCount: 520,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUg6Eeu3fdwd2GYFK_q0QVGCuowN3CbuyPo3x798pvx9f9FWs040ghDUx3kB-vUmnOng&usqp=CAU',
      },
      {
        id: 3,
        message: 'Blablabla',
        likesCount: 777,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUg6Eeu3fdwd2GYFK_q0QVGCuowN3CbuyPo3x798pvx9f9FWs040ghDUx3kB-vUmnOng&usqp=CAU',
      },
      {
        id: 4,
        message: 'Ululu',
        likesCount: 123,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUg6Eeu3fdwd2GYFK_q0QVGCuowN3CbuyPo3x798pvx9f9FWs040ghDUx3kB-vUmnOng&usqp=CAU',
      },
    ],
    newPostText: ''
  }

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUg6Eeu3fdwd2GYFK_q0QVGCuowN3CbuyPo3x798pvx9f9FWs040ghDUx3kB-vUmnOng&usqp=CAU',
      }
      state.postData.push(newPost)
      state.newPostText = ''
      return state

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default: return state
  }

}
export const addPostActionCreator = () => ({
  type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer