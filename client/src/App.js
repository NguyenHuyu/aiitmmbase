import React, {} from "react"
import {Routes, Route} from "react-router-dom" 
import './_base.scss'
import { Home, Introduce, Train, TrainCourse, TrainDetails, Science, Contact, Cooperate} from "./pages/index"
import { ContactList, HomeAdmin, ListHomeLeft, ListHomeRight } from "./Admin/index"



function App() {
  return (
    <div className="app">
      <container className="app__container">
        <Routes>  
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="gioi-thieu" element={<Introduce />} />
            <Route path="dao-tao" element={<Train />} />
            <Route path="dao-tao/e" element={<TrainCourse />} />
            <Route path="dao-tao/khoa-hoc" element={<TrainDetails />} />
            <Route path="nghien-cuu-khoa-hoc" element={<Science />} />
            <Route path="hop-tac" element={<Cooperate />} />
            <Route path="lien-he" element={<Contact />} />
            <Route path="admin" element={<HomeAdmin/>} />
            <Route path="admin/contact-list" element={< ContactList />} />
            <Route path="admin/dienbien-list" element={< ListHomeLeft />} />
            <Route path="admin/facebook-list" element={<ListHomeRight/> } />
          </Route>
        </Routes>
      </container>
    </div>
  );
}

export default App;
