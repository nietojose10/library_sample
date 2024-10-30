import { useState } from "react";
import {  GroupBase, MultiValue } from "react-select";
import Select from "react-select/base"

// Option type for react-select
interface OptionType {
    value: string;
    label: string;
  }

export const SelectComponent = () => {

    const [selectedOption, setSelectedOption] = useState<MultiValue<OptionType>>([]);

    const options: OptionType[] = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const handleChange = (options: MultiValue<OptionType>) => {
        setSelectedOption(options);
      };

  return (
    <Select<OptionType, true, GroupBase<OptionType>>
        isMulti
        value={selectedOption}
        onChange={handleChange}
        options={options}
        inputValue=""  // Adding required props to avoid missing props error
        onInputChange={() => {}}  // Adding a no-op for required handlers
        onMenuOpen={() => {}}  // Adding a no-op for required handlers
        onMenuClose={() => {}}  // Adding a no-op for required handlers
    />
  )
}
