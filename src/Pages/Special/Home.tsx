import Header from '@/Components/Shared/Header';
import '@/SCSS/PageStyles/Home.scss';

const Home = () => {

    return (

        <>

            <Header text="PixelProse" />

            <div className='siteInfo'>

                <p className='siteInfoContent'>
                    Pixel Prose is a personal reference site for game development, built to organize and track what I learn along the way. It started as a way to capture scattered notes and has grown into a structured space for long-term learning.
                </p>

                <p className='siteInfoContent'>
                    The content is updated regularly as I explore new tools, techniques, and concepts. It’s meant to evolve alongside my experience — both as a study guide and as a creative sandbox.
                </p>

                <p className='siteInfoContent'>
                    Use the navigation above to browse different areas of focus. Everything is laid out for quick access, clarity, and steady growth as I continue learning the craft of game development.
                </p>

            </div>
        </>
    );

};

export default Home;