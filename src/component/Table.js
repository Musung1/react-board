import React from "react";
import { Link } from 'react-router-dom';
// Table 화면
function Table(props) {
    let count =1;
    let tableList = props.tableList.map((element)=>(
        <tr key={count++}>
            <td>{count}</td>
            <td><Link to={"/articles/" + element.title} state={{ article: element }}>{element.title}</Link></td>
            <td>{element.writer}</td>
            <td>{element.id}</td>
            <td>{element.date}</td>
            <td>{element.views}</td>
        </tr>
    ))
    return (
        <table>
            <thead>
                <th>번호</th>
                <th>제목</th>
                <th>이름</th>
                <th>아이디</th>
                <th>작성일</th>
                <th>조회수</th>
            </thead>
            <tbody>
            {tableList}
            </tbody>
        </table>
    );
}
export default Table;