import { FaBolt } from "react-icons/fa"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w lg">
          <div className="text-5xl font-bold">
            <h1 className="mb-8">Whoops!</h1>
            <p className="text-3xl mb-8">404 - Page Nahi Mila Bro!</p>
            <Link to="/" className="btn btn-primary btn-lg">
              <FaBolt className="mr-2" />
              Wapas chal BSDK!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
