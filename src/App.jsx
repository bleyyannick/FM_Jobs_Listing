
import './App.css'
import data from '../data.json'; 
import {JobListItems}  from './components/JobListItems/JobListItems';
import JobItem from './components/JobItem/JobItem';
import FilterBar from './components/FilterBar/FilterBar';
import { useState } from 'react';

function App() {
  const [filters, setFilters] = useState([]); 
  const [isFiltered, setIsFiltered] = useState(false); 

  const handleAddFilter = (filter) => {
    setFilters( (prevFilters) => [...prevFilters, filter])
    setIsFiltered(true); 
  }

  const handleDeleteFilter = (filter) => {
    console.log(filter)
  }

 

  const jobsItems = data.map(jobItem => <JobItem onAddFilter={handleAddFilter}  key={jobItem.id} jobItem={jobItem} />)
  return (
    <>
    <main>
      {isFiltered && <FilterBar filters={filters} onDeleteFilter={handleDeleteFilter} />}
      <JobListItems>
        {jobsItems}
      </JobListItems>
    </main>
    </>
  )
}

export default App
