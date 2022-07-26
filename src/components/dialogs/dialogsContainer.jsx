
import { connect } from 'react-redux';
import { addPostMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';


const mapStateToProps = (state) => {
  return {
  dialogsPage: state.dialogsPage,
  onMessageText:state.dialogsPage.onMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPostMessage: () => {
      dispatch(addPostMessageActionCreator)
    },
    messageChange:(body) => {
      let action = updateNewMessageTextActionCreator(body)
      dispatch(action)
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer