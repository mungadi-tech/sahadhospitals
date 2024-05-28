import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export function BookAppointmentForm() {
  return (
    <div className="mx-auto lg:w-1/2 ">
      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-2 md:gap-10 gap-2">
          <div className="flex flex-col gap-4">
            <Input placeholder="First Name" className="h-14 border-tertiary" />
            <Input placeholder="Last Names" className="h-14 border-tertiary" />
            <Input placeholder="Email" className="h-14 border-tertiary" />
            <DepartmentSelectForm />
          </div>
          <div className="flex flex-col gap-4">
            <SelectForm />
            <Input
              placeholder="Phone"
              type="number"
              className="h-14 border-tertiary"
            />
            <Input
              placeholder="Date"
              type="datetime-local"
              className="h-14 border-tertiary"
            />
            <DoctorSelectForm />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Textarea placeholder="Message" className="border-tertiary" />
          <Button disabled className="bg-tertiary">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

const FormSchema = z.object({
  gender: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
});

function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-full border-tertiary h-14">
                  <SelectTrigger>
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="MALE">MALE</SelectItem>
                  <SelectItem value="FEMALE">FEMALE</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

const DepartmentFormSchema = z.object({
  dept: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
});

function DepartmentSelectForm() {
  const form = useForm<z.infer<typeof DepartmentFormSchema>>({
    resolver: zodResolver(DepartmentFormSchema),
  });
  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="dept"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-full border-tertiary h-14">
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="gmedcine">General Medicine</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="nephrology">Nephrology</SelectItem>
                  <SelectItem value="paediatrics">Peadiatrics</SelectItem>
                  <SelectItem value="obsetrics">Obsetrics</SelectItem>
                  <SelectItem value="gynaecology">Gynaecology</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

const DoctorFormSchema = z.object({
  doctor: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
});

function DoctorSelectForm() {
  const form = useForm<z.infer<typeof DoctorFormSchema>>({
    resolver: zodResolver(DoctorFormSchema),
  });
  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="doctor"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-full border-tertiary h-14">
                  <SelectTrigger>
                    <SelectValue placeholder="Doctor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="MALE">doctor</SelectItem>
                  <SelectItem value="FEMALE">doctor</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
