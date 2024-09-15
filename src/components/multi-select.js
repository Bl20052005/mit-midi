"use client";

import React from "react";
import Select from "react-select";

export default function MultiSelect({
  selectedOptions,
  setSelectedOptions,
  options,
  name
}) {
  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  return (
    <div className="w-96">
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        className={name}
        classNamePrefix="select"
        placeholder="Select your genre / moods"
      />
    </div>
  );
}
