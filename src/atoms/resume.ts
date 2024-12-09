import { atom } from "jotai";
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

export const resumeAtom = atom<Resume>(defaultResume);
