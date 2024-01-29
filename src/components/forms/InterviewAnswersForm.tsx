import {
  InterviewAnswerMutationInput,
  NewInterviewAnswersDocument,
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const schema = z.object({
  answer: z.enum(["A", "B", "C", "D"], {
    errorMap: () => {
      return { message: "Select an option!" };
    },
  }),
});
export const InterviewAnswersForm = ({
  answer,
  question,
  user,
  id,
  shouldDelete,
}: InterviewAnswerMutationInput) => {
  const [ANSWERS, { loading }] = useMutation(NewInterviewAnswersDocument);

  const form = useForm<InterviewAnswerMutationInput>({
    defaultValues: {
      answer,
      id,
      question,
      shouldDelete,
      user,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: InterviewAnswerMutationInput) => {
    ANSWERS({
      variables: { input: values },
      onCompleted: ({ updateInterviewAnswer }) => {
        const errors = updateInterviewAnswer?.errors.length == 0;
        if (errors) {
          toast.success("Anwser recorded successfully");
        } else {
          updateInterviewAnswer?.errors.map((e) => toast.error(e.messages));
          form.reset();
        }
      },
    });
  };

  const opts = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "D", value: "D" },
  ];
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="answer"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Label>Answer</Label>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    required
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {opts.map((opt) => (
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={opt.value} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {opt.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
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
