/* eslint-disable react/prop-types */
import Filters from "../Filters/Filters"; 
import styles from "./FilterBar.module.css";

function FilterBar({filters, onDeleteFilter, onClear}) {
  return (
    filters.length > 0 && 
     <div className={styles.filterBar}>
      <Filters categories={filters} onFilter={onDeleteFilter}/>
      <button className={styles.btnClear} onClick={onClear}>
        Clear
      </button>
     </div>
  )
}

export default FilterBar