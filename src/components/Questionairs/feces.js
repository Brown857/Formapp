import React, { useState } from "react";
import "./form.css";

import type1 from "../../Assets/type1.png";
import type2 from "../../Assets/type2.png";
import type3 from "../../Assets/type3.png";
import type4 from "../../Assets/type4.png";
import type5 from "../../Assets/type5.png";
import type6 from "../../Assets/type6.png";
import type7 from "../../Assets/type7.png";

const Form = () => {
  const [formData, setFormData] = useState({
    descriptions: {},
  });

  const imageSources = [type1, type2, type3, type4, type5, type6, type7];

  // Update descriptions in formData
  const imageSelectFunction = (altId, description) => {
    setFormData((prevData) => ({
      ...prevData,
      descriptions: {
        ...prevData.descriptions,
        [altId]: description,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submit-feces-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        alert("Form submitted successfully!");
      } else {
        console.error("Error submitting form:", response.statusText);
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please check the console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="feces-form-container">
        <h2>Feces Table</h2>
        <table className="feces-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {imageSources.map((src, index) => (
              <tr key={index + 1}>
                <td>
                  <img
                    src={src}
                    alt={`Type ${index + 1}`}
                    className="feces-image"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder={`Describe Type ${index + 1}`}
                    onChange={(e) =>
                      imageSelectFunction(`Type ${index + 1}`, e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Form;
