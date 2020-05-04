import React, { useState } from 'react';
import Context from "./context/context"
import Posts from "./components/Posts"
import Header from "./components/Header"
import Users from "./components/Users"
import User from "./components/User"
import Comment from "./components/Comment"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  //defined context
  const context = {
    user,
    users,
    posts,
    comments,
    setUser,
    setUsers,
    setPosts,
    setComments
  }

  return (
    <div style={{ backgroundColor: '#F2F2F2' }}>
      <Context.Provider value={context}>
        <Router>
          <Header />
          <Switch>
            {/* Route All Posts */}
            <Route path="/posts">
              <Posts />
            </Route>
            {/* Route All Users */}
            <Route path="/users">
              <Users />
            </Route>
            {/* Route each users */}
            {users.map((item) =>
              <Route key={item.id} path={`/${item.id}`}>
                <User id={item.id} />
              </Route>
            )}
            {/* Route each Posts */}
            {posts.map((item) =>
              <Route key={item.id} path={`/comment/${item.id}`}>
                <Comment id={item.id} />
              </Route>
            )}
          </Switch>

        </Router>
      </Context.Provider>
    </div>




  );
}

export default App;
