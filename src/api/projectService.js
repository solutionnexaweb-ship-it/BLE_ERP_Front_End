import api from "./axios";

/**
 * Create new project
 * POST /ble/api/project
 */
export const createProject = (payload) => {
  console.log("FINAL PAYLOAD SENT ", payload);
  return api.post("/project", payload);
};

/**
 * Get all projects
 * GET /ble/api/project
 */
export const getAllProjects = () => {
  return api.get("/project");
};

export const getProjectById = (id) => {
  return api.get(`/project/${id}`);
};

export const updateProject = (id, payload) => {
  return api.put(`/project/${id}`, payload);
};

export const deleteProject = (id) => {
  return api.delete(`/project/${id}`);
};
