import { useState, useContext } from "react"
import { PostContext } from "../context/PostContext"

function CreatePost() {
  const [text, setText] = useState("")
  const { addPost } = useContext(PostContext)

  const handlePost = () => {
    if (!text.trim()) return

    const newPost = {
      id: Date.now(),
      content: text,
      author: "Usuario",
      likes: 0,
      comments: []
    }

    addPost(newPost)
    setText("")
  }

  return (
    <div>
      <textarea
        placeholder="Escribe algo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      <button onClick={handlePost}>Publicar</button>
    </div>
  )
}

export default CreatePost