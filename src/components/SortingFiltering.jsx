import React from "react";



const SortingFiltering =(props) => { 
    const [sort,setSort]=React.useState(null)
    const [rating,setRating]=React.useState(null);
    const[paymentMode,setPaymentMode]=React.useState(null)
   const {handleFilterSorting }=props


   React.useEffect(()=>{
    handleFilterSorting(sort,rating,paymentMode)
   },[sort,paymentMode,rating])





    return (
        <>
            <div style={{display:"flex", justifyContent:"space-around", padding:"30px 10px 20px 10px", backgroundColor:"rebeccapurple", color:"white"}}>
                <div>
                    <label htmlFor="Pricesorting">Price Sorting</label>
                <select value={sort} onChange={(e) => setSort(e.target.value)} name="" id="Pricesorting">
                    <option value={null}>Select</option>
                    <option value="lh">Low To High</option>
                    <option value="hl">High To Low</option>                    
                </select>
                </div>
                <div>
                    <label htmlFor="RatingFilter">Filter by rating</label>
                <select value={rating} onChange={(e) => setRating(e.target.value)} name="" id="RatingFilter">
                    <option value={null}>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                </div>
                <div>
                    <label htmlFor="PaymentMethodFilter">Filter by Payment Methods</label>
                <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} name="" id="PaymentMethodFilter">
                    <option value={null}>Select</option>
                    <option value="upi">UPI</option>
                    <option value="card">CARD</option>
                    <option value="cash">CASH</option>
                </select>
                </div>
            </div>
        </>
    )
}


export default SortingFiltering