import "../styles.css";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", age: "", email: "" });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Injecting from Form component-</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          gap: "10px",
          border: "1px solid #ccc",
          width: "300px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <label
            style={{
              flexBasis: "40%",
              textAlign: "right",
              marginRight: "10px",
            }}
          >
            Name:
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              flexBasis: "60%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <label
            style={{
              flexBasis: "40%",
              textAlign: "right",
              marginRight: "10px",
            }}
            value="formData.age"
            onChange={handleChange}
            name="age"
          >
            Age:
          </label>
          <input
            style={{
              flexBasis: "60%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
            type="number"
            placeholder="Enter your age"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <label
            style={{
              flexBasis: "40%",
              textAlign: "right",
              marginRight: "10px",
            }}
            name="email"
            value={formData.email}
            onChange={handleChange}
          >
            Email:
          </label>
          <input
            style={{
              flexBasis: "60%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <button
          style={{
            alignSelf: "center",
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div>
          <h3>Thank you {submittedData.name}!!</h3>
        </div>
      )}
    </div>
  );
}
export default Form;
