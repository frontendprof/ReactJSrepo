
function getFruit(){
    const fruits=["🎃️","🍇️",'🍓️',"🍌️","🌺️","🌻️","🥜️","🍉️","🥝️","🍒️","🍅️","🍍️","🥦️"];
    let random=Math.floor(Math.random()*fruits.length);
    return fruits[random];
}

class App extends React.Component{
    render(){
        
        return(
            <div>
                <h1>Asalaam aleykom</h1>
                <h2>Welcome to Darus Salaam</h2>
                <h1>ddd</h1>
                <h2>dd</h2>
                <Fruit 
                 f1="🍓️"
                 f2="🍇️"
                 f3="🍌️"
                 f4="🌺️"
                 f5="🎃️"
                 f6="🍅️"
                 f7="🍒️"
                 f8="🥝️"
                 />

            </div>
        );
    }
}

ReactDOM.render(<App />,document.querySelector("#root"));