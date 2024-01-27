/* eslint-disable react/prop-types */
import Filters from "../Filters/Filters"

function FilterBar({filters, onDeleteFilter}) {

  return (
    <div><Filters categories={filters} onFilter={onDeleteFilter}/></div>
  )
}

export default FilterBar