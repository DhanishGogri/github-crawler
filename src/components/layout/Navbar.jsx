import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function Navbar({ title }) {
  return (
    <nav className="navbar mb-10 shadow-lg bg-neutral-focus text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="font-bold text-lg align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end ">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn mx-2">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn mx-2">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
}

Navbar.defaultProps = {
  title: "GitHub Crawler",
}
export default Navbar
