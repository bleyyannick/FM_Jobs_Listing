
import './App.css'
import data from '../data.json'; 
import {JobListItems}  from './components/JobListItems/JobListItems';
import JobItem from './components/JobItem/JobItem';



function App() {
  const jobsItems = data.map(jobItem => <JobItem key={jobItem.id} jobItem={jobItem} />)
  return (
    <>
    <main>
      <JobListItems>
        {jobsItems}
      </JobListItems>
    </main>
    </>
  )
}

export default App
