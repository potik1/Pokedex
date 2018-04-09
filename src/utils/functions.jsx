import React from 'react';
import Loading from '../components/Loading';

export function renderLoading() {
  return (
    <div className="row">
      <div className="mx-auto">
        <Loading />
      </div>
    </div>);
}

export function hasError() {
  return (
    <div className="row">
      <div className="mx-auto">
        <div>
          <h5>SORRY, POKEMON SERVER DOES NOT RESPOND OR LOST INTERNET CONNECTION
          </h5>
        </div>
      </div>
    </div>
  );
}
