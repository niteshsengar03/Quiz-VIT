import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LevelSelect from './components/LevelSelect';
import QuizPage from './components/QuizPage';

const App = () => {
    return (
        <Router>
            <div className="p-8">
                <Routes>
                    {/* Route for the level selection page */}
                    <Route path="/" element={<LevelSelect />} />
                    
                    {/* Dynamic route for each level's quiz page */}
                    <Route path="/quiz/:level" element={<QuizPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
