import { useAtom } from "jotai";
import { Title, Text, List, Space } from "@mantine/core";

import { resumeAtom } from "../../atoms/resume";

export const EmploymentHistory = () => {
  const [resume] = useAtom(resumeAtom);
  const { employmentHistory } = resume;

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
      <Space h="md" />

      {employmentHistory.map((job) => (
        <div key={job.company}>
          <Title order={3} fw="800">
            {job.company},{" "}
            <Text style={{ display: "inline" }} size="xl">
              {job.location} —
            </Text>
            <Text style={{ display: "inline" }} size="xl" fs="italic">
              {job.title}
            </Text>
          </Title>

          <Text
            style={{ fontFamily: "Open Sans, sans-serif", color: "#666666" }}
          >
            {job.dateStart} - {job.dateEnd}
          </Text>

          <Space h="xs" />

          <List center={false} withPadding={true}>
            {job.experience.map((responsibility, index) => (
              <List.Item key={index}>{responsibility.description}</List.Item>
            ))}
          </List>

          <Space h="xl" />
        </div>
      ))}
    </>
  );
};
