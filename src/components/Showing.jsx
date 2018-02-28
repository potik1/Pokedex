import React from 'react';
import _ from 'lodash';

const Showing = () => {
  const arrowDiv = document.getElementById('arrow');

  window.addEventListener('scroll', _.debounce(() => {
    const scroll = {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };

    if (scroll.y <= 300 && arrowDiv !== null) {
      arrowDiv.classList.add('d-none');
    } else if (scroll.y > 300 && arrowDiv !== null) {
      arrowDiv.classList.remove('d-none');
    }
  }, 200));

  return (
    <div>
      <div
        id="arrow"
        role="button"
        className="d-block d-sm-none box"
        onClick={() => window.scroll(0, 0)}
      >
        <div
          className="arrow-up d-sm-none"
        />
      </div>
    </div>
  );
};

export default Showing;
