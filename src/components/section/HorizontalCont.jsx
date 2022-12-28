import React from 'react'

// webglType 정보
const webglTypeInfo = {
    title: "all　script　works",
    titleClass: "split",
    titleFont: "neue_world_semiultra"
}

// webglTitle3 정보
const webglTitle3Info = {
    title: "all site works",
    titleClass: "webgl__title3",
    titleFont: "neue_world_semiultra"
}

// 가로모드 섹션 정보
const sectionInfo = [
    {
        sectionClassID: "section01",
        sectionImgLink: "assets/img/mywork02.jpg",
        sectionBigTtitle: "Game",
        sectionTtitle: "Game Effect",
        sectionDesc: "첫 페이지는 컴퓨터 바탕화면 GUI처럼 디자인하였고, 바탕화면에 배치된 각각의 아이콘을 클릭하여 음악을 듣거나 게임을 플레이 할 수 있도록 코딩하였습니다. 게임에는 3가지가 있으며 테트리스 게임, CSS 속성을 검색하여 점수를 얻는 서치 게임, 그리고 재미있는 카드 게임이 준비되어 있습니다.",
        sectionViewLink: "https://kde66034.github.io/codingclass/javascript/effect/gameEffect01.html",
        sectionCodeLink: "https://github.com/kde66034/codingclass/tree/main/javascript/effect/gameEffect01.html"
    },
    {
        sectionClassID: "section02",
        sectionImgLink: "assets/img/mywork06.jpg",
        sectionBigTtitle: "Parallax",
        sectionTtitle: "Parallax Effect",
        sectionDesc: "시차를 두고 부드러운 애니메이션 움직임을 주는 패럴럭스 이펙트입니다. 특정 섹션 이동 시의 움직임을 스무스하게 해주었고, 콘텐츠(내용물)의 제목과 본문, 이미지가 각각 다른 시차를 두고 독특한 방식으로 등장하여 웹서핑을 하면서 생동감을 느낄 수 있도록 총 7가지의 유형으로 열심히 만들어보았습니다.",
        sectionViewLink: "https://kde66034.github.io/codingclass/javascript/effect/parallaxEffect01.html",
        sectionCodeLink: "https://github.com/kde66034/codingclass/tree/main/javascript/effect/parallaxEffect01.html"
    },
    {
        sectionClassID: "section03",
        sectionImgLink: "assets/img/mywork04.jpg",
        sectionBigTtitle: "Slider",
        sectionTtitle: "Slider Effect",
        sectionDesc: "슬라이드 이펙트는 기본 트랜지션 효과와 좌측으로 이동하는 유형, 연속적으로 이동하는 유형, 좌우 이동 버튼이 있는 유형, 버튼과 닷메뉴가 있는 유형 등 총 7가지의 유형을 만들어보았습니다. 처음에는 많이 어려웠지만 차근차근 스크립트에 대한 설명을 적어가며 공부하면서 열심히 만들었습니다.",
        sectionViewLink: "https://kde66034.github.io/codingclass/javascript/effect/sliderEffect01.html",
        sectionCodeLink: "https://github.com/kde66034/codingclass/tree/main/javascript/effect/sliderEffect01.html"
    },
    {
        sectionClassID: "section04",
        sectionImgLink: "assets/img/mywork05.jpg",
        sectionBigTtitle: "Mouse",
        sectionTtitle: "Mouse Effect",
        sectionDesc: "마우스 커서를 올려놓는 요소 영역에 따라 커서의 모양을 다르게 변화시키거나, 마우스 커서의 움직임을 조금 더 부드럽고 스무스하게 만들고, 마우스 커서의 동작을 독특한 애니메이션으로 생동감을 주는 등의 다양한 마우스 이펙트를 자바스크립트와 GSAP을 통해 만들어 보았습니다.",
        sectionViewLink: "https://kde66034.github.io/codingclass/javascript/effect/mouseEffect01.html",
        sectionCodeLink: "https://github.com/kde66034/codingclass/tree/main/javascript/effect/mouseEffect01.html"
    },
    {
        sectionClassID: "section05",
        sectionImgLink: "assets/img/mywork07.jpg",
        sectionBigTtitle: "Quiz",
        sectionTtitle: "Quiz Effect",
        sectionDesc: "JavaScript와 웹디자인기능사 필기시험을 동시에 공부하기 위해 만든 퀴즈 이펙트로, 정답 확인, 주관식, 객관식 유형, 슬라이드 형식 등 총 6가지의 방식으로 제작했습니다. 문제 정보를 상수 선언 후 배열을 만들어 마크업된 부분에 동적으로 출력시켰으며, 정답인지 오답인지에 따라 달라지는 애니메이션이 특징입니다.",
        sectionViewLink: "https://kde66034.github.io/codingclass/javascript/effect/quizEffect01.html",
        sectionCodeLink: "https://github.com/kde66034/codingclass/tree/main/javascript/effect/quizEffect01.html"
    },
    {
        sectionClassID: "section06",
        sectionImgLink: "assets/img/mywork08.jpg",
        sectionBigTtitle: "Search",
        sectionTtitle: "Search Effect",
        sectionDesc: "CSS 속성 386개를 공부하기 위해 만든 서치 이펙트입니다. 총 7가지의 유형으로 만들었으며 indexOf()/search() 메서드를 이용하여 검색하는 유형과 includes()로 검색하는 유형, charAt()을 이용하여 CSS 속성 첫 글자로 검색하는 유형 등이 있으며 마지막으로 2분동안 CSS 속성을 검색하는 게임을 만들어보았습니다.",
        sectionViewLink: "https://kde66034.github.io/codingclass/javascript/effect/searchEffect01.html",
        sectionCodeLink: "https://github.com/kde66034/codingclass/tree/main/javascript/effect/searchEffect01.html"
    },
]

// 가로모드 섹션 출력
const SectionCont = ({sectionClassID, sectionImgLink, sectionBigTtitle, sectionTtitle, sectionDesc, sectionViewLink, sectionCodeLink}) => {
    return (
        <section id={`${sectionClassID}`} className={`section ${sectionClassID}`}>
            <div className="section__inner">
                <figure>
                    <img src={`${sectionImgLink}`} alt={`${sectionTtitle}`} />
                </figure>
                <div className="section__titleDescWrap">
                    <h2 className="section__bigtitle">{sectionBigTtitle}</h2>
                    <h3 className="section__title">{sectionTtitle}</h3>
                    <p className="section__desc">{sectionDesc}</p>
                    <div className="section__button__wrap">
                        <a className="section__button" href={`${sectionViewLink}`}>
                            <button>VIEW</button>
                        </a>
                        <a className="section__button" href={`${sectionCodeLink}`}>
                            <button>CODE</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

// 가로모드 전체
const HorizontalCont = () => {
    return (
        <div className="horizontalWrap">
            <div className="horizontalSection">
                <section id="webglType" className="webgl__wrap">
                    <canvas id="webgl1"></canvas>
                    <div className="webgl__title__wrap">
                        <h3 className={`webgl__title ${webglTypeInfo.titleFont} ${webglTypeInfo.titleClass}`}>
                            {webglTypeInfo.title}
                        </h3>
                    </div>
                </section>

                {sectionInfo.map(info => (
                    <SectionCont sectionClassID={info.sectionClassID} 
                        sectionImgLink={info.sectionImgLink} 
                        sectionBigTtitle={info.sectionBigTtitle} 
                        sectionTtitle={info.sectionTtitle} 
                        sectionDesc={info.sectionDesc} 
                        sectionViewLink={info.sectionViewLink} 
                        sectionCodeLink={info.sectionCodeLink}
                    />
                ))}

                <div className="webgl__title3__wrap section">
                    <h3 className={`${webglTitle3Info.titleClass} ${webglTitle3Info.titleFont}`}>
                        {webglTitle3Info.title}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCont