export const findPost = (post = [], postId) =>
  post.find(foundPost => foundPost.id === postId);
