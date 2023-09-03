import { useStore } from '@nanostores/react';
import { myProducts,getUser } from "../store";


const Datatesting = () => {

  const $myProducts = useStore(myProducts);
  // const gn = await getUser(1);
   //console.log($myProducts)
console.log(Object.values($myProducts))

  return (
    <>
    <h1>welcome</h1>
    {  
    Object.values($myProducts).length ? <p className='text-red-500'>{$myProducts.email}</p> : <p className='text-red-500'>ledu</p>
    }
   </>

  )
}

export default Datatesting