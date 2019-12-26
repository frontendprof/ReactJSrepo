class App extends React.Component{
    render(){
        return(
            <div>
                <h2>Slot Machines</h2>
                <Machine />
            </div>
        );
    }
}


ReactDOM.render(<App />,document.querySelector("#root"));