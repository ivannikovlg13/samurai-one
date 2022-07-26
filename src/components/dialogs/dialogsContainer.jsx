
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
      dispatch(addPostMessageActionCreator())
    },
    messageChange: (text) => {
      let action = updateNewMessageTextActionCreator(text)
      dispatch(action)
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer