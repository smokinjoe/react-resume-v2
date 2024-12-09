import { useAtom } from "jotai";
import { Title, Text, Space } from "@mantine/core";

import { resumeAtom } from "../../atoms/resume";

export const Education = () => {
  const [resume] = useAtom(resumeAtom);
  const { education } = resume;

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

      {education.map((edu) => (
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
