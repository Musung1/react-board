import React, { useState } from 'react';
import Header from './\bcomponent/Header';
import Table from './\bcomponent/Table';
import SearchBar from './\bcomponent/SearchBar';
import WriteArticle from './\bcomponent/WriteArticle';
import Article from './\bcomponent/Article';
function App() {
  const tableDummy = [
    {title: "1번",body:"hello", writer:"무성",id: "musung1", date: "2023-01-09", views: "10" },
    {title: "2번",body:"hello", writer:"무성2",id: "musung1", date: "2023-01-09", views: "10" },
    {title: "3번",body:"hello", writer:"무성3",id: "musung1", date: "2023-01-09", views: "10" },
    {title: "4번", body:"hello",writer:"무성4",id: "musung1", date: "2023-01-09", views: "10" },
  ]
  const dummy1 = {title: "5번", writer:"무성",id: "musung1", date: "2023-01-09", views: "10" }
  const [isWriting,setIsWriting] = useState(false)
  const [tableList,setTableList] = useState(tableDummy)
  const [currentArticle,setCurrentArticle] = useState(null)
  let body = null
  if(isWriting) {
    body = <WriteArticle onSubmit={(element,value)=> {
      setTableList((prev)=>[...prev,element])
      setIsWriting(value)
    }}/>
  } else if(currentArticle != null) {
    body = <Article currentArticle={currentArticle} goBack={()=>setCurrentArticle(null)}/>
  } else {
    body = 
    <div>
      {/* <SearchBar/> */}
      <Table tableList={tableList} linkToArticle={(article)=>setCurrentArticle(article)}/>
      <button onClick={()=> setIsWriting(true)} >글쓰기</button>
    </div>
  }
  return ( 
    <div>
      <Header/>
      {body}
    </div>
  )
}

export default App;
