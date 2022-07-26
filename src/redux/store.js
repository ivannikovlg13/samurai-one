import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import navbarReducer from "./navbarReducer"


const store = {
  _callSubscriber() {
    console.log('Iam rerender function')
  },
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
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
    },
    navbarPage: {
      friends: [{
          userAvatar: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png'
        },
        {
          userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVifs4CS5Nha_6eu3lapu55pAgkuAPwpz-UJgdH5sCqzF7rSiPDpj2bXWwCvau-92TJwY&usqp=CAU'
        },
        {
          userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvQ-b7dNq5eQFTTMcUB7My6WTrOxf0ItkyDyUhQHodBMxPNDFgoAI3XbyIvQ4ix5I9hs&usqp=CAU',
        },
      ],
      links: [{
          name: 'Profile',
          path: '/profile',
        },
        {
          name: 'Dialogs',
          path: '/dialogs',
        },
        {
          name: 'News',
          path: '/news',
        },
        {
          name: 'Music',
          path: '/music',
        },
        {
          name: 'Settings',
          path: '/settings',
        },

      ],
    },

  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },


  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage,action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
    this._state.navbarPage = navbarReducer(this._state.navbarPage,action)
    this._callSubscriber(this._state)
  },
}

export default store