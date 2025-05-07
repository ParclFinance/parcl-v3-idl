/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/parcl_v3.json`.
 */
export type ParclV3 = {
  "address": "3parcLrT7WnXAcyPfkCz49oofuuf2guUKkjuFkAhZW8Y",
  "metadata": {
    "name": "parclV3",
    "version": "0.0.4",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "createExchange",
      "discriminator": [
        31,
        44,
        206,
        54,
        122,
        134,
        94,
        218
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "collateralMint"
        },
        {
          "name": "collateralVault",
          "writable": true
        },
        {
          "name": "upgradeAuthority",
          "writable": true,
          "signer": true
        },
        {
          "name": "parclV3Program"
        },
        {
          "name": "parclV3ProgramData"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createExchangeParams"
            }
          }
        }
      ]
    },
    {
      "name": "nominateAdmin",
      "discriminator": [
        134,
        11,
        31,
        244,
        20,
        77,
        138,
        121
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "nominatedAdmin"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "acceptAdmin",
      "discriminator": [
        112,
        42,
        45,
        90,
        116,
        181,
        13,
        170
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "nominatedAdmin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "addOracleConfig",
      "discriminator": [
        189,
        15,
        94,
        242,
        86,
        86,
        214,
        54
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "oracleProgram"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "addOracleConfigParams"
            }
          }
        }
      ]
    },
    {
      "name": "removeOracleConfig",
      "discriminator": [
        58,
        42,
        122,
        48,
        28,
        241,
        111,
        243
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "oracleProgram"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "collectProtocolFees",
      "discriminator": [
        22,
        67,
        23,
        98,
        150,
        178,
        70,
        220
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "collateralVault",
          "writable": true
        },
        {
          "name": "collateralTokenAccount",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "updateExchangeStatus",
      "discriminator": [
        83,
        160,
        252,
        250,
        129,
        116,
        49,
        223
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateExchangeStatusParams"
            }
          }
        }
      ]
    },
    {
      "name": "setSettlementDelay",
      "discriminator": [
        122,
        91,
        209,
        53,
        160,
        209,
        137,
        158
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setSettlementDelayParams"
            }
          }
        }
      ]
    },
    {
      "name": "setMinLpDuration",
      "discriminator": [
        96,
        23,
        58,
        213,
        37,
        133,
        252,
        148
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setMinLpDurationParams"
            }
          }
        }
      ]
    },
    {
      "name": "setProtocolFeeRate",
      "discriminator": [
        95,
        7,
        4,
        50,
        154,
        79,
        156,
        131
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setProtocolFeeRateParams"
            }
          }
        }
      ]
    },
    {
      "name": "setExchangeLiquidationSettings",
      "discriminator": [
        181,
        50,
        230,
        143,
        205,
        0,
        13,
        13
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setExchangeLiquidationSettingsParams"
            }
          }
        }
      ]
    },
    {
      "name": "setAuthorizedSettler",
      "discriminator": [
        148,
        239,
        242,
        106,
        39,
        192,
        245,
        61
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "authorizedSettler"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "setAuthorizedProtocolFeesCollector",
      "discriminator": [
        89,
        218,
        100,
        189,
        115,
        229,
        65,
        172
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "authorizedProtocolFeesCollector"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "setMaxKeeperTipRate",
      "discriminator": [
        120,
        245,
        24,
        0,
        193,
        218,
        45,
        236
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setMaxKeeperTipRateParams"
            }
          }
        }
      ]
    },
    {
      "name": "createMarket",
      "discriminator": [
        103,
        226,
        97,
        235,
        200,
        188,
        251,
        254
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "priceFeed"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createMarketParams"
            }
          }
        }
      ]
    },
    {
      "name": "closeMarket",
      "discriminator": [
        88,
        154,
        248,
        186,
        48,
        14,
        123,
        244
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "updateMarketStatus",
      "discriminator": [
        137,
        100,
        251,
        184,
        172,
        17,
        173,
        36
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateMarketStatusParams"
            }
          }
        }
      ]
    },
    {
      "name": "setPriceFeed",
      "discriminator": [
        13,
        15,
        231,
        129,
        61,
        7,
        28,
        122
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "priceFeed"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "setFeeRates",
      "discriminator": [
        185,
        77,
        201,
        28,
        224,
        126,
        111,
        111
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setFeeRatesParams"
            }
          }
        }
      ]
    },
    {
      "name": "setMarketLiquidationSettings",
      "discriminator": [
        134,
        233,
        157,
        58,
        7,
        145,
        236,
        92
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setMarketLiquidationSettingsParams"
            }
          }
        }
      ]
    },
    {
      "name": "setFundingSettings",
      "discriminator": [
        28,
        105,
        178,
        65,
        72,
        98,
        202,
        5
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setFundingSettingsParams"
            }
          }
        }
      ]
    },
    {
      "name": "setMaxSideSize",
      "discriminator": [
        104,
        244,
        91,
        96,
        165,
        60,
        96,
        178
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setMaxSideSizeParams"
            }
          }
        }
      ]
    },
    {
      "name": "setLockedOiSettings",
      "discriminator": [
        190,
        152,
        6,
        14,
        248,
        118,
        72,
        2
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setLockedOiSettingsParams"
            }
          }
        }
      ]
    },
    {
      "name": "addLiquidityV2",
      "discriminator": [
        126,
        118,
        210,
        37,
        80,
        190,
        19,
        105
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "lpPosition",
          "writable": true
        },
        {
          "name": "collateralVault",
          "writable": true
        },
        {
          "name": "ownerTokenAccount",
          "writable": true
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "addLiquidityV2Params"
            }
          }
        }
      ]
    },
    {
      "name": "removeLiquidityV2",
      "discriminator": [
        155,
        227,
        21,
        224,
        143,
        194,
        226,
        238
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "lpPosition",
          "writable": true
        },
        {
          "name": "settlementRequest",
          "writable": true
        },
        {
          "name": "ownerTokenAccount"
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "removeLiquidityV2Params"
            }
          }
        }
      ]
    },
    {
      "name": "closeLpPosition",
      "discriminator": [
        33,
        118,
        57,
        195,
        133,
        126,
        105,
        18
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "lpPosition",
          "writable": true
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "upgradeLpAccount",
      "discriminator": [
        252,
        100,
        74,
        210,
        78,
        135,
        113,
        226
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "lpAccount",
          "writable": true
        },
        {
          "name": "lpPosition",
          "writable": true
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "upgradeLpAccountParams"
            }
          }
        }
      ]
    },
    {
      "name": "createLpAccount",
      "discriminator": [
        233,
        44,
        89,
        248,
        24,
        157,
        51,
        237
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "lpAccount",
          "writable": true
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "closeLpAccount",
      "discriminator": [
        27,
        133,
        223,
        30,
        9,
        30,
        195,
        130
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "lpAccount",
          "writable": true
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "addLiquidity",
      "discriminator": [
        181,
        157,
        89,
        67,
        143,
        182,
        52,
        72
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "lpAccount",
          "writable": true
        },
        {
          "name": "collateralVault",
          "writable": true
        },
        {
          "name": "signerTokenAccount",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "addLiquidityParams"
            }
          }
        }
      ]
    },
    {
      "name": "removeLiquidity",
      "discriminator": [
        80,
        85,
        209,
        72,
        24,
        206,
        177,
        108
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "lpAccount",
          "writable": true
        },
        {
          "name": "settlementRequest",
          "writable": true
        },
        {
          "name": "ownerTokenAccount"
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "removeLiquidityParams"
            }
          }
        }
      ]
    },
    {
      "name": "setLpAccountDelegate",
      "discriminator": [
        231,
        22,
        40,
        242,
        252,
        72,
        209,
        21
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "lpAccount",
          "writable": true
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setLpAccountDelegateParams"
            }
          }
        }
      ]
    },
    {
      "name": "createMarginAccount",
      "discriminator": [
        98,
        114,
        213,
        184,
        129,
        89,
        90,
        185
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "marginAccount",
          "writable": true
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createMarginAccountParams"
            }
          }
        }
      ]
    },
    {
      "name": "closeMarginAccount",
      "discriminator": [
        105,
        215,
        41,
        239,
        166,
        207,
        1,
        103
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "marginAccount",
          "writable": true
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "depositMargin",
      "discriminator": [
        240,
        96,
        57,
        37,
        173,
        174,
        158,
        219
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "marginAccount",
          "writable": true
        },
        {
          "name": "collateralVault",
          "writable": true
        },
        {
          "name": "signerTokenAccount",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "depositMarginParams"
            }
          }
        }
      ]
    },
    {
      "name": "withdrawMargin",
      "discriminator": [
        124,
        222,
        8,
        141,
        181,
        108,
        15,
        176
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "marginAccount",
          "writable": true
        },
        {
          "name": "settlementRequest",
          "writable": true
        },
        {
          "name": "ownerTokenAccount"
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "withdrawMarginParams"
            }
          }
        }
      ]
    },
    {
      "name": "modifyPosition",
      "discriminator": [
        48,
        249,
        6,
        139,
        14,
        95,
        106,
        88
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "marginAccount",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "modifyPositionParams"
            }
          }
        }
      ]
    },
    {
      "name": "setMarginAccountDelegate",
      "discriminator": [
        174,
        245,
        106,
        69,
        115,
        187,
        76,
        238
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "marginAccount",
          "writable": true
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "setMarginAccountDelegateParams"
            }
          }
        }
      ]
    },
    {
      "name": "liquidate",
      "discriminator": [
        223,
        179,
        226,
        125,
        48,
        46,
        39,
        74
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "marginAccount",
          "writable": true
        },
        {
          "name": "liquidatorMarginAccount",
          "writable": true
        },
        {
          "name": "liquidator",
          "writable": true,
          "signer": true
        },
        {
          "name": "owner",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "option": {
              "defined": {
                "name": "liquidateParams"
              }
            }
          }
        }
      ]
    },
    {
      "name": "refreshLockedOiAccounting",
      "discriminator": [
        255,
        224,
        156,
        193,
        13,
        228,
        79,
        161
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "processSettlementRequests",
      "discriminator": [
        245,
        52,
        151,
        27,
        93,
        16,
        154,
        112
      ],
      "accounts": [
        {
          "name": "exchange",
          "writable": true
        },
        {
          "name": "collateralVault",
          "writable": true
        },
        {
          "name": "keeperTokenAccount",
          "writable": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "getMargins",
      "discriminator": [
        107,
        87,
        123,
        44,
        142,
        3,
        173,
        41
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "marginAccount"
        }
      ],
      "args": [],
      "returns": {
        "defined": {
          "name": "marginsClient"
        }
      }
    },
    {
      "name": "getWithdrawableMargin",
      "discriminator": [
        5,
        66,
        26,
        120,
        103,
        149,
        195,
        21
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "marginAccount"
        }
      ],
      "args": [],
      "returns": "u64"
    },
    {
      "name": "getFillPrice",
      "discriminator": [
        123,
        142,
        223,
        106,
        67,
        203,
        119,
        250
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "market"
        },
        {
          "name": "priceFeed"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getFillPriceParams"
            }
          }
        }
      ],
      "returns": "u64"
    },
    {
      "name": "getTradeFee",
      "discriminator": [
        71,
        106,
        93,
        235,
        168,
        134,
        140,
        202
      ],
      "accounts": [
        {
          "name": "exchange"
        },
        {
          "name": "market"
        },
        {
          "name": "priceFeed"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "getTradeFeeParams"
            }
          }
        }
      ],
      "returns": "u64"
    }
  ],
  "accounts": [
    {
      "name": "exchange",
      "discriminator": [
        30,
        200,
        220,
        149,
        3,
        61,
        104,
        50
      ]
    },
    {
      "name": "lpAccount",
      "discriminator": [
        23,
        166,
        251,
        222,
        23,
        27,
        215,
        48
      ]
    },
    {
      "name": "lpPosition",
      "discriminator": [
        105,
        241,
        37,
        200,
        224,
        2,
        252,
        90
      ]
    },
    {
      "name": "marginAccount",
      "discriminator": [
        133,
        220,
        173,
        213,
        179,
        211,
        43,
        238
      ]
    },
    {
      "name": "market",
      "discriminator": [
        219,
        190,
        213,
        55,
        0,
        227,
        198,
        154
      ]
    },
    {
      "name": "settlementRequest",
      "discriminator": [
        140,
        131,
        219,
        225,
        201,
        122,
        84,
        250
      ]
    }
  ],
  "events": [
    {
      "name": "acceptAdminEvent",
      "discriminator": [
        214,
        86,
        179,
        243,
        233,
        242,
        142,
        170
      ]
    },
    {
      "name": "addOracleConfigEvent",
      "discriminator": [
        28,
        130,
        142,
        47,
        191,
        111,
        140,
        233
      ]
    },
    {
      "name": "collectProtocolFeesEvent",
      "discriminator": [
        138,
        239,
        63,
        34,
        151,
        127,
        184,
        58
      ]
    },
    {
      "name": "createExchangeEvent",
      "discriminator": [
        8,
        136,
        64,
        232,
        86,
        62,
        200,
        47
      ]
    },
    {
      "name": "nominateAdminEvent",
      "discriminator": [
        153,
        248,
        199,
        130,
        78,
        136,
        12,
        251
      ]
    },
    {
      "name": "removeOracleConfigEvent",
      "discriminator": [
        52,
        22,
        216,
        248,
        91,
        237,
        235,
        227
      ]
    },
    {
      "name": "setAuthorizedProtocolFeesCollectorEvent",
      "discriminator": [
        9,
        172,
        59,
        143,
        121,
        78,
        14,
        68
      ]
    },
    {
      "name": "setAuthorizedSettlerEvent",
      "discriminator": [
        16,
        221,
        121,
        101,
        94,
        253,
        218,
        149
      ]
    },
    {
      "name": "setExchangeLiquidationSettingsEvent",
      "discriminator": [
        57,
        108,
        21,
        22,
        167,
        210,
        90,
        127
      ]
    },
    {
      "name": "setLockedOiSettingsEvent",
      "discriminator": [
        74,
        166,
        21,
        116,
        26,
        158,
        128,
        243
      ]
    },
    {
      "name": "setMaxKeeperTipRateEvent",
      "discriminator": [
        254,
        52,
        211,
        219,
        97,
        98,
        88,
        210
      ]
    },
    {
      "name": "setMinLpDurationEvent",
      "discriminator": [
        44,
        175,
        70,
        183,
        229,
        216,
        1,
        17
      ]
    },
    {
      "name": "setProtocolFeeRateEvent",
      "discriminator": [
        82,
        183,
        160,
        206,
        56,
        180,
        196,
        21
      ]
    },
    {
      "name": "setSettlementDelayEvent",
      "discriminator": [
        171,
        254,
        36,
        96,
        101,
        38,
        108,
        21
      ]
    },
    {
      "name": "updateExchangeStatusEvent",
      "discriminator": [
        1,
        210,
        234,
        193,
        80,
        211,
        182,
        32
      ]
    },
    {
      "name": "closeMarketEvent",
      "discriminator": [
        185,
        129,
        244,
        21,
        39,
        125,
        28,
        54
      ]
    },
    {
      "name": "createMarketEvent",
      "discriminator": [
        192,
        85,
        193,
        210,
        137,
        36,
        225,
        173
      ]
    },
    {
      "name": "setFeeRatesEvent",
      "discriminator": [
        196,
        56,
        205,
        21,
        204,
        151,
        247,
        77
      ]
    },
    {
      "name": "setFundingSettingsEvent",
      "discriminator": [
        226,
        50,
        240,
        181,
        229,
        118,
        86,
        224
      ]
    },
    {
      "name": "setMarketLiquidationSettingsEvent",
      "discriminator": [
        238,
        89,
        39,
        27,
        252,
        150,
        99,
        79
      ]
    },
    {
      "name": "setMaxSideSizeEvent",
      "discriminator": [
        203,
        172,
        164,
        152,
        134,
        245,
        8,
        50
      ]
    },
    {
      "name": "setPriceFeedEvent",
      "discriminator": [
        94,
        196,
        13,
        244,
        49,
        6,
        90,
        199
      ]
    },
    {
      "name": "updateMarketStatusEvent",
      "discriminator": [
        20,
        131,
        214,
        228,
        104,
        228,
        116,
        125
      ]
    },
    {
      "name": "refreshLockedOiAccountingEvent",
      "discriminator": [
        99,
        100,
        157,
        133,
        161,
        103,
        135,
        152
      ]
    },
    {
      "name": "addLiquidityEvent",
      "discriminator": [
        27,
        178,
        153,
        186,
        47,
        196,
        140,
        45
      ]
    },
    {
      "name": "closeLpAccountEvent",
      "discriminator": [
        25,
        249,
        102,
        154,
        167,
        112,
        77,
        116
      ]
    },
    {
      "name": "createLpAccountEvent",
      "discriminator": [
        157,
        67,
        155,
        31,
        125,
        251,
        249,
        26
      ]
    },
    {
      "name": "removeLiquidityEvent",
      "discriminator": [
        141,
        199,
        182,
        123,
        159,
        94,
        215,
        102
      ]
    },
    {
      "name": "setLpAccountDelegateEvent",
      "discriminator": [
        204,
        138,
        140,
        104,
        46,
        179,
        18,
        223
      ]
    },
    {
      "name": "upgradeLpAccountEvent",
      "discriminator": [
        136,
        222,
        178,
        80,
        210,
        241,
        31,
        128
      ]
    },
    {
      "name": "addLiquidityV2Event",
      "discriminator": [
        229,
        32,
        45,
        129,
        91,
        87,
        192,
        71
      ]
    },
    {
      "name": "closeLpPositionEvent",
      "discriminator": [
        29,
        15,
        201,
        144,
        224,
        50,
        119,
        28
      ]
    },
    {
      "name": "removeLiquidityV2Event",
      "discriminator": [
        113,
        152,
        216,
        178,
        113,
        218,
        165,
        65
      ]
    },
    {
      "name": "closeMarginAccountEvent",
      "discriminator": [
        240,
        206,
        96,
        249,
        63,
        171,
        143,
        51
      ]
    },
    {
      "name": "createMarginAccountEvent",
      "discriminator": [
        26,
        216,
        96,
        107,
        235,
        169,
        25,
        14
      ]
    },
    {
      "name": "depositMarginEvent",
      "discriminator": [
        181,
        219,
        31,
        12,
        86,
        251,
        6,
        11
      ]
    },
    {
      "name": "liquidateEventV2",
      "discriminator": [
        192,
        76,
        32,
        249,
        54,
        55,
        196,
        21
      ]
    },
    {
      "name": "liquidateEvent",
      "discriminator": [
        158,
        94,
        144,
        4,
        147,
        52,
        5,
        255
      ]
    },
    {
      "name": "modifyPositionEvent",
      "discriminator": [
        45,
        62,
        138,
        1,
        254,
        207,
        234,
        180
      ]
    },
    {
      "name": "setMarginAccountDelegateEvent",
      "discriminator": [
        132,
        125,
        19,
        71,
        194,
        35,
        152,
        95
      ]
    },
    {
      "name": "withdrawMarginEvent",
      "discriminator": [
        68,
        99,
        78,
        113,
        211,
        11,
        225,
        145
      ]
    },
    {
      "name": "processSettlementRequestsEvent",
      "discriminator": [
        36,
        115,
        143,
        25,
        115,
        44,
        201,
        14
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "integerOverflow",
      "msg": "Integer overflow"
    },
    {
      "code": 6001,
      "name": "divideByZero",
      "msg": "Divide by zero"
    },
    {
      "code": 6002,
      "name": "unsupportedPow10",
      "msg": "Unsupported power of 10. Exponent is too large"
    },
    {
      "code": 6003,
      "name": "bigIntegerConversionError",
      "msg": "Big integer conversion error"
    },
    {
      "code": 6004,
      "name": "integerConversionError",
      "msg": "Integer conversion error"
    },
    {
      "code": 6005,
      "name": "tokenAccountMintMismatch",
      "msg": "Mismatch between token account's mint and source account's mint"
    },
    {
      "code": 6006,
      "name": "exchangeMismatch",
      "msg": "Account's exchange does not match provided exchange"
    },
    {
      "code": 6007,
      "name": "adminMismatch",
      "msg": "Exchange's admin does not match provided admin"
    },
    {
      "code": 6008,
      "name": "nominatedAdminMismatch",
      "msg": "Exchange's nominated admin does not match provided nominated admin"
    },
    {
      "code": 6009,
      "name": "marginAccountMismatch",
      "msg": "Position's margin account does not match provided margin account"
    },
    {
      "code": 6010,
      "name": "marketMismatch",
      "msg": "Position's market does not match provided market"
    },
    {
      "code": 6011,
      "name": "priceFeedMismatch",
      "msg": "Market's price feed does not match provided price feed"
    },
    {
      "code": 6012,
      "name": "marginAccountOwnerMismatch",
      "msg": "Marign account's owner does not match provided owner"
    },
    {
      "code": 6013,
      "name": "lpAccountOwnerMismatch",
      "msg": "LP account's owner does not match provided owner"
    },
    {
      "code": 6014,
      "name": "lpPositionOwnerMismatch",
      "msg": "LP position's owner does not match provided owner"
    },
    {
      "code": 6015,
      "name": "marketIdsIsFull",
      "msg": "Exchange market ids array is full"
    },
    {
      "code": 6016,
      "name": "cannotFindMarketId",
      "msg": "Cannot find market id in exchange market ids array"
    },
    {
      "code": 6017,
      "name": "invalidSettlementDelay",
      "msg": "Invalid settlement delay"
    },
    {
      "code": 6018,
      "name": "invalidMinLpDuration",
      "msg": "Invalid minimum LP duration"
    },
    {
      "code": 6019,
      "name": "invalidProtocolFeeRate",
      "msg": "Invalid protocol fee rate"
    },
    {
      "code": 6020,
      "name": "invalidLiquidationFeeBounds",
      "msg": "Invalid exchange liquidation fee bounds. Minimum must be less than maximum fee"
    },
    {
      "code": 6021,
      "name": "invalidExchangeLiquidaitonSettingsUpdate",
      "msg": "Invalid exchange liquidation settings params. No update provided"
    },
    {
      "code": 6022,
      "name": "invalidMaxKeeperFeeRate",
      "msg": "Invalid max keeper fee rate"
    },
    {
      "code": 6023,
      "name": "oracleAlreadyAddedToExchange",
      "msg": "Oracle is already added to exchange"
    },
    {
      "code": 6024,
      "name": "exchangeOraclesListFull",
      "msg": "Exchange's oracle list is full"
    },
    {
      "code": 6025,
      "name": "invalidOracleProgram",
      "msg": "Invalid oracle program. Cannot find oracle program in exchange's list"
    },
    {
      "code": 6026,
      "name": "unsupportedOracle",
      "msg": "Unsupported oracle"
    },
    {
      "code": 6027,
      "name": "cannotNominateCurrentAdmin",
      "msg": "Cannot nominate current admin"
    },
    {
      "code": 6028,
      "name": "collateralAmountLessThanExchangeBalance",
      "msg": "Collateral amount less than exchange balance"
    },
    {
      "code": 6029,
      "name": "invalidLockedOpenInterestStalenessThreshold",
      "msg": "Locked open interest staleness threshold exceeds max value"
    },
    {
      "code": 6030,
      "name": "invalidLockedOpenInterestRatio",
      "msg": "Locked open interest ratio must exceed zero"
    },
    {
      "code": 6031,
      "name": "cannotCloseMarket",
      "msg": "Cannot close market account"
    },
    {
      "code": 6032,
      "name": "invalidTradeFeeRates",
      "msg": "Invalid trade fee rates"
    },
    {
      "code": 6033,
      "name": "invalidTradeFeeRatesUpdate",
      "msg": "Invalid trade fee rates update. No update provided"
    },
    {
      "code": 6034,
      "name": "newMaxSizeLessThanTotal",
      "msg": "New max size is less than the market's current size"
    },
    {
      "code": 6035,
      "name": "invalidMarketLiquidationSettingsUpdate",
      "msg": "Invalid market liquidation settings update. No update provided"
    },
    {
      "code": 6036,
      "name": "invalidFundingSettingsUpdate",
      "msg": "Invalid funding settings update. No update provided"
    },
    {
      "code": 6037,
      "name": "invalidMaxSideSizeUpdate",
      "msg": "Invalid max side size update"
    },
    {
      "code": 6038,
      "name": "lockedOpenInterestAccountingisStale",
      "msg": "Locked open interest accounting is stale"
    },
    {
      "code": 6039,
      "name": "invalidCollateralVault",
      "msg": "Mismatch between exchange's collateral vault and provided collateral vault"
    },
    {
      "code": 6040,
      "name": "invalidExchangeStatus",
      "msg": "Invalid exchange status"
    },
    {
      "code": 6041,
      "name": "depositMarginPaused",
      "msg": "Deposit margin paused"
    },
    {
      "code": 6042,
      "name": "withdrawMarginPaused",
      "msg": "Withdraw margin paused"
    },
    {
      "code": 6043,
      "name": "addLiquidityPaused",
      "msg": "Add liquidity paused"
    },
    {
      "code": 6044,
      "name": "removeLiquidityPaused",
      "msg": "Remove liquidity paused"
    },
    {
      "code": 6045,
      "name": "increasePositionPausedExchange",
      "msg": "Increase position paused on exchange"
    },
    {
      "code": 6046,
      "name": "decreasePositionPausedExchange",
      "msg": "Decrease position paused on exchange"
    },
    {
      "code": 6047,
      "name": "liquidatePaused",
      "msg": "Liquidate paused"
    },
    {
      "code": 6048,
      "name": "processSettlementRequestsPaused",
      "msg": "Process settlement requests paused"
    },
    {
      "code": 6049,
      "name": "cannotFindOracleConfig",
      "msg": "Cannot find oracle config in oracle configs map"
    },
    {
      "code": 6050,
      "name": "marginIncreaseExceedsExchangeBalance",
      "msg": "Margin increase is greater than or equal to the exchange's balance"
    },
    {
      "code": 6051,
      "name": "liquidityRemovalExceedsExchangeBalance",
      "msg": "Liquidity removal is greater than the exchange's balance"
    },
    {
      "code": 6052,
      "name": "invalidProtocolFeesCollector",
      "msg": "Protocol fees collector must be exchange admin or authorized protocol fees collector"
    },
    {
      "code": 6053,
      "name": "invalidMarketId",
      "msg": "Invalid market id. Market id must exceed 0"
    },
    {
      "code": 6054,
      "name": "invalidMarketStatus",
      "msg": "Invalid market status"
    },
    {
      "code": 6055,
      "name": "increasePositionPausedMarket",
      "msg": "Increase position paused on market"
    },
    {
      "code": 6056,
      "name": "decreasePositionPausedMarket",
      "msg": "Decrease position paused on market"
    },
    {
      "code": 6057,
      "name": "insufficientExchangeBalance",
      "msg": "Insufficient exchange balance after liquidity removal or position modification"
    },
    {
      "code": 6058,
      "name": "minLpDurationNotElapsed",
      "msg": "Minimum LP duration has not elapsed"
    },
    {
      "code": 6059,
      "name": "addLiquidityInputAmountMustExceedZero",
      "msg": "Add liquidity input amount must exceed zero"
    },
    {
      "code": 6060,
      "name": "addLiquidityLpSharesCreatedMustExceedZero",
      "msg": "Add liquidity lp shares created must exceed zero"
    },
    {
      "code": 6061,
      "name": "removeLiquidityInputSharesExceedsLpAccountSharesBalance",
      "msg": "Remove liquidity input shares exceeds LP account's shares balance"
    },
    {
      "code": 6062,
      "name": "removeLiquidityInputSharesExceedsLpPositionSharesBalance",
      "msg": "Remove liquidity input shares exceeds LP position's shares balance"
    },
    {
      "code": 6063,
      "name": "removeLiquidityInputSharesMustExceedZero",
      "msg": "Remove liquidity input shares must exceed zero"
    },
    {
      "code": 6064,
      "name": "removeLiquidityRemovedAmountMustExceedZero",
      "msg": "Remove liquidity removed amount must exceed zero"
    },
    {
      "code": 6065,
      "name": "invalidLpAccountSigner",
      "msg": "Invalid LP account signer"
    },
    {
      "code": 6066,
      "name": "cannotCloseLpAccount",
      "msg": "Cannot close LP account with non-zero shares balance"
    },
    {
      "code": 6067,
      "name": "cannotUpgradeLpAccount",
      "msg": "Cannot upgrade LP account with zero shares balance. Close LP account using close_lp_account instruction"
    },
    {
      "code": 6068,
      "name": "cannotCloseLpPosition",
      "msg": "Cannot close LP position with non-zero shares balance"
    },
    {
      "code": 6069,
      "name": "cannotCloseMarginAccount",
      "msg": "Cannot close margin account with non-zero balance and/or open positions"
    },
    {
      "code": 6070,
      "name": "positionListIsFull",
      "msg": "Margin account's position list is full"
    },
    {
      "code": 6071,
      "name": "positionNotFound",
      "msg": "Position not found in margin account's position list"
    },
    {
      "code": 6072,
      "name": "invalidMarginAccountSigner",
      "msg": "Invalid margin account signer"
    },
    {
      "code": 6073,
      "name": "marketsListIsFull",
      "msg": "Margin account's markets list is full"
    },
    {
      "code": 6074,
      "name": "marketNotFound",
      "msg": "Market not found in margin account's markets list"
    },
    {
      "code": 6075,
      "name": "marketSizeExceedsMaxSize",
      "msg": "Market size exceeds max size"
    },
    {
      "code": 6076,
      "name": "unacceptableFillPrice",
      "msg": "Unacceptable fill price"
    },
    {
      "code": 6077,
      "name": "insufficientMargin",
      "msg": "Insufficient margin"
    },
    {
      "code": 6078,
      "name": "insufficientMarginForFee",
      "msg": "Insufficient margin for trade fee"
    },
    {
      "code": 6079,
      "name": "marginAccountIsNotLiquidatable",
      "msg": "Margin account is not liquidatable"
    },
    {
      "code": 6080,
      "name": "marginAccountIsNotInLiquidation",
      "msg": "Margin account is not in liquidation"
    },
    {
      "code": 6081,
      "name": "cannotModifyCollateralForLiquidatableMarginAccount",
      "msg": "Cannot modify collateral for a liquidatable margin account"
    },
    {
      "code": 6082,
      "name": "cannotModifyCollateralForAccountInLiquidation",
      "msg": "Cannot modify collateral for a margin account in liquidatable"
    },
    {
      "code": 6083,
      "name": "noExcessMarginForWithdrawal",
      "msg": "No excess margin available for withdrawal"
    },
    {
      "code": 6084,
      "name": "insufficientMarginForRequestedWithdrawalAmount",
      "msg": "Insufficient excess margin for requested withdrawal amount"
    },
    {
      "code": 6085,
      "name": "cannotModifyPositionOfLiquidatableMarginAccount",
      "msg": "Cannot modify a position of a liquidatable margin account"
    },
    {
      "code": 6086,
      "name": "cannotModifyPositionOfMarginAccountInLiquidation",
      "msg": "Cannot modify a position belonging to a margin account that is in liquidation"
    },
    {
      "code": 6087,
      "name": "modifyMarginAmountMustExceedZero",
      "msg": "Modify margin amount must exceed zero"
    },
    {
      "code": 6088,
      "name": "insufficientMarginForRequirementAfterModification",
      "msg": "Insufficient margin to cover requirement after position modification"
    },
    {
      "code": 6089,
      "name": "marginAccountLiquidatableAfterModification",
      "msg": "Margin account is liquidatable after position modification"
    },
    {
      "code": 6090,
      "name": "positionModificationSizeCannotBeZero",
      "msg": "Position modification size cannot be zero"
    },
    {
      "code": 6091,
      "name": "duplicateMarket",
      "msg": "Duplicate market account in remaining accounts"
    },
    {
      "code": 6092,
      "name": "duplicateTokenAccount",
      "msg": "Duplicate token account in remaining accounts"
    },
    {
      "code": 6093,
      "name": "duplicateSettlementRequest",
      "msg": "Duplicate settlement request account in remaining accounts"
    },
    {
      "code": 6094,
      "name": "duplicateSettlementRequestOwner",
      "msg": "Duplicate settlement request owner account in remaining accounts"
    },
    {
      "code": 6095,
      "name": "marketNotWritable",
      "msg": "Market is not writable"
    },
    {
      "code": 6096,
      "name": "positionNotWritable",
      "msg": "Position is not writable"
    },
    {
      "code": 6097,
      "name": "settlementRequestExchangeMismatch",
      "msg": "Settlment request's exchange id does not match instruction's exchange id"
    },
    {
      "code": 6098,
      "name": "settlementRequestNotWritable",
      "msg": "Settlment request is not writable"
    },
    {
      "code": 6099,
      "name": "settlementRequestOwnerNotWritable",
      "msg": "Settlment request owner is not writable"
    },
    {
      "code": 6100,
      "name": "tokenAccountNotWritable",
      "msg": "Token account is not writable"
    },
    {
      "code": 6101,
      "name": "failedToLoadMarket",
      "msg": "Failed to load market account"
    },
    {
      "code": 6102,
      "name": "failedToLoadTokenAccount",
      "msg": "Failed to load token account"
    },
    {
      "code": 6103,
      "name": "failedToLoadSettlementRequest",
      "msg": "Failed to load settlement request"
    },
    {
      "code": 6104,
      "name": "marketAccountBorrowFailed",
      "msg": "Failed to borrow market account data"
    },
    {
      "code": 6105,
      "name": "settlementRequestAccountBorrowFailed",
      "msg": "Failed to borrow settlement request account data"
    },
    {
      "code": 6106,
      "name": "ownerNotFoundInAccountMap",
      "msg": "Owner not found in account map"
    },
    {
      "code": 6107,
      "name": "tokenAccountNotFoundInAccountMap",
      "msg": "Token account not found in account map"
    },
    {
      "code": 6108,
      "name": "priceFeedNotFoundInAccountMap",
      "msg": "Price feed not found in account map"
    },
    {
      "code": 6109,
      "name": "marketNotFoundInAccountMap",
      "msg": "Market not found in account map"
    },
    {
      "code": 6110,
      "name": "settlementRequestNotReachedMaturity",
      "msg": "Settlement request has not reached maturity"
    },
    {
      "code": 6111,
      "name": "invalidOracleKind",
      "msg": "Invalid oracle kind"
    },
    {
      "code": 6112,
      "name": "pythPriceAccountBorrowFailed",
      "msg": "Failed to borrow pyth price account data"
    },
    {
      "code": 6113,
      "name": "failedToLoadPythPriceAccount",
      "msg": "Failed to load pyth price account"
    },
    {
      "code": 6114,
      "name": "pythPriceFeedIsStale",
      "msg": "Price feed is stale"
    },
    {
      "code": 6115,
      "name": "invalidPythPriceFeedConfidence",
      "msg": "Invalid pyth price feed confidence"
    },
    {
      "code": 6116,
      "name": "pythPriceMustBeGreaterThanZero",
      "msg": "Pyth price must be greater than zero"
    },
    {
      "code": 6117,
      "name": "pythEmaPriceMustBeGreaterThanZero",
      "msg": "Pyth Ema price must be greater than zero"
    },
    {
      "code": 6118,
      "name": "invalidPythStatus",
      "msg": "Invalid pyth status"
    },
    {
      "code": 6119,
      "name": "safeUnwrapPanicked",
      "msg": "Assumed safe unwrap panicked"
    },
    {
      "code": 6120,
      "name": "addLiquidityDeprecated",
      "msg": "add_liquidity instruction is deprecated. Use add_liquidity_v2"
    },
    {
      "code": 6121,
      "name": "removeLiquidityDeprecated",
      "msg": "remove_liquidity instruction is deprecated. Use remove_liquidity_v2"
    },
    {
      "code": 6122,
      "name": "createLpAccountDeprecated",
      "msg": "create_lp_account instruction is deprecated"
    },
    {
      "code": 6123,
      "name": "setLpAccountDelegateDeprecated",
      "msg": "set_lp_account_delegate instruction is deprecated"
    },
    {
      "code": 6124,
      "name": "pythV2PriceMessageIsStale",
      "msg": "Pyth v2 price message is stale"
    },
    {
      "code": 6125,
      "name": "pythV2InsufficientVerificationLevel",
      "msg": "Pyth v2 price feed has insufficient verification level"
    }
  ],
  "types": [
    {
      "name": "exchangeUpdateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "balance",
            "type": "u64"
          },
          {
            "name": "marginBalance",
            "type": "u64"
          },
          {
            "name": "lpBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "marketUpdateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "indexPrice",
            "type": "u64"
          },
          {
            "name": "size",
            "type": "u128"
          },
          {
            "name": "skew",
            "type": "i128"
          },
          {
            "name": "sizeDelta",
            "type": "i128"
          },
          {
            "name": "fundingRate",
            "type": "i128"
          },
          {
            "name": "fundingPerUnit",
            "type": "i128"
          },
          {
            "name": "fundingVelocity",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "addOracleConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oracleKind",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "createExchangeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "settlementDelay",
            "type": "u64"
          },
          {
            "name": "minLpDuration",
            "type": "u64"
          },
          {
            "name": "minLiquidationFee",
            "type": "u64"
          },
          {
            "name": "maxLiquidationFee",
            "type": "u64"
          },
          {
            "name": "lockedOpenInterestStalenessThreshold",
            "type": "u64"
          },
          {
            "name": "lockedOpenInterestRatio",
            "type": "u16"
          },
          {
            "name": "maxKeeperTipRate",
            "type": "u16"
          },
          {
            "name": "protocolFeeRate",
            "type": "u16"
          },
          {
            "name": "authorizedSettler",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "authorizedProtocolFeesCollector",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "setExchangeLiquidationSettingsParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minLiquidationFee",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "maxLiquidationFee",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "setLockedOiSettingsParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lockedOpenInterestStalenessThreshold",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "lockedOpenInterestRatio",
            "type": {
              "option": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "setMaxKeeperTipRateParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxKeeperTipRate",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "setMinLpDurationParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minLpDuration",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setProtocolFeeRateParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "protocolFeeRate",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "setSettlementDelayParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "settlementDelay",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "updateExchangeStatusParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "status",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "createMarketParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "minPositionMargin",
            "type": "u128"
          },
          {
            "name": "maxLiquidationLimitAccumulationMultiplier",
            "type": "u64"
          },
          {
            "name": "skewScale",
            "type": "u128"
          },
          {
            "name": "maxSideSize",
            "type": "u128"
          },
          {
            "name": "maxSecondsInLiquidationEpoch",
            "type": "u64"
          },
          {
            "name": "initialMarginRatio",
            "type": "u32"
          },
          {
            "name": "makerFeeRate",
            "type": "u16"
          },
          {
            "name": "takerFeeRate",
            "type": "u16"
          },
          {
            "name": "liquidationFeeRate",
            "type": "u16"
          },
          {
            "name": "maxFundingVelocity",
            "type": "u16"
          },
          {
            "name": "minInitialMarginRatio",
            "type": "u16"
          },
          {
            "name": "maintenanceMarginProportion",
            "type": "u16"
          },
          {
            "name": "maxLiquidationPd",
            "type": "u16"
          },
          {
            "name": "authorizedLiquidator",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "setFeeRatesParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "makerFeeRate",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "takerFeeRate",
            "type": {
              "option": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "setFundingSettingsParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "skewScale",
            "type": {
              "option": "u128"
            }
          },
          {
            "name": "maxFundingVelocity",
            "type": {
              "option": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "setMarketLiquidationSettingsParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minPositionMargin",
            "type": {
              "option": "u128"
            }
          },
          {
            "name": "maxLiquidationLimitAccumulationMultiplier",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "maxSecondsInLiquidationEpoch",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "initialMarginRatio",
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "liquidationFeeRate",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "minInitialMarginRatio",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "maintenanceMarginProportion",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "maxLiquidationPd",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "authorizedLiquidator",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "setMaxSideSizeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxSideSize",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "updateMarketStatusParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "status",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "addLiquidityParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "liquidity",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "removeLiquidityParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "settlementRequestId",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "keeperTip",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setLpAccountDelegateParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "delegate",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "upgradeLpAccountParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpPositionId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "addLiquidityV2Params",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "liquidity",
            "type": "u64"
          },
          {
            "name": "lpPositionId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "removeLiquidityV2Params",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "settlementRequestId",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "keeperTip",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "createMarginAccountParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marginAccountId",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "depositMarginParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "margin",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "liquidationEventV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "amountLiquidated",
            "type": "u128"
          },
          {
            "name": "newPositionSize",
            "type": "i128"
          },
          {
            "name": "sizeDelta",
            "type": "i128"
          },
          {
            "name": "indexPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "startLiquidationEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "liquidatedMargin",
            "type": "u64"
          },
          {
            "name": "liquidationStartedAt",
            "type": "u64"
          },
          {
            "name": "maxLiquidationFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "liquidationEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "amountLiquidated",
            "type": "u128"
          },
          {
            "name": "newPositionSize",
            "type": "i128"
          },
          {
            "name": "sizeDelta",
            "type": "i128"
          },
          {
            "name": "indexPrice",
            "type": "u64"
          },
          {
            "name": "size",
            "type": "u128"
          },
          {
            "name": "skew",
            "type": "i128"
          },
          {
            "name": "fundingRate",
            "type": "i128"
          },
          {
            "name": "fundingPerUnit",
            "type": "i128"
          },
          {
            "name": "fundingVelocity",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "liquidateParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isFullLiquidation",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "modifyPositionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "sizeDelta",
            "type": "i128"
          },
          {
            "name": "acceptablePrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setMarginAccountDelegateParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "delegate",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "withdrawMarginParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "settlementRequestId",
            "type": "u64"
          },
          {
            "name": "margin",
            "type": "u64"
          },
          {
            "name": "keeperTip",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "processSettlementRequestEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "requestId",
            "type": "u64"
          },
          {
            "name": "payer",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "keeperTip",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "getFillPriceParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sizeDelta",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "marginsClient",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "availableMargin",
            "type": "i128"
          },
          {
            "name": "requiredInitialMargin",
            "type": "u64"
          },
          {
            "name": "requiredMaintenanceMargin",
            "type": "u64"
          },
          {
            "name": "requiredLiquidationFeeMargin",
            "type": "u64"
          },
          {
            "name": "accumulatedLiquidationFees",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "getTradeFeeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sizeDelta",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "exchangeAccounting",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "notionalOpenInterest",
            "type": "u128"
          },
          {
            "name": "unrealizedPnl",
            "type": "i128"
          },
          {
            "name": "lastTimeLockedOpenInterestAccountingRefreshed",
            "type": "u64"
          },
          {
            "name": "balance",
            "type": "u64"
          },
          {
            "name": "marginBalance",
            "type": "u64"
          },
          {
            "name": "lpBalance",
            "type": "u64"
          },
          {
            "name": "lpShares",
            "type": "u64"
          },
          {
            "name": "protocolFees",
            "type": "u64"
          },
          {
            "name": "unsettledCollateralAmount",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "exchangeSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minLpDuration",
            "type": "u64"
          },
          {
            "name": "settlementDelay",
            "type": "u64"
          },
          {
            "name": "minLiquidationFee",
            "type": "u64"
          },
          {
            "name": "maxLiquidationFee",
            "type": "u64"
          },
          {
            "name": "lockedOpenInterestStalenessThreshold",
            "type": "u64"
          },
          {
            "name": "protocolFeeRate",
            "type": "u16"
          },
          {
            "name": "lockedOpenInterestRatio",
            "type": "u16"
          },
          {
            "name": "maxKeeperTipRate",
            "type": "u16"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          }
        ]
      }
    },
    {
      "name": "exchangeOracleConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "kind",
            "type": "u32"
          },
          {
            "name": "programId",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "position",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "size",
            "type": "i128"
          },
          {
            "name": "lastInteractionPrice",
            "type": "u128"
          },
          {
            "name": "lastInteractionFundingPerUnit",
            "type": "i128"
          },
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "marketAccounting",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "weightedPositionPrice",
            "type": "u128"
          },
          {
            "name": "lastUtilizedLiquidationCapacity",
            "type": "u128"
          },
          {
            "name": "size",
            "type": "u128"
          },
          {
            "name": "skew",
            "type": "i128"
          },
          {
            "name": "weightedPositionFundingPerUnit",
            "type": "i128"
          },
          {
            "name": "lastFundingRate",
            "type": "i128"
          },
          {
            "name": "lastFundingPerUnit",
            "type": "i128"
          },
          {
            "name": "lastTimeFundingUpdated",
            "type": "u64"
          },
          {
            "name": "firstLiquidationEpochStartTime",
            "type": "u64"
          },
          {
            "name": "lastLiquidationEpochIndex",
            "type": "u64"
          },
          {
            "name": "lastTimeLiquidationCapacityUpdated",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "marketSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minPositionMargin",
            "type": "u128"
          },
          {
            "name": "skewScale",
            "type": "u128"
          },
          {
            "name": "maxSideSize",
            "type": "u128"
          },
          {
            "name": "maxLiquidationLimitAccumulationMultiplier",
            "type": "u64"
          },
          {
            "name": "maxSecondsInLiquidationEpoch",
            "type": "u64"
          },
          {
            "name": "initialMarginRatio",
            "type": "u32"
          },
          {
            "name": "makerFeeRate",
            "type": "u16"
          },
          {
            "name": "takerFeeRate",
            "type": "u16"
          },
          {
            "name": "maxFundingVelocity",
            "type": "u16"
          },
          {
            "name": "liquidationFeeRate",
            "type": "u16"
          },
          {
            "name": "minInitialMarginRatio",
            "type": "u16"
          },
          {
            "name": "maintenanceMarginProportion",
            "type": "u16"
          },
          {
            "name": "maxLiquidationPd",
            "type": "u16"
          },
          {
            "name": "authorizedLiquidator",
            "type": "pubkey"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                14
              ]
            }
          }
        ]
      }
    },
    {
      "name": "writableMarkets",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "all"
          },
          {
            "name": "some",
            "fields": [
              "u32"
            ]
          },
          {
            "name": "none"
          }
        ]
      }
    },
    {
      "name": "positionModificationKind",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "isIncreasing"
          },
          {
            "name": "isDecreasing"
          },
          {
            "name": "isDecreasingAndIncreasing"
          }
        ]
      }
    },
    {
      "name": "sign",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "negative"
          },
          {
            "name": "positive"
          }
        ]
      }
    },
    {
      "name": "rounding",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "floor"
          },
          {
            "name": "ceil"
          },
          {
            "name": "none"
          }
        ]
      }
    },
    {
      "name": "exchangeStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "addLiquidityPaused"
          },
          {
            "name": "removeLiquidityPaused"
          },
          {
            "name": "depositMarginPaused"
          },
          {
            "name": "withdrawMarginPaused"
          },
          {
            "name": "increasePositionPaused"
          },
          {
            "name": "decreasePositionPaused"
          },
          {
            "name": "liquidatePaused"
          },
          {
            "name": "processSettlementRequestsPaused"
          }
        ]
      }
    },
    {
      "name": "marketStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "increasePositionPaused"
          },
          {
            "name": "decreasePositionPaused"
          }
        ]
      }
    },
    {
      "name": "oracleKind",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "pyth"
          },
          {
            "name": "parcl"
          },
          {
            "name": "pythV2"
          }
        ]
      }
    },
    {
      "name": "exchange",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "accounting",
            "type": {
              "defined": {
                "name": "exchangeAccounting"
              }
            }
          },
          {
            "name": "settings",
            "type": {
              "defined": {
                "name": "exchangeSettings"
              }
            }
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "marketIds",
            "type": {
              "array": [
                "u32",
                62
              ]
            }
          },
          {
            "name": "oracleConfigs",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "exchangeOracleConfig"
                  }
                },
                10
              ]
            }
          },
          {
            "name": "status",
            "type": "u16"
          },
          {
            "name": "collateralExpo",
            "type": "i16"
          },
          {
            "name": "collateralMint",
            "type": "pubkey"
          },
          {
            "name": "collateralVault",
            "type": "pubkey"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "nominatedAdmin",
            "type": "pubkey"
          },
          {
            "name": "authorizedSettler",
            "type": "pubkey"
          },
          {
            "name": "authorizedProtocolFeesCollector",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "idSeed",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                11
              ]
            }
          }
        ]
      }
    },
    {
      "name": "lpAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "liquidity",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "lastAddLiquidityTimestamp",
            "type": "u64"
          },
          {
            "name": "exchange",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "delegate",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "lpPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "liquidity",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "maturity",
            "type": "u64"
          },
          {
            "name": "exchange",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "marginAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positions",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "position"
                  }
                },
                12
              ]
            }
          },
          {
            "name": "margin",
            "type": "u64"
          },
          {
            "name": "maxLiquidationFee",
            "type": "u64"
          },
          {
            "name": "id",
            "type": "u32"
          },
          {
            "name": "exchange",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "delegate",
            "type": "pubkey"
          },
          {
            "name": "inLiquidation",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                10
              ]
            }
          }
        ]
      }
    },
    {
      "name": "market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "settings",
            "type": {
              "defined": {
                "name": "marketSettings"
              }
            }
          },
          {
            "name": "accounting",
            "type": {
              "defined": {
                "name": "marketAccounting"
              }
            }
          },
          {
            "name": "id",
            "type": "u32"
          },
          {
            "name": "exchange",
            "type": "pubkey"
          },
          {
            "name": "priceFeed",
            "type": "pubkey"
          },
          {
            "name": "status",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                10
              ]
            }
          }
        ]
      }
    },
    {
      "name": "settlementRequest",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "maturity",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "keeperTip",
            "type": "u64"
          },
          {
            "name": "exchange",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "ownerTokenAccount",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "acceptAdminEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "newAdmin",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "addOracleConfigEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "oracleProgram",
            "type": "pubkey"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "oracleKind",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "collectProtocolFeesEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "signer",
            "type": "pubkey"
          },
          {
            "name": "protocolFees",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "createExchangeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "minLpDuration",
            "type": "u64"
          },
          {
            "name": "settlementDelay",
            "type": "u64"
          },
          {
            "name": "minLiquidationFee",
            "type": "u64"
          },
          {
            "name": "maxLiquidationFee",
            "type": "u64"
          },
          {
            "name": "lockedOpenInterestStalenessThreshold",
            "type": "u64"
          },
          {
            "name": "lockedOpenInterestRatio",
            "type": "u16"
          },
          {
            "name": "maxKeeperTipRate",
            "type": "u16"
          },
          {
            "name": "protocolFeeRate",
            "type": "u16"
          },
          {
            "name": "authorizedSettler",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "authorizedProtocolFeesCollector",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "nominateAdminEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "nominatedAdmin",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "removeOracleConfigEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "oracleProgram",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "setAuthorizedProtocolFeesCollectorEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "authorizedProtocolFeesCollector",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "setAuthorizedSettlerEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "authorizedSettler",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "setExchangeLiquidationSettingsEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "minLiquidationFee",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "maxLiquidationFee",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "setLockedOiSettingsEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "lockedOpenInterestStalenessThreshold",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "lockedOpenInterestRatio",
            "type": {
              "option": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "setMaxKeeperTipRateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "maxKeeperTipRate",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "setMinLpDurationEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "minLpDuration",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setProtocolFeeRateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "protocolFeeRate",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "setSettlementDelayEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "settlementDelay",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "updateExchangeStatusEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "status",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "closeMarketEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "priceFeed",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "createMarketEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "priceFeed",
            "type": "pubkey"
          },
          {
            "name": "minPositionMargin",
            "type": "u128"
          },
          {
            "name": "maxLiquidationLimitAccumulationMultiplier",
            "type": "u64"
          },
          {
            "name": "skewScale",
            "type": "u128"
          },
          {
            "name": "maxSideSize",
            "type": "u128"
          },
          {
            "name": "maxSecondsInLiquidationEpoch",
            "type": "u64"
          },
          {
            "name": "initialMarginRatio",
            "type": "u32"
          },
          {
            "name": "makerFeeRate",
            "type": "u16"
          },
          {
            "name": "takerFeeRate",
            "type": "u16"
          },
          {
            "name": "liquidationFeeRate",
            "type": "u16"
          },
          {
            "name": "maxFundingVelocity",
            "type": "u16"
          },
          {
            "name": "minInitialMarginRatio",
            "type": "u16"
          },
          {
            "name": "maintenanceMarginProportion",
            "type": "u16"
          },
          {
            "name": "maxLiquidationPd",
            "type": "u16"
          },
          {
            "name": "authorizedLiquidator",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "setFeeRatesEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "makerFeeRate",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "takerFeeRate",
            "type": {
              "option": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "setFundingSettingsEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "skewScale",
            "type": {
              "option": "u128"
            }
          },
          {
            "name": "maxFundingVelocity",
            "type": {
              "option": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "setMarketLiquidationSettingsEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "minPositionMargin",
            "type": {
              "option": "u128"
            }
          },
          {
            "name": "maxLiquidationLimitAccumulationMultiplier",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "maxSecondsInLiquidationEpoch",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "initialMarginRatio",
            "type": {
              "option": "u32"
            }
          },
          {
            "name": "liquidationFeeRate",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "minInitialMarginRatio",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "maintenanceMarginProportion",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "maxLiquidationPd",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "authorizedLiquidator",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "setMaxSideSizeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "maxSideSize",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "setPriceFeedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "priceFeed",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "updateMarketStatusEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "status",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "refreshLockedOiAccountingEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "notionalOpenInterest",
            "type": "u128"
          },
          {
            "name": "unrealizedPnl",
            "type": "i128"
          }
        ]
      }
    },
    {
      "name": "addLiquidityEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "signer",
            "type": "pubkey"
          },
          {
            "name": "liquidity",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "exchangeLpBalance",
            "type": "u64"
          },
          {
            "name": "exchangeLpShares",
            "type": "u64"
          },
          {
            "name": "exchangeBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "closeLpAccountEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "createLpAccountEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "removeLiquidityEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "settlementRequestId",
            "type": "u64"
          },
          {
            "name": "liquidity",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "liquidityValue",
            "type": "u64"
          },
          {
            "name": "exchangeLpShares",
            "type": "u64"
          },
          {
            "name": "exchangeLpBalance",
            "type": "u64"
          },
          {
            "name": "exchangeBalance",
            "type": "u64"
          },
          {
            "name": "exchangeUnsettledCollateralAmount",
            "type": "u64"
          },
          {
            "name": "settlementRequestMaturity",
            "type": "u64"
          },
          {
            "name": "settlementRequestKeeperTip",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setLpAccountDelegateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "delegate",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "upgradeLpAccountEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "lpPositionId",
            "type": "u64"
          },
          {
            "name": "liquidity",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "maturity",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "addLiquidityV2Event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "lpPositionId",
            "type": "u64"
          },
          {
            "name": "liquidity",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "maturity",
            "type": "u64"
          },
          {
            "name": "exchangeLpBalancePre",
            "type": "u64"
          },
          {
            "name": "exchangeLpSharesPre",
            "type": "u64"
          },
          {
            "name": "exchangeBalancePre",
            "type": "u64"
          },
          {
            "name": "exchangeLpBalancePost",
            "type": "u64"
          },
          {
            "name": "exchangeLpSharesPost",
            "type": "u64"
          },
          {
            "name": "exchangeBalancePost",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "closeLpPositionEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "lpPositionId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "removeLiquidityV2Event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "lpPositionId",
            "type": "u64"
          },
          {
            "name": "settlementRequestId",
            "type": "u64"
          },
          {
            "name": "liquidity",
            "type": "u64"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "newLiquidityAmount",
            "type": "u64"
          },
          {
            "name": "newSharesAmount",
            "type": "u64"
          },
          {
            "name": "lpPositionMaturity",
            "type": "u64"
          },
          {
            "name": "liquidityValue",
            "type": "u64"
          },
          {
            "name": "exchangeLpBalancePre",
            "type": "u64"
          },
          {
            "name": "exchangeLpSharesPre",
            "type": "u64"
          },
          {
            "name": "exchangeBalancePre",
            "type": "u64"
          },
          {
            "name": "exchangeLpBalancePost",
            "type": "u64"
          },
          {
            "name": "exchangeLpSharesPost",
            "type": "u64"
          },
          {
            "name": "exchangeBalancePost",
            "type": "u64"
          },
          {
            "name": "exchangeUnsettledCollateralAmount",
            "type": "u64"
          },
          {
            "name": "settlementRequestMaturity",
            "type": "u64"
          },
          {
            "name": "settlementRequestKeeperTip",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "closeMarginAccountEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "marginAccountId",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "createMarginAccountEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "marginAccountId",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "depositMarginEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "marginAccountId",
            "type": "u32"
          },
          {
            "name": "signer",
            "type": "pubkey"
          },
          {
            "name": "depositedMargin",
            "type": "u64"
          },
          {
            "name": "exchangeMarginBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "liquidateEventV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "marginAccountId",
            "type": "u32"
          },
          {
            "name": "liquidator",
            "type": "pubkey"
          },
          {
            "name": "liquidatorMarginAccountId",
            "type": "u32"
          },
          {
            "name": "startLiquidationEvent",
            "type": {
              "option": {
                "defined": {
                  "name": "startLiquidationEvent"
                }
              }
            }
          },
          {
            "name": "liquidationFee",
            "type": "u64"
          },
          {
            "name": "liquidationEvents",
            "type": {
              "vec": {
                "defined": {
                  "name": "liquidationEventV2"
                }
              }
            }
          },
          {
            "name": "exchangeUpdateEvent",
            "type": {
              "defined": {
                "name": "exchangeUpdateEvent"
              }
            }
          }
        ]
      }
    },
    {
      "name": "liquidateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "marginAccountId",
            "type": "u32"
          },
          {
            "name": "liquidator",
            "type": "pubkey"
          },
          {
            "name": "liquidatorMarginAccountId",
            "type": "u32"
          },
          {
            "name": "startLiquidationEvent",
            "type": {
              "option": {
                "defined": {
                  "name": "startLiquidationEvent"
                }
              }
            }
          },
          {
            "name": "liquidationFee",
            "type": "u64"
          },
          {
            "name": "liquidationEvents",
            "type": {
              "vec": {
                "defined": {
                  "name": "liquidationEvent"
                }
              }
            }
          },
          {
            "name": "exchangeUpdateEvent",
            "type": {
              "defined": {
                "name": "exchangeUpdateEvent"
              }
            }
          }
        ]
      }
    },
    {
      "name": "modifyPositionEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "marginAccountId",
            "type": "u32"
          },
          {
            "name": "signer",
            "type": "pubkey"
          },
          {
            "name": "marketId",
            "type": "u32"
          },
          {
            "name": "fillPrice",
            "type": "u128"
          },
          {
            "name": "indexPrice",
            "type": "u64"
          },
          {
            "name": "pnl",
            "type": "i128"
          },
          {
            "name": "priceComponent",
            "type": "i128"
          },
          {
            "name": "accruedFunding",
            "type": "i128"
          },
          {
            "name": "sizeDelta",
            "type": "i128"
          },
          {
            "name": "newPositionSize",
            "type": "i128"
          },
          {
            "name": "lpFee",
            "type": "u64"
          },
          {
            "name": "protocolFee",
            "type": "u64"
          },
          {
            "name": "exchangeUpdateEvent",
            "type": {
              "defined": {
                "name": "exchangeUpdateEvent"
              }
            }
          },
          {
            "name": "marketUpdateEvent",
            "type": {
              "defined": {
                "name": "marketUpdateEvent"
              }
            }
          }
        ]
      }
    },
    {
      "name": "setMarginAccountDelegateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "marginAccountId",
            "type": "u32"
          },
          {
            "name": "delegate",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "withdrawMarginEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "exchangeId",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "settlementRequestId",
            "type": "u64"
          },
          {
            "name": "marginAccountId",
            "type": "u32"
          },
          {
            "name": "withdrawnMargin",
            "type": "u64"
          },
          {
            "name": "exchangeMarginBalance",
            "type": "u64"
          },
          {
            "name": "exchangeUnsettledCollateralAmount",
            "type": "u64"
          },
          {
            "name": "settlementRequestMaturity",
            "type": "u64"
          },
          {
            "name": "settlementRequestKeeperTip",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "processSettlementRequestsEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "events",
            "type": {
              "vec": {
                "defined": {
                  "name": "processSettlementRequestEvent"
                }
              }
            }
          }
        ]
      }
    }
  ]
};
