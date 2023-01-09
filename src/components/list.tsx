import './style.css'


type listItem = {
    name: string,
    price: number,
    currency : boolean,
    effect : string
}

type listArr = {
    title: string,
    heroPull : Array<listItem>
}
export const ItemList = (props:listArr) => {
    return(
        <div className={'itemList'}>
            {props.heroPull.map((objectHeroPull,index)=>{
                return(
                    <div className={'itemListItem'}>
                        <p>name: {objectHeroPull.name}</p>
                        <p>desc: {objectHeroPull.effect}</p>
                        <p>price: {objectHeroPull.price}</p>
                    </div>
                );
            })}
        </div>
    );
}