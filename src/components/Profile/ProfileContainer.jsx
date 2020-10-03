import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reduce'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { whithAuthRedirect } from '../../hoc/withAuthRedirect';

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

let AuthRedirectComponent = whithAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithUrlDataConteinerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataConteinerComponent);

