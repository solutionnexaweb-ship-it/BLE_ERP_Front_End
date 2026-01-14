import api from "./axios";

export const getProjects = () => {
    return api.get("/project");
}

export const getProjectById = (id) => {
    return api.get(`/project/${id}`);
}

export const createProject = (projectData) => {
    return api.post("/project", projectData);
}
