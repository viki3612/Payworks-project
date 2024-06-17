import React from "react";
import "./Buttons.css";

export default function Buttons(){
function handleExclude(){
 alert ("Select which Supplier would you like to exclude");
    }
    return(
<div className="buttons">
<div className="row justify-content-end mt-4">
<div className="col-auto">
<button className="btn btn-primary me-2 active" type="submit" id="pay-button">Pay now</button>
<button className="btn btn-primary " 
type="submit" 
id="exclude-button"
onClick={handleExclude}
>Exclude supplier</button>
</div>
</div>
</div>
    )
}