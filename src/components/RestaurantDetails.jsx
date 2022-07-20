import React from "react"
import Card from "./Card";

  const RestaurantDetails = (props)=> {
const {hotels} =props;

    return(
        <>
        <div style={{display:"grid", gridTemplateColumns:"32% 32% 32%", padding:"50px 10px 0px 10px", gap:"15px"}}>
            {

            hotels.map(ele => <Card key={ele.id} item={ele}/>)
           
           
            
            
            }    
        </div>
            
        </>
    )
}


export default RestaurantDetails