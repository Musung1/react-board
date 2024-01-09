import React, { useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
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
  // 화면에 띄울 테이블 데이터들 
  const [tableList,setTableList] = useState(tableDummy)

  const writeArticle = <WriteArticle onSubmit={(element)=> {
    setTableList((prev)=>[...prev,element])
  }}/>

  const navigate = useNavigate();

  const goToWrite = () => {
    console.log("hiroo")
    navigate('/write')
  }
  const articleDetail = <Article/>
  const table = 
  <div>
    <Table tableList={tableList} />
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
