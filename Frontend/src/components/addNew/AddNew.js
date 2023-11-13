// import React, { useState } from "react";
// import "./addNew.css";

// function AddNew() {
//   const [formData, setFormData] = useState({
//     eventName: "",
//     eventDetails: "",
//     location: "",
//     date: "",
//     time: "",
//     isImportant: false,
//   });

//   // Update form data when input values change
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const inputValue = type === "checkbox" ? checked : value;

//     setFormData({
//       ...formData,
//       [name]: inputValue,
//     });
//   };

//   // Handle form submission
//   const handleSaveEvent = async () => {
//     try {
//       // Make a POST request to the backend API
//       const response = await fetch("/api/todos", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Handle success, e.g., show a success message or redirect
//         console.log("Event saved successfully!");
//       } else {
//         // Handle error, e.g., show an error message
//         console.error("Failed to save event");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="add-new">
//       <form className="add-new-form">
//         <table>
//           <tbody>
//             <tr>
//               <td>
//                 <label>Event Name</label>
//               </td>
//               <td>
//                 <input className="eventIn" type="text" autoComplete="off" />
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <label>Event Details</label>
//               </td>
//               <td>
//                 <input className="eventIn" type="text" autoComplete="off" />
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <label>Location</label>
//               </td>
//               <td>
//                 <input className="eventIn" type="text" autoComplete="off" />
//               </td>

//               {/* <td>
//                 <button type="button">Search City</button>
//               </td> */}
//             </tr>
//             <tr>
//               <td>
//                 <label>Date</label>
//               </td>
//               <td>
//                 <input className="eventIn" type="date" autoComplete="off" />
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <label>Time</label>
//               </td>
//               <td>
//                 <input className="eventIn" type="time" autoComplete="off" />
//               </td>
//             </tr>
//             <tr>
//               <td></td>
//               <td className="chkBox">
//                 <label className="chkBoxLabel">Mark as Important</label>
//                 <input className="chkBoxIn" type="checkbox" />
//               </td>
//             </tr>
//             <tr>
//               <td></td>
//               <td>
//                 <button type="button" onClick={handleSaveEvent}>
//                   Save Event
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </form>
//     </div>
//   );
// }

// export default AddNew;

import React, { useState } from "react";
import "./addNew.css";

function AddNew() {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDetails: "",
    location: "",
    date: "",
    time: "",
    isImportant: false,
  });

  // Update form data when input values change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  // Handle form submission

  const handleSaveEvent = async () => {
    try {
      // Make a POST request to the backend API
      const response = await fetch("http://localhost:5003/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or redirect
        console.log("Event saved successfully!");
      } else {
        // Handle error, e.g., show an error message
        console.error("Failed to save event");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="add-new">
      <form className="add-new-form">
        <table>
          <tbody>
            <tr>
              <td>
                <label>Event Name</label>
              </td>
              <td>
                <input
                  className="eventIn"
                  type="text"
                  autoComplete="off"
                  name="eventName" // Add name attribute
                  value={formData.eventName} // Bind value to state
                  onChange={handleInputChange} // Add onChange handler
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Event Details</label>
              </td>
              <td>
                <input
                  className="eventIn"
                  type="text"
                  autoComplete="off"
                  name="eventDetails" // Add name attribute
                  value={formData.eventDetails} // Bind value to state
                  onChange={handleInputChange} // Add onChange handler
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Location</label>
              </td>
              <td>
                <input
                  className="eventIn"
                  type="text"
                  autoComplete="off"
                  name="location" // Add name attribute
                  value={formData.location} // Bind value to state
                  onChange={handleInputChange} // Add onChange handler
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Date</label>
              </td>
              <td>
                <input
                  className="eventIn"
                  type="date"
                  autoComplete="off"
                  name="date" // Add name attribute
                  value={formData.date} // Bind value to state
                  onChange={handleInputChange} // Add onChange handler
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Time</label>
              </td>
              <td>
                <input
                  className="eventIn"
                  type="time"
                  autoComplete="off"
                  name="time" // Add name attribute
                  value={formData.time} // Bind value to state
                  onChange={handleInputChange} // Add onChange handler
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="chkBox">
                <label className="chkBoxLabel">Mark as Important</label>
                <input
                  className="chkBoxIn"
                  type="checkbox"
                  name="isImportant" // Add name attribute
                  checked={formData.isImportant} // Bind checked to state
                  onChange={handleInputChange} // Add onChange handler
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="button" onClick={handleSaveEvent}>
                  Save Event
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default AddNew;
