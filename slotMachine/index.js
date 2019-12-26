class App extends React.Component{
    render(){
        return(
            <div>
                <h1 className="slot-title">Slot Machines</h1>
                <Machine
                s1="🍇️"
                s2="🍉️"
                s3="🍌️"
                s4="🍓️"/>

                <Machine
                s1="🎃️"
                s2="🥜️"
                s3="🍌️"
                s4="🍓️"/>


                <Machine
                s1="🌻️"
                s2="🥜️"
                s3="🎃️"
                s4="🌺️"/>
                
            </div>
        );
    }
}


ReactDOM.render(<App />,document.querySelector("#root"));