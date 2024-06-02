import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Translator from './pages/translator/Translator';
import WordsList from './pages/wordsLists/WordsList';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import words from './API/words.json'

const jsonWords = words.map(word => ({ ...word, id: uuid() }));

function App() {

	let allWords = jsonWords;

	useEffect(() => {
		const localStorageWords = localStorage.getItem('finishedWords');
		if (localStorageWords) {
			const localStorageWordsArray = JSON.parse(localStorageWords);
			for (let i = 0; i < localStorageWordsArray.length; i++) {
				const foundIndex = allWords.findIndex(word => word.initialWord === localStorageWordsArray[i].initialWord);
				if (foundIndex) {
					allWords[foundIndex].isLearned = true;
				}
			}
		}
	}, [])


	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<Routes>
					<Route path='*' element={<Navigate to='/translator' />} />
					<Route path='/translator' element={<Translator allWords={allWords} />} />
					<Route path='/wordsLists' element={<WordsList allWords={allWords} />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
