import React from 'react'

// 작품 소개 영역 타이틀 정보
const myWorkTitleInfo = {
    title: "LIST OF MY WORK",
    titleFont: "pp_eiko_medium",
    titleDesc: "국비 코딩학원에서 수강하던 시절 부지런히 만든 작품들입니다. 6개월이 넘는 기간동안 열심히 공부하며 만든 저의 보물같은 존재들이며, 코딩 초보시절 ‘코딩 울렁증’을 앓고 있던 제게 이 작품들은 뿌듯함과 성취감을 안겨주고 두려워했던 코딩과 친해질 수 있는 계기를 만들어주었습니다. 열심히 만든 만큼 꼼꼼히 봐주셨으면 좋겠습니다. 감사합니다!"
}

// 작품 리스트 정보
const workListInfo = [
    {
        summaryClass: "first_summary",
        workTitle: "Standard Web Site",
        workTitleFont: "pp_neue_montreal",
        workImgLink: "assets/img/mywork09.jpg",
        workDesc: "웹 표준을 준수하여 제작한 가공의 학원「별빛제빵교실」홈페이지입니다. 헤더 영역과 메인 영역(슬라이드, 이미지, 이미지·텍스트, 카드, 배너), 마지막에는 푸터 영역으로 구조가 이루어져 있으며 웹 표준을 준수하기 위해 시맨틱 태그를 적극적으로 활용하거나 이미지 업로드 시에 Alt 속성에 적절한 이미지에 대한 설명을 기입하는 등 웹 서핑을 하기 불편한 장애를 가진 사람들이나 노약자들 역시 비장애인들과 동등하게 원활한 웹 서핑을 할 수 있도록 웹 사이트를 최적화하였습니다. svg를 이용하여 아이콘을 나타낼 때에도 aria-hidden=true 속성을 붙여 시각 장애인용 스크린 리더기가 불필요한 부분을 읽지 못하도록 막는 기능을 추가하였습니다.",
        workViewLink: "https://kde66034.github.io/codingclass/site/site1/index.html",
        workCodeLink: "https://github.com/kde66034/codingclass/tree/main/site/site1/index.html"
    },
    {
        summaryClass: "second_summary",
        workTitle: "PHP Team Project",
        workTitleFont: "pp_neue_montreal",
        workImgLink: "assets/img/mywork01.jpg",
        workDesc: "HTML과 CSS에는 어느 정도 익숙해졌지만 여전히 JavaScript도 어려워했던 시절, 저에게 PHP란 정말로 미지의 영역이었습니다. 그저 열심히 검색하고, 열심히 따라하며 제대로 작동될 때까지 복사 붙여넣기를 반복해가는 식으로 공부하였습니다. 그렇게 한 달 정도 공부했더니 도저히 이해가 가지 않았던 PHP의 문법이 어느정도 읽히고 이해가 되기 시작했습니다. 지구ON은 기후위기에 대응하기 위한 기후행동을 장려하는 웹 사이트이며, 이번 조별 프로젝트는 PHP라는 낯선 언어 뿐만 아니라 ‘팀 프로젝트’였기에 저에게 더욱 의미 있는 시간이었습니다. 팀원 모두가 열심히 역할을 맡고 수행하며 디테일화 되어가는 결과물은 저를 포함한 팀원 모두에게 성취감을 안겨주는 소중한 시간이었습니다.",
        workViewLink: "http://kde9902.dothome.co.kr/php/main/main.php",
        workCodeLink: "https://github.com/kde66034/teamProject"
    },
    {
        summaryClass: "third_summary",
        workTitle: "React API Web Site",
        workTitleFont: "pp_neue_montreal",
        workImgLink: "assets/img/mywork10.jpg",
        workDesc: "React를 이용하여 각종 정보들을 API로 가져오는 웹 사이트를 만들어 보았습니다. YouTube에서 현재의 인기 영상들을 불러오거나 검색 키워드에 맞는 영상들을 불러오는 기능과, The Movie Database에서 최근 개봉한 영화 정보를 불러오거나 검색 키워드에 맞는 영화 목록을 불러오는 기능과, Unsplash에서 새로운 이미지들을 불러오는 등 다양하고 유용한 기능들을 제공합니다. 마크업만 해왔던 제게 있어서 React는 무척 익히기 어려웠던 언어였지만 React API 사이트를 만든 시간은 제가 웹 퍼블리셔 뿐만 아닌 프론트엔드 개발자로 가는 길도 알려준 매우 유익한 시간이었습니다.",
        workViewLink: "https://reactapi9902.netlify.app/",
        workCodeLink: "https://github.com/kde66034/react01"
    },
    {
        summaryClass: "fourth_summary",
        workTitle: "React YouTube API",
        workTitleFont: "pp_neue_montreal",
        workImgLink: "assets/img/mywork11.jpg",
        workDesc: "이전에 만들었던 React API Web Site에서 한 층 더 심화된 YouTube API 사이트를 만들어 보았습니다. 페이지 상단에는 로고와 검색창이 배치되어 있으며, 좌측에는 ASMR 유튜버들의 채널 리스트가 출력되어 있으며 리스트 중 한 채널명을 클릭하면 우측에는 해당 채널의 영상들이 출력됩니다. 영상 카드를 클릭하면 동영상 보기 페이지로 들어가고, 영상 카드 좌측 하단의 채널명을 클릭하면 해당 채널의 정보와 영상이 출력되는 채널 상세보기 페이지로 이동됩니다. API를 불러오는 방식은 FetchAPI로 비동기(async) 방식을 사용하였습니다. 스타일 시트는 기존의 CSS가 아닌 SCSS라는 새로운 방식으로 작업하였습니다.",
        workViewLink: "https://react-youtube9902.netlify.app/",
        workCodeLink: "https://github.com/kde66034/react_youtube"
    },
    {
        summaryClass: "fifth_summary",
        workTitle: "Vue API Web Site",
        workTitleFont: "pp_neue_montreal",
        workImgLink: "assets/img/mywork12.jpg",
        workDesc: "Vue를 이용하여 각종 정보들을 API로 가져오는 웹 사이트를 만들어 보았습니다. YouTube에서 현재의 인기 영상들을 불러오거나 검색 키워드에 맞는 영상들을 불러오는 기능과, The Movie Database에서 최근 개봉한 영화 정보를 불러오거나 검색 키워드에 맞는 영화 목록을 불러오는 기능과, Unsplash에서 새로운 이미지들을 불러오는 등 다양하고 유용한 기능들을 제공합니다. 마크업만 해왔던 제게 있어서 Vue는 React와 더불어 무척 익히기 어려웠던 언어였지만 Vue API 사이트를 만든 시간은 제가 웹 퍼블리셔 뿐만 아닌 프론트엔드 개발자로 가는 길도 알려준 매우 유익한 시간이었습니다.", 
        workViewLink: "https://vueapi9902.web.app/",
        workCodeLink: "https://github.com/kde66034/vue_api"
    },
    {
        summaryClass: "sixth_summary",
        workTitle: "React API Team Project",
        workTitleFont: "pp_neue_montreal",
        workImgLink: "assets/img/mywork13.jpg",
        workDesc: "React를 이용한 첫 팀 프로젝트 작품입니다. 사이트 이름은 「World Weather」이며 전세계의 날씨 정보를 가져오는 사이트입니다. 페이지 우측 상단에 검색창이 있으며 해당 검색창에 도시명을 영어로 입력한 다음 엔터키를 누르거나 검색 버튼을 누르면 해당 지역의 날씨 정보를 가져오며, 해당 지역의 현재 날씨와 시간대(낮 또는 밤)에 맞게 배경 이미지가 변화합니다. 가져오는 날씨 정보는 현재의 기온과 금일의 최고·최저기온 및 체감기온, 습도, 가시거리 등이 있으며 API 정보는 axios 방식으로 OpenWeatherMap을 통해 가져왔습니다. React를 팀 프로젝트로 도전하는 것은 처음이었기 때문에 많은 시행착오를 겪었지만 무사히 결과물이 나올 수 있었으며 이번 경험을 통해 실무에서도 React를 쓸 수 있는 역량을 갖추게 되었기 때문에 굉장히 의미 있는 시간이었습니다.", 
        workViewLink: "https://worldweather2022.netlify.app/",
        workCodeLink: "https://github.com/kde66034/react_worldweather"
    },
    {
        summaryClass: "seventh_summary",
        workTitle: "PHP Blog",
        workTitleFont: "pp_neue_montreal",
        workImgLink: "assets/img/mywork06.jpg",
        workDesc: "PHP를 이용하여 블로그 웹사이트를 만들어보았습니다. 메인 페이지와 회원 가입, 로그인, 게시판, 블로그, 마이 페이지 등으로 사이트가 구성되어 있으며 처음에는 HTML 마크업부터 시작하였고, 그 다음 게시판, 블로그, 회원, 댓글 테이블 등 데이터를 저장시킬 공간을 만들었습니다. 그런 다음 본격적으로 PHP 코딩을 시작하여 진짜 존재하는 사이트처럼 글쓰기와 글 수정, 댓글 작성 및 삭제 등의 기능을 구현했고 완성된 결과물을 Dothome에 업로드하여 완성했습니다. PHP는 어떻게 보면 눈에 보이지 않는 서버 쪽을 담당하는 백엔드 영역인지라 굉장히 어렵게 느껴졌지만 이 작품을 공부하며 만들면서 낯설기만 했던 PHP와 친해질 수 있었던 귀중한 시간이었습니다.", 
        workViewLink: "http://kde66034.dothome.co.kr/php/",
        workCodeLink: "https://github.com/kde66034/codingclass/tree/main/php"
    },
]

// 작품 리스트 details 출력
const WorkListCont = ({summaryClass, workTitle, workTitleFont, workImgLink, workDesc, workViewLink, workCodeLink}) => {
    return (
        <details className="details">
            <summary className={`${summaryClass}`}>
                <h4 className={`work__title ${workTitleFont}`}>{workTitle}</h4>
                <div className="work__btn">
                    <span className="ir">자세히 보기</span>
                </div>
            </summary>
            <div className="work__desc__wrap">
                <figure className="work__img">
                    <img src={`${workImgLink}`} alt={`${workTitle}`} />
                </figure>
                <div class="work__desc">
                    <p>{workDesc}</p>
                </div>
                <div class="work__button__wrap">
                    <a class="work__button" href={`${workViewLink}`}>
                        <button>VIEW</button>
                    </a>
                    <a class="work__button" href={`${workCodeLink}`}>
                        <button>CODE</button>
                    </a>
                </div>
            </div>
        </details>
    )
}

// 작품 소개 영역 전체
const ListOfMyWork = () => {
    return (
        <section id="listOfMyWork" className="listOfMyWork__wrap">
            <div className="titleDesc reveal">
                <h3 className={`listOfMyWork__title ${myWorkTitleInfo.titleFont}`}>{myWorkTitleInfo.title}</h3>
                <hr />
                <p className="listOfMyWork__desc">{myWorkTitleInfo.titleDesc}</p>
            </div>

            <div className="workList reveal">
                {workListInfo.map(info => (
                    <WorkListCont summaryClass={info.summaryClass} 
                        workTitle={info.workTitle} 
                        workTitleFont={info.workTitleFont} 
                        workImgLink={info.workImgLink} 
                        workDesc={info.workDesc} 
                        workViewLink={info.workViewLink} 
                        workCodeLink={info.workCodeLink} 
                    />
                ))}
            </div>
        </section>
    )
}

export default ListOfMyWork