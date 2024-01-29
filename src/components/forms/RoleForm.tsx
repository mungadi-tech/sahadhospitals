import { NewRolesDocument, NewRolesMutationVariables } from "@/gql/graphql";
import { useMutation } from "@apollo/client";
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
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  input: z.object({
    role: z.string().min(2, { message: "This field is required" }),
  }),
});

export const RoleForm = ({ input }: NewRolesMutationVariables) => {
  const [ROLES, { loading }] = useMutation(NewRolesDocument);

  const form = useForm<NewRolesMutationVariables>({
    defaultValues: {
      input,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = ({ input }: NewRolesMutationVariables) => {
    ROLES({
      variables: { input },
      onCompleted: ({ updateRoles }) => {
        const errors = updateRoles?.errors.length == 0;
        if (errors) {
          toast.success("Role added successfully");
        } else {
          updateRoles?.errors.map((e) => toast.error(e.messages));
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
            name="input.role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role Name</FormLabel>
                <FormControl>
                  <Input {...field} />
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
