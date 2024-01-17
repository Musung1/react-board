import React, { useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Header from './\bcomponent/Header';
import WriteArticle from './\bcomponent/WriteArticle';
import Article from './\bcomponent/Article';
import MyForm from './test/MyForm';
import MyHome from './test/MyHome'
function App() {
  const writeArticle = <WriteArticle/>
  const myForm = <MyForm></MyForm>
  const myHome = <MyHome></MyHome>
  const navigate = useNavigate();

  const goToWrite = () => {
    console.log("hiroo")
    navigate('/write')
  }
  const articleDetail = <Article/>
  return ( 
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={myHome}/>
        <Route path="/write" element={myForm}/>
        <Route path="/articles/:title" element={articleDetail}/>
      </Routes>
    </div>
  )
}

export default App;
