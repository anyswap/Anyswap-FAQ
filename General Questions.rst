.. |br| raw:: html

    <br>

Some General Questions about Anyswap
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Q. Who are the Anyswap management team?

A. They are drawn from the Fusion Foundation. The acting CEO is Zhaojun He and DJ Qian is very active in the team.

Q. Where is the Anyswap website?

A. This is being compiled now and will be released shortly. In the meantime we encourage you to simply use the exchange.

Q. Where is the White Paper of Anyswap?

A. There is no White Paper, since the Anyswap DEX is fully functioning and Anyswap are not looking for funding.

What is Anyswap DEX?
&&&&&&&&&&&&&&&&&&&&

Q. What Features will Anyswap provide?

A. 

(1) Decentralized Cross Chain Bridge — Users can deposit any coins into the protocol and mint wrapped tokens in a decentralized way.

(2) Cross Chain Swaps — Users can immediately swap from one coin to another.

(3) Programmed Pricing and Liquidity — Liquidity provider could add and withdraw liquidity into swap pair. The programmed pricing system is based on the liquidity provided.

Q. What is a DEX?

A. A Decentralized EXchange allows the exchange of value between two or more assets, without the need to send those assets to a Centralized EXchange (CEX) first. When assets are sent to a CEX, they are no longer in your possession. You do not have the Private Key to the assets on a CEX and so you do not actually own them (just like you do not own the money in your FIAT bank). With Anyswap, your assets only leave your wallet, when they are secure under the control of a Smart Contract, since you alone know your complete Private Key.

Q. What pairs are available on the Anyswap DEX?

A. The exchange supports different pairs on each of its supported blockchains Fusion, Binance Smart Chain, Fantom and Ethereum. Until version 2 of Anyswap is here, all pairings will be with the base coin of the blockchain :- FSN, FTM, BNB or ETH. Users can swap between any two assets such as between ANY and aUSDT, or aETH and aUSDT as well as the base coins. In these cases, the fees will apply twice (i.e. 2 x 0.4%).

Q. What are the fees for using the exchange?

A. Users pay the gas fee, (which is typically very low on Fusion, Fantom and Binance Smart Chain, but high on Ethereum). In addition users pay 0.4% of the sum being transferred. Of this 0.3% goes directly to Liquidity Providers and 0.1% goes to Anyswap.

Q. How does Anyswap work without knowing my Private Key?

A. This is one of the most important aspects of a trustless DEX. Anyswap uses the `Fusion`_  `DCRM`_ technology. With DCRM, your Private Key is 'sharded', or split up with each piece being managed by a different node on the network. To make an exchange of value, a transaction must be signed by each of these nodes, but the important part is that the PRIVATE KEY IS NEVER ASSEMBLED and so the transaction cannot happen without all of these nodes colluding. This is the safest non-custodial way of sending assets. When you want to make an exchange of value on Anyswap, you must either authorize the transaction using MetaMask, or a hardware device like a Ledger connected to your wallet.

Q. Why is it important that Anyswap's Smart Contract, Cross Chain Bridge and DCRM are Open Source?

A. The `Anyswap Smart Contract`_ , the `Cross Chain Bridge`_ and the `DCRM`_ source code can be examined and the applications can be re-created by anyone with a little programming knowledge. In this way users are assured that the code is indeed decentralized and that there are no back doors into the code, or any malicious code that could steal your data or assets. In fact IF THE DEX CODE IS NOT OPEN SOURCE, IT IS NOT DECENTRALIZED. Open Source code can be modified or copied by anyone (providing they comply with the licenses). This is important since the code can evolve and improve and cannot become stranded due to someone dying, or refusing or being unable to continue code development.

Q. Are Anyswap's smart contracts audited?

A. Yes. All new chains are audited by the company Slow Mist before going live. Here is the `audit of Anyswap`_

Q. What is a Cross Chain DEX?

A. Anyswap is the first true Cross Chain DEX. With Anyswap you can exchange tokens or coins between any blockchains supporting the ECDSA or EdDSA cryptographic algorithm. This includes more than 95% of all chains, including ETH, BTC, XRP, XMR, XLM, LTC, TRX, XTZ, BCH, BSV, EOS, ADA etc. It also includes any tokens on these chains like ERC20's. Since Anyswap uses `DCRM`_ it does not require any code chnages to be made on any of the blockchains. In this respect it is superior to COSMOS or Polkadot, which we regard as being a 'compatibility' standard. DCRM is truly an 'inter-operability' standard.


Q. Why are Fusion, Fantom and Binance Smart Chain's addresses the same as Ethereum's?

A. These blockchains were all forked from Ethereum and kept its address format. If you send Fusion's coin FSN, or tokens on Fusion like ANY to an Ethereum address, you will not see them in an Ethereum wallet like Trustwallet, ot MyEtherWallet because they use a different blockchain (and blockchain ID). YOU HAVE NOT LOST YOUR assets though, since you can simply open a Fusion wallet using the same Private Key, wallet file + password, or hardware wallet (using the ETH extension) and you will see your assets there. The same applies to assets on the other blockchains Fantom and Binance Smart Chain.

Q. Is the bridge for assets onto Anyswap decentralized?

A. For now the answer is 'partially', since the Bridge is controlled by 5 DCRM nodes run by either Anyswap (at different locations), or their auditors Slow Mist. After the election of the Anyswap Working Nodes (AWN's) by ANY token holders at the end of 2020, we can say that the Bridge of assets into the Anyswap smart contract will be decentralized. There will be at least 5 AWN's (maybe many more, with testing of 11 nodes currently taking place) added to the DCRM nodes run by Anyswap and these AWN's can be replaced by votes of ANY token holders.

|br|

Tokens and coin pairs supported by Anyswap
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Q. What coins and tokens will be supported by Anyswap in the short term?

A. There are now many pairs on each of the Anyswap exchanges. Please see the exchange itself to see them.

Q. What coins and tokens will be supported by Anyswap eventually?

A. This is to be decided by ANY voting for each pair.

Q. Can Anyswap support ERC-20 tokens?

A. Yes. Anyswap will support all ERC20's

Q. Why not list tokens and coins quickly?

A. Each new blockchain will be audited by Slow Mist before being eligible for listing on the exchange. Another reason to move more slowly is that it is essential that sufficient liquidity be available to support each pair. This will require a discussion with each blockchain community, exchanges, or other parties.

Q. Can I list my company's token on Anyswap?

A. Please contact Anyswap to discuss this. Listing decisions are made by voting using the Governance mechanism. See the description in this wiki 'How to Vote on Anyswap'. Anyone with 1000 ANY or in liquidity in their Fusion wallet can propose a vote on a listing. When making a proposal, please include these details :-

Name, ERC20 contract address if appropriate, the desired Anyswap exchange to list on, the source chain and the target chain. 

Here is an example :-

Name: LINK（ChainLink）

ERC20 Address: 0x514910771af9ca656af840dff83e8264ecf986ca

From Chain: Ethereum

To Chain: Binance Smart Chain

Project Info: 
The content of the proposal will be supported by the Cross-Chain Bridge after technical evaluation and voting.



Q. Can anyone simply create a pair on Anyswap?

A. Yes, but the support of ANY holders will be required to make the listing visible on the exchange and for it to attract ANY liquidity rewards. The precise rules will be decided by voting and will likely result in a balance between ease of listing and avoidance of scam token listings as we see on other DEX's. There may be a lower limit on the amount of liquidity before a pair will earn ANY liquidity rewards.

Q. Who is currently providing liquidity for Anyswap?

A. Ordinary liquidity providers, as well as Hotbit. Further liquidity will be provided by other entities in due course.


|br|

Wallets supported by Anyswap
&&&&&&&&&&&&&&&&&&&&&&&&&&&&


Q. What wallets does Fusion and Anyswap support?

A. We recommend that you use the Fusion Open Source Community (`FOSC`_) wallet called `whallet.net`_ It will receive some significant cross chain enhancements in the very near future. Whallet is open source ( see `Whallet github`_ ) and considered safe by the Fusion Foundation. Whallet works well with a hardware wallet such as a Ledger and we recommend that you use one.

You can also use your Ethereum address, for instance from your Trust Wallet, or MEW. You will not see your Ethereum assets on Anyswap, except for those which you will bridging to Fusion - ETH or ERC-20's.

Q. If I want to connect my Ledger, what app should I use?

A. Use the Ethereum Ledger app. It is compatible with the Fusion blockchain.

Q. I'm trying to connect using MetaMask but I can't see my balances

A. Most likely you have not set up the custom blockchain settings. Ethereum will only work for the Ethereum version of Anyswap. The correct MetaMask settings can be found on the wiki under the relevant blockchain setup. See 'How to Setup and Use Anyswap'.

|br|

How does Anyswap Work?
&&&&&&&&&&&&&&&&&&&&&&

|br|

.. image :: _static/Anyswap_Architecture.png
   :width: 600
   
|br|

Q. How does a liquidity pool work?

A. Anyswap uses the “Constant Product Market Maker Model.” If you have a pair on the exchange, then to enter the pool you have to match the USD value of a token, say aToken, with FSN. Let's suppose that you need A aTokens and F FSN (or ETH, FTM, BNB etc.) to do this. The way the pool works is that when you multiply A and F, the result is constant :-

   A * F = C

This is true, except for the fact that when trades are made, 0.3% of the trade is added to the Liquidity Pool (LP) and so in reality C grows slowly, but let's ignore this for now. When someone buys aTokens, your proportion of the pool's aTokens also decreases and so does A. To compensate, F increases. The same happens vice-versa - if someone sells aTokens for FSN to the pool, your A increases and your F decreases.

Q. Why does the price of the asset paired with FSN (or ETH, FTM, BNB etc.) change?

A. The price is the FSN (or ETH, FTM, BNB) liquidity total value divided by the token liquidity total value. This can change dramatically if someone makes a large swap from a small pool, allowing good arbitrage opportunities for quick traders.

Q. What is 'slippage' and how can I control it?

A. Slippage is the change from the displayed swap rate when a swap is actually made. If there is not much liquidity in a pool, or the trade is large, then this can be significant. The default slippage value is 0.5%, but you can control this by clicking 'Advanced Deatils' below the swap and then setting your own allowable slippage percentage value. If there is not enough liquidity to accommodate your swap, then the swap will fail (small wheel at the top right stops spinning, without the balances changing). There will be no error displayed, instead you either try again, or change the slippage value. Alternatively you can change the time to wait by changing the 'set swap deadline' value.

Q. What is 'impermanent loss' and how can I lose money in a liquidity pool?

A. When someone buys an asset from a pool, they are effectively buying from one half of your liquidity pair - in proportion to your pool percentage stake. This means that the price of that asset will go up and the price of the other asset in the pair will go down. To maintain the 'constant product', this can lead to 'impermanent loss', since you will be gaining a less valuable asset and losing a more valuable one. In extremis, if the price ratio chnages a lot, you would lose money if you cashed out at that point. BUT this is an 'impermanant loss', since if you wait until the price ratio returns to the value you entered at, then the loss will evaporate. The ideal situation for a yield farmer is if both assets stay at roughly the same price ratio, but there is a lot of volume and volatility to generate fees.


    

What is ANY, the native token of Anyswap?
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Q. What is the ANY token?

A. The ANY token is a governance token on the Fusion blockchain. It's only purpose at the moment is to allow the election of Anyswap Working Nodes (AWN's), which will take place in late 2020 and to vote on new coin or token listings on anyswap.exchange. ANY's are awarded for using the anyswap.exchange platform and for other community rewards and incentives for various aspects of the platform.

Q. Is ANY an ERC-20 Token?

A. ANY originates as a token on the Fusion blockchain. It is a smart contract on each of the supported blockchains.

Q. Can I see ANY in Trustwallet?

A. Yes if you are on Anyswap Ethereum or Binance Smart Chain. For Fusion, you have to use a Fusion wallet like `whallet.net`_ or 
pwawallet.fantom.network for Fantom.

Q. Can I send ERC-20 tokens to anyswap.exchange?

A. You can see your ERC20's on the Ethereum Anyswap exchange, but on the other chains you have to use the Bridge to convert them to smart contracts on the respective chain. Not all ERC20's can be bridged, only those that are supported.

Q. How do I send ANY tokens, or other Bridged assets like aUSDT to another wallet?

A. Use `whallet.net`_ or you can use the Bridge in the exchange. Ther is also another finction called 'Swap Send', which enables you to both swap and send to another wallet in one operation. This can be found under the Swap tab.

Q. Where can I buy ANY?

A. You can buy ANY on anyswap.exchange of course, with its FSN-ANY pairing. You can also buy Fusion chain ANY on the Hotbit CEX with its `hotbit USDT-ANY`_ pairing.

Q. What is the current price of ANY?

A. You can see candlestick charts for anyswap.exchange at `Markets at anyswap.exchange`_

Q. Can I get ANY from Uniswap?

A. ANY may be listed on Uniswap, but please check that it has the correct contract address as the Anyswap's Ethereum ANY token, since there are a lot of scam listings.

Q. What is the contract address for ANY on Fusion?

A. 0x0c74199d22f732039e843366a236ff4f61986b32  You can see the data relating to the contract at `ANY contract address`_

Q. What is the contract address for ANY on Ethereum?

A. 0xf99d58e463a2e07e5692127302c20a191861b4d6 You can see the data relating to the contract at `ANY Ethereum contract address`_

Q. What is the contract address for ANY on Binance Smart Chain?

A. 0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa You can see the data relating to the contract at `ANY BSC contract address`_

Q. How can I see the transactions for my address relating to FSN?

A. Go to https://fsnex.com/address/<put your Fusion address in here>

Q. How can I see movements of ANY and other tokens in the smart contract to and from my address?

A. For Fusion Anyswap, go to https://fsnex.com/address/<put your Fusion address in here> and then click on 'Token Transfers'. For Binance Smart Chain use bscscan.com/address/<put your BSC address here> and click on 'BEP20 Token Txns'. For Ethereum go to etherscan.io/address/<put your Eth address here> and click on 'ERC20 Token Txns'. For Fantom, go to explorer.fantom.network 

Q. How can I see the balance of assets for my address in the smart contract on Fusion?

A. Go to https://fsnex.com/address/<put your Fusion address in here> and then click on 'Tokens'. You will see any assets locked into liquidity here also.

|br|

Tokenomics of ANY 
&&&&&&&&&&&&&&&&&


.. image :: _static/ANY_token_distribution.jpg
   :width: 600

Q. Where can I find data about the ANY token?

A. The token is still new and so the data is incomplete, but you can find token data here :-

(1) `CoinMarketCap ANY data`_

(2) `Coingecko ANY data`_

Q. What is the Total Supply of ANY?

A. 100 million is the Fully Diluted token supply.

Q. What was the Initial Supply of ANY?

A. 15 million. This comprises of 5 million in initial liquidity provision when the platform was launched and 10 million for 'Community and Ecosystem', to be allocated to grow the Anyswap ecosystem and user base. This amount is available to the team to allocate.

Q. How is the remaining 85 million to be allocated?

A. The remaining tokens will be allocated to block rewards, locked in an `Anyswap Block Rewards Smart Contract`_ ; distributed along with fusion network blocks as follows:

(1) 10 million ANY for “Cross Chain DCRM Node Rewards“. The “Cross Chain DCRM Node Rewards“ funds will be used to motivate Anyswap Working Nodes (AWN) to provide stable and secure cross-chain service.

(2) 15 million ANY for “Liquidity Rewards”. The “Liquidity Rewards” funds will be used to motivate liquidity providers to provide strong liquidity of swap pairs on Anyswap like BTC, ETH, USDT, XRP, LTC, FSN, etc.

(3) 15 million ANY for “Team Rewards” . The “Team Rewards” funds will be used to motivate Anyswap team and future team members.

(4) 20 million ANY is allocated to the shareholders of Anyswap company.

(5) 25 million ANY for “Swap and Trading”. The “Swap and Trading” funds will be used to motivate swap traders.

Q. What is the current Circulating Supply of ANY?

A. Until Coinmarketcap and Coingecko properly reflect the supply of ANY, we can use the ANY contract to calculate the Circulating Supply. Go to the `ANY contract address`_ and subtract the top 6 address balances from 100 million. The Circulating Supply of ANY increases every day, since it is used for trading and liquidity provision rewards. The Circulating Supply is currently (06/09/2020) a little more than 7 million.

Q. What is the Market Cap of ANY?

A. The MC is the Circulating Supply (see above) multiplied by the price, which you can see on anyswap.exchange. The MC of ANY can be seen using the @AnyswapBot in Telegram :- /mc@AnyswapBot


|br|

Total rewards for Anyswap
&&&&&&&&&&&&&&&&&&&&&&&&&

Q. At what rate are the 85 million ANY locked into the smart contract distributed?

A. 8.5 ANY is distributed for rewards every Fusion block (13.2 s). The total 85 million will therefore be distributed over 10 million blocks, or about 4 years.


|br|

How does Anyswap reward stakers, traders and liquidity providers?
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Q. How does Anyswap reward stakers?

A. Anyswap allows ANY on the Fusion platform to be staked. Users can click on 'Staking' on the Fusion platform and they once they have unlocked the smart contract (only required to be done once), they can then add to their stake by clicking the + button. Rewards continuosly update, visible on the display and can be harvested at any time. The staked ANY can be unstaked at any time. If you add more to your stake, the outstanding rewards are put back into your wallet. The APY from staking is shown in the display and depends on how many ANY are currently staked by everyone.


Q. What rewards do traders receive?

A. Anyswap has differentiated itself from other DEX's by rewarding trading directly. On the Fusion blockchain version of Anyswap, every 100 blocks (~ 20 minutes), ANY are awarded to traders, split according to their proportion of the volume in this period. If a user is the only one making a trade within these 100 blocks, they would receive all of the ANY. If there is no swap trade during this 100 blocks (very unlikely), the rewards will be split between liquidity providers and Anyswap Working Node (AWN) runners.

Q. What fixed rewards do Liquidity Providers receive?

A. Liquidity rewards are split between the different blockchains of Anyswap. Every approximately 24 hours, ANY will be rewarded to liquidity providers according to each one’s liquidity portion, The system will use the lowest liquidity provided by each providers to calculate the portion. Before AWN's are elected, the 6,600 that will eventually go to the AWN's will go to liquidity providers.


Q. How are the fixed liquidity rewards distributed between each pool?

A. The rewards are split between pools and are weighted, with some pairs receiving twice of three times the lowest rewarded pairs. The ANY liquidity rewards are shown to the right of the dashboard as APY (Annual Percentage Yield) values. These values take into account the total allocation of ANY to each blockchain. An example of the allocation can be seen here for the Binance Smart Chain :-

.. image :: _static/BSC_APY.png
    :width: 400

Q. What volume based rewards do liquidity providers receive?

A. In addition to the fixed ANY rewards, liquidity providers also receive volume based rewards. Every time a trade is made, 0.3% of the trade value is added to the liquidity pool (split between both members of the pair). The liquidity provider will receive their proportion of this reward added to their stake. This happens every 100 blocks.

Q. Is the reward structure fixed for all time?

A. No. Rewards can be changed using the governance function of ANY through voting.

Q. How can I see the trading rewards?

A. These are added to the your pool according to your percentage of that pool. If you multiply the number of e.g. FSN by the number of the other pair, you will see that this product increases as trading happens. You can calculate the dollar value of your pool contribution by multiplying the number of FSN by two and then multiplying it by the price of FSN. If the price of both assets in your pair decreases, so too will the total value of your pool allocation.

|br|

What are the current rewards for liquidity provision and swapping?
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

The current (starting 08/01/2021 1200 GMT) daily split of liquidity ANY rewards between the blockchains is as follows, including some additional promotional rewards :-

Rewards update, start from Jan.8th 12:00 GMT

Fusion 12,370 ANY LP Farming 50%, SWAP 50%

Ethereum 5,610 ANY LP 100%

BSC 5,610 ANY LP Farming 50%, SWAP 50% (ANY/BNB 50%, anyUSDT/BNB 50%)

Fantom 3,300 ANY LP 50%, SWAP 50%(ANY/FTM 50%, anyUSDT/FTM 50%)

HuobiChain 8,420 ANY LP Farming 100%

ANY Staking 990 ANY

Total: 36,300 ANY/day





|br|

How does Anyswap reward the bridging of assets into the smart contract?
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Q. Who receives rewards for bridging assets?

A. Anyswap Working Nodes (AWN's), which will be elected by ANY holders at the end of September 2020.

Q. What rewards will AWN's receive?

A. Cross Chain DCRM Node Rewards are calculated on a 24 hours basis. Every 24 hours (6,600 blocks on the Fusion blockchain), 6,600 ANY will be rewarded to AWN runners.

Q. Who gets the AWN rewards before the AWN's are elected?

A. Before any Anyswap Working Node (AWN) is working, these 6,600 tokens will all be rewarded to liquidity providers.

|br|

Bridging assets onto and off from the exchange
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Q. What are the charges for bridging assets onto Anyswap?

A. There are no charges other than gas fees, which are covered by the gateway fee when users bridge out their assets. Users do not need to have gas in their wallets to bridge assets onto the platform.

Q. What are the charges for bridging assets off from the exchange?

A. A 0.1% gateway fee will be charged to users who use bridge to lock out wrapped assets. Users do not need to have gas on the target blockchain, since this is covered by the fee.

Q. How long does it take to bridge assets onto and off from the exchange?

A. This depends on how big the transaction is. For most transactions, in the case of ETH, ERC-20's or BTC, it will take less than 30 minutes. One hour is quite possible though. For large asset exchanges it may take up to 24 hours to bridge. This depends upon the dynamics of the target blockchain.

Q. How can I track the bridging process?

A. Please use the respective block explorers for the blockchain in question. fsnex.com for Fusion, bscscan.com BSC, etherscan.io for Ethereum and explorer.fantom.network for the Fantom network. Users can also keep an eye on the target blockchain explorers, where their assets will end up.


Anyswap team rewards
&&&&&&&&&&&&&&&&&&&&

Q. What are the Anyswap team rewards?

A. Team rewards will be vested 9,900 ANY every 6,600 blocks. “Anyswap Company” will be vested 13,200 ANY every 6,600 blocks on the Fusion blockchain.




.. _Fusion: https://fusion.org
.. _whallet.net: https://whallet.net
.. _Whallet github: https://github.com/fsn-dev/whallet-web
.. _MyFusionWallet: https://myfusionwallet.com
.. _FOSC: https://github.com/fsn-dev
.. _Cross Chain Bridge: https://github.com/fsn-dev/crossChain-Bridge
.. _DCRM: https://github.com/fsn-dev/dcrm-sdk
.. _Anyswap Smart Contract: https://github.com/fsn-dev/anyswap
.. _Anyswap Block Rewards Smart Contract: https://github.com/anyswap/ANYToken-locked
.. _Markets at anyswap.exchange: https://markets.anyswap.exchange/#/
.. _hotbit USDT-ANY: https://www.hotbit.io/exchange?symbol=ANY_USDT
.. _Coingecko ANY data: https://www.coingecko.com/en/coins/anyswap#markets
.. _CoinMarketCap ANY data: https://coinmarketcap.com/currencies/anyswap/
.. _fsnex.com: https://fsnex.com
.. _ANY contract address: https://fsnex.com/token/0x0c74199d22f732039e843366a236ff4f61986b32
.. _ANY Ethereum contract address: https://etherscan.io/token/0xf99d58e463a2e07e5692127302c20a191861b4d6
.. _ANY BSC contract address: https://bscscan.com/token/0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa
.. _audit of Anyswap: https://github.com/anyswap/Anyswap-Audit/find/master




