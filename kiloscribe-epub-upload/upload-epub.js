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
        url: 'https://drive.google.com/file/d/1Qsn-PVmZHApnCE6rZMTkwmUv8MO-_5An/view'
    },
    holderId: process.env.HEDERA_ACCOUNT_ID,
    mode: 'file'
}, {
    accountId: process.env.HEDERA_ACCOUNT_ID,
    privateKey: process.env.HEDERA_PRIVATE_KEY
});


