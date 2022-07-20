import { style } from "@mui/system"
import "./Card.css"

const Card= ( {item} ) => {

 
const { id, name, image, dishes, rating, votes, reviews, min_order, max_time, all_payments, cost_for_one, payment_methods}=item;    
    return (
        <>
            <div id="card">
                <div>
                    <img src={ image } alt="" />
                </div>
                <div>
                    <h3>{ name }</h3>
                    {dishes.map(ele => <p>{ele+" "}</p>)}
                    <br/>
                    <p>{"Cost ₹ "+cost_for_one+" for one" }</p>
                    <br/>
                    <div>
                        <p>{ "Min ₹"+ min_order}</p><p>{ "UpTo "+max_time+" min" }</p>
                    </div>
                    {!!all_payments ? <p>{"Accepts all mode of Payments"}</p> : <p>{ !!payment_methods.csh ? "Cash" :"Accepts Card and Upi Payments "}</p> }
                </div>
                <div >
                    <div style={{backgroundColor:"rgb(79, 157, 199)", borderRadius:"5px"}}>
                        <h2>{ rating }</h2>
                    </div>
                    <p>{votes+" votes"}</p>
                    <br/>
                    <p>{reviews +" reviews"}</p>
                </div>
                
            </div>        
        </>
    )
}

export default Card