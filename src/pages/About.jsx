import './About.css';
import Navbar from '../components/Navbar';
import githubIcon from '../assets/icons/github.svg';
import { useLanyard } from 'react-use-lanyard';

const About = () => {
    const lanyard = useLanyard({
		userId: "471024890909032489",
	});

    return (
        <div className='about-page'>
            <Navbar />
            <div className='about'>
                <div className='about-container'>
                    <div className='about-text'>
                        <div className='about-title'>About Me</div>
                        <div className='about-description'>
                            I'm a Software Engineer based out of Maryland. I specialize in cloud computing and in frontend development. I'm passionate about learning new things and I love to share my knowledge with others.
                        </div>
                        <div className='social-links'>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="GitHub" className="social-icon" />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" className="social-icon"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" className="social-icon"><path fill="currentColor" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {(lanyard.data?.data.activities[0]?.name === "Apple Music" || lanyard.data?.data.activities[0]?.name === "Spotify") && (
                <div className='currently-listening'>
                    <div>Listening to {lanyard.data.data.activities[0].name}</div>
                    <div>{lanyard.data.data.activities[0].details}</div>
                    <div>{lanyard.data.data.activities[0].state}</div>
                </div>
            )}
        </div>
    );
}

export default About;