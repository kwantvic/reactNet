import { profileAPI, userAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 5 },
    { id: 2, message: "It's my first post!!!", likesCount: 16 },
  ],
  profile: null,
  status: '',
}

const profileReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
})
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setSatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await userAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}

// export const getStatus = (userId) => (dispatch) => {
//   profileAPI.getStatus(userId).then((response) => {
//     dispatch(setSatus(response.data));
//   });
// };

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setSatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setSatus(status))
  }
}

export default profileReduce
