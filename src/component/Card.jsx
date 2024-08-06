const Card = () => {
    return (
        <div className="card">
             <img src={stacs.pic}  alt="logo"/>
            <div className="container">
                <h4 className="card-head"><b>{stacs.name}</b></h4>
                <p className="">{stacs.description}</p>
                </div>
            </div>
     );
}
 
export default Card;