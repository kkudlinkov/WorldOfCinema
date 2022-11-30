import React from 'react';
import "./FeedBack.css"

const FeedBack = () => {
    return (
        <div className="container">
            <div className="contact__form">
                <div className="contact__wrapper">
                    <form action="#" name="newform" method="post">
                        <div className="form__inputs">
                            <div className="input_block">
                                <p className="userName">Name<span>*</span><input type="text"/></p>
                            </div>
                            <div className="input_block">
                                <p className="userEmail">Email address<span>*</span><input type="email"/></p>
                            </div>
                        </div>
                        <p>Message<span>*</span></p>
                        <textarea className="userMessage" name="text"></textarea>
                        <div className="button__block">
                            <button className="glow-on-hover">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FeedBack;