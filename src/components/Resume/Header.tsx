import { useContext } from "react";
import { Grid, Text, Title } from "@mantine/core";
import { ResumeContext } from "../../context/ResumeContext";

export const Header = () => {
  const data = useContext(ResumeContext);

  if (!data) {
    return null;
  }

  return (
    <>
      <Grid.Col span={8}>
        <Title style={{ fontSize: "56px" }} order={1}>
          {data.name}
        </Title>
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
    </>
  );
};
