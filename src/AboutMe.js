import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const AboutMePage = () => {
    return (
        <div className="main-container" style={{ width: '75%', margin: '0 auto' }}>
            <div className="center-inline-text">
                <div className="user-icon fa fa-user fa-5x"></div>
                <h2>About Me</h2>
                <p>My name is Rohan.</p>
                <p>I am a professional in the fintech space with a passion for making consumer finance easier, fairer, and better.</p>
                <p>In college, as part of the <a href="https://moneythink.org/" style={{ color: 'gold' }}>Moneythink</a> organization, where I was a volunteer mentor to teach financial literacy to high school students.</p>
                <p>I kickstarted my professional career at <a href="https://www.affirm.com/" style={{ color: 'skyblue' }}>Affirm</a>, where I joined as a software engineer on the Trust & Safety team. At Affirm, I worked on building core backend infrastructure to detect and prevent fraud.</p>
                <p>After Affirm, I joined the <a href="https://www.forbes.com/advisor/credit-cards/reviews/x1/" style={{ color: 'silver' }}>X1</a> credit card team to understand startups and consumer lending from the credit card space. X1 was acquired by <a href="https://robinhood.com/" style={{ color: 'green' }}>Robinhood</a>.</p>
                <p>I'm currently working on growing myself by learning about frontend (this website) and AI (how I built this website).</p>
                <p>My hobbies include <a href="https://www.goodreads.com/user/show/177940541-rohan-n" style={{ color: 'grey' }}>reading</a>, learning new things, playing video games, watching movies, and eating good food with great friends.</p>
            </div>
        </div>
    );
}

export default AboutMePage;
