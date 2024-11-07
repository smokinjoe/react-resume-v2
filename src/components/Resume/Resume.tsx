import { Grid, Title, Text } from "@mantine/core";

import { useGetResume } from "../../hooks/useGetResume";

const Resume = () => {
  const { data, isLoading, error } = useGetResume();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div>
      <Grid>
        <Grid.Col span={8}>
          <Title order={1}>{data.name}</Title>
          <Text>
            An engineer looking for challenges and an opportunity to build great
            products.
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>{data.address.street}</Text>
          <Text>
            {data.address.city}, {data.address.state} {data.address.zip}
          </Text>
          <Text fw={700}>{data.phone}</Text>
          <Text fw={700}>{data.email}</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Title order={2}>Experience</Title>
          {data.employmentHistory.map((exp) => (
            <div key={exp.company}>
              <Text>{exp.company}</Text>
              <Text>{exp.title}</Text>
              <Text>
                {exp.dateStart} - {exp.dateEnd}
              </Text>
              <Text>{JSON.stringify(exp.experience)}</Text>
            </div>
          ))}

          <Title order={2}>Education</Title>
          {data.education.map((edu) => (
            <div key={edu.name}>
              <Text>
                {edu.dateStart} - {edu.dateEnd}
              </Text>
              <Text>{edu.name}</Text>
              <Text>{edu.degree}</Text>
            </div>
          ))}

          <Title order={2}>Projects</Title>
          {data.projects.map((project) => (
            <div key={project.title}>
              <Text>{project.title}</Text>
              <Text>{project.url}</Text>
              <Text>{project.description}</Text>
            </div>
          ))}
        </Grid.Col>
        <Grid.Col span={4}>
          <Title order={2}>Skills</Title>
          {data.technicalSkills.map((skill) => (
            <>
              <Text>{skill.description}</Text>
              <Text>{skill.score}</Text>
            </>
          ))}

          <Title order={2}>Languages</Title>
          {data.languages.map((language) => (
            <>
              <Text>{language.name}</Text>
              <Text>{language.proficiency}</Text>
            </>
          ))}
        </Grid.Col>

        <Grid.Col span={12}>
          <Title order={2}>References available upon request</Title>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Resume;
