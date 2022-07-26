import { connect } from 'react-redux';
import Links from './links';


const mapStateToProps = (state) => {
  return {
    navbarPage:state.navbarPage
  }
}

const LinksContainer = connect(mapStateToProps)(Links)

export default LinksContainer