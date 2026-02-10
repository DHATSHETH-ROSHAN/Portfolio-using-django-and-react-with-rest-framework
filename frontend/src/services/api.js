import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export const getProjects = () => API.get("projects/");
export const getSkills = () => API.get("skills/");
export const getContacts = () => API.get("contacts/");
export const postContact = (data) => API.post("contacts/", data);
export const getCertifications = () => API.get("certifications/");

