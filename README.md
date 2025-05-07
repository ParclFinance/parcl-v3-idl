# Parcl V3 IDL

This package provides the Interface Description Language (IDL) for the Parcl V3 Solana program. It includes:

- The raw IDL JSON object.
- The full, Anchor-generated TypeScript types for the program, instructions, accounts, and events.

This IDL was generated using Anchor `v0.31.0`.

## Installation

```bash
npm install parcl-v3-idl
# or
yarn add parcl-v3-idl
# or
pnpm add parcl-v3-idl
```

## Usage

### Accessing the IDL and Types

```typescript
import {
  PARCL_V3_IDL_JSON, // The raw IDL as a JavaScript object
  type ParclV3, // The main Anchor-generated program type
  // You can also import specific instruction types, account types, event types, etc.
  // For example, if your IDL has an instruction 'initializeMarket':
  // type InitializeMarketInstruction
} from "parcl-v3-idl";

// Using the raw IDL JSON (e.g., for tools that consume the JSON directly)
console.log("Program Address from IDL:", PARCL_V3_IDL_JSON.address);
console.log("IDL Version:", PARCL_V3_IDL_JSON.version);

// The ParclV3 type gives you strong typing for program interactions.
```

### Using with Anchor Program

To use this IDL with the `@coral-xyz/anchor` library (which you'll need to install in your project), you'll typically do the following. The `ParclV3` type provides strong typing for your program interactions.

```typescript
import { Program, AnchorProvider } from "@coral-xyz/anchor"; // Make sure you have @coral-xyz/anchor installed
import { PARCL_V3_IDL_JSON, type ParclV3 } from "parcl-v3-idl";
import { Connection /*, Wallet, Keypair */ } from "@solana/web3.js";

async function main() {
  // 1. Setup your Solana connection
  const connection = new Connection(
    "https://api.mainnet-beta.solana.com",
    "confirmed"
  );

  // 2. Setup your Wallet and Provider
  // Example: using a dummy keypair for read-only operations or local testing
  // In a frontend app, you'd typically use a wallet adapter (e.g., from @solana/wallet-adapter-react)
  // const dummyWallet = {_publicKey: Keypair.generate().publicKey, signTransaction: async (tx) => tx, signAllTransactions: async (txs) => txs };
  // const provider = new AnchorProvider(connection, dummyWallet, AnchorProvider.defaultOptions());

  // Ensure you have a real provider for transactions
  // const provider = AnchorProvider.env(); // or new AnchorProvider(...)
  // anchor.setProvider(provider); // If using global provider context

  // 3. Create the program instance
  // The Program<T> constructor expects the IDL (as a JS object) and the provider.
  // The generic type ParclV3 (from the Anchor-generated types) provides strong typing.
  // The program ID from the IDL's top-level "address" field is used automatically.

  // Example (ensure provider is properly initialized before this step):
  // const program = new Program<ParclV3>(PARCL_V3_IDL_JSON, provider);

  // Now you can interact with the program with full type safety:
  // const marketAddress = ...;
  // const marketAccount = await program.account.market.fetch(marketAddress);
  // console.log("Market Name:", marketAccount.name);

  // Example of calling an instruction (replace with actual instruction and accounts):
  /*
  if (program.methods.someInstructionName) {
    const txSignature = await program.methods.someInstructionName(param1, param2)
      .accounts({
        // ... specify accounts for the instruction, with type checking
      })
      // .signers([...]) // if needed
      .rpc();
    console.log("Transaction successful with signature:", txSignature);
  }
  */
}

main().catch(console.error);
```

**Note on Program ID**: As of `@coral-xyz/anchor` v0.30.0+, the `Program` constructor typically infers the program ID from the `address` field at the root of the IDL object. `PARCL_V3_IDL_JSON` includes this field, so you usually don't need to pass the program ID separately.

## IDL JSON File

The raw `parcl-v3-idl.json` file is also included in the `files` array of `package.json`, so it will be available in `node_modules/parcl-v3-idl/parcl-v3-idl.json` after installation for tools that might need to consume the raw JSON file directly.

## Contributing

This library is a public repository. If you find any issues with the IDL or want to propose changes, please feel free to open an issue or submit a Pull Request on the [GitHub repository](https://github.com/ParclFinance/parcl-v3-idl).

When making changes to `parcl-v3-idl.json` or `parcl-v3-idl.ts`, please ensure they remain valid and in sync, reflecting the state of the on-chain Parcl V3 program.

## License

[MIT](./LICENSE)
