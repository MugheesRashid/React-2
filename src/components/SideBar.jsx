import React from "react";
import {Link } from "react-router-dom";

export default function SideBar(props){

    return (
      <>
        <div className="nav">
          <div className="part1">
            <ul>
              <li  onClick={
                props.playlistchanger2
              }>
                <Link className="active" to="/">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 9.99V22a2.006 2.006 0 0 1-2 2h-6v-8h-5v8H4a2.006 2.006 0 0 1-2-2V9.99a1.999 1.999 0 0 1 .79-1.59L12.5 1l9.71 7.4A1.999 1.999 0 0 1 23 9.99z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li onClick={
                props.playlistchanger1
              }>
                <Link to="/AllSongs">
                  <i className="bi bi-search"></i>All Songs
                </Link>
              </li>
            </ul>
          </div>
          <div className="part2">
            <h1>
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="Svg-sc-ytk21e-0 haNxPq"
              >
                <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
              </svg>
              Librarys
            </h1>
            <button className="playlist">Playlists</button>
              <div className="icons">
                <i className="bi bi-search"></i>
                <p>
                  Recents
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    className="Svg-sc-ytk21e-0 haNxPq SbDHY3fVADNJ4l9qOLQ2"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                  >
                    <path d="m14 6-6 6-6-6h12z"></path>
                  </svg>
                </p>
              </div>
              <div className="trending">
                <div className="img">
                  <img
                    src="https://i.scdn.co/image/ab67706f00000002b7b131141bb0d0c9ee8faf05"
                    width={"50px"}
                  />
                </div>
                <div className="dis">
                  <p>Hot Hit Pakistan</p>
                  <p>Playlist . Sasta Spotify</p>
                </div>
            </div>
            <button className="lang"><i className="bi bi-globe2"></i> English</button>
          </div>
        </div>
      </>
    );

}

