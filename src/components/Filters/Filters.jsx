/* eslint-disable react/prop-types */
import styles from './Filters.module.css'

function Filters({categories, onFilter }) {
  return (
    <ul className={styles.filters}>
        {categories.map(category => <li onClick={()=> onFilter(category)}  key={category}>{category}</li> )}
    </ul>
  )
}

export default Filters