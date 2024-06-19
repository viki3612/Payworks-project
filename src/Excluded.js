import React from "react";
import "./Excluded.css";

export default function Excluded({ invoiceNumber, onExcludeToggle}) {
  return (
      <div className="col-1">

    {/* Toggle Switch */}
<div className="form-check form-switch">
<input
          className="form-check-input"
          type="checkbox"
          id={`flexSwitchCheckDefault-${invoiceNumber}`}
onChange={() => onExcludeToggle(invoiceNumber)}
        />
</div>
    </div>

  )
}


