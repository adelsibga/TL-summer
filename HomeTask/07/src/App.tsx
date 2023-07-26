import './App.scss';

import { FeedbackForm } from './components/feedbackForm/feedbackForm.tsx';
import { LastFeedback } from './components/lastFeedback/lastFeedback.tsx';
import { useEffect, useState } from 'react';

const maxRating = 5

export default function App() {
  const initRating = 0
  const initMessage = ''

  const [rating, setRating] = useState(initRating)
  const [message, setMessage] = useState(initMessage)
  const [feedback, setFeedback] = useState({rating: initRating, message: initMessage})
  const [feedbacks, setFeedbacks] = useState([])

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
    setRating(initRating)
    setMessage(initMessage)
  }

  return (
    <>
      <div className="reviewer">
        <FeedbackForm
          rating={rating}
          setRating={setRating}
          amountOfStars={maxRating}
          message={message}
          setMessage={setMessage}
          setFeedback={setFeedback}
          resetFeedback={resetFeedback}
        />
        {feedbacks.map((feedback) => (
          <LastFeedback amountOfStars={maxRating} feedback={feedback}/>
        ))}
      </div>
    </>
  );
}
