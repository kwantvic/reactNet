import profileReduce, { addPostActionCreator } from "./profile-reduce";

it("new post should be added", () => {
  let action = addPostActionCreator("this is just test")

  let state = {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 5 },
      { id: 2, message: "It's my first post!!!", likesCount: 16 },
    ]
  };

  let newState = profileReduce(state, action);

  newState.posts.length === 3
});
