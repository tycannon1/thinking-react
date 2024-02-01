import './InvoiceTable.css';

import TableHeader from './TableHeader';

import React from 'react'
import AddButton from './AddButton';
import TableRow from './TableRow';

function InvoiceTable({ initialData }) {

    //Loop through initialData and return a <TableRow/
    //component for each invoice object in the array. 

    const rows = initialData.map((invoice) => {
        const { id, description, hours, rate } = invoice;

        return (
            <TableRow
            key={id}
            initialIsEditing={false}
            initialInvoiceData={{ description, rate, hours }}
            />
        )

    })

  return (
 <div>
    <table>
        <thead>
            <TableHeader/>
        </thead>

        <tbody>
        {rows}
        </tbody>

        <tfoot>
            <AddButton />
        </tfoot>
    </table>
 </div>
  )
}

export default InvoiceTable
