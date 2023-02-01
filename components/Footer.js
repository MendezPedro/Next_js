import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-logo">
          <Image
            src={"/images/logo-academia-slogan-bla.png"}
            width={404}
            height={100}
            alt="Logo Academia Desafío Latam"
            title="Academia Desafío Latam"
          />
        </div>
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-xl-4">
                <div className="footer-partners">
                  <h3>Contacto General</h3>
                  <h4>
                    <a
                      className="bla"
                      href="https://api.whatsapp.com/send?phone=56951177975&amp;text=Hola%20quiero%20informaci%C3%B3n%20de%20"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-whatsapp" aria-hidden="true"></i> +56
                      9 5117 7975
                    </a>
                  </h4>

                  <h4>Horario de Atención WhatsApp:</h4>
                  <span>Lunes a Viernes de 10:00 a 18:00 </span>
                  <h4 className="mt-2">Contacto Admisión:</h4>
                  <a
                    className="mailto"
                    href="mailto:inscripciones@desafiolatam.com"
                  >
                    inscripciones@desafiolatam.com
                  </a>
                  <h4 className="mt-2">Contacto Estudiantes:</h4>
                  <a className="mailto" href="mailto:ayuda@desafiolatam.com">
                    ayuda@desafiolatam.com
                  </a>
                  <a
                    className="mailto"
                    target="_blank"
                    href="https://goo.gl/maps/q5UMFeirbuXLmXr26"
                    rel="noreferrer"
                  >
                    <h4>Rebeca Matte 18, Santiago</h4>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <div className="footer-menu">
                  <h3>Carreras</h3>
                  <ul>
                    <li>
                      <a href="https://desafiolatam.com/full-stack-javascript/">
                        Desarrollo Full Stack JavaScript
                      </a>
                    </li>

                    <li>
                      <a
                        className="active"
                        href="https://desafiolatam.com/diseno-ux-ui/"
                      >
                        Diseño UX/UI
                      </a>
                    </li>

                    <li>
                      <a href="https://desafiolatam.com/data-science/">
                        Data Science
                      </a>
                    </li>

                    <li>
                      <a href="https://desafiolatam.com/front-end-react/">
                        Front End
                      </a>
                    </li>

                    <li>
                      <a href="https://desafiolatam.com/data-analytics/">
                        Data Analytics
                      </a>
                    </li>
                  </ul>
                </div>

                <h3 className="mt-4">Somos OTEC</h3>
                <Image
                  src={"/images/logo-sence.png"}
                  width={288.656}
                  height={64.25}
                  alt="Logo Sence"
                  title="Logo Sence"
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <div className="footer-menu">
                  <h3>Nuestra comunidad</h3>
                  <ul>
                    <li>
                      <a href="https://desafiolatam.com/estudiantes/">
                        Estudiantes
                      </a>
                    </li>
                    <li>
                      <a href="https://desafiolatam.com/comunidad/">
                        Comunidad
                      </a>
                    </li>

                    <div className="dropdown-divider"></div>
                    <li>
                      <a href="http://blog.desafiolatam.com/">Blog</a>
                    </li>
                    <li>
                      <a href="https://desafiolatam.com/becas/">Becas</a>
                    </li>
                    <li>
                      <a href="https://desafiolatam.com/trabaja-con-nosotros/">
                        Trabaja con Nosotros
                      </a>
                    </li>
                    <li>
                      <a href="https://desafiolatam.com/equipo-docente/">
                        Postula para ser docente
                      </a>
                    </li>
                    <li>
                      <a href="https://desafiolatam.com/politica-de-calidad/">
                        Políticas de Calidad
                      </a>
                    </li>
                    <li>
                      <a href="https://desafiolatam.com/politica-privacidad-de-datos/">
                        Política de Privacidad y Protección de Datos
                      </a>
                    </li>
                  </ul>

                  <div className="footer-redes">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/DesafioLatam/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/desafiolatam/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/desafiolatam"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UCz0ekVt3TQ65voddo9xVOQw/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
