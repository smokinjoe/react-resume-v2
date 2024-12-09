import { Container, Grid, Space, Title } from "@mantine/core";

import { useStore } from "../../store/resume";

import { Header } from "./Header";
import { EmploymentHistory } from "./EmploymentHistory";
import { Education } from "./Education";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Languages } from "./Languages";

export const Resume = () => {
  const { references } = useStore((state) => state.resume);

  return (
    <Container>
      <Space h="xl" className="no-print" />
      <Grid gutter="65">
        <Header />
        <Grid.Col span={8}>
          <EmploymentHistory />
          <Education />
          <Projects />
        </Grid.Col>
        <Grid.Col span={4}>
          <Skills />
          <Languages />
        </Grid.Col>

        <Grid.Col span={12}>
          <Title order={2}>{references}</Title>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
