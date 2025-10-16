import { addMoney } from "./store"
import {useDispatch} from "react-redux"

export default function Button() {
    const dispatch = useDispatch(); 
  return (
    <div>
      <button onClick={() => dispatch(addMoney(500))}>
      Add 500
    </button>
    </div>
  )
}