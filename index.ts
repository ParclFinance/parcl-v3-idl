import idlJson from "./parcl-v3-idl.json" with { type: "json" };
// Assuming the main type export from parcl-v3-idl.ts is named something like ParclV3
// You might need to check parcl-v3-idl.ts to confirm the exact exported type name.
import { ParclV3 as ParclV3GeneratedType } from "./parcl-v3-idl.js"; // Changed to .js extension

// The raw JSON IDL object
export const PARCL_V3_IDL_JSON = idlJson;

// The structurally inferred type from the JSON (still useful for some cases or direct JSON manipulation)
export type ParclV3IdlStructural = typeof PARCL_V3_IDL_JSON;

// The more specific, Anchor-generated program type from parcl-v3-idl.ts
export type ParclV3 = ParclV3GeneratedType;

// Re-export all other named exports from the Anchor-generated types file
// This makes all instructions, accounts, events, and custom types directly available.
export * from "./parcl-v3-idl.js"; // Changed to .js extension

// Named export for IDL JSON is generally preferred over default for libraries.
// export default PARCL_V3_IDL_JSON;
