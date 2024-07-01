import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
// import banner from "../assets/images/banner1.png";
import g1 from "../assets/images/privateicu.jpg";
import g2 from "../assets/images/lab.jpg";
import g3 from "../assets/images/s3.jpg";
import g4 from "../assets/images/s4.jpg";
import g5 from "../assets/images/s5.jpg";
import g6 from "../assets/images/dialysis.jpg";
import g7 from "../assets/images/private_ward.jpg";
import g8 from "../assets/images/ctscan2.jpg";
import g9 from "../assets/images/laborward.jpg";
import g10 from "../assets/images/s10.jpg";

import g12 from "../assets/images/s12.jpg";
import g13 from "../assets/images/g3.jpg";
import g14 from "../assets/images/waitingarea.jpg";
import g15 from "../assets/images/wardwork.jpg";
import g16 from "../assets/images/lab_2.jpg";
import g17 from "../assets/images/s7.jpg";
import g18 from "../assets/images/ct2.jpg";
import g19 from "../assets/images/ct4.jpg";
import g20 from "../assets/images/services.png";
import g21 from "../assets/images/ct5.jpg";

import { GalleryCard } from "@/components/layout/GalleryCard";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <>
      <NavbarWithBreadcrums />
      <Reveal>
        <div className="grid gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
          <GalleryCard title="Private ICU" desc="" image={g1} />
          <GalleryCard title="Chemistry Laboratory" desc="" image={g2} />
          <GalleryCard title="X-ray Machine" desc="" image={g3} />
          <GalleryCard title="O&G Theatre" desc="" image={g4} />
          <GalleryCard title="Recovery Room" desc="" image={g5} />
          <GalleryCard title="Dialysis Centre" desc="" image={g6} />
          <GalleryCard title="Private Ward" desc="" image={g7} />
          <GalleryCard title="CT-Scan Machine" desc="" image={g8} />
          <GalleryCard title="Labor Ward" desc="" image={g9} />
          <GalleryCard title="NICU" desc="" image={g10} />
          <GalleryCard title="Ward Walk Way" desc="" image={g15} />
          <GalleryCard title="General Theatre" desc="" image={g13} />
          <GalleryCard title="Waiting Area" desc="" image={g14} />
          <GalleryCard title="Microbiology Laboratory" desc="" image={g12} />
          <GalleryCard
            title="Chemistry Pathology Laboratory"
            desc=""
            image={g16}
          />
          <GalleryCard title=" Water Treatment System" desc="" image={g17} />
          <GalleryCard title=" MRI Machine" desc="" image={g18} />
          <GalleryCard title=" Water Treatment System" desc="" image={g19} />
          <GalleryCard title=" Children's Ward" desc="" image={g20} />
          <GalleryCard title=" Dialysis Centre" desc="" image={g21} />
        </div>
      </Reveal>
    </>
  );
}
