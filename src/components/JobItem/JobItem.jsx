/* eslint-disable react/prop-types */


function JobItem({jobItem}) {
  return (
    <article>
     <div className="logo-img">
        <img src={jobItem.logo}/>
     </div>
     <div className="job-description">
       <div className="job-title">
        <h3>{jobItem.company}</h3>
        {jobItem.new && <span>new</span>}
        {jobItem.featured && <span>featured</span>}
       </div>
       <p>{jobItem.position}</p>
     </div>
     <div>
      <span>{jobItem.postedAt}</span>
      <ul>
        <li>{jobItem.contract}</li>
        <li>{jobItem.location}</li>
      </ul>
     </div>
     <div>
       {jobItem.languages}
       {jobItem.role}
       {jobItem.level}
       {jobItem.tools}



     </div>
    </article>
  )
}

export default JobItem