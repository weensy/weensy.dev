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
const sliderContainerStyles = {
  overflowX: "scroll" as "scroll",
  maxWidth: 360
}
const sliderMainStyles = {
  display: "flex",
  padding: 8,
  width: 220 * 3
}
const caseStyles = {
  boxSizing: "border-box" as "border-box",
  minWidth: 220,
  height: 260,
  padding: 8
}
const cardStyles = {
  display: "flex",
  flexDirection: "column" as "column",
  justifyContent: "space-between",
  boxSizing: "border-box" as "border-box",
  padding: 16,
  borderRadius: 20,
  boxShadow: "0px 0px 20px 0px rgba(28, 28, 30, 0.1)",
  width: "100%",
  height: "100%"
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
const cardButtonTextStyles = {
  fontWeight:500,
  fontSize:14
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
const seo = {
  title: "Weensy",
  description: "Software developer 📍JP",
  url: "https://weensy.dev"
}

// markup
const IndexPage = ({}) => {
  return (
    <main style={pageStyles}>
      <Helmet title={seo.title} htmlAttributes={{lang:"en"}}>
        <meta name="description" content={seo.description}/>
        <meta property="og:url" content={seo.url}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={seo.title}/>
        <meta property="og:description" content={seo.description}/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:creator" content={seo.title}/>
        <meta name="twitter:title" content={seo.title}/>
        <meta name="twitter:description" content={seo.description}/>
        <link rel="preconnect" href="https://stijndv.com"/>
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css"/>
        <style>
          {`
            a {
              color: inherit;
              text-decoration: none;
            }
            div::-webkit-scrollbar {
              height: 8px;
            }
            div::-webkit-scrollbar-thumb {
              background-color: #d1d1d6;
              border-radius: 50px;
            }
            ::selection {
              background-color: #bbaaee;
            }
            .image-radius-50 img {
              border-radius: 50%;
              -o-border-radius: 50%;
              -moz-border-radius: 50%;
              -kthml-border-radius: 50%;
              -webkit-border-radius: 50%;
            }
            .image-radius-16px img {
              border-radius: 16px;
              -o-border-radius: 16px;
              -moz-border-radius: 16px;
              -kthml-border-radius: 16px;
              -webkit-border-radius: 16px;
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
          className="image-radius-50"
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
        <a href="https://instagram.com/weensy.dev" target="_blank" rel="noopener noreferrer">
          <div style={linkLabelStyles}>
            <StaticImage
              src="../images/links/instagram.webp"
              alt="Instagram"
              placeholder="blurred"
              layout="fixed"
              width={30}
              quality={100}
              style={linkImageStyle}
              className="image-radius-50"
            />
            <div style={linkTitleStyles}>Instagram</div>
          </div>
        </a>
        <a href="https://github.com/weensy" target="_blank" rel="noopener noreferrer">
          <div style={linkLabelStyles}>
            <StaticImage
              src="../images/links/github.webp"
              alt="GitHub"
              placeholder="blurred"
              layout="fixed"
              width={30}
              quality={100}
              style={linkImageStyle}
              className="image-radius-50"
            />
            <div style={linkTitleStyles}>GitHub</div>
          </div>
        </a>
        <a href="https://weensy.medium.com" target="_blank" rel="noopener noreferrer">
          <div style={linkLabelStyles}>
            <StaticImage
              src="../images/links/medium.webp"
              alt="Medium"
              placeholder="blurred"
              layout="fixed"
              width={30}
              quality={100}
              style={linkImageStyle}
              className="image-radius-50"
            />
            <div style={linkTitleStyles}>Medium</div>
          </div>
        </a>
        <a href="https://weensy.hashnode.dev" target="_blank" rel="noopener noreferrer">
          <div style={linkLabelStyles}>
            <StaticImage
              src="../images/links/hashnode.webp"
              alt="Hashnode"
              placeholder="blurred"
              layout="fixed"
              width={30}
              quality={100}
              style={linkImageStyle}
              className="image-radius-50"
            />
            <div style={linkTitleStyles}>Hashnode</div>
          </div>
        </a>
        <a href="https://monkeytype.com/profile/NrzN11QAJ5QzqMCy6XsdZsQQjrJ2" target="_blank" rel="noopener noreferrer">
          <div style={linkLabelStyles}>
            <StaticImage
              src="../images/links/monkeytype.png"
              alt="Monkeytype"
              placeholder="blurred"
              layout="fixed"
              width={30}
              quality={100}
              style={linkImageStyle}
              className="image-radius-50"
            />
            <div style={linkTitleStyles}>Monkeytype</div>
          </div>
        </a>
        <a href="mailto:hello@weensy.dev">
          <div style={linkLabelStyles}>
            <StaticImage
              src="../images/links/mail.webp"
              alt="Mail me"
              placeholder="blurred"
              layout="fixed"
              width={30}
              quality={100}
              style={linkImageStyle}
              className="image-radius-50"
            />
            <div style={linkTitleStyles}>Contact</div>
          </div>
        </a>
        {/* <a href="https://discordapp.com/users/360789601532772354" target="_blank" rel="noopener noreferrer">
          <div style={linkLabelStyles}>
            <StaticImage
              src="../images/links/discord.webp"
              alt="Discord"
              placeholder="blurred"
              layout="fixed"
              width={30}
              quality={100}
              style={linkImageStyle}
              className="image-radius-50"
            />
            <div style={linkTitleStyles}>Discord</div>
          </div>
        </a> */}
        <a href="https://buymeacoffee.com/weensy" target="_blank" rel="noopener noreferrer">
          <div style={linkLabelStyles}>
            <StaticImage
              src="../images/links/buymeacoffee.webp"
              alt="Buy Me a Coffee"
              placeholder="blurred"
              layout="fixed"
              width={30}
              quality={100}
              style={linkImageStyle}
              className="image-radius-50"
            />
            <div style={linkTitleStyles}>Buy Me a Coffee</div>
          </div>
        </a>
      </div>

      <h2 style={headingStyles}>Works</h2>
      <div style={sliderContainerStyles}>
        <div style={sliderMainStyles}>
          <div style={caseStyles}>
            <a href="https://gatsby-vapor.weensy.dev" target="_blank" rel="noopener noreferrer">
              <div style={cardStyles}>
                <div>
                  <StaticImage
                    src="../images/works/vapor.png"
                    alt="Vapor"
                    placeholder="blurred"
                    layout="fixed"
                    width={172}
                    quality={100}
                    style={cardImageStyles}
                    className="image-radius-16px"
                  />
                  <h3 style={cardTitleStyles}>Vapor</h3>
                  <p style={cardDescStyles}>Gatsby Blog Starter</p>
                </div>
                <div>
                  <div style={cardButtonStyles}>
                    <div style={cardButtonTextStyles}>Demo site</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div style={caseStyles}>
            <a href="https://gatsby-lam.weensy.dev" target="_blank" rel="noopener noreferrer">
              <div style={cardStyles}>
                <div>
                  <StaticImage
                    src="../images/works/lam.png"
                    alt="LAM"
                    placeholder="blurred"
                    layout="fixed"
                    width={172}
                    quality={100}
                    style={cardImageStyles}
                    className="image-radius-16px"
                  />
                  <h3 style={cardTitleStyles}>LAM</h3>
                  <p style={cardDescStyles}>Gatsby Blog Starter</p>
                </div>
                <div>
                  <div style={cardButtonStyles}>
                    <div style={cardButtonTextStyles}>Demo site</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div style={caseStyles}>
            <a href="https://github.com/weensy/LXKB" target="_blank" rel="noopener noreferrer">
              <div style={cardStyles}>
                <div>
                  <StaticImage
                    src="../images/works/lxkb.png"
                    alt="LXKB"
                    placeholder="blurred"
                    layout="fixed"
                    width={172}
                    quality={100}
                    style={cardImageStyles}
                    className="image-radius-16px"
                  />
                  <h3 style={cardTitleStyles}>LXKB</h3>
                  <p style={cardDescStyles}>Minimal Keyboard</p>
                </div>
                <div>
                  <div style={cardButtonStyles}>
                    <div style={cardButtonTextStyles}>Repository</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div style={caseStyles}>
            <a href="https://maccy.app" target="_blank" rel="noopener noreferrer">
              <div style={cardStyles}>
                <div>
                  <StaticImage
                    src="../images/works/maccy.png"
                    alt="Maccy"
                    placeholder="blurred"
                    layout="fixed"
                    width={172}
                    quality={100}
                    style={cardImageStyles}
                    className="image-radius-16px"
                  />
                  <h3 style={cardTitleStyles}>Maccy</h3>
                  <p style={cardDescStyles}>Translate to 🇯🇵 & 🇰🇷</p>
                </div>
                <div>
                  <div style={cardButtonStyles}>
                    <div style={cardButtonTextStyles}>Website</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
