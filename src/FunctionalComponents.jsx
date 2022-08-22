import React, { useState } from 'react';
import { SliderBar, AmountInput, StyledButton, ActiveButton, H3, StyledH3, H4, StyledH4, P, Label, ItemContainer, TopPart, MiddlePart, BottomPart, Overlay, FormContainer, CloseButton, TextContainer } from './StyledComponents.jsx';

const Slider = ({ testId, handleRange }) => {
    const [rangeValue, setRangeValue] = useState(1);
    const handleChangePeople = (e) => {
        setRangeValue(e.target.value);
        handleRange(e);
    }
    return (
        <div>
            <Label htmlFor="peopleRange">Number of People: {rangeValue}</Label>
            <br />
            <SliderBar
                type="range"
                min={0}
                max={4}
                value={rangeValue}
                id="peopleRange"
                data-testid={testId}
                onChange={handleChangePeople}
            />
        </div>
    );
};

const TipButton = ({ tipList, active, openCustomInput, handleTip }) => {
    const [cusTip, setCusTip] = useState(false);
    return (
        <>
            {tipList.map((tip, i) => (
                active === tip ? <ActiveButton key={i} value={tip} onClick={(e) => { handleTip(e); }}>{tip}%</ActiveButton>
                    : <StyledButton data-testid={tip} key={i} value={tip} onClick={(e) => { handleTip(e); setCusTip(false) }}>{tip}%</StyledButton>
            ))}
            {cusTip ? <ActiveButton onClick={(e) => { openCustomInput(); handleTip(e) }}>Custom</ActiveButton>
                : <StyledButton data-testid="custom" onClick={(e) => { openCustomInput(); handleTip(e); setCusTip(true) }}>Custom</StyledButton>}
        </>
    );
};

const CalButton = ({ testId, calculate, handleCalculate }) => {
    return (
        <>
            {calculate ? <ActiveButton onClick={handleCalculate}>Calculate</ActiveButton>
                : <StyledButton data-testid={testId} name="calButton" onClick={handleCalculate}>Calculate</StyledButton>}
        </>
    );
};

const Opening = ({ testId }) => {
    return (
        <div data-testid={testId}>
            <H3>Thank you for using our Tip Calculator!</H3>
            <H3>We value every client!</H3>
            <H3>let's start with type in your Amount &#128512;</H3>
            <H4 style={{ textAlign: "center" }}>Copyright &#169; 2022 Usage AI.</H4>
            <H4 style={{ textAlign: "center" }}>Author: Yaokai Dong</H4>
        </div>
    );
};

const Result = ({ amount, tips, range }) => {
    const AMOUNT = parseFloat(amount).toFixed(2);
    const TAX = (AMOUNT * 0.08875).toFixed(2);
    const TIP = (AMOUNT * tips).toFixed(2);
    const TOTAL = (Number(AMOUNT) + Number(TAX) + Number(TIP)).toFixed(2);
    const PERPERSON = (TOTAL / range).toFixed(2);
    const refreshPage = () => {
        window.location.reload(false);
    }
    return (
        <>
            <ItemContainer>
                <TopPart>
                    <TextContainer>
                        <P>Subtotal </P>
                        <P>${isNaN(AMOUNT) ? 0 : AMOUNT}</P>
                    </TextContainer>
                    <TextContainer>
                        <P>Tax (8.875%) </P>
                        <P>${isNaN(TAX) ? 0 : TAX}</P>
                    </TextContainer>
                    <TextContainer>
                        <P>Tip </P>
                        <P>${isNaN(TIP) ? 0 : TIP}</P>
                    </TextContainer>
                </TopPart>
                <MiddlePart>
                    <TextContainer>
                        <P style={{ marginTop: "50px" }}>Total</P>
                        <StyledH3>${isNaN(TOTAL) ? 0 : TOTAL} </StyledH3>
                    </TextContainer>
                    {range > 1
                        ? <StyledH4>Per Person / ${isNaN(PERPERSON) ? 0 : PERPERSON}</StyledH4>
                        : null}
                </MiddlePart>
                <BottomPart style={{ display: "flex", justifyContent: "center" }}>
                    <StyledButton
                        type="button"
                        name="reset"
                        style={{ backgroundColor: "#A8DADC", marginTop: "20px", padding: "10px 60px" }}
                        data-testid={"reset"}
                        onClick={refreshPage}
                    >Reset</StyledButton>
                </BottomPart>
            </ItemContainer>
        </>
    );
};

const CustomTip = ({ handleTip, closeCustomInput }) => {
    return (
        <Overlay>
            <FormContainer>
                <CloseButton onClick={closeCustomInput}>&times;</CloseButton>
                <h4>Please type in your Tip % &#128512; </h4>
                <AmountInput
                    type="number"
                    id="amount"
                    min={0}
                    step={1}
                    placeholder='E.g. 31'
                    onChange={handleTip}
                />
            </FormContainer>
        </Overlay>
    );
};

const ErrorMessage = ({ ErrorMessage, CloseErrorMessage }) => {
    return (
        <Overlay>
            <FormContainer style={{height: "70px"}}>
                <CloseButton onClick={CloseErrorMessage}>&times;</CloseButton>
                <h4 data-testid="errorMessage">{ErrorMessage} &#128512; </h4>
            </FormContainer>
        </Overlay>
    );
};

export { Slider, TipButton, CustomTip, CalButton, Opening, Result, ErrorMessage };