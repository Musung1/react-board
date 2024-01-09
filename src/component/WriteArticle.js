import React from "react";
import {useNavigate} from 'react-router-dom';
// 게시글 작성 화면
function WriteArticle(props) {
    const navigate = useNavigate();

    const goBack = () => {
      navigate('/')
    }
    return (
        <div>
            <h2>게시글 작성하기</h2>
            <input type="text" id="title" name="title" placeholder="제목을 입력하세요"></input>
            <textarea type="text" id="body" name="body" placeholder="내용을 입력하세요"></textarea>
            <button onClick={(event)=> {
                    let newArticle = {
                        title: document.getElementById("title").value,
                        body: document.getElementById("body").value,
                        writer:"윤진",
                        id: "Jin",
                        date: Date.now(),
                        views: 0 
                    }
                event.preventDefault()
                props.onSubmit(newArticle)
                goBack()
            }}>작성 완료</button>
        </div>
    )
}
export default WriteArticle;