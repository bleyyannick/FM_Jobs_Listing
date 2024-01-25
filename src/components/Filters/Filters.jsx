/* eslint-disable react/prop-types */
import styles from './Filters.module.css'

function Filters({languages, role, level,tools}) {
 const languageList = languages.map(language => <li key={language}>{language}</li>)
 const toolList = tools.map(tool => <li key={tool}>{tool}</li>)
  return (
    <ul className={styles.filters}>
        {languageList}
        <li>{role}</li>
        <li>{level}</li>
        {toolList}
    </ul>
  )
}

export default Filters