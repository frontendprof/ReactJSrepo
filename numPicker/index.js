
function getNumber(){
    return (Math.floor(Math.random()*10)+1);
}

class NumPicker extends React.Component{
    render(){
        const num=getNumber();
        return(
            <div>
                <h3>My number is: {num}</h3>
                <h1>{num===7? "You got it" : "Try again"}</h1>
                {
                    num===7
                    ? <img src="https://media.giphy.com/media/9xt5eMX6WhOhvfWajw/giphy.gif"/>
                    : <img src="https://media.giphy.com/media/PlbDI5gaNCtISSIpz3/giphy.gif"/>

                }
            </div>

        );
    }
}

ReactDOM.render(<NumPicker />, document.querySelector("#root"));