import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {

  const [title,setTitle] = useState(props.title);


  
  const clickHandler = () => {
    console.log('clicked!!!!!!!!!!!!!!!!!!!');
    setTitle("Men O'zgardim");
  }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;
