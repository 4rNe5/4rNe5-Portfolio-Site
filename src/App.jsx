import profile from './assets/lsvg.svg'
import notionlogo from './assets/notion.svg'
import instalogo from './assets/instagram2.svg'
import githublogo from './assets/github2.svg'
import maillogo from './assets/mail2.svg'
import moneylogo from './assets/money5.svg'
import telegramlogo from './assets/telegram.svg'
import linkedinlogo from './assets/linkedin2.svg'
import discordlogo from './assets/discord.svg'
import './App.css'

function App() {

  return (
    <div className="background-image">
    <>
      <div className="profdiv">
      <img src={profile} className="profile-picture" alt="Profile picture" />
        <div className="texts">
          <h1 className="profile-title">Intrinsic iOS Developer</h1>
          <h2 className="profile-name"> 박준현 / 4rNe5 </h2>
        </div>
      </div>
      <hr className="divider" />
      <div>
        <div className="fstline">
          <div className="logo-container">
            <a href="https://www.instagram.com/4_rne5/" target="_blank" rel="noreferrer">
              <img src={instalogo} className="logo" alt="Insta logo" />
            </a>
            <span className="logo-text">Instagram</span>
          </div>
          <div className="logo-container">
            <a href="https://www.discord.com/users/796907962811285506" target="_blank" rel="noreferrer">
              <img src={discordlogo} className="logo" alt="discord logo" />
            </a>
            <span className="logo-text">Mail</span>
          </div>
        <div className="logo-container">
        <a href="https://github.com/4rNe5" target="_blank" rel="noreferrer">
          <img src={githublogo} className="logo" alt="Github logo" />
        </a>
          <span className="logo-text">Github</span>
        </div>
          <div className="logo-container hidem">
            <a href="https://t.me/A4rne5" target="_blank" rel="noreferrer">
              <img src={telegramlogo} className="logo" alt="Telegram logo" />
            </a>
            <span className="logo-text">Mail</span>
          </div>
      </div>
        <div>
          <div className="logo-container">
            <a href="http://4rne5-portfolio.kro.kr" target="_blank" rel="noreferrer">
              <img src={notionlogo} className="logo" alt="Notion logo" />
            </a>
            <span className="logo-text">Notion</span>
          </div>
          <div className="logo-container">
            <a href="mailto:me@4rne5.dev" target="_blank" rel="noreferrer">
              <img src={maillogo} className="logo" alt="Mail logo" />
            </a>
            <span className="logo-text">Mail</span>
          </div>
          <div className="logo-container">
            <a href="https://toss.me/4rne5" target="_blank" rel="noreferrer">
              <img src={moneylogo} className="logo" alt="Money logo" />
            </a>
            <span className="logo-text">Mail</span>
          </div>
          <div className="logo-container">
            <a href="https://www.linkedin.com/in/4rNe5" target="_blank" rel="noreferrer">
              <img src={linkedinlogo} className="logo" alt="linkedin logo" />
            </a>
            <span className="logo-text">Mail</span>
          </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default App
