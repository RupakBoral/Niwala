import { createContext } from "react";

const userContext =  createContext({
    loggedInUser : "Rupak"
})

// console.log(typeof(userContext));

export default userContext ;