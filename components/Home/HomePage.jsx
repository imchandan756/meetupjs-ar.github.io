import React from 'react';
import Tilt from 'react-tilt';
import css from 'styled-jsx/css';
import CalendarPage from '../Calendar/CalendarPage';
import Container from 'utils/Container';

const logoStyles = css`
  .mw175 {
    max-width: 175px;
  }
`;

const HomePage = () => (
  <React.Fragment>
    <style jsx>{logoStyles}</style>
    <div className="bg-white">
      <Container>
        <div className="flex justify-center">
          <h1 className="mv0 mw175 w-100">
            <Tilt
              options={{
                axis: 'x',
                reverse: true,
                scale: '1.05'
              }}
            >
              <img src="/static/Home/logo.svg" alt="Logo" className="db v-btm" />
            </Tilt>
          </h1>
        </div>
        <p className="f4 mb0 mt4 tc">
          ¡Sumate a la comunidad de desarrolladores <span className="b">JavaScript</span> de Buenos
          Aires!
        </p>
        <div className="flex justify-center mv4 pb2">
          <a
            href="https://www.facebook.com/groups/1572363023007913/"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mr2 mr3-l w2 w3-ns"
          >
            <img src="/static/Home/facebook.svg" alt="Logo" className="db v-btm" />
          </a>
          <a
            href="https://twitter.com/meetupjs_ar"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w3-ns"
          >
            <img src="/static/Home/twitter.svg" alt="Logo" className="db v-btm" />
          </a>
          <a
            href="https://github.com/meetupjs-ar"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w3-ns"
          >
            <img src="/static/Home/github.svg" alt="Logo" className="db v-btm" />
          </a>
          <a
            href="https://slack.meetupjs.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w3-ns"
          >
            <img src="/static/Home/slack.svg" alt="Logo" className="db v-btm" />
          </a>
          <a
            href="https://www.meetup.com/es-ES/meetup-js/"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w3-ns"
          >
            <img src="/static/Home/meetup.svg" alt="Logo" className="db v-btm" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCosDO1DDQBkKkmmIJaOdyXQ"
            target="_blank"
            rel="noopener noreferrer"
            className="grow ml2 ml3-l w2 w3-ns"
          >
            <img src="/static/Home/youtube.svg" alt="Logo" className="db v-btm" />
          </a>
        </div>
        <div className="flex flex-column flex-row-m flex-row-l items-center justify-center">
          <a
            href="https://github.com/meetupjs-ar/charlas/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f6 grow link mb3 mb0-m mb0-l mr3-m mr3-l ph3 pv2 ttu"
          >
            <span>Quiero dar una charla</span>
          </a>
          <a
            href="mailto:meetupjs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f6 grow link ph3 pv2 ttu"
          >
            <span>Quiero contactarlos</span>
          </a>
        </div>
      </Container>
    </div>
    <div className="b--black-10 bt bw1">
      <CalendarPage showOnlyCurrentMonth={true} />
    </div>
  </React.Fragment>
);

export default HomePage;
