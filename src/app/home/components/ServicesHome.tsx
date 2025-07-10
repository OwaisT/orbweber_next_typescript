import "@styles/home.css"

// Data structure for service on home page
interface Service {
    image: string;
    headline: string;
    subheadline: string;
    button_to_page: string;
    button_text: string;
}

interface ServicesHomeProps {
    servicesHome: Service[];
}

// Returns a list of serveices elements for home page
function ServicesHome(props: ServicesHomeProps) {
    const services = props.servicesHome;

    return (
        <div className="w100pcnt center">
            <div className="services-home-container">
                {services.map((service, index) => (
                    <ServiceHome service={service} styleClass={`service-home ${index % 2 === 0 ? "even" : ""}`} key={index} />
                ))}
            </div>
        </div>
    );
}

export default ServicesHome;

interface ServiceHomeProps {
    service: Service;
    styleClass: string;
}

// Returns a single service element for home page
// Contains a service image, headline, subheadline, & button that leads to service page
function ServiceHome(props: ServiceHomeProps) {
    const { service } = props;
    const { styleClass } = props;

    return (
        <div className={styleClass}>
            <img className="service-home-image" src={service.image} alt={service.headline} />
            <div className="service-home-text-content">
                <h3 className="mrgn-btm-10">{service.headline}</h3>
                <p className="txt-jst mrgn-btm-10">{service.subheadline}</p>
                <a href={service.button_to_page}>
                    <button className="btn-bg-tp-txt-pr-txt-bdr-pr-txt">{service.button_text}</button>
                </a>
            </div>
        </div>
    );
}

