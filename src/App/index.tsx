import Container from "../Container"
import Navbar from "../Navbar"
import team from './assets/team.png'
import dongiOld from './assets/dongi_old.png'
import dongiNew from './assets/dongi_new.png'
import dongiArchive from './assets/dongi_archive.png'

const App = (): JSX.Element => {
  return (
    <main data-theme="dark">
      <Navbar />
      <Container>
        <h2>1. 프로젝트 개요</h2>
        <p>주제: 학생 작품 전시관 & 통합 로그인 시스템</p>
        <br />
        <p>개발 동기:</p>
        <img src={dongiOld}/>
        <br />
        <small>기존에는 각 서비스들 마다 자체 회원 시스템이 있어 보안에 취악 하고 서비스간 계정정보가 상이하였다.</small>
        <hr />
        <img src={dongiNew}/>
        <br />
        <small>통합 로그인 시스템을 통해 이 점을 해결할 수 있다.</small>
        <hr />
        <img src={dongiArchive} />
        <small>또한 통합 로그인 시스템을 통해 얻은 서비스들의 정보를 통해 전시관을 개발 할 수 있다.</small>
        <br />
        <p>수행 목표: 기존 각 서비스들이 계정정보가 달라 불편했던 점을 통합 로그인 시스템을 통해 해결하고 학생 작품 전시관을 통해 홍보 효과를 얻는다.</p>

        <br />
        <br />

        <h2>2. 팀 소개</h2>
        <br />
        <img src={team} />
        <br />
        <small>박민혁: pmh_only@pmh.codes <a href="https://pmh.codes">포트폴리오</a></small>
        <small>김무일: gimmuil@gmail.com <a href="https://github.com/gimmuil">깃허브</a></small>
        <small>윤서준: me@designed.network <a href="https://designed.network">개인 사이트</a></small>

        <br />
        <br />

        <h2>3. 사용 기술</h2>
        <p>AWS, Docker, Gatsby.js(React.js), Nest.js(Node.js), TypeScript, Scss, Adobe XD, MariaDB</p>

        <br />
        <br />

        <h2>4. 프로젝트 진행 상황</h2>
        <p>8월: 프로젝트 방향 설계 및 기초 작업 (initialization)</p>
        <p>9월: 코드를 통한 DB 설계 및 UI/UX 디자인 시작</p>
        <p>10월: UI/UX 디자인을 프론트엔드 코드로 구현 시작</p>
        <p>11월: 백엔드 서버 완성</p>
        <p>12월: 버그 수정 및 디자인 개선, 발표 준비</p>

        <br />
        <br />

        <h2>5. 프로젝트 상세 소개</h2>
        <p>레이아웃 세부 설명:</p>
        <iframe src="/20222.pdf" width="100%" height="500px"></iframe>

        <br />

        <p>데이터베이스 구조</p>
        <img src="/table.png" />

        <br />
        
        <p>인프라 구조</p>
        <img src="/infra.png" />

        <br />
        <br />

        <h2>6. 세부 수행 과정 및 사용자 수행 흐름도</h2>
        <br />
        <iframe src="/202222.pdf" width="100%" height="500px"></iframe>

        <br />
        <br />

        <h2>7. 프로젝트 추진 결과</h2>
        <p>결과 분석: 클라우드 기반의 자동화 기술(CI/CD)을 통해 빠른 개발이 가능하여 완성도 높고 사용하기 편리한 웹 사이트를 제작하였다.</p>
        <p>유지 보수: 유지 보수가 쉽도록 깃허브 위키 기능을 통한 문서화를 하였고 체계적으로 코드를 구성하였다.</p>


        <br />
        <br />
        
        <h2>8. 결과 및 발표 자료</h2>
        <p>깃허브 저장소: <a href="https://gihub.com/redarchive">링크</a></p>
        <p>실행 주소: <a href="https://center.gbsw.hs.kr">이동</a></p>
        
        <br />

        <p>프로젝트 소개 영상:</p>
        <video src="/20223.mp4" controls muted autoPlay></video>

        <br />
        <p>계획 발표 자료: <a href="https://docs.google.com/presentation/d/1UHOUkWsj3VbcSIUL_Eje6r55zeLzEHRq/edit?usp=share_link&ouid=108982809853909912382&rtpof=true&sd=true">링크</a></p>
        <p>중간 발표 자료: <span style={{ color: 'red' }}>없어짐!</span></p>
        <p>최종 발표 자료: <a href="https://cdn.discordapp.com/attachments/1053661293934034974/1056912901790769212/20222.pptx">젤다</a></p>
      </Container>
    </main>
  )
}

export default App
