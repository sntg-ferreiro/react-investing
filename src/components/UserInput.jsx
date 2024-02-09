export const UserInput = ({ value, placeholder, label, onChange, field }) => {
  return (
    <p>
      <label>{label}</label>
      <input
        value={value}
        required
        type="number"
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value, field)}
      />
    </p>
  );
};
