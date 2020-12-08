import React from "react";
import { Profile, Project } from "components";
import dataProject from "data/projects";
import { images } from "assets";

const App: React.FC = () => {
  return (
    <div className="d-flex m-4">
      <div>
        <Profile
          photo={images.avatar}
          email="triluongdl@gmail.com"
          phone="+84346876138"
          name="Luong Xuan Tri"
        />
      </div>
      <div className="w-100 ml-3">
        {dataProject.map((project: any, index: number) => {
          const { ...all } = project;
          return <Project {...all} index={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
