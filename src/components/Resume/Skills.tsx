import { useContext } from "react";
import { Space, Text, Title } from "@mantine/core";
import { ResumeContext } from "../../context/ResumeContext";

export const Skills = () => {
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
        Skills
      </Title>
      <Space h="md" />
      {resume.technicalSkills.map((skill, index) => (
        <div key={index}>
          <Text>{skill}</Text>
          {index === resume.technicalSkills.length - 1 ? (
            <Space h="xl" />
          ) : (
            <Space h="sm" />
          )}
        </div>
      ))}
    </>
  );
};
