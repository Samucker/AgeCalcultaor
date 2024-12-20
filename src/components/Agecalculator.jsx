import React, { useState } from "react";
import arrow from "../assets/images/arrow.svg";
const AgeCalculator = () => {
  const [dateInput, setDateInput] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [errors, setErrors] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [age, setAge] = useState({
    years: null,
    months: null,
    days: null,
  });
  const validateInput = () => {
    const newErrors = { year: "", month: "", day: "" };
    let isValid = true;
    if (
      !dateInput.day ||
      isNaN(dateInput.day) ||
      dateInput.day < 1 ||
      dateInput.day > 31
    ) {
      newErrors.day = "ingresa un día válido (1-31).";
      isValid = false;
    }
    if (
      !dateInput.month ||
      isNaN(dateInput.month) ||
      dateInput.month < 1 ||
      dateInput.month > 12
    ) {
      newErrors.month = "ingresa un mes válido (1-12).";
      isValid = false;
    }
    if (
      !dateInput.year ||
      isNaN(dateInput.year) ||
      dateInput.year < 1900 ||
      dateInput.year > new Date().getFullYear()
    ) {
      newErrors.year = "ingresa un año válido (1900 -).";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDateInput((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const calculateAge = () => {
    
    if (!validateInput()) return;

    const { year, month, day } = dateInput;
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate > today) {
      setErrors((prev) => ({
        ...prev,
        year: "La fecha no puede ser mayor a hoy.",
      }));
      return;
    }
    const diffInMilliseconds = today - birthDate;
    const diffDate = new Date(diffInMilliseconds);
    const calculatedYears = diffDate.getUTCFullYear() - 1970;
    const calculatedMonths = diffDate.getUTCMonth();
    const calculatedDays = diffDate.getUTCDate() - 1;
    setAge({
      years: calculatedYears,
      months: calculatedMonths,
      days: calculatedDays,
    });
  };
  return (
    <main className="h-[60vh] w-96 md:h-[520px] md:w-[730px] border rounded-br-[170px] rounded-2xl bg-white font-poppins">
      <div className="flex justify-center align-middle md:pt-8 md:pr-60 md:mt-0 mt-8 space-x-5">
        <form className="relative">
          <label className="text-stone-500 font-bold tracking-widest text-sm mb-2 uppercase">
            Day
            <input
              type="text"
              name="day"
              value={dateInput.day}
              onChange={handleChange}
              placeholder="DD"
              className={`flex flex-col border placeholder-gray-400 text-black focus:border-[#844dff] font-bold outline-none bg-transparent p-2 rounded md:h-14 md:w-28 h-14  w-24 text-2xl ${
                errors.day ? "border-red-500" : ""
              }`}
            />
          </label>
          {errors.day && (
            <p className="absolute text-red-500 text-xs left-0 mt-1">
              {errors.day}
            </p>
          )}
        </form>
        <div className="relative">
        <label className="text-gray-600  font-semibold tracking-widest text-sm mb-2 uppercase">
            Year
          <input
            type="text"
            name="year"
            value={dateInput.year}
            onChange={handleChange}
            placeholder="YY"
            className={`flex flex-col border placeholder-gray-400 text-black  focus:border-[#844dff] font-bold outline-none bg-transparent p-2 rounded md:h-14 md:w-28 h-14  w-24  text-2xl ${
              errors.year ? "border-red-500" : ""
            }`}
            />
            </label>
          {errors.year && (
            <p className="absolute text-red-500 text-xs top-[100%] left-0 mt-1">
              {errors.year}
            </p>
          )}
        </div>
        <div className="relative">
        <label className="text-gray-600  font-semibold tracking-widest text-sm mb-2 uppercase">
            Month
          <input
            type="text"
            name="month"
            value={dateInput.month}
            onChange={handleChange}
            placeholder="MM"
            className={`flex flex-col border placeholder-gray-400 text-black focus:border-[#844dff] font-bold outline-none bg-transparent p-2 rounded md:h-14 md:w-28 h-14  w-24  text-2xl ${
              errors.month ? "border-red-500" : ""
            }`}
            />
            </label>
          {errors.month && (
            <p className="absolute text-red-500 text-xs top-[100%] left-0 mt-1">
              {errors.month}
            </p>
          )}
        </div>
      </div>
      <div className="pl-3 pr-6 md:flex  md:flex-row-reverse md:justify-end flex relative md:mt-0 mt-10" >
  <button
    onClick={calculateAge}
    className="bg-[#844dff]  Q  :bg-black  md:p-6 p-3  rounded-full md:ml-0 md:mt-2 ml-36"
    style={{ zIndex: 10 }} 
  >
    <img src={arrow} alt="imagen" className="lg:scale-105 scale-75   "  />

  </button>
  <div
    className="md:h-0  md:static border md:border-l-[610px] border-l-[350px] border-gray-200 md:mt-12 mt-9 absolute "
    style={{ zIndex: 0 }}
  ></div>
</div>
      <div className="mt-5 ml-5 text-[#844dff] font-poppins italic tracking-widest font-black text-6xl   md:text-7xl ">
        <ul className="space-y-2">
          <li>
            {age.years !== null ? age.years : "--"}{" "}
            <strong className="text-black">years</strong>
          </li>
          <li>
            {age.months !== null ? age.months : "--"}{" "}
            <strong className="text-black">month</strong>
          </li>
          <li>
            {age.days !== null ? age.days : "--"}{" "}
            <strong className="text-black">days</strong>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default AgeCalculator;
