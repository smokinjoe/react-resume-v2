import { useContext } from "react";
import { Text, Title } from "@mantine/core";
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
      {resume.technicalSkills.map((skill, index) => (
        <div key={index}>
          <Text>{skill}</Text>
        </div>
      ))}
    </>
  );
};
