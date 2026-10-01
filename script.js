/* ============================================================
   LINEAGE DATA
   Structure: { name, note (spouse/marriage detail), children: [...] }
   Transcribed from the Sithomo family archive document.
   ============================================================ */
const lineageData = [
  {
    name: "uKhanda", note: "wayeganwe uMaNdaba",
    children: [
      { name: "uMbhejisa (Simiyoni)", note: "wayeganwe umaZulu", children: [
        { name: "uGidion kaMbhejisa – Malambula", note: "owaganwa uMaChonco noMaNgadi", children: [
          { name: "KumaChonco", children: [
            { name: "Thembisile", note: "wagana kwaMtshali" },
            { name: "Nomajuba", note: "wagana kwaSibiya" },
            { name: "Mkiti", note: "wagana kwaNkabinde" },
            { name: "Bakhulu", note: "oganwe ukaMazibuko" },
            { name: "Makhosazane" }
          ]},
          { name: "KumaNgadi", children: [
            { name: "To", note: "oganwe kwaNtuli" },
            { name: "Bhipo", note: "oganwe umaShabalala" },
            { name: "Nondumiso" },
            { name: "Sizwe", note: "oganwe umaMdakane" },
            { name: "Ntokozo" }
          ]}
        ]},
        { name: "Noli kaMbhejisa" },
        { name: "uLeya kaMbhejisa" }
      ]},
      { name: "uGabadela", note: "wayeganwe umaKhumalo", children: [
        { name: "uLubeni kaGabadela" },
        { name: "uMashumi kaGabadela", note: "waganwa umaDladla", children: [
          { name: "Mangempi (Mabhalane)" },
          { name: "Sibusiso (Sihubhe)" },
          { name: "Mantombazane" },
          { name: "Sebenzile", note: "owagana kwaNgcobo" },
          { name: "Sdudla", note: "oganwe kwaHadebe" },
          { name: "Bizeni", note: "oganwe kwaDlamini" },
          { name: "Mduduzeli Sqambembe" },
          { name: "Neli", note: "waganwa kwaMabaso" }
        ]}
      ]},
      { name: "Ngaloncane" },
      { name: "uKula", note: "wayeganwe umaDladla", children: [
        { name: "uMakhosonke", note: "waganwa umaHadebe", children: [
          { name: "Mfunwa", note: "waganwa ukaMazibuko" },
          { name: "Nokuthela", note: "wagana kwaMabaso" },
          { name: "Nokuthula" },
          { name: "Bangeni" },
          { name: "Ntombizodwa" },
          { name: "Bubu" },
          { name: "Ntshitshi", note: "wagana Khanyile" },
          { name: "Jabu" },
          { name: "Qondeni" }
        ]},
        { name: "uGundu", note: "waganwa uMaShezi", children: [
          { name: "Nomkhuba", note: "wagana kwaPhakathi" },
          { name: "Nokufika" },
          { name: "Mkakwa", note: "oganwe umaNdebele" },
          { name: "Mzwakhe" },
          { name: "Mandla", note: "oganwe umaNcikane" },
          { name: "Mbuzeni", note: "oganwe uMahudla" },
          { name: "Celiwe" }
        ]},
        { name: "uGcina", note: "waganwa umaNxumalo", children: [
          { name: "Bheki" },
          { name: "Nombuso", note: "oganwe kwaMzolo" },
          { name: "Dindi" },
          { name: "Zwakushiwo" },
          { name: "Zwelakhe" },
          { name: "Mkotozi" },
          { name: "Mahloni" }
        ]},
        { name: "uSbhekuza" },
        { name: "Thembeni" },
        { name: "uMlomi" },
        { name: "Ribeca" },
        { name: "uDingili" }
      ]},
      { name: "uMbulawa", note: "wayeganwe umaShabalala — bazala amantombazane odwa", children: [
        { name: "uBatshwazwayo", note: "wagana kwaMabaso, iNkosi uMthukutheli ubabakaVimba" },
        { name: "uNtombi", note: "wagana Sokhela eMahlabathini" },
        { name: "uNonsolo", note: "kwaVilakazi ebhoshi" },
        { name: "uNomadlozi", note: "wagana kwaSithole" },
        { name: "uNtombizonke", note: "kwaHadebe emahlutshini" }
      ]},
      { name: "Mvutheli kaKhanda uHobhohobho kanomgandiya", note: "wayeganwe umaKubheka", children: [
        { name: "uSgweje kaMvutheli", note: "wayeganwe umaMtshali", children: [
          { name: "Ndumuka (full stop)", note: "waganwa umaMsane", children: [
            { name: "uNonhlanhla" }, { name: "Mondli (shlophoyi)" }, { name: "Tholakele" }
          ]},
          { name: "uBhekezakhe (Spring)", note: "kumaNgema", children: [
            { name: "Bafo" }, { name: "Busi" }, { name: "Jabu" },
            { name: "Musa", note: "kumaMbona: uKhanyi, Phili, Nathi, Nothi, kwaNdi" }
          ]},
          { name: "Beauty", note: "wagana Mndeni, wabe esegna kwaSibisi" },
          { name: "uMomo", note: "wazala u-Nomfundo noMduduzi" },
          { name: "uGanile" , note: "wazala uSnenhlanhla noNjabulo"},
          { name: "Koswana", note: "ugane kwaMabaso", children: [ { name:"Lindo" }, { name:"Lumkelo" } ] },
          { name: "uVusumuzi (Slevu)", note: "oganwe ukaMazibuko", children: [ { name:"Smilo" }, { name:"Lungisani" }, { name:"Samukelisiwe" }, { name:"Celimpilo" } ] },
          { name: "Mabutho (Sgoloza)", note: "akagananga" },
          { name: "Gezi", note: "owagana kwaXimba" }
        ]},
        { name: "uMgijimi kaMvutheli", note: "waganwa umaMnyandu", children: [
          { name: "Lungile" }, { name: "Mbuyiselwa" }, { name: "Thembi (ongasekho)" }
        ]},
        { name: "uNyoni (uBlesi)", note: "waganwa umaMfuphi", children: [
          { name: "Mpandla", note: "oganwe umaKhumalo", children: [
            { name:"uBuhle" }, { name:"Mbuyi" }, { name:"Qaphelani" }, { name:"Thabisile" }, { name:"Hlengiwe", note:"kumaDladla" }
          ]},
          { name: "Bholo", note: "waganwa umaMkhize", children: [
            { name: "Dimo", note: "kumaLinda, wathola uNomusa noGenene" }
          ]},
          { name: "uMazukwana (Mlomo)", note: "wazala uNdenene kwaHadebe" },
          { name: "Kini (Mchondo)", note: "waganwa ukaManana", children: [
            { name:"Thembelihle (Nunu)" }, { name:"Kwanele (Tibha)" }, { name:"Xolile" }
          ]},
          { name: "uXhegu", note: "wazala uMthobisi (Topiya)" },
          { name: "tutu", note: "akabanga nangane" },
          { name: "Nelisiwe (Nelly)", note: "wazala uLwazi" },
          { name: "Vita" }
        ]},
        { name: "uBhusmani kaMvutheli", note: "waganwa umaNgcobo", children: [
          { name: "Njabuliso (Dibongs)", note: "oganwe ukaMahlinza", children: [ { name:"Nomonde" }, { name:"Zandile" } ] }
        ]},
        { name: "uNtongo kaMvutheli", note: "wazala uMdaka noMlethwa", children: [
          { name: "uMdaka", note: "uganwe umaMvelase" },
          { name: "uMlethwa", note: "akaganwanga" }
        ]},
        { name: "Nomanyala kaMvutheli", note: "wagana Sthole kwaVumbu" }
      ]},
      { name: "Khunathi kaKhanda", note: "waganwa umaNdlovu", children: [
        { name: "Thokozili", note: "owagana kwaSishi" },
        { name: "Nkampani", note: "waganwa ukaDudu", children: [ { name: "Nokuthula", note: "wagana Khoza" } ] },
        { name: "Ngilifane", note: "kumaDubazane: Khangelani Kambi (Mqanjelwa), Mphathiseni (Skorokoro) — kumaHadebe: khanyisile, amawele, Dumsani, Buyisiwe, Xolani" },
        { name: "Sqopha", note: "waganwa uKaTotobisa umaShabalala", children: [
          { name:"Phathe" }, { name:"Vimbephi", note:"waganwa Hadebe" }, { name:"Khombisile", note:"waganwa kwaSthole" },
          { name:"Khulu" }, { name:"Nonhlanhla", note:"waganwa kwaDlamini" }, { name:"Thokozani (Mqwabalanda)" }, { name:"Funizwe" }
        ]},
        { name: "Khilani" },
        { name: "Mdombi", note: "wagana kwaMbhele" },
        { name: "Themba", note: "akagananga" },
        { name: "Ntombiza", note: "wagana Shabalala" },
        { name: "Sbongile", note: "wagana kwaHadebe" },
        { name: "Fana", note: "waganwa ukaMazibuko", children: [ { name:"Mtshengiseni" }, { name:"Duduzile" } ] }
      ]},
      { name: "uJosfina" },
      { name: "Grace" },
      { name: "Mata" }
    ]
  },
  {
    name: "uLothoyi", note: "wayeganwe uMaNdaba",
    children: [
      { name: "uMagilimbane", note: "kaLothoyi, waganwa umaKhuzwayo", children: [
        { name: "uNtombi", note: "wagana kwaDladla", children: [ { name:"Dumisani" }, { name:"Lungi" }, { name:"Thembi" }, { name:"Zaza" } ] },
        { name: "uNtuluza", note: "waganwa ukaMazibuko", children: [
          { name:"Senzangakhona" }, { name:"Zakhele" }, { name:"Khombisile" }, { name:"Nothile" }, { name:"Ntabiso" }, { name:"Ntethelelo" }, { name:"Thamsanqa" }, { name:"Gcwali" }, { name:"Nokuthula" }
        ]},
        { name: "uNsaki-Sidweli", note: "waganwa umaKhanyile", children: [
          { name:"nduna" }, { name:"Nomthandazo" }, { name:"Mondli" }, { name:"S'fundo Phokazi", note:"ku Mampofana" }, { name:"Zibuse (Ntethe)" }, { name:"Thembi" }
        ]},
        { name: "uNqegu", note: "waganwa umaVilakazi", children: [ { name:"Sthembi" }, { name:"Thobile" }, { name:"Fikile" } ] },
        { name: "uCelani", note: "waganwa umaZwane", children: [
          { name:"Thandeka" }, { name:"Lindokuhle" }, { name:"Phelelani" }, { name:"Ndumiso" }, { name:"Landiwe" }, { name:"Nomveliso" }, { name:"Nkosinathi" }, { name:"Sanelisiwe" }
        ]}
      ]},
      { name: "uMlembeza", note: "owagana kwaMhlongo" }
    ]
  },
  {
    name: "uJwabu", note: "wayeganwe umaZulu",
    children: [
      { name: "uZwelikude", note: "kaJwabu, umakula bhajiwe, wayeganwe umaShembe", children: [
        { name: "Fikile uNoziqwaga", note: "inkosazana, yagana kwaMazibuko", children: [ { name:"uNongalanga" }, { name:"Mondli" } ] },
        { name: "Ntombinjani", note: "wagana kwaHadebe" },
        { name: "uMzonjani – uShimba", note: "waganwa umaHlongwane", children: [
          { name:"Bheki" }, { name:"Gugu" }, { name:"Dzeni" }, { name:"Lucky" }, { name:"Bongani" }, { name:"Bonginkosi (amawele)" }, { name:"Sipho" }, { name:"Sabelo" }
        ]},
        { name: "Mdondo", note: "waganwa umaKhumalo", children: [ { name:"Mbongiseni" }, { name:"Nokuthula" }, { name:"Neli" }, { name:"Mthenjwa" } ] },
        { name: "Mvi", note: "waganwa umaKhumalo", children: [ { name:"Mabongi" }, { name:"Nontobeko" }, { name:"Sandile" } ] },
        { name: "Scazo", note: "waganwa umaKhuzwayo", children: [ { name:"2cent" }, { name:"Thandi" }, { name:"Vusi" }, { name:"Ndwane" }, { name:"Philani" }, { name:"Philile (amawele)" } ] },
        { name: "Mkhumbane (Ace)", note: "waganwa umaZondo", children: [
          { name:"Nontombi" }, { name:"noJabu" }, { name:"kumaZungu Sfiso", note:"oganwe umaShabangu" }, { name:"Melusi" }, { name:"Sma" }
        ]}
      ]},
      { name: "uSbusiso", note: "kaJwabu, waganwa umaMfusi", children: [
        { name: "Mndeni", note: "oganwe ukaMabaso" },
        { name: "uZombe", note: "oganwe ukaMabaso" },
        { name: "uSinda", note: "oganwe umaGumbi", children: [ { name:"To" }, { name:"Sfololo" }, { name:"Nana" }, { name:"Stadium" }, { name:"Xolani" }, { name:"Magie" } ] },
        { name: "uKele", note: "oganwe umaHlophe" },
        { name: "uSe", note: "oganwe umaShange" },
        { name: "uTombi", note: "owagana kwaGumbi" },
        { name: "uGomi", note: "oganwe kwaMdletshe eGoodhome" },
        { name: "uBhula", note: "oganwe kwaPhakathi eGoodhome" },
        { name: "uVina", note: "oganwe kwaMkhwanazi eZwelisha" }
      ]},
      { name: "Amantombazane amathathu", note: "amagama awabhalwanga" }
    ]
  },
  {
    name: "uMuthi (Velem)", note: "wayeganwe umaNdaba",
    children: [
      { name: "uKewana (Zwelonke Hezekia)", note: "kaMuthi, wayeganwe umaQoma", children: [
        { name: "uMadoda", note: "owayeganwe umaDlamini", children: [
          { name: "March", note: "oganwe umaHadebe", children: [
            { name:"Nokuthula" }, { name:"Mthenjwa" }, { name:"Msizi" }, { name:"Dumsile" }, { name:"Siyabonga" }, { name:"Nkosingiphile" }, { name:"Thembisile", note:"kumaNdlovu" }
          ]},
          { name: "MaMbongwa" },
          { name: "Bongani (Chris)" },
          { name: "Andile", note: "waganwa ukaMazibuko", children: [ { name:"Lindiwe" }, { name:"Muziwenhlanhla" }, { name:"Nonhlanhla" } ] }
        ]},
        { name: "uKhebi", note: "wayeganwe umaNyathi noma Nene", children: [
          { name: "kumaNyathi", children: [ { name:"uSbongile" } ] },
          { name: "kumaNene", children: [ { name:"Suliwe" }, { name:"Phiwayinkosi" }, { name:"Nomvula" }, { name:"Nkosikhona" } ] }
        ]},
        { name: "uNtombi", note: "wagana kwaHadebe", children: [
          { name:"Thulani" }, { name:"Mkakeni" }, { name:"Kosi" }, { name:"Mzwanele S'boniso" }, { name:"Mlindeni" }, { name:"Mehlo" }, { name:"Khehla" }
        ]},
        { name: "Njabulo Henry (Rose)", note: "waganwa umaNgobese", children: [
          { name: "Bongiwe", note: "ugane kwaKheswa" }, { name: "Ningi", note: "ugane kwaThango" }, { name: "Mthokozisi" }
        ]},
        { name: "uDolly Ellah (uvalibomvu)", note: "wazala uThemba" },
        { name: "uDaniel", note: "oganwe umaDlamini", children: [
          { name:"Tholakele" }, { name:"Nonhlanhla", note:"ugane kwaButhelezi" }, { name:"Siyabonga", note:"oganwe umaZikalala" }
        ]},
        { name: "Amawele athola oLundi kumaKhumalo", note: "Samkeliso Simon noNtokazi Princess", children: [
          { name: "Samkeliso Simon (Simo)", note: "akaganiwe okwamanje — izingane zakhe: Lwazi, Sandisiwe, Khethokuhle" },
          { name: "Ntokazi Princess", note: "akaganile" }
        ]}
      ]},
      { name: "uGqombu", note: "kaMuthi, wayeganwe umaNdlovu", children: [
        { name: "uSchanulo Eliot", note: "owaganwa umaKheswa", children: [
          { name:"uPhumelele", note:"oganwe kwaKubheka" }, { name:"Bongani" }, { name:"Phumzile", note:"oganwe kwaNgcobo" },
          { name:"Hlengiwe" }, { name:"Gcwalisile", note:"oganwe kwaHadebe" }, { name:"Phindile" },
          { name:"Lungile", note:"oganwe kwaKhanyile" }, { name:"Mzwanele" }, { name:"Zumile" }, { name:"Sandile" }
        ]},
        { name: "uNtombinjan Esta (Phephani)", note: "akagananga" }
      ]},
      { name: "uSiphiwe", note: "kaMuthi, waganwa umaHlatshwayo", children: [
        { name: "Jabulile Andrina", note: "wagana kwaMazibuko" },
        { name: "Mkhethwa" },
        { name: "Fana", note: "akabanga nangane" },
        { name: "Ntombiyakhe", note: "wagana kwaNyathi" },
        { name: "Thembi" },
        { name: "Themba" }
      ]}
    ]
  },
  {
    name: "uSilosibi", note: "wayeganwe umaNxumalo",
    children: [
      { name: "uNdala", note: "owaganwa umaNgema", children: [
        { name: "Sqazu", note: "waganwa umaThwala", children: [
          { name: "Ntombikayise" },
          { name: "Mvungazeli — Mvugazele maDuze", note: "wazala uTomoomo, Ntombenhle (wamthola kumaKhowane)" },
          { name: "Polotwane", note: "oganwe umaHlatshwayo", children: [
            { name:"Gugu" }, { name:"Phindile" }, { name:"Thandeka" }, { name:"Sosoo" }, { name:"Ncebo" }, { name:"Sbonisiso" }, { name:"Zenande" }, { name:"Lucky", note:"kwaDlamini" }
          ]},
          { name: "dokotela", note: "waganwa ukamaBule", children: [ { name:"Bongani" }, { name:"Smanga" }, { name:"Pinky" } ] },
          { name: "kumaNjoko", note: "Thokozana, kumaLushaba Nonhlanhla" },
          { name: "Mphikeleli" },
          { name: "Velaphi", note: "wazala: kwaMvelase Mondli, uMathuba kumaNdebele Nkanyiso, kumaMbhele Sanele" }
        ]},
        { name: "Thekwana", note: "owagana kwaChiya eNkandla" },
        { name: "Mthibuleli", note: "owagana kwaThwala eMnambhithi" },
        { name: "Sqokwana", note: "owagana kwaThwala" },
        { name: "Ndlelingaphi", note: "akagananga" }
      ]}
    ]
  },
  { name: "uNsontane", note: "akukho eminye imininingwane etholakalayo" },
  {
    name: "Mbodla", note: "wayeganwe umaMthembu",
    children: [
      { name: "uJosefa", note: "kaMbodla noma Ndlovu", children: [
        { name: "uMfungelwa (Vovo)", note: "owaganwa ukaMabaso", children: [
          { name:"Ni", note:"waganwa kwaShabalala" }, { name:"Ngqama", note:"oganwe kwaMsele" }, { name:"Jabulile", note:"oganwe kwaShabalala" },
          { name:"Juba" }, { name:"Guga", note:"oganwe kwaMadonsela" }, { name:"Yo", note:"oganwe kwaMdluli" },
          { name:"Khulu", note:"oganwe uma Buthelezi", children: [
            { name:"Bongi" }, { name:"amawele Sipho noSphesihle" }, { name:"Mantobi" }, { name:"Mthoko" }, { name:"Mnqobi" }, { name:"Philile (Sisii)" }
          ]}
        ]},
        { name: "uMazambane", note: "wayeganwe kaMqambi noma maMfuphi", children: [
          { name:"Khatheleni", note:"oganwe kwaNdlovu" }, { name:"Tiki", note:"owayene kwaShabalala" },
          { name:"Gothoni", note:"oganwe kwaKhanyeza" }, { name:"Landeleni", note:"oganwe kwaZondo" }, { name:"Thulani (Mbabeni)" }
        ]},
        { name: "uMbuzeni", note: "owaganwa umaShabalala", children: [ { name:"To" }, { name:"Ntombibomvu" }, { name:"Thobile" } ] },
        { name: "Dzewu", note: "owaganwa uma Hadebe", children: [
          { name:"Qhezu", note:"wagana kwaGumbi" }, { name:"Mnengwa" }, { name:"Macoco (Mtatazeli)" }, { name:"Dlezakhe" }, { name:"Khonzi" }
        ]}
      ]},
      { name: "uMhlushwa", note: "kaMbodla, owayeganwe umaCebekhulu noma maMchunu", children: [
        { name: "uMhlushwa noma Cebekhulu", children: [
          { name: "uMbalekelwa (Willy)", note: "kaMhlushwa, waganwa umaKhoza", children: [
            { name:"Ntombeningi" }, { name:"Zwelibanzi" }, { name:"Jabulile" }, { name:"Busisiwe" }, { name:"Mthokozisi" }, { name:"Sebenzile" }, { name:"Ntombenhle" }
          ]},
          { name: "Tholwaphi" },
          { name: "Nomazwi" },
          { name: "Thandekile" },
          { name: "Philimon", note: "waziwa ngoFikeni" }
        ]},
        { name: "uMhlushwa noma Mchunu", children: [
          { name: "Lahliwe", note: "wagana kwaMngadi" },
          { name: "Thoko", note: "wagana kwaMabaso" },
          { name: "uFana (Mafutha)", note: "waganwa ukaMakhathini", children: [ { name:"Bhekizizwe" }, { name:"Skhonzi" }, { name:"Gcwali" }, { name:"Nelly" } ] },
          { name: "Sibusiso (Mgqigqi)", note: "waganwa ukaMazibuko", children: [
            { name:"Sizeni", note:"wagana kwaKhumalo" }, { name:"Philisiwe" },
            { name: "Ntombeningi", note: "kumaNdlovu Mbhekiseni", children: [
              { name: "Mbhekiseni kaSibusiso (Mgqigqi)", note: "waganwa ukaMajola", children: [
                { name:"Sihle" }, { name:"Nhlanhla" }, { name:"sizwe" }, { name:"spha" }, { name:"Bongiwe" }
              ]}
            ]}
          ]}
        ]}
      ]},
      { name: "Mumuza", note: "akaganwanga, akabanga nangane" },
      { name: "Sgomfana Alfred", note: "kaMbodla, waganwa umaNgcobo", children: [
        { name: "Ntombi kaSgomfana", note: "uzala uCwecwe, uNtunda, Madida (kwaNguva)" },
        { name: "Bhekinkosi (Henqelezi)", note: "kaSgomfana, waganwa umaNdlovu", children: [ { name:"Manu (ose Winterton)" }, { name:"Mbhekiseni" } ] },
        { name: "uThembeni (ose Winterton)", note: "kaSgomfana", children: [
          { name:"uGigi (uBushwana)", note:"ungumfundisi eWinterton" }, { name:"Thuleleni" }, { name:"uThulani" }, { name:"Xolani" }, { name:"Mfanafuthi" }
        ]}
      ]}
    ]
  }
];

/* ============================================================
   RENDER TREE
   ============================================================ */
function renderNode(node, isTop){
  const hasChildren = node.children && node.children.length;
  if(!hasChildren){
    const wrap = document.createElement('div');
    wrap.className = 'leaf';
    wrap.innerHTML = `<span class="name">${node.name}</span>` + (node.note ? ` <span class="note">— ${node.note}</span>` : '');
    return wrap;
  }
  const det = document.createElement('details');
  det.className = 'node';
  const summary = document.createElement('summary');
  summary.innerHTML = `
    <div class="node-title">
      <span class="node-name">${node.name}</span>
      ${node.note ? `<span class="node-note">${node.note}</span>` : ''}
    </div>
    <span class="chev">+</span>
  `;
  det.appendChild(summary);

  const childrenWrap = document.createElement('div');
  childrenWrap.className = 'node-children';
  const inner = document.createElement('div');
  inner.className = 'node-children-inner';
  node.children.forEach(c => inner.appendChild(renderNode(c, false)));
  childrenWrap.appendChild(inner);
  det.appendChild(childrenWrap);
  return det;
}

const patriarchList = document.getElementById('patriarchList');
lineageData.forEach(p => patriarchList.appendChild(renderNode(p, true)));

/* ============================================================
   FLAT SEARCH INDEX
   ============================================================ */
const searchIndex = [];
function buildIndex(node, path){
  const currentPath = path.concat([node.name]);
  searchIndex.push({ name: node.name, note: node.note || '', path: path });
  if(node.children){
    node.children.forEach(c => buildIndex(c, currentPath));
  }
}
lineageData.forEach(p => buildIndex(p, []));

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const treeView = document.getElementById('treeView');
const searchMeta = document.getElementById('searchMeta');

function highlight(text, q){
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if(idx === -1) return text;
  return text.slice(0, idx) + '<mark>' + text.slice(idx, idx+q.length) + '</mark>' + text.slice(idx+q.length);
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim();
  if(!q){
    searchResults.classList.remove('active');
    treeView.classList.remove('hidden');
    searchMeta.textContent = '';
    searchResults.innerHTML = '';
    return;
  }
  treeView.classList.add('hidden');
  searchResults.classList.add('active');
  const matches = searchIndex.filter(item => item.name.toLowerCase().includes(q.toLowerCase()));
  searchMeta.textContent = matches.length + (matches.length === 1 ? ' umuntu otholakele' : ' abantu abatholakele');
  if(matches.length === 0){
    searchResults.innerHTML = '<div class="no-results">Akekho otholakele. Zama enye indlela yokupela igama.</div>';
    return;
  }
  searchResults.innerHTML = matches.slice(0, 80).map(m => `
    <div class="result-row">
      <div class="name">${highlight(m.name, q)}</div>
      ${m.path.length ? `<div class="path">${m.path.join(' → ')}</div>` : '<div class="path">Ikhehla / root ancestor</div>'}
      ${m.note ? `<div class="note">${m.note}</div>` : ''}
    </div>
  `).join('');
});

/* ============================================================
   NAV TOGGLE
   ============================================================ */
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.links a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('navLinks').classList.remove('open');
}));

/* ============================================================
   REGISTRATION FORM
   ============================================================ */
let benCount = 0;
const MAX_BEN = 10;
const benWrap = document.getElementById('beneficiaries-wrap');
const addBenBtn = document.getElementById('addBenBtn');

function addBeneficiary(){
  if(benCount >= MAX_BEN) return;
  benCount++;
  const div = document.createElement('div');
  div.className = 'beneficiary';
  div.dataset.index = benCount;
  div.innerHTML = `
    <div class="ben-head">
      <span>Ocishisiwe #${benCount}</span>
      <button type="button" class="remove-ben">Susa</button>
    </div>
    <div class="field-grid">
      <div class="field"><label>Isibongo</label><input type="text" class="ben-surname"></div>
      <div class="field"><label>Amagama Aphelele</label><input type="text" class="ben-names"></div>
      <div class="field"><label>Usuku Lokuzalwa</label><input type="date" class="ben-dob"></div>
      <div class="field"><label>Inombolo Kamazisi</label><input type="text" class="ben-id" maxlength="13"></div>
    </div>
  `;
  benWrap.appendChild(div);
  div.querySelector('.remove-ben').addEventListener('click', () => {
    div.remove();
    benCount--;
    updateAddBtn();
    renumberBeneficiaries();
  });
  updateAddBtn();
}
function renumberBeneficiaries(){
  const items = benWrap.querySelectorAll('.beneficiary');
  items.forEach((el, i) => { el.querySelector('.ben-head span').textContent = 'Ocishisiwe #' + (i+1); });
}
function updateAddBtn(){
  addBenBtn.disabled = benCount >= MAX_BEN;
  addBenBtn.textContent = benCount >= MAX_BEN ? 'Ufinyelele umkhawulo (10)' : '+ Engeza umuntu ocishisiwe';
}
addBenBtn.addEventListener('click', addBeneficiary);
addBeneficiary(); // start with one

const form = document.getElementById('qhulazaForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll('[required]').forEach(input => {
    const field = input.closest('.field');
    let ok = input.value.trim() !== '';
    if(input.id === 'mId' && ok){ ok = /^\d{13}$/.test(input.value.trim()); }
    if(!ok){ field.classList.add('invalid'); valid = false; }
    else { field.classList.remove('invalid'); }
  });
  if(!valid){
    formStatus.classList.remove('show');
    return;
  }

  const gender = form.querySelector('input[name="gender"]:checked');
  const beneficiaries = Array.from(benWrap.querySelectorAll('.beneficiary')).map((el, i) => {
    return {
      n: i+1,
      surname: el.querySelector('.ben-surname').value,
      names: el.querySelector('.ben-names').value,
      dob: el.querySelector('.ben-dob').value,
      id: el.querySelector('.ben-id').value
    };
  }).filter(b => b.surname || b.names || b.id);

  let body = `QHULAZA CLUB — Isicelo Sobulungu%0D%0A%0D%0A`;
  body += `A. ILUNGU ELIYINHLOKO%0D%0A`;
  body += `Isibongo: ${document.getElementById('mSurname').value}%0D%0A`;
  body += `Amagama: ${document.getElementById('mNames').value}%0D%0A`;
  body += `ID Number: ${document.getElementById('mId').value}%0D%0A`;
  body += `Cell: ${document.getElementById('mCell').value}%0D%0A`;
  body += `Gender: ${gender ? gender.value : ''}%0D%0A`;
  body += `Date of birth: ${document.getElementById('mDob').value}%0D%0A`;
  body += `Residential address: ${document.getElementById('mResAddr').value}%0D%0A`;
  body += `Postal address: ${document.getElementById('mPostAddr').value}%0D%0A%0D%0A`;
  body += `B. ABANCISHISIWE%0D%0A`;
  if(beneficiaries.length === 0){ body += `(Akekho ofakiwe)%0D%0A`; }
  beneficiaries.forEach(b => {
    body += `${b.n}. ${b.surname} ${b.names} — ID: ${b.id} — DOB: ${b.dob}%0D%0A`;
  });
  body += `%0D%0ACAUTION: Sicela unamathisele amakhophi wezitifiketi zomazisi/zokuzalwa ku-imeyili ngaphambi kokuyithumela.`;

  const mailto = `mailto:sithomo59@gmail.com?subject=${encodeURIComponent('Qhulaza Club — Isicelo Sobulungu / Membership Application')}&body=${body}`;
  window.location.href = mailto;

  formStatus.classList.add('show');
});