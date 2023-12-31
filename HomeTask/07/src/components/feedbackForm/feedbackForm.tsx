import { Button } from '../button/button.tsx'
import { Rating } from '../rating/rating.tsx'

import './feedbackForm.scss'

interface IFeedback {
  rating: number,
  message: string
}

interface IForm {
  amountOfStars: number
  message: string
  rating: number
  resetFeedback: () => void
  setFeedback: ({}: IFeedback) => void
  setMessage: (value: string) => void
  setRating: (star: number) => void
}

export const FeedbackForm = ({rating, setRating, amountOfStars, message, setMessage, setFeedback, resetFeedback}: IForm) => {
  const handleChange = (event: { target: { value: string } }) => {
    setMessage(event.target.value)
  }

  return (
    <div className="feedback-form">
      <div className="feedback-form__wrapper">
        <h1 className="title title_h1 feedback-form__title">How nice was my reply?</h1>
        <Rating rating={rating}
                onRatingChange={setRating}
                amountOfStars={amountOfStars}
        />
        <textarea
          className="feedback-form__textarea"
          placeholder="What could we improve?"
          rows={7}
          cols={46}
          onChange={handleChange}
          value={message}
        />
        <Button onClick={() => {
          resetFeedback()
          setFeedback({
            rating,
            message
          })
        }}/>
      </div>
    </div>
  )
}
