import { LoadingOverlay, Box } from "@mantine/core";

type LoadingProps = {
  isLoading: boolean;
};

export const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <Box pos="relative" h="100vh">
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
    </Box>
  );
};
