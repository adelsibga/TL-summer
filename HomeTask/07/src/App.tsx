import './App.scss';

import { FeedbackForm } from './components/feedbackForm/feedbackForm.tsx';
import { LastFeedback } from './components/lastFeedback/lastFeedback.tsx';

function App() {
  return (
    <>
      <div className="reviewer">
        <FeedbackForm />
        <LastFeedback />
        <LastFeedback />
        <LastFeedback />
      </div>
    </>
  );
}

export default App;
