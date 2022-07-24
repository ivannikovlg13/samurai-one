let initialStore = {
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
  }

const navbarReducer = (state = initialStore,action) => {
  return state
}

export default navbarReducer