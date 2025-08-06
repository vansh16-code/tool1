"use client";
import { useState, useEffect } from "react";

export default function BMRCalculator() {
  const [unit, setUnit] = useState("metric");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmr, setBMR] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleUnitChange = (newUnit) => {
    if (newUnit === unit) return;

    if (unit === "metric") {
      if (newUnit === "us") {
        setHeight((prev) =>
          prev ? (parseFloat(prev) / 2.54).toFixed(2) : ""
        );
        setWeight((prev) =>
          prev ? (parseFloat(prev) * 2.20462).toFixed(2) : ""
        );
      } else if (newUnit === "other") {
        setHeight((prev) =>
          prev ? (parseFloat(prev) * 100 / 2.54).toFixed(2) : "" // meters → cm → inches
        );
        setWeight((prev) =>
          prev ? (parseFloat(prev) * 2.20462).toFixed(2) : ""
        );
      }
    } else if (unit === "us") {
      if (newUnit === "metric") {
        setHeight((prev) =>
          prev ? (parseFloat(prev) * 2.54).toFixed(2) : ""
        );
        setWeight((prev) =>
          prev ? (parseFloat(prev) / 2.20462).toFixed(2) : ""
        );
      } else if (newUnit === "other") {
        setHeight((prev) =>
          prev ? (parseFloat(prev) * 2.54 / 100 * 39.3701).toFixed(2) : "" // inches → cm → m → inches again
        );
        setWeight((prev) =>
          prev ? (parseFloat(prev)).toFixed(2) : ""
        );
      }
    } else if (unit === "other") {
      if (newUnit === "metric") {
        setHeight((prev) =>
          prev ? (parseFloat(prev) * 2.54).toFixed(2) : "" // inches → cm
        );
        setWeight((prev) =>
          prev ? (parseFloat(prev) / 2.20462).toFixed(2) : ""
        );
      } else if (newUnit === "us") {
        setHeight((prev) =>
          prev ? (parseFloat(prev)).toFixed(2) : ""
        );
        setWeight((prev) =>
          prev ? (parseFloat(prev)).toFixed(2) : ""
        );
      }
    }

    setUnit(newUnit);
  };

  const calculateBMR = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);
    if (isNaN(h) || isNaN(w) || isNaN(a)) return;

    let result;
    if (unit === "metric") {
      result =
        gender === "male"
          ? 10 * w + 6.25 * h - 5 * a + 5
          : 10 * w + 6.25 * h - 5 * a - 161;
    } else if (unit === "us" || unit === "other") {
      result =
        gender === "male"
          ? 66 + 6.23 * w + 12.7 * h - 6.8 * a
          : 655 + 4.35 * w + 4.7 * h - 4.7 * a;
    }

    setBMR(result.toFixed(2));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#f5faff] rounded-xl shadow-md mt-8">
      <h2 className="text-3xl font-bold mb-4 text-[#004080] text-center">
        BMR Calculator
      </h2>

      <div className="flex justify-center space-x-4 mb-6">
        {["metric", "us", "other"].map((u) => (
          <button
            key={u}
            onClick={() => handleUnitChange(u)}
            className={`px-4 py-2 rounded-full font-medium ${
              unit === u
                ? "bg-[#004080] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {u === "metric"
              ? "Metric"
              : u === "us"
              ? "US Units"
              : "Other Units"}
          </button>
        ))}
      </div>

      <div className="grid gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="border border-gray-300 p-2 w-full rounded text-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded text-gray-900"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height (
              {unit === "metric"
                ? "cm"
                : unit === "us"
                ? "inches"
                : "meters (converted to inches)"}
              )
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
              className="border border-gray-300 p-2 w-full rounded text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weight (
              {unit === "metric"
                ? "kg"
                : unit === "us"
                ? "lbs"
                : "kg (converted to lbs)"}
              )
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
              className="border border-gray-300 p-2 w-full rounded text-gray-900"
            />
          </div>
        </div>
      </div>

      <button
        onClick={calculateBMR}
        className="bg-[#004080] hover:bg-[#003366] text-white px-6 py-2 rounded font-semibold w-full"
      >
        Calculate BMR
      </button>

      {bmr && (
        <p className="mt-4 text-center text-lg font-semibold text-[#004080]">
          Your BMR is: {bmr} calories/day
        </p>
      )}
    </div>
  );

  
}
