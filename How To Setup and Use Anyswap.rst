.. |br| raw:: html

    <br>
    
How To Setup and Use Anyswap
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you are using MetaMask, be aware that unless you are using Ethereum Anyswap exchange, you will need to add a custom RPC for the network that you wish to use. When you click on the network you wish to use in the exchange (Fusion, Binance Smart Chain, Ethereum, or Fantom), if you have the incorrect network selected in your MetaMask, there will be a pop-up window telling you what the correct network settings have to be for your desired exchange.

How to setup Anyswap on the Fusion Network
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

    
For the Fusion network, the correct network settings are :-

.. image :: _static/Network-settings.jpg
   :width: 300
   
Q. Can I use my Trustwallet, or other Ethereum wallet to connect to Anyswap?

A. For Anyswap on the Fusion network, the addresses are the same on they are on Ethereum - but the chain ID is different. This means that you can use an Ethereum wallet. You can either connect to it using a Ledger, or MetaMask (BUT with a new RPC setting - see above). You will of course NOT see your ethereum assets, but only your Fusion assets.

Q. How can I send FSN to my wallet and what wallet address should I use?

A. You can send FSN to your Fusion public address of your wallet. Make sure that they are native FSN, since a few exchanges (e.g. IDEX) still have some ERC20 FSN. These will not appear in your Fusion wallet if you send them there, but you will see them if you switch to the Ethereum network. You will not lose them if you sent the wrong type of FSN to a wallet.

Q. Which exchanges support native FSN?

A. Most exchanges now support native FSN and the ERC20 version of FSN will be phased out soon. You can see which exchanges suport which FSN at `fusion token`_

Q. I have bridged my assets onto the platform, but I can't unlock them.

A. Unlocking requires a little FSN gas. If you have just bridged an asset to the platform, you will have enough gas airdropped to you to cover the first unlocking.

Q. When I try to connect to my Ledger, I just see 'Loading...' but nothing happens.

A. It is stuck. Please disconnect your Ledger, hit F5 to refresh the screen and then re-connect your Ledger and try again. You might have to do this a couple of times. In general do not refresh the screen when your Ledger is connected.

Q. My transaction keeps showing as 'pending' in MetaMask and I can't stop it.

A. There is a useful guide to stop and free up the pending transaction using `Node Networks clear pending transaction YouTube`_ It involves sending a little extra gas to the nonce of the offending transaction.

Q. I've done everything, but I still can't connect to my wallet.

A. You can check that you have set up your MetaMask properly, or that your Ledger works by creating a new Fusion wallet using `whallet.net`_ and connecting anyswap to this. If this doesn't work, then your problem is not related to Anyswap. Please try this. If you are using a ledger then ensure that you have updated the firmware using Ledger Live and that Display is set to NO and Contract Data is set to YES. If you are using MetaMask, then check the network settings - that you are using the custom Fusion RPC settings.


How to setup Anyswap on the Binance Smart Chain Network
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Q. How do I connect to the Binance Smart Chain Network?

A. If you have already been using another BSC dapp like Burgerswap, For.Tube, Tunaswap or Bakery, then Anyswap will connect automatically.
You need MetaMask and a Ledger. Go to 'Networks' at the top of MetaMask, select 'Custom RPC' and apply the settings below :-

.. image :: _static/Anyswap_BSC_MetaMask_Settings.jpg
   :width: 300
   
You should then click on Connect with Hardware Device and then Ledger. You should then see your wallet balances on the Binance Smart Chain. If you did not set the correct network settings when you connect to Ledger, you will see a screen like this:-

.. image :: _static/Anyswap_BSC_Prompted_Settings.jpg
   :width: 300

Just follow the instructions to set up the network.

Q. I have set up my connection to Binance Smart Chain but cannot see my wallet balances

A. You might try to use a different `BNC RPC Endpoint`_ in the Network Configuration.

Q. Which type of BNB should I use?

A. If you are transferring tokens from Binance central exchange with the Withdraw function, you will need to make sure that you select the BEP20 type of token.

How to setup Anyswap on the Fantom Network
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Q. How do I connect to the Fantom Network?

A. You need to create a custom network in your MetaMask. At the top click of MetaMask where you see the current network (e.g. Ethereum) and then select 'Custom RPC' and enter the details as below :-

.. image :: _static/Anyswap_Fantom_MetaMask_Settings.jpg
   :width: 300
   
Q. Does Fantom Anyswap use Opera or ERC20 FTM?

A. It uses native Opera FTM.

Q. How do I get FTM from Binance to Anyswap?

A. You can withdraw them as ERC20 FTM to your wallet and then use pwawallet.fantom.network to convert them to Opera. If you then connect to this wallet address in the Anyswap exchange, you will see your FTM.

Q. Can I use Ledger on the Fantom Anyswap exchange?

A. Yes you can. You can either connect with MetaMask, or with Ledger. Please be aware that pwawallet does not yet support Ledger.


How to setup on the Ethereum Network
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Q. How do I connect to the Ethereum Anyswap?

A. This is very straighforward. You can either connect with Ledger or MetaMask. You simply use the default network setting in MetaMask, which is Ethereum Mainnet. You will see your assets appearing then.

Q. How do I claim my liquidity provision rewards?

A. These will appear in your wallet on the Fusion Anyswap exchange. Details on how to connect to Fusion Anyswap can be found in the wiki here under 'How to setup Anyswap on the Fusion Network'. You can bridge your ANY to the Ethereum Anyswap. The reason they are paid to the Fusion wallet is that gas costs on Fusion are a tiny fraction of the gas costs on Ethereum.


Other Questions about setting up Anyswap
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Q. Do I need gas on Anyswap?

A. Yes. On the Fusion exchange you will need a little FSN and on the Binance Smart Chain exchange, you will need a little BNB-BEP20

Q. Does MetaMask work with the Brave browser?

A. Brave has its own version of MetaMask, so you will have to switch to the official version in the settings menu. Alternatively you can use another browser.

Q. What app do I select in my Ledger?

A. Use the Ethereum app. It is fully compatible with the Fusion blockchain.

Q. Why does my Ledger show the transaction in ETH and not FSN, FTM or BNB?

A. This is because the Ledger does not know which blockchain it is on - it defaults to ETH, but this is not a problem in reality. Perhaps it will show the correct currency in a future version.

Q. Using Ledger to connect a wallet, I cannot find my Derivation path

A. Please click on the 'Ledger Live' tab next to the 'Legacy tab. The correct address should be the top one.

Q. Can I send my ANY to an exchange or to another wallet?

A. Yes, simply send them to the public address of another Fusion wallet. Currently hotbit.io trades ANY-USDT and ANY-BTC and you can send ANY or FSN to their deposit address and withdraw to your Fusion wallet.


How to use Anyswap
&&&&&&&&&&&&&&&&&&

The YouTube videos are a convenient way to learn how to use Anyswap. That is a good place to start (see the link on the left of your screen).

Q. How do I swap from one asset to another?

A. 

.. image :: _static/How_to_swap.png
   :width: 600
   
Q. How do I set slippage?

A.

.. image :: _static/How_to_set_slippage.png
   :width: 600
   
Q. How do I add liquidity?

A.

.. image :: _static/How_to_add_liquidity.png
   :width: 600
   
.. image :: _static/How_to_add_liquidity-2.png
   :width: 600

Q. How do I remove liquidity?

A.

.. image :: _static/How_to_remove_liquidity.png
   :width: 600
   
Q. How do I bridge new coins onto Anyswap from their native chains?

A.

.. image :: _static/How_to_bridge_coins.png
   :width: 600
   
.. image :: _static/How_to_bridge_coins-2.png
   :width: 600
   
.. image :: _static/How_to_bridge_coins-3.png
   :width: 600

Q. How do I remove coins/tokens back to their native chains?

A.

.. image :: _static/How_to_withdraw_coins.png
   :width: 600
   
.. image :: _static/How_to_withdraw_coins-2.png
   :width: 600
   
Q. How do I bridge coins between the different blockchains on Anyswap?

A. If you click on Bridge, you will see your assets (e.g. ANY-FRC20 or ANY-BNB etc.) and you can simply select how many you want to send to the other network. The icon on the right hand side, if clicked, will show the progress of the bridging operation, which takes a few minutes.

Q. Should I change the gas costs?

A. On the Fusion network, you do not need to do anything. On the Binance Smart Chain, or Fantom networks, it is worth altering the gas cost. Do this by going to Settings> Advance> Advanced Gas Controls ON.  When you make a transaction now, you will see the gas cost and you can change this to an appropriate setting 24 gwei seems to work well at the moment for BSC, and 1 gwei for FTM and FSN (18/11/2020).


.. _fusion token: https://www.fusion.org/fsn-token
.. _Guide to downgrade MetaMask: https://metamask.zendesk.com/hc/en-us/articles/360016336611-Revert-Back-to-Earlier-Version-or-Add-Custom-Build-to-Chrome
.. _Node Networks clear pending transaction YouTube: https://www.youtube.com/watch?v=lUjAe6R9h98
.. _whallet.net: https://whallet.net

.. _BNC RPC Endpoint: https://docs.binance.org/smart-chain/developer/rpc.html



How to know which pool to enter?
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

You can use the Anyswap bot to tell you what APY you can expect. Choose pairs that maintain a fairly constant price ratio to avoid Impermanent Loss and high volatility and volume to Total Value Locked ratio to get maximum volume rewards. Keep an eye on announcements for special reward promotions.


How does the Anyswap bot work?
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Many thanks to Ahmed @ahmed6174 for this amazing bot! You can simply enter commands in the Anyswap Official Telegram Channel like this :-

# /mc      (tokenomics of ANY)

# /vol     (24 hour volume of top pools)

# /vol all  (24 hour volume of all pools)

# /vol fsneth  (24 hour volume for one pair, with a time breakdown too)

# /tvl      (Total Value Locked into pools)

# /apy      (Annual Percentage Yield of each top pool - varies a LOT)

# /apy all   (same as above but for all pools)

# /apy bnbany (same, but for one pair, with a time breakdown too)

You can access to bot from any other Telegram channel like this :- /apy@Anyswapbot etc.







