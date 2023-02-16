import React from 'react';
import LoadingIframe from 'react-loading-iframe';
import ClipLoader from "react-spinners/ClipLoader";

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
    <img src="https://play.subsocial.network/playground.svg" style={{
      width: '300px',
      marginBottom: '10px',
    }} />
    <ClipLoader
      color={"#e89b25"}
      loading={true}
      size={60}
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