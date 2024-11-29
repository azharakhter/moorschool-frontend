export const PrimaryButton = ({ btnPrimary, animated, slideInLeft, children }) => {
    return (
        <a href="" className={`btn ${btnPrimary ? ' btn-primary' : 'btn-light'}  py-md-3 px-md-5 me-3 ${animated ? 'animated' : ''} ${slideInLeft ? 'slideInLeft' : 'slideInRight'}`}>
            {children}
        </a>
    );
};