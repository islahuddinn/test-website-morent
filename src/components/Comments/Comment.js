import { Avatar, Button } from "@mui/material";
import toLocalDate from "@/utils/toLocalDate";

const Comment = ({comment}) => {
  return (
    <div key={comment._id} className="mb-5 md:mb-6">
      <div className="flex gap-x-2 md:gap-x-4">
        <Avatar
          src={comment.writer.image}
          alt={comment.writer.name}
          className="w-11 h-11 md:w-14 md:h-14"
        />
        <div className="w-full">
          <div className="flex justify-between mb-4">
            <div className="">
              <h2 className="text-base md:text-xl md:font-bold font-semibold">
                {comment.writer.name}
              </h2>
              <span className="text-xs md:text-sm font-medium text-secondary-300">
                {comment.writer.job}
              </span>
            </div>
            <span className="text-xs md:text-sm font-medium text-secondary-300">
              {toLocalDate(comment.createdAt)}
            </span>
          </div>
          <div className="text-xs md:text-sm leading-6 md:leading-7 text-secondary-300">
            {comment.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
