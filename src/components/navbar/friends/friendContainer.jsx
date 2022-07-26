import { connect } from 'react-redux';
import Friends from './friends';

const mapStateToProps = (state) => {
  return {
    navbarPage:state.navbarPage
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer