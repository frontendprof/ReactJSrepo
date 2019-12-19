
function getMood(){
    const moods=['sad','happy','angry','excited','silly','embarrased','overwhelmed',];
    return moods[Math.floor(Math.random()*moods.length)];
}

class Mood extends React.Component{
    render(){
        return(
            <div>
                <h1>My Current Mood is:{getMood()} </h1>

            </div>

        );
    }
}

ReactDOM.render(<Mood />,document.querySelector("#root"));