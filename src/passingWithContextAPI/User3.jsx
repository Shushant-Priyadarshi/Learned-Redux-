import { useContext } from "react"
import { UserContext } from "./User1"


const User3 = () => {
    const User1Data = useContext(UserContext)
  return (
    <h1>{`I am User 3 This is the data from User 1:${User1Data} `}</h1>
  )
}

export default User3