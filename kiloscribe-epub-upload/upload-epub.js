import { InscriptionSDK } from '@kiloscribe/inscription-sdk';
import dotenv from 'dotenv';
dotenv.config();

const sdk = new InscriptionSDK({
    apiKey: process.env.API_KEY,
    network: process.env.NETWORK || 'testnet'
});

const result = await sdk.inscribeAndExecute({
    file: {
        type: 'url',
        url: 'https://drive.usercontent.google.com/download?id=1xZ7_zvYxhXUHH7JpI3Q3RuEMf0eSER97&export=download&authuser=0'
    },
    holderId: process.env.HEDERA_ACCOUNT_ID,
    mode: 'file'
}, {
    accountId: process.env.HEDERA_ACCOUNT_ID,
    privateKey: process.env.HEDERA_PRIVATE_KEY
});


