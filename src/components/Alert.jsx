import {useEffect, useContext} from 'react'
import { ShopContext } from '../context';


function Alert() {
  const { alertName: name ='', closeAlert =Function.prototype } = useContext(ShopContext);

  useEffect(() => {
      const timerId =setTimeout(closeAlert, 2000);

      return ()=> {
          clearTimeout(timerId)
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <div id="toast-container">
      <div className="toast">{name} Added to basket</div>
    </div>
  );
}


export {Alert}