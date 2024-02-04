import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  studentName: string;
  groupName: string;
}
const Student = ({ studentName, groupName }: Props) => {
  return (
    <Link to={"/student/" + "G" + groupName + "/" + studentName}>
      <Card shadow={"lg"}>
        <CardHeader>
          <Heading size="md">{studentName}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Text>Group {groupName}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default Student;
