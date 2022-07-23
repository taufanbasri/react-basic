import React from "react";

const UserContext = React.createContext("Lubna Tech");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
