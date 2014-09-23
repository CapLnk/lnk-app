var baseAPI = {
    
};

var menuItems = {
    menuItems: {
        items: [
            {
                label: 'News',
                items: [
                    {
                        label: 'News Item #1',
                        items: [
                            { 
                                label: 'News Item #1a',
                                items: [
                                    { label: 'News Subitem 1', href: '#' },
                                    { label: 'News Subitem 2', href: '#' },
                                    { label: 'News Subitem 3', href: '#' }
                                ] 
                            },
                            { label: 'News Item #1b', href: '#' },
                            { 
                                label: 'News Item #1c',
                                items: [
                                    { label: 'News Subitem 1', href: '#' },
                                    { label: 'News Subitem 2', href: '#' }
                                ] 
                            }
                        ]
                    },
                    { label: 'News Item #2', href: '#' },
                    { 
                        label: 'News Item #3',
                        items: [
                            { label: 'News Subitem #3a', href: '#' },
                            { label: 'News Subitem #3b', href: '#' }
                        ] 
                    }
                ]
            },
            {
                label: 'Updates',
                items: [
                    { label: 'Update #1', href: '#' },
                    { label: 'Update #2', href: '#' },
                    { label: 'Update #3', href: '#' },
                    { label: 'Update #4', href: '#' }
                ] 
            },
            {
                label: 'Miscellaneous',
                items: [
                    { label: 'Misc. #1', href: '#' },
                    { label: 'Misc. #2', href: '#' },
                    { 
                        label: 'Misc. #3',
                        items: [
                            { 
                                label: 'Misc. Item #1a',
                                items: [
                                    { label: 'Subitem 1', href: '#' },
                                    { label: 'Subitem 2', href: '#' },
                                    { label: 'Subitem 3', href: '#' }
                                ] 
                            },
                            {
                                label: 'Misc. Item #2a',
                                items: [
                                    { label: 'Subitem 1', href: '#' },
                                    { label: 'Subitem 2', href: '#' }
                                ] 
                            }
                        ] 
                    }
                ] 
            }
        ]    
    }
};

var mainContent = "<p>Kapu cis fokugidi wuf kihdekal pocrob gotbabep hohon ete bepop oruzid ap rorat ni ed. Geedo higramset fen je wozego falamba butabi baesbo co fewute umaafa uzoc jas mirga pepsohzer ga fahjecjo leboih. Biho kacikud vof wudul uhisoka jejik be ehohak rotnidul lowfodmu koh mage fufba gise evfuhoc nahov novo. Na ketcudun rumnajac humaawi fo duukisuw cafasuf zuste oso wuberam laofejo jicpa nodod pufwum zokobodud ok. Gari oc wanemo wa dolu dovku ba li zus puukhut he ikuoznar dukhosog dawusi nan wod dun ceka. Opna gabufo sobmig medwi egbun urlig ubhunsu gic co moece uc so cakpiw oktaziw. Ril biumeaso owo ragmaboh mufgu jifucefi eno mipfice ubinakwu kuderno faatecaz gora laddaz efi ofafem lej.</p>" +
                  "<p>Tufe ufefazi cijibik ice tickejud rubupizo guataipo mis zilaki zaupiwat vekewosu lurbejkak zorsu. He guk gelori ha pambi bi uj joltiw poh gavukgij tur salid. Lulpaevu wefhize zanfom ze gir ugobef cur gi hijohede matbuso suzkad fo. Zepsad kopaodo guwo lemjelu toucu kawvak ivcore hi bebopnev hufte wi hubof japtuw kesjirdo meneave. Logo fekjez difubpo cuvudku razci vuwafe umhekhe lekzivgev kafvezo tocgu mathawmis mute acik im nub faveka. Wec limidi rukvenme rore cafvig pisujko kusansil hudal ihila ku com nur joga. Sa paofku mudwuc wimefusuj boovi tes ahe bit omu de azaciif dira zafzo kokfivrar kedpem.</p>" +
                  "<p>Ni gusewota lapfiget dampes jok julojli neweuni jisbag voj loakse jorhiz jivemo ub mawve uz memokca. Nisda omfebi dubikije evo ros ziaji orovusus do ki kaumoadi pi dehnoj. Ivowahbuc wiuv cev oziadojiz wubla defunaf tolalomi ezoju corca pit ab ora de. Apoben gun ham jofla hucjod ado wiv tesela pa gocjah mu rihkujege cikiec gih wikufipo lipit. Sumtewa gumrag eg ijkak dotpuf eloinbec jezuzu ur luzo eraraih hujke ose ofovurij vap.</p>" +
                  "<p>Cupforak gueja zoep miv aze ev woenare to vasboc tici uvi tev la ubezinef ecek luzzod rubiol. Cojhu viosdeg nafu meg on gobwuic nikogvem cenepvu awete umji vun rocjanju uhujuv ikudag funnonjin acihov. Obfofva oze upari sanupcop duevodu mical kajho jec kehufiaca nihipo zimleb tabbinuv bot oguip.</p>";

var asideContent = "<p>Co ur ik lo wiz beje vizkun harufid logko fo um fe. Agofa vuctioha cuvtezbig zaop zojuski udodukjo ruk tunmobpar cirno cuf hidi ev. Ijselug woso juh zife bijeb ge guoge codwul sofeha heoglo ho roambaj ocepub. Rib ha timlin ivoopaec ufni fuvkubwog owebu ro ogo nuisso lipe imiiraola reseuwi gogekik meizidad obazuci facim. Min nahvuj apet upa hekgusat nuvli useipfib guvrajvi hukavvus egwo segeju fofhubwi sac mij umzo ju kindeaja kium.</p>" +
                   "<p>Bira doni tejla pev hiwumil lo serub kedu riosa geggelmaz jines leigizuw nuknahod vu olu. Usuru to akoceh lago wivgiw mon cofi bo coruw fipi novimfuv oje vow oleku gobuig ni. We dub morucote lalugde ke zo lizi nemapeh haihecas sazjaf dockif nicaghad fawuju diz. Mor nudasog vakafo as owe hefe undo fosoj nenajreb limmawi unod few pado luwegje wiw jab sehote. Tec lumhud du wihro id cuolo gi jucwima nonilguw sej ciluk of ofutajuz wesejfez tij.</p>";

var headerContent = "<p>Co ur ik lo wiz beje vizkun harufid logko fo um fe. Agofa vuctioha cuvtezbig zaop zojuski udodukjo ruk tunmobpar cirno cuf hidi ev. Ijselug woso juh zife bijeb ge guoge codwul sofeha heoglo ho roambaj ocepub. Rib ha timlin ivoopaec ufni fuvkubwog owebu ro ogo nuisso lipe imiiraola reseuwi gogekik meizidad obazuci facim. Min nahvuj apet upa hekgusat nuvli useipfib guvrajvi hukavvus egwo segeju fofhubwi sac mij umzo ju kindeaja kium.</p>";
var footerContent = "<p style='font-size: small;'>Co ur ik lo wiz beje vizkun harufid logko fo um fe. Agofa vuctioha cuvtezbig zaop zojuski udodukjo ruk tunmobpar cirno cuf hidi ev. Ijselug woso juh zife bijeb ge guoge codwul sofeha heoglo ho roambaj ocepub. Rib ha timlin ivoopaec ufni fuvkubwog owebu ro ogo nuisso lipe imiiraola reseuwi gogekik meizidad obazuci facim. Min nahvuj apet upa hekgusat nuvli useipfib guvrajvi hukavvus egwo segeju fofhubwi sac mij umzo ju kindeaja kium.</p>";
