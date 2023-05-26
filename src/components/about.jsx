import banner1 from '../images/designer-desk-2 1.png'
import banner2 from '../images/business-presentation-1 1.png'
import Team from './team'
import Aboutnav from './aboutnav'

const About = () => {
  return (
    <>
      <Aboutnav />
      <section className="about">
        <div className="ab1">
          <p>
            <strong className="bold">Free-Hit</strong> is an application that is
            used to search for <b>free tools</b> that are both free and helpful
            for our needs. It is built by the amazing <b>open-source</b>{' '}
            community.
            <br />
            <br />
            <button>
              <a href="https://github.com/JasonDsouza212/free-hit">
                Star the repo <strong>★</strong>
              </a>
            </button>
          </p>
          <img src={banner1} alt="" />
        </div>
        <div className="ab2">
          <img src={banner2} alt="" />
          <p>
            Great things are never created in isolation. Thanks to our amazing{' '}
            <b>Contributors</b>, we've brought this product to life. And with
            your help, we can continue to make it even better. If you're a{' '}
            <b>Developer</b> or a <b>Tech enthusiast</b>, you can help us create
            a better experience for everyone. We are excited to hear your
            thoughts and ideas.
            <br />
            <br />
            <button>
              <a href="https://github.com/JasonDsouza212/free-hit/blob/main/CONTRIBUTING.md">
                Learn more <strong>➜</strong>
              </a>
            </button>
          </p>
        </div>
      </section>
      <Team />
    </>
  )
}

export default About
