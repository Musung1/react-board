import React, { useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Header from './\bcomponent/Header';
import Table from './\bcomponent/Table';
import SearchBar from './\bcomponent/SearchBar';
import WriteArticle from './\bcomponent/WriteArticle';
import Article from './\bcomponent/Article';
function App() {
  const writeArticle = <WriteArticle/>

  const navigate = useNavigate();

  const goToWrite = () => {
    console.log("hiroo")
    navigate('/write')
  }
  const articleDetail = <Article/>
  const table = 
  <div>
    <Table/>
    <button onClick={goToWrite} >글쓰기</button>
  </div>
  return ( 
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={table}/>
        <Route path="/write" element={writeArticle}/>
        <Route path="/articles/:title" element={articleDetail}/>
      </Routes>
    </div>
  )
}

export default App;
