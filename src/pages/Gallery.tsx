import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import banner from "../assets/images/banner1.png";
import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g5.jpg";
import { GalleryCard } from "@/components/layout/GalleryCard";

export default function Gallery() {
  return (
    <div>
      <NavbarWithBreadcrums />
      <img src={banner} alt="" className="w-full" />
      <section>
        <div className="text-center my-8">
          <h1 className="font-bold text-3xl md:text-4xl text-primary mb-2">
            OUR GALLERY
          </h1>
          <span className="font-bold text-xl text-gray-600">
            We offer extensive medical procedures to outbound and inbound
            patients.
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-4 p-4">
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc="adipisicing elit. Quis in quidem obcaecati atque aspernatur iusto
          similique architecto excepturi voluptas eveniet! Dolorem saepe
          voluptatibus similique vel maiores laborum dicta qui nam!"
            image={g1}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc="adipisicing elit. Quis in quidem obcaecati atque aspernatur iusto
          similique architecto excepturi voluptas eveniet! Dolorem saepe
          voluptatibus similique vel maiores laborum dicta qui nam!"
            image={g2}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc="adipisicing elit. Quis in quidem obcaecati atque aspernatur iusto
          similique architecto excepturi voluptas eveniet! Dolorem saepe
          voluptatibus similique vel maiores laborum dicta qui nam!"
            image={g3}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc="adipisicing elit. Quis in quidem obcaecati atque aspernatur iusto
          similique architecto excepturi voluptas eveniet! Dolorem saepe
          voluptatibus similique vel maiores laborum dicta qui nam!"
            image={g1}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc="adipisicing elit. Quis in quidem obcaecati atque aspernatur iusto
          similique architecto excepturi voluptas eveniet! Dolorem saepe
          voluptatibus similique vel maiores laborum dicta qui nam!"
            image={g2}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc="adipisicing elit. Quis in quidem obcaecati atque aspernatur iusto
          similique architecto excepturi voluptas eveniet! Dolorem saepe
          voluptatibus similique vel maiores laborum dicta qui nam!"
            image={g3}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc="adipisicing elit. Quis in quidem obcaecati atque aspernatur iusto
          similique architecto excepturi voluptas eveniet! Dolorem saepe
          voluptatibus similique vel maiores laborum dicta qui nam!"
            image={g1}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc="adipisicing elit. Quis in quidem obcaecati atque aspernatur iusto
          similique architecto excepturi voluptas eveniet! Dolorem saepe
          voluptatibus similique vel maiores laborum dicta qui nam!"
            image={g2}
          />
          <GalleryCard
            title="Lorem ipsum dolor sit amet consectetur"
            desc="adipisicing elit. Quis in quidem obcaecati atque aspernatur iusto
          similique architecto excepturi voluptas eveniet! Dolorem saepe
          voluptatibus similique vel maiores laborum dicta qui nam!"
            image={g3}
          />
        </div>
      </section>
    </div>
  );
}
