import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
import mbank from '@assets/images/mbank.jpg';
import alipay from '@assets/images/alipay.jpg';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <div className="event-wrap">
                  <h2 className="main-font">For cash and gifts</h2>
                </div>

                <p className="info">
                  Having you with us on our special day is the best gift we could ask for. Though should you wish to
                  help us keep the celebrations going, a cash gift towards our honeymoon fund would be greatly
                  appreciated.
                </p>
              </div>
            </div>
            <div
              className="row "
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div className="col-md-8 col-md-offset-2 ">
                Mamytbekov Omurbek(bridegroom): <br /> 🇰🇬 Mbank - 996776882271
                <br />
                🇰🇬 Элкард - 9417608993188430 🇨🇳
                <br />
                <div style={{ display: 'flex' }}>
                  <img src={mbank} alt="mbank" style={{ width: '35%' }} />
                  <img src={alipay} alt="mbank" style={{ width: '35%' }} />
                </div>
              </div>
              <div className="col-md-8 col-md-offset-2 ">
                Abdibaitova Zarina(bride):
                <br /> 🇰🇬 Mbank - 996558882271 <br />
                🇰🇷 Hana bank - 50891047557807
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>Developed by Mamytbekov Omurbek</p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
