import { SymbolIcon } from "@radix-ui/react-icons";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center w-full my-52">
      <SymbolIcon className="h-20 w-20 animate-spin stroke-tertiary" />
    </div>
  );
}
