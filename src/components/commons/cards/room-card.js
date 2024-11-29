import room1 from "../../../assets/img/room-1.jpg";

export const RoomCard = ({ room,handleOpen,pathPost,handleOpenUpdate,handleOpenDelete }) => {
    
    return (
        <>
            <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                    <img className="img-fluid" src={room?.roomImages[0]?.image_url ? room?.roomImages[0]?.image_url: room1 } alt="" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">${room?.rent_of_room}/Monthly && ${room?.advance_rent}/Advance Rent </small>
                </div>
                <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{room?.room_name}</h5>
                        <div className="ps-2">
                            <small className="fa fa-star text-primary"></small>
                            <small className="fa fa-star text-primary"></small>
                        </div>
                        
                    </div>
                    <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2"></i>{room?.roomFeatures?.bed_in_room} Bed</small>
                        <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2"></i>{room?.roomFeatures?.bath_in_room} Bath</small>
                        <small><i className="fa fa-wifi text-primary me-2"></i>{room?.roomFeatures?.wifi !== undefined ? (room.roomFeatures.wifi ? 'wifi' : 'No wifi') : 'Data not available'}</small>
                    </div>
                    <p className="text-body mb-3">
                        {room?.roomFeatures?.descriptions &&
                            room.roomFeatures.descriptions
                                .split(' ') // Split the string into words
                                .slice(0, 20) // Get the first 100 words
                                .join(' ') // Join the words back together
                        }
                    </p>
                    <div className="d-flex justify-content-between">
                       {pathPost && <button className="btn btn-sm btn-primary rounded py-2 px-4" onClick={()=>handleOpen(room)}>Book Now</button> } 
                       { !pathPost && <button className="btn btn-sm btn-primary rounded py-2 px-4" onClick={()=>handleOpenDelete(room)}>Delete</button> } 
                       { !pathPost && <button className="btn btn-sm btn-primary rounded py-2 px-4" onClick={()=>handleOpenUpdate(room)}>Edit</button> } 
                        
                    </div>
                </div>
            </div>

        </>
    );
};
