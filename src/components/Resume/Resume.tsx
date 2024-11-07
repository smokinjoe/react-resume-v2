import { Grid, Title } from "@mantine/core";

import { useGetResume } from "../../hooks/useGetResume";
import { ResumeContext } from "../../context/ResumeContext";
import { Header } from "./Header";
import { EmploymentHistory } from "./EmploymentHistory";
import { Education } from "./Education";
import { Projects } from "./Proejcts";
import { Skills } from "./Skills";
import { Languages } from "./Languages";

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
            <EmploymentHistory />
            <Education />
            <Projects />
          </Grid.Col>
          <Grid.Col span={4}>
            <Skills />
            <Languages />
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
