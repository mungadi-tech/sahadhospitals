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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Hospital } from "lucide-react";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  fullname: z.string().min(1, { message: "required" }).max(255),
  service: z.string().min(1, { message: "required" }).max(255),
  rate: z.string().min(1, { message: "required" }).max(255),
  comment: z.string().min(1, { message: "required" }).max(255),
});

export function FeedbackForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      service: "",
      rate: "",
      comment: "",
    },
  });

  //   function onSubmit(values: z.infer<typeof formSchema>) {
  //     console.log(values);
  //   }

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
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="psychiatry">Psychiatry</SelectItem>
                  <SelectItem value="radiology">Radiology</SelectItem>
                  <SelectItem value="dental">Dental</SelectItem>
                  <SelectItem value="surgery">General Surgery</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="gynecology">
                    Obstetrics & Gynecology
                  </SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="ENT">ENT</SelectItem>
                  <SelectItem value="paediatrics">Paediatrics</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="exceptional">Exceptional</SelectItem>
                  <SelectItem value="satisfied">Satisfied</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="doBetter">Can do better</SelectItem>
                  <SelectItem value="paediatrics">Not Satisfied</SelectItem>
                  <SelectItem value="terrible">Terrible</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled>
          Submit
        </Button>
      </form>
    </Form>
  );
}

export function DialogFeedbackForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex w-32 cursor-pointer items-center justify-between gap-2 rounded-md bg-blue-500 p-2 text-xs text-white md:w-72 md:p-7">
          Feedback <Hospital className="md:h-14 md:w-14" />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Appointment Form</DialogTitle>
          <DialogDescription>Schedule an appointment</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <FeedbackForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
