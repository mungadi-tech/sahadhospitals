import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PhoneCall } from "lucide-react";

const formSchema = z.object({
  fullname: z.string().min(1, { message: "required" }).max(255),
  email: z.string().min(1, { message: "required" }).max(255),
  phone: z.string().min(1, { message: "required" }).max(255),
  subject: z.string().min(1, { message: "required" }).max(255),
  message: z.string().min(1, { message: "required" }).max(255),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // const onSubmit = (values: z.infer<typeof formSchema>) => {
  //   console.log(values);
  // };

  return (
    <Form {...form}>
      <form noValidate className="space-y-8">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled>
          Send
        </Button>
      </form>
    </Form>
  );
}

export function DialogContactForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex w-32 cursor-pointer items-center justify-between gap-2 rounded-md bg-info p-2 text-xs text-tertiary md:w-72 md:p-7">
          Contact <PhoneCall className="md:h-14 md:w-14" />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Contact Form</DialogTitle>
          <DialogDescription>
            Fill the form with your appropriate information
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
