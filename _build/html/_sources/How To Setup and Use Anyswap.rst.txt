.. |br| raw:: html

    <br>
    
How To Setup and Use Anyswap
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

How to setup Anyswap on the Fusion Network
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

    
If you are using MetaMask, be aware that you cannot use the Ethereum network, but must add a custom RPC for the Fusion network. The correct network settings are :-

.. image :: _static/Anyswap_MetaMask_Network_Settings.jpg
   :width: 300
   
Q. Can I use my Trustwallet, or other Ethereum wallet to connect to Anyswap?

A. Anyswap uses the Fusion network, but the addresses are the same on Fusion as they are on Ethereum - but the chain ID is different. This means that you can use an Ethereum wallet. You can either connect to it using a Ledger, or MetaMask (BUT with a new RPC setting - see above). You will of course NOT see your ethereum assets, but only your Fusion assets.

Q. I have set up my MetaMask with the correct settings but I still can't see my wallet balances.

A. The latest versions of MetaMask are a little unstable. It is best to downgrade to version 7.7.9 There is `Guide to downgrade MetaMask`_

Q. How can I send FSN to my wallet and what wallet address should I use?

A. You can send FSN to your Fusion public address of your wallet. Make sure that they are native FSN, since a few exchanges (e.g. IDEX) still have some ERC20 FSN. These will not appear in your Fusion wallet if you send them there, but you will see them if you switch to the Ethereum network. You will not lose them if you sent the wrong type of FSN to a wallet.

Q. Which exchanges support native FSN?

A. Most exchanges now support native FSN and the ERC20 version of FSN will be phased out soon. You can see which exchanges suport which FSN at `fusion token`_

Q. I have bridged my assets onto the platform, but I can't unlock them.

A. Unlocking requires a little FSN gas - less than 0.01 FSN. Anyswap will find a way to airdrop new users with this tiny amount of FSN, but in the mean time, someone in the community will most likely be happy to send you it if you ask them.

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


Other Questions about setting up Anyswap
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Q. Do I need gas on Anyswap?

A. Yes. On the Fusion exchange you will need a little FSN and on the Binance Smart Chain exchange, you will need a little BNB-BEP20

Q. Does MetaMask work with the Brave browser?

A. Brave has its own version of MetaMask, so you will have to switch to the official version in the settings menu. Alternatively you can use another browser.

Q. What app do I select in my Ledger?

A. Use the Ethereum app. It is fully compatible with the Fusion blockchain.

Q. Why does my Ledger show the transaction in ETH and not FSN or BNB?

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

A. On the Fusion network, you do not need to do anything. On the Binance Smart Chain network, it is worth altering the gas cost. Do this by going to Settings> Advance> Advanced Gas Controls ON.  When you make a transaction now, you will see the gas cost and you can chnage this to an appropriate setting 24 gwei seems to work well at the moment (18/09/2020).


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

You can access to bot from any other Telegram channel like this :- @Anyswapbot/vol etc.







