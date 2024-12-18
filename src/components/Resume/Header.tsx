import { useContext } from "react";
import { Grid, Space, Text, Title } from "@mantine/core";
import { ResumeContext } from "../../context/ResumeContext";

/**
 * Pull out the Grid.Col and place back in Resume.tsx if possible
 * Would need me to create two new components for name and then address
 */

export const Header = () => {
  const resume = useContext(ResumeContext);

  const customCss = { fontFamily: "Open Sans, sans serif", fontSize: "18px" };

  return (
    <>
      <Grid.Col span={8}>
        <Title style={{ fontSize: "56px" }} order={1}>
          {resume.name}
        </Title>
        <Text>
          Looking for new challenges and an opportunity to build great products.
        </Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <Text>{resume.address.street}</Text>
        <Text style={customCss}>
          {resume.address.city}, {resume.address.state} {resume.address.zip}
        </Text>
        <Space h="xs" />
        <Text fw={700} style={customCss}>
          {resume.phone}
        </Text>
        <Space h="xs" />
        <Text fw={700} style={customCss}>
          {resume.email}
        </Text>
      </Grid.Col>
    </>
  );
};
