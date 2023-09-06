import React, { SetStateAction, useState } from "react";

const colors = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-teal-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-red-700",
  "bg-green-700",
  "bg-teal-700",
  "bg-blue-700",
  "bg-indigo-700",
  "bg-purple-700",
  "bg-pink-700",
];

interface ColourPickerProps {
  setUserColour: React.Dispatch<SetStateAction<string>>;
}
const ColourPicker: React.FC<ColourPickerProps> = ({ setUserColour }) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isAccordianVisible, setIsAccordianVisible] = useState<boolean>(false);

  const handleColourChange = (color: string) => {
    setIsAccordianVisible(false);
    setSelectedColor(color);
    const replacedString = color.replace(/bg/g, "text");
    setUserColour(replacedString);
  };

  return isAccordianVisible ? (
    <div className="flex flex-wrap justify-center">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-16 h-16 cursor-pointer m-2 ${color} ${
            selectedColor === color ? "ring ring-offset-2 ring-blue-500" : ""
          }`}
          onClick={() => handleColourChange(color)}
        ></div>
      ))}
    </div>
  ) : (
    <div className="flex flex-wrap justify-center">
      <button
        type="button"
        className={`${selectedColor} px-3.5 py-2  rounded-3xl`}
        onClick={() => setIsAccordianVisible(!isAccordianVisible)}
      >
        Select Your Colour
      </button>
    </div>
  );
};

export default ColourPicker;
