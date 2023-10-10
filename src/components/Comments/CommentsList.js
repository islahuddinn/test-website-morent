import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Comment from "./Comment";

const CommentsList = ({ car }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="p-4 md:p-6 bg-white rounded-[10px] mb-8">
      <div className="flex items-center gap-x-3 mb-6 md:mb-8">
        <h2 className="text-xl font-semibold">Reviews</h2>{" "}
        <span className="text-sm font-bold text-white bg-primary-500 py-[6px] px-5 rounded">
          {car.reviewsCount}
        </span>
      </div>

      {showAll
        ? car.reviews.map((comment) => {
            return <Comment key={comment._id} comment={comment} />;
          })
        : car.reviews.slice(0, 2).map((comment) => {
            return <Comment key={comment._id} comment={comment} />;
          })}

      {car.reviews.length > 2 && (
        <div className="flex justify-center text-sm md:text-base font-semibold text-secondary-300">
          <button
            className="py-2 px-5 flex items-center gap-x-2"
            onClick={() => setShowAll((prevState) => !prevState)}
          >
            {showAll ? (
              <>
                Hide{" "}
                <ChevronUpIcon className="w-[14px] h-[14px] md:w-4 md:h-4" />
              </>
            ) : (
              <>
                Show All{" "}
                <ChevronDownIcon className="w-[14px] h-[14px] md:w-4 md:h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default CommentsList;
