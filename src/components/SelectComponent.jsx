import { Select, SelectItem } from "@tremor/react";
import { CalculatorIcon } from "@heroicons/react/outline";

export function SelectComponent() {
  return (
    <div className="max-w-sm space-y-6 dark:bg-tremor-background">
      <Select className="dark:bg-tremor-background">
        <SelectItem value="1" icon={CalculatorIcon}>
          Yearly
        </SelectItem>
        <SelectItem value="2" icon={CalculatorIcon}>
          Monthly
        </SelectItem>
        <SelectItem value="3" icon={CalculatorIcon}>
          Weakly
        </SelectItem>
      </Select>
    </div>
  );
}