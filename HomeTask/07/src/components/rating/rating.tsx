import { useMemo } from 'react'
import uuid from 'react-uuid'

import { Star } from '../star/star.tsx'
import { FilledStar } from '../filledStar/filledStar.tsx'
import { createArray } from '../utils/utils.ts'

import './rating.scss'

export const Rating = ({rating, onRatingChange, amountOfStars}) => {
  const ratingValues = useMemo(() =>
      createArray(amountOfStars),
    [amountOfStars]
  )

  return (
    <>
      <div className="rating">
        <div className="rating__wrapper">
          <div className="rating__numbers numbers_big">
            <span>{rating}</span>/<span>{amountOfStars}</span>
          </div>
          <div className="rating__stars-wrapper">
            {ratingValues.map((star) => (
              <span
                className="star-wrapper"
                key={uuid()}
                onClick={() => {
                  onRatingChange(star)
                }}
              >
                {star <= rating ? <FilledStar/> : <Star/>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
