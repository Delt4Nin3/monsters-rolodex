import React from "react";
import "./search-box.style.css";

interface SearchBoxProps {
  placeholder: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({placeholder, handleChange}: SearchBoxProps) => (
  <input className={'search'} type={'search'} placeholder={placeholder}
         onChange={handleChange}/>
)

export default SearchBox
