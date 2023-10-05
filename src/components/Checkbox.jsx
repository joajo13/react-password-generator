import React from "react";

export const Checkbox = React.memo(({ especs, onChange, name }) => {
  return (
    <div className="flex flex-col items-start md:items-center text-center justify-center w-32 dark:text-white">
      <label className="control control-checkbox m-0 p-0" htmlFor={name}>
        {name}
        <input
          type="checkbox"
          checked={especs}
          name={name}
          id={name}
          onChange={onChange}
        />
        <div className="control_indicator"></div>
      </label>
    </div>
  );
});
