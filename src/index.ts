import { Buffer as ImportedBuffer } from 'buffer';
window.Buffer = window.Buffer ?? ImportedBuffer;

import { useEtherspot } from '@etherspot/react-etherspot';

export { default as EtherspotUi } from './components/EtherspotUi';
export { default as EtherspotBatches } from './components/EtherspotBatches';
export { default as EtherspotBatch } from './components/EtherspotBatch';
export { default as EtherspotTransaction } from './components/EtherspotTransaction';
export { default as EtherspotContractTransaction } from './components/EtherspotContractTransaction';
export { default as EtherspotApprovalTransaction } from './components/EtherspotApprovalTransaction';
export { default as EtherspotTokenTransferTransaction } from './components/EtherspotTokenTransferTransaction';
export { default as useEtherspotUi } from './hooks/useEtherspotUi';
export { default as useEtherspotBalances } from './hooks/useEtherspotBalances';
export * from './types/EtherspotUi';

export { useEtherspot };
