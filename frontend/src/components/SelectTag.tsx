import { Select } from "@chakra-ui/react";
import React from "react";
import { OptionItem } from "../DataTypes";

const SelectTag = ({
  placeholder,
  name,
  options,
  value,
  sendSelectedOptionValue,
}: {
  options: OptionItem[];
  placeholder: string;
  sendSelectedOptionValue: (e: any) => void;
  name: string;
  value: string;
}) => {
  return (
    <>
      <Select
        value={value}
        minW={200}
        name={name}
        onChange={(e) => sendSelectedOptionValue(e)}
        maxH={"200px"}
        placeholder={placeholder}
        borderRadius={"1px"}
        required={true}
      >
        {options?.map((el) => (
          <option key={el?.id}>{el?.value}</option>
        ))}
      </Select>{" "}
    </>
  );
};

export default SelectTag;
