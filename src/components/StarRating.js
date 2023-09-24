import { ReactComponent as IconStar } from '../images/star.svg';

const Rating = ({ value, max = 5 }) => {
    const percentage = Math.round((value / max) * 100);

    return (
      <div className='star-container'>
        {Array.from(Array(max).keys()).map((_, i) => (
          <IconStar key={i} className='star' />
        ))}
        <div
          className='star-overlay'
          style={{ width: `${100 - percentage}%` }}
        />
      </div>
    );
  };


export default Rating;