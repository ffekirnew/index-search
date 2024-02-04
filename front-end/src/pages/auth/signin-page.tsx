import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import InputField from "../../components/auth/InputField";
import {
  Button,
  VStack,
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
} from "@chakra-ui/react";
import LoadingRipples from "../../components/ui/LoadingRipples";
import { useLogin } from "../../service/hooks/auth";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 charachters." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 charachters." }),
});

type SignInFormSchema = z.infer<typeof schema>;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormSchema>({ resolver: zodResolver(schema) });
  const { login, isLoading, error, isSuccess } = useLogin();
  const navigate = useNavigate();

  const onSignIn = (data: FieldValues) => {
    login(data.username, data.password);
  };

  if (isSuccess) navigate("/dashboard");

  return (
    <Card gap={5} align={"left"} paddingX={10} paddingY={10} width={"100%"}>
      <CardHeader flexWrap={"wrap"}>
        <Heading fontWeight={"900"}>Welcome, admin!</Heading>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSignIn)}>
          <VStack align={"left"} gap={2}>
            <InputField
              label="Username"
              name="username"
              register={register}
              type="text"
              disabled={isLoading}
              placeholder="e.g. starlord"
              error={errors.username && errors.username.message}
            />
            <InputField
              label="Password"
              name="password"
              register={register}
              type="password"
              placeholder="Enter your password"
              error={errors.password && errors.password.message}
              disabled={isLoading}
            />
            <Text fontSize={"md"} color="red.400">
              {error}
            </Text>
            <Button
              type={"submit"}
              background={"brand.primary"}
              disabled={isLoading}
              borderRadius={"full"}
              size={"lg"}
            >
              {isLoading ? (
                <LoadingRipples color={"gray.200"} size={"sm"} />
              ) : (
                <Text fontWeight={"bold"} color={"gray.100"}>
                  Sign In
                </Text>
              )}
            </Button>
          </VStack>
        </form>
      </CardBody>
    </Card>
  );
};

export default SignInPage;
