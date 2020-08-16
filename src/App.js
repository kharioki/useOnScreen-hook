import React, { useRef, useEffect } from 'react';

function useOnScreen(options) {
  const ref = useRef();

  useEffect(() => {}, [ref, options]);
}

function App() {
  const ref = { current: null };
  const visible = false;

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <h1>
          Scroll down to next section{' '}
          <span role="img" aria-label="pointing down">
            👇🏼
          </span>
        </h1>
      </div>
      <div
        ref={ref}
        style={{
          height: '100vh',
          backgroundColor: visible ? '#23cebd' : '#efefef'
        }}
      >
        {visible ? (
          <div>
            <h1>Hey' wassup</h1>
            <img
              src="https://media.giphy.com/media/STTGE1qwt0utrNazUQ/giphy.gif"
              alt="wassup"
            />
          </div>
        ) : (
          <h1>
            Scroll down 300px from the top of this section{' '}
            <span role="img" aria-label="pointing down">
              👇🏼
            </span>
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
