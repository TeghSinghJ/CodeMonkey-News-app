import './App.css';
import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  Routes,
  BrowserRouter,
  Route
} from "react-router-dom"; 
import LoadingBar from 'react-top-loading-bar';
const App = ()=>{
  
  const news_api = process.env.REACT_APP_NEWS_API;
  const[progress,setProgress] = useState(0);
  // setProgress=(pgs)=>{
  //   setState({progress: pgs})
  // }
    
    return (
      <>
      <BrowserRouter>
      <LoadingBar
              color='#f11946'
              progress={progress}
              height={3}
            />
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route exact path="/general" element={<News setProgress={setProgress} api={news_api} pageSize={6} country="us" category="general" key="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} pageSize={6} api={news_api} key="business" country="us" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} pageSize={6} api={news_api} key="entertainment" country="us" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} pageSize={6} api={news_api} country="us" key="general" category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} pageSize={6} api={news_api} country="us" key="health" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} pageSize={6} api={news_api} key="science" country="us" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} pageSize={6} api={news_api} country="us" key="sports" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} pageSize={6} api={news_api} key="technology" country="us" category="technology"/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
      </>
    )
}

export default App;