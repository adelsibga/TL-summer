import { Star } from '../star/star.tsx';

import './rating.scss'

export const Rating = () => {

  return (
    <>
      <div className="rating">
        <div className="rating__wrapper">
          <div className="rating__numbers numbers_big">
            <span>0</span>/<span>5</span>
          </div>
          <div className="rating__star-wrapper">
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
          </div>
        </div>
      </div>
    </>
  )
}
