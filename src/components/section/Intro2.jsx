import React from 'react'

// 인트로2 타이틀 정보
const Intro2TitleInfo = [
    {
        title: "kim dong eon’s",
        titleClass: "intro_txt1",
        titleFont: "neue_world_semiultra"
    },
    {
        title: 'portfolio <em class="neue_worldCnRg">all</em> walks <em class="neue_worldCnRg">of</em> works',
        titleClass: "intro_txt2",
        titleFont: "neue_world_thin"
    }
]

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

// 인트로2 타이틀 출력
const Intro2TitleCont = ({title, titleClass, titleFont}) => {
    return (
        <div className={`${titleClass} intro2__title ${titleFont}`}>
            {title}
        </div>
    )
}

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
                {Intro2TitleInfo.map(info => (
                    <Intro2TitleCont title={info.title} titleClass={info.titleClass} titleFont={info.titleFont} />
                ))}
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