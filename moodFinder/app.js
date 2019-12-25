
function getMood(){
    const moods=["happy","upset","sad","worried","paranoid","relaxed","careless","frightened"]
    let randomMood=Math.floor(Math.random()*moods.length);
    return moods[randomMood];
}
class MoodFinder extends React.Component{
    render(){
        return(
            <div className="Mood">
                <h2>Your current mood is:</h2>
                <h1>{getMood()}</h1>
                <h2>And you look like like the image below</h2>
            </div>
        );
    }
}

ReactDOM.render(<MoodFinder  />, document.querySelector("#root"));