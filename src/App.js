import React from 'react'

import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Post from './pages/Post';
import BlogProvider from './contexts/blogProvider'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

function App() {
    return (
        <>
             

               <BlogProvider>
                            <div className="App">
                               <Router>
                                            <Navbar/>
                                                    <Switch>
                                                        <Route path='/' exact component={Home} />
                                                        <Route path='/:postId' exact component={Post} />
                                                    </Switch>
                                           
                                </Router>
                            </div>   
             </BlogProvider>
            
        </>
    )
}

export default App
