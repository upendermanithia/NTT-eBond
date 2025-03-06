import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs01: {
                        table: 'sys_script_client'
                        id: '1c14c3c526574a909e2435c7093f1fc7'
                    }
                    'Default view': {
                        table: 'sys_ui_view'
                        id: '6465dbb6ffda4905921d1378fc232604'
                    }
                    lv01: {
                        table: 'sys_ui_list'
                        id: '7b8f2fcce8c54389b309b4699dbfd00b'
                    }
                    lv02: {
                        table: 'sys_ui_list'
                        id: 'b1197949520f4c758721f5d895a685ea'
                    }
                    lv03: {
                        table: 'sys_ui_list'
                        id: '69e2bcc9e78d471fad653e53f6ca7439'
                    }
                    lv04: {
                        table: 'sys_ui_list'
                        id: '9bb24d7527104fb18f836d1f4131bd4e'
                    }
                    lv05: {
                        table: 'sys_ui_list'
                        id: '11fc1c28ee0244dabb13ea0ecdaa8b71'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '691b49af9e684cd182ce6fc5ab7c35d9'
                    }
                    br1: {
                        table: 'sys_script'
                        id: 'cfca057c2288440a8b4761d8c987e948'
                    }
                    DDRecordUtilities: {
                        table: 'sys_script_include'
                        id: '28d3decdfad649aeb0e3e42017861136'
                    }
                    DDApiUtilities: {
                        table: 'sys_script_include'
                        id: 'c27f25a796f3483e8c6ebf5a1996d63e'
                    }
                    sr0: {
                        table: 'sys_relationship'
                        id: '53e17cf199324ecdb1ce345abd98bda2'
                    }
                    up0: {
                        table: 'sys_ui_policy'
                        id: '615d566a72e246c994334d8d46c4bb82'
                    }
                    up1: {
                        table: 'sys_ui_policy'
                        id: 'c6351ab9d2a34f84ba4ddf230df4c698'
                    }
                    up2: {
                        table: 'sys_ui_policy'
                        id: 'b8e9366a855b4feaaf5543bf3acb8450'
                    }
                    pa0: {
                        table: 'sys_ui_policy_action'
                        id: '86da178bcba74951b269628514427349'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'd09fbd190cbc41218a6b3bbe6b3a9ea5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9a332b29be1042d08298dc174947de12'
                    }
                    pa1: {
                        table: 'sys_ui_policy_action'
                        id: 'b4b9592f40f2402ba856cd723745c679'
                    }
                    pa2: {
                        table: 'sys_ui_policy_action'
                        id: 'c2f78bca4c6b4f419c200032b70386f5'
                    }
                    us0: {
                        table: 'sys_ui_section'
                        id: '72998d9c7532408b8b566c832402f187'
                    }
                    sc0: {
                        table: 'sys_ui_section'
                        id: 'a86fcedb5b924fcc992ba0475347fdc1'
                    }
                }
                deleted: {
                    sys_ui_list_element: [
                        'c92a478c4ac342c9b077b4f6efdca364',
                        'a027b2a8ca9448d08ba266a9c8448707',
                        '143b010a5abe463c8da9920e467aeaec',
                        '6aaa28d14ed04687899ddc39995056d1',
                        '53b99c8358394a6ba7a9695aec5ac561',
                        '3163c9e9ed254e528df9b615bdb90a8f',
                        '8c72668f764543c4a415b7db9d7eb1ce',
                        'f67ad3c368294773846301e1b136d154',
                        '6809616f887c40c7b2603b9bd1721bc8',
                        '5e395dea3bb84e68b00b4ea9bd82e522',
                        '8dda4defedd341d9ac53fa948ff48402',
                        '8ea50d1014554d7eb361029536403003',
                        '767eb38e04f54482a8061f31953e7f07',
                        'ef702bd14a2d4db29d3d5fe19008b62d',
                        '5c5765ac5877486f8da6a4bd7c55ae90',
                        '57a7d84ce2de40e8b7df0459e18ca722',
                        'b0bce5db2ad24e8ca3def2afac07ae5e',
                        '5cdff7c1a53f414794226735cc8a2b6f',
                        'c4b3ddd58cfc45ceb5b8a4f574fa7468',
                        '73107412cf3248eeb7c793d0d443de70',
                        '7f775ac352cb4f40ac0990fd4f0d414a',
                        '507846db0a5c4e9a81137ae5d270e76e',
                        '51edbe09db094ff69eade59900a700ab',
                        'c74102f3b9ef4381a68ad44351099d78',
                        'df2e88382d86440e9b54aadc858119c6',
                        '87fb3103f0d8403694411586411c4916',
                        'a65b0d91b0cc4a02947713f0d880c033',
                        '4f7d80cb8ef542698ada6657108d73ab',
                        '80055e50370d4c85a8ed92550317817f',
                        '641dd7bb514740ee9b978cd5faa4f689',
                        '0fd90369d0184da2a724454e6f7cfa0d',
                        '413e5a45745a41c3ad65d045297a15d3',
                        '6e94cde754cc4412848e352dc82d37b6',
                        'c9380645ceff440bab9664d2e9862213',
                        '0a4d6fd005ad48edb94906a51d781d95',
                        '7e18001511894265a2317f4e3ef66e29',
                        '4ab08d2179ab4db086a77e4de4466cf9',
                        'f5fc9da8b12b466a9836372955b94d5c',
                        'e6883c5bcc8e4251a21ee99e450b37e0',
                        '42a67f30c78b4f589352fac1041f4f2a',
                        '27e5ff4523a94e8190baf85790eb0288',
                        '9ef5adf3dd0c4344b30a99e4125d4467',
                        '128b689c0b4e44d59c0ef85daec0e2e8',
                        '65dc3e79584a46d5905cecb39ead782d',
                        'f3e65c3da0c447f29218997e9aefc4f5',
                        'a23ea8f592e44de6940f70dfb96d83a7',
                        '2d753c2ded70419ab0e3d79f7bde5f07',
                        '47b19140d4f74538a2725fa087a17942',
                        '4a2019d5ad4b4b9887b99f6ecb0e5db6',
                        'c2a43336ac424fd69cfb845ce542e38e',
                        '4272f1516f16427eb86ac59e33b31062',
                        'd6646eb7ea9d4ba4b62dd2f1ec6f99a2',
                        '2ce57ffaac8d4821a41b0d71d7520a47',
                        '23a73e18471a4a34a16c692ad5136f28',
                        'ce94c7123b454fb59bf8f9b220ac89e0',
                        'a538807e346146568a4e50f68eda3303',
                        'b6f3667db819423e99ea13b30128e220',
                        '174b1661118f434ba28585cf4ef2ac82',
                        '639e97be8b35457294ef1c43abe26f5b',
                        '1e16b5518bb9467dbebf2fb3197294cc',
                        '9996aad573b9424598cd8b1204c05eac',
                        'aa4a4ef517c544fdbc639e410d9aa2b2',
                        '282740cd540c42229bb7af52047dbe04',
                        'f96441e0536f41e0ace403108d6fba81',
                        '048f74f3ab6d43d3be2d2ad513f01d22',
                        '7e3afb36cf4c42a4add1e673e58c836f',
                        'e3b916045aae4285af4fc2de41b4200d',
                        '2209beb4cfe746be8f43452bf059a2c7',
                        'fbaab011ca584629ab8dac2d03f04d28',
                        'd2774241f0544f0f9bc9a769ce09cee7',
                        '7726eb5940d8495b87292d7bc56294b3',
                        '4808fc2683f44ff9aa2b2d71943d4c69',
                        'fb18003b9c754b898a5163808005259d',
                        'e0486d0f89804617bff8dda155bb0c5d',
                        '0cabaa8239c14f1ebdfd97a43e60b7d0',
                        '9f306b865250452a8e6394539ad78009',
                        '5bedc6eabc044b419ecb8a48496114dd',
                        '4082d0fc2ebf49799f14bbb566407747',
                        'bf3a7eed6995442098e7275d1b03131a',
                        'b112c70fb27046479f62e57b368f9409',
                        'c29a360c6824404d80032afd4781f149',
                        '036e0687bd6f4829a9da1133bcb7bed3',
                        '421666f08cc34c7db3bdf215a4fdc5d7',
                        '5accf5a5d7c74bd0941ff920e6dfaeac',
                        '8d906646778a4699a36a20351341bd76',
                        '4c25ceb7e44c4b67b347e9a4ae236a82',
                        '1e402cc952fa4baa8782dd016e2b1000',
                        '78106c4faf194f7d82aa78e89e622fdf',
                        '50e281b2da30493ea6770671ba59d99d',
                        '7f05b7b893474094bd7ff9e55b167425',
                        '6d7ff86196ef4deda0012ef92f200fa8',
                        '0671e11243024872ba15629ef192e42b',
                        '6fa1add9ca7042868033b53df57fd86f',
                        '0d8647f8546a424e8ab4a74a015d73cb',
                        'a48258cc37b944229aa374d23fd9d45c',
                        '53e2e47cd0054e9f9d5a6d2229210f7a',
                        'b2acc2fc8e684f1c8ecb039a79a73b0b',
                        '118e1e1c17f8434689895fe7773f5108',
                        'c7cf6e140fce452687d119a070e861f7',
                        '922fcd7382914da1a32336380a264e1e',
                        'd59c8dec20c24dcbbdbec810d3c8362f',
                        'b1ad6579b9f243e997e864ac6df9f132',
                        '6f47a2afa8ab4288ae54e690c9ecddce',
                        '6143b87801884422951d4b80ee2e3a06',
                        'e6802eae340b4283b8a4a9682b59e623',
                        'cdf23c457e624651bb0f62aab151a505',
                        '7d213d363e9a4c279a6a27819b79e265',
                        '899b2b9cab47498e96d465b51aec95bd',
                        'da53810126aa4e0ba5053acfd508d286',
                        'b2b20a2084b147a5b96fb8b473dff7dd',
                        '50707db6682c496a97d92c566d6bed98',
                        'f44f95d353174c38a34e25828afeda95',
                        '7e9252cd040d4c3f97408372d899dd57',
                        'bb5ce5faeca249b89be7f3ba5c9c2d5c',
                        'c7b36f8b58c04b08bdc270c383fb4be0',
                        '45544f6732484816a5143dbe7b562b7e',
                        'df7c61229feb4c6799eea1785aecaee0',
                        'f285de9f380248ee9122296e1ed0a682',
                        'd47a3cbf319f4683a5e342df0adb64ef',
                        '0516a91dbcc04c49be8169322a53bc3f',
                        'fad5653a527e4994a4226e3f537acb31',
                        '1b5d773736d9443daf911be12c665029',
                        'c961db73afb049509172f386aeecd522',
                        '3ac17d3f7d4940d08d4ffef5f9a2927a',
                        '2ceb793f6ac44084b552f6dd9ad2bffb',
                        '5d485ce7e35446d297d9d279004b5ef4',
                        '87dbe4bc855d44eba3c1c24258c2e053',
                        'b5102ed7c9e747fa8f242ca01215d4cf',
                        '26273186c89f4827bf1f573e35b2d57c',
                        'eb15c753a945451181498663d85faec5',
                        'fa56dcbd9ed94253abc548f9bbcf640f',
                        'f3ef843a531549dab27df4fb1f248084',
                        '49b457cff5e940faad03578eae482e1c',
                        '6a63101a3779489d96cb8ef5a71e58ca',
                        '78356a02ddcb4ca897ccd2be081c54f4',
                        'bcae6d1886c14a5db6767f6e66bbdaa3',
                        'dbe22abb791649a1a4227d6f08c0a5bc',
                        '3bb110a8cf35491a90a1e5332f986e40',
                        'ab763959f20b48e1a43bf0f6d049eef2',
                        '21ed03a5265644d7b3151087f315a4d0',
                        'fa0e2ee27d1f422e8512fa7007a6526e',
                        '0981614d49c5434eb8bb6f406d97cae5',
                        'a39df4a569da4767a6bec9637f73c26b',
                        '96b6449cbe71462285c9e73fcfc1f524',
                        'cb2eaf06a4c349039d8087a97361c6f4',
                        '1569d825d8594153964ce4838439077b',
                        '3168495482bd4dd1be265019fdbd513e',
                        '84e9ab4d377a4a1aa607f45762057d6e',
                        '52f33f344da5493d93f417616d7eb911',
                        '061e3e6c33d44e1888663d97ef229064',
                        '023f9474563d487e9cf324960764bd3c',
                        '57ac3c1b7f804f878b01c98390f216c8',
                        '491c0d825142496db4379de83e1cc854',
                        '6778064172a6489e84723328544e4fb7',
                        '8dcc102ca4a545d0b650d6e7a34a6022',
                        '60fe23538f8b44e88d68c01ce15e89c8',
                        '156efea638aa40a9aca3d1c5927b4c95',
                        '02448066da61406baefc0ff5c0575a88',
                        '2428e07dfba54260b61ba32dc16da29b',
                        'e85d1275b519474c93447392fc282e77',
                        '33881f7641a44359a24aff4fa4234f69',
                        '1f1fe6be00884878bd7e3e9c09a6ed8d',
                        '2ece6cd302d640b69d5f1ea3c9a6814b',
                        '0d323b92cd4141b5841d67537b7540e2',
                        '6800b980b89b4f00b1485a7b8e2a669a',
                        'c5ff01e8a9304deaa5b46531001ec5a5',
                        '3e98f0ec826945aea200ea5c7fe230c0',
                        'c26a99b357cf4eae9384623ec06adbb0',
                        '9ef56dc171d74615ad4b2259f5715810',
                        'e358e5f101a44849a9b2f0d0bee03f3f',
                        'b7b36e46097e4165805e4d419849eeb2',
                        'f408688620ae4771a5598ebdb022c8d0',
                        'bbf3f68090424f58a21b2f259d09720d',
                        'a1d28734780c46b18327f144a8ad73a1',
                        '809552a396694f00bac144d0f8aefd77',
                        'dc9b28f98daf41c8acdca4414c00ffdd',
                        '98fafa3920844d2cb4a26f79f90b6227',
                        '2c409076c4b4408487e93a97aae54783',
                        '578f6f4001b04ead94ab7fe9447166a7',
                        '9dfdfe6e65624db99970cc02d67a449a',
                        '8bb7b80067ce4ac39d202a91190a95d5',
                        '7fe6fef6cf68413c97be8009dea6531d',
                        '6e149a083b73415ea8f2c839159525e9',
                        '966a6b45da4d4a49a72f67c164c5e195',
                        '2088ccd4c76d4477ad568f0ce111ebcc',
                        '927df0f1c50f46b3b228723ce1e26dae',
                        '9cf57cba96e74ba185e47c2e0f030d57',
                        '5fe9f5239ac648a5b4a36fa4614eae03',
                        '99385e150e9244c286d70630dc080206',
                    ]
                }
            }
        }
    }
}
