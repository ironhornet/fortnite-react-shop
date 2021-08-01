import {useContext} from 'react'
import { ShopContext } from '../context'

function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
    } =props

    const {addToBasket} = useContext(ShopContext)

    return <div className="card" id={id}>
        <div className="card-image">


          {/* Change 404 png to name of item , now isn't working */}
          {
            // full_background.onerror = ()=>{'error'},
            full_background === 'error'?
            // eslint-disable-next-line jsx-a11y/alt-text
            <img className="activator" src={`https:via.placeholder.com/300x400?text=${name}`} />:
            <img src={full_background} alt={name}/>
          }
          
          
        </div>
        <div className="card-content">
        <span className="card-title">{name}</span>
          <p>
              {description}
          </p>
        </div>
        <div className="card-action">
          <button className="btn" onClick={()=>addToBasket({
            
            id,
            name,
            price,
          })
          }>Buy!</button>
          <span className="right price">{price} V-b</span>
        </div>
      </div>
     
    
            

}

export {GoodsItem}