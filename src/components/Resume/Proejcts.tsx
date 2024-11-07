import { useContext } from "react";
import { Text, Title } from "@mantine/core";
import { ResumeContext } from "../../context/ResumeContext";

export const Projects = () => {
  const resume = useContext(ResumeContext);

  return (
    <>
      <Title
        order={5}
        style={{
          fontFamily: "Open Sans, sans-serif",
          textTransform: "uppercase",
          color: "#2079c7",
        }}
      >
        Projects
      </Title>
      {resume.projects.map((project) => (
        <div key={project.title}>
          <Text>{project.title}</Text>
          <Text>{project.url}</Text>
          <Text>{project.description}</Text>
        </div>
      ))}
    </>
  );
};
