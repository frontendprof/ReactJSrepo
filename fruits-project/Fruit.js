const foods=["🎃️","🍇️",'🍓️',"🍌️","🌺️","🌻️","🥜️","🍉️","🥝️","🍒️","🍅️","🍍️","🥦️"];
const random=Math.floor(Math.random()*foods.length);


class Fruit extends React.Component{
    render(){
        const {f1,f2,f3,f4,f5,f6,f7,f8}=this.props;
        let fa=foods[random];
        return(
            <div>
                <h1>{fa}{f1}</h1>
                <h1>{f3}{f4}</h1>
                <h1>{f2}{f6}</h1>
                <h1>{f7}{f8}</h1>
                <h1>{f5}{f3}</h1>
                

            </div>
        )
    }
}