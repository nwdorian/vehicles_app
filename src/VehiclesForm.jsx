import { useEffect, useState } from "react";

const initialState = {
  manufacturer: "",
  model: "",
  color: "",
  year: "2024",
  forSale: true,
};

export default function VehiclesForm({ onSubmit, editing, saveEdit }) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  function handleChange(key, value) {
    setForm({ ...form, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editing) {
      saveEdit(form);
    } else {
      onSubmit(form);
    }
    setForm(initialState);
  }

  return (
    <div className="vehicles-form">
      <p>Enter new vehicle information and press submit</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="manufacturer">
          Manufacturer:
          <input
            onChange={(e) =>
              handleChange("manufacturer", e.currentTarget.value)
            }
            value={form.manufacturer}
            id="manufacturer"
            name="manufacturer"
            type="text"
            required
          />
        </label>
        <label htmlFor="model">
          Model:{" "}
          <input
            onChange={(e) => handleChange("model", e.currentTarget.value)}
            disabled={editing ? true : false}
            value={form.model}
            id="model"
            name="model"
            type="text"
            required
          />
        </label>
        <label htmlFor="color">
          Color:{" "}
          <input
            onChange={(e) => handleChange("color", e.currentTarget.value)}
            value={form.color}
            id="color"
            name="color"
            type="text"
            required
          />
        </label>
        <label htmlFor="year">
          Year:
          <input
            onChange={(e) => handleChange("year", e.currentTarget.value)}
            value={form.year}
            id="year"
            type="number"
            min="1900"
            max="2099"
            step="1"
            required
          />
        </label>
        <label htmlFor="is-forsale">
          <input
            onChange={() => handleChange("forSale", true)}
            id="is-forsale"
            type="radio"
            name="for-sale"
            className="inline"
            checked={form.forSale}
          />
          For Sale
        </label>
        <label htmlFor="not-forsale">
          <input
            onChange={() => handleChange("forSale", false)}
            id="not-forsale"
            type="radio"
            name="for-sale"
            className="inline"
            checked={!form.forSale}
          />
          Not For Sale
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
