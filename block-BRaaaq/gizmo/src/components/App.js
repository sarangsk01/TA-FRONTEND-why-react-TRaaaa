import Articles from './Articles';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import PropTypes from 'prop-types';

function App(props) {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

App.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default App;
