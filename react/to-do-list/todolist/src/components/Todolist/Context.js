import React from 'react'

export default React.createContext({
    item: "",
    arrItem: "",
    setItem: (name) => { },
    setArrItem: (name) => { },
    fetchData: (name) => { }
})