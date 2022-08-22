import React, { useEffect, useState } from 'react';
import { DisplayBox, InputArea, Label, Amount, Tips, ButtonContainer, ResultArea, AmountInput } from './StyledComponents.jsx';
import { Slider, TipButton, CustomTip, CalButton, Opening, Result, ErrorMessage  } from './FunctionalComponents.jsx';

const Calculator = () => {
    const [active, setActive] = useState(null);
    const [calculate, SetCalculate] = useState(false);
    const [amount, setAmount] = useState(null);
    const [tips, setTips] = useState(null);
    const [range, setRange] = useState(null);
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState("");
    const [customInput, setCustomInput] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const tipList = ["10", "20", "30"];

    const handleAmount = (e) => {
        setAmount(e.target.value);
    };

    useEffect(() => {
        setTips(active / 100);
    }, null);

    const handleTip = (e) => {
        setActive(e.target.value);
    };
    const openCustomInput = () => {
        setCustomInput(true);
    }
    const closeCustomInput = () => {
        setCustomInput(false);
    }

    const CloseErrorMessage = () => {
        setShowError(false);
    }
    const handleRange = (e) => {
        setRange(e.target.value);
    }
    const handleCalculate = (e) => {
        e.preventDefault();
        SetCalculate(true);
        if (!amount && tips) {
            setMessage("Please type in your amount");
            setShowError(true);
        } else if (amount && !tips) {
            setMessage("Please select or type in your tips");
            setShowError(true);
        } else if (!amount && !tips) {
            setMessage("Oops, we can not calculate with nothing")
            setShowError(true);
        } else {
            setShowResult(true);
        }
    }
    
    return <DisplayBox>
        <InputArea>
            <Amount className="text" data-testid="amount">
                <Label htmlFor="amount">Amount</Label>
                <br/>
                <AmountInput
                    type="number"
                    id="amount" 
                    min={0}  
                    step={0.01}
                    placeholder='Amount. E.g. 400.00'
                    autoComplete='off'
                    data-testid="amountInput"
                    onChange={handleAmount}
                /> 
            </Amount>
            <Tips>
                <Label name="selectGroup" data-testid="select">Select Tip {isNaN(tips) ? 0 : tips*100}%</Label>
                <br/>
                <ButtonContainer>
                    <TipButton tipList={tipList} active={active} openCustomInput={openCustomInput} handleTip={handleTip} />
                </ButtonContainer>
                {customInput ? <CustomTip handleTip={handleTip} closeCustomInput={closeCustomInput}/> : null}
            </Tips>
            <Slider testId={"slider"} handleRange={handleRange}/>
            <CalButton testId={"calButton"} calculate={calculate} handleCalculate={handleCalculate} />
            {showError ? <ErrorMessage ErrorMessage={message} CloseErrorMessage={CloseErrorMessage} /> : null} 
        </InputArea>
        
        <ResultArea>
            {showResult ? <Result data-testid="result" amount={amount} tips={tips} range={range}/> : <Opening testId={"opening"}/>}
        </ResultArea>
    </DisplayBox>
}
export default Calculator;