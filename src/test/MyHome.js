import React, { useEffect, useState } from "react";
import axios from 'axios';

function Table(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('api/getArticles');
                setArticles(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // async 함수 호출

    }, []); // 빈 배열을 전달하여 처음 마운트될 때만 실행되도록 설정

    let count = 1;
    let tableList = articles.map((element) => (
        <tr key={count++}>
            <td>{count}</td>
            <td>{element.title}</td>
            <td>{element.content}</td>
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>바디</th>
                </tr>
            </thead>
            <tbody>
                {tableList}
            </tbody>
        </table>
    );
}

export default Table;
