import React from "react";
import { AiOutlineQuestion } from 'react-icons/ai';
import { BiLockOpen } from 'react-icons/bi';
import "./Head.css";

export default function Header(props){
    return(
    <>
    <div className="head">
        <div className="head-text">
            Password Security Checker
        </div>
        <div className="lock">
            <BiLockOpen></BiLockOpen><AiOutlineQuestion></AiOutlineQuestion>
        </div>
        <div className="sub-head">
            <div>
            No text entered into this site is stored or cached in any way
            </div>
            <div>
            If you want to verify, check out the source code <a href="https://github.com/AustinSweet/PwdChecker">here</a>
            </div>
            <hr></hr>
            <div>
            Even a strong password can be bypassed due to leaks or predictable character sequences.
            </div>
            <div>
            To see if your password has been compromised,
            check out <a href="https://haveibeenpwned.com/">HaveIBeenPwned</a>
            </div>
            <p></p>
        </div>
    </div>
    </>
    )
}

