import { useGetResume } from "../../hooks/useGetResume";

const Resume = () => {
  const { data, isLoading, error } = useGetResume();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <code>{JSON.stringify(data)}</code>
    </div>
  );
};

export default Resume;
