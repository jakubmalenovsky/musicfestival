import { Link, useParams } from 'react-router-dom';

export default function StagePage() {


    const stageevents = [
        {
            stageid: 1,
            eventtext: "Coldplay",
        },
        {
            stageid: 1,
            eventtext: "Ed Sheeran",
        },
        {
            stageid: 2,
            eventtext: "Adele",
        },
        {
            stageid: 2,
            eventtext: "Beyonce",
        },
        {
            stageid: 2,
            eventtext: "Taylor Swift",
        }
    ];

    const { stageId } = useParams();

    const events = stageevents.filter((event) => Number(stageId) === event.stageid);

    return (
        <div>
            <h1>Stage Page</h1>
                {events.map((event) => 

                <div key={event.id}>
                    <Link to={`festival/detailpage/${event.uid}`}>{event.eventtext}</Link>
                </div>
                )}
        </div>
    );
}