import React from 'react';

// 인트로 타이틀 정보
// const introTitleInfo = [
//     {
//         title: "let’s introduce",
//         titleClass: "txt1",
//         titleFont: "pp_write_book"
//     },
//     {
//         title: "kim dong eon’s",
//         titleClass: "txt2 split",
//         titleFont: "neue_world_semiultra"
//     },
//     {
//         title: '<em className="neue_worldCnRg">all</em> works <em className="neue_worldCnRg">of</em> portfolio',
//         titleClass: "txt3",
//         titleFont: "neue_world_thin"
//     }
// ]

// 인트로 이미지(아이콘) 정보
const introImageInfo = [
    {
        imgClass: "img1",
        imgLink: "assets/img/home_figure01.png",
        imgAlt: "figure01"
    },
    {
        imgClass: "img2",
        imgLink: "assets/img/home_figure02.png",
        imgAlt: "figure02"
    },
    {
        imgClass: "img3",
        imgLink: "assets/img/home_figure03.png",
        imgAlt: "figure03"
    },
]

// 인트로 타이틀 정보 출력
// const IntroTitleCont = ({title, titleClass, titleFont}) => {
//     return (
//         <div className={`${titleClass} intro__title ${titleFont}`}>
//             {title}
//         </div>
//     )
// }

// 인트로 이미지(아이콘) 정보 출력
const IntroImageCont = ({imgClass, imgLink, imgAlt}) => {
    return (
        <>
            <img className={`${imgClass}`} src={`${imgLink}`} alt={`${imgAlt}`} />
        </>
    )
}

// 인트로 전체 출력
const Intro = () => {
    return (
        <section id="introType" className="intro__wrap">
            <div className="intro__title__wrap">
                <div class="txt1 intro__title pp_write_book">
                    let’s introduce
                </div>
                <div class="txt2 intro__title neue_world_semiultra split">
                    kim　dong　eon’s
                </div>
                <div class="txt3 intro__title neue_world_thin">
                    <em class="neue_worldCnRg">all</em> works <em class="neue_worldCnRg">of</em> portfolio
                </div>
            </div>
            <div className="figureImg__inner">
                {introImageInfo.map(info => (
                    <IntroImageCont imgClass={info.imgClass} imgLink={info.imgLink} imgAlt={info.imgAlt} />
                ))}
            </div>
            <a href="#c" className="scroll__btn"><span className="ir">Scroll Down / 스크롤다운</span></a>
        </section>
    );
}

export default Intro