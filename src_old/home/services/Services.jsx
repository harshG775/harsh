import "./services.css"

export default function Services() {
  return (
    <>
        <section className="services maxContainer">
            <header><h4>MY SERVICES</h4></header>
            <FeatureBox/>
        </section>
    </>
    )
}

function FeatureBox() {
    const FeatureBoxData=[
        {
            iconClass:"fa-solid fa-mobile",
            heading:"Web Design",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            iconClass:"fa-solid fa-mobile",
            heading:"Web Design",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            iconClass:"fa-solid fa-mobile",
            heading:"Web Design",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            iconClass:"fa-solid fa-mobile",
            heading:"Web Design",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            iconClass:"fa-solid fa-mobile",
            heading:"Web Design",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            iconClass:"fa-solid fa-mobile",
            heading:"Web Design",
            paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]
  return (
    <div className="featureBox ">
        {FeatureBoxData.map((e,i)=>
                <BoxItem {...e} key={i}/>    
        )}

    </div>
  )
}

function BoxItem(prop) {
    const {iconClass,heading,paragraph}=prop;
    return (
            <div className="feature_box">
                <div className="icon">
                    <i className={iconClass}></i>
                </div>
                <div className="feature-content">
                    <h5>{heading}</h5>
                    <p>{paragraph}</p>
                </div>
            </div>
    )
}

