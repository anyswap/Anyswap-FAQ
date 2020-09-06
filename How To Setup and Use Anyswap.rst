.. |br| raw:: html

    <br>
    
How To Setup and Use Anyswap
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

How to setup Anyswap
&&&&&&&&&&&&&&&&&&&&

For instructions how to setup Anyswap, please see this (but be sure to use the new network in MetaMask https ://mainnet.anyswap.exchange) :-

.. figure :: _static/How_to_use_Anyswap.pdf
    :width: 600
    
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

Q. I've done everything, but I still can't connect to my wallet.

A. You can check that you have set up your MetaMask or that your Ledger works by creating a new Fusion wallet using `whallet.net`_ and connecting anyswap to this. If this doesn't work, then your problem is not related to Anyswap. Please try this. If you are using a ledger then ensure that you have updated the firmware using Ledger Live and that Display is set to NO and Contract Data is set to YES. If you are using MetaMask, then chack the network settings - that you are using the custom Fusion RPC settings.


Q. Does MetaMask work with the Brave browser?

A. Brave has its own version of MetaMask, so you will have to switch to the official version in the settings menu. Alternatively you can use another browser.

Q. What app do I select in my Ledger?

A. Use the Ethereum app. It is fully compatible with the Fusion blockchain.

Q. Why does my Ledger show the transaction in ETH and not FSN?

A. This is because the Ledger does not know which blockchain it is on - it defaults to ETH, but this is not a problem in realityu. Perhaps it will show the correct currency in a future version.

Q. Using Ledger to connect a wallet, I cannot find my Derivation path

A. Please click on the 'Ledger Live' tab next to the 'Legacy tab. The correct address should be the top one.

Q. When I try to connect to my Ledger, I just see 'Loading...' but nothing happens.

A. It is stuck. Please disconnect your Ledger, hit F5 to refresh the screen and then re-connect your Ledger and try again. You might have to do this a couple of times. In general do not refresh the screen when your Ledger is connected.

Q. My transaction keeps showing as 'pending' in MetaMask and I can't stop it.

A. There is a useful guide to stop and free up the pending transaction using `Node Networks clear pending transaction YouTube`_ It involves sending a little extra gas to the nonce of the offending transaction.

Q. Can I send my ANY to an exchange or to another wallet?

A. Yes, simply send them to the public address of another Fusion wallet. Currently hotbit.io trades ANY-USDT and you can send ANY or FSN to their deposit address and withdraw to your Fusion wallet.


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


.. _fusion token: https://www.fusion.org/fsn-token
.. _Guide to downgrade MetaMask: https://metamask.zendesk.com/hc/en-us/articles/360016336611-Revert-Back-to-Earlier-Version-or-Add-Custom-Build-to-Chrome
.. _Node Networks clear pending transaction YouTube: https://www.youtube.com/watch?v=lUjAe6R9h98
.. _whallet.net: https://whallet.net


