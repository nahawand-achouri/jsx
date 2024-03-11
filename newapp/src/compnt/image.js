
import { produit } from "../product"


const Picture =()=> {

    console.log(produit.image);
    return(
        <div>
            <img src={produit.image} alt="prod"/>  
        </div>
    )

}

export default Picture