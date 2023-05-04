import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AboutUs from '../AboutUs';
import HomePage from '../HomePage';
import TeamDetails from '../TeamDetails';
import CommentSection from '../CommentSection';
import './styles.css'

function App() {
     const [ detailsPage, setDetailsPage ] = useState()
     const [ comment, setComment ] = useState ({})
    return (
        <>
            <div className='Container'>
                <div className='navbar'>
                    <Link to='/'>
                        <h3 className='navBtn'>Home</h3>
                    </Link>
                        <Link to='/About'>
                            <h3 className='navBtn'>About Us</h3>
                        </Link>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<HomePage setTeamData={setDetailsPage}/>} />
                <Route path='/About' element={<AboutUs />} />
                <Route path='/TeamDetails/:id/*' element={<TeamDetails teamData={detailsPage} />} />
                <Route path='/CommentSection/:playerId' element={<CommentSection />} />
            </Routes>
        </>
    )
}

export default App;