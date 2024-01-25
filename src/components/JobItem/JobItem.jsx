/* eslint-disable react/prop-types */

import styles from './JobItem.module.css'; 
import LogoImg from '../LogoImg/LogoImg';
import Filters from '../Filters/Filters';
function JobItem({jobItem}) {
  return (
    <article>
     <div className={styles.jobDescription}>
      <LogoImg logo={jobItem.logo} />
      <div className={styles.jobTitle}>
        <h3>{jobItem.company}</h3>
        {jobItem.new && <span className={styles.jobNew}>NEW!</span>}
        {jobItem.featured && <span className={styles.jobFeatured}>FEATURED</span>}
        <p className={styles.jobPosition}>{jobItem.position}</p>
        <ul>
          <li>{jobItem.postedAt}</li>
          <li>{jobItem.contract}</li>
          <li>{jobItem.location}</li>
        </ul>
      </div>
     </div>
     <div className={styles.filtersContainer}>
       <Filters 
         tools={jobItem.tools}
         level={jobItem.level}
         role={jobItem.role} 
         languages={jobItem.languages}/>
     </div>
    </article>
  )
}

export default JobItem