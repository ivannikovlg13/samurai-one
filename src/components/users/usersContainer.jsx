
import { connect } from 'react-redux'
import { followAC,unFollowAC,setUsersAC } from '../../redux/usersReducer'
import Users from './users'

const mapStateToProps = (state) => {
  return{
    users:state.usersPage.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    follow:(userId) => {
      dispatch(followAC(userId))
    },
    unfollow:(userId) => {
      dispatch(unFollowAC(userId))
    },
    setUsers:(users) => {
      dispatch(setUsersAC(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer