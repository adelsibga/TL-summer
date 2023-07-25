import { Button } from '../button/button.tsx'
import { Rating } from '../rating/rating.tsx';

import './feedbackForm.scss'

export const FeedbackForm = () => {
  return (
    <div className="feedback-form">
      <div className="feedback-form__wrapper">
        <h1 className="title title_h1 feedback-form__title">How nice was my reply?</h1>

        <Rating/>
        <textarea
          className="feedback-form__textarea"
          placeholder="What could we improve?"
          rows={7}
          cols={46}
        />
        <Button onClick={() => {
          console.log('Send')
        }}/>
      </div>
    </div>
  )
}
