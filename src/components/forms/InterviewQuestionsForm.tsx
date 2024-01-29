import {
  InterviewQuestionsMutationInput,
  NewInterviewQuestionsDocument,
} from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const schema = z.object({
  answer: z.enum(["A", "B", "C", "D"], {
    errorMap: () => {
      return { message: "Select an option!" };
    },
  }),
  job: z.string({ required_error: "This field is required" }),
  optionA: z.string().min(1, { message: "This field is required" }),
  optionB: z.string().min(1, { message: "This field is required" }),
  optionC: z.string().min(1, { message: "This field is required" }),
  optionD: z.string().min(1, { message: "This field is required" }),
  question: z.string().min(1, { message: "This field is required" }),
});

export const InterviewQuestionsForm = ({
  answer,
  job,
  optionA,
  optionB,
  optionC,
  optionD,
  question,
  id,
  shouldDelete,
}: InterviewQuestionsMutationInput) => {
  const [QUESTIONS, { loading }] = useMutation(NewInterviewQuestionsDocument);
  const form = useForm<InterviewQuestionsMutationInput>({
    defaultValues: {
      answer,
      id,
      question,
      shouldDelete,
      job,
      optionA,
      optionB,
      optionC,
      optionD,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: InterviewQuestionsMutationInput) => {
    QUESTIONS({
      variables: { input: values },
      onCompleted: ({ updateInterviewQuestion }) => {
        const errors = updateInterviewQuestion?.errors.length == 0;
        if (errors) {
          toast.success("Question added successfully");
        } else {
          updateInterviewQuestion?.errors.map((e) => toast.error(e.messages));
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
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Question</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="optionA"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Option A</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="optionB"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Option B</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="optionC"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Option C</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="optionD"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Option D</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correct Answer</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the correct answer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="B">B</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                    <SelectItem value="D">D</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  This should be the correct answer you are expection from
                  recruites
                </FormDescription>
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
