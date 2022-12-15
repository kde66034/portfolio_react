import React from 'react'

const getInTouchIconInfo = [
    {
        iconLink: "https://github.com/kde66034",
        imgClass: "img1",
        imgLink: "assets/img/contact_figure01.png",
        iconName: "Github"
    },
    {
        iconLink: "https://kde66034.tistory.com/",
        imgClass: "img2",
        imgLink: "assets/img/contact_figure02.png",
        iconName: "Tistory Blog"
    },
    {
        iconLink: "https://codepen.io/kde66034/",
        imgClass: "img3",
        imgLink: "assets/img/contact_figure03.png",
        iconName: "Codepen"
    }
]

const GetInTouchIconCont = ({iconLink, imgClass, imgLink, iconName}) => {
    return (
        <article class="figure__wrap">
            <a href={`${iconLink}`}>
                <div class={`${imgClass}`}>
                    <img src={`${imgLink}`} alt={`${iconName}`} />
                    <p>{iconName}</p>
                </div>
            </a>
        </article>
    )
}

const GetInTouch = () => {
    return (
        <section id="getInTouch" className="get__in__touch">
            <div className="footer__title__wrap">
                <h2 className="footer__bigtitle">Get In Touch</h2>
                <h3 className="footer__title">Get In Touch</h3>
            </div>
            <div className="contactImg__inner">
                {getInTouchIconInfo.map(info => (
                    <GetInTouchIconCont iconLink={info.iconLink} 
                        imgClass={info.imgClass} 
                        imgLink={info.imgLink} 
                        iconName={info.iconName} 
                    />
                ))}
            </div>
        </section>
    )
}

export default GetInTouch