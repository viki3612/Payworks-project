import React from 'react';
import "./Checkbox.css"

export default function Checkbox(){

    return(
        <div className="col-1"> {/* Checkbox column */}
        <div className="form-check">
        <input 
        className="form-check-input"
        type="checkbox"
        aria-label="Checkbox for invoice"
        />
        </div>
        </div>
    );
}

