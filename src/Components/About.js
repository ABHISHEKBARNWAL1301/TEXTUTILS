import React from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {
  return (
    <>
       <div className = {`text-${props.mode==='light'?'dark':'light'}`}>
       <h2>About</h2>
        <p>Learn more about the team maintaining TextUtils, how and why the project started, and how to get involved.</p>
        <h2>Team</h2>
        <p> TextUtils is maintained by a small team of developers on <a href="https://github.com/ABHISHEKBARNWAL1301">GitHub</a>.We’re actively looking to grow this team and would love to hear fromyou if you’re excited in writing and maintainingJavaScript plugins, and improving build tooling processes.</p>
        </div>
    </>
  )
}