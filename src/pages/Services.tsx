import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { WhyRegister } from "@/components/layout/WhyRegister";
import { Services as S } from "@/components/layout/Services";
import { BookAnAppointment } from "@/components/layout/BookAnAppointment";

export default function Services() {
  return (
    <>
      <NavbarWithBreadcrums />
      <BookAnAppointment
        heading=""
        content2="Trust us for comprehensive healthcare solutions tailored to your needs. Your health, our commitment."
        content1="Discover unparalleled healthcare at Sahad Hospitals. Our services encompass cutting-edge diagnostics, advanced treatments, and personalized care. From expert medical consultations to state-of-the-art facilities, we prioritize your well-being."
      />
      <S />
      <WhyRegister />
    </>
  );
}
