
function getNumber(){
    return (Math.floor(Math.random()*10)+1);
}

class NumPicker extends React.Component{
    render(){
        const num=getNumber();
        let msg;
        if(num===7){
            msg="You got it"
        }else{
            msg="Try again"
        }
        return(
            <div>
                <h3>Your number is: {num}</h3>
                <h1>{msg}</h1>
                {
                    num===7
                    ? <img src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif"/>
                    : <img src="https://media.giphy.com/media/PlbDI5gaNCtISSIpz3/giphy.gif"/>

                }
            </div>

        );
    }
}

ReactDOM.render(<NumPicker />, document.querySelector("#root"));