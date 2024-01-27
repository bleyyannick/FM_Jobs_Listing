
import './App.css'
import data from '../data.json'; 
import JobListItems from './components/JobListItems/JobListItems';
import FilterBar from './components/FilterBar/FilterBar';
import { useEffect, useState } from 'react';

function App() {
  const [filters, setFilters] = useState([]); 
  const [isFiltered, setIsFiltered] = useState(false); 
  const [jobs, setJobs] = useState(data); 


  useEffect( () => {
    const updateJobList = ()=> { 
     const copiedJobList = [...jobs];

     const filteredJobList = copiedJobList.filter(job => 
      filters.length <=0 ? job 
       :filters.every(filter => 
        job.languages.includes(filter) ||
        job.tools.includes(filter) ||
        job.level === filter ||
        job.role === filter
        ));
     setJobs(filteredJobList); 
     

    
     }
     updateJobList();
  }, [filters])


   
  /**
   * 
   * @param {string} filter 
   */
  const handleAddFilter = (filter) => {
    setFilters((prevFilters) => [...prevFilters, filter])
    setIsFiltered(true); 
  }
  /**
   * 
   * @param {string} filter 
   */
  const handleDeleteFilter = () => {
   return
  }


  return (
    <main>
      {isFiltered && <FilterBar filters={filters} onDeleteFilter={handleDeleteFilter} />}
      <JobListItems
         onAddFilter={handleAddFilter}
         jobs={jobs} />
    </main>
  )
}

export default App
