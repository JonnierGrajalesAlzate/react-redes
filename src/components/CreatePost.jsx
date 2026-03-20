import { useState, useContext } from "react"
import { PostContext } from "../context/PostContext"

function CreatePost() {
  const [text, setText] = useState("")
  const [image, setImage] = useState(null)
  const { addPost } = useContext(PostContext)

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result) // convierte a base64
    }
    reader.readAsDataURL(file)
  }

  const handlePost = () => {
    if (!text.trim() && !image) return

    const newPost = {
      id: Date.now(),
      content: text,
      author: "Usuario",
      likes: 0,
      comments: [],
      image: image
    }

    addPost(newPost)
    setText("")
    setImage(null)
  }

  return (
    <div>
      <textarea
        placeholder="Escribe algo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      <input type="file" accept="image/*" onChange={handleImage} />

      <br />

      <button onClick={handlePost}>Publicar</button>

      {image && (
        <div>
          <p>Vista previa:</p>
          <img src={image} alt="preview" width="200" />
        </div>
      )}
    </div>
  )
}

export default CreatePost