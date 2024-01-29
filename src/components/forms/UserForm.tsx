import {
  NewUserDocument,
  NewUserMutationVariables,
  UpdateUserDocument,
  UpdateUserMutationVariables,
} from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { toast } from "sonner";
import { z } from "zod";

const newUserSchema = z.object({
  input: z.object({
    username: z.string().min(2, { message: "This field is required" }),
    email: z.string().email({ message: "This field is required" }),
  }),
});

export const NewUserForm = ({ input }: NewUserMutationVariables) => {
  const [USER, { loading }] = useMutation(NewUserDocument);
  const form = useForm<NewUserMutationVariables>({
    defaultValues: {
      input,
    },
    resolver: zodResolver(newUserSchema),
  });

  const onSubmit = ({ input }: NewUserMutationVariables) => {
    USER({
      variables: { input },
      onCompleted: ({ newUser }) => {
        const errors = newUser?.errors.length == 0;
        if (errors) {
          toast.success("New user added successfully");
        } else {
          newUser?.errors.map((e) => toast.error(e.messages));
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
            name="input.username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="input.email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="input.password1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="input.password2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
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

const updateUserSchema = z.object({
  input: z.object({
    username: z.string().min(2, { message: "This field is required" }),
    firstName: z.string().min(2, { message: "This field is required" }),
    lastName: z.string().min(2, { message: "This field is required" }),
    email: z.string().email({ message: "This field is required" }),
  }),
});

export const UpdateUserForm = ({ input }: UpdateUserMutationVariables) => {
  const [USER, { loading }] = useMutation(UpdateUserDocument);
  const form = useForm<UpdateUserMutationVariables>({
    defaultValues: {
      input,
    },
    resolver: zodResolver(updateUserSchema),
  });

  const onSubmit = ({ input }: UpdateUserMutationVariables) => {
    USER({
      variables: { input },
      onCompleted: ({ updateUser }) => {
        const errors = updateUser?.errors.length == 0;
        if (errors) {
          toast.success("New user added successfully");
        } else {
          updateUser?.errors.map((e) => toast.error(e.messages));
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
            name="input.username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="input.email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="input.firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="input.middleName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Middle name</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="input.lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="input.avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Picture</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="input.resume"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resume</FormLabel>
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
