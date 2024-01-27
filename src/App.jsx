
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
    const updateJobList = (itemList, filtersList)=> { 
     const copiedJobList = [...itemList];

     const filteredItemList = copiedJobList.filter(job => 
       filtersList.length <=0 ? job 
       :filtersList.every(filter => [...job.languages, ...job.tools, job.role, job.level].includes(filter)));
     setJobs(filteredItemList); 
    
     }
     updateJobList(jobs, filters);
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
