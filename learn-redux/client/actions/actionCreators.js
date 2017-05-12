export function increment(index) {
  console.log("increment ran")
  return {
    type: "INCREMENT_LIKES",
    index
  }
}

export function addComment(postId, author, comment) {
  console.log("add comment ran")
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  }
}

export function removeComment(postId, index) {
  console.log("remove comment ran")
  return {
    type: "REMOVE_COMMENT",
    postId,
    index
  }
}
