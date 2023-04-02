import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"
import { searchUsers } from "../../context/github/GithubActions"

// ${
//    users.length === 0 ? "place-items-center" : ""
//}

function UserSearch() {
  const [text, setText] = useState("")

  // Brings in the github crud context
  const { users, dispatch } = useContext(GithubContext)

  // Brings in the alertContext
  const { setAlert } = useContext(AlertContext)

  //Handles the searchbar
  const changeHandler = (e) => setText(e.target.value)

  //Handles submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text === "") {
      setAlert("Please type something.", "error")
    } else {
      dispatch({
        type: "SET_LOADING",
      })
      const users = await searchUsers(text)
      dispatch({
        type: "GET_USERS",
        payload: users,
      })
      setText("")
    }
  }

  return (
    <div
      className={`grid grid-cols-1 ${
        users.length > 0 ? "xl:grid-cols-2" : "xl:grid-cols-1"
      } lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8`}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 input-lg bg-neutral-focus text-neutral-content"
                placeholder="search"
                value={text}
                onChange={changeHandler}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-none w-36 btn btn-primary btn-lg"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() =>
              dispatch({
                type: "CLEAR_USERS",
              })
            }
            className="btn btn-ghost btn-lg"
          >
            clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
