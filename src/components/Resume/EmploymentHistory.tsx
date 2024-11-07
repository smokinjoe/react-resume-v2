import { useContext } from "react";
import { Title, Text } from "@mantine/core";
import { ResumeContext } from "../../context/ResumeContext";

export const EmploymentHistory = () => {
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
        Experience
      </Title>
      {resume.employmentHistory.map((exp) => (
        <div key={exp.company}>
          <Text>{exp.company}</Text>
          <Text>{exp.title}</Text>
          <Text>
            {exp.dateStart} - {exp.dateEnd}
          </Text>
          <Text>{JSON.stringify(exp.experience)}</Text>
        </div>
      ))}
    </>
  );
};
