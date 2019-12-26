class App extends React.Component{
    render(){
        return(
            <div>
                <h2>Slot Machines</h2>
                <Machine
                s1="🍇️"
                s2="🍉️"
                s3="🍌️"
                s4="🍓️"/>
            </div>
        );
    }
}


ReactDOM.render(<App />,document.querySelector("#root"));