import carousel from "../../assets/img/carousel-1.jpg"; 
export const PageHeader = ({PageHeading,PageName}) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${carousel})`
      };
    
    return (
        <>
              <div className="container-fluid page-header mb-5 p-0" style={{...backgroundImageStyle}}>
            <div className="container-fluid page-header-inner py-5">
                <div className="container text-center pb-5">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">{ PageHeading}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">{ PageName }</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
          
        </>
    )
}