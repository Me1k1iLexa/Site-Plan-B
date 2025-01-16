import "./CustomUL.css";

function CustomUL({ customMarker, items, className }) {
  return (
    <ul className={`custom-UL ${className || ""}`}>
      {items.map((item, index) => (
        <li key={index} className="custom-Ul-item">
          <img src={customMarker} className="custom-UL-marker" alt="Marker" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default CustomUL;
