import { LoginDocument, LoginMutationVariables } from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email({ message: "Ivalid email" }),
  password: z.string().min(5, { message: "Invalid email or password" }),
});

interface DismissModal {
  dismiss: () => void;
}
export const LoginForm = ({
  email,
  password,
  dismiss,
}: LoginMutationVariables & DismissModal) => {
  const [LOGIN, { loading, error }] = useMutation(LoginDocument);

  const navigate = useNavigate();
  const form = useForm<LoginMutationVariables>({
    defaultValues: {
      email,
      password,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = ({ email, password }: LoginMutationVariables) => {
    LOGIN({
      variables: { email, password },
      onCompleted: ({ login }) => {
        const token = login?.token;
        if (token) {
          toast.success("Login successfully");
          localStorage.setItem("tokenAuth", token);
          dismiss();
          navigate("dashboard/");
        } else {
          error?.graphQLErrors.map((e) => toast.error(e.message));
          form.reset();
        }
      },
    });
  };
  return (
    <div>
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Button disabled={loading} type="submit" className="my-4 w-56">
              LOGIN
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
