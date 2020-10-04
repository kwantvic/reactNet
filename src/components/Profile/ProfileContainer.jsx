import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reduce'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { whithAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8471
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    whithAuthRedirect
)(ProfileContainer);
