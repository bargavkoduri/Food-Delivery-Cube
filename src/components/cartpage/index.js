import Navbar from '../orderpage/navbar'
import CartFun from './cart'
import Footer from '../orderpage/Footer'
import CartForm from "./cartform"
import { FoodContext } from '../../App'
import { useContext } from 'react'

export default function Cart(){
    const {show} = useContext(FoodContext)
    return (
        <>
        <Navbar/>
        <CartFun/>
        {show && <CartForm/>}
        <Footer/>
        </>
    )
}