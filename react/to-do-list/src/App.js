import React, { useState } from 'react';
/* import Todo from './components/firstComponent.js' */
import Input from './components/input'
import List from './components/todolist'
import Navbar from './components/navbar';


function App() {
  const [items, setItems] = useState([])


  const createItems = (txt, setTxt) => {
    setItems([...items, txt])
    console.log(items);
    setTxt('')
  }

  return (
    /*  <Todo /> */
    <>
      <Navbar />
      <Input
        exporter={createItems}
        getItems={setItems}

      />
      <div className="container-fluid px-5">
        <List
          importerItems={items}
          importerSetItems={setItems}
        />
      </div>




    </>
  );
}

export default App;
