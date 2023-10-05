import React from 'react'

export default function SongDashboard({
  handleSeek,
  isPlaying,
  currentTime,
  togglePlay,
  playNext,
  playPrev,
  activeIndex,
  duration,
  playlist,
  formatTime
}) {

  return (
    <>
      {activeIndex !== null && <div className="dashboard">
        {activeIndex !== null && (
          <div className="currentsginfo">
            <div className="imgnname">
              <img src={playlist[activeIndex].img} alt={playlist[activeIndex].songName} /></div>
            <div className="sgname">
              <h5>{playlist[activeIndex].songName}</h5>
              <h6>{playlist[activeIndex].singer}</h6>
            </div>
          </div>
        )}
        <div className="controls">
          <div className="db-btn">
            <i onClick={playPrev} className="bi bi-skip-start-fill"></i>
            <i onClick={togglePlay} className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}> </i>
            <i onClick={playNext} className="bi bi-skip-end-fill"></i>
          </div>
          <div className="db-range">
            <h7>{formatTime(currentTime)}</h7>
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleSeek}
            />
            <h7>{formatTime(duration)}</h7>
          </div>
        </div>
      </div>}</>
  )
}
