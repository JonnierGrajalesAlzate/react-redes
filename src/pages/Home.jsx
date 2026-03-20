import { useContext } from "react"
import { PostContext } from "../context/PostContext"
import CreatePost from "../components/CreatePost"
import Post from "../components/Post"

function Home() {
  const { posts } = useContext(PostContext)

  return (
    <div>
      <h1>Mi Red Social 🚀</h1>

      <CreatePost />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Home