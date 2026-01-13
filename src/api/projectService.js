import api from "./axios";

export const getProject = () => {
    return api.get("/projects");
}

export const createProject = () => {
    return api.post("/projects");
}