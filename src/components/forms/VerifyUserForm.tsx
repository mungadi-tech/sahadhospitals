import {
  VerifyTokenDocument,
  VerifyTokenMutationVariables,
} from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const schema = z.object({
  token: z.string().min(2, { message: "This field is required" }),
});

export const VerifyUserForm = ({ token }: VerifyTokenMutationVariables) => {
  const [VERIFY, { loading, error }] = useMutation(VerifyTokenDocument);

  const form = useForm<VerifyTokenMutationVariables>({
    defaultValues: {
      token,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = ({ token }: VerifyTokenMutationVariables) => {
    VERIFY({
      variables: { token },
      onCompleted: ({ verifyToken }) => {
        const errors = verifyToken?.payload;
        if (errors) {
          toast.success("User verified successfully");
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
            name="token"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} type="submit" className="my-4">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
