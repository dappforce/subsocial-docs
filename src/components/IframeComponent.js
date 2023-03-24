import React from 'react';
import LoadingIframe from 'react-loading-iframe';
import MoonLoader from "react-spinners/MoonLoader";

export const Placeholder = () => (
  <span
    style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '550px',
      flexDirection: 'column'
    }}>
    <img src={'/img/playground-logo.png'} style={{
      height: '50px',
      position: 'absolute'
    }} />
    <MoonLoader
      color={"#e89b25"}
      loading={true}
      size={70}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </span>
);

export default function IFrameViewer({ src }) {
  return <LoadingIframe
    skeleton={<Placeholder />}
    src={src}
    height="550px"
    className="iframe"
    scrolling="no"
  />
}