import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import { GetAll } from "../controllers/GetRequests";
import calculateCost from "./CostCalc";

const PredictionPage = () => {
  const [checkboxes, setCheckBoxes] = useState([false, false, false]);
  const [ua, setUa] = useState(undefined);
  const [siteInfo, setSiteInfo] = useState({ name: "SiteA" });
  const [netCost, setNetCost] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temp = await GetAll(siteInfo);
        setUa(temp);
        console.log(temp);
        setNetCost(calculateCost(temp.untapped_area[0]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckBoxes(newCheckboxes);
  };

  const getDateValue = () => {
    var dateValue = document.getElementById("latanaCamaraRemovalDate").value;
    alert("You will be notified for inspection 3 months from: " + dateValue);
  };

  const isValid3 = checkboxes[0] && checkboxes[1] && !checkboxes[2];

  return (
    <>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-teal-500 text-center">
        Lantana Camara Resource Management
      </h2>

      <div className="flex flex-col space-y-6 p-8 bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            1. Site Selection and Evaluation
          </h2>
          <button className="bg-green-400 text-white font-bold py-4 px-8 rounded">
            <a target="_blank">Evaluate Site</a>
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">2. Cost Predictor</h2>
          {/* {ua ? Object.entries(ua).map(([key, value]) => (
            <p key={key}>
              {key} : {value}
            </p>
          )): ""} */}
          {/* {ua ? JSON.stringify(ua) : ""} */}
          <h3 className="text-xl font-bold mb-4">Net Cost : {netCost}</h3>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2
            className={`text-2xl font-bold mb-4 ${
              isValid3 ? "text-green-500" : "text-red-700"
            }`}
          >
            3. Authorize Removal
          </h2>
          <div className="flex flex-col space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={checkboxes[0]}
                onChange={() => handleCheckboxChange(0)}
                className="mr-2"
              />
              Scale Of Intervention (10-100 hectares)
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={checkboxes[1]}
                onChange={() => handleCheckboxChange(1)}
                className="mr-2"
              />
              Permissions (Respective Stakeholder Committees)
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={checkboxes[2]}
                onChange={() => handleCheckboxChange(2)}
                className="mr-2"
              />
              Are the native species being endangered?
            </label>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            4. Monitoring and Reminder
          </h2>
          <label for="latanaCamaraRemovalDate">
            Date of Lantana Camara Removal:
          </label>
          <Input id="latanaCamaraRemovalDate" type="date" name="removalDate" />
          <button
            className="bg-green-400 text-white font-bold mt-2 py-4 px-8 rounded"
            onClick={() => getDateValue()}
          >
            Evaluate Site
          </button>
        </div>
      </div>
    </>
  );
};

export default PredictionPage;
