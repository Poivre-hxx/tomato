import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import './index.less';
import Play from '@assets/play.png';
import Pause from '@assets/pause.png';
import PauseNow from '@assets/isPause.png';
import Stop from '@assets/stop.png';
import Restart from '@assets/restart.png';
import Music from '@assets/disc.png';
import MusicOff from '@assets/discOff.png';
import Mp3 from '@assets/music.mp3';
import BG from '@assets/bg.png';

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
        <audio id="instrument">
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
        <audio id="instrument">
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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  if (isStart && !isPause) {
    setTimeout(() => {
      if (isRestart === true) {
        setTime(1500);
        setMin('25');
        setSec('00');
        setIsRestart(false);
      } else if (isStop === true) {
        setTime(1500);
        setMin('25');
        setSec('00');
        setIsStart(false);
        setIsStop(false);
      } else {
        setTime(time - 1);
        if (time % 60 < 10) {
          setSec('0' + (time % 60));
        } else {
          setSec((time % 60) + '');
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

  const showModal = () => {
    setOpen(true);
    console.log(123);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1000);
  };

  const handleCancle = () => {
    setOpen(false);
  };

  const bgStyle = {
    backgroundImage: `url(${BG})`,
    backgroundSize: '100% 100%',
  };

  if (isStart === false) {
    return (
      <div>
        <div styleName="backg" style={bgStyle}>
          <div styleName="time" onClick={showModal}>
            {min}:{sec}
          </div>
          <Modal
            open={open}
            onOk={handleOk}
            onCancel={handleOk}
            footer={[
              <Button key="back" onClick={handleCancle}>
                Return
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Submit
              </Button>,
            ]}
          >
            <div>请输入您的番茄时间（单位为秒）</div>
            <input />
          </Modal>
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
