import { reviews } from "../constants";
import { ReviewCard } from "../components";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-bold text-4xl">
        What Our <span className="text-coral-red">Customers</span> Say
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us
      </p>
      <div className="mt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols:1 sm:gap-4 gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;