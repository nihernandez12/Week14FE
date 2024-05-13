import React from 'react';
import Review from "./Review"


const ReviewList = ({reviews}) => {

    return (
        
      <fieldset className="reviewsContainer">
        <legend>Reviews:</legend>
        {reviews.map((review) => (
              <div className="reviews" key={review.id}>
                <Review review = {review} />
              </div>
            ))}
        </fieldset>
    );
};

export default ReviewList;