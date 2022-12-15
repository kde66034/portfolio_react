import React from 'react'

const contactMeInfo = {
    email: "kde66034@gmail.com",
    emailLink: "mailto:kde66034@gmail.com"
}

const ContactMe = () => {
    return (
        <section id="contactMe" className="contactMe__wrap">
            <div class="contactMe__title__wrap">
                <h2 class="contactMe__bigtitle">Contact Me</h2>
                <h3 class="contactMe__title">Contact Me</h3>
                <a href={`${contactMeInfo.emailLink}`}>
                    <p class="contactMe__email">{contactMeInfo.email}</p>
                </a>
            </div>
            <div class="clock__wrap">
                <div class="clock">
                    <div class="hour">
                        <div id="hr" class="hr"></div>
                    </div>
                    <div class="min">
                        <div id="mn" class="mn"></div>
                    </div>
                    <div class="sec">
                        <div id="sc" class="sc"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe