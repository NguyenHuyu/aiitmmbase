import React, {} from "react"
import {Routes, Route} from "react-router-dom" 
import './_base.scss'
import { Home, HomeDetails, Introduce, IntroduceDetails, TrainCourse, TrainCourseDetails, TrainDetails, Science, Contact, Cooperate,  ScienceDetails, TrainDetailsDetails} from "./pages/index"
import { ContactList, HomeAdmin, ListCourse, ListHomeLeft, ListHomeRight, ListTraining } from "./Admin/index"


function App() {
  return (
    <div className="app">
      <container className="app__container">
        <Routes>  
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/:id" element={<HomeDetails />} />

            <Route path="gioi-thieu" element={<Introduce />} />
            <Route path="gioi-thieu/:id" element={<IntroduceDetails />} />

            <Route path="dao-tao/details" element={<TrainDetails />} />
            <Route path="dao-tao/details/:id" element={<TrainDetailsDetails />} />
            
            <Route path="dao-tao/khoa-hoc" element={<TrainCourse />} />
            <Route path="dao-tao/khoa-hoc/:id" element={<TrainCourseDetails />} />

            <Route path="nghien-cuu-khoa-hoc" element={<Science />} />
            <Route path="nghien-cuu-khoa-hoc/:id" element={<ScienceDetails />} />

            <Route path="hop-tac" element={<Cooperate />} />

            <Route path="lien-he" element={<Contact />} />

            <Route path="admin" element={<HomeAdmin/>} />
            <Route path="admin/contact-list" element={< ContactList />} />
            <Route path="admin/daotao-list" element={< ListTraining />} />
            <Route path="admin/khoahoc-list" element={< ListCourse />} />
            <Route path="admin/dienbien-list" element={< ListHomeLeft />} />
            <Route path="admin/facebook-list" element={<ListHomeRight/> } />
          </Route>
        </Routes>
      </container>
    </div>
  );
}

export default App;
