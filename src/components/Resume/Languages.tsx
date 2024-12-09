import { useAtom } from "jotai";
import { Space, Text, Title } from "@mantine/core";

import { resumeAtom } from "../../atoms/resume";

const MaxDotsCount = 5;

const renderDots = (proficiencyCount: number) => {
  const dotsArray = [];

  for (let i = 0; i < MaxDotsCount; i++) {
    if (i < proficiencyCount) {
      dotsArray.push(
        <Text size="lg" span key={i}>
          ⏺{" "}
        </Text>
      );
    } else {
      dotsArray.push(
        <Text style={{ fontSize: "22px" }} span key={i}>
          ○{" "}
        </Text>
      );
    }
  }

  return dotsArray.map((dot) => dot);
};

export const Languages = () => {
  const [resume] = useAtom(resumeAtom);
  const { languages } = resume;

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
      <Space h="md" />
      {languages.map((language, index) => (
        <div key={index}>
          <Text>{language.name}</Text>
          <Text>{renderDots(language.proficiency)}</Text>
          <Space h="sm" />
        </div>
      ))}
    </>
  );
};
