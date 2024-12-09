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

export const skillsAtom = atom((get) => get(resumeAtom).technicalSkills);
export const employmentHistoryAtom = atom(
  (get) => get(resumeAtom).employmentHistory
);
export const languagesAtom = atom((get) => get(resumeAtom).languages);
export const educationAtom = atom((get) => get(resumeAtom).education);
export const projectsAtom = atom((get) => get(resumeAtom).projects);
