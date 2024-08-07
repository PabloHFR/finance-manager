import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Props = {
  columnIndex: number;
  selectedColumns: Record<string, string | null>;
  onChange: (columnIndex: number, value: string | null) => void;
};

const options = [
  { label: "quantia", value: "amount" },
  { label: "beneficiário", value: "payee" },
  { label: "data", value: "date" },
];

export const TableHeadSelect = ({
  columnIndex,
  selectedColumns,
  onChange,
}: Props) => {
  const currentSelection = selectedColumns[`column_${columnIndex}`];

  return (
    <Select
      value={currentSelection || ""}
      onValueChange={(value) => onChange(columnIndex, value)}
    >
      <SelectTrigger
        className={cn(
          "focus:ring-offset-0 focus:ring-transparent outline-none border-none bg-transparent capitalize",
          currentSelection && "text-blue-500"
        )}
      >
        <SelectValue placeholder="Pular" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="skip">Pular</SelectItem>
        {options.map((option, index) => {
          // Is disabled if user has already selected the option in another table select component
          const disabled =
            Object.values(selectedColumns).includes(option.value) &&
            selectedColumns[`column_${columnIndex}`] !== option.value;

          return (
            <SelectItem
              key={index}
              value={option.value}
              disabled={disabled}
              className="capitalize"
            >
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
