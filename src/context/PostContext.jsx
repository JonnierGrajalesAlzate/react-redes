import { createContext, useState, useEffect } from "react"

export const PostContext = createContext()

function PostProvider({ children }) {
  const [posts, setPosts] = useState([])

  // 🔹 Cargar datos al iniciar
  useEffect(() => {
    const storedPosts = localStorage.getItem("posts")
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts))
    }
  }, [])

  // 🔹 Guardar cada vez que cambian los posts
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts))
  }, [posts])

  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev])
  }

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id))
  }

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider