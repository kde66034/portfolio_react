import React from 'react'

// 인트로2 이미지(아이콘) 정보
const Intro2ImgInfo = [
    {
        imgClass: "img1",
        imgLink: "assets/img/home_figure03.png",
        imgAlt: "figure01"
    },
    {
        imgClass: "img2",
        imgLink: "assets/img/home_figure02.png",
        imgAlt: "figure02"
    },
]

// 인트로2 이미지(아이콘) 출력
const Intro2ImgCont = ({imgClass, imgLink, imgAlt}) => {
    return (
        <>
            <img className={`${imgClass}`} src={`${imgLink}`} alt={`${imgAlt}`} />
        </>
    )
}

// 인트로2 전체 출력
const Intro2 = () => {
    return (
        <section id="intro2Type" className="intro2__type">
            <div className="intro2__title__wrap">
                <div class="intro_txt1 intro2__title neue_world_semiultra">
                    kim dong eon’s
                </div>
                <div class="intro_txt2 intro2__title neue_world_thin">
                    portfolio <em class="neue_worldCnRg">all</em> walks <em class="neue_worldCnRg">of</em> works
                </div>
            </div>
            <div className="figureImg2__inner">
                {Intro2ImgInfo.map(info => (
                    <Intro2ImgCont imgClass={info.imgClass} imgLink={info.imgLink} imgAlt={info.imgAlt} />
                ))}
            </div>
        </section>
    );
}

export default Intro2