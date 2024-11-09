import { useContext } from "react";
import { Text, Title } from "@mantine/core";
import { ResumeContext } from "../../context/ResumeContext";

export const Languages = () => {
  const resume = useContext(ResumeContext);

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
        Languages
      </Title>
      {resume.languages.map((language, index) => (
        <div key={index}>
          <Text>{language.name}</Text>
          <Text>{language.proficiency}</Text>
        </div>
      ))}
    </>
  );
};
