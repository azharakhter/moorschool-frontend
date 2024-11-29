
import RoomImage from "../../../assets/img/room-1.jpg"
import { CardContent, Typography } from "@mui/material";
import moment from "moment";
export const CardStaff = ({ roomBooking }) => {
    
    return (
        <div className="col-lg-10 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                    <img className="img-fluid" src={RoomImage} alt="" />
                </div>
                <div className="text-center p-4 mt-1">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {roomBooking?.bookRooms?.room_name ?? 'standard Room'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>User:</strong> {roomBooking?.username}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Email:</strong> {roomBooking?.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Contact:</strong> {roomBooking?.contact_person_number}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Check-in:</strong> { moment(new Date(roomBooking?.from_date)).format("YYYY-MM-DD")}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Check-out:</strong> { moment(new Date(roomBooking?.end_date)).format("YYYY-MM-DD")}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Other Requirements:</strong> {roomBooking?.description}
                        </Typography>
                    </CardContent>
                </div>
            </div>
        </div>
    );
};
