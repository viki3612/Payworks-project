import React from "react";
import "./Result.css";
import Checkbox from "./Checkbox.js";
import Excluded from "./Excluded.js";


export default function Result({invoices,onExcludeToggle} ) {
   const invoiceFields = [
    "supplier",
    "supplier_reference",
    "invoice_number",
    "posted_date",
    "amount",
    "currency",
    "due_date",
    "status",
    "exclude_invoice",
  ];
 

  return (
    <div className="Result">
        <div className="container"> {/* Wrap whole structure in a container */}
      <div className="row header-row mb-4"> 
        <div className="col"></div> {/* Empty column for checkbox */}

        {/* map through invoicefields*/}
        {invoiceFields.map((field) => (
          <div className="col" key={field}>
            {field.toUpperCase().replace(/_/g, " ")}
          </div>
        ))}
      </div>
 {/* map through invoices to create a row for each*/}
 {invoices.map((invoice) => (
        <div className="row invoice-row mb-2" key={invoice.invoice_number}> 
            <Checkbox  />
                  {/* map through invoice fields to create a column with the values of the data corresponding to the right col fields. Render invoice fields EXCLUDING 'excluded'*/}
                  {invoiceFields.slice(0, -1).map((field) => (
                       <div className="col invoice-field" key={`${invoice.invoice_number}-${field}`}>
                         {invoice[field]}
                       </div>
                     ))}
                         {/* Toggle Switch */}
                 <Excluded 
                invoiceNumber={invoice.invoice_number}
                onExcludeToggle={onExcludeToggle}
              />
                        </div>
            )
           )}
      </div>
    </div>
  );
}