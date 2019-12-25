
function getNum(){
    return Math.floor(Math.random()*10+1);
}
class NumPicker extends React.Component{
    render(){
        const num=getNum();
        return(
            <div>
                <h2>Your number is:</h2>
                <h1>{num}</h1>
                <h3>{num===7?"Congratulations, you got it":"Try again"}</h3>

            </div>

        );
    }
}

ReactDOM.render(<NumPicker />,document.querySelector("#root"));