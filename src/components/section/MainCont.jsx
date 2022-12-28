import React from 'react'

// 메인 영역(사이트 소개) 콘텐츠 섹션 정보
const mainContInfo = [
    {
        sectionID: "myWorkPhp",
        sectionWrapClass: "myWorkPhp__wrap",
        sectionInnerClass: "myWorkPhp__inner",
        sectionLink: "http://kde9902.dothome.co.kr/php/main/main.php",
        sectionImgLink: "assets/img/mywork01.jpg",
        sectionBigTitle: "PHP",
        sectionTitle: "PHP Team Project",
        sectionDesc: "기후위기에 대한 심각성을 알리고 기후\n행동을 장려하는 웹 사이트 ‘지구ON’을\n팀 프로젝트로 제작하였습니다."
    },
    {
        sectionID: "myWorkWebStan",
        sectionWrapClass: "myWorkWebStan__wrap",
        sectionInnerClass: "myWorkWebStan__inner",
        sectionLink: "https://kde66034.github.io/codingclass/site/site1/index.html",
        sectionImgLink: "assets/img/mywork09.jpg",
        sectionBigTitle: "Standard",
        sectionTitle: "Web Standard Site",
        sectionDesc: "Alt 속성과 IR 효과 등을 활용하여 시각\n장애인을 포함한 누구나 웹서핑을 할 수\n있도록 웹 표준을 준수한 사이트입니다."
    },
    {
        sectionID: "myWorkRefer",
        sectionWrapClass: "myWorkRefer__wrap",
        sectionInnerClass: "myWorkRefer__inner",
        sectionLink: "https://kde66034.github.io/codingclass/javascript/index.html",
        sectionImgLink: "assets/img/mywork03.jpg",
        sectionBigTitle: "Reference",
        sectionTitle: "Coding Reference Book",
        sectionDesc: "코딩을 처음 배웠던 시절 저에게 큰 도움이\n되었던 온라인 상의 레퍼런스 북입니다.\nHTML과 CSS, JS의 기초를 다뤘습니다."
    },
    {
        sectionID: "myWorkReactVue",
        sectionWrapClass: "myWorkReactVue__wrap",
        sectionInnerClass: "myWorkReactVue__inner",
        sectionLink: "https://kde66034.github.io/codingclass/javascript/effect/reactVueMain.html",
        sectionImgLink: "assets/img/mywork04.jpg",
        sectionBigTitle: "React/Vue",
        sectionTitle: "React/Vue Site",
        sectionDesc: "React와 Vue로 각종 정보들을 API로 가져오는\n웹 사이트를 만들어 보았습니다. YouTube 인기영상,\n영화 정보, Unsplash 이미지 등 다양한 서비스에서\nAPI로 정보들을 가져옵니다."
    }
]

// 메인 콘텐츠 섹션 출력
const MainContSection = ({sectionID, sectionWrapClass, sectionInnerClass, sectionLink, sectionImgLink, sectionBigTitle, sectionTitle, sectionDesc}) => {
    return (
        <section id={`${sectionID}`} className={`${sectionWrapClass}`}>
            <div className={`${sectionInnerClass}`}>
                <figure className="image__box reveal">
                    <a href={`${sectionLink}`}>
                        <img src={`${sectionImgLink}`} alt={`${sectionTitle}`} />
                    </a>
                </figure>
                <div className="myWork__titleDescWrap reveal">
                    <h2 className="myWork__bigtitle">{sectionBigTitle}</h2>
                    <h3 className="myWork__title">{sectionTitle}</h3>
                    <p className="myWork__desc">
                        {sectionDesc}
                    </p>
                </div>
            </div>
        </section>
    )
}

// 메인 콘텐츠 전체 출력
const MainCont = () => {
    return (
        <>
            {mainContInfo.map(info => (
                <MainContSection sectionID={info.sectionID} 
                    sectionWrapClass={info.sectionWrapClass} 
                    sectionInnerClass={info.sectionInnerClass} 
                    sectionLink={info.sectionLink} 
                    sectionImgLink={info.sectionImgLink} 
                    sectionBigTitle={info.sectionBigTitle} 
                    sectionTitle={info.sectionTitle} 
                    sectionDesc={info.sectionDesc} 
                />
            ))}
        </>
    )
}

export default MainCont