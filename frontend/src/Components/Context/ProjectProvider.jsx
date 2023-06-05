import React, { createContext, useEffect, useState } from "react";
import { loadData } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = loadData("userInfo");
    setUser(userInfo);

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

export default ProjectProvider;
