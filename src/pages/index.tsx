import * as React from "react"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

// styles
const pageStyles = {
  color: "#232129",
  padding: 48,
  fontFamily: "Eudoxus Sans, -apple-system, Roboto, sans-serif",
  fontWeight: 400,
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
}
const profileStyles = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center"
}
const photoStyle = {
  borderRadius: "50%"
}
const titleStyles = {
  fontWeight: 600,
  marginTop: 8,
  marginBottom: 0
}
const descriptionStyles = {
  marginTop: 8,
  marginBottom: 0
}
const headingStyles = {
  fontWeight: 600,
  marginTop: 64,
  marginBottom: 0
}
const linkListStyles = {
  display: "flex",
  flexDirection: "column" as "column",
  gap: 12,
  marginTop: 16,
}
const linkLabelStyles = {
  display: "flex",
  alignItems: "center",
  background: "rgb(242, 242, 247)",
  padding: "8px 12px",
  borderRadius: 16,
  width: 280,
  boxSizing: "border-box" as "border-box",
}
const linkImageStyle = {
  borderRadius: "50%"
}
const linkTitleStyles = {
  fontWeight: 500,
  minWidth: 280 - 24,
  marginLeft: -30,
  textAlign: "center" as "center"
}
const caseStyles = {
  boxSizing: "border-box" as "border-box",
  minWidth: 220,
  height: 260,
  padding: 8
}
const cardImageStyles = {
  borderRadius: "16px",
  width: "auto",
  height: 80,
  background: "rgb(242, 242, 247)"
}
const cardTitleStyles = {
  marginTop: 8,
  marginBottom: 0
}
const cardDescStyles = {
  marginTop: 6,
  marginBottom: 0
}
const cardButtonStyles = {
  display: "flex",
  justifyContent: "center",
  borderRadius: 32,
  paddingTop: 6,
  paddingBottom: 6,
  background: "rgb(242, 242, 247)"
}

// data
const works = [
  {
    title: "Vapor",
    desc: "Gatsby Starter",
    button: "Demo site"
  },
  {
    title: "LAM",
    desc: "Gatsby Starter",
    button: "Demo site"
  },
  {
    title: "Maccy",
    desc: "Translate to 🇯🇵 & 🇰🇷",
    button: "Website"
  }
]

// markup
const IndexPage = ({}) => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <link rel="preconnect" href="https://stijndv.com"/>
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css"/>
        <style>
          {`
            .slider {
              display: flex;
              overflow-x: scroll;
              max-width: 360px;
              padding: 8px;
            }
            .slider::-webkit-scrollbar {
              height: 8px;
            }
            .slider::-webkit-scrollbar-thumb {
              // background-color: #c7c7cc;
              background-color: #d1d1d6;
              border-radius: 50px;
            }
            .slider-card-case {
              box-sizing: border-box;
              min-width: 220px;
              height: 260px;
              padding: 16px
            }
            .slider-card {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-sizing: border-box;
              padding: 16px;
              border-radius: 20px;
              box-shadow: 0px 0px 20px 0px rgba(28, 28, 30, 0.1);
              width: 100%;
              height: 100%;
            }
          `}
        </style>
      </Helmet>
      <div style={profileStyles}>
        <StaticImage
          src="../images/profile.png"
          alt="Photo"
          placeholder="blurred"
          layout="fixed"
          width={120}
          quality={100}
          style={photoStyle}
        />
        <h1 style={titleStyles}>
          Weensy
        </h1>
        <p style={descriptionStyles}>
          Software developer 📍JP<br/>
        </p>
      </div>

      <h2 style={headingStyles}>Links</h2>
      <div style={linkListStyles}>
        <div style={linkLabelStyles}>
          <StaticImage
            src="../images/links/instagram.webp"
            alt="Instagram"
            placeholder="blurred"
            layout="fixed"
            width={30}
            quality={100}
            style={linkImageStyle}
          />
          <div style={linkTitleStyles}>Instagram</div>
        </div>
        <div style={linkLabelStyles}>
          <StaticImage
            src="../images/links/github.webp"
            alt="GitHub"
            placeholder="blurred"
            layout="fixed"
            width={30}
            quality={100}
            style={linkImageStyle}
          />
          <div style={linkTitleStyles}>GitHub</div>
        </div>
        <div style={linkLabelStyles}>
          <StaticImage
            src="../images/links/medium.webp"
            alt="Medium"
            placeholder="blurred"
            layout="fixed"
            width={30}
            quality={100}
            style={linkImageStyle}
          />
          <div style={linkTitleStyles}>Medium</div>
        </div>
        <div style={linkLabelStyles}>
          <StaticImage
            src="../images/links/hashnode.webp"
            alt="Hashnode"
            placeholder="blurred"
            layout="fixed"
            width={30}
            quality={100}
            style={linkImageStyle}
          />
          <div style={linkTitleStyles}>Hashnode</div>
        </div>
        <div style={linkLabelStyles}>
          <StaticImage
            src="../images/links/mail.webp"
            alt="Mail me"
            placeholder="blurred"
            layout="fixed"
            width={30}
            quality={100}
            style={linkImageStyle}
          />
          <div style={linkTitleStyles}>Mail me</div>
        </div>
        <div style={linkLabelStyles}>
          <StaticImage
            src="../images/links/discord.webp"
            alt="Discord"
            placeholder="blurred"
            layout="fixed"
            width={30}
            quality={100}
            style={linkImageStyle}
          />
          <div style={linkTitleStyles}>Discord</div>
        </div>
        <div style={linkLabelStyles}>
          <StaticImage
            src="../images/links/buymeacoffee.webp"
            alt="Buy Me a Coffee"
            placeholder="blurred"
            layout="fixed"
            width={30}
            quality={100}
            style={linkImageStyle}
          />
          <div style={linkTitleStyles}>Buy Me a Coffee</div>
        </div>
      </div>

      <h2 style={headingStyles}>Works</h2>
      <div className="slider">
        {works.map(work => (
          <div style={caseStyles}>
            <div className="slider-card">
              <div>
                <div style={cardImageStyles}></div>
                <h3 style={cardTitleStyles}>{work.title}</h3>
                <p style={cardDescStyles}>{work.desc}</p>
              </div>
              <div>
                <div style={cardButtonStyles}>
                  <div style={{fontWeight:500,fontSize:14}}>{work.button}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default IndexPage
