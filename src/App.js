import React from 'react'
import NavBarComponent from './component/NavBar/NavBar';
import './style.css'
import SpecialityComponent from './component/Speciality/specialityComponent';
import Education from './component/Education/Education';
import PersonalComponent from './component/PersonalComponent/PersonalComponent';
import Contact from './component/contact/contact';
const App = () => {
  return (
    <div className='global' >
      <NavBarComponent/>
        <PersonalComponent/>
        <SpecialityComponent/>
    <Education/>  
        <Contact/>
     </div>
   
  )
}

export default App;