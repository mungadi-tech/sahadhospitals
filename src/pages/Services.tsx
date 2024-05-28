import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { Services as S } from "@/components/layout/Services";
import { WhyChooseUs } from "@/components/layout/WhyChooseUs";

export default function Services() {
  return (
    <>
      <NavbarWithBreadcrums />

      <div className="mt-10">
        <S />
      </div>

      <WhyChooseUs />
    </>
  );
}
