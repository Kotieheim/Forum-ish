import config from "../config";

const PostApiService = {
  getPosts() {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(error => Promise.reject(error)) : res.json()
    );
  },
  getFullPost(postId) {
    return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(error => Promise.reject(error)) : res.json()
    );
  },
  getPostComments(postId) {
    return fetch(`${config.API_ENDPOINT}/posts/${postId}/comments`, {
      headers: {}
    }).then(res => {
      !res.ok ? res.json().then(error => Promise.reject(error)) : res.json();
    });
  }
};

export default PostApiService;
