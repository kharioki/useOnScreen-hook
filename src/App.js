import React, { useState, useEffect } from 'react';

function useOnScreen(options) {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    //cleanup
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, visible];
}

function App() {
  const [setRef, visible] = useOnScreen({ threshold: 0.25 });

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
        ref={setRef}
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
