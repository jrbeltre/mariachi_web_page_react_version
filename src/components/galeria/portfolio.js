function Portfolio() {
    return (
        <div>
            <section id="portfolio" className="portfolio">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-group">Group</li>
                                <li data-filter=".filter-cumpleaños">Cumpleaños</li>
                                <li data-filter=".filter-mañanitas">Mañanitas</li>
                                <li data-filter=".filter-video">Videos</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container">
                        <PortfolIoItem tag="group" name="Group 1" source="../../portfolio/portfolio-1.jpg" />
                        <PortfolIoItem tag="group" name="Group 2" source="../../portfolio/portfolio-2.jpg" />
                        <PortfolIoItem tag="group" name="Group 3" source="../../portfolio/portfolio-3.jpg" />
                        <PortfolIoItem tag="group" name="Group 4" source="../../portfolio/portfolio-4.jpg" />
                        <PortfolIoItem tag="group" name="Group 5" source="../../portfolio/portfolio-5.jpg" />
                        <PortfolIoItem tag="group" name="Group 6" source="../../portfolio/portfolio-7.jpg" />
                        <PortfolIoItem tag="cumpleaños" name="Cumpleaños 1" source="../../portfolio/portfolio-9.jpg" />
                        <PortfolIoItem tag="cumpleaños" name="Cumpleaños 2" source="../../portfolio/portfolio-5.jpg" />
                        <PortfolIoItem tag="cumpleaños" name="Cumpleaños 3" source="../../portfolio/portfolio-11.jpg" />
                        <PortfolIoItem tag="mañanitas" name="mañanitas 1" source="../../portfolio/portfolio-8.jpg" />
                        <PortfolIoItem tag="mañanitas" name="mañanitas 2" source="../../portfolio/portfolio-10.jpg" />
                        <PortfolIoItemVideo tag="video" name="" source="https://www.youtube-nocookie.com/embed/cFDm6Pyj9x0?start=8" link="https://www.youtube.com/watch?v=cFDm6Pyj9x0" />
                        <PortfolIoItemVideo tag="video" name="" source="https://www.youtube-nocookie.com/embed/BMi8Z0491FQ?start=8" link="https://www.youtube.com/watch?v=BMi8Z0491FQ&t=8s" />
                        <PortfolIoItemVideo tag="video" name="" source="https://www.youtube-nocookie.com/embed/cAS5rNhNz_o?start=8" link="https://www.youtube.com/watch?v=cAS5rNhNz_o&t=8s" />
                        <PortfolIoItemVideo tag="video" name="" source="https://www.youtube-nocookie.com/embed/mTyv8a0GMsw?start=8" link="https://www.youtube.com/watch?v=mTyv8a0GMsw&t=8s" />

                    </div>
                </div>
            </section>

            {/* </div>
            <style>
            iframe {
                display: block;
                border-style:none;}
                </style>
            </div> */}
        </div>
    );
};

function PortfolIoItem(props) {
    var nameOfClass = `col-lg-4 col-md-6 portfolio-item filter-${props.tag}`;
    return (
        <div className={nameOfClass}>
            <div className="portfolio-wrap" >
                <img src={props.source} className="img-fluid" alt="" />
                <div className="portfolio-info">
                    <h4>{props.name}</h4>
                    <p>{props.tag}</p>
                    <div className="portfolio-links">
                        <a href={props.source} data-gallery="portfolioGallery" className="portfolio-lightbox" title={props.tag}><i className="bx bx-plus"></i></a>
                        {/* <!-- <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

function PortfolIoItemVideo(props) {
    var nameOfClass = `col-lg-4 col-md-6 portfolio-item filter-${props.tag}`;
    return (
        <div className={nameOfClass}>
            <div className="portfolio-wrap">
                <iframe width="100%" height="315" src={props.source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{ display: "block" }} allowfullscreen ></iframe>
                <div className="portfolio-info">
                    <h4>{props.name}</h4>
                    <p></p>
                    <div className="portfolio-links">
                        <a href={props.link} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Video"><i className="bx bx-plus"></i></a>
                        {/* <!-- <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a> --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Portfolio;