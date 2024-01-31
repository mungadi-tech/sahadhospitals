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

const schema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  specialization: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  doctor: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  mobileNumber: z
    .string()
    .min(11, {
      message: "Username must be at least 2 characters.",
    })
    .max(11, { message: "Username must be at least 2 characters." }),
});

export const ContactUsForm = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      doctor: "",
      mobileNumber: "",
      specialization: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="fullName"
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
              name="fullName"
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
              name="fullName"
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
              name="doctor"
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
              name="fullName"
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
