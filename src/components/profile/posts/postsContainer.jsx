import { connect } from 'react-redux';
import MyPosts from './posts';
import { updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer';

const mapStateToProps = (state) => {
  return {
  posts:state.profilePage.postData,
  newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action)
    },
    addPost:() => {
      dispatch(addPostActionCreator())
    }

  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer

