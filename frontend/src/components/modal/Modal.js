import React from 'react';
import styled from "styled-components"
import ReactDom from 'react-dom'
import CloseIcon from '@mui/icons-material/Close';


const ModalContainer = styled.div`
height: 100vh;
        width: auto;
        text-align: center;
        background-color: white;
        display:flex;
        flex-direction:row;
        flex: 1;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
`
const Overlay = styled.div`
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color:rgba(0, 0, 0, .7);
        z-index: 1000;
`


const Modal = ({open, children, close}) => {
  if(!open) return null
    return ReactDom.createPortal( 
    <>
    <Overlay />
    
    <ModalContainer>
    
     
       {children}
        
    </ModalContainer>
    
    </>,
    document.getElementById("portal")
    );
};

export default Modal;