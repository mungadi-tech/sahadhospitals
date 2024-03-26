import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
// import banner from "../assets/images/banner1.png";
import g1 from "../assets/images/s1.jpg";
import g2 from "../assets/images/s2.jpg";
import g3 from "../assets/images/s3.jpg";
import g4 from "../assets/images/s4.jpg";
import g5 from "../assets/images/s5.jpg";
import g6 from "../assets/images/s6.jpg";
import g7 from "../assets/images/s7.jpg";
import g8 from "../assets/images/s8.jpg";
import g9 from "../assets/images/s9.jpg";
import g10 from "../assets/images/s10.jpg";
import g11 from "../assets/images/s11.jpg";
import g12 from "../assets/images/s12.jpg";
import { GalleryCard } from "@/components/layout/GalleryCard";

export default function Gallery() {
  return (
    <div>
      <NavbarWithBreadcrums />
      <section>
        <div className="text-center my-8 p-4 bg-primary text-white">
          <h1 className="font-bold text-3xl md:text-4xl mb-2">OUR GALLERY</h1>
          <span className="font-bold text-xl">
            We offer extensive medical procedures to outbound and inbound
            patients, here are some of our pictures.
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-4 p-4">
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g1}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g2}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g3}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g4}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g5}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g6}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g7}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g8}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g9}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g10}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g11}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc=""
            image={g12}
          />
        </div>
      </section>
    </div>
  );
}
