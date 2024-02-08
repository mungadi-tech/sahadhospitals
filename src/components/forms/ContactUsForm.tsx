import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { InboxMutationDocument, InboxMutationInput } from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";

const schema = z.object({
  fullname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
  phoneNumber: z
    .string()
    .min(2, {
      message: "Must be least 11 characters.",
    })
    .max(11, { message: "Must not be more than 11 characters." }),
  subject: z.string().min(2, {
    message: "Must be at least 2 characters.",
  }),
});

export const ContactUsForm = () => {
  const form = useForm<InboxMutationInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
      phoneNumber: "",
      subject: "",
    },
  });
  const [INBOX, { loading }] = useMutation(InboxMutationDocument);

  function onSubmit(values: z.infer<typeof schema>) {
    INBOX({
      variables: {
        input: {
          email: values.email,
          fullname: values.fullname,
          message: values.message,
          phoneNumber: values.phoneNumber,
          subject: values.subject,
        },
      },
      onCompleted: ({ createInbox }) => {
        createInbox?.errors.length == 0
          ? (form.reset(),
            toast.success(
              "Message sent successfully, we will get back to you via the email you supplied, thanks for contacting us"
            ))
          : toast.error("Sorry, an error occured, please try again");
      },
    });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Full Name"
                      className="bg-slate-300 h-14"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="bg-slate-300 h-14"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      className="bg-slate-300 h-14"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      className="bg-slate-300 h-14"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here"
                      className="min-h-[160px] bg-slate-300 "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end mt-8">
            <Button
              disabled={loading}
              className="h-14 w-[15rem] font-bold text-xl rounded-full"
              type="submit"
            >
              Send Message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
