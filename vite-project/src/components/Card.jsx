function Card(props)
{   console.log(props)
    return(
        <>
        <div className="box">
               <h1>{props.name}</h1> 
               <img src={props.image} alt={props.name} />
               <h2>{props.price}</h2>

        </div>
        </>
    )
}
export default Card; 