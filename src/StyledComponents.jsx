import styled from 'styled-components';

const DisplayBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 20px auto;
    border: 1px solid #D3D3D3;
    height: 500px;
    width: 60%;
    font-family: "IBM Plex Sans";
    font-weight: 500;
    box-shadow: 1px 8px 10px #3D3D3D;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    width: 40%;
`;

const Span = styled.span`
    font-size: 1.5em;
`;
const Label = styled.label`
    font-size: 1.5em;
`;

const Amount = styled.div`
    display: inline-block;
    position: relative;
    ::before {
        position: absolute;
        left: 10px;
        top: 34px;
        content: "$";
        font-size: 1.3em;
    }
`;

const AmountInput = styled.input`
    height: 35px;
    width: 100%;
    border: 1px solid #1D3557;
    border-radius: 5px;
    text-align: right;
    font-size: 1.1em;
`;

const Tips = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
`;

const StyledButton = styled.button`
    background-color: #F1FAEE;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    padding: 0.2em 0.6em;
    border-radius: 5px;
    text-align: center;
    :hover {
        background-color: #1D3557;
        color: white;
    }
    :focus {
        background-color: #1D3557;
        color: white;
    }
`;
const ActiveButton = styled(StyledButton)`
    background-color: #1D3557;
    color: white;
`;

const SliderBar = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    over-flow: hidden;
    width: 100%;
    cursor: pointer;
    border-radius: 20px;
    height: 15px;
    margin-top: 20px;
    background: ${(props) =>
        `linear-gradient(to right,
        #1D3557 0%,
        #1D3557 ${props.value * 25}%,
        #F1FAEE ${props.value * 25}%,
        #F1FAEE 100%);`
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 30px;
        width: 30px;
        border-radius: 100%;
        background: #1D3557;
        margin-top: -3px;
    }
    :focus {
        outline: none;
    }
`;

const ResultArea = styled.div`
    height: 80%;
    width: 40%;
    background-color: #1D3557;
    color: white;
    border-radius: 5px;
    margin-top: 50px;
`;

const H3 = styled.h3`
    padding-left: 30px;
    padding-right: 30px;
    font-size: 1.5em;
`;

const StyledH3 = styled(H3)`
    margin-right: -20px;
    margin-top: 50px;
    margin-bottom: 0;
    color: #A8DADC;
    font-size: 1.5em;
`;

const H4 = styled.h4`
    margin-right: 30px;
    padding: 5px;
    margin: 5px;
`;

const StyledH4 = styled(H4)`
    text-align: right;
    color: #A8DADC;
    font-size: 1.1em;
    padding: 0;
    margin: 0 10px 0 0;
`;

const P = styled(H4)`
    font-size: 1.3em;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 80%;
`;

const TopPart = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 50px;
`;

const MiddlePart = styled.div`
    padding-left: 20px;
    padding-right: 20px;
`;

const BottomPart = styled.div`
    display: flex;
    flex_flow: column nowrap;
    justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const FormContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 150px;
  background-color: white;
  padding: 1rem;
  overflow: auto;
`;

const CloseButton = styled.span`
  float: right;
  font-size: 1.5em;
  color: grey;
  :hover {
    color: black;
    cursor: pointer;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { DisplayBox, InputArea, Span, Label, Amount, Tips, ButtonContainer, StyledButton, ActiveButton, SliderBar, ResultArea, H3, StyledH3, H4, StyledH4, P, ItemContainer, AmountInput, TopPart, MiddlePart, BottomPart, Overlay, FormContainer, CloseButton, TextContainer };
