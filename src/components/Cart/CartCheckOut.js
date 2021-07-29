import Classes from './CartCheckOut.module.css';
import useNew from '../../hooks/input-cust';

function CartCheckOut(props){
    const {value:enteredName,validatea:enteredNameIsValid,ErrorOccure:nameHasError,NewvalueChangeHandler:newNameChangeHandler,
        NewBlureHandler:nameblurHandler,reset:inputReset}=useNew(value=>value.trim()!=='');  
    const {value:enteredAddress,validatea:enteredAddressIsValid,ErrorOccure:addressHasError,NewvalueChangeHandler:newaddressChangeHandler,
        NewBlureHandler:addressblurHandler,reset:addressReset}=useNew(value=>value.trim()!==''); 
    const {value:enteredpin,validatea:enteredPinIsValid,ErrorOccure:pinHasError,NewvalueChangeHandler:newpinChangeHandler,
        NewBlureHandler:pinblurHandler,reset:pinReset}=useNew(value=>value.trim().length === 6);     
    const {value:enteredNumber,validatea:enteredNumberIsValid,ErrorOccure:numberHasError,NewvalueChangeHandler:newNumberChangeHandler,
            NewBlureHandler:numberblurHandler,reset:numberReset}=useNew(value=>value.trim().length === 10);     
  

        let formValid = false;
        if(enteredNameIsValid&&enteredAddressIsValid&&enteredPinIsValid&&enteredNumberIsValid ){
            formValid=true;
        }

            const submitHandler=(event)=>{
        event.preventDefault();

        if(!enteredNameIsValid && !enteredAddressIsValid && !enteredPinIsValid && !enteredNumberIsValid){
            return;
        }
        console.log(enteredName);
        console.log(enteredAddress);
        console.log(enteredpin);
        console.log(enteredNumber);
        props.onConfirm({
            name:enteredName,
            address: enteredAddress,
            pincode : enteredpin,
            number : enteredNumber
        });
        inputReset('');
        addressReset('');
        pinReset('');
        numberReset('');

    };
       const name = `${Classes.control} ${nameHasError ? Classes.invalid : ''}`;
       const addre = `${Classes.control} ${addressHasError ? Classes.invalid : ''}`;
       const pinn = `${Classes.control} ${pinHasError? Classes.invalid:''}`;
       const num = `${Classes.control} ${numberHasError ? Classes.invalid :''}`;
    return(
    <form className={Classes.form} onSubmit={submitHandler}>    
        <div className={name}>
            <label htmlFor="name">Enter your name</label>
            <input type="Text" id="name" onChange={newNameChangeHandler} onBlur={nameblurHandler} value={enteredName}></input>
        </div>
        {nameHasError && <p>Please Enter Valid Name! </p>}
        <div className={addre}>
        <label htmlFor="address">Address</label>
        <input type="Text" id="address" value={enteredAddress} onChange={newaddressChangeHandler} onBlur={addressblurHandler}></input>
        </div>
        {addressHasError && <p>Please Enter Valid address! </p>}
        <div className={pinn}>
        <label htmlFor="pincode">Pincode</label>
        <input type="Text" id="pincode" value={enteredpin} onChange={newpinChangeHandler} onBlur={pinblurHandler}></input>
        </div>
        {pinHasError && <p>Please Enter Valid pin! </p>}
        <div className={num}>
        <label htmlFor="number">Number</label>
        <input type="number" id="number" value={enteredNumber} onChange={newNumberChangeHandler} onBlur={numberblurHandler}></input>
        </div>
        {numberHasError && <p>Please Enter number! </p>}
        <div className={Classes.actions} > <button disabled={!formValid}>Confirm</button>
        
        <button type="button" onClick={props.toCancle}>Cancle</button>
        </div>
    </form>
    );
}

export default CartCheckOut;