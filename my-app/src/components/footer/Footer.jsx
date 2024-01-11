import React from 'react';
import './FooterStyles.css';
import github_img from '../../images/github.jpg';
import web_img from '../../images/web.png';
import telegram_img from '../../images/telegram.jpg';

function Translator() {

    return (
        <footer>
            <div className="footer_social">
                <a href="https://github.com/GarcesGit">
                    <img src={github_img} alt="" className="social_img" />
                </a>
                <a href="#">
                    <img src={web_img} alt="" className="social_img" />
                </a>
                <a href="https://t.me/NatashKosh">
                    <img src={telegram_img} alt="" className="social_img" />
                </a>
                <p>Natalya Koshukova &copy; 2023</p>
            </div>
        </footer>
    )
}
export default Translator;
