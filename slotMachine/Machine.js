class Machine extends React.Component{
    render(){
        const {s1,s2,s3,s4}=this.props;
        return (
            <div>
                <h3>{s1}  {s2}  {s3}  {s4}</h3>
                <h2>Winner/Loser.</h2>
            </div>
        );
    }
}