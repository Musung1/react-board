import React, { useState } from 'react';
import Header from './\bcomponent/Header';
import Table from './\bcomponent/Table';
import SearchBar from './\bcomponent/SearchBar';
import WriteArticle from './\bcomponent/WriteArticle';
import Article from './\bcomponent/Article';
function App() {
  // table에 들어갈 더미 데이터
  const tableDummy = [
    {title: "1번",body:"hello", writer:"무성",id: "musung1", date: "2023-01-09", views: "10" },
    {title: "2번",body:"hello", writer:"무성2",id: "musung1", date: "2023-01-09", views: "10" },
    {title: "3번",body:"hello", writer:"무성3",id: "musung1", date: "2023-01-09", views: "10" },
    {title: "4번", body:"hello",writer:"무성4",id: "musung1", date: "2023-01-09", views: "10" },
  ]
  // 글쓰기 화면으로 넘어가는 변수
  const [isWriting,setIsWriting] = useState(false)

  // 화면에 띄울 테이블 데이터들 
  const [tableList,setTableList] = useState(tableDummy)

  // 테이블의 제목 클릭 시 Article 페이지로 넘어가는데! 이 때 제공하는 변수 
  const [currentArticle,setCurrentArticle] = useState(null)

  // 게시판의 Body
  let body = null

  //  게시글 쓰기 화면
  if(isWriting) {
    // onSubmit할 때 새로운 article 리스트에 추가 , iswriting 해제
    body = <WriteArticle onSubmit={(element,value)=> {
      setTableList((prev)=>[...prev,element])
      setIsWriting(value)
    }}/>
  }
  // 클릭한 게시글 화면 
  else if(currentArticle != null) {
    // 뒤로가기 클릭 클릭 시 현재 아티클 해제
    body = <Article currentArticle={currentArticle} goBack={()=>setCurrentArticle(null)}/>
  }
  // 게시판 홈 화면 
  else {
    // 아티클 클릭 시 currentArticle에 저장
    body = 
    <div>
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
