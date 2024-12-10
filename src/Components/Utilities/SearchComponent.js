import React from 'react';
import Select from 'react-select';
import { FaSearch } from 'react-icons/fa'; // Install react-icons for the search icon
import myImage from "../../Images/search-normal.svg";

const SearchComponent = ({
  options,
  onChange,
  placeholder = "بحث...",
  noOptionsMessage = "لا توجد نتائج", // Default message
  isMulti = false,
  isClearable = true,
  defaultValue = null,
  labelForOption = 'label',
  valueForOption = 'value',
}) => {
  // Format options dynamically
  const formattedOptions = options.map((item) => ({
    label: item[labelForOption],
    value: item[valueForOption],
  }));

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      direction: 'rtl', // Set right-to-left
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px 0 0 4px',
      borderColor: '#747475',
      boxShadow: 'none',
      '&:hover': { borderColor: '#747475' },
      paddingRight: '10px',
      height: '52px',
    }),
    dropdownIndicator: () => ({
      display: 'none', // Remove the dropdown arrow
    }),
    indicatorSeparator: () => ({
      display: 'none', // Remove the vertical line (|) separator
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: '14px',
      color: '#999',
    }),
    input: (provided) => ({
      ...provided,
      margin: 0,
      padding: 0,
    }),
    menu: (provided) => ({
      ...provided,
      textAlign: 'right',
      borderRadius: '4px 0 0 4px',
    }),
  };

  return (
    <div style={{ position: 'relative', maxWidth: '1200px' }}>
      {/* React Select Input */}
      <Select
        options={formattedOptions}
        onChange={onChange}
        placeholder={placeholder}
        isMulti={isMulti}
        isClearable={isClearable}
        defaultValue={defaultValue}
        styles={customStyles}
        components={{
          IndicatorSeparator: null, // Remove separator (|) programmatically
          DropdownIndicator: null, // Remove dropdown arrow
        }}
        noOptionsMessage={() => noOptionsMessage} 
      />

      {/* Search Icon */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none', // Prevent click interference
          color: '#B49345',
          // background:'#888',
          height:"50px",
          width:"10%",
          borderRight:"1px solid #747475",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
         <img
              src={myImage}
              alt="Calendar Edit"
            />
      </div>
    </div>
  );
};

export default SearchComponent;
