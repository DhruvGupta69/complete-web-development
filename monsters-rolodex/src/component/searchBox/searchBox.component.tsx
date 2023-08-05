import React from "react";
import "./searchBox.styles.css";

type myProps = {
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const SearchBox = (props: myProps): any => {
  return (
    <input
      className="search"
      type="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};
