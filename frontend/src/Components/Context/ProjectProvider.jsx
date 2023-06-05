import React, { createContext, useContext, useEffect, useState } from "react";
import { loadData } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = loadData("userInfo");

    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <ProjectContext.Provider value={{ user, setUser }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const ProjectState = () => {
  return useContext(ProjectContext);
};

export default ProjectProvider;
