import { FeedbackForm } from './components/feedbackForm/feedbackForm.tsx'
import { LastFeedback } from './components/lastFeedback/lastFeedback.tsx'
import { useEffect, useState } from 'react'

import './App.scss'

const MAX_RATING = 5

interface IReview {
  rating: number
  message: string
}

export default function App() {
  const INIT_RATING = 0
  const INIT_MESSAGE = ''

  const [rating, setRating] = useState(INIT_RATING)
  const [message, setMessage] = useState(INIT_MESSAGE)
  const [feedback, setFeedback] = useState({rating: INIT_RATING, message: INIT_MESSAGE})
  const [feedbacks, setFeedbacks] = useState<IReview[]>([])

  useEffect(() => {
    if (!feedback.message.length) {
      return
    }

    setFeedbacks([
      ...feedbacks,
      feedback
    ])
  }, [feedback])

  const resetFeedback = () => {
    setRating(INIT_RATING)
    setMessage(INIT_MESSAGE)
  }

  return (
    <>
      <div className="reviewer">
        <FeedbackForm
          rating={rating}
          setRating={setRating}
          amountOfStars={MAX_RATING}
          message={message}
          setMessage={setMessage}
          setFeedback={setFeedback}
          resetFeedback={resetFeedback}
        />
        {feedbacks.map((feedback, index) => (
          <LastFeedback amountOfStars={MAX_RATING} feedback={feedback} key={index}/>
        ))}
      </div>
    </>
  )
}
