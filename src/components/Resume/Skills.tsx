import { useAtom } from "jotai";
import { Space, Text, Title } from "@mantine/core";

import { resumeAtom } from "../../atoms/resume";

export const Skills = () => {
  const [resume] = useAtom(resumeAtom);
  const { technicalSkills } = resume;

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
      {technicalSkills.map((skill, index) => (
        <div key={index}>
          <Text>{skill}</Text>
          {index === technicalSkills.length - 1 ? (
            <Space h="xl" />
          ) : (
            <Space h="sm" />
          )}
        </div>
      ))}
    </>
  );
};
