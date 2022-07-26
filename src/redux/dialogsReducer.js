let initialStore =  {
    dialogs: [{
        id: 1,
        name: 'Alex',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU',
      },
      {
        id: 2,
        name: 'Ilona',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JyAdVmnNwzzyLlOaUNYeBy31JKOD9OwNPA&usqp=CAU',
      },
      {
        id: 3,
        name: 'Amelia',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKWW5mUhFhH2VXdkADoYFRUro2k0wn2eNPA&usqp=CAU',
      },
      {
        id: 4,
        name: 'Larisa',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PDNKKD_KGnjnuckRGUiSpOxlmLT6R_KXMA&usqp=CAU',
      },
      {
        id: 5,
        name: 'Sergey',
        avatar: 'https://www.whatsappimages.in/wp-content/uploads/2021/12/Free-Black-Profile-Images-Wallpaper-Free.jpg',
      },
      {
        id: 6,
        name: 'Lida',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11qgyXCpko-0jWtn_oNVQF7-IZYLDAFr1EQ&usqp=CAU',
      },
    ],
    messages: [{
        list: 'Hi',
        icon: 'https://iconarchive.com/download/i94479/blackvariant/button-ui-system-apps/Messages-2.ico',
      },
      {
        list: 'How are you?',
        icon: 'https://iconarchive.com/download/i94479/blackvariant/button-ui-system-apps/Messages-2.ico',
      },
      {
        list: 'I want to become a doctor',
        icon: 'https://iconarchive.com/download/i94479/blackvariant/button-ui-system-apps/Messages-2.ico',
      },
      {
        list: 'Yo',
        icon: 'https://iconarchive.com/download/i94479/blackvariant/button-ui-system-apps/Messages-2.ico',
      },
      {
        list: 'Yo2',
        icon: 'https://iconarchive.com/download/i94479/blackvariant/button-ui-system-apps/Messages-2.ico',
      },
      {
        list: 'Yo3',
        icon: 'https://iconarchive.com/download/i94479/blackvariant/button-ui-system-apps/Messages-2.ico',
      },
      {
        list: 'Yo6',
        icon: 'https://iconarchive.com/download/i94479/blackvariant/button-ui-system-apps/Messages-2.ico',
      },
      {
        list: 'Yo55',
        icon: 'https://iconarchive.com/download/i94479/blackvariant/button-ui-system-apps/Messages-2.ico',
      },
      {
        list: 'Yo66',
        icon: 'https://iconarchive.com/download/i94479/blackvariant/button-ui-system-apps/Messages-2.ico',
      },
    ],
    onMessageText: ''
  }

const ADD_POSTS_MESSAGE = 'ADD-POSTS-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


const dialogsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_POSTS_MESSAGE:
      let stateCopy = {
        ...state,
        onMessageText: '',
        messages: [...state.messages, {
          list: state.onMessageText,
          icon: 'https://iconarchive.com/download/i94479/blackvariant/button-ui-system-apps/Messages-2.ico',
        }]
      }
      return stateCopy
    
    case UPDATE_NEW_MESSAGE_TEXT:{
      let stateCopy = {
        ...state,
        onMessageText:action.newMessage
      }
      return stateCopy
    }
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