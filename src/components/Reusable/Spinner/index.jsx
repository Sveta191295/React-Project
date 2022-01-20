import React from "react";
import "./styles.css";
import { MDBSpinner } from 'mdb-react-ui-kit';

const Loader = () => {
    return (
        <div className="loader">
            <MDBSpinner className='mx-2' >
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        </div>
    )
}

export default Loader;