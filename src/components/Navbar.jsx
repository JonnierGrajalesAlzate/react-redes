import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Navbar() {
  const { user, logout } = useContext(AuthContext)

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MiRedSocial</h2>

      <div style={styles.menu}>
        <Link to="/" style={styles.link}>Inicio</Link>

        {user ? (
          <>
            <span>{user.name}</span>
            <span onClick={logout} style={{ cursor: "pointer" }}>
              Cerrar sesión
            </span>
          </>
        ) : (
          <Link to="/login" style={styles.link}>Login</Link>
        )}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1877f2",
    color: "white"
  },
  logo: {
    margin: 0
  },
  menu: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
}

export default Navbar