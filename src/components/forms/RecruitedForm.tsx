import {
  NewRecruitedDocument,
  NewRecruitedMutationVariables,
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
import { Textarea } from "../ui/textarea";

const schema = z.object({
  input: z.object({
    user: z.string().min(1, { message: "This field is required" }),
    job: z.string().min(1, { message: "This field is required" }),
    note: z.string().min(1, { message: "This field is required" }),
  }),
});

export const RecruitedForm = ({ input }: NewRecruitedMutationVariables) => {
  const [RECRUITED, { loading }] = useMutation(NewRecruitedDocument);

  const form = useForm<NewRecruitedMutationVariables>({
    defaultValues: {
      input,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = ({ input }: NewRecruitedMutationVariables) => {
    RECRUITED({
      variables: { input },
      onCompleted: ({ updateRecruited }) => {
        const errors = updateRecruited?.errors.length == 0;
        if (errors) {
          toast.success("Recruite added successfully");
        } else {
          updateRecruited?.errors.map((e) => toast.error(e.messages));
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
            name="input.user"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recruite</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="input.job"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="input.note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recruite</FormLabel>
                <FormControl>
                  <Textarea {...field} />
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
