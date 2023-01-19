import { useState } from "react";

function StarRating(props) {
    const [rating, setRating] = useState(props.rating);

    const stars = [];
    for (let i = 0; i < 5; i++) {
        let className = "star-empty text-gray-500";
        if (i < rating) {
            className = "star-filled";
        }
        stars.push(
            <div className={`${className} text-[28px]`} key={i}>
                &#9733;
            </div>
        );
    }

    return <div className="star-rating flex gap-2">{stars}</div>;
}

export default StarRating
