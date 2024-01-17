import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// Table 화면
function MyForm() {
    const [inputId, setInputId] = useState("")
    const [inputPw, setInputPw] = useState("")
    const navigate = useNavigate();

    const goBack = () => {
      navigate('/')
    }
    const onChangeId = (event) => {
        const value = event.target.value;
        setInputId(value)
    };
    const onChangePw = (event) => {
        const value = event.target.value;
        setInputPw(value)
      };
    async function postForm() {
        try {
          await axios.post('api/form', {
              inputId: String(inputId),
              inputPw: String(inputPw)
          });
        } catch (e) {
          console.error(e);
        }
      }
    return (
        <div>
        <MyInput onChange = {onChangeId} input={inputId}></MyInput>
        <MyInput onChange = {onChangePw} input={inputPw}></MyInput>
        <button onClick={()=> {
            postForm();
            goBack();
        }}>제출하기</button>
            
        </div>
    );
}
function MyInput(props) {
    return (
      <input
        type="text"
        placeholder="글을 쓰세요"
        value={props.input}
        onChange={props.onChange}
      ></input>
    );
  }

export default MyForm;