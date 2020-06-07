import React, { useState, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Animated } from "react-animated-css";
import Typed from 'react-typed';
import Loader from 'react-loader-spinner';
import { Link, Element } from 'react-scroll';
import { useMutation } from '@apollo/react-hooks';
import SocialMedia from './SocialPages/socialMedia.js';
import { bubble as Menu } from 'react-burger-menu';
import { useAlert } from "react-alert";
import { SEND_MESSAGE } from '../queries';

//css imports
import './Css/bootstrap.min.css';
import './Css/ionicons.min.css';
import './Css/owl.carousel.min.css';
import './Css/magnific-popup.css';
import './Css/hover.min.css';
import './Css/style.css';
import './Css/responsive.css';

//image imports
import PortugueseFlag from '../images/countryFlags/brasil.jpg';
import EnglishFlag from '../images/countryFlags/australia.jpg';
import Favicon from '../images/favicon.png';
import Me from '../images/me.jpg';

export default function Index() {
    //texts
    const [menuHome, setMenuHome] = useState("HOME");
    const [menuAbout, setMenuAbout] = useState("ABOUT");
    const [menuMyFeed, setMenuMyFeed] = useState("MY FEEDS");
    const [menuContact, setMenuContact] = useState("CONTACT");

    //text-home
    const [meHome, setMeHome] = useState("I'M");

    //text-about
    const [aboutTitle, setAboutTitle] = useState("Set of experience in several programming languages, deploys, code versions and database.");
    const [aboutDescription, setAboutDescription] = useState("Always studying to obtain and be aligned with the best that the market has to offer, willing to face the biggest challenges that the career can provide me.");

    //text-services
    const [serviceFrontend, setServiceFrontend] = useState("Development experience in the user interaction layer using the best technologies in the market.");
    const [serviceBackend, setServiceBackend] = useState("Experience in handling business rules, security, access to the database and integrations with other systems (Web Services).");
    const [serviceDeploy, setServiceDeploy] = useState("Experience in implementing cloud services using technologies such as Amazon, Gearhost, heroku ... Implementation in containers and domain registration as well.");
    const [serviceDynamics, setServiceDynamics] = useState("Development experience using microsoft dynamics platform, AX and CRM, with certification in both solutions.");
    const [serviceLetter, setServiceLetter] = useState("Request my resume :)");

    //text-contact
    const [inContact, setInContact] = useState("GET IN TOUCH");
    const [inFullname, setInFullname] = useState("FULLNAME");
    const [inEmail, setInEmail] = useState("EMAIL");
    const [inSubject, setInSubject] = useState("SUBJECT");
    const [inDescription, setInDescription] = useState("DESCRIPTION");
    const [inSendMessage, setInSendMessage] = useState("SEND MESSAGE");

    //ALERT
    const [alertMsg, setAlertMsg] = useState("Your message has been sent");
    const [alertErrorMsg, setAlertErrorMsg] = useState("Sorry, was not possible send your message");


    const [categorySuggest, setCategorySuggest] = useState("SUGGEST");
    const [categoryAcknowledgement, setCategoryAcknowledgement] = useState("ACKNOWLEDGEMENT");
    const [categoryDoubt, setCategoryDoubt] = useState("DOUBT");
    const [categoryOrder, setCategoryOrder] = useState("ORDER");

    //non fields
    const [visible, setVisible] = useState(false);
    const [styleAnimated, setStyleAnimated] = useState({ display: 'none' });
    const [styleLoader, setStyleLoader] = useState({ display: 'none' });
    const [loaderTranslator, setLoaderTranslator] = useState({ display: 'none' });

    //fields forms
    const [fullname, setFullname] = useState("");
    const [category, setCategory] = useState("suggest");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [sendMessage] = useMutation(SEND_MESSAGE);

    const alert = useAlert();

    function translate(language)
    {
        setLoaderTranslator({ display: 'block' });

        if(language === "pt-br")
        {
            //HEADER
            setMenuHome("INÍCIO");
            setMenuAbout("SOBRE");
            setMenuMyFeed("MEUS FEEDS");
            setMenuContact("CONTATO");
            //HOME
            setMeHome("EU SOU");
            //ABOUT
            setAboutTitle("Conjunto de experiência em diversas linguagens de programação, deploys, versionamento de código e banco de dados.");
            setAboutDescription("Sempre estudando para obter e estar alinhado com o melhor que o mercado tem a oferecer, disposto a enfrentar os maiores desafios que a carreira pode me proporcionar.");
            //SERVICES
            setServiceFrontend("Experiência em desenvolvimento na camada de interação com o usuário utilizando as melhores tecnologias do mercado.");
            setServiceBackend("Experiência na manipulação de regras de negócio, segurança, acesso ao banco de dados e integrações a outros sistemas (Web Services).");
            setServiceDeploy("Experiência na implementação de serviços para nuvem utilizando técnologias como a Amazon, Gearhost, heroku.. tal qual a sua implementação em containers e registro de dominios.");
            setServiceDynamics("Experiencia de desenvolvimento utilizando a plataforma microsoft dynamics, AX e CRM, com certificação em ambas as solucões.");
            setServiceLetter("Solicite o meu currículo :)");
            //CONTACT
            setInContact("ENTRE EM CONTATO");
            setInFullname("NOME COMPLETO");
            setInEmail("EMAIL");
            setInSubject("TÍTULO");
            setInDescription("DESCRIÇÃO");
            setInSendMessage("ENVIAR MENSAGEM");
            setCategorySuggest("SUGESTÃO");
            setCategoryAcknowledgement("AGRADECIMENTO");
            setCategoryDoubt("DÚVIDA");
            setCategoryOrder("PEDIDO");
            //ALERT
            setAlertMsg("Sua mensagem foi enviada");
            setAlertErrorMsg("Me desculpe, não foi possivel enviar sua mensagem");
 
        }
        else{
            //HEADER
            setMenuHome("HOME");
            setMenuAbout("ABOUT");
            setMenuMyFeed("MY FEEDS");
            setMenuContact("CONTACT");
            //HOME
            setMeHome("I'M");
            //ABOUT
            setAboutTitle("Set of experience in several programming languages, deploys, code versions and database.");
            setAboutDescription("Always studying to obtain and be aligned with the best that the market has to offer, willing to face the biggest challenges that the career can provide me.");
            //SERVICES
            setServiceFrontend("Development experience in the user interaction layer using the best technologies in the market.");
            setServiceBackend("Experience in handling business rules, security, access to the database and integrations with other systems (Web Services).");
            setServiceDeploy("Experience in implementing cloud services using technologies such as Amazon, Gearhost, heroku ... Implementation in containers and domain registration as well.");
            setServiceDynamics("Development experience using microsoft dynamics platform, AX and CRM, with certification in both solutions.");
            setServiceLetter("Request my resume :)");
            //CONTACT
            setInContact("GET IN TOUCH");
            setInFullname("FULLNAME");
            setInEmail("EMAIL");
            setInSubject("SUBJECT");
            setInDescription("DESCRIPTION");
            setInSendMessage("SEND MESSAGE");
            setCategorySuggest("SUGGEST");
            setCategoryAcknowledgement("ACKNOWLEDGEMENT");
            setCategoryDoubt("DOUBT");
            setCategoryOrder("ORDER");
            //ALERT
            setAlertMsg("Your message has been sent");
            setAlertErrorMsg("Sorry, was not possible send your message");
        }

        setTimeout(()=>{
            setLoaderTranslator({ display: 'none' });
        }, 250);

    }

    async function handleSubmit(event) {
        event.preventDefault();

        setStyleLoader({ display: 'block', 'margin-left': '15px' });
        try {
            await sendMessage({ variables: { fullname: fullname, category: category, email: email, subject: subject, description: description } });
            setTimeout(()=>{
                alert.success(alertMsg);
                setStyleLoader({ display: 'none' });
            }, 4000);
        } catch (error) {
            setTimeout(()=>{
                alert.error(alertErrorMsg);
                setStyleLoader({ display: 'none' });
            }, 4000);
        }
    };

    useLayoutEffect(() => {
        
        const handleScroll = e => {
            setStyleAnimated({ display: 'block' });
            if(window.innerWidth >= 992)
            {
                if(window.scrollY >=2150)
                {
                    setVisible(true); 
                }
                else if(window.scrollY <=1789)
                {
                    setVisible(false);
                }
            }
            else if(window.innerWidth < 992)
            {
                
                if(window.scrollY >= 2380)
                {
                    setVisible(true);
                }
                else if(window.scrollY <= 2200)
                { 
                    setVisible(false);
                }
            }else
            {
                setVisible(false);
            }
        }
    
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    return (
        <div id="App">
            <Helmet>
                <title>Ericksson Official Website</title>
                {/* Metas */}
                <meta charset="utf-8"></meta>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
                <meta content="" name="keywords"></meta>
                <meta content="" name="description"></meta>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>

                {/* Google Fonts */}
                <link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i|Playfair+Display:400,400i,700,700i,900,900i" rel="stylesheet"></link>
                {/* Animated Styles */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
                {/* Favicon */}
                <link rel="shortcut icon" href={Favicon} style={{ borderRadius: '100%' }} ></link>
                <link rel="icon" type="image/png" href={Favicon} style={{ borderRadius: '100%' }}></link>
            </Helmet>
            {/* start section navbar  */}
                <Menu>
                    <ul className="menu-nav no-style-list">
                        <li>
                            <Link activeClass="active" className="smoothScroll setCursor" to="home" spy={true} smooth={true} duration={500}>{menuHome}</Link>
                        </li>
                        <li>
                            <Link activeClass="active" className="smoothScroll setCursor" to="about" spy={true} smooth={true} duration={500}>{menuAbout}</Link>
                        </li>
                        <li>
                            <Link activeClass="active" className="smoothScroll setCursor" to="myfeed" spy={true} smooth={true} duration={500}>{menuMyFeed}</Link>
                        </li>
                        <li>
                            <Link activeClass="active" className="smoothScroll setCursor" to="contact" spy={true} smooth={true} duration={500}>{menuContact}</Link>
                        </li>
                        <li>
                            <img className="flagTranslator" onClick={ () => translate("pt-br") } src={PortugueseFlag} alt="Portuguese Flag"/>
                            <img className="flagTranslator" onClick={ () => translate("en")} src={EnglishFlag} alt="English Flag"/>
                        </li>
                        <li style={ loaderTranslator }>
                            <div id="loaderGit" >
                                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                            </div>                         
                        </li>                            
                    </ul>
                    
                </Menu>
                
            {/* End section navbar */}
            <div id="page-wrap">

                {/* start section header */}
                    <Element name="home">
                        <div id="header" className="home">
                            <div className="container">
                                <div className="header-content">
                                    <h1>{meHome} 
                                        <span className="typed">
                                            <Typed
                                                strings={[
                                                    'Ericksson',
                                                    'Dev. Frontend',
                                                    'Dev. Backend',
                                                    'Dev. Fullstack']}
                                                    typeSpeed={40}
                                                    backSpeed={50}
                                                    attr="placeholder"
                                                    loop >
                                                    <input type="text"/>  
                                            </Typed>
                                        </span>
                                    </h1>
                                    <p>Frontend, Backend, Fullstack</p>
                                                
                                    <ul className="list-unstyled list-social">
                                        <li><a href="https://www.instagram.com/erickssond"><i className="ion-social-instagram"></i></a></li>
                                        <li><a href="https://www.github.com/ErickssonDrozda"><i className="ion-social-github"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/ericksson-souza-drozda-116430125"><i className="ion-social-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Element>
                {/* End section header */}

                {/* start section about us  */}
                    <Element name="about">
                        <div id="about" className="paddsection">
                            <div className="container">
                                <div className="row justify-content-between">

                                    <div className="col-lg-3 setInitialOnPosition">
                                        <div className="div-img-bg">
                                            <div className="about-img">
                                                <img src={Me} className="img-responsive" alt="me"></img>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-7 setInitialOnPosition">
                                        <div className="about-descr">
                                            <p className="p-heading">{aboutTitle}</p>
                                            <p className="separator">{aboutDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Element>
                {/* end section about us */}

                {/* start section services */}
                    <div id="services">
                        <div className="container">

                            <div className="services-carousel owl-theme">

                                <div className="services-block">
                                    <i className="ion-code"></i>
                                    <span>Frontend</span>
                                    <p className="separator">{serviceFrontend}</p>
                                </div>

                                <div className="services-block">

                                    <i className="ion-chevron-right"></i>
                                    <span>Backend</span>
                                    <p className="separator">{serviceBackend}</p>

                                </div>

                                <div className="services-block">

                                    <i className="ion-earth"></i>
                                    <span>Deploy</span>
                                    <p className="separator">{serviceDeploy}</p>

                                </div>
                                
                                <div className="services-block">

                                    <i className="ion-social-windows-outline"></i>
                                    <span>Dynamics</span>
                                    <p className="separator">{serviceDynamics}</p>

                                </div>

                                <div>
                                    <p id="myResume" ><b>{serviceLetter}</b></p>
                                </div>

                            </div>

                        </div>

                    </div>
                {/* end section services */}

                {/* start section of my actions on network */}
                    <Element name="myfeed">
                        <div id="myfeed" className="text-center paddsection">

                            <div className="container">
                                <div className="section-title text-center">
                                    <h2>{menuMyFeed}</h2>
                                </div>
                            </div>
                            <div id="itensMedia" className="container">
                                <SocialMedia>

                                </SocialMedia>
                            </div>

                        </div>
                    </Element>
                {/* End section of my actions on network */}

                {/* start sectoion contact */}
                    <Element name="contact">
                        <div id="contact" className="paddsection">
                            <div className="container">
                                <div className="contact-block1">
                                    <div className="row">

                                        <div className="col-lg-6 setInitialOnPosition">
                                            <div className="contact-contact">    
                                                <h2 className="mb-30">{inContact}</h2>
                                                <ul className="contact-details">
                                                    <li><span>Curitiba, Brasil</span></li>
                                                    <li><span>+55 41 99974-8956</span></li>
                                                    <li><span>erickssondrozda@outlook.com</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 setInitialOnPosition">
                                            <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={visible} className="animationShow" style={ styleAnimated } >
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group col-md-12">
                                                        <input
                                                            id="fullname"
                                                            className="form-control"
                                                            placeholder={inFullname}
                                                            value={fullname}
                                                            onChange={event => setFullname(event.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <select 
                                                            id="cars"
                                                            className="form-control"
                                                            value={category}
                                                            onChange={event => setCategory(event.target.value)}
                                                            required
                                                        >
                                                            <option value="suggest">{categorySuggest}</option>
                                                            <option value="acknowledgement">{categoryAcknowledgement}</option>
                                                            <option value="doubt">{categoryDoubt}</option>
                                                            <option value="order">{categoryOrder}</option>
                                                        </select>
                                                    </div>
                                                    
                                                    <div className="form-group col-md-12">
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            placeholder={inEmail}
                                                            className="form-control"
                                                            value={email}
                                                            onChange={event => setEmail(event.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <input
                                                            id="subject"
                                                            placeholder={inSubject}
                                                            className="form-control"
                                                            value={subject}
                                                            onChange={event => setSubject(event.target.value)}
                                                            required
                                                        />
                                                    </div>                            

                                                    <div className="form-group col-md-12">
                                                        <textarea
                                                            id="description"
                                                            placeholder={inDescription}
                                                            className="form-control"
                                                            value={description}
                                                            onChange={event => setDescription(event.target.value)}
                                                            required
                                                        />
                                                    </div>

                                                    <button className="btn btn-primary" type="submit">{inSendMessage}</button>
                                                    <div id="loaderGit" style={ styleLoader }>
                                                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                                                    </div> 
                                                </form> 
                                            </Animated>           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    </Element>
                {/* end sectoion contact */}

                {/* start section footer */}
                    <div id="footer" className="text-center">
                        <div className="container">
                            <div className="socials-media text-center">

                                <ul className="list-unstyled">
                                    <li><a href="https://www.instagram.com/erickssond"><i className="ion-social-instagram"></i></a></li>
                                    <li><a href="https://www.github.com/ErickssonDrozda"><i className="ion-social-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/ericksson-souza-drozda-116430125"><i className="ion-social-linkedin"></i></a></li>
                                </ul>

                            </div>

                            <p>&copy; All rights reserved.</p>

                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div>

                        </div>
                    </div>
                {/* end section footer */}

            </div>

        </div>
      );
}
