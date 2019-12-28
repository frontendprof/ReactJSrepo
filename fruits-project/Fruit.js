const foods=["🎃️","🍇️",'🍓️',"🍌️","🌺️","🌻️","🥜️","🍉️","🥝️","🍒️","🍅️","🍍️","🥦️"];
const random=Math.floor(Math.random()*foods.length);


class Fruit extends React.Component{
    render(){
        const {f1,f2,f3,f4,f5,f6,f7,f8}=this.props;
        let fa=foods[random];
        return(
            <div className="Fruitsall" style={{backgroundColor:"plum"}}>
                <h1 className="Fruitsall-1">{fa}{f1}</h1>
                <h1 className="Fruitsall-2">{f3}{f4}</h1>
                <h1 className="Fruitsall-3">{f2}{f6}</h1>
                <h1 className="Fruitsall-4">{f7}{f8}</h1>
                <h1 className="Fruitsall-5">{f5}{f3}</h1>
                

            </div>
        )
    }
}