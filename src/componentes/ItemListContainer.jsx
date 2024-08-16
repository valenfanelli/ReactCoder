import ImagenGreeting from './../img/greeting.jpg'
export const ItemListContainer = ( {Greeting} ) => {
    return <>
        <div className="card itemlist m-4" style={{width: '18rem'}}>
            <img src={ImagenGreeting} alt="imagen de saludo" className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">{Greeting}</h3>
                <ul className="card-text list-group list-group-flush">
                    <li className='list-group-item'>Uno</li>
                    <li className='list-group-item'>Dos</li>
                    <li className='list-group-item'>Tres</li>
                    <li className='list-group-item'>Cuatro</li>
                </ul>
            </div>
            
        </div>
    </>
}