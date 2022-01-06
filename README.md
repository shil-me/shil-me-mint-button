
At Shil.me, we believe in an accessible future for web3, where people are not constrained by pesky IDEs and programming languages, but are free to roam the endless plains of the Verse with their creativity.

So we are making available one of our favorite in-house components: the Shil.me Mint Button!

The Shil.me Mint Button is a free-to-use, customizable React component which allows you to mint your collections easily with no code overhead. Just plug it in, configure, and you're good to go!

Shil.me Mint Button is a lot of things, but most importantly it's:

- 💸 Free forever, and ever, and ever, and ever, and ever, and ever, and...
- 🎨 Fully-customizable
- 📒 Open-source
- 🖼 Powered by Shil.me
- ⚡️ Jitter ⚡

If you're seeing this, also make sure to follow us on Twitter at @ShilMeHQ and check out Shil.me.

Shil.me is the first link-in-bio platform for shilling your NFTs in the Metaverse. It's a lightweight middle-ground between Twitter pfp's and full-fledged Metaverse solutions for displaying and verifying NFTs.

Create your own Metaverse gallery for FREE at shil.me/join.

##How to use the button?

1. To use the button, you must first get the ABI and contract address for your collection contract.

You can do this easily by going to Remix, and hitting `Copy ABI` in the Compile tab. If your contract has been code reviewed on EtherScan, you can also use their endpoint to get your ABI as well.

2. After you get your ABI and contract address, you need to configure your button as:

```
import {MintButton} from 'shil-me-mint-button';

<MintButton 
	mintText="Mint an ape"
	mintMethodName="mint" 
	maxMintAmount={4}
	mintMethodInput={[2, "<MINT_COUNT>"]}
	singleMintPriceInWei="10000000000000000"
	buttonStyle={{
		background: 'linear-gradient(to right, #eecda3, #ef629f);'
    }}
	ADDRESS={ADDRESS}
	ABI={ABI} />
```

## Conclusion
I hope this article has been helpful to you if you have any question just leave it in the comments section and all the source code can be found on [Github](https://github.com/jim-junior/react-npm-library-template "GitHub repository")
