export default function Entry(props){
    return (
        <>
        <div className="block-1">
           <img src={props?.img?.src} alt={props?.img?.alt} />
            <div className="text">
                <div className="maps">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>{props.country}</p>
                    <a href={props.googleMapsLink}>View on maps</a>
                </div>
                <h2>{props.title}</h2>
                <h4><b>{props.dates}</b></h4>
                <p>{props.text}</p>
            </div>
        </div>
        </>
    )
}