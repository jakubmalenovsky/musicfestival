export default function DetailPage() {
    const eventdetail = [
        {uid: "1", time: "10:00"},
        {uid: "2", time: "11:00"}
    ];
    
    

    const { eventId } = useParams();
    const event = eventdetail.find((event) => event.uid === eventId);



    return (
        <div>
        The artist will perform at {event.time}
        </div>
    );
}