import { Grid, Title, Text } from "@mantine/core";

import { useGetResume } from "../../hooks/useGetResume";
import { ResumeContext } from "../../context/ResumeContext";
import { Header } from "./Header";

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
    <ResumeContext.Provider value={data}>
      <div>
        <Grid>
          <Header />
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
            {data.technicalSkills.map((skill, index) => (
              <>
                <Text key={index}>{skill}</Text>
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
            <Title order={2}>{data.references}</Title>
          </Grid.Col>
        </Grid>
      </div>
    </ResumeContext.Provider>
  );
};

export default Resume;
