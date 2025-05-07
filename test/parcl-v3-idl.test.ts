import test from "ava";
import {
  PARCL_V3_IDL_JSON,
  type ParclV3,
  // Replace with an actual exported type name from your parcl-v3-idl.ts file
  // e.g., if parcl-v3-idl.ts exports 'MarketAccount', use that.
  // type SOME_EXPECTED_EXPORTED_TYPE_FROM_TS_FILE
} from "../index.js"; // Changed to .js extension

test("PARCL_V3_IDL_JSON is a valid IDL object", (t) => {
  t.is(typeof PARCL_V3_IDL_JSON, "object");
  t.truthy(
    PARCL_V3_IDL_JSON.address,
    "IDL should have an address (program ID)"
  );
  t.truthy(
    PARCL_V3_IDL_JSON.metadata?.version,
    "IDL should have metadata.version"
  );
  t.true(
    Array.isArray(PARCL_V3_IDL_JSON.instructions),
    "IDL should have instructions array"
  );
  // Add more checks as needed, e.g., for specific instructions or accounts
  // t.true(PARCL_V3_IDL_JSON.instructions.some(ix => ix.name === 'someInstruction'));
});

test("ParclV3 type is available and usable", (t) => {
  // This test mainly checks if the type can be referenced without TS errors.
  // We can't do much at runtime to verify a type itself beyond its importability.
  let programInstance: ParclV3 | null = null;
  programInstance = {} as ParclV3; // Dummy assignment for type usage illustration
  t.pass("ParclV3 type was referenced successfully.");
});

/*
// Uncomment and adjust this test once you identify a specific type from parcl-v3-idl.ts
// that should be re-exported by index.ts via `export *`.

test('Specific types from parcl-v3-idl.ts are exported', (t) => {
  // Example: if 'MarketAccount' is an exported type in parcl-v3-idl.ts
  // type MyMarket = SOME_EXPECTED_EXPORTED_TYPE_FROM_TS_FILE;
  // const exampleMarket: MyMarket = {} as MyMarket; // Dummy assignment

  // For this test to be meaningful, you need to import an actual type
  // that is defined in parcl-v3-idl.ts and re-exported.
  // If you can successfully import it and use it as a type, it means `export *` is working.
  t.pass('Placeholder for specific type export test. Adjust with a real type.');
});
*/

// You might also want to test that the IDL can be used with @coral-xyz/anchor Program
// This would be more of an integration test and would require setting up a provider.
// For a simple library test, checking exports might be sufficient.
