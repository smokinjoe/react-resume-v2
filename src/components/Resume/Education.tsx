import { useContext } from "react";
import { Title, Text } from "@mantine/core";
import { ResumeContext } from "../../context/ResumeContext";

export const Education = () => {
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
        Education
      </Title>
      {resume.education.map((edu) => (
        <div key={edu.name}>
          <Text>
            {edu.dateStart} - {edu.dateEnd}
          </Text>
          <Text>{edu.name}</Text>
          <Text>{edu.degree}</Text>
        </div>
      ))}
    </>
  );
};
