import { useContext } from "react";
import { Grid, Text, Title } from "@mantine/core";
import { ResumeContext } from "../../context/ResumeContext";

/**
 * Pull out the Grid.Col and place back in Resume.tsx if possible
 * Would need me to create two new components for name and then address
 */

export const Header = () => {
  const resume = useContext(ResumeContext);

  return (
    <>
      <Grid.Col span={8}>
        <Title style={{ fontSize: "56px" }} order={1}>
          {resume.name}
        </Title>
        <Text>
          An engineer looking for challenges and an opportunity to build great
          products.
        </Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <Text>{resume.address.street}</Text>
        <Text>
          {resume.address.city}, {resume.address.state} {resume.address.zip}
        </Text>
        <Text fw={700}>{resume.phone}</Text>
        <Text fw={700}>{resume.email}</Text>
      </Grid.Col>
    </>
  );
};
