/* eslint-disable react/prop-types */


function JobItem({jobItem}) {
  return (
    <article>
     <div>
        <img src={jobItem.logo}/>
     </div>
    </article>
  )
}

export default JobItem