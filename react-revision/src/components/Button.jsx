import {  react} from "react";


 function click(){
    console.log("the btn is click");
}
export default function Button(){
    return <>
    <button onClick={click}>click me as soon as possible</button>
    </>
}