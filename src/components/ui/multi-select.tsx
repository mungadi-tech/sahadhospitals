import { cn } from "@/lib/utils";
import Select from "react-select";
import type { ControlProps } from "react-select";

interface MultiSelectOpts {
  value: string;
  label: string;
}
interface MultiSelectProps {
  options: MultiSelectOpts[];
}

export const Multielect = () => {
  return <div>multi-select</div>;
};

export const Control = (props: ControlProps) => {
  const { children, innerRef, innerProps, className } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MultiSelect = ({ options }: MultiSelectProps) => {
  return (
    <Select
      // components={{ Control }}
      isMulti
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: theme.colors.neutral50,
        },
      })}
      options={options}
      styles={{
        control(base) {
          return {
            ...base,
            borderRadius: "var(--radius)",
          };
        },
      }}
    />
  );
};
