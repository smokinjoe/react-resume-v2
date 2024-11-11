import { useContext } from "react";
import { Title, Text, Space } from "@mantine/core";
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
      <Space h="md" />

      {resume.education.map((edu) => (
        <div key={edu.name}>
          <Title order={3} fw="800">
            {edu.name}
            <Text span size="xl">
              {" "}
              —{" "}
            </Text>
            <Text span size="xl" fs="italic">
              {edu.degree}
            </Text>
          </Title>

          <Text
            style={{ fontFamily: "Open Sans, sans-serif", color: "#666666" }}
          >
            {edu.dateEnd}
          </Text>
        </div>
      ))}

      <Space h="xl" />
    </>
  );
};
