const routeMapping = {
  '/cadence': '/cadence/intro',
  '/flow': '/concepts/start-here',
  '/flow/core-contracts': '/cadence/core-contracts',
  '/flow/core-contracts/account-creation':
    '/cadence/core-contracts/account-creation',
  '/flow/core-contracts/epoch-contract-reference':
    '/cadence/core-contracts/epoch-contract-reference',
  '/flow/core-contracts/flow-fees': '/cadence/core-contracts/flow-fees',
  '/flow/core-contracts/flow-token': '/cadence/core-contracts/flow-token',
  '/flow/core-contracts/fungible-token':
    '/cadence/core-contracts/fungible-token',
  '/flow/core-contracts/locked-tokens': '/cadence/core-contracts/locked-tokens',
  '/flow/core-contracts/nft-metadata': '/cadence/core-contracts/nft-metadata',
  '/flow/core-contracts/nft-storefront':
    '/cadence/core-contracts/nft-storefront',
  '/flow/core-contracts/non-fungible-token':
    '/cadence/core-contracts/non-fungible-token',
  '/flow/core-contracts/service-account':
    '/cadence/core-contracts/service-account',
  '/flow/core-contracts/staking-collection':
    '/cadence/core-contracts/staking-collection',
  '/flow/core-contracts/staking-contract-reference':
    '/cadence/core-contracts/staking-contract-reference',
  '/flow/dapp-development': '/tutorials/intro',
  '/flow/dapp-development/contract-testing': '/tutorials/contract-testing',
  '/flow/dapp-development/dapp-infrastructure':
    '/tutorials/dapp-infrastructure',
  '/flow/dapp-development/DappArchitectures': '/tutorials/DappArchitectures',
  '/flow/dapp-development/deployment': '/tutorials/deployment',
  '/flow/dapp-development/flow-dapp-anatomy': '/tutorials/flow-dapp-anatomy',
  '/flow/dapp-development/fungible-tokens': '/tutorials/fungible-tokens',
  '/flow/dapp-development/in-dapp-payments': '/tutorials/in-dapp-payments',
  '/flow/dapp-development/mainnet-account-setup':
    '/tutorials/mainnet-account-setup',
  '/flow/dapp-development/mainnet-deployment': '/tutorials/mainnet-deployment',
  '/flow/dapp-development/NFT-drop-styles': '/tutorials/NFT-drop-styles',
  '/flow/dapp-development/smart-contracts': '/tutorials/smart-contracts',
  '/flow/dapp-development/testnet-deployment': '/tutorials/testnet-deployment',
  '/flow/dapp-development/testnet-testing': '/tutorials/testnet-testing',
  '/flow/dapp-development/user-accounts-and-wallets':
    '/tutorials/user-accounts-and-wallets',
  '/flow/developer-portal/contribution-guidelines':
    '/community-resources/developer-portal/contribution-guidelines',
  '/flow/developer-portal/portal-overview':
    '/community-resources/developer-portal/portal-overview',
  '/flow/faq/backers': '/concepts/nodes/faq/backers',
  '/flow/faq/developers': '/concepts/nodes/faq/developers',
  '/flow/faq/operators': '/concepts/nodes/faq/operators',
  '/flow/flow-ft/ExampleToken':
    '/concepts/token-standards/flow-ft/ExampleToken',
  '/flow/flow-ft/ExampleToken/ExampleToken_Administrator':
    '/concepts/token-standards/flow-ft/ExampleToken/ExampleToken_Administrator',
  '/flow/flow-ft/ExampleToken/ExampleToken_Burner':
    '/concepts/token-standards/flow-ft/ExampleToken/ExampleToken_Burner',
  '/flow/flow-ft/ExampleToken/ExampleToken_Minter':
    '/concepts/token-standards/flow-ft/ExampleToken/ExampleToken_Minter',
  '/flow/flow-ft/ExampleToken/ExampleToken_Vault':
    '/concepts/token-standards/flow-ft/ExampleToken/ExampleToken_Vault',
  '/flow/flow-ft/FungibleToken':
    '/concepts/token-standards/flow-ft/FungibleToken',
  '/flow/flow-ft/FungibleToken/FungibleToken_Balance':
    '/concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Balance',
  '/flow/flow-ft/FungibleToken/FungibleToken_Provider':
    '/concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Provider',
  '/flow/flow-ft/FungibleToken/FungibleToken_Receiver':
    '/concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Receiver',
  '/flow/flow-ft/FungibleToken/FungibleToken_Vault':
    '/concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Vault',
  '/flow/flow-ft/FungibleTokenMetadataViews':
    '/concepts/token-standards/flow-ft/FungibleTokenMetadataViews',
  '/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTDisplay':
    '/concepts/token-standards/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTDisplay',
  '/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTVaultData':
    '/concepts/token-standards/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTVaultData',
  '/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTView':
    '/concepts/token-standards/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTView',
  '/flow/flow-ft/FungibleTokenSwitchboard':
    '/concepts/token-standards/flow-ft/FungibleTokenSwitchboard',
  '/flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_Switchboard':
    '/concepts/token-standards/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_Switchboard',
  '/flow/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_SwitchboardPublic':
    '/concepts/token-standards/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_SwitchboardPublic',
  '/flow/flow-ft/overview': '/concepts/token-standards/flow-ft',
  '/flow/flow-nft/ExampleNFT': '/concepts/token-standards/flow-nft/ExampleNFT',
  '/flow/flow-nft/ExampleNFT/ExampleNFT_Collection':
    '/concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT_Collection',
  '/flow/flow-nft/ExampleNFT/ExampleNFT_ExampleNFTCollectionPublic':
    '/concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT_ExampleNFTCollectionPublic',
  '/flow/flow-nft/ExampleNFT/ExampleNFT_NFT':
    '/concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT_NFT',
  '/flow/flow-nft/ExampleNFT/ExampleNFT_NFTMinter':
    '/concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT_NFTMinter',
  '/flow/flow-nft/MetdataViews/MetadataViews':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews',
  '/flow/flow-nft/MetdataViews/MetadataViews_Display':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Display',
  '/flow/flow-nft/MetdataViews/MetadataViews_Edition':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Edition',
  '/flow/flow-nft/MetdataViews/MetadataViews_Editions':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Editions',
  '/flow/flow-nft/MetdataViews/MetadataViews_ExternalURL':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_ExternalURL',
  '/flow/flow-nft/MetdataViews/MetadataViews_File':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_File',
  '/flow/flow-nft/MetdataViews/MetadataViews_HTTPFile':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_HTTPFile',
  '/flow/flow-nft/MetdataViews/MetadataViews_IPFSFile':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_IPFSFile',
  '/flow/flow-nft/MetdataViews/MetadataViews_License':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_License',
  '/flow/flow-nft/MetdataViews/MetadataViews_Media':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Media',
  '/flow/flow-nft/MetdataViews/MetadataViews_Medias':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Medias',
  '/flow/flow-nft/MetdataViews/MetadataViews_NFTCollectionData':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_NFTCollectionData',
  '/flow/flow-nft/MetdataViews/MetadataViews_NFTCollectionDisplay':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_NFTCollectionDisplay',
  '/flow/flow-nft/MetdataViews/MetadataViews_NFTView':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_NFTView',
  '/flow/flow-nft/MetdataViews/MetadataViews_Rarity':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Rarity',
  '/flow/flow-nft/MetdataViews/MetadataViews_Resolver':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Resolver',
  '/flow/flow-nft/MetdataViews/MetadataViews_ResolverCollection':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_ResolverCollection',
  '/flow/flow-nft/MetdataViews/MetadataViews_Royalties':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Royalties',
  '/flow/flow-nft/MetdataViews/MetadataViews_Royalty':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Royalty',
  '/flow/flow-nft/MetdataViews/MetadataViews_Serial':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Serial',
  '/flow/flow-nft/MetdataViews/MetadataViews_Trait':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Trait',
  '/flow/flow-nft/MetdataViews/MetadataViews_Traits':
    '/concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Traits',
  '/flow/flow-nft/NonFungibleToken':
    '/concepts/token-standards/flow-nft/NonFungibleToken',
  '/flow/flow-nft/NonFungibleToken/NonFungibleToken_Collection':
    '/concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Collection',
  '/flow/flow-nft/NonFungibleToken/NonFungibleToken_CollectionPublic':
    '/concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_CollectionPublic',
  '/flow/flow-nft/NonFungibleToken/NonFungibleToken_INFT':
    '/concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_INFT',
  '/flow/flow-nft/NonFungibleToken/NonFungibleToken_NFT':
    '/concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_NFT',
  '/flow/flow-nft/NonFungibleToken/NonFungibleToken_Provider':
    '/concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Provider',
  '/flow/flow-nft/NonFungibleToken/NonFungibleToken_Receiver':
    '/concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Receiver',
  '/flow/flow-nft/overview': '/concepts/token-standards/flow-nft',
  '/flow/flow-token': '/concepts/flow-token',
  '/flow/flow-token/available-wallets':
    '/concepts/flow-token/available-wallets',
  // flow/flow-token/backers
  '/flow/flow-token/concepts': '/concepts/flow-token/concepts',
  '/flow/flow-token/delivery': '/concepts/flow-token/delivery',
  '/flow/flow-token/earn': '/concepts/flow-token/earn',
  '/flow/flow-token/faq': '/concepts/flow-token/faq',
  '/flow/flow-token/locked-account-setup':
    '/concepts/flow-token/locked-account-setup',
  // flow/flow-token/TODO
  '/flow/flow-token/wallets': '/concepts/flow-token/wallets',
  '/flow/fungible-tokens': '/concepts/token-standards/fungible-tokens',
  '/flow/nft-marketplace': '/tooling/nft-marketplace',
  '/flow/nft-marketplace/best-practices':
    '/tooling/nft-marketplace/best-practices',
  '/flow/nft-marketplace/building-blocks':
    '/tooling/nft-marketplace/building-blocks',
  '/flow/nft-marketplace/handling-accounts':
    '/tooling/nft-marketplace/handling-accounts',
  '/flow/nft-marketplace/minting-nfts': '/tooling/nft-marketplace/minting-nfts',
  '/flow/nft-marketplace/selling-nfts': '/tooling/nft-marketplace/selling-nfts',
  '/hybrid-custody': '/concepts/hybrid-custody',
  '/hybrid-custody/get-started': '/concepts/hybrid-custody/get-started',
  '/hybrid-custody/guides/account-abstraction':
    '/concepts/hybrid-custody/guides/account-abstraction',
  '/hybrid-custody/guides/account-model':
    '/concepts/hybrid-custody/guides/account-model',
  '/hybrid-custody/guides/linking-accounts':
    '/concepts/hybrid-custody/guides/linking-accounts',
  '/hybrid-custody/guides/walletless-onboarding':
    '/concepts/hybrid-custody/guides/walletless-onboarding',
  '/Learn/Concepts': '/concepts/intro',
  '/Learn/concepts/accessing-mainnet':
    '/concepts/flow-networks/accessing-mainnet',
  '/Learn/concepts/accessing-sandboxnet':
    '/concepts/flow-networks/accessing-sandboxnet',
  '/Learn/concepts/accessing-testnet':
    '/concepts/flow-networks/accessing-testnet',
  '/Learn/concepts/accounts-and-keys': '/concepts/start-here/accounts-and-keys',
  '/Learn/concepts/delegation': '/concepts/nodes/delegation',
  // Learn/concepts/fees
  '/Learn/concepts/governance': '/concepts/start-here/governance',
  '/Learn/concepts/networks': '/concepts/flow-networks',
  // Learn/concepts/service-account
  '/Learn/concepts/slashing': '/concepts/nodes/slashing',
  '/Learn/concepts/storage': '/concepts/start-here/storage',
  '/Learn/concepts/token-staking': '/concepts/nodes/token-staking',
  '/Learn/concepts/transaction-lifecycle':
    '/concepts/start-here/transaction-lifecycle',
  '/Learn/concepts/transaction-signing':
    '/concepts/start-here/transaction-signing',
  // Learn/concepts/transactions
  '/Learn/concepts/variable-transaction-fees':
    '/concepts/start-here/variable-transaction-fees',
  // Learn/Kitty-items
  // Learn/Kitty-items/install
  // Learn/Kitty-items/modify
  // Learn/Kitty-items/next-steps
  // Learn/Kitty-items/start
  // Learn/Kitty-items/update
  '/mobile': '/concepts/mobile',
  '/mobile/get-started': '/concepts/mobile/get-started',
  '/mobile/guides/development-environment':
    '/concepts/mobile/guides/development-environment',
  '/mobile/guides/monster-maker': '/concepts/mobile/guides/monster-maker',
  '/mobile/guides/onchain-interactions':
    '/concepts/mobile/guides/onchain-interactions',
  '/mobile/guides/user-management': '/concepts/mobile/guides/user-management',
  '/mobile/references/android': '/concepts/mobile/references/android',
  '/mobile/references/ios': '/concepts/mobile/references/ios',
  '/nodes': '/concepts/nodes',
  '/nodes/access-api': '/concepts/nodes/access-api',
  '/nodes/access-api-rate-limits': '/concepts/nodes/access-api-rate-limits',
  '/nodes/archive-access-api': '/concepts/nodes/archive-access-api',
  '/nodes/archive-api-rate-limits': '/concepts/nodes/archive-api-rate-limits',
  '/nodes/flow-port': '/concepts/nodes/flow-port',
  '/nodes/flow-port/staking-guide': '/concepts/nodes/flow-port/staking-guide',
  '/nodes/node-operation': '/concepts/nodes/node-operation',
  '/nodes/node-operation/access-node-setup':
    '/concepts/nodes/node-operation/access-node-setup',
  '/nodes/node-operation/byzantine-node-attack-response':
    '/concepts/nodes/node-operation/byzantine-node-attack-response',
  '/nodes/node-operation/db-encryption-existing-operator':
    '/concepts/nodes/node-operation/db-encryption-existing-operator',
  '/nodes/node-operation/faq': '/concepts/nodes/node-operation/FAQ',
  '/nodes/node-operation/guides/genesis-bootstrap':
    '/concepts/nodes/node-operation/guides/genesis-bootstrap',
  '/nodes/node-operation/guides/spork-practice':
    '/concepts/nodes/node-operation/guides/spork-practice',
  '/nodes/node-operation/guides/starting-nodes':
    '/concepts/nodes/node-operation/guides/starting-nodes',
  '/nodes/node-operation/leased-account-setup':
    '/concepts/nodes/node-operation/leased-account-setup',
  '/nodes/node-operation/machine-existing-operator':
    '/concepts/nodes/node-operation/machine-existing-operator',
  '/nodes/node-operation/monitoring-nodes':
    '/concepts/nodes/node-operation/monitoring-nodes',
  '/nodes/node-operation/node-bootstrap':
    '/concepts/nodes/node-operation/node-bootstrap',
  '/nodes/node-operation/node-migration':
    '/concepts/nodes/node-operation/node-migration',
  '/nodes/node-operation/node-provisioning':
    '/concepts/nodes/node-operation/node-provisioning',
  '/nodes/node-operation/node-roles':
    '/concepts/nodes/node-operation/node-roles',
  '/nodes/node-operation/node-setup':
    '/concepts/nodes/node-operation/node-setup',
  '/nodes/node-operation/observer-node':
    '/concepts/nodes/node-operation/observer-node',
  '/nodes/node-operation/past-sporks':
    '/concepts/nodes/node-operation/past-sporks',
  '/nodes/node-operation/spork': '/concepts/nodes/node-operation/spork',
  '/nodes/node-operation/upcoming-sporks':
    '/concepts/nodes/node-operation/upcoming-sporks',
  '/nodes/staking': '/concepts/nodes/staking',
  '/nodes/staking/custody-providers':
    '/concepts/nodes/staking/custody-providers',
  '/nodes/staking/epoch-preparation':
    '/concepts/nodes/staking/epoch-preparation',
  '/nodes/staking/epoch-scripts-events':
    '/concepts/nodes/staking/epoch-scripts-events',
  '/nodes/staking/epoch-terminology':
    '/concepts/nodes/staking/epoch-terminology',
  '/nodes/staking/faq': '/concepts/nodes/staking/faq',
  '/nodes/staking/locked-staking-guide':
    '/concepts/nodes/staking/locked-staking-guide',
  '/nodes/staking/locked-third-party-operator':
    '/concepts/nodes/staking/locked-third-party-operator',
  '/nodes/staking/machine-account': '/concepts/nodes/staking/machine-account',
  '/nodes/staking/qc-dkg': '/concepts/nodes/staking/qc-dkg',
  '/nodes/staking/qc-dkg-scripts-events':
    '/concepts/nodes/staking/qc-dkg-scripts-events',
  '/nodes/staking/schedule': '/concepts/nodes/staking/schedule',
  '/nodes/staking/stake-slashing': '/concepts/nodes/staking/stake-slashing',
  '/nodes/staking/staking-collection':
    '/concepts/nodes/staking/staking-collection',
  '/nodes/staking/staking-options': '/concepts/nodes/staking/staking-options',
  '/nodes/staking/staking-rewards': '/concepts/nodes/staking/staking-rewards',
  '/nodes/staking/staking-scripts-events':
    '/concepts/nodes/staking/staking-scripts-events',
  '/nodes/staking/technical-overview':
    '/concepts/nodes/staking/technical-overview',
  '/nodes/staking/unlocked-staking-guide':
    '/concepts/nodes/staking/unlocked-staking-guide',
  '/tools/emulator': '/tooling/emulator',
  '/tools/fcl-dev-wallet/overview': '/tooling/fcl-dev-wallet/overview',
  '/tools/fcl-js': '/tooling/fcl-js',
  '/tools/fcl-js/reference/api': '/tooling/fcl-js/api',
  '/tools/fcl-js/reference/authentication': '/tooling/fcl-js/authentication',
  '/tools/fcl-js/reference/configure-fcl': '/tooling/fcl-js/configure-fcl',
  '/tools/fcl-js/reference/discovery': '/tooling/fcl-js/discovery',
  '/tools/fcl-js/reference/installation': '/tooling/fcl-js/installation',
  '/tools/fcl-js/reference/interaction-templates':
    '/tooling/fcl-js/interaction-templates',
  '/tools/fcl-js/reference/proving-authentication':
    '/tooling/fcl-js/proving-authentication',
  '/tools/fcl-js/reference/scripts': '/tooling/fcl-js/scripts',
  '/tools/fcl-js/reference/sdk-guidelines': '/tooling/fcl-js/sdk-guidelines',
  '/fcl-js/sdk-guidelines': '/tooling/fcl-js/sdk-guidelines',
  '/tools/fcl-js/reference/transactions': '/tooling/fcl-js/transactions',
  '/tools/fcl-js/reference/user-signatures': '/tooling/fcl-js/user-signatures',
  '/tools/fcl-js/reference/wallet-connect': '/tooling/fcl-js/wallet-connect',
  '/tools/fcl-js/tutorials/flow-app-quickstart':
    '/tutorials/flow-app-quickstart',
  '/tools/flow-cadut/api': '/tooling/flow-cadut/api',
  '/tools/flow-cadut/generator': '/tooling/flow-cadut/generator',
  '/tools/flow-cadut/plugins': '/tooling/flow-cadut/plugins',
  '/tools/flow-cli': '/tooling/flow-cli',
  '/tools/flow-cli/account-add-contract':
    '/tooling/flow-cli/account-add-contract',
  '/tools/flow-cli/account-remove-contract':
    '/tooling/flow-cli/account-remove-contract',
  '/tools/flow-cli/account-staking-info':
    '/tooling/flow-cli/account-staking-info',
  '/tools/flow-cli/account-update-contract':
    '/tooling/flow-cli/account-update-contract',
  '/tools/flow-cli/build-transactions': '/tooling/flow-cli/build-transactions',
  '/tools/flow-cli/complex-transactions':
    '/tooling/flow-cli/complex-transactions',
  '/tools/flow-cli/configuration': '/tooling/flow-cli/configuration',
  '/tools/flow-cli/create-accounts': '/tooling/flow-cli/create-accounts',
  '/tools/flow-cli/data-collection': '/tooling/flow-cli/data-collection',
  '/tools/flow-cli/decode-keys': '/tooling/flow-cli/decode-keys',
  '/tools/flow-cli/decode-transactions':
    '/tooling/flow-cli/decode-transactions',
  '/tools/flow-cli/deploy-project-contracts':
    '/tooling/flow-cli/deploy-project-contracts',
  '/tools/flow-cli/derive-keys': '/tooling/flow-cli/derive-keys',
  '/tools/flow-cli/developer-updates/release-notes-v17':
    '/tooling/flow-cli/developer-updates/release-notes-v17',
  '/tools/flow-cli/developer-updates/release-notes-v18':
    '/tooling/flow-cli/developer-updates/release-notes-v18',
  '/tools/flow-cli/developer-updates/release-notes-v19':
    '/tooling/flow-cli/developer-updates/release-notes-v19',
  '/tools/flow-cli/developer-updates/release-notes-v21':
    '/tooling/flow-cli/developer-updates/release-notes-v21',
  '/tools/flow-cli/developer-updates/release-notes-v24':
    '/tooling/flow-cli/developer-updates/release-notes-v24',
  '/tools/flow-cli/developer-updates/release-notes-v26':
    '/tooling/flow-cli/developer-updates/release-notes-v26',
  '/tools/flow-cli/developer-updates/release-notes-v28':
    '/tooling/flow-cli/developer-updates/release-notes-v28',
  '/tools/flow-cli/emulator-snapshot': '/tooling/flow-cli/emulator-snapshot',
  '/tools/flow-cli/execute-scripts': '/tooling/flow-cli/execute-scripts',
  '/tools/flow-cli/generate-keys': '/tooling/flow-cli/generate-keys',
  '/tools/flow-cli/get-accounts': '/tooling/flow-cli/get-accounts',
  '/tools/flow-cli/get-blocks': '/tooling/flow-cli/get-blocks',
  '/tools/flow-cli/get-collections': '/tooling/flow-cli/get-collections',
  '/tools/flow-cli/get-events': '/tooling/flow-cli/get-events',
  '/tools/flow-cli/get-status': '/tooling/flow-cli/get-status',
  '/tools/flow-cli/get-transactions': '/tooling/flow-cli/get-transactions',
  '/tools/flow-cli/initialize-configuration':
    '/tooling/flow-cli/initialize-configuration',
  '/tools/flow-cli/install': '/tooling/flow-cli/install',
  '/tools/flow-cli/manage-configuration':
    '/tooling/flow-cli/manage-configuration',
  '/tools/flow-cli/project-app': '/tooling/flow-cli/project-app',
  '/tools/flow-cli/project-contracts': '/tooling/flow-cli/project-contracts',
  '/tools/flow-cli/run-tests': '/tooling/flow-cli/run-tests',
  '/tools/flow-cli/security': '/tooling/flow-cli/security',
  '/tools/flow-cli/send-signed-transactions':
    '/tooling/flow-cli/send-signed-transactions',
  '/tools/flow-cli/send-transactions': '/tooling/flow-cli/send-transactions',
  '/tools/flow-cli/sign-transaction': '/tooling/flow-cli/sign-transaction',
  '/tools/flow-cli/signature-generate': '/tooling/flow-cli/signature-generate',
  '/tools/flow-cli/signature-verify': '/tooling/flow-cli/signature-verify',
  '/tools/flow-cli/snapshot-save': '/tooling/flow-cli/snapshot-save',
  '/tools/flow-cli/start-emulator': '/tooling/flow-cli/start-emulator',
  '/tools/flow-cli/super-commands': '/tooling/flow-cli/super-commands',
  '/tools/flow-cli/tools': '/tooling/flow-cli/tools',
  '/tools/flow-go-sdk': '/tooling/flow-go-sdk',
  '/tools/flow-go-sdk/error-codes': '/tooling/flow-go-sdk/error-codes',
  '/tools/flow-go-sdk/migration-v0.25.0':
    '/tooling/flow-go-sdk/migration-v0.25.0',
  '/tools/flow-js-testing': '/tooling/flow-js-testing',
  '/tools/flow-js-testing/accounts': '/tooling/flow-js-testing/accounts',
  '/tools/flow-js-testing/api': '/tooling/flow-js-testing/api',
  '/tools/flow-js-testing/contracts': '/tooling/flow-js-testing/contracts',
  '/tools/flow-js-testing/emulator': '/tooling/flow-js-testing/emulator',
  '/tools/flow-js-testing/examples/basic':
    '/tooling/flow-js-testing/examples/basic',
  '/tools/flow-js-testing/examples/metadata':
    '/tooling/flow-js-testing/examples/metadata',
  '/tools/flow-js-testing/execute-scripts':
    '/tooling/flow-js-testing/execute-scripts',
  '/tools/flow-js-testing/flow-token': '/tooling/flow-js-testing/flow-token',
  '/tools/flow-js-testing/generator': '/tooling/flow-js-testing/generator',
  '/tools/flow-js-testing/init': '/tooling/flow-js-testing/init',
  '/tools/flow-js-testing/install': '/tooling/flow-js-testing/install',
  '/tools/flow-js-testing/jest-helpers':
    '/tooling/flow-js-testing/jest-helpers',
  '/tools/flow-js-testing/send-transactions':
    '/tooling/flow-js-testing/send-transactions',
  '/tools/flow-js-testing/structure': '/tooling/flow-js-testing/structure',
  '/tools/flow-js-testing/templates': '/tooling/flow-js-testing/templates',
  '/tools/flow-js-testing/types': '/tooling/flow-js-testing/types',
  '/tools/nft-catalog/cadence-generation':
    '/tooling/nft-catalog/cadence-generation',
  '/tools/nft-catalog/composability-flowcase-guide':
    '/tooling/nft-catalog/composability-flowcase-guide',
  '/tools/nft-catalog/npm': '/tooling/nft-catalog/npm',
  '/tools/nft-catalog/overview': '/tooling/nft-catalog/overview',
  '/tools/unity-sdk': '/tooling/unity-sdk',
  '/tools/unity-sdk/api-reference': '/tooling/unity-sdk/api-reference',
  '/tools/unity-sdk/changelog': '/tooling/unity-sdk/changelog',
  '/tools/unity-sdk/guides/dev-wallet': '/tooling/unity-sdk/guides/dev-wallet',
  '/tools/unity-sdk/guides/flow-control':
    '/tooling/unity-sdk/guides/flow-control',
  '/tools/unity-sdk/license': '/tooling/unity-sdk/license',
  '/tools/unity-sdk/samples/flow-words-tutorial':
    '/tooling/unity-sdk/samples/flow-words-tutorial',
  '/tools/unity-sdk/samples/quickstart':
    '/tooling/unity-sdk/samples/quickstart',
  '/tools/unity-sdk/samples/ui-usage': '/tooling/unity-sdk/samples/ui-usage',
  '/tools/vscode-extension': '/tooling/vscode-extension',

  // additional redirects
  '/account-linking': '/concepts/hybrid-custody',
  '/account-linking/guides/account-model':
    '/concepts/hybrid-custody/guides/account-model',
  '/account-linking/guides/linking-accounts':
    '/concepts/hybrid-custody/guides/linking-accounts',
  '/account-linking/guides/walletless-onboarding':
    '/concepts/hybrid-custody/guides/walletless-onboarding',

  '/cadence/style-guide': '/cadence/styleguide/project-development-tips',
  '/cadence/style-guide/project-development-tips':
    '/cadence/styleguide/project-development-tips',
  '/flow/faq': '/concepts/nodes/faq/backers',
  '/tools/nft-catalog': '/tooling/nft-catalog/overview',

  '/cadence/tutorial/01-first-steps': '/cadence/tutorial/first-steps',
  '/cadence/tutorial/02-hello-world': '/cadence/tutorial/hello-world',
  '/cadence/tutorial/03-resources': '/cadence/tutorial/resources',
  '/cadence/tutorial/04-capabilities': '/cadence/tutorial/capabilities',
  '/cadence/tutorial/05-non-fungible-tokens-1':
    '/cadence/tutorial/non-fungible-tokens-1',
  '/cadence/tutorial/05-non-fungible-tokens-2':
    '/cadence/tutorial/non-fungible-tokens-2',
  '/cadence/tutorial/06-fungible-tokens': '/cadence/tutorial/fungible-tokens',
  '/cadence/tutorial/07-marketplace-setup':
    '/cadence/tutorial/marketplace-setup',
  '/cadence/tutorial/08-marketplace-compose':
    '/cadence/tutorial/marketplace-compose',
  '/cadence/tutorial/09-voting': '/cadence/tutorial/voting',
  '/cadence/tutorial/10-resources-compose':
    '/cadence/tutorial/resources-compose',
};

module.exports = routeMapping;
