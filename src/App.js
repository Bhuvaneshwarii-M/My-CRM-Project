import React from "react";
import './App.css';
//import {Entry} from "./page/entry/EntryPage.js";
import { DefaultLayout } from "./layout/DefaultLayout.js";
import { Dashboard } from "./page/dashboard/Dashboard.js";
import { AddProject } from "./page/newProject/AddProject.js";
import { ProjectList } from "./page/project-listing/ProjectList.js";
function App() {
  return (
    <div className="App">
    
     
      <DefaultLayout>  <Dashboard/></DefaultLayout>
      <AddProject/>
      <ProjectList/>
    </div>
  );
}

export default App;
