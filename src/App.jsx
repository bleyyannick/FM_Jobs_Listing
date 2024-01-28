
import './App.css'
import data from '../data.json'; 
import JobList from './components/JobList/JobList';
import FilterBar from './components/FilterBar/FilterBar';
import {  useState } from 'react';

function App() {
  const [filters, setFilters] = useState([]); 
  const [isFiltered, setIsFiltered] = useState(false); 
  
    const updateJobList = (itemList, filtersList)=> { 

    const copiedJobList = [...itemList];

    const filteredItemList = filtersList.length <= 0 ? copiedJobList
                            : copiedJobList.filter(job =>
                               filtersList.every(filter =>
                                [...job.languages, ...job.tools, job.role, job.level].includes(filter))); 
        return filteredItemList
     }
   
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
  const handleDeleteFilter = (filterToDelete) => {
   setFilters((prevFilters) => [...prevFilters].filter(filter => filter !== filterToDelete ));
  }


  return (
    <main>
      {isFiltered && <FilterBar filters={filters} onDeleteFilter={handleDeleteFilter} />}
      <JobList
         onAddFilter={handleAddFilter}
         jobs={updateJobList(data, filters)} />
    </main>
  )
}

export default App
