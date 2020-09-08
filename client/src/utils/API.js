import axios from 'axios';

export default {
  allPosts: async () => {
    try {
      return await axios.get('https://app-factory-api.herokuapp.com/api/posts')
    } catch (err) {
      console.error('ERROR - API.js - allPosts', err);
    }
  },
  likePost: async (postId, userId) => {
    try {
      return await axios.put('https://app-factory-api.herokuapp.com/api/posts/like', {
        postId,
        userId
      })
    } catch (err) {
      console.error('ERROR - API.js - allPosts', err);
    }
  }
}