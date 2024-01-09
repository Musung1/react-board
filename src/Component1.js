import React from 'react'
function Component1(props) {
    const list = []
    for(let i = 0; i<props.dummy.length; i++) {
        const now = props.dummy[i];
        list.push(
            <li key={now.id} >
                <a id={now.id} href={'/read/' + now.id} onClick={(event)=>{
                    event.preventDefault();
                    props.onChangeMode(now.id);
                }}>
                    <h1>{now.title}</h1>
                </a>
            </li>
        )
    }
    return <div>
         {list}
    </div>
}
export default Component1