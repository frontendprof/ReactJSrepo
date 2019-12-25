
function getNum(){
    return Math.floor(Math.random()*10+1);
}
class NumPicker extends React.Component{
    render(){
        const num=getNum();
        let msg;
        if(num===7){
            msg=<div>
                <h2>Congratulations, you got it</h2>
                <img src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif" />
            </div>
            
        }else{
            msg=<h2>Try again</h2>

        }
        return(
            <div>
                <h2>Your number is:</h2>
                <h1>{num}</h1>
                {msg}
            </div>

        );
    }
}

ReactDOM.render(<NumPicker />,document.querySelector("#root"));