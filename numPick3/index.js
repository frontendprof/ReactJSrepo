
function getNum(){
    return Math.floor(Math.random()*10+1);
}
class NumPicker extends React.Component{
    render(){
        return(
            <div>
                <h2>Your number is:</h2>
                <h1>{getNum()}</h1>

            </div>

        );
    }
}

ReactDOM.render(<NumPicker />,document.querySelector("#root"));