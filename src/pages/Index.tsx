import { About } from "@/components/layout/About";
import { Hero } from "@/components/layout/Hero";
import { News } from "@/components/layout/News";
import { Services } from "@/components/layout/Services";
import { Surgeries } from "@/components/layout/Surgeries";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import new_image from "../assets/images/2150896634.jpg";
import { Team } from "@/components/layout/Team";
import { Link } from "react-router-dom";

const formSchema = z.object({
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

export default function Index() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      doctor: "",
      mobileNumber: "",
      specialization: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Hero />
      <About />
      <section className="p-2">
        <div className="text-center my-8">
          <h1 className="font-bold text-xl text-primary">LATEST NEWS</h1>
          <span className="font-bold text-3xl md:text-4xl text-gray-600">
            Get Every Single Updates Here
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <News
            date={`${new Date("24-01-2025")}`}
            title="DEMO TITLE"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae non
            velit suscipit dolore incidunt fugit corrupti, molestias nobis nulla
            tempora vitae porro tenetur aut architecto saepe molestiae quis ea?
            Velit?"
            image={new_image}
          />
          <News
            date={`${new Date("24-01-2025")}`}
            title="DEMO TITLE"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae non
            velit suscipit dolore incidunt fugit corrupti, molestias nobis nulla
            tempora vitae porro tenetur aut architecto saepe molestiae quis ea?
            Velit?"
            image={new_image}
          />
          <News
            date={`${new Date("24-01-2025")}`}
            title="DEMO TITLE"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae non
            velit suscipit dolore incidunt fugit corrupti, molestias nobis nulla
            tempora vitae porro tenetur aut architecto saepe molestiae quis ea?
            Velit?"
            image={new_image}
          />
        </div>
      </section>
      <Surgeries />
      <Services />
      <div>
        <div className="bg-gradient-to-tr from-primary to-secondary mt-10 p-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="font-bold text-white">
              <h1 className="text-3xl font-bold my-4">MAKE AN APPOINTMENT</h1>
              At Sahad Hospital, we believe in providing accessible and
              efficient healthcare. Schedule your appointment today and embark
              on your journey towards a healthier, happier life. Your well-being
              is our priority.
              <div className="mt-8">
                <Button
                  variant={"outline"}
                  className="w-[10rem] font-bold text-xl bg-slate-200/30 h-[3rem] rounded-full hover:bg-transparent hover:text-white"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="gap-x-4 gap-y-8 grid grid-cols-2">
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
                              type="date"
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
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Specialization"
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
                              placeholder="Select Doctor"
                              className="bg-slate-300 h-14"
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
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <section className="my-10 p-4">
          <div className="text-center my-8">
            <h1 className="font-bold text-xl text-primary">LEADING TEAM</h1>
            <span className="font-bold text-3xl md:text-4xl text-gray-600">
              Meet Our Team
            </span>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <Team
              facebook=""
              image={new_image}
              linkedln=""
              name="John Doe"
              title="MD"
              twitter=""
            />
            <Team
              facebook=""
              image={new_image}
              linkedln=""
              name="John Doe"
              title="MD"
              twitter=""
            />
            <Team
              facebook=""
              image={new_image}
              linkedln=""
              name="John Doe"
              title="MD"
              twitter=""
            />
            <Team
              facebook=""
              image={new_image}
              linkedln=""
              name="John Doe"
              title="MD"
              twitter=""
            />
          </div>
          <div className="mt-4 text-gray-600 text-2xl flex justify-center hover:text-secondary">
            <Link to={""} className="shadow-md p-2">
              View More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
