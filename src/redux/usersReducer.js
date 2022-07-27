let initialStore = {
  users: [
//     {photo: 'https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png',
//       followed: true,
//       id: 1,
//       status: 'Iam RAMBO',
//       fullName: 'Alex I',
//       location: {
//         country: 'Ukraine',
//         city: 'Kyiv'
//     },
//     },
//     {photo: 'https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png',
//       followed: true,
//       id: 2,
//       status: 'Iam a boss',
//       fullName: 'Dmitry K.',
//       location: {
//         country: 'Belarus',
//         city: 'Minsk'
//     },
//     },
//     {photo: 'https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png',
//       followed: false,
//       id: 3,
//       status: 'Iam hot-dog',
//       fullName: 'Sergey G.',
//       location: {
//         country: 'Ukraine',
//         city: 'Dnipro'
//     },
//     },
//     {
// photo: 'https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png',
//       followed: true,
//       id: 4,
//       status: 'Iam Laris',
//       fullName: 'Larisa I.',
//       location: {
//         country: 'Ukraine',
//         city: 'Lugansk'
//       },
//     },

  ],
  newPostText: ''
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const profileReducer = (state = initialStore, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users:state.users.map(user => {
          if(user.id === action.userId){
            return{...user,followed:true}
          }
          return user
        })
  }


  case UNFOLLOW: {
    return {
      ...state,
      users:state.users.map(user => {
        if(user.id === action.userId){
          return{...user,followed:false}
        }
        return user
      })
    }
  }
  case SET_USERS:{
    return{
      ...state,
      users:[...state.users, ...action.users]
    }
  }
  default:
  return state

}

}
export const followAC = (userId) => ({
  type: FOLLOW,
  userId
})
export const unFollowAC = (userId) => ({
  type: UNFOLLOW,
  userId
})
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
})


export default profileReducer