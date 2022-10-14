import React, { useCallback, useMemo } from 'react'
import { useState } from 'react';
import "./App.css";
const Header = (props) => {

    return (
        <div className="Head-Container">
            <p>File Status</p>
            <div className="switch-field">
                <input type="radio"  id="radio-one" onClick={props.Toggle} checked= {props.theme} />
                <label for="radio-one">Dark</label>
            </div>
        </div>
    );
}
export default Header;