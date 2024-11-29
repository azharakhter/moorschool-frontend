export const PrimaryHeadingContainer = ({ sectionTitle, mainTitle, exploreText }) => {
    return (
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">{sectionTitle}</h6>
            <h1 className="mb-5">{exploreText} <span className="text-primary text-uppercase">{mainTitle}</span></h1>
        </div>
    );
};
