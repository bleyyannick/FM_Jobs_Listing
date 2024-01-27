
/* eslint-disable react/prop-types */
import JobItem from '../JobItem/JobItem';
import styles from './JobListItems.module.css'; 

function JobListItems({ jobs, onAddFilter}) {

  return (
    <section className={styles.container}>
        {jobs.map(job => <JobItem key={job.id} 
                                  jobItem={job} 
                                  onAddFilter={onAddFilter} />)}
    </section>
  )
}

export default JobListItems
