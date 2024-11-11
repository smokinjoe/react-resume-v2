import { useContext } from "react";
import { Space, Text, Title } from "@mantine/core";
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

      <Space h="md" />

      {resume.projects.map((project) => (
        <div key={project.name}>
          <Title order={3} fw="800">
            {project.name}

            <Text span size="xl" fs="italic">
              <Text span size="xl">
                {" "}
                —{" "}
              </Text>
              <a href={project.url} target="_blank" rel="noreferrer">
                Source
              </a>
            </Text>
          </Title>

          <Text>{project.description}</Text>
          <Space h="xs" />
        </div>
      ))}
    </>
  );
};
