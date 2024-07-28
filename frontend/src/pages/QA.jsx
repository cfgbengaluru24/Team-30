import React from 'react';

const QA = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-64 h-64 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Quality Assurance</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <input id="checkbox1" type="checkbox" className="form-checkbox h-4 w-4 text-green-500" />
            <label htmlFor="checkbox1" className="ml-2">Task 1</label>
          </div>
          <div className="flex items-center">
            <input id="checkbox2" type="checkbox" className="form-checkbox h-4 w-4 text-green-500" />
            <label htmlFor="checkbox2" className="ml-2">Task 2</label>
          </div>
          <div className="flex items-center">
            <input id="checkbox3" type="checkbox" className="form-checkbox h-4 w-4 text-green-500" />
            <label htmlFor="checkbox3" className="ml-2">Task 3</label>
          </div>
          <div className="flex items-center">
            <input id="checkbox4" type="checkbox" className="form-checkbox h-4 w-4 text-green-500" />
            <label htmlFor="checkbox4" className="ml-2">Task 4</label>
          </div>
          <div className="flex items-center">
            <input id="checkbox5" type="checkbox" className="form-checkbox h-4 w-4 text-green-500" />
            <label htmlFor="checkbox5" className="ml-2">Task 5</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QA;
