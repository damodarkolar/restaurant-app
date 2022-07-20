import './App.css';
import React from 'react';
import RestaurantDetails from "./components/RestaurantDetails"
import SortingFiltering from "./components/SortingFiltering"
import Data from "./Data/data.json"
import { Routes , Route, Link} from "react-router-dom"
import {AddHotel} from "./components/AddHotel"

function App() {
  const hotels=Data.hotels;


const[info, setInfo]=React.useState([]);

React.useEffect(() => {
  setInfo(hotels)
}, [])



    const handleFilterSorting=(type, rating, paymentMode)=>{
          

      const filteredData = Data.hotels.filter(ele => rating === 'Select' ? ele: ele.rating >= Number(rating) ).sort((a,b)=>{
        return type==="lh" ? a.cost_for_one-b.cost_for_one :b.cost_for_one-a.cost_for_one
    })
    const a="card"
    const b="upi"
    const {card, cash, upi}=filteredData[2].payment_methods

console.log(filteredData[2].payment_methods[card])

          setInfo(filteredData)
      

    }
    const handleAdd = (newHotel)=>{
      // const temp=[...info];
      // temp.push(newHotel);

      // setInfo(temp);
      console.log("add")

    }







  return (
    <div className="App">
      <Routes>
        <Route path='/addHotel' element={<AddHotel/>}/>
      </Routes>
      <h1 style={{padding:" 20px 10px 20px 10px"}}>Restaurants Details</h1>
      <SortingFiltering handleFilterSorting={handleFilterSorting}></SortingFiltering>
      {/* <SortingFiltering HandleSort={HandleSort} HandlePaymentFilter={HandlePaymentFilter} HandleRatingFilter={HandleRatingFilter}></SortingFiltering> */}
      <RestaurantDetails hotels={info}></RestaurantDetails>
      <AddHotel handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
