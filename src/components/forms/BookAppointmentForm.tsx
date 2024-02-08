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
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useMutation } from "@apollo/client";
import {
  AppointmentMutationDocument,
  AppointmentMutationMutationVariables,
} from "@/gql/graphql";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useDoctors, useSpecialization } from "@/graphql/queries";

const schema = z.object({
  input: z.object({
    date: z.string().min(15, { message: "invalid date" }),
    fullname: z.string().min(2, {
      message: "Name can not be empty.",
    }),
    email: z.string().email({
      message: "Invalid email.",
    }),
    specialization: z.string().min(1, {
      message: "Choose a specialization.",
    }),
    doctor: z.string().min(1, {
      message: "Choose a doctor.",
    }),
    phoneNumber: z
      .string()
      .min(11, {
        message: "Must be 11 characters.",
      })
      .max(11, { message: "Must not be more than 11 characters." }),
  }),
});

export const BookAppointmentForm = () => {
  const form = useForm<AppointmentMutationMutationVariables>({
    resolver: zodResolver(schema),
    defaultValues: {
      input: {
        fullname: "",
        email: "",
        doctor: "",
        phoneNumber: "",
        specialization: "",
        date: "",
      },
    },
  });
  const { doctors, error, loading } = useDoctors();
  const {
    spec,
    loading: spec_loading,
    error: spec_error,
  } = useSpecialization();
  const [APPOINTMENT, { loading: app_loading }] = useMutation(
    AppointmentMutationDocument
  );

  function onSubmit({ input }: AppointmentMutationMutationVariables) {
    APPOINTMENT({
      variables: {
        input,
      },
      onCompleted: ({ createAppointment }) => {
        createAppointment?.errors.length == 0
          ? (form.reset(),
            toast.success(
              "Appointment created successfully, we will get back to you via the email you supplied, thanks for contacting us"
            ))
          : toast.error("Sorry, an error occured, please try again");
      },
    });
  }

  if (error) return <div>{error.message}</div>;
  if (spec_error) return <div>{spec_error.message}</div>;

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="gap-x-4 gap-y-8 grid grid-cols-2">
            <FormField
              control={form.control}
              name="input.fullname"
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
              name="input.email"
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
              name="input.phoneNumber"
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
              name="input.date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="datetime-local"
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
              name="input.specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specialization</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="bg-slate-300 h-14">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a specialization" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {spec?.map((d) => (
                        <SelectItem disabled={spec_loading} value={d.id}>
                          {d.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="input.doctor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Doctor</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="bg-slate-300 h-14">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Doctor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {doctors?.map((d) => (
                        <SelectItem disabled={loading} value={d.id}>
                          {d.doctor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end mt-8">
            <Button
              disabled={loading || app_loading}
              className="h-14 w-[15rem] font-bold text-xl rounded-full"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export function BookAppointmentModalForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-10">Book An Appointment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[50%]">
        <DialogHeader>
          <DialogTitle className="text-3xl text-primary">
            MAKE AN APPOINTMENT
          </DialogTitle>
        </DialogHeader>
        <BookAppointmentForm />
      </DialogContent>
    </Dialog>
  );
}
