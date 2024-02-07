
import './App.css'
import data from '../data.json'; 
import JobList from './components/JobList/JobList';
import FilterBar from './components/FilterBar/FilterBar';
import {  useState } from 'react';

function App() {
  const [filters, setFilters] = useState([]); 
  const [isFiltered, setIsFiltered] = useState(false); 



  const isFilterIncluded = (arrayOfTags, tags) =>  arrayOfTags.includes(tags); 
  
  
  /**
   * 
   * @param {string} filter 
   */
  const handleAddFilter = (filter) => {
    setFilters(prevFilters =>
      isFilterIncluded(prevFilters, filter) ? [...prevFilters]: [...prevFilters, filter]);
      setIsFiltered(true); 
  }

  /**
   * 
   * @param {string} filterToDelete
   */
  const handleDeleteFilter = (filterToDelete) => {
   setFilters(prevFilters => [...prevFilters].filter(filter => filter !== filterToDelete ));
  }
  /**
   * 
   * @param {object[]} itemList 
   * @param {string[] | undefined} filtersList 
   * @returns {object[]} 
   */
  const updateJobList = (itemList, filtersList) => { 
    const copiedJobList = [...itemList];
    
    const filteredList = filtersList.length <= 0 ? copiedJobList
                            : copiedJobList.filter(job =>
                               filtersList.every(filter =>
                                isFilterIncluded([...job.languages, ...job.tools, job.role, job.level], filter))); 
        return filteredList
     }
  const filteredJobList = updateJobList(data, filters); 


  return (
    <main>
      {isFiltered && <FilterBar filters={filters} onDeleteFilter={handleDeleteFilter} />}
      <JobList onAddFilter={handleAddFilter} jobs={filteredJobList} />
    </main>
  )
}

export default App
