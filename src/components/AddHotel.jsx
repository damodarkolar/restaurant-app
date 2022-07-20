import React from "react"
// import {* as React} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export const AddHotel = ({handleAdd}) => {
const obj={
    id:nanoid(),
    name:"",
    dishes:[],
    rating:0,
    votes:0,
    reviews:0,
    min_order:0,
    max_time: 0,
    image:"",
    all_payments:false,
    cost_for_one:100, 
    payment_methods: {
        card: false,
        cash: false,
        upi: false
    }        
}

const [newHotel, setNewHotel]=React.useState(obj)

const handleChange= ()=>{

}


const handleOnchange = (items1) => {
    console.log(items1)
}


return (
    <div>
        <form action="">
            <input type="text" placeholder="Name" />
            <br />
            <input type="number" placeholder="Rating"/>
            <br />
            <input type="number" placeholder="votes"/>
            <br />
            <input type="number" placeholder="Reviews"/>
            <br />
            <input type="number" placeholder="Min order"/>
            <br />
            <input type="number" placeholder="Min time"/>
            <br />
            <input type="number" placeholder="Cost for Person"/>
            <br />
                <label htmlFor="">Dosa<input type="checkbox" /></label>
                <label htmlFor="">Poori<input type="checkbox" /></label>
                <label htmlFor="">Chicken<input type="checkbox" /></label>
            <br />
            <label htmlFor="">Payment Modes</label>
            <br />
            <label htmlFor="">Cash<input type="checkbox" /></label>
            <label htmlFor="">Card<input type="checkbox" /></label>
            <label htmlFor="">UPI<input type="checkbox" /></label>
        </form>
<Button variant="contained" onClick={(e)=> {handleAdd(e.target.checked)}}>Add restorent details</Button>
    </div>
)

}
