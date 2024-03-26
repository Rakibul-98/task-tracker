import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function DatePicker() {

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    return (
        <Datepicker
            value={value}
            onChange={handleValueChange}
            placeholder={"DD/MM/YY - DD/MM/YY"}
            inputClassName="w-full rounded-md focus:outline-none font-normal py-1 px-5 placeholder:text-gray-500" 
        />
    )
}
