import { ChangeEvent } from "react";

export const getTypes = (
  type: ChangeEvent<HTMLSelectElement>,
  setType: React.Dispatch<React.SetStateAction<string>>
) => {
  if (type.target.value !== "") {
    setType(type.target.value);
  } else {
    setType("");
  }
};
