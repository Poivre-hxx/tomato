import React from 'react';
import { useState } from 'react';
import './index.less';
import Play from '@assets/play.png';
import Pause from '@assets/pause.png';
import Stop from '@assets/stop.png';
import Restart from '@assets/restart.png';
import Music from '@assets/disc.png';
import Mp3 from '@assets/music.mp3';

function Tomato() {
  const [time, setTime] = useState(1500);
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [min, setMin] = useState('25');
  const [sec, setSec] = useState('00');
  const [isRestart, setIsRestart] = useState(false);
  const [isMusic, setIsMusic] = useState(false);
  if (isStart && !isPause) {
    setTimeout(() => {
      if (isRestart === true) {
        setTime(1500);
        setMin('25');
        setSec('00');
        setIsRestart(false);
      } else {
        setTime(time - 1);
        if (time % 60 < 10) {
          setSec('0' + (time % 60));
        } else {
          setSec(String(time % 60) + '');
        }
        if (Math.floor(time / 60) < 10) {
          setMin('0' + Math.floor(time / 60));
        } else {
          setMin(String(Math.floor(time / 60)));
        }
      }
    }, 1000);
  }

  const onStart = () => {
    setIsStart(true);
    setIsPause(false);
  };
  const onRestart = () => {
    setIsRestart(true);
  };
  const onPause = () => {
    isPause ? setIsPause(false) : setIsPause(true);
  };
  const onStop = () => {
    setTime(1500);
    setMin('25');
    setSec('00');
    setIsStart(false);
    setIsPause(false);
  };
  const onMusic = () => {
    isMusic ? setIsMusic(false) : setIsMusic(true);
    const audio = document.getElementById('instrument') as HTMLAudioElement;
    isMusic ? audio.pause() : audio.play();
  };

  if (isStart === false) {
    return (
      <div>
        <div styleName="backg">
          <div styleName="time">
            {min}:{sec}
          </div>
          <div onClick={onStart} styleName="onStart">
            <img src={Play} alt="" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div styleName="backg">
          <div styleName="time">
            {min}:{sec}
          </div>
          <div styleName="control">
            <div onClick={onRestart}>
              <img src={Restart} alt="" />
            </div>
            <audio id="instrument">
              <source src={Mp3} type="audio/mpeg" />
            </audio>
            <div onClick={onMusic}>
              <img src={Music} alt="" />
            </div>
            <div onClick={onPause}>
              <img src={Pause} alt="" />
            </div>
            <div onClick={onStop}>
              <img src={Stop} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tomato;
