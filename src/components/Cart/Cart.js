import React,{ useContext,useState} from 'react';

import Model from '../UI/Model';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartCheckOut from './CartCheckOut';

const Cart = (props) => {
  const [checkButton,setCheckButton] = useState(false);
  const [submitingProcess,setSubmittingProcess] = useState(false);
  const [submissionDone, setSubmissionDone] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
    
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const checkOuthandler = ()=>{
    setCheckButton(true);
  } ; 
  const SubmitdataHandler=async(dataset)=>{
    setSubmittingProcess(true);
    await fetch('https://thefood-f6eff-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',{
      method:"POST",
      body:JSON.stringify({
        user:dataset,
        orderedItems:cartCtx.items
      })
    });
    setSubmittingProcess(false);
    setSubmissionDone(true);
    cartCtx.clearItem();
    
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const buttons =  <div className={classes.actions}>
  <button className={classes['button--alt']} onClick={props.onDisableCart}>
    Close
  </button>
  {hasItems && <button className={classes.button} onClick={checkOuthandler}>Order</button>}
</div>

const Content = <React.Fragment> 
{cartItems}
<div className={classes.total}>
  <span>Total Amount</span>
  <span>{totalAmount}</span>
</div>

{checkButton &&  <CartCheckOut onConfirm={SubmitdataHandler} toCancle={props.onDisableCart}></CartCheckOut>}

{!checkButton && buttons}


</React.Fragment>
const saveInfo = <React.Fragment> <div className={classes.anotherAction}>
  <p>Your Information is saved sucessfully!</p>
  <button className={classes['button--alt']} onClick={props.onDisableCart}>
    Close
  </button>
  </div>

</React.Fragment>
const inProcess = <React.Fragment>
  <p>Sending data.....!</p>
</React.Fragment>
  return (<Model onClose={props.onDisableCart}>
 {!submitingProcess && !submissionDone && Content}
   {submitingProcess && inProcess}
   { !submitingProcess&& submissionDone && saveInfo}
   </Model>
  );
};
//we can pass data from parent to child with help of prop like <CartCheckOut> componet is child of <Cart> component so the thing which we pass through 
//<CartCheckOut> component we will obtain through the props in the the <CartCheckout> component.


//we can pass data from child to parent with the help of the function 
export default Cart;