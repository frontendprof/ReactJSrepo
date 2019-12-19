
class Hello extends React.Component{
    render(){
        return(
            <div>
                <h1>Peace be upon you</h1>
                <img src="https://source.unsplash.com/random"/>
            </div>

        );
    }
}

ReactDOM.render(<Hello />,document.querySelector("#root"));