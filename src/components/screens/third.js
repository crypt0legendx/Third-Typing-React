import { AnimatorGeneralProvider, Animator } from '@arwes/animation';
import { ArwesThemeProvider, StylesBaseline, Text, Figure } from '@arwes/core';
import { Wave } from 'react-animated-text';
import React, { useState } from 'react'
require('typeface-orbitron');


function ThirdScene () {


    const generalAnimator = { duration: { enter: 2000, exit: 200 } };
    const [activate, setActivate] = useState(true);

    return (
        <ArwesThemeProvider>        
        <AnimatorGeneralProvider animator={generalAnimator}>
          <Animator animator={{ activate, manager: 'stagger' }}>
        <div>
        <div className="third-scene row">
            <div className="left-scene">
                <div className="search-bar">
                    <label htmlFor="search" className="search-label"> search</label>
                    <input className="search-input" id="search" />                    
                    <button className="add-token" name="addtoken">add token</button>
                </div>

                <div className="left-line-1"></div>
                    <div className="left-line-2"></div>
                    <div className="vl-s vl-1"></div>
                    <div className='node-text vt-1'>qnt<span className='opacity-text'>[1,133]</span></div>
                    <div className="vl-s vl-2"></div>
                    <div className='node-text vt-2'>zinu<span className='opacity-text'>[1,043]</span></div>
                    <div className="vl-s vl-3"></div>
                    <div className='node-text vt-3'>ewt<span className='opacity-text'>[913]</span></div>
                    <div className="vl-s vl-4"></div>
                    <div className='node-text vt-4'>dxo<span className='opacity-text'>[873]</span></div>
                    <div className="vl-s vl-5"></div>
                    <div className='node-text vt-5'>nvrt<span className='opacity-text'>[1,133]</span></div>
                    <div className="vl-s vl-6"></div>
                    <div className='node-text vt-6'>mcc<span className='opacity-text'>[1,843]</span></div>
                    <div className="vl-s vl-2-1"></div>
                    <div className="vl-s vl-2-2"></div>
                    <div className="vl-s vl-2-3"></div>

                    <div>
                        <button className='vote node-text'>vote</button>
                    </div>
                    <div className='description node-text'>
                    <span className='pink'>description:\</span><Text as='p'>CyOp is a disruptive, community governed event triggerted by the Protocaol and altering the tokenomics of a coin.</Text>
                    </div>
                    <div className='input-cyop node-text'>
                    <span className='pink'>input:\</span>
                    <Text as='p'>etherscam / dextools / uniswap / slippage 12% </Text>
                    </div>

                    <div className='loading-text'>searching:\CyOp\file_loaded{'>'}</div>
            </div>
            {/* Right side */}
            <div className="right-scene">
                <div className='protocol-text node-text'>
                    Protocol fund [ <span className='ml-125'>120 eth ]</span>Initiated:            
                </div>
                <div className='align-right'>
                    <div className='date node-text'>
                        2021-12-15
                    </div>
                    <div className='time node-text'>
                        17:52:47
                    </div>
                </div>               
                <div className='flex'>
                    <div className='marketbuy node-text'>Market buy</div>
                    <div>                          
                            <p className="vertical_line"><span className='text-light-blue'>[||||||||||||||||||||||</span>|||||| 80 eth]</p>                            
                    </div>
                </div>
                <div className='flex'>
                    <div className='marketbuy node-text'> Lucky staker</div>
                    <div>                          
                            <p className="vertical_line ml-12"><span className='text-light-blue'>[||||||</span>|||||||||||||||||||||| 20 eth]</p>                            
                    </div>
                </div>
                <div className='flex'>
                    <div className='marketbuy node-text'>CyOp liquidity</div>
                    <div>                          
                            <p className="vertical_line ml-8"><span className='text-light-blue'>[||||||</span>|||||||||||||||||||||| 20 eth]</p>                            
                    </div>
                </div>
                <div className='progress-loading-bar'>

                </div>
                <div className='protocol-progress'>Protocol progress</div>
                <div className='browser node-text'>Browser - /active event</div>
                <div className='event-act node-text'>Active event </div>
                <div className='text-light-blue node-text mt-16 ml-13'>Previous event </div>
                <div className='text-light-blue node-text mt-16 ml-13'>Void </div>
                <div className='text-light-blue node-text mt-16 ml-13'>Staking </div>
                <div className='text-light-blue node-text mt-16 ml-13'>Wallet </div>
                <div className='text-light-blue node-text mt-16 ml-13'>Manual </div>
            </div>
        </div>
        <div className="connect-wallet">
            :wallet connected
        </div>
        <div className='right-vl'></div>
        <div className='vb-line'></div>
        <div className='arrow-1 arrow'>{'>'}</div>
        <div className='arrow-2 arrow'>{'>'}</div>
        <div className='arrow-3 arrow'>{'>'}</div>
        <div className='arrow-4 arrow'>{'>'}</div>
        <div className='arrow-5 arrow'>{'>'}</div>
        <div className='arrow-6 arrow'>{'>'}</div>

        <div className='left-vl'>            
        </div>
        
        </div>
        </Animator>
        </AnimatorGeneralProvider>
        
    </ArwesThemeProvider>
    )
}

export default ThirdScene