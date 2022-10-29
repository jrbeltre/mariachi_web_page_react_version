function Breadcrumbs(name) {
    return (
        <div>
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">

                    <ol>
                        <li><a href="index.html">Inicio</a></li>
                        <li>{name}</li>
                    </ol>
                    <h2>{name}</h2>
                </div>
            </section>
        </div>
    )
}
export default Breadcrumbs;