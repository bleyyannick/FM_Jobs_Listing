/* eslint-disable react/prop-types */
import styles from './Filters.module.css'

function Filters({filterTablets, onFilter }) {
  return (
    <ul className={styles.filters}>
        {filterTablets.map(filterTablet => <li onClick={ () => onFilter(filterTablet)}  key={filterTablet}>{filterTablet}</li> )}
    </ul>
  )
}

export default Filters