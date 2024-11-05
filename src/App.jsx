import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LevelSelect from './components/LevelSelect';
import QuizPage from './components/QuizPage';

const App = () => {
    return (
        <Router>
            <div className="p-8">
                <Routes>
                    <Route path="/" element={<LevelSelect />} />
                    <Route path="/quiz/:level" element={<QuizPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
