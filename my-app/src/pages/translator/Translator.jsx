import React, { useState, useEffect, useRef } from 'react';
import './TranslatorStyles.css';
import { Button } from 'react-bootstrap';
import InputTranslation from '../../components/input/InputTranslation.jsx';
import title_img from '../../images/title_img.png';
import button_en_img from '../../images/button_en.png';
import button_ru_img from '../../images/button_ru.png';
import ball_am3_img from '../../images/ball_am3.png';
import ball_nz2_img from '../../images/ball_nz2.png';
import ball_can2_img from '../../images/ball_can2.png';
import ball_nz_img from '../../images/ball_nz.png';
import ball_gb2_img from '../../images/ball_gb2.png';
import ball_am_img from '../../images/ball_am.png';
import ball_au_img from '../../images/ball_au.png';
import ball_gb_img from '../../images/ball_gb.png';

function Translator({ allWords }) {

	const [startWord, setStartWord] = useState({});
	const [message, setMessage] = useState('');
	const [isEnglish, setIsEnglish] = useState(true);
	const [wordIndex, setWordIndex] = useState(-1);
	const [counter, setCounter] = useState(allWords.filter(word => word.isLearned).length);

	const ref = useRef(null);

	const getRandomWord = (arr) => {
		const randomIndex = Math.floor(Math.random() * arr.length);

		if (arr[randomIndex].isLearned === true) {
			getRandomWord(allWords);
			return;
		}

		setStartWord(arr[randomIndex]);
		setWordIndex(randomIndex);
	}

	const checkTranslation = (event) => {
		if (event.key !== 'Enter') {
			return;
		}

		if (isEnglish && ref.current.value === startWord.translation) {
			handleSuccessWord();
			return;
		}

		if (!isEnglish && ref.current.value === startWord.initialWord) {
			handleSuccessWord();
			return;
		}

		setMessage('Попробуйте еще раз.');
	}

	const handleSuccessWord = () => {
		allWords[wordIndex].isLearned = true;
		setMessage('Отлично! Следующее слово.');
		setCounter(counter => ++counter);
		ref.current.value = '';

		saveLearnedWordsToLocalStorage();
	}


	const saveLearnedWordsToLocalStorage = () => {
		const learnedWords = allWords.filter(words => words.isLearned)
		localStorage.setItem('finishedWords', JSON.stringify(learnedWords));
	}

	useEffect(() => {
		if (counter === allWords.length) {
			setStartWord('');
			setMessage('Поздравляем! Вы выучили все слова!');

			return;
		}
		getRandomWord(allWords);
	}, [counter]);

	return (
		<div className="wrapper">
			<div className="container-fluid">
				<div className="row">
					<div className="title">
						<img src={title_img} alt="" className="title_img" />
					</div>
					<div className="a2 container_lang">
						<img src={isEnglish ? button_en_img : button_ru_img} alt="" className="lang_img" />
						<Button variant="primary rotate"
							onClick={() => setIsEnglish((state) => !state)}
						>&#8596;
						</Button>
						<img src={!isEnglish ? button_en_img : button_ru_img} alt="" className="lang_img" />
					</div>
					<div className="col-xs-6 col-sm-5 col-md-4 col-xl-3 a3">
						<p name="initialWord" className="form-control initialWord">
							{isEnglish ? startWord.initialWord : startWord.translation}
						</p>
					</div>
					<div className="col-xs-6 col-sm-5 col-md-4 col-xl-3 a4">
						<InputTranslation
							type="text"
							name="translation"
							className="form-control translation"
							placeholder="Введите перевод и нажмите Enter"
							ref={ref}
							onKeyDown={checkTranslation}
						/>
					</div>
					<p className="error">{message}</p>
					<div className="col-sm-5 col-md-4 col-xl-3 a6 container_balls">
						<img src={ball_am3_img} alt="" className="ball ball_am3_img" />
						<img src={ball_can2_img} alt="" className="ball ball_can2_img" />
						<img src={ball_nz2_img} alt="" className="ball ball_nz2_img" />
						<img src={ball_nz_img} alt="" className="ball ball_nz_img" />
						<img src={ball_gb2_img} alt="" className="ball ball_gb2_img" />
						<img src={ball_au_img} alt="" className="ball ball_au_img" />
						<img src={ball_am_img} alt="" className="ball ball_am_img" />
						<img src={ball_gb_img} alt="" className="ball ball_gb_img" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Translator;
