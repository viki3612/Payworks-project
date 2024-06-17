import React , {useState} from "react";
import "./XelixSearch.css";
import Result from "./Result";
import payrunData from "./pay-run.json"
import Buttons from "./Buttons";

export default function XelixSearch () {
 const [keyword, setKeyword]=useState("");
 const [invoices, setInvoices] = useState(payrunData?.pay_run?.invoices || []); // Initial state with all invoices
 
 function handleKeywordChange(event){
    setKeyword(event.target.value);
    }
   function search(event){
      event.preventDefault();
    const newFilteredInvoices = invoices.filter(
      (invoice) =>
       invoice.supplier.includes(keyword)
      );
      setInvoices(newFilteredInvoices);//updates the component's state (invoices) with the filtered results, causing the component to re-render and display the filtered list.
    }

    //Using setInvoices with a callback function to update the state.The callback function receives the previous state (prevInvoices) of the invoices list.
const onExcludeToggle= (invoiceNumber) => {
      setInvoices((prevInvoices) =>
        prevInvoices.filter(
           (invoice) => invoice.invoice_number !== invoiceNumber
         )
       );
     };

return(
        <div className="XelixSearch">
            <div className="search-container">
            <div className="row mb-4">
                    <div className="col">
                      <span> 
<h3 className="title">
Invoice Details
</h3>
</span>
</div>

<div className="col">
<form onSubmit={search} >
  <div className="form-group">
<input type="search"
className="form-control shadow-sm bg-body rounded d-flex" 
placeholder="Search Supplier Name"
value={keyword} // Bind input value to the keyword state
onChange={handleKeywordChange} 

/>
<button className="btn btn-light" 
type="submit" 
id="search"> 
<i className="fa-solid fa-magnifying-glass"
>
</i>
</button>
</div>
</form>
</div>

</div>           
<hr className="line"></hr>
 {/* passing invoice prop into results component and the onExcludeToggle function*/}
 <Result invoices={invoices} onExcludeToggle={onExcludeToggle} />
</div>
<Buttons />
    </div>
    )
}
<div>
          </div>