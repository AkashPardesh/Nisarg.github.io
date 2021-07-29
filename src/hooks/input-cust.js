import { useState } from "react";

const useNew=(validate)=>{

    const[enteredValue,setEnteredValue] = useState('');
    const[istouched, setIstouched] = useState(false);

    const enteredValueIsValid = validate(enteredValue);
    const ErrorOccure = !enteredValueIsValid && istouched;

    function NewvalueChangeHandler(event){
        setEnteredValue(event.target.value);

    }
    function NewBlureHandler(){
        setIstouched(true);
    }

    const reset =()=>{
        setEnteredValue('');
        setIstouched(false);
    }

    return{
        value:enteredValue,
        validatea: enteredValueIsValid,
        ErrorOccure,
        reset,
        NewvalueChangeHandler,
        NewBlureHandler,

    }
}

export default useNew;