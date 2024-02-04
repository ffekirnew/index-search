import { SimpleGrid } from "@chakra-ui/react";
import Student from "../../components/dashboard/Student";

const DashboardPage = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <SimpleGrid columns={4} spacing={3}>
      {numbers.map((number) => (
        <Student studentName={"Some Name"} groupName={"5" + number} />
      ))}
    </SimpleGrid>
  );
};

export default DashboardPage;
