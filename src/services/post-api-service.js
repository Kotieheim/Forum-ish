import config from "../config";
import TokenService from "../services/token-service";

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
      if (!res.ok) {
        return res.json().then(error => Promise.reject(error));
      }
      return res.json();
    });
  },
  postComment(postId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        post_id: postId,
        text: text
      })
    }).then(res => {
      if (!res.ok) {
        return res.json().then(error => Promise.reject(error));
      }
      return res.json();
    });
  }
};

export default PostApiService;
