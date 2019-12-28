
function getFruit(){
    const fruits=["🎃️","🍇️",'🍓️',"🍌️","🌺️","🌻️","🥜️","🍉️","🥝️","🍒️","🍅️","🍍️","🥦️"];
    let random=Math.floor(Math.random()*fruits.length);
    return fruits[random];
}

class App extends React.Component{
    render(){
        const fruit=getFruit();
        return(
            <div>
                <h1>Asalaam aleykom</h1>
                <h2>Welcome to Darus Salaam</h2>
                <h1>{fruit}{fruit}{fruit}{fruit}{fruit}{fruit}</h1>
                <h2>{fruit}{fruit}{fruit}{fruit}{fruit}</h2>
                <h3>{fruit}{fruit}{fruit}{fruit}</h3>
                <h4>{fruit}{fruit}{fruit}</h4>
                <h5>{fruit}{fruit}</h5>
                <h6>{fruit}</h6>

            </div>
        );
    }
}

ReactDOM.render(<App />,document.querySelector("#root"));