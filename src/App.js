import React from 'react'
import Navbar from './Componants/Navbar'
import Nature from './Componants/Nature'
import Animations from './Componants/Animations'
import Birds from './Componants/Birds'
import Flower from './Componants/Flower'
import Love from './Componants/Love'
import People from './Componants/People'
import Animals from './Componants/Animals'



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  const MY_ACCESS_KEY = "dLyUrErgugUGG5RdrWb4FBCF9FTl9felEJacgIU6YwU"
  return (
    <Router>
      <Navbar />
      <div style={{backgroundColor:"black"}}>
        <Switch>
          <Route exact path="/"><Nature MY_ACCESS_KEY={MY_ACCESS_KEY}/></Route>
          <Route exact path="/IG/Animations"><Animations MY_ACCESS_KEY={MY_ACCESS_KEY}/></Route>
          <Route exact path="/IG/Love"><Love MY_ACCESS_KEY={MY_ACCESS_KEY}/></Route>
          <Route exact path="/IG/People"><People MY_ACCESS_KEY={MY_ACCESS_KEY}/></Route>
          <Route exact path="/IG/Animals"><Animals MY_ACCESS_KEY={MY_ACCESS_KEY}/></Route>
          <Route exact path="/IG/Birds"><Birds MY_ACCESS_KEY={MY_ACCESS_KEY}/></Route>
          <Route exact path="/IG/Flower"><Flower MY_ACCESS_KEY={MY_ACCESS_KEY}/></Route>
        </Switch>
      </div>
    </Router>
  )
}
