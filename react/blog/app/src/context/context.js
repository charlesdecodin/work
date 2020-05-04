import React from 'react'

export default React.createContext({
    user: "",
    users: "",
    posts: "",
    comments: "",
    setUser: (name) => { },
    setUsers: (name) => { },
    setPosts: (name) => { },
    setComments: (name) => { }
})