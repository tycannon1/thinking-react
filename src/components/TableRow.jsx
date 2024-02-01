
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import HoursCell from './HoursCell';
import RateCell from './RateCell';
import formatCurrency from "../utils/formatCurrency.js"
import { useState } from 'react';

function TableRow( {initialIsEditing, initialInvoiceData } ) {

  const { description, rate, hours } = initialInvoiceData 
  const [editMode, setEditMode] = useState(initialIsEditing)

  const makeEditMode = () => setEditMode(true)
  const makeNormalMode = () => setEditMode(false)

  return (
    <tr>
    <ModeButtons 
    isEditing={editMode} 
    saveClick={makeNormalMode}
    editClick={makeEditMode}
    />
    <DescriptionCell isEditing={editMode} value={ description } />
    <RateCell isEditing={editMode} value={rate} />
    <HoursCell isEditing={editMode} value={hours} />
    <td>{formatCurrency(rate * hours)}</td>
    </tr>
  )
}

export default TableRow