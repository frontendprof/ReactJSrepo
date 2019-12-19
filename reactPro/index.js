
class Hello extends React.Component{
    render(){
        return(
            <div>
                <h1>Peace be upon you</h1>
            </div>

        );
    }
}

ReactDOM.render(<Hello />,document.querySelector("#root"));