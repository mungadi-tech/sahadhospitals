import {
  NewJobTypesDocument,
  NewJobTypesMutationVariables,
} from "@/gql/graphql";
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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "../ui/button";

const schema = z.object({
  input: z.object({
    type: z.string().min(2, { message: "This field is required" }),
  }),
});

export const JobTypeForm = ({ input }: NewJobTypesMutationVariables) => {
  const [JOBTYPE, { loading }] = useMutation(NewJobTypesDocument);

  const form = useForm<NewJobTypesMutationVariables>({
    defaultValues: {
      input,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = ({ input }: NewJobTypesMutationVariables) => {
    JOBTYPE({
      variables: { input },
      onCompleted: ({ updateJobTypes }) => {
        const errors = updateJobTypes?.errors.length == 0;
        if (errors) {
          toast.success("Job type added successfully");
        } else {
          updateJobTypes?.errors.map((e) => toast.error(e.messages));
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
            name="input.type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
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
