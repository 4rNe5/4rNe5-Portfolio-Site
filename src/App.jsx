import profile from './assets/lsvg.svg'
import notionlogo from './assets/notion.svg'
import instalogo from './assets/instagram2.svg'
import githublogo from './assets/github2.svg'
import maillogo from './assets/mail2.svg'
import './App.css'

function App() {

  return (
    <div className="background-image">
    <>
      <img src={profile} className="profile-picture" alt="Profile picture" />
      <h1 className="profile-title">Intrinsic iOS Developer</h1>
      <h2 className="profile-name"> 박준현 / 4rNe5 </h2>
      <h3 className="profile-school"> On DGSW </h3>
      <hr className="divider" />
      <div>

        <div className="logo-container">
          <a href="http://portfolio.4rne5.kro.kr" target="_blank" rel="noreferrer">
            <img src={notionlogo} className="logo" alt="Notion logo" />
          </a>
          <span className="logo-text">Notion</span>
        </div>

        <div className="logo-container">
        <a href="https://www.instagram.com/4_rne5/" target="_blank" rel="noreferrer">
          <img src={instalogo} className="logo" alt="Insta logo" />
        </a>
          <span className="logo-text">Instagram</span>
        </div>

        <div className="logo-container">
        <a href="https://github.com/4rNe5" target="_blank" rel="noreferrer">
          <img src={githublogo} className="logo" alt="Github logo" />
        </a>
          <span className="logo-text">Github</span>
        </div>
        <div className="logo-container">
          <a href="mailto:4rNe5@proton.me" target="_blank" rel="noreferrer">
            <img src={maillogo} className="logo" alt="Mail logo" />
          </a>
          <span className="logo-text">Mail</span>
        </div>
      </div>
    </>
    </div>
  )
}

export default App
