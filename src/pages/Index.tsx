import { About } from "@/components/layout/About";
import { Hero } from "@/components/layout/Hero";
import { News } from "@/components/layout/News";
import { Services } from "@/components/layout/Services";
import { Surgeries } from "@/components/layout/Surgeries";
import { Button } from "@/components/ui/button";
import new_image from "../assets/images/2150896634.jpg";
import { Team } from "@/components/layout/Team";
import { Link } from "react-router-dom";
import { BookAppointmentForm } from "@/components/forms/BookAppointmentForm";

export default function Index() {
  return (
    <>
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
                <Link to={"contact/"}>
                  <Button
                    variant={"outline"}
                    className="w-[10rem] font-bold text-xl bg-slate-200/30 h-[3rem] rounded-full hover:bg-transparent hover:text-white"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div id="appointment" className="bg-slate-200 p-4 rounded-lg">
              <BookAppointmentForm />
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
            <Team image={new_image} name="John Doe" title="MD" twitter="" />
            <Team image={new_image} name="John Doe" title="MD" twitter="" />
            <Team image={new_image} name="John Doe" title="MD" twitter="" />
            <Team image={new_image} name="John Doe" title="MD" twitter="" />
          </div>
          <div className="mt-4 text-gray-600 text-2xl flex justify-center hover:text-secondary">
            <Link to={""} className="shadow-md p-2">
              View More
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
