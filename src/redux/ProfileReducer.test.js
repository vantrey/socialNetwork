import React from 'react';
import profileReducer, {addNewPostActionCreator} from "./profileReducer"

const state = {
  profile: null,
  profilePosts: [
    {id: 1, message: 'Hey Hi! It\'s first mesagge', likeCount: 20},
    {id: 2, message: 'Hey It\'s second!!!', likeCount: 3},
    {id: 3, message: 'Hey It\'s third!!!', likeCount: 65},
    {id: 4, message: 'Hey It\'s 4th!!!', likeCount: 1}
  ],
  status: '',
}

test('posts length should be increase', () => {

  const action = addNewPostActionCreator('lala')

  const newState = profileReducer(state, action)

  expect(newState.profilePosts.length).toBe(5);
});
