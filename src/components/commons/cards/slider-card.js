import { PrimaryButton } from '../buttons/primary-button';
export const CardSlider = ({image,title,des}) => {
    return (
        <>
            <img className="w-100" src={image} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                    <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">{title }</h6>
                    <h1 className="display-3 text-white mb-4 animated slideInDown">{ des}</h1>
                    
                    <PrimaryButton btnPrimary={true} animated={true} slideInLeft={true}>Student available rooms</PrimaryButton>
                    <PrimaryButton btnPrimary={false} animated={true} slideInLeft={true}>Book your room space</PrimaryButton>
                
                </div>
            </div>
        </>
    );
};
