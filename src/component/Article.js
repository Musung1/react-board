import React from "react";
// 게시글 상세 화면
function Article(props) {
    return (
        <div>
            <h1>{props.currentArticle.title}</h1>
            <h3>{props.currentArticle.body}</h3>
            <button onClick={(event)=>{
                event.preventDefault()
                props.goBack()
            }}> 뒤로 가기 </button>
        </div>
    );
}
export default Article;