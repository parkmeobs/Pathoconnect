import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;
}

const CustomInputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  required = false,
  className = "",
}) => {
  return (
    <div>
      <label className="block mb-1 font-medium text-blue">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full text-blue-900 border border-[#ccc] rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue placeholder-[#ccc] ${className}`}
      />
    </div>
  );
};

export default CustomInputField;
