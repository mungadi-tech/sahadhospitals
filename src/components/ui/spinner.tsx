import { SymbolIcon } from "@radix-ui/react-icons";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center w-full">
      <SymbolIcon className="h-20 w-20 animate-spin" />
    </div>
  );
}
