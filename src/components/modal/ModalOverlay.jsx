import style from "./Modal.module.css";
import React from "react";
import PropTypes from "prop-types";

const ModalOverlay = ({children, closeModal}) => {
    const overflowZone = React.useRef(null)
    const closeWhenClickOnOverflow = (e) => {
        if (overflowZone.current === e.target) closeModal()
    }
    const closeWhenPressEscape = (e) => {
        if (e.code === 'Escape') closeModal()
    }

    React.useEffect(() => {
        document.addEventListener('click', closeWhenClickOnOverflow)
        document.addEventListener('keydown', closeWhenPressEscape)
        return () => {
            document.removeEventListener('click', closeWhenClickOnOverflow)
            document.removeEventListener('keydown', closeWhenPressEscape)
        }
    }, [])

    return (
        <div ref={overflowZone} className={style.overlay}>
            {children}
        </div>
    )
}

export default ModalOverlay

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired
}