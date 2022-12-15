import React from 'react'

// 아웃트로 타이틀 정보
const outroTitleInfo = [
    {
        title: '<em class="neue_worldCnRg">thank</em> you for <em class="neue_worldCnRg">watching</em>',
        titleClass: "outro__title1",
        titleFont: "neue_world_thin"
    },
    {
        title: "KDE’s Portfolio",
        titleClass: "outro__title2",
        titleFont: "neue_world_semiultra"
    }
]

// 저작권 저자
const outroCopyright = {
    author: "KDE"
}

// 프로필 이미지
const outroProfileImg = {
    imgLink: "assets/img/profile01.png",
    imgAlt: "프로필 사진"
}

// 아웃트로 타이틀 정보 출력
const OutroTitleCont = ({title, titleClass, titleFont}) => {
    return (
        <div class={`outro__title ${titleClass} ${titleFont}`}>
            {title}
        </div>
    )
}

// 아웃트로 전체 출력
const Outro = () => {
    return (
        <section id="outro" className="outro__wrap">
            <div className="outro__title__wrap">
                {outroTitleInfo.map(info => (
                    <OutroTitleCont title={info.title} 
                        titleClass={info.titleClass} 
                        titleFont={info.titleFont} 
                    />
                ))}
                <div class="outro__copyright">
                    ©2022 {outroCopyright.author} All Rights Reserved
                </div>
            </div>
            <div class="profile__image">
                <img src={`${outroProfileImg.imgLink}`} alt={`${outroProfileImg.imgAlt}`} />
            </div>
        </section>
    )
}

export default Outro