module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: [
        'index'
      ],
    },
    {
      type: 'category',
      label: 'Node Concepts',
      collapsed: false,
      items: [
        'validator/get_started',
        'validator/build',
        'validator/node_creation',
        'validator/specs',
        'validator/providers',
        'validator/vpsExplained',
        'validator/trustLabels',
        'validator/p12',
        {
          type: 'category',
          label: 'SSH Keys',
          items: [
            'validator/sshkeyExplained',
            'validator/creationMac',
            'validator/creationWin',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'VPS Setup Guides',
      collapsed: false,
      items: [
        'setup-guides/index',
        {
          type: 'category',
          label: 'Digital Ocean',
          items: [
            'setup-guides/do/account',
            'setup-guides/do/createDroplet',
            'setup-guides/do/applySSHDroplet',
            'setup-guides/do/recommendOptions',
            'setup-guides/do/launchDroplet',
            'setup-guides/do/sgDroplet',
          ],
        },
        {
          type: 'category',
          label: 'Amazon Web Services',
          items: [
            'setup-guides/aws/account',
            'setup-guides/aws/applySSHec2',
            'setup-guides/aws/createEC2-2',
            'setup-guides/aws/eip',
            'setup-guides/aws/sg',
          ],
        },
        {
          type: 'category',
          label: 'Google Cloud Platform',
          items: [
            'setup-guides/gcp/account',
            'setup-guides/gcp/project',
            'setup-guides/gcp/createInstancePart1',
            'setup-guides/gcp/createInstancePart2',
            'setup-guides/gcp/sg',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'nodectl utility',
      collapsed: false,
      items: [
        'automated/nodectl',  
        {
          type: 'category',
          label: 'Installation',
          items: [
            'automated/nodectlQuickStart',
            {
              type: 'category',
              label: 'Quick Install Walk Through',
              items: [
                'automated/quickInstall/nodectlQInstallIntro',
                'automated/quickInstall/nodectlQInstallPrep',
                'automated/quickInstall/nodectlQInstallDownload',                
                'automated/quickInstall/nodectlQInstallStart',
                'automated/quickInstall/nodectlQInstallWelcomeBanner',
                'automated/quickInstall/nodectlQInstallPrepare',
                'automated/quickInstall/nodectlQInstallConfirm',
                'automated/quickInstall/nodectlQInstallMigrate',
                'automated/quickInstall/nodectlQInstallP12',
                'automated/quickInstall/nodectlQInstallISections',
                'automated/quickInstall/nodectlQInstallDeps',
                'automated/quickInstall/nodectlQInstallBins',
              ],
            },
            {
              type: 'category',
              label: 'Installation Walk Through',
              items: [
                'automated/install/nodectlInstallIntro',
                'automated/install/nodectlInstallRequire',
                'automated/install/nodectlInstallCheckList',
                'automated/install/nodectlInstallAccess',
                'automated/install/nodectlInstallUpdate',      
                'automated/install/nodectlInstallDownload',
                'automated/install/nodectlInstallInstall', 
                'automated/install/nodectlInstallEnv',
                'automated/install/nodectlInstallAskMigrate', 
                'automated/install/nodectlInstallNonInteractive',
                'automated/install/nodectlInstallUser',   
                'automated/install/nodectlInstallSsh',       
                'automated/install/nodectlInstallSsh2',        
                'automated/install/nodectlInstallSsh3',  
                'automated/install/nodectlInstallDyn', 
                'automated/install/nodectlInstallP12',
                'automated/install/nodectlInstallP122',
                'automated/install/nodectlInstallServices',
                'automated/install/nodectlInstallComplete',
                'automated/install/nodectlInstallCongrats',
              ],
            },
            {
              type: 'category',
              label: 'Installation with p12 Migration Walk Through',
              items: [
                'automated/migrate/nodectlMigrate',
                'automated/migrate/nodectlMigrateHowTo',
                'automated/migrate/nodectlMigrateInstall',
                'automated/migrate/nodectlMigrateUpload',
                'automated/migrate/nodectlMigrateInstall2',
                'automated/migrate/nodectlMigrateImport',
                'automated/migrate/nodectlMigrateImport2',
                'automated/migrate/nodectlMigrateComplete',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Upgrade',
          items: [
            'automated/upgrade/nodectlUpgradeConcepts',
            'automated/upgrade/nodectlUpgradeQS',
            {
              type: 'category',
              label: 'Upgrade Walk Through',
              items: [
                'automated/upgrade/nodectlUpgradeIntro',
                'automated/upgrade/nodectlUpgradeStart',
                'automated/upgrade/nodectlUpgradeMigrate',
                'automated/upgrade/nodectlUpgradeStart2',
                'automated/upgrade/nodectlUpgradeConfirm',
                'automated/upgrade/nodectlUpgradeSetup',
                'automated/upgrade/nodectlUpgradeVersion',
                'automated/upgrade/nodectlUpgradeOffline',
                'automated/upgrade/nodectlUpgradeInternal',
                'automated/upgrade/nodectlUpgradeDirectories',
                'automated/upgrade/nodectlUpgradePackages',
                'automated/upgrade/nodectlUpgradeSeedlist', 
                'automated/upgrade/nodectlUpgradeEncryption',
                'automated/upgrade/nodectlUpgradeServices', 
                'automated/upgrade/nodectlUpgradeOnline', 
                'automated/upgrade/nodectlUpgradeRejoin', 
                'automated/upgrade/nodectlUpgradeRejoin2', 
                'automated/upgrade/nodectlUpgradeComplete', 
              ],
            },
            //'automated/nodectlUpgradePath',
            //'automated/nodectlMigrateV1',
          ],
        },
        {
          type: 'category',
          label: 'Resources',
          items: [
            'automated/nodectlCommands',
            'automated/nodectlEncryption',
            // 'automated/nodectlAutorestart',
            'automated/nodectlConfigBackup',
            'automated/nodectlValidate',
            'automated/nodectlProfileChange',
          ],
        },
        //'automated/nodectlConfig',
      ],
    },   
    {
      type: 'category',
      label: 'Manual Node Install',
      collapsed: false,
      items: [
        'manual/getting-started-manual',
        'manual/nonRootUser',
        'manual/dependencies',
        'manual/binaries',
        'manual/p12',
        'manual/service',
        'manual/join',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: [
        'resources/password',
        'resources/accessMac',
        'resources/accessWin',
        'resources/p12backup-mac',
        'resources/p12backup-win',        
        'resources/sshconfig',
        'resources/p12v1v2-migrate',      
      ],
    },
  ],

};
