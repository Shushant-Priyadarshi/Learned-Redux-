import { createContext } from "react"
import User2 from "./User2"

export const UserContext = createContext();

const User1 = () => {
    const data = "I AM THE DATA FROM USER 1";
  return (
    <UserContext.Provider value={data}>
    <User2/>
    </UserContext.Provider>
  )
}

export default User1