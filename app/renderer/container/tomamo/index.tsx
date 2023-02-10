import React from 'react';
import { useState } from 'react';
import './index.less';
import Play from '@assets/play.png';
import Pause from '@assets/pause.png';
import PauseNow from '@assets/isPause.png';
import Stop from '@assets/stop.png';
import Restart from '@assets/restart.png';
import Music from '@assets/disc.png';
import MusicOff from '@assets/discOff.png';
import Mp3 from '@assets/music.mp3';
import BGEdit from '@assets/imageedit.png';
import BG1 from '@assets/bg.png';
import BG2 from '@assets/bg2.png';
import TringleUp from '@assets/eject.png';
import TringleDown from '@assets/ejectDown.png';

function Instrument() {
  const [isMusic, setIsMusic] = useState(false);

  const onMusic = () => {
    isMusic ? setIsMusic(false) : setIsMusic(true);
    const audio = document.getElementById('instrument') as HTMLAudioElement;
    isMusic ? audio.pause() : audio.play();
  };

  if (isMusic) {
    return (
      <>
        <audio loop id="instrument">
          <source src={Mp3} type="audio/mpeg" />
        </audio>
        <div onClick={onMusic}>
          <img src={Music} alt="" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <audio loop id="instrument">
          <source src={Mp3} type="audio/mpeg" />
        </audio>
        <div onClick={onMusic}>
          <img src={MusicOff} alt="" />
        </div>
      </>
    );
  }
}

function Tomato() {
  const [time, setTime] = useState(1500);
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [min, setMin] = useState('25');
  const [sec, setSec] = useState('00');
  const [isRestart, setIsRestart] = useState(false);
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
    setIsPause(true);
    setTimeout(() => {
      setIsStart(false);
      setTime(1500);
      setMin('25');
      setSec('00');
    }, 1200);
  };

  const minAdd = () => {
    time + 60 < 3600 ? setTime(time + 60) : setTime(3600);
    console.log(minAdd);
    showTime();
  };
  const minMin = () => {
    time - 60 > 0 ? setTime(time - 60) : setTime(0);
    console.log(minMin);
    showTime();
  };
  const secAdd = () => {
    time + 1 < 3600 ? setTime(time + 1) : setTime(3600);
    console.log(secAdd);
    showTime();
  };
  const secMin = () => {
    time - 1 > 0 ? setTime(time - 1) : setTime(0);
    console.log(secMin);
    showTime();
  };
  const showTime = () => {
    setTimeout(() => {
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
    }, 100);
  };

  const [BG, setBG] = useState(BG1);

  const BGChange = () => {
    BG === BG1 ? setBG(BG2) : setBG(BG1);
  };

  const bgStyle = {
    backgroundImage: `url(${BG})`,
    backgroundSize: '100% 100%',
  };

  if (isStart === false) {
    return (
      <div>
        <div styleName="backg" style={bgStyle}>
          <div styleName="trinsup">
            <div onClick={minAdd}>
              <img src={TringleUp} alt="" styleName="trin" />
            </div>
            <div onClick={secAdd}>
              <img src={TringleUp} alt="" styleName="trin" />
            </div>
          </div>
          <div styleName="timestart">
            {min}:{sec}
          </div>
          <div styleName="trinsdown">
            <div onClick={minMin}>
              <img src={TringleDown} alt="" styleName="trin" />
            </div>
            <div onClick={secMin}>
              <img src={TringleDown} alt="" styleName="trin" />
            </div>
          </div>
          <div styleName="onStart">
            <img src={Play} alt="" onClick={onStart} />
          </div>
        </div>
      </div>
    );
  } else if (isPause) {
    return (
      <div>
        <div styleName="backg" style={bgStyle}>
          <div styleName="time">
            {min}:{sec}
          </div>
          <div styleName="control">
            <div onClick={BGChange}>
              <img src={BGEdit} alt="" />
            </div>
            <div onClick={onRestart}>
              <img src={Restart} alt="" />
            </div>
            <Instrument />
            <div onClick={onPause}>
              <img src={PauseNow} alt="" />
            </div>
            <div onClick={onStop}>
              <img src={Stop} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div styleName="backg" style={bgStyle}>
          <div styleName="time">
            {min}:{sec}
          </div>
          <div styleName="control">
            <div onClick={BGChange}>
              <img src={BGEdit} alt="" />
            </div>
            <div onClick={onRestart}>
              <img src={Restart} alt="" />
            </div>
            <Instrument />
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
