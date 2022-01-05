var Web3 = require('web3');
import React, {useState, useEffect} from 'react';
import './index.css';

export default function MintButton(props_) {

	const [count, setCount] = useState(1);
	const [state, setState] = useState(-1);

	var contract = 0;

	const [props, setProps] = useState({
		showMintPrice: true,
		showMintSoFar: false,
		shil: true,
		tokenUnit: "Ξ",
		mintMethodName: "mint",
		mintMethodInput: ["<MINT_COUNT>"],
		mintText: "Mint",
		maxMintAmount: 1,
		jitter: true,
		...props_
	})

	const mintNFT = async (count) => {
		if(window.ethereum) {
			setState(0);
			await window.ethereum.send("eth_requestAccounts");
			window.web3 = new Web3(window.ethereum);

			var accounts = await web3.eth.getAccounts();
			if(!accounts || accounts.length == 0) {
				window.alert("No accounts.")
				return;
			}
			var account = accounts[0];
			contract = new web3.eth.Contract(props.ABI, props.ADDRESS);
			window["contract"] = new web3.eth.Contract(props.ABI, props.ADDRESS);

						console.log(contract["methods"][props.mintMethodName])

			var props_copy = props
			var index = props_copy.mintMethodInput.indexOf("<MINT_COUNT>");

			if (~index) {
					props_copy.mintMethodInput[index] = count;
			}

			setProps(props_copy);

			contract["methods"][props.mintMethodName](...props_copy.mintMethodInput).send({
				from: account,
				value: `${parseInt(props.singleMintPriceInWei) * count}`
			}).then(() => {
				setState(1);
			}).catch(() => {
				setState(2);
			})
		} else {
			setState(2);
		}
	}

  return (
    <div
      class="mint-button-container"
    >
				<div class="mint-button-top-bar-container">
					{props.showMintPrice && <span style={{float: "left", fontWeight: 'bold'}}>{parseFloat(props.singleMintPriceInWei) / parseFloat(1000000000000000000)} {props.tokenUnit}</span>}
					{props.showMintSoFar && <span style={{marginLeft: 'auto', float: "right"}}>76/1245</span>}
				</div>
				
				<div
				class={`${props.jitter ? "jitter-container" : ""} mint-button-middle-bar-container`} style={props.buttonStyle ? props.buttonStyle : {}} onClick={(e) => {
					if(e.target.tagName !== 'SELECT') {
						mintNFT(count);
					}
				}}>
					<span>
						{state == -1 && props.mintText}
						{state == 0 && "Minting..."}
						{state == 1 && "🎉🎉🎉"}
						{state == 2 && "😢😢😢"}
					</span>
					<select
					onChange={(e) => {
						setCount(e.target.value)
					}}
					onClick={() => {}} 
					style={{
						backgroundColor: 'white',
						border: 'none',
						padding: '1px',
						borderRadius: '4px'
					}}
					value={count}
					name="mint-count" id="mint-count">
					{[...Array(props.maxMintAmount)].map((e, i) => {
						return <option value={i + 1}>{i + 1}</option>
					})}
</select>
				</div>

				<div class="mint-button-bottom-bar-container">
					{props.shil && <div style={{float: "right", marginLeft: 'auto'}}>
						<span style={{marginRight: "3px"}}>powered by</span>
						<a href="https://shil.me" style={{fontFamily: 'DM Serif Display', color: 'black', textDecoration: 'none'}}>Shil.me</a>
					</div>}
				</div>
    </div>
  );
}
