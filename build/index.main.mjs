// Automatically generated with Reach 0.1.9 (78dbf873)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (78dbf873)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v70 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v73 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:25:54:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v70, v73],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v70, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v75, v76], secs: v78, time: v77, didSend: v31, from: v74 } = txn1;
      
      sim_r.txns.push({
        amt: v75,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v75, v76], secs: v78, time: v77, didSend: v31, from: v74 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v85], secs: v87, time: v86, didSend: v42, from: v84 } = txn2;
  ;
  const v90 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:38:35:decimal', stdlib.UInt_max, 4), v85);
  const v91 = stdlib.add(v76, v90);
  const v92 = stdlib.mod(v91, stdlib.checkedBigNumberify('./index.rsh:38:51:decimal', stdlib.UInt_max, 3));
  ;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v92), {
    at: './index.rsh:54:28:application',
    fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v75, v76], secs: v78, time: v77, didSend: v31, from: v74 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v75), {
    at: './index.rsh:32:29:application',
    fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v83 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:33:52:application',
    fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:17:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v74, v75, v83],
    evt_cnt: 1,
    funcNum: 1,
    lct: v77,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v75, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v85], secs: v87, time: v86, didSend: v42, from: v84 } = txn2;
      
      sim_r.txns.push({
        amt: v75,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v90 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:38:35:decimal', stdlib.UInt_max, 4), v85);
      const v91 = stdlib.add(v76, v90);
      const v92 = stdlib.mod(v91, stdlib.checkedBigNumberify('./index.rsh:38:51:decimal', stdlib.UInt_max, 3));
      sim_r.txns.push({
        amt: v75,
        kind: 'from',
        to: v74,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v75,
        kind: 'from',
        to: v84,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v85], secs: v87, time: v86, didSend: v42, from: v84 } = txn2;
  ;
  const v90 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:38:35:decimal', stdlib.UInt_max, 4), v85);
  const v91 = stdlib.add(v76, v90);
  const v92 = stdlib.mod(v91, stdlib.checkedBigNumberify('./index.rsh:38:51:decimal', stdlib.UInt_max, 3));
  ;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v92), {
    at: './index.rsh:54:28:application',
    fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAEIJgIAAQAiNQAxGEEBHihkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAWSMSRCM0ARJENARJIhJMNAISEUQpZEk1A4EgWzX/STUFFzX+gATVFRkUNP4WULA0/4gAzLEisgE0/7III7IQNANXACCyB7OxIrIBNP+yCCOyEDEAsgezQgBQSCI0ARJENARJIhJMNAISEURJNQVJIls1/yRbNf6ABKzRH8M0/xZQNP4WULCBoI0GiABzNP+IAG4xADT/FlApSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161074b38038061074b833981016040819052610022916101de565b6000805543600355604080518251815260208084015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a160208101515161008390341460076100e6565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100de926002929091019061010f565b505050610273565b8161010b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461011b90610238565b90600052602060002090601f01602090048101928261013d5760008555610183565b82601f1061015657805160ff1916838001178555610183565b82800160010185558215610183579182015b82811115610183578251825591602001919060010190610168565b5061018f929150610193565b5090565b5b8082111561018f5760008155600101610194565b604080519081016001600160401b03811182821017156101d857634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101f157600080fd5b6101f96101a8565b835181526040601f198301121561020f57600080fd5b6102176101a8565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061024c57607f821691505b6020821081141561026d57634e487b7160e01b600052602260045260246000fd5b50919050565b6104c9806102826000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610377565b6100b8565b3480156100a157600080fd5b506100aa61025f565b60405161006492919061038f565b6100c860016000541460096102fc565b6100e2813515806100db57506001548235145b600a6102fc565b6000808055600280546100f4906103ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103ec565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610421565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16101d68160200151341460086102fc565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610213573d6000803e3d6000fd5b506020810151604051339180156108fc02916000818181858888f19350505050158015610244573d6000803e3d6000fd5b506000808055600181905561025b90600290610321565b5050565b600060606000546002808054610274906103ec565b80601f01602080910402602001604051908101604052809291908181526020018280546102a0906103ec565b80156102ed5780601f106102c2576101008083540402835291602001916102ed565b820191906000526020600020905b8154815290600101906020018083116102d057829003601f168201915b50505050509050915091509091565b8161025b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461032d906103ec565b6000825580601f1061033d575050565b601f01602090049060005260206000209081019061035b919061035e565b50565b5b80821115610373576000815560010161035f565b5090565b60006040828403121561038957600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103c3578581018301518582016060015282016103a7565b818111156103d5576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061040057607f821691505b6020821081141561038957634e487b7160e01b600052602260045260246000fd5b60006040828403121561043357600080fd5b6040516040810181811067ffffffffffffffff8211171561046457634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461047e57600080fd5b8152602092830151928101929092525091905056fea2646970667358221220dbc157f3714bdc63093479bd77e35c3a44b275dda0af2f4df145f6d55ac503cd64736f6c634300080c0033`,
  BytecodeLen: 1867,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:51:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
