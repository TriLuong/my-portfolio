import React from "react";
import { Profile, Project } from "components";
import dataProject from "data/projects";

const App: React.FC = () => {
  return (
    <div className="d-flex m-4">
      <div>
        <Profile
          photo="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/footballers-lionel-messi-512.png"
          email="triluongdl@gmail.com"
          phone="+84346876138"
          name="Luong Xuan Tri"
        />
      </div>
      <div className="w-100 ml-3">
        {dataProject.map((project: any) => {
          const { ...all } = project;
          return <Project {...all} />;
        })}
      </div>
    </div>
  );
};

export default App;
