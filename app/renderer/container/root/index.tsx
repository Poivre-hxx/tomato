import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import Logo from '@assets/logo.png';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';

function Root() {
  const history = useHistory();
  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      window.open(router.url);
    } else {
      history.push(router.url);
    }
  };
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">tomato</div>
        <div styleName="tips">**一个桌面级番茄钟，🐖您走上人生巅峰**</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2022-{new Date().getFullYear()} All Rights Reserved. Copyright by Poivre.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;
