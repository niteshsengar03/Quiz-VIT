import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LevelSelect from './components/LevelSelect';
import QuizPage from './components/QuizPage';
import Midterm from './components/Midterm';
import Preboard from './components/Preboard';
import Final from './components/Final';

const App = () => {
    return (
        <Router>
            <div className="p-8">
                <Routes>
                    <Route path="/" element={<LevelSelect />} />
                    <Route path="/quiz/:level" element={<QuizPage />} />
                    <Route path="/quiz/midterm" element={<Midterm/>}/>
                    <Route path="/quiz/preboard" element={<Preboard/>}/>
                    <Route path="/quiz/final" element={<Final/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
