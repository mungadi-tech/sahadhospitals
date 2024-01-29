interface NewsTypes {
  title: string;
  content: string;
  date: string;
  image: string;
}

export const News = ({ content, date, title, image }: NewsTypes) => {
  return (
    <div className="">
      <div>
        <img src={image} className="h-[20rem] rounded-lg w-full" />
      </div>
      <div className="p-4">
        <div className="flex gap-4">
          <span className="font-bold text-destructive">{date}</span>
          <span className="uppercase text-destructive font-bold">Admin</span>
        </div>
        <div className="mt-4">
          <span className="font-bold text-2xl">{title}</span>
          <p className="mt-4 text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};
