import { useState, useContext } from "react"
import { PostContext } from "../context/PostContext"

function Post({ post }) {
  const { deletePost } = useContext(PostContext)

  const [likes, setLikes] = useState(post.likes)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState(post.comments)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  const handleComment = () => {
    if (!comment.trim()) return
    setComments([...comments, comment])
    setComment("")
  }

  const handleDelete = () => {
    deletePost(post.id)
  }

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h4>{post.author}</h4>
      <p>{post.content}</p>

      {/* 📸 Imagen */}
      {post.image && (
        <img src={post.image} alt="post" width="300" />
      )}

      <br />

      <button onClick={handleLike}>❤️ {likes}</button>
      <button onClick={handleDelete}>🗑️ Eliminar</button>

      <div>
        <input
          type="text"
          placeholder="Comentario..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleComment}>Comentar</button>
      </div>

      {comments.map((c, i) => (
        <p key={i}>💬 {c}</p>
      ))}
    </div>
  )
}

export default Post