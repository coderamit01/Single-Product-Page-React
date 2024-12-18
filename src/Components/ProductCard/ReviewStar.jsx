import HalfStar from "../Shared/HalfStar";
import Star from "../Shared/Star";
import StarFilled from "../Shared/StarFilled";

const ReviewStar = ({ star }) => {

  const ratingStar = Array.from({ length: 5 }, (el, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {
          star >= index + 1 ? (<StarFilled />) : star >= number ? (<HalfStar />) : (<Star />)
        }
      </span>
    )
  })
  return (
    <>
      <>{ratingStar}</>
    </>
  );
};

export default ReviewStar;