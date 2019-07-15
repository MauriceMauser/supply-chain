# Supply Chain

## UML

### Activity Diagram
<img 
    src="https://gateway.ipfs.io/ipfs/QmZZZPTn5R9PUvkeUdCwLVr3zoaoMrYaddEbwM7uU4uS1A"
/>

### Sequence Diagram
<img 
    src="https://gateway.ipfs.io/ipfs/QmdhyfmDRnLM7eiiRDQMGBMoe7LdMbTNEhH9ptvtDUd54B"
/>

### State Diagram
<img 
    src="https://gateway.ipfs.io/ipfs/QmfZUxn3WEYPs2xKjoTmZN7f3BhbKjp1TKfK2sn5A6JwX6"
/>

### Data Model Diagram
<img 
    src="https://gateway.ipfs.io/ipfs/QmWunYrNRW1jWodrTHZGbQ5ppL9gQtFct4fBpFtgDKHwVJ"
/>

## Libraries

### OpenZeppelin-Solidity/SafeMath

```
npm install openzeppelin-solidity
```

**Security:** To prevent over- and underflows that occur when calculating at the limits of fixed-size integers.

### Truffle HDWallet Provider

```
npm install truffle-hdwallet-provider
```

This allows us to deploy to Rinkeby via Infura.

### Truffle Assertions

```
npm install truffle-assertions
```

So we can test reverts without much boilerplate.

## IPFS

The UML diagrams provided above are served over IPFS.
Make sure to have the IPFS daemon running locally to access the gateway.

```
ipfs daemon
```

Here is how to [Install ipfs on Mac with Brew] (https://brewinstall.org/Install-ipfs-on-Mac-with-Brew/).

## Contract

The supply chain contract is available at: [0x82779f8080dDe6a00C065211F5A52F1e11928838] (https://rinkeby.etherscan.io/address/0x82779f8080dDe6a00C065211F5A52F1e11928838)

There you will also find transactions showing the successive *Harvesting*, *Processing*, *Packing*, *Selling*, *Buying*, *Shipping*, *Receiving*, *Purchasing* of a particular coffee bean.

## Versions

Truffle v5.0.22 (core: 5.0.22)

Solidity v0.5.0 (solc-js)

Node v11.14.0

Web3.js v1.0.0-beta.37
