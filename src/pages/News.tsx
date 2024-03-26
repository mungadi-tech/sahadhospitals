import { News } from "@/components/layout/News";
import new_image from "../assets/images/2150896634.jpg";

export default function NewsPage() {
  return (
    <div>
      <section className="p-2">
        <div className="text-center my-8">
          <h1 className="font-bold text-xl text-primary">LATEST NEWS</h1>
          <span className="font-bold text-lg md:text-4xl text-gray-600">
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
    </div>
  );
}
