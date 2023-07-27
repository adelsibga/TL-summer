import { useMemo } from 'react'

import { getRandomImg, getRandomName } from '../utils/utils.ts'

import './lastFeedback.scss'

const imagesList: string[] = [
  'src/assets/images/1.png',
  'src/assets/images/2.png',
  'src/assets/images/3.png',
  'src/assets/images/4.png'
]

export const LastFeedback = ({amountOfStars, feedback}) => {
  const imgUrl = useMemo(() => imagesList[getRandomImg(imagesList.length)], [])
  const name = useMemo(() => getRandomName(6), [])

  return (
    <>
      <div className="feedback">
        <img
          className="feedback__img"
          src={imgUrl}
          alt="user-image"
        />
        <div className="feedback__content-wrapper">
          <h2 className="title title_h2 feedback__title">
            {name}
          </h2>
          <p className="feedback__text">
            {feedback.message}
          </p>
        </div>
        <div className="numbers_small">
          <span>{feedback.rating}</span>/<span>{amountOfStars}</span>
        </div>
      </div>
    </>
  )
}
