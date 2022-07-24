const ADD_POSTS_MESSAGE = 'ADD-POSTS-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_POSTS_MESSAGE:
      let newMessage = {
        list: state.onMessageText,
        icon: 'https://iconarchive.com/download/i94479/blackvariant/button-ui-system-apps/Messages-2.ico',
      }
      state.messages.push(newMessage)
      state.onMessageText = ''
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.onMessageText = action.newMessage
      return state
    default:
      return state
  }

}
export const addPostMessageActionCreator = () => ({
  type: ADD_POSTS_MESSAGE
})



export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text
})

export default dialogsReducer