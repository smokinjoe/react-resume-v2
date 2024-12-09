import { create } from "zustand";

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

interface ApplicationState {
  resume: Resume;
  setResume: (resume: Resume) => void;
}

export const useStore = create<ApplicationState>((set) => ({
  resume: defaultResume,
  setResume: (resume: Resume) => set({ resume }),
}));
