import { ethers } from 'ethers';

/**
 * @description very login
 * @returns {Promise<String>}
 */
export const checkMetamaskConnection = async () => {
  if (window.ethereum) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      if (accounts) return true;
      return false;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

/**
 * @description 获取所有账号列表
 * @returns {Promise<String>}
 */
export const getWeb3Account = async () => {
  if (window.ethereum) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      return accounts;
    } catch (error) {
      return [];
    }
  } else {
    return [];
  }
};

/**
 * @description 获取签名
 * @params msg sing message
 * @returns {Promise<String>}
 */
export const getWeb3SignMessage = async (msg: string) => {
  if (window.ethereum) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const Singer = await provider.getSigner();
      const sig = await Singer.signMessage(msg);
      return sig;
    } catch (error) {
      return '';
    }
  } else {
    return '';
  }
};

/**
 * @description 切换网络
 * @params chainId
 */
export const switchWeb3ChainId = async (chainId: string) => {
  if (window.ethereum) {
    try {
      const id = window.ethereum.networkVersion;
      if (id !== '80001') {
        window.ethereum
          .request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '80001',
                chainName: 'Mumbai Testnet'
              }
            ]
          })
          .catch((error: any) => {
            console.log(error);
          });
      }

      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: `${chainId}`
          }
        ]
      });
    } catch (error) {
      console.log(error);
    }
  }
};

/**
 * @description 处理地址
 * @params address
 */
export const checkAddress = (address: string): string => {
  let ret = '';
  const hash_0x = ethers.keccak256(address.toLowerCase());
  console.log('hash', hash_0x);
  // hash_0x.replace(/^0x/i, '');
  const addressHash = hash_0x.replace(/^0x/i, '');

  for (let i = 0; i < address.length; i++) {
    if (parseInt(addressHash[i], 16) > 7) {
      ret += address[i].toUpperCase();
    } else {
      ret += address[i];
    }
  }

  console.log(ret);

  return ret;
};

/**
 * @description 监听账号变化
 */
export const acountChanged = (cb: any) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  provider.on('accountsChanged', function (accounts) {
    console.log(accounts);
    const acount = accounts[0];
    cb(acount);
  });
};
