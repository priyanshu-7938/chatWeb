export const ABI = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "addFriend",
    "inputs": [
      {
        "type": "address",
        "name": "_frndAdd",
        "internalType": "address"
      },
      {
        "type": "string",
        "name": "frndName",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "checkAllreadyFrnds",
    "inputs": [
      {
        "type": "address",
        "name": "us1",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "us2",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "checkUserExist",
    "inputs": [
      {
        "type": "address",
        "name": "_addr",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "createAccount",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      },
      {
        "type": "uint256[]",
        "name": "imageData",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "fetchAllUsers",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "string",
            "name": "name",
            "internalType": "string"
          },
          {
            "type": "address",
            "name": "_address",
            "internalType": "address"
          },
          {
            "type": "uint256[]",
            "name": "profile",
            "internalType": "uint256[]"
          }
        ],
        "internalType": "struct MyContract.AllUsers[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getMyFriendList",
    "inputs": [
      {
        "type": "address",
        "name": "add",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "address",
            "name": "publicKey",
            "internalType": "address"
          },
          {
            "type": "string",
            "name": "name",
            "internalType": "string"
          }
        ],
        "internalType": "struct MyContract.friend[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getUserName",
    "inputs": [
      {
        "type": "address",
        "name": "_addr",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      },
      {
        "type": "uint256[]",
        "name": "",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "readMessages",
    "inputs": [
      {
        "type": "address",
        "name": "frn",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "me",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "",
        "components": [
          {
            "type": "address",
            "name": "sender",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "timestamp",
            "internalType": "uint256"
          },
          {
            "type": "string",
            "name": "message",
            "internalType": "string"
          }
        ],
        "internalType": "struct MyContract.Message[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "sendMessage",
    "inputs": [
      {
        "type": "address",
        "name": "frndAdd",
        "internalType": "address"
      },
      {
        "type": "string",
        "name": "_msg",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
];

export const topTypeOptions = [
    "NoHair",
    "Eyepatch",
    "Hat",
    "Hijab",
    "Turban",
    "WinterHat1",
    "WinterHat2",
    "WinterHat3",
    "WinterHat4",
    "LongHairBigHair",
    "LongHairBob",
    "LongHairBun",
    "LongHairCurly",
    "LongHairCurvy",
    "LongHairDreads",
    "LongHairFrida",
    "LongHairFro",
    "LongHairFroBand",
    "LongHairNotTooLong",
    "LongHairShavedSides",
    "LongHairMiaWallace",
    "LongHairStraight",
    "LongHairStraight2",
    "LongHairStraightStrand",
    "ShortHairDreads01",
    "ShortHairDreads02",
    "ShortHairFrizzle",
    "ShortHairShaggyMullet",
    "ShortHairShortCurly",
    "ShortHairShortFlat",
    "ShortHairShortRound",
    "ShortHairShortWaved",
    "ShortHairSides",
    "ShortHairTheCaesar",
    "ShortHairTheCaesarSidePart"
  ];

export const accessoriesTypeOptions = [
  "Blank",
  "Kurt",
  "Prescription01",
  "Prescription02",
  "Round",
  "Sunglasses",
  "Wayfarers"
];

export const facialHairTypeOptions = [
  "Blank",
  "BeardMedium",
  "BeardLight",
  "BeardMagestic",
  "MoustacheFancy",
  "MoustacheMagnum"
];

export const facialHairColorOptions = [
  "Auburn",
  "Black",
  "Blonde",
  "BlondeGolden",
  "Brown",
  "BrownDark",
  "Platinum",
  "Red"
];

export const clotheTypeOptions = [
  "BlazerShirt",
  "BlazerSweater",
  "CollarSweater",
  "GraphicShirt",
  "Hoodie",
  "Overall",
  "ShirtCrewNeck",
  "ShirtScoopNeck",
  "ShirtVNeck"
]

export const eyeTypeOptions = [
  "Close",
  "Cry",
  "Default",
  "Dizzy",
  "EyeRoll",
  "Happy",
  "Hearts",
  "Side",
  "Squint",
  "Surprised",
  "Wink",
  "WinkWacky"
]

export const eyebrowTypeOptions = [
    "Angry",
    "AngryNatural",
    "Default",
    "DefaultNatural",
    "FlatNatural",
    "RaisedExcited",
    "RaisedExcitedNatural",
    "SadConcerned",
    "SadConcernedNatural",
    "UnibrowNatural",
    "UpDown",
    "UpDownNatural"
];

export const mouthTypeOptions = [
    "Concerned",
    "Default",
    "Disbelief",
    "Eating",
    "Grimace",
    "Sad",
    "ScreamOpen",
    "Serious",
    "Smile",
    "Tongue",
    "Twinkle",
    "Vomit"
];

export const skinColorOptions = [
    "Tanned",
    "Yellow",
    "Pale",
    "Light",
    "Brown",
    "DarkBrown",
    "Black"
];

export const hairColorTypes = [
    "Auburn",
    "Black",
    "Blonde",
    "BlondeGolden",
    "Brown",
    "BrownDark",
    "PastelPink",
    "Platinum",
    "Red",
    "SilverGray"
];

export const hatColorOptions = [
    "Black",
    "Blue01",
    "Blue02",
    "Blue03",
    "Gray01",
    "Gray02",
    "Heather",
    "PastelBlue",
    "PastelGreen",
    "PastelOrange",
    "PastelRed",
    "PastelYellow",
    "Pink",
    "Red",
    "White"
];

export const clotheColorOptions = [
    "Black",
    "Blue01",
    "Blue02",
    "Blue03",
    "Gray01",
    "Gray02",
    "Heather",
    "PastelBlue",
    "PastelGreen",
    "PastelOrange",
    "PastelRed",
    "PastelYellow",
    "Pink",
    "Red",
    "White"
];
export function getURL(userProfile){
  return `https://avataaars.io/?accessoriesType=${
      accessoriesTypeOptions[parseInt(userProfile[1]._hex)]
  }&clotheType=${
      clotheTypeOptions[parseInt(userProfile[3]._hex)]
  }&eyeType=${
      eyeTypeOptions[parseInt(userProfile[4]._hex)]
  }&eyebrowType=${
      eyebrowTypeOptions[parseInt(userProfile[5]._hex)]
  }&facialHairType=${
      facialHairTypeOptions[parseInt(userProfile[2]._hex)]
  }&hairColor=${
      hairColorTypes[parseInt(userProfile[8]._hex)]
  }&mouthType=${
      mouthTypeOptions[parseInt(userProfile[6]._hex)]
  }&skinColor=${
      skinColorOptions[parseInt(userProfile[7]._hex)]
  }&topType=${
      topTypeOptions[parseInt(userProfile[0]._hex)]
  }`;

}