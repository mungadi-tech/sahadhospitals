import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { Services as S } from "@/components/layout/Services";

export default function Services() {
  return (
    <>
      <NavbarWithBreadcrums />

      <div className="mt-10">
        <S />
      </div>
    </>
  );
}
