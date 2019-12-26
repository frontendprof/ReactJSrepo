class Machine extends React.Component{
    render(){
        const {s1,s2,s3,s4}=this.props;
        const winner=(s1===s2)&&(s2===s3)&&(s3===s4)
        return (
            <div className="Machine-base">
                <h3 className="Machine-contents">{s1}  {s2}  {s3}  {s4}</h3>
                <h1 className="Machine-title">{winner? "Winner!":"Looser!"}</h1>
            </div>
        );
    }
}