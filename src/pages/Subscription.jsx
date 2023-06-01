import { useCallback } from "react";
import styles from "./Subscription.module.css";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
const Subscription = () => {
  const onStartASearchClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onNewsletterClick = useCallback(() => {
    // Please sync "News Letter" to the project
  }, []);

  const onCommunityTextClick = useCallback(() => {
    // Please sync "Community" to the project
  }, []);
const paymenthandle=async(token,address)=>{
//  const data= await axios.get(process.env.REACT_APP_BACKEND_URL+"create-checkout-session")
 console.log(token,address)
}
  return (
    <div className={styles.subscription}>
      <div className={styles.divdefaultLtrCache16rt3ei}>
        <div className={styles.divh2d8c058d63}>
          <div className={styles.spanstepindicator}>
            <div className={styles.step2OfContainer}>
              <span>{`STEP `}</span>
              <span className={styles.span}>2</span>
              <span>{` OF `}</span>
              <span className={styles.span}>3</span>
            </div>
          </div>
          <div className={styles.chooseThePlan}>
            Choose the plan that’s right for you
          </div>
          <div className={styles.ulcheckmarkGroup}>
            <div className={styles.licheckmarkGroupRow}>
              <img
                className={styles.svgcheckmarkGroupIcon}
                alt=""
                src="/svgcheckmarkgroupicon.png"
              />
              <div className={styles.createPostAnd}>
                Create post and share location.
              </div>
            </div>
            <div className={styles.licheckmarkGroupRow1}>
              <img
                className={styles.svgcheckmarkGroupIcon}
                alt=""
                src="/svgcheckmarkgroupicon.png"
              />
              <div className={styles.createPostAnd}>
                Ask community and help each other.
              </div>
            </div>
            <div className={styles.licheckmarkGroupRow2}>
              <img
                className={styles.svgcheckmarkGroupIcon}
                alt=""
                src="/svgcheckmarkgroupicon.png"
              />
              <div className={styles.createPostAnd}>
                Chat with customer easily.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divdefaultLtrCacheF0sred}>
          <div className={styles.divselected}>
            <div className={styles.divdefaultLtrCache7wx0uq}>

              <div className={styles.divdefaultLtrCache5zp87z}>
                <div className={styles.freeTrial}>Free Trial</div>
                <div className={styles.for1Month}>For 1 month</div>
              </div>
            </div>
            <div className={styles.uldefaultLtrCache1h6eily}>
              <div className={styles.lidefaultLtrCache1sqhia6}>
                <div className={styles.div}>•</div>
                <div className={styles.spandefaultLtrCache1n34esz}>
                  <div
                    className={styles.createPostShare}
                  >{`Create Post share Location `}</div>
                </div>
              </div>
              <div className={styles.lidefaultLtrCache1sqhia61}>
                <div className={styles.div}>•</div>
                <div className={styles.spandefaultLtrCache1n34esz1}>
                  <div className={styles.createPostShare}>
                    Ask our community etc
                  </div>
                </div>
              </div>
              <div className={styles.lidefaultLtrCache1sqhia62}>
                <div className={styles.div2}>•</div>
                <div
                  className={styles.chatWithFriends}
                >{`Chat with friends & groups`}</div>
              </div>
            </div>
          </div>
          <StripeCheckout
        token={paymenthandle}
        stripeKey="pk_test_51NDrF2KqJIfLyC9JJtvJqW1VvI4fIBR8LOrHkTFBkofk1fvjHO4sStjwD2DHTLJVRuCWQDMwG6KbQSek02gZnvMD00Mr6taUdj"
        amount={10 * 100}
        name="1 Month Access"
        alipay={true}
        bitcoin={true}
        className={styles.divdefaultLtrCache7jwhec}
        billingAddress
        // shippingAddress
      >

          <div className={styles.divdefaultLtrCache7jwhec}>
            <div className={styles.divdefaultLtrCache5zp87z1}>
              <div className={styles.freeTrial}>Standard</div>
              <div className={styles.usd10mo}>USD10/mo.</div>
            </div>
            <div className={styles.uldefaultLtrCache1h6eily1}>
              <div className={styles.uldefaultLtrCache1h6eily2}>
                <div className={styles.lidefaultLtrCache1sqhia6}>
                  <div className={styles.div}>•</div>
                  <div className={styles.spandefaultLtrCache1n34esz}>
                    <div
                      className={styles.createPostShare}
                    >{`Create Post share Location `}</div>
                  </div>
                </div>
                <div className={styles.lidefaultLtrCache1sqhia61}>
                  <div className={styles.div}>•</div>
                  <div className={styles.spandefaultLtrCache1n34esz1}>
                    <div className={styles.createPostShare}>
                      Ask our community etc
                    </div>
                  </div>
                </div>
                <div className={styles.lidefaultLtrCache1sqhia62}>
                  <div className={styles.div2}>•</div>
                  <div
                    className={styles.chatWithFriends}
                  >{`Chat with friends & groups`}</div>
                </div>
              </div>
            </div>
          </div>
        </StripeCheckout>
          <StripeCheckout
                  className={styles.divdefaultLtrCache7jwhec1}

        token={paymenthandle}
        stripeKey="pk_test_51NDrF2KqJIfLyC9JJtvJqW1VvI4fIBR8LOrHkTFBkofk1fvjHO4sStjwD2DHTLJVRuCWQDMwG6KbQSek02gZnvMD00Mr6taUdj"
        amount={35 * 100}
        name="6 Month Access"
        alipay={true}
        bitcoin={true}
        billingAddress
        // shippingAddress
      >
          <div className={styles.divdefaultLtrCache7jwhec1}>
            <div className={styles.divdefaultLtrCache5zp87z1}>
              <div className={styles.freeTrial}>6 month</div>
              <div className={styles.usd10mo}>For 35 USD.</div>
            </div>
            <div className={styles.uldefaultLtrCache1h6eily3}>
              <div className={styles.uldefaultLtrCache1h6eily2}>
                <div className={styles.lidefaultLtrCache1sqhia6}>
                  <div className={styles.div}>•</div>
                  <div className={styles.spandefaultLtrCache1n34esz}>
                    <div
                      className={styles.createPostShare}
                    >{`Create Post share Location `}</div>
                  </div>
                </div>
                <div className={styles.lidefaultLtrCache1sqhia61}>
                  <div className={styles.div}>•</div>
                  <div className={styles.spandefaultLtrCache1n34esz1}>
                    <div className={styles.createPostShare}>
                      Ask our community etc
                    </div>
                  </div>
                </div>
                <div className={styles.lidefaultLtrCache1sqhia62}>
                  <div className={styles.div2}>•</div>
                  <div
                    className={styles.chatWithFriends}
                  >{`Chat with friends & groups`}</div>
                </div>
              </div>
            </div>
          </div>
        </StripeCheckout>
          <StripeCheckout
        token={paymenthandle}
        stripeKey="pk_test_51NDrF2KqJIfLyC9JJtvJqW1VvI4fIBR8LOrHkTFBkofk1fvjHO4sStjwD2DHTLJVRuCWQDMwG6KbQSek02gZnvMD00Mr6taUdj"
        amount={50 * 100}
        name="1 Year Access"
        alipay={true}
        bitcoin={true}
        billingAddress
        className={styles.divdefaultLtrCache7jwhec2}
        // shippingAddress
      >
          <div className={styles.divdefaultLtrCache7jwhec2}>
            <div className={styles.divdefaultLtrCache5zp87z3}>
              <div className={styles.freeTrial}> 1 Year</div>
              <div className={styles.usd10mo}>For 50 USD.</div>
            </div>
            <div className={styles.uldefaultLtrCache1h6eily1}>
              <div className={styles.uldefaultLtrCache1h6eily2}>
                <div className={styles.lidefaultLtrCache1sqhia6}>
                  <div className={styles.div}>•</div>
                  <div className={styles.spandefaultLtrCache1n34esz}>
                    <div
                      className={styles.createPostShare}
                    >{`Create Post share Location `}</div>
                  </div>
                </div>
                <div className={styles.lidefaultLtrCache1sqhia61}>
                  <div className={styles.div}>•</div>
                  <div className={styles.spandefaultLtrCache1n34esz1}>
                    <div className={styles.createPostShare}>
                      Ask our community etc
                    </div>
                  </div>
                </div>
                <div className={styles.lidefaultLtrCache1sqhia62}>
                  <div className={styles.div2}>•</div>
                  <div
                    className={styles.chatWithFriends}
                  >{`Chat with friends & groups`}</div>
                </div>
              </div>
            </div>
          </div>
      </StripeCheckout>
        </div>
        <div className={styles.divh2dAb1ba2b}>
          <div className={styles.onlyPeopleWho}>
            Only people who live with you may use your account.
          </div>
        </div>
        <div className={styles.buttone1ax5wel1}>
          {/* <div className={styles.next}>Next</div> */}
        
        <div class={styles.buttonreg} onClick={paymenthandle}>
          <input className={styles.inputreg} type="submit" value="NEXT" />
        </div>
        </div>
      </div>
      {/* <div className={styles.navbar}>
        <div className={styles.container}>
          <img
            className={styles.containerChild}
            alt=""
            src="/frame-471@2x.png"
          />
          <div className={styles.column}>
            <div className={styles.startASearch} onClick={onStartASearchClick}>
              Start a search
            </div>
            <a className={styles.newsletter} onClick={onNewsletterClick}>
              Newsletter
            </a>
            <div className={styles.startASearch} onClick={onCommunityTextClick}>
              Community
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.button}>
              <div className={styles.logIn}>Log in</div>
            </div>
            <button className={styles.button1}>
              <div className={styles.signUp}>Sign up</div>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Subscription;
