import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reduce";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { whithAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

let AuthRedirectComponent = whithAuthRedirect(Dialogs);

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

