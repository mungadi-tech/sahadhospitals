import { NewJobsDocument, NewJobsMutationVariables } from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import Select from "react-select";

const schema = z.object({
  description: z.string().min(1, { message: "This field is required" }),
  jobType: z.array(z.string(), {
    errorMap: () => {
      return { message: "This field is required" };
    },
  }),
  location: z.string().min(1, { message: "This field is required" }),
  role: z.array(z.string(), {
    errorMap: () => {
      return { message: "This field is required" };
    },
  }),
  title: z.string().min(1, { message: "This field is required" }),
  staffQuantity: z.number().min(1, { message: "Must be atleast one" }),
});

export const JobForm = ({ input }: NewJobsMutationVariables) => {
  const [JOBS, { loading }] = useMutation(NewJobsDocument);

  const form = useForm<NewJobsMutationVariables>({
    defaultValues: {
      input,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = ({ input }: NewJobsMutationVariables) => {
    JOBS({
      variables: { input },
      onCompleted: ({ updateJobs }) => {
        const errors = updateJobs?.errors.length == 0;
        if (errors) {
          toast.success("Job added successfully");
        } else {
          updateJobs?.errors.map((e) => toast.error(e.messages));
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
            name="input.title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="input.jobType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>

                <FormControl>
                  <Select
                    isMulti
                    onChange={field.onChange}
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="input.role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    onChange={field.onChange}
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="input.description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="input.location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="input.staffQuantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Staff Quantity Required</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} type="submit" className="my-4">
            Add Job
          </Button>
        </form>
      </Form>
    </div>
  );
};
