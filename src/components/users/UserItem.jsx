import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function UserItem({ user, w }) {
  return (
    <div className={`card shadow-2xl compact ${w && w} bg-neutral`}>
      <div className="card-body space-x-4 flex-row items-center">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={user.avatar_url} alt="Profile-of-Github-User" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{user.login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${user.login}`}
          >
            Peek
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
