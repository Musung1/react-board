import React from "react";
import {Link, useLocation} from 'react-router-dom';
// 게시글 상세 화면
function Article() {
    let { state } = useLocation();
    return (
        <div>
            <h1>{state.article.title}</h1>
            <h3>{state.article.body}</h3>
            <Link to="/"></Link>
        </div>
    );
}
export default Article;