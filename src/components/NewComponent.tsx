import { Button } from "./button/Button";

export const NewComponent = () => {
    const Button1Foo = (text:string) =>{
        console.log(text)
    }
    const Button2Foo = (text:string) => {
        console.log(text)
    }
    return (
        <div>
            <Button name={'YouTube Chanek - 1'} callBack={()=>Button1Foo('Text 1')}/>
            <Button name={'YouTube Chanek - 2'} callBack={()=>Button2Foo('Text 2')}/>
        </div>
    );
}