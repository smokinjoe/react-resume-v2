import { createContext } from "react";
import { Resume } from "../types/Resume";

const defaultResume: Resume = {
  id: -1,
  name: "",
  email: "",
  phone: -1,
  address: {
    street: "",
    city: "",
    state: "",
    zip: -1,
  },
  technicalSkills: [],
  employmentHistory: [],
  languages: [],
  education: [],
  projects: [],
  references: "",
};

export const ResumeContext = createContext<Resume>(defaultResume);
