//#region imports

import Maths, { Mode } from "./Math";
import TypeCheck from "./TypeChecker";

//#endregion

//#region enums

export enum Diety {
    ashvins = 'ashvins',
    yama = 'yama',
    agni = 'agni',
    brahma = 'brahma or prajapati',
    soma = 'soma or chandra',
    rudra = 'rudra',
    aditi = 'aditi',
    brhaspati = 'brhaspati',
    sarpas = 'sarpas or nagas',
    pitrs = 'pitrs',
    bhaga = 'bhaga',
    aryaman = 'aryaman',
    surya = ' savitr or surya',
    vayu = 'vayu',
    tvastar = 'tvastar',
    vishvakarman = 'vishvakarman',
    indra = 'indra',
    mitra = 'mitra',
    nirrti = 'nirrti',
    apah = 'apah',
    visvedevas = 'visvedevas',
    vishnu = 'vishnu',
    vasu = 'Eight vasus',
    varuna = 'varuna',
    ajaikapada = 'ajaikapada',
    ahirbudhnya = 'ahirbudhnya',
    pushan = 'pushan',
    shiva = 'shiva',
    manmadha = 'manmadha',
    gauri = 'gauri',
    vinayaka = 'vinayaka',
    kumaraswaymi = 'kumaraswaymi',
    durga = 'durga',
    swaha = 'swaha',
    prthvi = 'prthvi',
    lehari = 'lehari',
    varuni = 'varuni'
}

export enum Symbols {
    ashvini = 'Horse\'s head',
    bharani = 'Yoni',
    krttika = 'Knife or spear',
    rohini = 'Cart or chariot, temple, banyan tree',
    mrgashirsha = 'Deer\'s head',
    ardra = 'Teardrop, diamond, a human head',
    punarvasu = 'Bow and quiver',
    pushya = 'Cow\'s udder, lotus, arrow and circle',
    ashlesha = 'Serpent',
    magha = 'Royal Throne',
    purvaPhalguni = 'Front legs of bed, hammock, fig tree',
    uttaraPhalguni = 'Four legs of bed, hammock',
    hasta = 'Hand or fist',
    chitra = 'Bright jewel or pearl',
    svati = 'Shoot of plant, coral',
    vishakha = 'Triumphal arch, potter\'s wheel',
    anuradha = 'Triumphal archway, lotus',
    jyeshtha = 'circular amulet, umbrella, earring',
    mula = 'Bunch of roots tied together, elephant goad',
    purvaAshadha = 'Elephant tusk, fan, winnowing basket',
    uttaraAshadha = 'Elephant tusk, small bed',
    shravana = 'Ear or Three Footprints',
    dhanishta = 'Drum or flute',
    shatabhisha = 'Empty circle, 1,000 flowers or stars',
    purvaBhadrapada = 'Swords or two front legs of funeral cot, man with two faces',
    uttaraBhadrapada = 'Twins, back legs of funeral cot, snake in the water',
    revati = 'Fish or a pair of fish, drum'
}

export enum StiraChara {
    stira = 'stira',
    chara = 'chara',
    dvisvabhava = 'dvisvabhava'
}

export enum Dosha {
    vata = 'vata',
    pitta = 'pitta',
    kapha = 'kapha'
}

export enum Anguli {
    /**
     * Little Finger
     */
    kanishthika = 'kanishthika',
    /**
     * Ring Finger
     */
    anamika = 'anamika',
    /**
     * Middle Finger
     */
    madhyama = 'madhyama',
    /**
     * Index Finger
     */
    tarjani = 'tarjani',
    /**
     * Thumb
     */
    angustha = 'angustha',
}

export enum Chakra {
    muladhara = 'muladhara',
    swadhishthan = 'swadhishthan',
    manipura = 'manipura',
    anahata = 'anahata',
    vishuddha = 'vishuddha',
    ajna = 'ajna',
    sahasrara = 'sahasrara'
}

export enum Ruchi {
    /**
     * sweet
     */
    madhura = 'madhura',
    /**
     * sour
     */
    amla = 'amla',
    /**
     * salt
     */
    lavana = 'lavana',
    /**
     * pungent
     */
    katu = 'katu',
    /**
     * bitter
     */
    tikta = 'tikta',
    /**
     * astringent
     */
    kashaya = 'kashaya'
}

export enum GuptaKaalaGhataka {
    truti = 1 / 3240000,//0.30e-6
    renu = 60 * GuptaKaalaGhataka.truti,
    lava = 60 * GuptaKaalaGhataka.renu,
    leekshana = 60 * GuptaKaalaGhataka.lava,
    lipta = 64.8 * GuptaKaalaGhataka.leekshana,
    vipala = 64.8 * GuptaKaalaGhataka.leekshana,
    pala = 60 * GuptaKaalaGhataka.lipta,
    vighata = 60 * GuptaKaalaGhataka.lipta,
    vinaadi = 60 * GuptaKaalaGhataka.lipta,
    ghati = 60 * GuptaKaalaGhataka.vighata,
    naadi = 60 * GuptaKaalaGhataka.vighata,
    danda = 60 * GuptaKaalaGhataka.vighata,
    muhurta = 2 * GuptaKaalaGhataka.ghati,
    ahoraatra = 30 * GuptaKaalaGhataka.muhurta,
    maasa = 30 * GuptaKaalaGhataka.ahoraatra,
    rtu = 2 * GuptaKaalaGhataka.maasa,
    ayana = 3 * GuptaKaalaGhataka.rtu,
    samvatsara = 2 * GuptaKaalaGhataka.ayana,
    devahoraatra = 2 * GuptaKaalaGhataka.ayana,
    hora = 1.25 * GuptaKaalaGhataka.muhurta,
    prahara = 3 * GuptaKaalaGhataka.hora,
    yaama = 3 * GuptaKaalaGhataka.hora,
    saavanahoraatra = 8 * GuptaKaalaGhataka.yaama,
    brahma = 3110400000000 * GuptaKaalaGhataka.samvatsara,
    manu = (8640000000 / 8520) * GuptaKaalaGhataka.brahma,
    deva = 8520 * GuptaKaalaGhataka.manu,
    pitr = 12 * GuptaKaalaGhataka.deva,
    manusya = 30 * GuptaKaalaGhataka.pitr,
    kalpa = 4320000000 * GuptaKaalaGhataka.samvatsara,
    pralaya = 4320000000 * GuptaKaalaGhataka.samvatsara,
    mahaakalpa = 72000 * GuptaKaalaGhataka.kalpa,
    mahaapralaya = 72000 * GuptaKaalaGhataka.pralaya,
    paraardha = 50 * GuptaKaalaGhataka.brahma,
    manvantara = 100 * GuptaKaalaGhataka.pitr,
    manvantaraSandhya = 177.5 * GuptaKaalaGhataka.manvantara,
    krtaYugaSandhya = 144000 * GuptaKaalaGhataka.samvatsara,
    krtaYugaSandhyaamsa = 144000 * GuptaKaalaGhataka.samvatsara,
    krtaYuga = 10 * GuptaKaalaGhataka.krtaYugaSandhya,
    totalKrtaYuga = 1728000 * GuptaKaalaGhataka.samvatsara,
    tretaaYugaSandhya = 108000 * GuptaKaalaGhataka.samvatsara,
    tretaaYugaSandhyaamsa = 108000 * GuptaKaalaGhataka.samvatsara,
    tretaaYuga = 10 * GuptaKaalaGhataka.tretaaYugaSandhya,
    totalTretaaYuga = 1296000 * GuptaKaalaGhataka.samvatsara,
    dvaaparaYugaSandhya = 72000 * GuptaKaalaGhataka.samvatsara,
    dvaaparaYugaSandhyaamsa = 72000 * GuptaKaalaGhataka.samvatsara,
    dvaaparaYuga = 10 * GuptaKaalaGhataka.dvaaparaYugaSandhya,
    totalDvaaparaYuga = 864000 * GuptaKaalaGhataka.samvatsara,
    kaliYugaSandhya = 36000 * GuptaKaalaGhataka.samvatsara,
    kaliYugaSandhyaamsa = 36000 * GuptaKaalaGhataka.samvatsara,
    kaliYuga = 10 * GuptaKaalaGhataka.kaliYugaSandhya,
    totalKaliYuga = 432000 * GuptaKaalaGhataka.samvatsara,
    caturYuga = 4320000 * GuptaKaalaGhataka.samvatsara
}

export enum SuryaSiddhantaKaalaGhataka {
    truti = 1 / 33750,//29.6e-6
    tatpara = 100 * SuryaSiddhantaKaalaGhataka.truti,
    nimesha = 30 * SuryaSiddhantaKaalaGhataka.tatpara,
    kaastha = 18 * SuryaSiddhantaKaalaGhataka.nimesha,
    kala = 30 * SuryaSiddhantaKaalaGhataka.kaastha,
    ghatika = 30 * SuryaSiddhantaKaalaGhataka.kala,
    muhurta = 2 * SuryaSiddhantaKaalaGhataka.ghatika,
    ahoraatra = 30 * SuryaSiddhantaKaalaGhataka.muhurta,
    maasa = 30 * SuryaSiddhantaKaalaGhataka.ahoraatra,
    rtu = 2 * SuryaSiddhantaKaalaGhataka.maasa,
    ayana = 3 * SuryaSiddhantaKaalaGhataka.rtu,
    samvatsara = 2 * SuryaSiddhantaKaalaGhataka.ayana,
    devahoraatra = 2 * SuryaSiddhantaKaalaGhataka.ayana,
    hora = 1.25 * SuryaSiddhantaKaalaGhataka.muhurta,
    prahara = 3 * SuryaSiddhantaKaalaGhataka.hora,
    yaama = 3 * SuryaSiddhantaKaalaGhataka.hora,
    saavanahoraatra = 8 * SuryaSiddhantaKaalaGhataka.yaama,
    brahma = 3110400000000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    manu = (8640000000 / 8520) * SuryaSiddhantaKaalaGhataka.brahma,
    deva = 8520 * SuryaSiddhantaKaalaGhataka.manu,
    pitr = 12 * SuryaSiddhantaKaalaGhataka.deva,
    manusya = 30 * SuryaSiddhantaKaalaGhataka.pitr,
    kalpa = 4320000000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    pralaya = 4320000000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    mahaakalpa = 72000 * SuryaSiddhantaKaalaGhataka.kalpa,
    mahaapralaya = 72000 * SuryaSiddhantaKaalaGhataka.pralaya,
    paraardha = 50 * SuryaSiddhantaKaalaGhataka.brahma,
    manvantara = 100 * SuryaSiddhantaKaalaGhataka.pitr,
    manvantaraSandhya = 177.5 * SuryaSiddhantaKaalaGhataka.manvantara,
    krtaYugaSandhya = 144000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    krtaYugaSandhyaamsa = 144000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    krtaYuga = 10 * SuryaSiddhantaKaalaGhataka.krtaYugaSandhya,
    totalKrtaYuga = 1728000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    tretaaYugaSandhya = 108000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    tretaaYugaSandhyaamsa = 108000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    tretaaYuga = 10 * SuryaSiddhantaKaalaGhataka.tretaaYugaSandhya,
    totalTretaaYuga = 1296000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    dvaaparaYugaSandhya = 72000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    dvaaparaYugaSandhyaamsa = 72000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    dvaaparaYuga = 10 * SuryaSiddhantaKaalaGhataka.dvaaparaYugaSandhya,
    totalDvaaparaYuga = 864000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    kaliYugaSandhya = 36000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    kaliYugaSandhyaamsa = 36000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    kaliYuga = 10 * SuryaSiddhantaKaalaGhataka.kaliYugaSandhya,
    totalKaliYuga = 432000 * SuryaSiddhantaKaalaGhataka.samvatsara,
    caturYuga = 4320000 * SuryaSiddhantaKaalaGhataka.samvatsara
}

export enum VedaKaalaGhataka {
    paramaanu = 1 / 30375,//26.3e-6
    anu = 2 * VedaKaalaGhataka.paramaanu,
    trasarenu = 3 * VedaKaalaGhataka.anu,
    truti = 3 * VedaKaalaGhataka.trasarenu,
    vedha = 100 * VedaKaalaGhataka.truti,
    lava = 3 * VedaKaalaGhataka.vedha,
    nimesa = 3 * VedaKaalaGhataka.lava,
    ksana = 3 * VedaKaalaGhataka.nimesa,
    kaastha = 5 * VedaKaalaGhataka.ksana,
    laghu = 15 * VedaKaalaGhataka.kaastha,
    danda = 15 * VedaKaalaGhataka.laghu,
    muhurta = 2 * VedaKaalaGhataka.danda,
    ahoraatra = 30 * VedaKaalaGhataka.muhurta,
    maasa = 30 * VedaKaalaGhataka.ahoraatra,
    rtu = 2 * VedaKaalaGhataka.maasa,
    ayana = 3 * VedaKaalaGhataka.rtu,
    samvatsara = 2 * VedaKaalaGhataka.ayana,
    devahoraatra = 2 * VedaKaalaGhataka.ayana,
    hora = 1.25 * VedaKaalaGhataka.muhurta,
    prahara = 3 * VedaKaalaGhataka.hora,
    yaama = 3 * VedaKaalaGhataka.hora,
    saavanahoraatra = 8 * VedaKaalaGhataka.yaama,
    brahma = 3110400000000 * VedaKaalaGhataka.samvatsara,
    manu = (8640000000 / 8520) * VedaKaalaGhataka.brahma,
    deva = 8520 * VedaKaalaGhataka.manu,
    pitr = 12 * VedaKaalaGhataka.deva,
    manusya = 30 * VedaKaalaGhataka.pitr,
    kalpa = 4320000000 * VedaKaalaGhataka.samvatsara,
    pralaya = 4320000000 * VedaKaalaGhataka.samvatsara,
    mahaakalpa = 72000 * VedaKaalaGhataka.kalpa,
    mahaapralaya = 72000 * VedaKaalaGhataka.pralaya,
    paraardha = 50 * VedaKaalaGhataka.brahma,
    manvantara = 100 * VedaKaalaGhataka.pitr,
    manvantaraSandhya = 177.5 * VedaKaalaGhataka.manvantara,
    krtaYugaSandhya = 144000 * VedaKaalaGhataka.samvatsara,
    krtaYugaSandhyaamsa = 144000 * VedaKaalaGhataka.samvatsara,
    krtaYuga = 10 * VedaKaalaGhataka.krtaYugaSandhya,
    totalKrtaYuga = 1728000 * VedaKaalaGhataka.samvatsara,
    tretaaYugaSandhya = 108000 * VedaKaalaGhataka.samvatsara,
    tretaaYugaSandhyaamsa = 108000 * VedaKaalaGhataka.samvatsara,
    tretaaYuga = 10 * VedaKaalaGhataka.tretaaYugaSandhya,
    totalTretaaYuga = 1296000 * VedaKaalaGhataka.samvatsara,
    dvaaparaYugaSandhya = 72000 * VedaKaalaGhataka.samvatsara,
    dvaaparaYugaSandhyaamsa = 72000 * VedaKaalaGhataka.samvatsara,
    dvaaparaYuga = 10 * VedaKaalaGhataka.dvaaparaYugaSandhya,
    totalDvaaparaYuga = 864000 * VedaKaalaGhataka.samvatsara,
    kaliYugaSandhya = 36000 * VedaKaalaGhataka.samvatsara,
    kaliYugaSandhyaamsa = 36000 * VedaKaalaGhataka.samvatsara,
    kaliYuga = 10 * VedaKaalaGhataka.kaliYugaSandhya,
    totalKaliYuga = 432000 * VedaKaalaGhataka.samvatsara,
    caturYuga = 4320000 * VedaKaalaGhataka.samvatsara
}

// bukthi
export enum Graha {
    surya = 'surya',
    chandra = 'chandra',
    shukra = 'shukra',
    mangala = 'mangala',
    guru = 'guru',
    shani = 'shani',
    budha = 'budha',
    /**
    * South Lunar Node
    */
    ketu = 'ketu',
    /**
    * North Lunar Node
    */
    rahu = 'rahu'
}

export enum Amsha {
    akshamsha = 'akshamsha',
    rekamsha = 'rekamsha'
}

export enum Dik {
    purva = 'purva',
    pashcima = 'pashcima',
    uttara = 'uttara',
    dakshina = 'dakshina',
    isana = 'isana',
    agneya = 'agneya',
    vayavya = 'vayavya',
    nairta = 'nairta',
    madhya = 'madhya'
}

export enum Bhuta {
    agni = 'agni',
    bhumi = 'bhumi',
    vayu = 'vayu',
    apa = 'apa',
    akasha = 'akasha'
}

export enum Rasi {
    mesha = 'mesha',
    vrshabha = 'vrshabha',
    mithuna = 'mithuna',
    karka = 'karka',
    simha = 'simha',
    kanya = 'kanya',
    tula = 'tula',
    vrscika = 'vrscika',
    dhanusa = 'dhanusa',
    makara = 'makara',
    kumbha = 'kumbha',
    meena = 'meena',
}

export enum Yuga {
    satya = 'satya',
    treta = 'treta',
    dvapara = 'dvapara',
    kali = 'kali',
}

export enum Loka {
    satya = 'satya',
    tapa = 'tapa',
    jana = 'jana',
    mahar = 'mahar',
    svar = 'svar',
    bhuvar = 'bhuvar',
    bhu = 'bhu',
    atala = 'atala',
    vitala = 'vitala',
    sutala = 'sutala',
    talatala = 'talatala',
    mahatala = 'mahatala',
    rasatala = 'rasatala',
    patala = 'patala',
}

export enum Samvatsara {
    prabhava = 'prabhava',
    vibhava = 'vibhava',
    shukla = 'shukla',
    pramoda = 'pramoda',
    prajaapati = 'prajaapati',
    angirasa = 'angirasa',
    shreemukha = 'shreemukha',
    bhaava = 'bhaava',
    yuva = 'yuva',
    dhaata = 'dhaata',
    ishvara = 'ishvara',
    bahudhaanya = 'bahudhaanya',
    pramaathi = 'pramaathi',
    vikrama = 'vikrama',
    vrshapraja = 'vrshapraja',
    chitrabhanu = 'chitrabhanu',
    subhaanu = 'subhaanu',
    taarana = 'taarana',
    paarthiva = 'paarthiva',
    vyaya = 'vyaya',
    sarvajit = 'sarvajit',
    sarvadhaari = 'sarvadhaari',
    virodhi = 'virodhi',
    vikrti = 'vikrti',
    khara = 'khara',
    nandana = 'nandana',
    vijaya = 'vijaya',
    jaya = 'jaya',
    manmatha = 'manmatha',
    durmukha = 'durmukha',
    hevilambi = 'hevilambi',
    vilambi = 'vilambi',
    vikaari = 'vikaari',
    shaarvari = 'shaarvari',
    plava = 'plava',
    shubhakrta = 'shubhakrta',
    shobhakrta = 'shobhakrta',
    krodhi = 'krodhi',
    vishvaavasu = 'vishvaavasu',
    paraabhava = 'paraabhava',
    plavanga = 'plavanga',
    keelaka = 'keelaka',
    saumya = 'saumya',
    saadhaarana = 'saadhaarana',
    virodhakrta = 'virodhakrta',
    paridhaavi = 'paridhaavi',
    pramaadica = 'pramaadica',
    ananda = 'ananda',
    raakshasa = 'raakshasa',
    nala = 'nala',
    pingala = 'pingala',
    kaalayukta = 'kaalayukta',
    siddharthi = 'siddharthi',
    raudra = 'raudra',
    durmati = 'durmati',
    dundubhi = 'dundubhi',
    rudhirodgaari = 'rudhirodgaari',
    raktaakshi = 'raktaakshi',
    krodhana = 'krodhana',
    akshaya = 'akshaya',
}

export enum Yoga {
    amrta = 'amrta',
    marana = 'marana',
    prabalarishta = 'prabalarishta',
    viskambha = 'viskambha',
    preeti = 'preeti',
    ayushmaan = 'ayushmaan',
    saubhaagya = 'saubhaagya',
    shobhana = 'shobhana',
    atiganda = 'atiganda',
    sukarma = 'sukarma',
    dhrti = 'dhrti',
    shoola = 'shoola',
    ganda = 'ganda',
    vrddhi = 'vrddhi',
    dhruva = 'dhruva',
    vyaaghata = 'vyaaghata',
    harshana = 'harshana',
    vajra = 'vajra',
    siddhi = 'siddhi',
    vyatipaata = 'vyatipaata',
    variyana = 'variyana',
    parigha = 'parigha',
    shiva = 'shiva',
    siddha = 'siddha',
    saadhya = 'saadhya',
    shubha = 'shubha',
    shukla = 'shukla',
    brahma = 'brahma',
    maahendra = 'maahendra',
    vaidhrti = 'vaidhrti',
}

export enum Karana {
    shakuni = 'shakuni',
    chatushpaada = 'chatushpaada',
    naaga = 'naaga',
    kimstughna = 'kimstughna',
    bava = 'bava',
    baalava = 'baalava',
    kaulava = 'kaulava',
    taitula = 'taitula',
    garaja = 'garaja',
    vanija = 'vanija',
    vishti = 'vishti',
}

export enum Rtu {
    vasanta = 'vasanta',
    grishma = 'grishma',
    varsha = 'varsha',
    sarad = 'sarad',
    hemanta = 'hemanta',
    sisira = 'sisira',
}

export enum Aayana {
    uthara = 'uthara',
    dakshina = 'dakshina',
}

export enum Vaara {
    aadi = 'aadi',
    soma = 'soma',
    mangala = 'mangala',
    budha = 'budha',
    guru = 'guru',
    shukra = 'shukra',
    shani = 'shani',
}

export enum Maasa {
    caitra = 'caitra',
    vaishaka = 'vaishaka',
    jyesta = 'jyesta',
    aashada = 'aashada',
    shaavana = 'shaavana',
    bhaadrapada = 'bhaadrapada',
    ashvina = 'ashvina',
    kaartika = 'kaartika',
    maargasirsa = 'maargasirsa',
    pausha = 'pausha',
    maagha = 'maagha',
    phalguna = 'phalguna',
}

export enum Paksha {
    krshna = 'krshna',
    shukla = 'shukla',
}

export enum Tithi {
    prathama = 'prathama',
    dvitiya = 'dvitiya',
    trtiya = 'trtiya',
    chaturti = 'chaturti',
    panchami = 'panchami',
    shasti = 'shasti',
    saptami = 'saptami',
    ashtami = 'ashtami',
    navami = 'navami',
    dasami = 'dasami',
    ekadasi = 'ekadasi',
    dvadasi = 'dvadasi',
    trayodasi = 'trayodasi',
    chaturdasi = 'chaturdasi',
    paurnami = 'paurnami',
    amavasya = 'amavasya',
}

export enum Nakshatra {
    ashvini = 'ashvini',
    bharani = 'bharani',
    krttika = 'krttika',
    rohini = 'rohini',
    mrgashirsha = 'mrgashirsha',
    ardra = 'ardra',
    punarvasu = 'punarvasu',
    pushya = 'pushya',
    ashlesha = 'ashlesha',
    magha = 'magha',
    purvaPhalguni = 'purvaPhalguni',
    uttaraPhalguni = 'uttaraPhalguni',
    hasta = 'hasta',
    chitra = 'chitra',
    svati = 'svati',
    vishakha = 'vishakha',
    anuradha = 'anuradha',
    jyeshtha = 'jyeshtha',
    mula = 'mula',
    purvaAshadha = 'purvaAshadha',
    uttaraAshadha = 'uttaraAshadha',
    shravana = 'shravana',
    dhanishta = 'dhanishta',
    shatabhisha = 'shatabhisha',
    purvaBhadrapada = 'purvaBhadrapada',
    uttaraBhadrapada = 'uttaraBhadrapada',
    revati = 'revati',
}

export enum CalendarType {
    saka = 'saka',
    vikrama = 'vikrama',
    vikramaKaartika = 'vikramaKaartika',
    default = 'default',
    defaultNorth = 'defaultNorth'
}

export enum Planets {
    Mercury = 'Mercury',
    Venus = 'Venus',
    Earth = 'Earth',
    Mars = 'Mars',
    Jupiter = 'Jupiter',
    Saturn = 'Saturn',
    Uranus = 'Uranus',
    Neptune = 'Neptune',
    Pluto = 'Pluto'
}

//#endregion

//#region Types

type PanchangaType = {
    akshamsha?: number,
    rekamsha?: number,
    /**
     * @type default: true
     * @type true: month starts with amaavasya
     * @type false: month starts with paurnami
     */
    maasaarambhaAmaavasya?: boolean,
    /**
     * @type default: sanskrit
     */
    language?: keyof Name['name'],
    /**
     * @type default: true
     * @type true: displays language equivalent transliteration script
     * @type false: displays selected language script
     */
    transliterate?: boolean,
    /**
     * @type default: current date and time
     * @type Date: if provide result is based on provided date
     */
    date?: Date,
    calendarType?: CalendarType,
    /**
     * @typedef sun's declination
     */
    suryaapratigraha?: { degree: string, decimal: number },
    /**
     * @typedef sun's right ascension
     */
    suryalankodhaya?: { degree: string, decimal: number },
    /**
     * @typedef moon's declination
     */
    chandraapratigraha?: { degree: string, decimal: number },
    /**
     * @typedef moon's right ascension
     */
    chandralankodhaya?: { degree: string, decimal: number }
};

type Properties = {
    rasi?: string,
    yuga?: { name: string[], currentYear: number, startsOn: Date, endsOn: Date },
    yugaStartedOn?: string,
    yugaEndsOn?: string,
    samvatsara?: { name: string[], year: number },
    yoga?: string,
    karana?: string[][],
    rtu?: string[],
    aayana?: string[][],
    vaara?: string,
    maasa?: string[],
    suryaMaasa?: string[],
    paksha?: keyof PakshaType,
    tithi?: string[],
    nakshatra?: string,
    graha?: string,
    rahuKaala?: string,
    yamaGanda?: string,
    guliKaala?: string,
    abhijit?: string,
    durMuhurta?: string,
    suryodhaya?: Date,
    suryaasthama?: Date
} & PanchangaType;

type Name = {
    name: {
        sanskrit: string[],
        odia: string[],
        malayalam: string[],
        tamil: string[],
        sinhala: string[],
        dhivehi: string[],
        telugu: string[],
        kannada: string[],
        bengali: string[],
        mongolian: string[],
        chinese: string[],
        tibetan: string[]
    }
};

type AmshaType = { [key in keyof typeof Amsha]: Name };

type DikType = { [key in keyof typeof Dik]: Name };

type BhutaType = { [key in keyof typeof Bhuta]: Name & { diety: Diety, dosha: Dosha[], anguli: Anguli, chakra: Chakra[], dik: Name, ruchi: Ruchi[] } };

type RasiType = { [key in keyof typeof Rasi]: Name & { westernZodiac: string, stiraChara: string, bhuta: BhutaType['agni'], graha: string, mitra: Rasi[], satru: Rasi[] } };

type YugaType = { [key in keyof typeof Yuga]: Name & { startsOn: Date, endsOn: Date, lifeSpan: number, height: string } };

type LokaType = { [key in keyof typeof Loka]: Name };

type SamvatsaraType = { [key in keyof typeof Samvatsara]: Name & { diety: string } };

type YogaType = { [key in keyof typeof Yoga]: Name };

type KaranaType = { [key in keyof typeof Karana]: Name & { stiraChara: string } };

type RtuType = { [key in keyof typeof Rtu]: Name };

type AayanaType = { [key in keyof typeof Aayana]: Name };

type VaaraType = { [key in keyof typeof Vaara]: Name & { graha: string, rahuKaala: string, yamaGanda: string, guliKaala: string, abhijit: string, durMuhurta: string[] } };

type MaasaType = { [key in keyof typeof Maasa]: Name & { suryaMaasa: RasiType['mesha'], rtu: RtuType['hemanta'], aayana: AayanaType['uthara'][] } };

type PakshaType = { [key in keyof typeof Paksha]: Name };

type TithiType = { [key in keyof typeof Tithi]: Name & { diety: string, karana: { [Paksha.shukla]: KaranaType['bava'][], [Paksha.krshna]: KaranaType['bava'][] } } };

type NakshatraType = { [key in keyof typeof Nakshatra]: Name & { pada: string[], description: string, associatedStars: string, graha: string, deity: string[], symbol: string, zodiac: { from: { angle: string, rasi: RasiType['mesha'] }, to: { angle: string, rasi: RasiType['mesha'] } }, westernZodiac: { from: { angle: string, rasi: RasiType['mesha'] }, to: { angle: string, rasi: RasiType['mesha'] } }, gana: string, jaati: string, vrksha: string, pashu: string, pakshi: string, nadi: string, varna: string, ratna: string } };

//#endregion

//#region Constants

const sin = (a: number) => Maths.Sin(a, Mode.Degree);

const cos = (a: number) => Maths.Cos(a, Mode.Degree);

const tan = (a: number) => Maths.Tan(a, Mode.Degree);

const sinh = (a: number) => Maths.Sinh(a, Mode.Degree);

const cosh = (a: number) => Maths.Cosh(a, Mode.Degree);

const tanh = (a: number) => Maths.Tanh(a, Mode.Degree);

const asin = (a: number) => Maths.ASin(a, Mode.Degree);

const acos = (a: number) => Maths.ACos(a, Mode.Degree);

const atan = (a: number) => Maths.ATan(a, Mode.Degree);

const degToHour = (a: number) => Maths.DegToHour(a);

const decimalToDeg = (a: number) => Maths.DecimalToDeg(a) as { degree: string, decimal: number };

const degToRad = (a: number) => Maths.DegToRad(a);

const minuteToDeg = (a: number) => Maths.MinuteToDeg(a);

const sq = (a: number) => a * a;

const cb = (a: number) => a * a * a;

const sqrt = Math.sqrt;

const cbrt = Math.cbrt;

const floor = Math.floor;

const PI = Math.PI;

const abs = Math.abs;

//#endregion

export class Panchangam {

    //#region fields

    properties: Properties = {};

    //#region Sun

    MA: { [key in Planets]: { M0: number, M1: number } } = {
        Mercury: { M0: 174.7948, M1: 4.09233445 },
        Venus: { M0: 50.4161, M1: 1.60213034 },
        Earth: { M0: 357.5291, M1: 0.98560028 },
        Mars: { M0: 19.3730, M1: 0.52402068 },
        Jupiter: { M0: 20.0202, M1: 0.08308529 },
        Saturn: { M0: 317.0207, M1: 0.03344414 },
        Uranus: { M0: 141.0498, M1: 0.01172834 },
        Neptune: { M0: 256.2250, M1: 0.00598103 },
        Pluto: { M0: 14.882, M1: 0.00396 }
    }

    EC: { [key in Planets]: { C1: number, C2: number, C3?: number, C4?: number, C5?: number, C6?: number, EC: number } } = {
        Mercury: { C1: 23.4400, C2: 2.9818, C3: 0.5255, C4: 0.1058, C5: 0.0241, C6: 0.0055, EC: 0.0026 },
        Venus: { C1: 0.7758, C2: 0.0033, EC: 0.0000 },
        Earth: { C1: 1.9148, C2: 0.0200, C3: 0.0003, EC: 0.0000 },
        Mars: { C1: 10.6912, C2: 0.6228, C3: 0.0503, C4: 0.0046, C5: 0.0005, EC: 0.0001 },
        Jupiter: { C1: 5.5549, C2: 0.1683, C3: 0.0071, C4: 0.0003, EC: 0.0001 },
        Saturn: { C1: 6.3585, C2: 0.2204, C3: 0.0106, C4: 0.0006, EC: 0.0001 },
        Uranus: { C1: 5.3042, C2: 0.1534, C3: 0.0062, C4: 0.0003, EC: 0.0001 },
        Neptune: { C1: 1.0302, C2: 0.0058, EC: 0.0001 },
        Pluto: { C1: 28.3150, C2: 4.3408, C3: 0.9214, C4: 0.2235, C5: 0.0627, C6: 0.0174, EC: 0.0096 }
    }

    POE: { [key in Planets]: { Perihelion: number, Obliquity: number } } = {
        Mercury: { Perihelion: 230.3265, Obliquity: 0.0351 },
        Venus: { Perihelion: 73.7576, Obliquity: 2.6376 },
        Earth: { Perihelion: 102.9373, Obliquity: 23.4393 },
        Mars: { Perihelion: 71.0041, Obliquity: 25.1918 },
        Jupiter: { Perihelion: 237.1015, Obliquity: 3.1189 },
        Saturn: { Perihelion: 99.4587, Obliquity: 26.7285 },
        Uranus: { Perihelion: 5.4634, Obliquity: 82.2298 },
        Neptune: { Perihelion: 182.2100, Obliquity: 27.8477 },
        Pluto: { Perihelion: 184.5484, Obliquity: 119.6075 }
    }

    Obs: { [key in Planets]: { theta0: number, theta1: number } } = {
        Mercury: { theta0: 132.3282, theta1: 6.1385025 },
        Venus: { theta0: 104.9067, theta1: -1.4813688 },
        Earth: { theta0: 280.1470, theta1: 360.9856235 },
        Mars: { theta0: 313.3827, theta1: 350.89198226 },
        Jupiter: { theta0: 145.9722, theta1: 870.5360000 },
        Saturn: { theta0: 174.3508, theta1: 810.7939024 },
        Uranus: { theta0: 29.6474, theta1: -501.1600928 },
        Neptune: { theta0: 52.4160, theta1: 536.3128662 },
        Pluto: { theta0: 122.2370, theta1: 56.3625225 }
    }

    ECAD: { [key in Planets]: { D1: number, A2: number, D3?: number, A4?: number, D5?: number, A6?: number, EA: number, ED: number } } = {
        Mercury: { A2: -0.0000, EA: 0.0000, D1: 0.0351, ED: 0.0000 },
        Venus: { A2: -0.0304, EA: 0.0001, D1: 2.6367, D3: 0.0009, ED: 0.0036 },
        Earth: { A2: -2.4657, A4: 0.0529, A6: -0.0014, EA: 0.0003, D1: 22.7908, D3: 0.5991, D5: 0.0492, ED: 0.0003 },
        Mars: { A2: -2.8608, A4: 0.0713, A6: -0.0022, EA: 0.0004, D1: 24.3880, D3: 0.7332, D5: 0.0706, ED: 0.0011 },
        Jupiter: { A2: -0.0425, EA: 0.0001, D1: 3.1173, D3: 0.0015, ED: 0.0034 },
        Saturn: { A2: -3.2338, A4: 0.0909, A6: -0.0031, EA: 0.0009, D1: 25.7696, D3: 0.8640, D5: 0.0949, ED: 0.0010 },
        Uranus: { A2: -42.5874, A4: 12.8117, A6: -2.6077, EA: 17.6902, D1: 56.9083, D3: -0.8433, D5: 26.1648, ED: 3.34 },
        Neptune: { A2: -3.5214, A4: 0.1078, A6: -0.0039, EA: 0.0163, D1: 26.7643, D3: 0.9669, D5: 0.1166, ED: 0.060 },
        Pluto: { A2: -19.3248, A4: 3.0286, A6: -0.4092, EA: 0.5052, D1: 49.8309, D3: 4.9707, D5: 5.5910, ED: 0.19 }
    }

    /**
     * J1 = (EC.C1/(Obs.theta1-MA.M1))
     * J2 = (ECAD.A2/(Obs.theta1-MA.M1))
     * J3 = (360/(Obs.theta1-MA.M1))
     */
    JT: { [key in Planets]: { J1: number, J2: number, J3: number } } = (() => {
        const transit: any = {};
        Object.keys(Planets).forEach(planet => {
            transit[planet] = {};
            const de = this.Obs[planet as keyof typeof Planets].theta1 - this.MA[planet as keyof typeof Planets].M1;
            transit[planet].J1 = this.EC[planet as keyof typeof Planets].C1 / de;
            transit[planet].J2 = this.ECAD[planet as keyof typeof Planets].A2 / de;
            transit[planet].J3 = 360 / de;
        });
        return transit;
    })();

    HA: { [key in Planets]: { H1: number, H3?: number, H5?: number } } = {
        Mercury: { H1: 0.035 },
        Venus: { H1: 2.636, H3: 0.001 },
        Earth: { H1: 22.137, H3: 0.599, H5: 0.016 },
        Mars: { H1: 23.576, H3: 0.733, H5: 0.024 },
        Jupiter: { H1: 3.116, H3: 0.002 },
        Saturn: { H1: 24.800, H3: 0.864, H5: 0.032 },
        Uranus: { H1: 28.680, H3: -0.843, H5: 8.722 },
        Neptune: { H1: 26.668, H3: 0.967, H5: 0.039 },
        Pluto: { H1: 38.648, H3: 4.971, H5: 1.864 }
    }

    RHA: { [key in Planets]: { h0: number, dSun: number, sinH0: number } } = {
        Mercury: { h0: -0.69, dSun: 1.38, sinH0: -0.0120 },
        Venus: { h0: -0.37, dSun: 0.74, sinH0: -0.0064 },
        Earth: { h0: -0.83, dSun: 0.53, sinH0: -0.0146 },
        Mars: { h0: -0.17, dSun: 0.35, sinH0: -0.0031 },
        Jupiter: { h0: -0.05, dSun: 0.10, sinH0: -0.0009 },
        Saturn: { h0: -0.03, dSun: 0.06, sinH0: -0.0005 },
        Uranus: { h0: -0.01, dSun: 0.03, sinH0: -0.0002 },
        Neptune: { h0: -0.01, dSun: 0.02, sinH0: -0.0002 },
        Pluto: { h0: -0.01, dSun: 0.01, sinH0: -0.0001 }
    }

    CS: { [key in Planets]: { C: number, S: number } } = {
        Mercury: { C: 94.5, S: 0 },
        Venus: { C: 3.1, S: 0.1 },
        Earth: { C: 7.7, S: 9.9 },
        Mars: { C: 42.8, S: 11.4 },
        Jupiter: { C: 22.2, S: 0.2 },
        Saturn: { C: 25.4, S: 13.0 },
        Uranus: { C: 21.2, S: 178.1 },
        Neptune: { C: 4.1, S: 14.1 },
        Pluto: { C: 114.6, S: 69.3 }
    }

    DER: { [key in Planets]: { ra: number, d: number, omg: number, i: number, w: number, w1: number, w2: number } } = {
        Mercury: { ra: 281.0097, d: 61.4143, omg: 48.330893, i: 7.004986, w: 29.125226, w1: 329.5469, w2: 6.1385025 },
        Venus: { ra: 272.76, d: 67.16, omg: 76.679920, i: 3.394662, w: 54.883787, w1: 160.20, w2: -1.4813688 },
        Earth: { ra: 0, d: 90, omg: 174.873174, i: 0, w: 288.064174, w1: 190.147, w2: 360.9856235 },
        Mars: { ra: 317.68143, d: 52.88650, omg: 49.558093, i: 1.849726, w: 286.502141, w1: 176.630, w2: 350.89198226 },
        Jupiter: { ra: 268.056595, d: 64.495303, omg: 100.464441, i: 1.303270, w: 273.866868, w1: 284.95, w2: 870.5360000 },
        Saturn: { ra: 40.589, d: 83.537, omg: 113.665524, i: 2.488878, w: 339.391263, w1: 38.90, w2: 810.7939024 },
        Uranus: { ra: 257.311, d: -15.175, omg: 74.005947, i: 0.773196, w: 98.999212, w1: 203.81, w2: -501.1600928 },
        Neptune: { ra: 299.36, d: 43.46, omg: 131.784057, i: 1.769952, w: 276.339634, w1: 253.18, w2: 536.3128492 },
        Pluto: { ra: 132.993, d: -6.163, omg: 110.307, i: 17.140, w: 113.768, w1: 302.695, w2: 56.3625225 }
    }

    GVT = {
        Sun: { g: 27.964, weight: 1398 },
        Mercury: { g: 0.376, weight: 19 },
        Venus: { g: 0.905, weight: 45 },
        Earth: { g: 1.000, weight: 50 },
        Mars: { g: 0.379, weight: 19 },
        Jupiter: { g: 2.530, weight: 127 },
        Saturn: { g: 1.064, weight: 53 },
        Uranus: { g: 0.905, weight: 45 },
        Neptune: { g: 1.137, weight: 57 },
        Pluto: { g: 0.067, weight: 3 },
        Io: { g: 0.185, weight: 9 },
        Moon: { g: 0.164, weight: 8 },
        Ganymede: { g: 0.146, weight: 7 },
        Titan: { g: 0.139, weight: 7 },
        Europa: { g: 0.133, weight: 7 },
        Callisto: { g: 0.128, weight: 6 },
        Triton: { g: 0.080, weight: 4 }
    }

    //#endregion

    //#region Moon

    MEC: { [key in Planets]?: { a: number, e: number, i: number, w: number, omg: number, M0: number } } = {
        Mercury: { a: 0.38710, e: 0.20563, i: 7.005, w: 29.125, omg: 48.331, M0: 174.795 },
        Venus: { a: 0.72333, e: 0.00677, i: 3.395, w: 54.884, omg: 76.680, M0: 50.416 },
        Earth: { a: 1.00000, e: 0.01671, i: 0.000, w: 288.064, omg: 174.873, M0: 357.529 },
        Mars: { a: 1.52368, e: 0.09340, i: 1.850, w: 286.502, omg: 49.558, M0: 19.373 },
        Jupiter: { a: 5.20260, e: 0.04849, i: 1.303, w: 273.867, omg: 100.464, M0: 20.020 },
        Saturn: { a: 9.55491, e: 0.05551, i: 2.489, w: 339.391, omg: 113.666, M0: 317.021 },
        Uranus: { a: 19.21845, e: 0.04630, i: 0.773, w: 98.999, omg: 74.006, M0: 141.050 },
        Neptune: { a: 30.11039, e: 0.00899, i: 1.770, w: 276.340, omg: 131.784, M0: 256.225 },
        Pluto: { a: 39.543, e: 0.2490, i: 17.140, w: 113.768, omg: 110.307, M0: 14.882 }
    }

    NAP: { [key in Planets]?: { n: number, a1e2: number, p: number } } = {
        Mercury: { n: 4.092317, a1e2: 0.37073, p: 77.456 },
        Venus: { n: 1.602136, a1e2: 0.72330, p: 131.564 },
        Earth: { n: 0.985608, a1e2: 0.99972, p: 102.937 },
        Mars: { n: 0.524039, a1e2: 1.51039, p: 336.060 },
        Jupiter: { n: 0.083056, a1e2: 5.19037, p: 14.331 },
        Saturn: { n: 0.033371, a1e2: 9.52547, p: 93.057 },
        Uranus: { n: 0.011698, a1e2: 19.17725, p: 173.005 },
        Neptune: { n: 0.005965, a1e2: 30.10796, p: 48.124 },
        Pluto: { n: 0.003964, a1e2: 37.09129, p: 224.075 }
    }

    RAD: { [key in Planets | 'Sun']?: { ra: { decimal: number, degree: string }, d: { decimal: number, AU: number } } } = {
        Sun: { ra: { decimal: 280.710, degree: '18h42m50s' }, d: { decimal: -23.074, AU: 0.98331 } },
        Mercury: { ra: { decimal: 268.693, degree: '17h54m46s' }, d: { decimal: -20.296, AU: 0.70403 } },
        Venus: { ra: { decimal: 316.189, degree: '21h04m45s' }, d: { decimal: -18.614, AU: 1.3061 } },
        Mars: { ra: { decimal: 8.335, degree: '0h33m20s' }, d: { decimal: +3.660, AU: 1.1115 } },
        Jupiter: { ra: { decimal: 170.120, degree: '11h20m29s' }, d: { decimal: +5.567, AU: 4.9716 } },
        Saturn: { ra: { decimal: 100.256, degree: '6h41m01s' }, d: { decimal: +22.420, AU: 8.0443 } },
        Uranus: { ra: { decimal: 333.148, degree: '22h12m36s' }, d: { decimal: -11.868, AU: 20.654 } },
        Neptune: { ra: { decimal: 313.525, degree: '20h54m06s' }, d: { decimal: -17.459, AU: 30.973 } },
        Pluto: { ra: { decimal: 260.277, degree: '17h21m07s' }, d: { decimal: -14.497, AU: 31.700 } }
    }

    ACU: { [key in Planets | 'Sun']?: { ra: number, d: number, er: number } } = {
        Sun: { ra: 0.03, d: 0.01, er: 0.0000 },
        Mercury: { ra: 0.09, d: 0.04, er: 0.0013 },
        Venus: { ra: 0.17, d: 0.05, er: 0.0008 },
        Mars: { ra: 0.26, d: 0.07, er: 0.0018 },
        Jupiter: { ra: 0.32, d: 0.12, er: 0.0093 },
        Saturn: { ra: 1.08, d: 0.43, er: 0.049 },
        Uranus: { ra: 1.00, d: 0.35, er: 0.047 },
        Neptune: { ra: 0.68, d: 0.2, er: 0.072 }
    }

    APR: { [key in Planets | 'Sun']?: { ra: { 3: number, 2: number, 1: number, 0: number }, d: { 3: number, 2: number, 1: number, 0: number }, er: { 3: number, 2: number, 1: number, 0: number } } } = {
        Sun: { ra: { 3: 0.14, 2: 0.032, 1: 0.032, 0: 0.032 }, d: { 3: 0.26, 2: 0.011, 1: 0.011, 0: 0.011 }, er: { 3: 0.0001, 2: 0.0001, 1: 0.0001, 0: 0.0001 } },
        Mercury: { ra: { 3: 2.3, 2: 2.3, 1: 0.45, 0: 0.088 }, d: { 3: 5.0, 2: 4.9, 1: 0.23, 0: 0.045 }, er: { 3: 0.0084, 2: 0.0084, 1: 0.0056, 0: 0.0013 } },
        Venus: { ra: { 3: 3.4, 2: 3.4, 1: 0.17, 0: 0.17 }, d: { 3: 8.2, 2: 7.9, 1: 0.05, 0: 0.05 }, er: { 3: 0.0045, 2: 0.0045, 1: 0.00078, 0: 0.00077 } },
        Mars: { ra: { 3: 2.6, 2: 2.6, 1: 0.41, 0: 0.26 }, d: { 3: 6.3, 2: 6.5, 1: 0.14, 0: 0.074 }, er: { 3: 0.0028, 2: 0.0028, 1: 0.0026, 0: 0.0017 } },
        Jupiter: { ra: { 3: 0.87, 2: 0.86, 1: 0.32, 0: 0.32 }, d: { 3: 1.8, 2: 1.6, 1: 0.12, 0: 0.12 }, er: { 3: 0.0095, 2: 0.0095, 1: 0.0094, 0: 0.0093 } },
        Saturn: { ra: { 3: 1.2, 2: 1.2, 1: 1.1, 0: 1.1 }, d: { 3: 3.2, 2: 3.0, 1: 0.44, 0: 0.43 }, er: { 3: 0.049, 2: 0.049, 1: 0.049, 0: 0.049 } },
        Uranus: { ra: { 3: 1.1, 2: 0.99, 1: 1.0, 0: 1.0 }, d: { 3: 1.1, 2: 1.1, 1: 0.35, 0: 0.35 }, er: { 3: 0.047, 2: 0.047, 1: 0.047, 0: 0.047 } },
        Neptune: { ra: { 3: 1.1, 2: 1.1, 1: 0.68, 0: 0.68 }, d: { 3: 1.4, 2: 1.4, 1: 0.27, 0: 0.27 }, er: { 3: 0.072, 2: 0.072, 1: 0.072, 0: 0.072 } }
    }

    LMF: { [key in 'L' | 'M' | 'F']: { C0: number, C1: number } } = {
        L: { C0: 218.316, C1: 13.176396 },
        M: { C0: 134.963, C1: 13.064993 },
        F: { C0: 93.272, C1: 13.229350 }
    }

    //#endregion

    //#region Members

    Amsha: AmshaType = {
        [Amsha.akshamsha]: {
            name: {
                sanskrit: [''],
                odia: [''],
                malayalam: [''],
                tamil: [''],
                sinhala: [''],
                dhivehi: [''],
                telugu: [''],
                kannada: [''],
                bengali: [''],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Amsha.rekamsha]: {
            name: {
                sanskrit: [''],
                odia: [''],
                malayalam: [''],
                tamil: [''],
                sinhala: [''],
                dhivehi: [''],
                telugu: [''],
                kannada: [''],
                bengali: [''],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        }
    }

    Dik: DikType = {
        [Dik.purva]: {
            name: {
                sanskrit: [''],
                odia: [''],
                malayalam: [''],
                tamil: [''],
                sinhala: [''],
                dhivehi: [''],
                telugu: [''],
                kannada: [''],
                bengali: [''],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Dik.pashcima]: {
            name: {
                sanskrit: [''],
                odia: [''],
                malayalam: [''],
                tamil: [''],
                sinhala: [''],
                dhivehi: [''],
                telugu: [''],
                kannada: [''],
                bengali: [''],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Dik.uttara]: {
            name: {
                sanskrit: [''],
                odia: [''],
                malayalam: [''],
                tamil: [''],
                sinhala: [''],
                dhivehi: [''],
                telugu: [''],
                kannada: [''],
                bengali: [''],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Dik.dakshina]: {
            name: {
                sanskrit: [''],
                odia: [''],
                malayalam: [''],
                tamil: [''],
                sinhala: [''],
                dhivehi: [''],
                telugu: [''],
                kannada: [''],
                bengali: [''],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Dik.isana]: {
            name: {
                sanskrit: [''],
                odia: [''],
                malayalam: [''],
                tamil: [''],
                sinhala: [''],
                dhivehi: [''],
                telugu: [''],
                kannada: [''],
                bengali: [''],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Dik.agneya]: {
            name: {
                sanskrit: [''],
                odia: [''],
                malayalam: [''],
                tamil: [''],
                sinhala: [''],
                dhivehi: [''],
                telugu: [''],
                kannada: [''],
                bengali: [''],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Dik.vayavya]: {
            name: {
                sanskrit: [''],
                odia: [''],
                malayalam: [''],
                tamil: [''],
                sinhala: [''],
                dhivehi: [''],
                telugu: [''],
                kannada: [''],
                bengali: [''],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Dik.nairta]: {
            name: {
                sanskrit: [''],
                odia: [''],
                malayalam: [''],
                tamil: [''],
                sinhala: [''],
                dhivehi: [''],
                telugu: [''],
                kannada: [''],
                bengali: [''],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        /**
         * only for vastu
         */
        [Dik.madhya]: {
            name: {
                sanskrit: [''],
                odia: [''],
                malayalam: [''],
                tamil: [''],
                sinhala: [''],
                dhivehi: [''],
                telugu: [''],
                kannada: [''],
                bengali: [''],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        }
    }

    Bhuta: BhutaType = {
        [Bhuta.agni]: {
            name: {
                sanskrit: ['अग्नि'],
                odia: ['ମେଷ'],
                malayalam: ['മേടം'],
                tamil: ['மேசம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మేషము'],
                kannada: ['ಮೇಷ'],
                bengali: ['মেষ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.swaha,
            dosha: [Dosha.pitta],
            anguli: Anguli.angustha,
            chakra: [Chakra.manipura],
            dik: this.Dik.dakshina,
            ruchi: [Ruchi.amla, Ruchi.lavana, Ruchi.katu]
        },
        [Bhuta.bhumi]: {
            name: {
                sanskrit: ['पृथ्वी'],
                odia: ['ମେଷ'],
                malayalam: ['മേടം'],
                tamil: ['மேசம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మేషము'],
                kannada: ['ಮೇಷ'],
                bengali: ['মেষ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.prthvi,
            dosha: [Dosha.kapha],
            anguli: Anguli.anamika,
            chakra: [Chakra.muladhara],
            dik: this.Dik.madhya,
            ruchi: [Ruchi.madhura, Ruchi.amla, Ruchi.kashaya]
        },
        [Bhuta.vayu]: {
            name: {
                sanskrit: ['वायु'],
                odia: ['ମେଷ'],
                malayalam: ['മേടം'],
                tamil: ['மேசம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మేషము'],
                kannada: ['ಮೇಷ'],
                bengali: ['মেষ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.lehari,
            dosha: [Dosha.vata],
            anguli: Anguli.tarjani,
            chakra: [Chakra.manipura],
            dik: this.Dik.pashcima,
            ruchi: [Ruchi.katu, Ruchi.tikta, Ruchi.kashaya]
        },
        [Bhuta.apa]: {
            name: {
                sanskrit: ['अप'],
                odia: ['ମେଷ'],
                malayalam: ['മേടം'],
                tamil: ['மேசம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మేషము'],
                kannada: ['ಮೇಷ'],
                bengali: ['মেষ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.varuni,
            dosha: [Dosha.pitta, Dosha.kapha],
            anguli: Anguli.kanishthika,
            chakra: [Chakra.swadhishthan],
            dik: this.Dik.uttara,
            ruchi: [Ruchi.madhura, Ruchi.lavana]
        },
        [Bhuta.akasha]: {
            name: {
                sanskrit: ['आकाश'],
                odia: ['ମେଷ'],
                malayalam: ['മേടം'],
                tamil: ['மேசம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మేషము'],
                kannada: ['ಮೇಷ'],
                bengali: ['মেষ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu,
            dosha: [Dosha.vata],
            anguli: Anguli.madhyama,
            chakra: [Chakra.vishuddha, Chakra.ajna, Chakra.sahasrara],
            dik: this.Dik.purva,
            ruchi: [Ruchi.tikta]
        }
    }

    Rasi: RasiType = {
        [Rasi.mesha]: {
            name: {
                sanskrit: ['मेष'],
                odia: ['ମେଷ'],
                malayalam: ['മേടം'],
                tamil: ['மேசம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మేషము'],
                kannada: ['ಮೇಷ'],
                bengali: ['মেষ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Aries',
            stiraChara: StiraChara.chara,
            bhuta: this.Bhuta.agni,
            graha: Graha.mangala,
            mitra: [],
            satru: []
        },
        [Rasi.vrshabha]: {
            name: {
                sanskrit: ['वृषभ'],
                odia: ['ବୃଷ'],
                malayalam: ['ഇടവം'],
                tamil: ['ரிசபம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వృషభము'],
                kannada: ['ವೃಷಭ'],
                bengali: ['বৃষ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Taurus',
            stiraChara: StiraChara.stira,
            bhuta: this.Bhuta.bhumi,
            graha: Graha.shukra,
            mitra: [],
            satru: []
        },
        [Rasi.mithuna]: {
            name: {
                sanskrit: ['मिथुन'],
                odia: ['ମିଥୁନ'],
                malayalam: ['മിഥുനം'],
                tamil: ['மிதுனம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మిథునము'],
                kannada: ['ಮಿಥುನ'],
                bengali: ['মিথুন'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Gemini',
            stiraChara: StiraChara.dvisvabhava,
            bhuta: this.Bhuta.vayu,
            graha: Graha.budha,
            mitra: [],
            satru: []
        },
        [Rasi.karka]: {
            name: {
                sanskrit: ['कर्क'],
                odia: ['କର୍କଟ'],
                malayalam: ['കർക്കടകം'],
                tamil: ['கடகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['కర్కాటకము'],
                kannada: ['ಕರ್ಕಾಟಕ'],
                bengali: ['কর্কট'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Cancer',
            stiraChara: StiraChara.chara,
            bhuta: this.Bhuta.apa,
            graha: Graha.chandra,
            mitra: [],
            satru: []
        },
        [Rasi.simha]: {
            name: {
                sanskrit: ['सिंह'],
                odia: ['ସିଂହ'],
                malayalam: ['ചിങ്ങം'],
                tamil: ['சிம்மம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సింహము'],
                kannada: ['ಸಿಂಹ'],
                bengali: ['সিংহ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Leo',
            stiraChara: StiraChara.stira,
            bhuta: this.Bhuta.agni,
            graha: Graha.surya,
            mitra: [],
            satru: []
        },
        [Rasi.kanya]: {
            name: {
                sanskrit: ['कन्या'],
                odia: ['କନ୍ୟା'],
                malayalam: ['കന്നി'],
                tamil: ['கன்னி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['కన్య'],
                kannada: ['ಕನ್ಯಾ'],
                bengali: ['কন্যা'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Virgo',
            stiraChara: StiraChara.dvisvabhava,
            bhuta: this.Bhuta.bhumi,
            graha: Graha.budha,
            mitra: [],
            satru: []
        },
        [Rasi.tula]: {
            name: {
                sanskrit: ['तुला'],
                odia: ['ତୁଳା'],
                malayalam: ['തുലാം'],
                tamil: ['துலாம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['తుల'],
                kannada: ['ತುಲಾ'],
                bengali: ['তুলা'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Libra',
            stiraChara: StiraChara.chara,
            bhuta: this.Bhuta.vayu,
            graha: Graha.shukra,
            mitra: [],
            satru: []
        },
        [Rasi.vrscika]: {
            name: {
                sanskrit: ['वृश्चिक'],
                odia: ['ବିଛା'],
                malayalam: ['വൃശ്ചികം'],
                tamil: ['விருச்சிகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వృచ్చికము'],
                kannada: ['ವೃಶ್ಚಿಕ'],
                bengali: ['বৃশ্চিক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Scorpio',
            stiraChara: StiraChara.stira,
            bhuta: this.Bhuta.apa,
            graha: Graha.mangala,
            mitra: [],
            satru: []
        },
        [Rasi.dhanusa]: {
            name: {
                sanskrit: ['धनुष'],
                odia: ['ଧନୁ'],
                malayalam: ['ധനു'],
                tamil: ['தனுசு'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ధనుస్సు'],
                kannada: ['ಧನು'],
                bengali: ['ধনু'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Sagittarius',
            stiraChara: StiraChara.dvisvabhava,
            bhuta: this.Bhuta.agni,
            graha: Graha.guru,
            mitra: [],
            satru: []
        },
        [Rasi.makara]: {
            name: {
                sanskrit: ['मकर'],
                odia: ['ମକର'],
                malayalam: ['മകരം'],
                tamil: ['மகரம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మకరము'],
                kannada: ['ಮಕರ'],
                bengali: ['মকর'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Capricorn',
            stiraChara: StiraChara.chara,
            bhuta: this.Bhuta.bhumi,
            graha: Graha.shani,
            mitra: [],
            satru: []
        },
        [Rasi.kumbha]: {
            name: {
                sanskrit: ['कुम्भ'],
                odia: ['କୁମ୍ଭ'],
                malayalam: ['കുംഭം'],
                tamil: ['கும்பம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['కుంభము'],
                kannada: ['ಕುಂಭ'],
                bengali: ['কুম্ভ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Aquarius',
            stiraChara: StiraChara.stira,
            bhuta: this.Bhuta.vayu,
            graha: Graha.shani,
            mitra: [],
            satru: []
        },
        [Rasi.meena]: {
            name: {
                sanskrit: ['मीन'],
                odia: ['ମୀନ'],
                malayalam: ['മീനം'],
                tamil: ['மீனம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మీనము'],
                kannada: ['ಮೀನ'],
                bengali: ['মীন'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            westernZodiac: 'Pisces',
            stiraChara: StiraChara.dvisvabhava,
            bhuta: this.Bhuta.apa,
            graha: Graha.guru,
            mitra: [],
            satru: []
        }
    }

    Yuga: YugaType = {
        [Yuga.satya]: {
            name: {
                sanskrit: ['सत्ययुग', 'कृतयुग'],
                odia: ['ସତ୍ଯଯୁଗ', 'କୃତଯୁଗ'],
                malayalam: ['സത്യയുഗ', 'കൃതയുഗ'],
                tamil: ['சத்ய யுகம்', 'கிருத யுகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సత్యయుగ', 'కృతయుగ'],
                kannada: ['ಸತ್ಯಯುಗ', 'ಕೃತಯುಗ'],
                bengali: ['সত্যযুগ', 'কৃতযুগ'],
                mongolian: [''],
                chinese: ['圆满时'],
                tibetan: ['']
            },
            startsOn: new Date(-3891102, 0, 1),
            endsOn: new Date(-2163103, 0, 1),
            lifeSpan: 100000,
            height: '33 ft, 6 inches'
        },
        [Yuga.treta]: {
            name: {
                sanskrit: ['त्रेतायुग'],
                odia: ['ତ୍ରେତାଯୁଗ'],
                malayalam: ['ത്രേതായുഗ'],
                tamil: ['திரேதா யுகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['త్రేతాయుగ'],
                kannada: ['ತ್ರೇತಾಯುಗ'],
                bengali: ['ত্রেতাযুগ'],
                mongolian: [''],
                chinese: ['三分时'],
                tibetan: ['']
            },
            startsOn: new Date(-2163102, 0, 1),
            endsOn: new Date(-867103, 0, 1),
            lifeSpan: 10000,
            height: '22 ft, 4 inches'
        },
        [Yuga.dvapara]: {
            name: {
                sanskrit: ['द्वापरयुग'],
                odia: ['ଦ୍ଵାପରଯୁଗ'],
                malayalam: ['ദ്വാപരയുഗ'],
                tamil: ['துவாபர யுகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ద్వాపరయుగ'],
                kannada: ['ದ್ವಾಪರಯುಗ'],
                bengali: ['দ্বাপরযুগ'],
                mongolian: [''],
                chinese: ['二分时'],
                tibetan: ['']
            },
            startsOn: new Date(-867102, 0, 1),
            endsOn: new Date(-3103, 0, 1),
            lifeSpan: 1000,
            height: '11 ft, 2 inches'
        },
        [Yuga.kali]: {
            name: {
                sanskrit: ['कलियुग'],
                odia: ['କଲିଯୁଗ'],
                malayalam: ['കലിയുഗ'],
                tamil: ['கலியுகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['కలియుగ'],
                kannada: ['ಕಲಿಯುಗ'],
                bengali: ['কলিযুগ'],
                mongolian: [''],
                chinese: ['争斗时'],
                tibetan: ['']
            },
            startsOn: new Date(-3102, 0, 1),
            endsOn: new Date(428899, 0, 1),
            lifeSpan: 100,
            height: '5 ft, 3 inches'
        }
    }

    Loka: LokaType = {
        [Loka.satya]: {
            name: {
                sanskrit: ['सत्यलोक'],
                odia: ['ସତ୍ଯଲୋକ'],
                malayalam: ['സത്യലോക'],
                tamil: ['சத்ய லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సత్యలోక'],
                kannada: ['ಸತ್ಯಲೋಕ'],
                bengali: ['সত্যলোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.tapa]: {
            name: {
                sanskrit: ['तपलोक'],
                odia: ['ତପଲୋକ'],
                malayalam: ['തപലോക'],
                tamil: ['தப லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['తపలోక'],
                kannada: ['ತಪಲೋಕ'],
                bengali: ['তপলোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.jana]: {
            name: {
                sanskrit: ['जनलोक'],
                odia: ['ଜନଲୋକ'],
                malayalam: ['ജനലോക'],
                tamil: ['ஜன லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['జనలోక'],
                kannada: ['ಜನಲೋಕ'],
                bengali: ['জনলোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.mahar]: {
            name: {
                sanskrit: ['महर्लोक'],
                odia: ['ମହର୍ଲୋକ'],
                malayalam: ['മഹര്ലോക'],
                tamil: ['மகர லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మహర్లోక'],
                kannada: ['ಮಹರ್ಲೋಕ'],
                bengali: ['মহর্লোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.svar]: {
            name: {
                sanskrit: ['स्वर्लोक'],
                odia: ['ସ୍ଵର୍ଲୋକ'],
                malayalam: ['സ്വര്ലോക'],
                tamil: ['சுவர் லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['స్వర్లోక'],
                kannada: ['ಸ್ವರ್ಲೋಕ'],
                bengali: ['স্বর্লোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.bhuvar]: {
            name: {
                sanskrit: ['भुवर्लोक'],
                odia: ['ଭୁଵର୍ଲୋକ'],
                malayalam: ['ഭുവര്ലോക'],
                tamil: ['புவர் லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['భువర్లోక'],
                kannada: ['ಭುವರ್ಲೋಕ'],
                bengali: ['ভুবর্লোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.bhu]: {
            name: {
                sanskrit: ['भूलोक'],
                odia: ['ଭୂଲୋକ'],
                malayalam: ['ഭൂലോക'],
                tamil: ['புலோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['భూలోక'],
                kannada: ['ಭೂಲೋಕ'],
                bengali: ['ভূলোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.atala]: {
            name: {
                sanskrit: ['अतळलोक'],
                odia: ['ଅତଳଲୋକ'],
                malayalam: ['അതളലോക'],
                tamil: ['அதல லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['అతళలోక'],
                kannada: ['ಅತಳಲೋಕ'],
                bengali: ['অতললোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.vitala]: {
            name: {
                sanskrit: ['वितळलोक'],
                odia: ['ଵିତଳଲୋକ'],
                malayalam: ['വിതളലോക'],
                tamil: ['விதல லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వితళలోక'],
                kannada: ['ವಿತಳಲೋಕ'],
                bengali: ['বিতললোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.sutala]: {
            name: {
                sanskrit: ['सुतळलोक'],
                odia: ['ସୁତଳଲୋକ'],
                malayalam: ['സുതളലോക'],
                tamil: ['சுதல லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సుతళలోక'],
                kannada: ['ಸುತಳಲೋಕ'],
                bengali: ['সুতললোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.talatala]: {
            name: {
                sanskrit: ['तलातळलोक'],
                odia: ['ତଲାତଳଲୋକ'],
                malayalam: ['തലാതളലോക'],
                tamil: ['தலாதல லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['తలాతళలోక'],
                kannada: ['ತಲಾತಳಲೋಕ'],
                bengali: ['তলাতললোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.mahatala]: {
            name: {
                sanskrit: ['महातळलोक'],
                odia: ['ମହାତଳଲୋକ'],
                malayalam: ['മഹാതളലോക'],
                tamil: ['மகாதல லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మహాతళలోక'],
                kannada: ['ಮಹಾತಳಲೋಕ'],
                bengali: ['মহাতললোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.rasatala]: {
            name: {
                sanskrit: ['रसातळलोक'],
                odia: ['ରସାତଳଲୋକ'],
                malayalam: ['രസാതളലോക'],
                tamil: ['ரசாதல லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['రసాతళలోక'],
                kannada: ['ರಸಾತಳಲೋಕ'],
                bengali: ['রসাতললোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Loka.patala]: {
            name: {
                sanskrit: ['पाताळलोक'],
                odia: ['ପାତାଳଲୋକ'],
                malayalam: ['പാതാളലോക'],
                tamil: ['பாதாள லோகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['పాతాళలోక'],
                kannada: ['ಪಾತಾಳಲೋಕ'],
                bengali: ['পাতাললোক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        }
    }

    Samvatsara: SamvatsaraType = {
        [Samvatsara.prabhava]: {
            name: {
                sanskrit: ['प्रभव'],
                odia: ['ପ୍ରଭଵ'],
                malayalam: ['പ്രഭവ'],
                tamil: ['பிரபவ', 'நற்றோன்றல்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ప్రభవ'],
                kannada: ['ಪ್ರಭವ'],
                bengali: ['প্রভব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.vibhava]: {
            name: {
                sanskrit: ['विभव'],
                odia: ['ଵିଭଵ'],
                malayalam: ['വിഭവ'],
                tamil: ['விபவ', 'உயர்தோன்றல்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['విభవ'],
                kannada: ['ವಿಭವ'],
                bengali: ['বিভব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.shukla]: {
            name: {
                sanskrit: ['शुक्ल'],
                odia: ['ଶୁକ୍ଲ'],
                malayalam: ['ശുക്ല'],
                tamil: ['சுக்ல', 'வெள்ளொளி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శుక్ల'],
                kannada: ['ಶುಕ್ಲ'],
                bengali: ['শুক্ল'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.pramoda]: {
            name: {
                sanskrit: ['प्रमोद'],
                odia: ['ପ୍ରମୋଦୂତ'],
                malayalam: ['പ്രമോദൂത'],
                tamil: ['பிரமோதூத', 'பேருவகை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ప్రమోద్యూత'],
                kannada: ['ಪ್ರಮೋದೂತ'],
                bengali: ['প্রমোদূত'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.prajaapati]: {
            name: {
                sanskrit: ['प्रजापति'],
                odia: ['ପ୍ରଜୋତ୍ପତ୍ତି'],
                malayalam: ['പ്രജോത്പത്തി'],
                tamil: ['பிரசோற்பத்தி', 'மக்கட்செல்வம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ప్రజోత్పత్తి'],
                kannada: ['ಪ್ರಜಾಪತಿ'],
                bengali: ['প্রজোত্পত্তি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.angirasa]: {
            name: {
                sanskrit: ['अंगिरस'],
                odia: ['ଆଂଗୀରସ'],
                malayalam: ['ആംഗീരസ'],
                tamil: ['ஆங்கீரச', 'அயல்முனி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ఆంగీరస'],
                kannada: ['ಅಂಗಿರಸ'],
                bengali: ['আংগীরস'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.shreemukha]: {
            name: {
                sanskrit: ['श्रीमुख'],
                odia: ['ଶ୍ରୀମୁଖ'],
                malayalam: ['ശ്രീമുഖ'],
                tamil: ['ஸ்ரீமுக', 'திருமுகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శ్రీముఖ'],
                kannada: ['ಶ್ರೀಮುಖ'],
                bengali: ['শ্রীমুখ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.bhaava]: {
            name: {
                sanskrit: ['भाव'],
                odia: ['ଭାଵ'],
                malayalam: ['ഭാവ'],
                tamil: ['பாவ', 'பவ', 'தோற்றம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['భావ'],
                kannada: ['ಭಾವ'],
                bengali: ['ভাব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.yuva]: {
            name: {
                sanskrit: ['युव'],
                odia: ['ଯୁଵ'],
                malayalam: ['യുവ'],
                tamil: ['யுவ', 'இளமை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['యువ'],
                kannada: ['ಯುವ'],
                bengali: ['যুব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.dhaata]: {
            name: {
                sanskrit: ['धाता'],
                odia: ['ଧାତ୍ରି'],
                malayalam: ['ധാത്രി'],
                tamil: ['தாது', 'மாழை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ధాత'],
                kannada: ['ಧಾತೃ'],
                bengali: ['ধাত্রি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.ishvara]: {
            name: {
                sanskrit: ['ईश्वर'],
                odia: ['ଈଶ୍ଵର'],
                malayalam: ['ഈശ്വര'],
                tamil: ['ஈஸ்வர', 'ஈச்சுரம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ఈశ్వర'],
                kannada: ['ಈಶ್ವರ'],
                bengali: ['ঈশ্বর'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.bahudhaanya]: {
            name: {
                sanskrit: ['बहुधान्य'],
                odia: ['ବହୁଧାନ୍ଯ'],
                malayalam: ['ബഹുധാന്യ'],
                tamil: ['வெகுதானிய', 'கூலவளம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['బహుధాన్య'],
                kannada: ['ಬಹುಧಾನ್ಯ'],
                bengali: ['বহুধান্য'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.pramaathi]: {
            name: {
                sanskrit: ['प्रमाथी'],
                odia: ['ପ୍ରମାଥି'],
                malayalam: ['പ്രമാഥി'],
                tamil: ['பிரமாதி', 'முன்மை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ప్రమాధి'],
                kannada: ['ಪ್ರಮಾಥಿ'],
                bengali: ['প্রমাথি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.vikrama]: {
            name: {
                sanskrit: ['विक्रम'],
                odia: ['ଵିକ୍ରମ'],
                malayalam: ['വിക്രമ'],
                tamil: ['விக்கிரம', 'நேர்நிரல்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['విక్రమ'],
                kannada: ['ವಿಕ್ರಮ'],
                bengali: ['বিক্রম'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.vrshapraja]: {
            name: {
                sanskrit: ['वृष', 'वृषप्रजा'],
                odia: ['ଵୃଷ', 'ଵିଷୁ', 'ଵୃଷପ୍ରଜା'],
                malayalam: ['വൃഷ', 'വിഷു', 'വൃഷപ്രജാ'],
                tamil: ['விஷு', 'விளைபயன்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వృశ', 'విషు', 'వృశప్రజా'],
                kannada: ['ವೃಷ', 'ವಿಷು', 'ವೃಷಪ್ರಜಾ'],
                bengali: ['বৃষ', 'বিষু', 'বৃষপ্রজা'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.chitrabhanu]: {
            name: {
                sanskrit: ['चित्रभानु'],
                odia: ['ଚିତ୍ରଭାନୁ'],
                malayalam: ['ചിത്രഭാനു'],
                tamil: ['சித்திரபானு', 'ஓவியக்கதி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['చిత్రభాను'],
                kannada: ['ಚಿತ್ರಭಾನು'],
                bengali: ['চিত্রভানু'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.subhaanu]: {
            name: {
                sanskrit: ['सुभानु'],
                odia: ['ସ୍ଵଭାନୁ'],
                malayalam: ['സ്വഭാനു'],
                tamil: ['சுபானு', 'நற்கதிர்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సుభాను'],
                kannada: ['ಸುಭಾನು'],
                bengali: ['স্বভানু'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.taarana]: {
            name: {
                sanskrit: ['तारण'],
                odia: ['ତାରଣ'],
                malayalam: ['താരണ'],
                tamil: ['தாரண', 'தாங்கெழில்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['తారణ'],
                kannada: ['ತಾರಣ'],
                bengali: ['তারণ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.paarthiva]: {
            name: {
                sanskrit: ['पार्थिव'],
                odia: ['ପାର୍ଥିଵ'],
                malayalam: ['പാര്ഥിവ'],
                tamil: ['பார்த்திவ', 'நிலவரையன்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['పార్థివ'],
                kannada: ['ಪಾರ್ಥಿವ'],
                bengali: ['পার্থিব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.vyaya]: {
            name: {
                sanskrit: ['व्यय'],
                odia: ['ଵ୍ଯଯ'],
                malayalam: ['വ്യയ'],
                tamil: ['விய', 'விரிமாண்பு'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వ్యయ'],
                kannada: ['ವ್ಯಯ'],
                bengali: ['ব্যয'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma
        },
        [Samvatsara.sarvajit]: {
            name: {
                sanskrit: ['सर्वजीत'],
                odia: ['ସର୍ଵଜିତ୍'],
                malayalam: ['സര്വജിത്'],
                tamil: ['சர்வசித்து', 'முற்றறிவு', 'யாவுந்திறல்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సర్వజిత'],
                kannada: ['ಸರ್ವಜಿತ್'],
                bengali: ['সর্বজিত্'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.sarvadhaari]: {
            name: {
                sanskrit: ['सर्वधारी'],
                odia: ['ସର୍ଵଧାରି'],
                malayalam: ['സര്വധാരി'],
                tamil: ['சர்வதாரி', 'முழுநிறைவு'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సర్వధారి'],
                kannada: ['ಸರ್ವಧಾರಿ'],
                bengali: ['সর্বধারি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.virodhi]: {
            name: {
                sanskrit: ['विरोधी'],
                odia: ['ଵିରୋଧି'],
                malayalam: ['വിരോധി'],
                tamil: ['விரோதி', 'தீர்பகை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['విరోధి'],
                kannada: ['ವಿರೋಧಿ'],
                bengali: ['বিরোধি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.vikrti]: {
            name: {
                sanskrit: ['विकृति'],
                odia: ['ଵିକୃତ'],
                malayalam: ['വികൃത'],
                tamil: ['விக்ருதி', 'வளமாற்றம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వికృతి'],
                kannada: ['ವಿಕೃತಿ'],
                bengali: ['বিকৃত'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.khara]: {
            name: {
                sanskrit: ['खर'],
                odia: ['ଖର'],
                malayalam: ['ഖര'],
                tamil: ['கர', 'செய்நேர்த்தி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ఖర'],
                kannada: ['ಖರ'],
                bengali: ['খর'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.nandana]: {
            name: {
                sanskrit: ['नंदन'],
                odia: ['ନଂଦନ'],
                malayalam: ['നംദന'],
                tamil: ['நந்தன', 'நற்குழவி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['నందన'],
                kannada: ['ನಂದನ'],
                bengali: ['নংদন'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.vijaya]: {
            name: {
                sanskrit: ['विजय'],
                odia: ['ଵିଜଯ'],
                malayalam: ['വിജയ'],
                tamil: ['விஜய', 'உயர்வாகை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['విజయ'],
                kannada: ['ವಿಜಯ'],
                bengali: ['বিজয'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.jaya]: {
            name: {
                sanskrit: ['जय'],
                odia: ['ଜଯ'],
                malayalam: ['ജയ'],
                tamil: ['ஜய', 'வாகை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['జయ'],
                kannada: ['ಜಯ'],
                bengali: ['জয'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.manmatha]: {
            name: {
                sanskrit: ['मन्मथ'],
                odia: ['ମନ୍ମଥ'],
                malayalam: ['മന്മഥ'],
                tamil: ['மன்மத', 'காதன்மை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మన్మధ'],
                kannada: ['ಮನ್ಮಥ'],
                bengali: ['মন্মথ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.durmukha]: {
            name: {
                sanskrit: ['दुर्मुख'],
                odia: ['ଦୁର୍ମୁଖି'],
                malayalam: ['ദുര്മുഖി'],
                tamil: ['துன்முகி', 'வெம்முகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['దుర్ముఖ'],
                kannada: ['ದುರ್ಮುಖ'],
                bengali: ['দুর্মুখি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.hevilambi]: {
            name: {
                sanskrit: ['हेविळंबि'],
                odia: ['ହେଵିଳଂବି'],
                malayalam: ['ഹേവിളംബി'],
                tamil: ['ஹேவிளம்பி', 'பொற்றடை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['హేవిళంబి'],
                kannada: ['ಹೇವಿಳಂಬಿ'],
                bengali: ['হেবিলংবি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.vilambi]: {
            name: {
                sanskrit: ['विळंबि'],
                odia: ['ଵିଳଂବି'],
                malayalam: ['വിളംബി'],
                tamil: ['விளம்பி', 'அட்டி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['విళంబి'],
                kannada: ['ವಿಳಂಬಿ'],
                bengali: ['বিলংবি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.vikaari]: {
            name: {
                sanskrit: ['विकारी'],
                odia: ['ଵିକାରି'],
                malayalam: ['വികാരി'],
                tamil: ['விகாரி', 'எழில்மாறல்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వికారి'],
                kannada: ['ವಿಕಾರಿ'],
                bengali: ['বিকারি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.shaarvari]: {
            name: {
                sanskrit: ['शार्वरी'],
                odia: ['ଶାର୍ଵରି'],
                malayalam: ['ശാര്വരി'],
                tamil: ['சார்வரி', 'வீறியெழல்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శార్వరి'],
                kannada: ['ಶಾರ್ವರಿ'],
                bengali: ['শার্বরি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.plava]: {
            name: {
                sanskrit: ['प्लव'],
                odia: ['ପ୍ଲଵ'],
                malayalam: ['പ്ലവ'],
                tamil: ['பிலவ', 'கீழறை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ప్లవ'],
                kannada: ['ಪ್ಲವ'],
                bengali: ['প্লব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.shubhakrta]: {
            name: {
                sanskrit: ['शुभकृत'],
                odia: ['ଶୁଭକୃତ୍'],
                malayalam: ['ശുഭകൃത്'],
                tamil: ['சுபகிருது', 'நற்செய்கை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శుభకృత'],
                kannada: ['ಶುಭಕೃತ'],
                bengali: ['শুভকৃত্'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.shobhakrta]: {
            name: {
                sanskrit: ['शोभकृत'],
                odia: ['ଶୋଭାକୃତ୍'],
                malayalam: ['ശോഭാകൃത്'],
                tamil: ['சோபகிருது', 'மங்கலம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శోభకృత'],
                kannada: ['ಶೋಭಕೃತ'],
                bengali: ['শোভাকৃত্'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.krodhi]: {
            name: {
                sanskrit: ['क्रोधी'],
                odia: ['କ୍ରୋଧି'],
                malayalam: ['ക്രോധി'],
                tamil: ['குரோதி', 'பகைக்கேடு'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['క్రోధి'],
                kannada: ['ಕ್ರೋಧಿ'],
                bengali: ['ক্রোধি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.vishvaavasu]: {
            name: {
                sanskrit: ['विश्वावसु'],
                odia: ['ଵିଶ୍ଵାଵସୁ'],
                malayalam: ['വിശ്വാവസു'],
                tamil: ['விசுவாசுவ', 'உலகநிறைவு'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['విశ్వావసు'],
                kannada: ['ವಿಶ್ವಾವಸು'],
                bengali: ['বিশ্বাবসু'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.paraabhava]: {
            name: {
                sanskrit: ['पराभव'],
                odia: ['ପରାଭଵ'],
                malayalam: ['പരാഭവ'],
                tamil: ['பரபாவ', 'அருட்டோற்றம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['పరాభవ'],
                kannada: ['ಪರಾಭವ'],
                bengali: ['পরাভব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu
        },
        [Samvatsara.plavanga]: {
            name: {
                sanskrit: ['प्लवंग'],
                odia: ['ପ୍ଲଵଂଗ'],
                malayalam: ['പ്ലവംഗ'],
                tamil: ['பிலவங்க', 'நச்சுப்புழை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ప్లవంగ'],
                kannada: ['ಪ್ಲವಂಗ'],
                bengali: ['প্লবংগ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.keelaka]: {
            name: {
                sanskrit: ['कीलक'],
                odia: ['କୀଲକ'],
                malayalam: ['കീലക'],
                tamil: ['கீலக', 'பிணைவிரகு'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['కీలక'],
                kannada: ['ಕೀಲಕ'],
                bengali: ['কীলক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.saumya]: {
            name: {
                sanskrit: ['सौम्य'],
                odia: ['ସୌମ୍ଯ'],
                malayalam: ['സൌമ്യ'],
                tamil: ['சௌமிய', 'அழகு'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సౌమ్య'],
                kannada: ['ಸೌಮ್ಯ'],
                bengali: ['সৌম্য'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.saadhaarana]: {
            name: {
                sanskrit: ['साधारण'],
                odia: ['ସାଧାରଣ'],
                malayalam: ['സാധാരണ'],
                tamil: ['சாதாரண', 'பொதுநிலை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సాధారణ'],
                kannada: ['ಸಾಧಾರಣ'],
                bengali: ['সাধারণ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.virodhakrta]: {
            name: {
                sanskrit: ['विरोधकृत'],
                odia: ['ଵିରୋଧିକୃତ୍'],
                malayalam: ['വിരോധികൃത്'],
                tamil: ['விரோதகிருது', 'இகல்வீறு'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['విరోధికృత'],
                kannada: ['ವಿರೋಧಿಕೃತ್'],
                bengali: ['বিরোধিকৃত্'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.paridhaavi]: {
            name: {
                sanskrit: ['परिधावी'],
                odia: ['ପରିଧାଵି'],
                malayalam: ['പരിധാവി'],
                tamil: ['பரிதாபி', 'கழிவிரக்கம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['పరిధావి'],
                kannada: ['ಪರಿಧಾವಿ'],
                bengali: ['পরিধাবি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.pramaadica]: {
            name: {
                sanskrit: ['प्रमादीच'],
                odia: ['ପ୍ରମାଦୀ'],
                malayalam: ['പ്രമാദീ'],
                tamil: ['பிரமாதீச', 'நற்றலைமை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ప్రమాదీచ'],
                kannada: ['ಪ್ರಮಾದೀಚ'],
                bengali: ['প্রমাদী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.ananda]: {
            name: {
                sanskrit: ['आनंद'],
                odia: ['ଆନଂଦ'],
                malayalam: ['ആനംദ'],
                tamil: ['ஆனந்த', 'பெருமகிழ்ச்சி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ఆనంద'],
                kannada: ['ಆನಂದ'],
                bengali: ['আনংদ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.raakshasa]: {
            name: {
                sanskrit: ['राक्षस'],
                odia: ['ରାକ୍ଷସ'],
                malayalam: ['രാക്ഷസ'],
                tamil: ['ராட்சச', 'பெருமறம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['రాక్షస'],
                kannada: ['ರಾಕ್ಷಸ'],
                bengali: ['রাক্ষস'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.nala]: {
            name: {
                sanskrit: ['आनल', 'नल'],
                odia: ['ନଳ'],
                malayalam: ['നള'],
                tamil: ['ஆநள', 'நள', 'தாமரை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['నల', 'ఆనల'],
                kannada: ['ನಲ', 'ಅನಲ'],
                bengali: ['নಳ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.pingala]: {
            name: {
                sanskrit: ['पिंगल'],
                odia: ['ପିଂଗଳ'],
                malayalam: ['പിംഗള'],
                tamil: ['பிங்கள', 'பொன்மை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['పింగళ'],
                kannada: ['ಪಿಂಗಲ'],
                bengali: ['পিংগল'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.kaalayukta]: {
            name: {
                sanskrit: ['कालयुक्त'],
                odia: ['କାଳଯୁକ୍ତି'],
                malayalam: ['കാളയുക്തി'],
                tamil: ['காளயுக்தி', 'கருமைவீச்சு'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['కాళయుక్తి'],
                kannada: ['ಕಾಲಯುಕ್ತ'],
                bengali: ['কালযুক্তি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.siddharthi]: {
            name: {
                sanskrit: ['सिद्धार्थी'],
                odia: ['ସିଦ୍ଧାର୍ଥି'],
                malayalam: ['സിദ്ധാര്ഥി'],
                tamil: ['சித்தார்த்தி', 'முன்னியமுடிதல்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సిద్ధార్థ'],
                kannada: ['ಸಿದ್ಧಾರ್ಥಿ'],
                bengali: ['সিদ্ধার্থি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.raudra]: {
            name: {
                sanskrit: ['रौद्र'],
                odia: ['ରୁଦ୍ର', 'ରୌଦ୍ରି'],
                malayalam: ['രുദ്ര', 'രൌദ്രി'],
                tamil: ['ரௌத்திரி', 'அழலி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['రౌద్రి', 'రుద్ర'],
                kannada: ['ರೌದ್ರ', 'ರುದ್ರ'],
                bengali: ['রুদ্র', 'রৌদ্রি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.durmati]: {
            name: {
                sanskrit: ['दुर्मति'],
                odia: ['ଦୁର୍ମତି'],
                malayalam: ['ദുര്മതി'],
                tamil: ['துர்மதி', 'கொடுமதி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['దుర్మతి'],
                kannada: ['ದುರ್ಮತಿ'],
                bengali: ['দুর্মতি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.dundubhi]: {
            name: {
                sanskrit: ['दुन्दुभी'],
                odia: ['ଦୁଂଦୁଭି'],
                malayalam: ['ദുംദുഭി'],
                tamil: ['துந்துபி', 'பேரிகை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['దుందుభి'],
                kannada: ['ದುಂದುಭಿ'],
                bengali: ['দুংদুভি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.rudhirodgaari]: {
            name: {
                sanskrit: ['रूधिरोद्गारी'],
                odia: ['ରୁଧିରୋଦ୍ଗାରି'],
                malayalam: ['രുധിരോദ്ഗാരി'],
                tamil: ['ருத்ரோத்காரி', 'ஒடுங்கி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['రుధిరోద్గారి'],
                kannada: ['ರುಧಿರೋದ್ಗಾರಿ'],
                bengali: ['রুধিরোদ্গারি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.raktaakshi]: {
            name: {
                sanskrit: ['रक्ताक्षी'],
                odia: ['ରକ୍ତାକ୍ଷି'],
                malayalam: ['രക്താക്ഷി'],
                tamil: ['ரக்தாட்சி', 'செம்மை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['రక్తాక్షి'],
                kannada: ['ರಕ್ತಾಕ್ಷಿ'],
                bengali: ['রক্তাক্ষি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.krodhana]: {
            name: {
                sanskrit: ['क्रोधन', 'मन्यु'],
                odia: ['କ୍ରୋଧନ'],
                malayalam: ['ക്രോധന'],
                tamil: ['குரோதன', 'எதிரேற்றம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['క్రోధన', 'మన్యు'],
                kannada: ['ಕ್ರೋಧನ', 'ಮನ್ಯು'],
                bengali: ['ক্রোধন'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        },
        [Samvatsara.akshaya]: {
            name: {
                sanskrit: ['अक्षय'],
                odia: ['ଅକ୍ଷଯ', 'କ୍ଷଯ'],
                malayalam: ['അക്ഷയ', 'ക്ഷയ'],
                tamil: ['அட்சய', 'வளங்கலன்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['అక్షయ', 'క్షయ'],
                kannada: ['ಅಕ್ಷಯ', 'ಕ್ಷಯ'],
                bengali: ['অক্ষয', 'ক্ষয'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva
        }
    }

    Yoga: YogaType = {
        [Yoga.amrta]: {
            name: {
                sanskrit: ['अमृत'],
                odia: ['ଅମୃତ'],
                malayalam: ['അമൃത'],
                tamil: ['அமிர்த'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['అమృత'],
                kannada: ['ಅಮೃತ'],
                bengali: ['অমৃত'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.marana]: {
            name: {
                sanskrit: ['मरण'],
                odia: ['ମରଣ'],
                malayalam: ['മരണ'],
                tamil: ['மரண'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['మరణ'],
                kannada: ['ಮರಣ'],
                bengali: ['মরণ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.prabalarishta]: {
            name: {
                sanskrit: ['प्रबलरिष्ट'],
                odia: ['ପ୍ରବଲରିଷ୍ଟ'],
                malayalam: ['പ്രബലരിഷ്ട'],
                tamil: ['பிரபாலாரிஷ்ட'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ప్రబలరిష్ట'],
                kannada: ['ಪ್ರಬಲರಿಷ್ಟ'],
                bengali: ['প্রবলরিষ্ট'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.viskambha]: {
            name: {
                sanskrit: ['विष्कम्भ'],
                odia: ['ଵିଷ୍କମ୍ଭ'],
                malayalam: ['വിഷ്കമ്ഭ'],
                tamil: ['விஷ்கம்பம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['విష్కమ్భ'],
                kannada: ['ವಿಷ್ಕಮ್ಭ'],
                bengali: ['বিষ্কম্ভ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.preeti]: {
            name: {
                sanskrit: ['प्रीति'],
                odia: ['ପ୍ରୀତି'],
                malayalam: ['പ്രീതി'],
                tamil: ['ப்ரீதி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ప్రీతి'],
                kannada: ['ಪ್ರೀತಿ'],
                bengali: ['প্রীতি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.ayushmaan]: {
            name: {
                sanskrit: ['आयुष्मत्', 'आयुष्मान्'],
                odia: ['ଆଯୁଷ୍ମତ୍', 'ଆଯୁଷ୍ମାନ୍'],
                malayalam: ['ആയുഷ്മത്', 'ആയുഷ്മാന്'],
                tamil: ['ஆயுஷ்மான்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ఆయుష్మత్', 'ఆయుష్మాన్'],
                kannada: ['ಆಯುಷ್ಮತ್', 'ಆಯುಷ್ಮಾನ್'],
                bengali: ['আযুষ্মত্', 'আযুষ্মান্'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.saubhaagya]: {
            name: {
                sanskrit: ['सौभाग्य'],
                odia: ['ସୌଭାଗ୍ଯ'],
                malayalam: ['സൌഭാഗ്യ'],
                tamil: ['சவுபாக்கியம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సౌభాగ్య'],
                kannada: ['ಸೌಭಾಗ್ಯ'],
                bengali: ['সৌভাগ্য'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.shobhana]: {
            name: {
                sanskrit: ['शोभन'],
                odia: ['ଶୋଭନ'],
                malayalam: ['ശോഭന'],
                tamil: ['சோபனம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శోభన'],
                kannada: ['ಶೋಭನ'],
                bengali: ['শোভন'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.atiganda]: {
            name: {
                sanskrit: ['अतिगण्ड'],
                odia: ['ଅତିଗଣ୍ଡ'],
                malayalam: ['അതിഗണ്ഡ'],
                tamil: ['அதிகண்டம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['అతిగణ్డ'],
                kannada: ['ಅತಿಗಣ್ಡ'],
                bengali: ['অতিগণ্ড'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.sukarma]: {
            name: {
                sanskrit: ['सुकर्मा'],
                odia: ['ସୁକର୍ମା'],
                malayalam: ['സുകര്മാ'],
                tamil: ['சுகர்மம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సుకర్మా'],
                kannada: ['ಸುಕರ್ಮಾ'],
                bengali: ['সুকর্মা'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.dhrti]: {
            name: {
                sanskrit: ['धृति'],
                odia: ['ଧୃତି'],
                malayalam: ['ധൃതി'],
                tamil: ['திருதி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ధృతి'],
                kannada: ['ಧೃತಿ'],
                bengali: ['ধৃতি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.shoola]: {
            name: {
                sanskrit: ['शूल'],
                odia: ['ଶୂଲ'],
                malayalam: ['ശൂല'],
                tamil: ['சூலம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శూల'],
                kannada: ['ಶೂಲ'],
                bengali: ['শূল'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.ganda]: {
            name: {
                sanskrit: ['गण्ड'],
                odia: ['ଗଣ୍ଡ'],
                malayalam: ['ഗണ്ഡ'],
                tamil: ['கண்டம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['గణ్డ'],
                kannada: ['ಗಣ್ಡ'],
                bengali: ['গণ্ড'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.vrddhi]: {
            name: {
                sanskrit: ['वृद्धि'],
                odia: ['ଵୃଦ୍ଧି'],
                malayalam: ['വൃദ്ധി'],
                tamil: ['விருத்தி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వృద్ధి'],
                kannada: ['ವೃದ್ಧಿ'],
                bengali: ['বৃদ্ধি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.dhruva]: {
            name: {
                sanskrit: ['ध्रुव'],
                odia: ['ଧ୍ରୁଵ'],
                malayalam: ['ധ്രുവ'],
                tamil: ['துருவம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ధ్రువ'],
                kannada: ['ಧ್ರುವ'],
                bengali: ['ধ্রুব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.vyaaghata]: {
            name: {
                sanskrit: ['व्याघात'],
                odia: ['ଵ୍ଯାଘାତ'],
                malayalam: ['വ്യാഘാത'],
                tamil: ['வியாகாதம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వ్యాఘాత'],
                kannada: ['ವ್ಯಾಘಾತ'],
                bengali: ['ব্যাঘাত'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.harshana]: {
            name: {
                sanskrit: ['हर्षण'],
                odia: ['ହର୍ଷଣ'],
                malayalam: ['ഹര്ഷണ'],
                tamil: ['அரிசனம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['హర్షణ'],
                kannada: ['ಹರ್ಷಣ'],
                bengali: ['হর্ষণ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.vajra]: {
            name: {
                sanskrit: ['वज्र'],
                odia: ['ଵଜ୍ର'],
                malayalam: ['വജ്ര'],
                tamil: ['வச்சிரம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వజ్ర'],
                kannada: ['ವಜ್ರ'],
                bengali: ['বজ্র'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.siddhi]: {
            name: {
                sanskrit: ['सिद्धि'],
                odia: ['ସିଦ୍ଧି'],
                malayalam: ['സിദ്ധി'],
                tamil: ['சித்தி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సిద్ధి'],
                kannada: ['ಸಿದ್ಧಿ'],
                bengali: ['সিদ্ধি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.vyatipaata]: {
            name: {
                sanskrit: ['व्यतिपात'],
                odia: ['ଵ୍ଯତିପାତ'],
                malayalam: ['വ്യതിപാത'],
                tamil: ['வியதீபாதம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వ్యతిపాత'],
                kannada: ['ವ್ಯತಿಪಾತ'],
                bengali: ['ব্যতিপাত'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.variyana]: {
            name: {
                sanskrit: ['वरीयान'],
                odia: ['ଵରୀଯାନ'],
                malayalam: ['വരീയാന'],
                tamil: ['வரியான்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వరీయాన'],
                kannada: ['ವರೀಯಾನ'],
                bengali: ['বরীযান'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.parigha]: {
            name: {
                sanskrit: ['परिघ'],
                odia: ['ପରିଘ'],
                malayalam: ['പരിഘ'],
                tamil: ['பரிகம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['పరిఘ'],
                kannada: ['ಪರಿಘ'],
                bengali: ['পরিঘ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.shiva]: {
            name: {
                sanskrit: ['शिव'],
                odia: ['ଶିଵ'],
                malayalam: ['ശിവ'],
                tamil: ['சிவம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శివ'],
                kannada: ['ಶಿವ'],
                bengali: ['শিব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.siddha]: {
            name: {
                sanskrit: ['सिद्ध'],
                odia: ['ସିଦ୍ଧ'],
                malayalam: ['സിദ്ധ'],
                tamil: ['சித்தம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సిద్ధ'],
                kannada: ['ಸಿದ್ಧ'],
                bengali: ['সিদ্ধ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.saadhya]: {
            name: {
                sanskrit: ['साध्य'],
                odia: ['ସାଧ୍ଯ'],
                malayalam: ['സാധ്യ'],
                tamil: ['சாத்தியம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సాధ్య'],
                kannada: ['ಸಾಧ್ಯ'],
                bengali: ['সাধ্য'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.shubha]: {
            name: {
                sanskrit: ['शुभ'],
                odia: ['ଶୁଭ'],
                malayalam: ['ശുഭ'],
                tamil: ['சுபம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శుభ'],
                kannada: ['ಶುಭ'],
                bengali: ['শুভ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.shukla]: {
            name: {
                sanskrit: ['शुक्ल'],
                odia: ['ଶୁକ୍ଲ'],
                malayalam: ['ശുക്ല'],
                tamil: ['சுப்பிரம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శుక్ల'],
                kannada: ['ಶುಕ್ಲ'],
                bengali: ['শুক্ল'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.brahma]: {
            name: {
                sanskrit: ['ब्रह्म'],
                odia: ['ବ୍ରହ୍ମ'],
                malayalam: ['ബ്രഹ്മ'],
                tamil: ['பிராம்மம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['బ్రహ్మ'],
                kannada: ['ಬ್ರಹ್ಮ'],
                bengali: ['ব্রহ্ম'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.maahendra]: {
            name: {
                sanskrit: ['इन्द्र', 'महीन्द्र'],
                odia: ['ଇନ୍ଦ୍ର', 'ମହୀନ୍ଦ୍ର'],
                malayalam: ['ഇന്ദ്ര', 'മഹീന്ദ്ര'],
                tamil: ['மாஹேத்திரம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ఇన్ద్ర', 'మహీన్ద్ర'],
                kannada: ['ಇನ್ದ್ರ', 'ಮಹೀನ್ದ್ರ'],
                bengali: ['ইন্দ্র', 'মহীন্দ্র'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Yoga.vaidhrti]: {
            name: {
                sanskrit: ['वैधृति'],
                odia: ['ଵୈଧୃତି'],
                malayalam: ['വൈധൃതി'],
                tamil: ['வைத்திருதி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వైధృతి'],
                kannada: ['ವೈಧೃತಿ'],
                bengali: ['বৈধৃতি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        }
    }

    Karana: KaranaType = {
        [Karana.shakuni]: {
            name: {
                sanskrit: ['शकुनि'],
                odia: ['ଶକୁନି'],
                malayalam: ['ശകുനി'],
                tamil: ['சகுன'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శకుని'],
                kannada: ['ಶಕುನಿ'],
                bengali: ['শকুনি'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            stiraChara: StiraChara.stira
        },
        [Karana.chatushpaada]: {
            name: {
                sanskrit: ['चतुष्पाद'],
                odia: ['ଚତୁଷ୍ପାଦ'],
                malayalam: ['ചതുഷ്പാദ'],
                tamil: ['சதுஷ்பாதம'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['చతుష్పాద'],
                kannada: ['ಚತುಷ್ಪಾದ'],
                bengali: ['চতুষ্পাদ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            stiraChara: StiraChara.stira
        },
        [Karana.naaga]: {
            name: {
                sanskrit: ['नाग'],
                odia: ['ନାଗ'],
                malayalam: ['നാഗ'],
                tamil: ['நாகவம'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['నాగ'],
                kannada: ['ನಾಗ'],
                bengali: ['নাগ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            stiraChara: StiraChara.stira
        },
        [Karana.kimstughna]: {
            name: {
                sanskrit: ['किंस्तुघ्न'],
                odia: ['କିଂସ୍ତୁଘ୍ନ'],
                malayalam: ['കിംസ്തുഘ്ന'],
                tamil: ['கிம்ஸ்துக்னம'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['కింస్తుఘ్న'],
                kannada: ['ಕಿಂಸ್ತುಘ್ನ'],
                bengali: ['কিংস্তুঘ্ন'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            stiraChara: StiraChara.stira
        },
        [Karana.bava]: {
            name: {
                sanskrit: ['बव'],
                odia: ['ବଵ'],
                malayalam: ['ബവ'],
                tamil: ['பவம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['బవ'],
                kannada: ['ಬವ'],
                bengali: ['বব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            stiraChara: StiraChara.chara
        },
        [Karana.baalava]: {
            name: {
                sanskrit: ['बालव'],
                odia: ['ବାଲଵ'],
                malayalam: ['ബാലവ'],
                tamil: ['பாலவம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['బాలవ'],
                kannada: ['ಬಾಲವ'],
                bengali: ['বালব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            stiraChara: StiraChara.chara
        },
        [Karana.kaulava]: {
            name: {
                sanskrit: ['कौलव'],
                odia: ['କୌଲଵ'],
                malayalam: ['കൌലവ'],
                tamil: ['கௌலவம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['కౌలవ'],
                kannada: ['ಕೌಲವ'],
                bengali: ['কৌলব'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            stiraChara: StiraChara.chara
        },
        [Karana.taitula]: {
            name: {
                sanskrit: ['तैतुल', 'तैतिल'],
                odia: ['ତୈତୁଲ', 'ତୈତିଲ'],
                malayalam: ['തൈതുല', 'തൈതില'],
                tamil: ['தைதுளை', 'தைதிளை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['తైతుల', 'తైతిల'],
                kannada: ['ತೈತುಲ', 'ತೈತಿಲ'],
                bengali: ['তৈতুল', 'তৈতিল'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            stiraChara: StiraChara.chara
        },
        [Karana.garaja]: {
            name: {
                sanskrit: ['गर', 'गरज'],
                odia: ['ଗର', 'ଗରଜ'],
                malayalam: ['ഗര', 'ഗരജ'],
                tamil: ['கர', 'கரச'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['గర', 'గరజ'],
                kannada: ['ಗರ', 'ಗರಜ'],
                bengali: ['গর', 'গরজ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            stiraChara: StiraChara.chara
        },
        [Karana.vanija]: {
            name: {
                sanskrit: ['वणिज'],
                odia: ['ଵଣିଜ'],
                malayalam: ['വണിജ'],
                tamil: ['வணிச'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వణిజ'],
                kannada: ['ವಣಿಜ'],
                bengali: ['বণিজ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            stiraChara: StiraChara.chara
        },
        [Karana.vishti]: {
            name: {
                sanskrit: ['विष्टि', 'भद्रा'],
                odia: ['ଵିଷ୍ଟି', 'ଭଦ୍ରା'],
                malayalam: ['വിഷ്ടി', 'ഭദ്രാ'],
                tamil: ['விஷ்டி', 'பத்தர'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['విష్టి', 'భద్రా'],
                kannada: ['ವಿಷ್ಟಿ', 'ಭದ್ರಾ'],
                bengali: ['বিষ্টি', 'ভদ্রা'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            stiraChara: StiraChara.chara
        }
    }

    Rtu: RtuType = {
        [Rtu.vasanta]: {
            name: {
                sanskrit: ['वसन्त'],
                odia: ['ବସନ୍ତ'],
                malayalam: ['വസന്തം'],
                tamil: ['இளவேனில்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వసంతం'],
                kannada: ['ವಸಂತ ಋತು'],
                bengali: ['বসন্তকাল'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Rtu.grishma]: {
            name: {
                sanskrit: ['ग्रीष्म'],
                odia: ['ଗ୍ରୀଷ୍ମ'],
                malayalam: ['ഗ്രീഷ്മം'],
                tamil: ['முதுவேனில்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['గ్రీష్మం'],
                kannada: ['ಗ್ರೀಷ್ಮಋತು'],
                bengali: ['গ্রীষ্মকাল'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Rtu.varsha]: {
            name: {
                sanskrit: ['वर्षा'],
                odia: ['ବର୍ଷା'],
                malayalam: ['വർഷം'],
                tamil: ['கார்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['వర్షాకాలం'],
                kannada: ['ವರ್ಷ ಋತು'],
                bengali: ['বর্ষাকাল'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Rtu.sarad]: {
            name: {
                sanskrit: ['शरद्'],
                odia: ['ଶରତ'],
                malayalam: ['ശരത്ത്'],
                tamil: ['குளிர்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శరదృతువు'],
                kannada: ['ಶರದ್ಋತು'],
                bengali: ['শরৎকাল'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Rtu.hemanta]: {
            name: {
                sanskrit: ['हेमन्त'],
                odia: ['ହେମନ୍ତ'],
                malayalam: ['ഹേമന്തം'],
                tamil: ['முன்பனி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['హేమంతం'],
                kannada: ['ಹೇಮಂತ ಋತು'],
                bengali: ['হেমন্তকাল'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Rtu.sisira]: {
            name: {
                sanskrit: ['शिशिर'],
                odia: ['ଶୀତ'],
                malayalam: ['ശിശിരം'],
                tamil: ['பின்பனி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శిశిరం'],
                kannada: ['ಶಿಶಿರ ಋತು'],
                bengali: ['শীতকাল'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        }
    }

    Aayana: AayanaType = {
        [Aayana.uthara]: {
            name: {
                sanskrit: ['उत्तरायणम्'],
                odia: ['ଉତ୍ତରାଯଣ'],
                malayalam: ['ഉത്തരായണ'],
                tamil: ['உத்தராயணம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ఉత్తరాయణం'],
                kannada: ['ಉತ್ತರಾಯಣ'],
                bengali: ['উত্তরায়ণ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Aayana.dakshina]: {
            name: {
                sanskrit: ['दक्षिणायणम्'],
                odia: ['ଦକ୍ଷିଣାଯଣ'],
                malayalam: ['ദക്ഷിണായണ'],
                tamil: ['தட்சிணாயணம்'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['దక్షిణాయణం'],
                kannada: ['ದಕ್ಷಿಣಾಯಣ'],
                bengali: ['দক্ষিণাযণ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        }
    }

    Vaara: VaaraType = {
        [Vaara.aadi]: {
            name: {
                sanskrit: ['भानुवासर'],
                odia: ['ରବିବାର'],
                malayalam: ['ഞായര്‍'],
                tamil: ['ஞாயிறு'],
                sinhala: ['ඉරිදා'],
                dhivehi: ['އާދީއްތަ'],
                telugu: ['ఆదివారం'],
                kannada: ['ಭಾನುವಾರ'],
                bengali: ['রবিবার', 'রোববার'],
                mongolian: ['наран өдөр'],
                chinese: ['日曜日'],
                tibetan: ['གཟའ་ཉི་མ།']
            },
            graha: Graha.surya,
            rahuKaala: '07:40-09:15',
            yamaGanda: '10:51-12:26',
            guliKaala: '14:02-15:37',
            abhijit: '12:01-12:52',
            durMuhurta: ['12:52-13:43', '15:24-16:15']
        },
        [Vaara.soma]: {
            name: {
                sanskrit: ['इन्दुवासर'],
                odia: ['ସୋମବାର'],
                malayalam: ['തിങ്കള്‍'],
                tamil: ['திங்கள்'],
                sinhala: ['සඳුදා'],
                dhivehi: ['ހޯމަ'],
                telugu: ['సోమవారం'],
                kannada: ['ಸೋಮವಾರ'],
                bengali: ['সোমবার'],
                mongolian: ['саран өдөр'],
                chinese: ['月曜日'],
                tibetan: ['གཟའ་ཟླ་བ།']
            },
            graha: Graha.chandra,
            rahuKaala: '07:40-09:15',
            yamaGanda: '10:51-12:26',
            guliKaala: '14:02-15:37',
            abhijit: '12:01-12:52',
            durMuhurta: ['12:52-13:43', '15:24-16:15']
        },
        [Vaara.mangala]: {
            name: {
                sanskrit: ['भौमवासर'],
                odia: ['ମଙ୍ଗଳବାର'],
                malayalam: ['ചൊവ്വ'],
                tamil: ['செவ்வாய்'],
                sinhala: ['අඟහරුවාදා'],
                dhivehi: ['އަންގާރަ'],
                telugu: ['మంగళవారం'],
                kannada: ['ಮಂಗಳವಾರ'],
                bengali: ['মঙ্গলবার'],
                mongolian: ['гал өдөр'],
                chinese: ['火曜日'],
                tibetan: ['གཟའ་མིག་དམར།']
            },
            graha: Graha.mangala,
            rahuKaala: '07:40-09:15',
            yamaGanda: '10:51-12:26',
            guliKaala: '14:02-15:37',
            abhijit: '12:01-12:52',
            durMuhurta: ['12:52-13:43', '15:24-16:15']
        },
        [Vaara.budha]: {
            name: {
                sanskrit: ['सौम्यवासर'],
                odia: ['ବୁଧବାର'],
                malayalam: ['ബുധന്‍'],
                tamil: ['புதன்'],
                sinhala: ['බදාදා'],
                dhivehi: ['ބުދަ'],
                telugu: ['బుధవారం'],
                kannada: ['ಬುಧವಾರ'],
                bengali: ['বুধবার'],
                mongolian: ['усан өдөр'],
                chinese: ['水曜日'],
                tibetan: ['གཟའ་ལྷག་པ།']
            },
            graha: Graha.budha,
            rahuKaala: '07:40-09:15',
            yamaGanda: '10:51-12:26',
            guliKaala: '14:02-15:37',
            abhijit: '12:01-12:52',
            durMuhurta: ['12:52-13:43', '15:24-16:15']
        },
        [Vaara.guru]: {
            name: {
                sanskrit: ['गुरुवासर'],
                odia: ['ଗୁରୁବାର'],
                malayalam: ['വ്യാഴം'],
                tamil: ['வியாழன்'],
                sinhala: ['බ්‍රහස්පතින්දා'],
                dhivehi: ['ބުރާސްފަތި'],
                telugu: ['గురువారం', 'బేస్తవారం', 'లక్ష్మీవారం'],
                kannada: ['ಗುರುವಾರ'],
                bengali: ['বৃহস্পতিবার', 'বিশুধবার'],
                mongolian: ['модон өдөр'],
                chinese: ['木曜日'],
                tibetan: ['གཟའ་ཕུར་བུ།']
            },
            graha: Graha.guru,
            rahuKaala: '07:40-09:15',
            yamaGanda: '10:51-12:26',
            guliKaala: '14:02-15:37',
            abhijit: '12:01-12:52',
            durMuhurta: ['12:52-13:43', '15:24-16:15']
        },
        [Vaara.shukra]: {
            name: {
                sanskrit: ['भृगुवासर'],
                odia: ['ଶୁକ୍ରବାର'],
                malayalam: ['വെള്ളി'],
                tamil: ['வெள்ளி'],
                sinhala: ['සිකුරාදා'],
                dhivehi: ['ހުކުރު'],
                telugu: ['శుక్రవారం'],
                kannada: ['ಶುಕ್ರವಾರ'],
                bengali: ['শুক্রবার', 'জুমাবার'],
                mongolian: ['төмөр өдөр', 'алтан өдөр'],
                chinese: ['金曜日'],
                tibetan: ['གཟའ་པ་སངས།']
            },
            graha: Graha.shukra,
            rahuKaala: '07:40-09:15',
            yamaGanda: '10:51-12:26',
            guliKaala: '14:02-15:37',
            abhijit: '12:01-12:52',
            durMuhurta: ['12:52-13:43', '15:24-16:15']
        },
        [Vaara.shani]: {
            name: {
                sanskrit: ['स्थिरवासर'],
                odia: ['ଶନିବାର'],
                malayalam: ['ശനി'],
                tamil: ['சனி'],
                sinhala: ['සෙනසුරාදා'],
                dhivehi: ['ހޮނިހިރު'],
                telugu: ['శనివారం'],
                kannada: ['ಶನಿವಾರ'],
                bengali: ['শনিবার'],
                mongolian: ['шороон өдөр'],
                chinese: ['土曜日'],
                tibetan: ['གཟའ་སྤེན་པ།']
            },
            graha: Graha.shani,
            rahuKaala: '07:40-09:15',
            yamaGanda: '10:51-12:26',
            guliKaala: '14:02-15:37',
            abhijit: '12:01-12:52',
            durMuhurta: ['12:52-13:43', '15:24-16:15']
        }
    }

    Maasa: MaasaType = {
        [Maasa.caitra]: {
            name: {
                sanskrit: ['चैत्र'],
                odia: ['ଚୈତ୍ର'],
                malayalam: ['മീനം'],
                tamil: ['சித்திரை'],
                sinhala: ['බක්'],
                dhivehi: [''],
                telugu: ['చైత్రము'],
                kannada: ['ಚೈತ್ರ'],
                bengali: ['চৈত্র'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['ནག་པ་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.meena,
            rtu: this.Rtu.vasanta,
            aayana: [this.Aayana.uthara]
        },
        [Maasa.vaishaka]: {
            name: {
                sanskrit: ['वैशाख'],
                odia: ['ବୈଶାଖ'],
                malayalam: ['മേടം'],
                tamil: ['வைகாசி'],
                sinhala: ['වෙසක්'],
                dhivehi: [''],
                telugu: ['వైశాఖము'],
                kannada: ['ವೈಶಾಖ'],
                bengali: ['বৈশাখ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['ས་ག་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.mesha,
            rtu: this.Rtu.vasanta,
            aayana: [this.Aayana.uthara]
        },
        [Maasa.jyesta]: {
            name: {
                sanskrit: ['ज्येष्ठ'],
                odia: ['ଜ୍ୟେଷ୍ଠ'],
                malayalam: ['ഇടവം'],
                tamil: ['ஆனி'],
                sinhala: ['පොසොන්'],
                dhivehi: [''],
                telugu: ['జ్యేష్ఠము'],
                kannada: ['ಜ್ಯೇಷ್ಠ'],
                bengali: ['জ্য়ৈষ্ঠ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['སྣྲོན་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.vrshabha,
            rtu: this.Rtu.grishma,
            aayana: [this.Aayana.uthara]
        },
        [Maasa.aashada]: {
            name: {
                sanskrit: ['आषाढ़'],
                odia: ['ଆଷାଢ଼'],
                malayalam: ['മിഥുനം'],
                tamil: ['ஆடி'],
                sinhala: ['ඇසළ'],
                dhivehi: [''],
                telugu: ['ఆషాఢము'],
                kannada: ['ಆಷಾಢ'],
                bengali: ['আষাঢ়'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['ཆུ་སྟོད་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.mithuna,
            rtu: this.Rtu.grishma,
            aayana: [this.Aayana.uthara, this.Aayana.dakshina]
        },
        [Maasa.shaavana]: {
            name: {
                sanskrit: ['श्रावण'],
                odia: ['ଶ୍ରାବଣ'],
                malayalam: ['കർക്കടകം'],
                tamil: ['ஆவணி'],
                sinhala: ['නිකිණි'],
                dhivehi: [''],
                telugu: ['శ్రావణము'],
                kannada: ['ಶ್ರಾವಣ'],
                bengali: ['শ্রাবণ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['གྲོ་བཞིན་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.karka,
            rtu: this.Rtu.varsha,
            aayana: [this.Aayana.dakshina]
        },
        [Maasa.bhaadrapada]: {
            name: {
                sanskrit: ['भाद्रपद'],
                odia: ['ଭାଦ୍ରବ'],
                malayalam: ['ചിങ്ങം'],
                tamil: ['புரட்டாசி'],
                sinhala: ['බිනර'],
                dhivehi: [''],
                telugu: ['భద్రపదము'],
                kannada: ['ಭಾದ್ರಪದ'],
                bengali: ['ভাদ্র'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['ཁྲིམས་སྟོད་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.simha,
            rtu: this.Rtu.varsha,
            aayana: [this.Aayana.dakshina]
        },
        [Maasa.ashvina]: {
            name: {
                sanskrit: ['आश्विन'],
                odia: ['ଆଶ୍ୱିନ'],
                malayalam: ['കന്നി'],
                tamil: ['ஐப்பசி'],
                sinhala: ['වප්'],
                dhivehi: [''],
                telugu: ['ఆశ్వయుజము'],
                kannada: ['ಆಶ್ವಯುಜ'],
                bengali: ['আশ্বিন'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['ཐ་སྐར་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.kanya,
            rtu: this.Rtu.sarad,
            aayana: [this.Aayana.dakshina]
        },
        [Maasa.kaartika]: {
            name: {
                sanskrit: ['कार्तिक'],
                odia: ['କାର୍ତ୍ତିକ'],
                malayalam: ['തുലാം'],
                tamil: ['கார்த்திகை'],
                sinhala: ['ඉල්'],
                dhivehi: [''],
                telugu: ['కార్తికము'],
                kannada: ['ಕಾರ್ತೀಕ'],
                bengali: ['কার্তিক'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['སྨིན་དྲུག་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.tula,
            rtu: this.Rtu.sarad,
            aayana: [this.Aayana.dakshina]
        },
        [Maasa.maargasirsa]: {
            name: {
                sanskrit: ['मार्गशीर्ष'],
                odia: ['ମାର୍ଗଶିର'],
                malayalam: ['വൃശ്ചികം'],
                tamil: ['மார்கழி'],
                sinhala: ['උඳුවප්'],
                dhivehi: [''],
                telugu: ['మార్గశిరము'],
                kannada: ['ಮಾರ್ಗಶಿರ'],
                bengali: ['অগ্রহায়ণ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['མགོ་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.vrscika,
            rtu: this.Rtu.hemanta,
            aayana: [this.Aayana.dakshina]
        },
        [Maasa.pausha]: {
            name: {
                sanskrit: ['पौष'],
                odia: ['ପୌଷ'],
                malayalam: ['ധനു'],
                tamil: ['தை'],
                sinhala: ['දුරුතු'],
                dhivehi: [''],
                telugu: ['పుష్యము'],
                kannada: ['ಪುಷ್ಯ'],
                bengali: ['পৌষ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['རྒྱལ་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.dhanusa,
            rtu: this.Rtu.hemanta,
            aayana: [this.Aayana.dakshina, this.Aayana.uthara]
        },
        [Maasa.maagha]: {
            name: {
                sanskrit: ['माघ'],
                odia: ['ମାଘ'],
                malayalam: ['മകരം'],
                tamil: ['மாசி'],
                sinhala: ['නවම්'],
                dhivehi: [''],
                telugu: ['మాఘము'],
                kannada: ['ಮಾಘ'],
                bengali: ['মাঘ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['མཆུ་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.makara,
            rtu: this.Rtu.sisira,
            aayana: [this.Aayana.uthara]
        },
        [Maasa.phalguna]: {
            name: {
                sanskrit: ['फाल्गुन'],
                odia: ['ଫାଲ୍ଗୁନ'],
                malayalam: ['കുംഭം'],
                tamil: ['பங்குனி'],
                sinhala: ['මැදින්'],
                dhivehi: [''],
                telugu: ['ఫాల్గుణము'],
                kannada: ['ಫಾಲ್ಗುಣ'],
                bengali: ['ফাল্গুন'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['དབོ་ཟླ་བ']
            },
            suryaMaasa: this.Rasi.kumbha,
            rtu: this.Rtu.sisira,
            aayana: [this.Aayana.uthara]
        }
    }

    Paksha: PakshaType = {
        [Paksha.krshna]: {
            name: {
                sanskrit: ['कृष्ण'],
                odia: ['କୃଷ୍ଣପକ୍ଷ'],
                malayalam: ['കൃഷ്ണ പക്ഷം'],
                tamil: ['தேய்பிறை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['కృష్ణ పక్షం'],
                kannada: ['ಕೃಷ್ಣ ಪಕ್ಷ', 'ವದ್ಯ ಪಕ್ಷ'],
                bengali: ['কৃষ্ণ পক্ষ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        },
        [Paksha.shukla]: {
            name: {
                sanskrit: ['शुक्ल'],
                odia: ['ଶୁକ୍ଳପକ୍ଷ'],
                malayalam: ['ശുക്ല പക്ഷം'],
                tamil: ['வளர்பிறை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['శుక్లపక్షం'],
                kannada: ['ಶುಕ್ಲ ಪಕ್ಷ', 'ಗೌರ ಪಕ್ಷ'],
                bengali: ['শুক্ল পক্ষ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            }
        }
    }

    Tithi: TithiType = {
        [Tithi.prathama]: {
            name: {
                sanskrit: ['प्रतिपदा', 'प्रथमा'],
                odia: ['ପ୍ରତିପଦ'],
                malayalam: ['പ്രഥമ', 'പ്രതിപദം'],
                tamil: ['பிரதமை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['పాడ్యమి'],
                kannada: ['ಪ್ರತಿಪತ್'],
                bengali: ['প্রতিপদ'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.agni,
            karana: {
                [Paksha.shukla]: [this.Karana.kimstughna, this.Karana.bava],
                [Paksha.krshna]: [this.Karana.baalava, this.Karana.kaulava]
            }
        },
        [Tithi.dvitiya]: {
            name: {
                sanskrit: ['द्वितीया'],
                odia: ['ଦ୍ୱିତୀୟା'],
                malayalam: ['ദ്വിതീയ'],
                tamil: ['துவிதியை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['విదియ'],
                kannada: ['ದ್ವಿತೀಯಾ'],
                bengali: ['দ্বিতীয়া'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.brahma,
            karana: {
                [Paksha.shukla]: [this.Karana.baalava, this.Karana.kaulava],
                [Paksha.krshna]: [this.Karana.taitula, this.Karana.garaja]
            }
        },
        [Tithi.trtiya]: {
            name: {
                sanskrit: ['तृतीया'],
                odia: ['ତୃତୀୟା'],
                malayalam: ['തൃതിയ'],
                tamil: ['திருதியை'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['తదియ'],
                kannada: ['ತೃತೀಯಾ'],
                bengali: ['তৃতীয়া'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.gauri,
            karana: {
                [Paksha.shukla]: [this.Karana.taitula, this.Karana.garaja],
                [Paksha.krshna]: [this.Karana.vanija, this.Karana.vishti]
            }
        },
        [Tithi.chaturti]: {
            name: {
                sanskrit: ['चतुर्थी'],
                odia: ['ଚତୁର୍ଥୀ'],
                malayalam: ['ചതുർത്ഥി'],
                tamil: ['சதுர்த்தி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['చవితి'],
                kannada: ['ಚತುರ್ಥೀ'],
                bengali: ['চতুর্থী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vinayaka,
            karana: {
                [Paksha.shukla]: [this.Karana.vanija, this.Karana.vishti],
                [Paksha.krshna]: [this.Karana.bava, this.Karana.baalava]
            }
        },
        [Tithi.panchami]: {
            name: {
                sanskrit: ['पञ्चमी'],
                odia: ['ପଞ୍ଚମୀ'],
                malayalam: ['പഞ്ചമി'],
                tamil: ['பஞ்சமி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['పంచమి'],
                kannada: ['ಪಂಚಮೀ'],
                bengali: ['পঞ্চমী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.sarpas,
            karana: {
                [Paksha.shukla]: [this.Karana.bava, this.Karana.baalava],
                [Paksha.krshna]: [this.Karana.kaulava, this.Karana.taitula]
            }
        },
        [Tithi.shasti]: {
            name: {
                sanskrit: ['षष्ठी'],
                odia: ['ଷଷ୍ଠୀ'],
                malayalam: ['ഷഷ്ഠി'],
                tamil: ['சஷ்டி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['షష్ఠి'],
                kannada: ['ಷಷ್ಠೀ'],
                bengali: ['ষষ্ঠী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.kumaraswaymi,
            karana: {
                [Paksha.shukla]: [this.Karana.kaulava, this.Karana.taitula],
                [Paksha.krshna]: [this.Karana.garaja, this.Karana.vanija]
            }
        },
        [Tithi.saptami]: {
            name: {
                sanskrit: ['सप्तमी'],
                odia: ['ସପ୍ତମୀ'],
                malayalam: ['സപ്തമി'],
                tamil: ['சப்தமி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['సప్తమి'],
                kannada: ['ಸಪ್ತಮೀ'],
                bengali: ['সপ্তমী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.surya,
            karana: {
                [Paksha.shukla]: [this.Karana.garaja, this.Karana.vanija],
                [Paksha.krshna]: [this.Karana.vishti, this.Karana.bava]
            }
        },
        [Tithi.ashtami]: {
            name: {
                sanskrit: ['अष्टमी'],
                odia: ['ଅଷ୍ଟମୀ'],
                malayalam: ['അഷ്ടമി'],
                tamil: ['அஷ்டமி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['అష్టమి'],
                kannada: ['ಅಷ್ಟಮೀ'],
                bengali: ['অষ্টমী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva,
            karana: {
                [Paksha.shukla]: [this.Karana.vishti, this.Karana.bava],
                [Paksha.krshna]: [this.Karana.baalava, this.Karana.kaulava]
            }
        },
        [Tithi.navami]: {
            name: {
                sanskrit: ['नवमी'],
                odia: ['ନବମୀ'],
                malayalam: ['നവമി'],
                tamil: ['நவமி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['నవమి'],
                kannada: ['ನವಮೀ'],
                bengali: ['নবমী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.durga,
            karana: {
                [Paksha.shukla]: [this.Karana.baalava, this.Karana.kaulava],
                [Paksha.krshna]: [this.Karana.taitula, this.Karana.garaja]
            }
        },
        [Tithi.dasami]: {
            name: {
                sanskrit: ['दशमी'],
                odia: ['ଦଶମୀ'],
                malayalam: ['ദശമി'],
                tamil: ['தசமி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['దశమి'],
                kannada: ['ದಶಮೀ'],
                bengali: ['দশমী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.yama,
            karana: {
                [Paksha.shukla]: [this.Karana.taitula, this.Karana.garaja],
                [Paksha.krshna]: [this.Karana.vanija, this.Karana.vishti]
            }
        },
        [Tithi.ekadasi]: {
            name: {
                sanskrit: ['एकादशी'],
                odia: ['ଏକାଦଶୀ'],
                malayalam: ['ഏകാദശി'],
                tamil: ['ஏகாதசி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ఏకాదశి'],
                kannada: ['ಏಕಾದಶೀ'],
                bengali: ['একাদশী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.visvedevas,
            karana: {
                [Paksha.shukla]: [this.Karana.vanija, this.Karana.vishti],
                [Paksha.krshna]: [this.Karana.bava, this.Karana.baalava]
            }
        },
        [Tithi.dvadasi]: {
            name: {
                sanskrit: ['द्वादशी'],
                odia: ['ଦ୍ୱାଦଶୀ'],
                malayalam: ['ദ്വാദശി'],
                tamil: ['துவாதசி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['ద్వాదశి'],
                kannada: ['ದ್ವಾದಶೀ'],
                bengali: ['দ্বাদশী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.vishnu,
            karana: {
                [Paksha.shukla]: [this.Karana.bava, this.Karana.baalava],
                [Paksha.krshna]: [this.Karana.kaulava, this.Karana.taitula]
            }
        },
        [Tithi.trayodasi]: {
            name: {
                sanskrit: ['त्रयोदशी'],
                odia: ['ତ୍ରୟୋଦଶୀ'],
                malayalam: ['ത്രയോദശി'],
                tamil: ['திரயோதசி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['త్రయోదశి'],
                kannada: ['ತ್ರಯೋದಶೀ'],
                bengali: ['ত্রয়োদশী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.manmadha,
            karana: {
                [Paksha.shukla]: [this.Karana.kaulava, this.Karana.taitula],
                [Paksha.krshna]: [this.Karana.garaja, this.Karana.vanija]
            }
        },
        [Tithi.chaturdasi]: {
            name: {
                sanskrit: ['चतुर्दशी'],
                odia: ['ଚତୁର୍ଦ୍ଦଶୀ'],
                malayalam: ['ചതുർദശി'],
                tamil: ['சதுர்த்தசி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['చతుర్దశి'],
                kannada: ['ಚತುರ್ದಶೀ'],
                bengali: ['চতুর্দশী'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.shiva,
            karana: {
                [Paksha.shukla]: [this.Karana.garaja, this.Karana.vanija],
                [Paksha.krshna]: [this.Karana.vishti, this.Karana.shakuni]
            }
        },
        [Tithi.paurnami]: {
            name: {
                sanskrit: ['पौर्णमि', 'पूर्णिमा'],
                odia: ['ପୂର୍ଣ୍ଣିମା'],
                malayalam: ['പൌർണമിയോ'],
                tamil: ['பௌர்ணமி', 'முழுநிலவு', 'முழுமதி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['పున్నమి', 'పూర్ణిమ', 'పౌర్ణమి'],
                kannada: ['ಪೌರ್ಣಮಿ', 'ಪೂರ್ಣಿಮಾ'],
                bengali: ['পূর্ণিমা'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.soma,
            karana: {
                [Paksha.shukla]: [this.Karana.vishti, this.Karana.bava],
                [Paksha.krshna]: []
            }
        },
        [Tithi.amavasya]: {
            name: {
                sanskrit: ['अमावस्या'],
                odia: ['ଅମାବାସ୍ୟା'],
                malayalam: ['അമാവാസിയോ'],
                tamil: ['அமாவாசை', 'புதுநிலவு', 'மறைமதி'],
                sinhala: [''],
                dhivehi: [''],
                telugu: ['అమావాస్య'],
                kannada: ['ಅಮಾವಾಸ್ಯೆ'],
                bengali: ['অমাবস্যা'],
                mongolian: [''],
                chinese: [''],
                tibetan: ['']
            },
            diety: Diety.pitrs,
            karana: {
                [Paksha.shukla]: [],
                [Paksha.krshna]: [this.Karana.chatushpaada, this.Karana.naaga]
            }
        }
    }

    Nakshatra: NakshatraType = {
        [Nakshatra.ashvini]: {
            name: {
                sanskrit: ['अश्विनी'],
                odia: ['ଅଶ୍ଵିନୀ'],
                malayalam: ['അശ്വതി'],
                tamil: ['அசுவினி'],
                sinhala: ['අස්විද'],
                dhivehi: ['އައްސިދަ'],
                telugu: ['అశ్విని'],
                kannada: ['ಅಶ್ವಿನಿ'],
                bengali: ['অশ্বিনী'],
                mongolian: ['Шийдэм'],
                chinese: ['婁'],
                tibetan: ['ཐ་སྐར།']
            },
            pada: ['चु', 'चे', 'चो', 'ला'],
            description: '"physician to the Gods"',
            associatedStars: 'β and γ Arietis',
            graha: Graha.ketu,
            deity: [Diety.ashvins],
            symbol: Symbols.ashvini,
            zodiac: { from: { angle: '0°', rasi: this.Rasi.mesha }, to: { angle: '13°20', rasi: this.Rasi.mesha } },
            westernZodiac: { from: { angle: '23°46', rasi: this.Rasi.mesha }, to: { angle: '7°06', rasi: this.Rasi.vrshabha } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.bharani]: {
            name: {
                sanskrit: ['भरणी'],
                odia: ['ଦ୍ଵିଜା'],
                malayalam: ['ഭരണി'],
                tamil: ['பரணி'],
                sinhala: ['බෙරණ'],
                dhivehi: ['ބުރުނު'],
                telugu: ['భరణి'],
                kannada: ['ಭರಣಿ'],
                bengali: ['ভরণী'],
                mongolian: ['Гоё хүүхэн'],
                chinese: ['胃'],
                tibetan: ['བྲ་ཉེ།']
            },
            pada: ['ली', 'लू', 'ले', 'लो'],
            description: '"the bearer"',
            associatedStars: '35, 39, and 41 Arietis',
            graha: Graha.shukra,
            deity: [Diety.yama],
            symbol: Symbols.bharani,
            zodiac: { from: { angle: '13°20', rasi: this.Rasi.mesha }, to: { angle: '26°40', rasi: this.Rasi.mesha } },
            westernZodiac: { from: { angle: '7°06', rasi: this.Rasi.vrshabha }, to: { angle: '20°26', rasi: this.Rasi.vrshabha } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.krttika]: {
            name: {
                sanskrit: ['कृत्तिका'],
                odia: ['କୃତିକା'],
                malayalam: ['കാർത്തിക'],
                tamil: ['கார்த்திகை'],
                sinhala: ['කැති'],
                dhivehi: ['ކެތި'],
                telugu: ['కృత్తిక'],
                kannada: ['ಕೃತಿಕ'],
                bengali: ['কৃত্তিকা'],
                mongolian: ['Нэг эхт зургаан хөвгүүн'],
                chinese: ['昴'],
                tibetan: ['སྨིན་དྲུག']
            },
            pada: ['अ', 'ई', 'उ', 'ए'],
            description: 'an old name of the Pleiades; personified as the nurses of Kārttikeya, a son of Shiva.',
            associatedStars: 'Pleiades',
            graha: Graha.surya,
            deity: [Diety.agni],
            symbol: Symbols.krttika,
            zodiac: { from: { angle: '26°40', rasi: this.Rasi.mesha }, to: { angle: '10°', rasi: this.Rasi.vrshabha } },
            westernZodiac: { from: { angle: '20°26', rasi: this.Rasi.vrshabha }, to: { angle: '3°46', rasi: this.Rasi.mithuna } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.rohini]: {
            name: {
                sanskrit: ['रोहिणी'],
                odia: ['ରୋହିଣୀ'],
                malayalam: ['രോഹിണി'],
                tamil: ['ரோகிணி'],
                sinhala: ['රෙහෙණ'],
                dhivehi: ['ރޯނު'],
                telugu: ['రోహిణి'],
                kannada: ['ರೋಹಿಣಿ'],
                bengali: ['রোহিণী'],
                mongolian: ['Чөлөөт эх'],
                chinese: ['畢'],
                tibetan: ['སྣར་མ།']
            },
            pada: ['ओ', 'वा', 'वी', 'वु'],
            description: '"the red one", a name of Aldebaran. Also known as brāhmī',
            associatedStars: 'Aldebaran',
            graha: Graha.chandra,
            symbol: Symbols.rohini,
            deity: [Diety.brahma],
            zodiac: { from: { angle: '10°', rasi: this.Rasi.vrshabha }, to: { angle: '23°20', rasi: this.Rasi.vrshabha } },
            westernZodiac: { from: { angle: '3°46', rasi: this.Rasi.mithuna }, to: { angle: '17°06', rasi: this.Rasi.mithuna } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.mrgashirsha]: {
            name: {
                sanskrit: ['म्रृगशीर्षा'],
                odia: ['ମୃଗଶିରା'],
                malayalam: ['മകയിരം'],
                tamil: ['மிருகசீரிடம்'],
                sinhala: ['මුවසිරස'],
                dhivehi: ['މިޔަހެލި'],
                telugu: ['మృగశిర'],
                kannada: ['ಮೃಗಶಿರ'],
                bengali: ['মৃগশিরা'],
                mongolian: ['Гөрөөсөн толгой'],
                chinese: ['觜'],
                tibetan: ['མགོ']
            },
            pada: ['वे', 'वो', 'का', 'की'],
            description: '"the deer\'s head". Also known as āgrahāyaṇī',
            associatedStars: 'λ, φ Orionis',
            graha: Graha.mangala,
            symbol: Symbols.mrgashirsha,
            deity: [Diety.soma],
            zodiac: { from: { angle: '23°20', rasi: this.Rasi.vrshabha }, to: { angle: '6°40', rasi: this.Rasi.mithuna } },
            westernZodiac: { from: { angle: '17°06', rasi: this.Rasi.mithuna }, to: { angle: '0°26', rasi: this.Rasi.karka } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.ardra]: {
            name: {
                sanskrit: ['आर्द्रा'],
                odia: ['ଆଦ୍ରା'],
                malayalam: ['ആതിര', 'തിരുവാതിര'],
                tamil: ['திருவாதிரை'],
                sinhala: ['අද'],
                dhivehi: ['އަދަ'],
                telugu: ['ఆరుద్ర'],
                kannada: ['ಆರ್ದ್ರ'],
                bengali: ['আর্দ্রা'],
                mongolian: ['Хэрцгий охин'],
                chinese: ['參'],
                tibetan: ['ལག']
            },
            pada: ['कु', 'घ', 'ङ', 'छ'],
            description: '"the storm god"',
            associatedStars: 'Betelgeuse',
            graha: Graha.rahu,
            symbol: Symbols.ardra,
            deity: [Diety.rudra],
            zodiac: { from: { angle: '6°40', rasi: this.Rasi.mithuna }, to: { angle: '20°', rasi: this.Rasi.mithuna } },
            westernZodiac: { from: { angle: '0°26', rasi: this.Rasi.karka }, to: { angle: '13°46', rasi: this.Rasi.karka } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.punarvasu]: {
            name: {
                sanskrit: ['पुनर्वसु'],
                odia: ['ପୁନର୍ବସୁ'],
                malayalam: ['പുണർതം'],
                tamil: ['புனர்பூசம்'],
                sinhala: ['පුනාවස'],
                dhivehi: ['ފުނޯސް'],
                telugu: ['పునర్వసు'],
                kannada: ['ಪುನರ್ವಸು'],
                bengali: ['পুনর্বসু'],
                mongolian: ['Өглөгт охин'],
                chinese: ['井'],
                tibetan: ['ནབས་སོ།']
            },
            pada: ['के', 'को', 'हा', 'ही'],
            description: '"the two restorers of goods", also known as yamakau "the two chariots"',
            associatedStars: 'Castor and Pollux',
            graha: Graha.guru,
            symbol: Symbols.punarvasu,
            deity: [Diety.aditi],
            zodiac: { from: { angle: '20°', rasi: this.Rasi.mithuna }, to: { angle: '3°20', rasi: this.Rasi.karka } },
            westernZodiac: { from: { angle: '13°46', rasi: this.Rasi.karka }, to: { angle: '27°06', rasi: this.Rasi.karka } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.pushya]: {
            name: {
                sanskrit: ['पुष्य'],
                odia: ['ପୁଷ୍ୟା'],
                malayalam: ['പൂയം'],
                tamil: ['பூசம்'],
                sinhala: ['පුෂ'],
                dhivehi: ['ފުސް'],
                telugu: ['పుష్య'],
                kannada: ['ಪುಷ್ಯ'],
                bengali: ['পুষ্যা'],
                mongolian: ['Найралт эх'],
                chinese: ['鬼'],
                tibetan: ['རྒྱལ།']
            },
            pada: ['हु', 'हे', 'हो', 'ड'],
            description: '"the nourisher", also known as sidhya or tiṣya',
            associatedStars: 'γ, δ and θ Cancri',
            graha: Graha.shani,
            deity: [Diety.brhaspati],
            symbol: Symbols.pushya,
            zodiac: { from: { angle: '3°20', rasi: this.Rasi.karka }, to: { angle: '16°40', rasi: this.Rasi.karka } },
            westernZodiac: { from: { angle: '27°06', rasi: this.Rasi.karka }, to: { angle: '10°26', rasi: this.Rasi.simha } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.ashlesha]: {
            name: {
                sanskrit: ['आश्ळेषा', 'आश्लेषा'],
                odia: ['ଆଶ୍ଳେଷା'],
                malayalam: ['ആയില്യം'],
                tamil: ['ஆயில்யம்'],
                sinhala: ['අස්ලිස'],
                dhivehi: ['އަހުލިހަ'],
                telugu: ['ఆశ్లేష'],
                kannada: ['ಆಶ್ಲೇಷ'],
                bengali: ['অশ্লেষা'],
                mongolian: ['Үнэг'],
                chinese: ['柳'],
                tibetan: ['སྐག']
            },
            pada: ['डी', 'डू', 'डे', 'डो'],
            description: '"the embrace"',
            associatedStars: 'δ, ε, η, ρ, and σ Hydrae',
            graha: Graha.budha,
            deity: [Diety.sarpas],
            symbol: Symbols.ashlesha,
            zodiac: { from: { angle: '16°40', rasi: this.Rasi.karka }, to: { angle: '30°', rasi: this.Rasi.karka } },
            westernZodiac: { from: { angle: '10°26', rasi: this.Rasi.simha }, to: { angle: '23°46', rasi: this.Rasi.simha } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.magha]: {
            name: {
                sanskrit: ['मघा'],
                odia: ['ମଘା'],
                malayalam: ['മകം'],
                tamil: ['மகம்'],
                sinhala: ['මා'],
                dhivehi: ['މާ'],
                telugu: ['మఘ'],
                kannada: ['ಮಘ'],
                bengali: ['মঘা'],
                mongolian: ['Их морь'],
                chinese: ['星'],
                tibetan: ['མཆུ།']
            },
            pada: ['मा', 'मी', 'मू', 'मे'],
            description: '"the bountiful"',
            associatedStars: 'Regulus',
            graha: Graha.ketu,
            deity: [Diety.pitrs],
            symbol: Symbols.magha,
            zodiac: { from: { angle: '0°', rasi: this.Rasi.simha }, to: { angle: '13°20', rasi: this.Rasi.simha } },
            westernZodiac: { from: { angle: '23°46', rasi: this.Rasi.simha }, to: { angle: '7°06', rasi: this.Rasi.kanya } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.purvaPhalguni]: {
            name: {
                sanskrit: ['पूर्व फल्गुनी'],
                odia: ['ପୂର୍ବ ଫାଲ୍ଗୁନୀ'],
                malayalam: ['പൂരം'],
                tamil: ['பூரம்'],
                sinhala: ['පුවපල්'],
                dhivehi: ['ފުރަ'],
                telugu: ['పూర్వ ఫల్గుని'],
                kannada: ['ಪೂರ್ವ'],
                bengali: ['পূর্বফাল্গুনী'],
                mongolian: ['Бага морь'],
                chinese: ['張'],
                tibetan: ['གྲེ།']
            },
            pada: ['मो', 'टा', 'टी', 'टू'],
            description: '"first reddish one"',
            associatedStars: 'δ and θ Leonis',
            graha: Graha.shukra,
            deity: [Diety.bhaga],
            symbol: Symbols.purvaPhalguni,
            zodiac: { from: { angle: '13°20', rasi: this.Rasi.simha }, to: { angle: '26°40', rasi: this.Rasi.simha } },
            westernZodiac: { from: { angle: '7°06', rasi: this.Rasi.kanya }, to: { angle: '20°26', rasi: this.Rasi.kanya } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.uttaraPhalguni]: {
            name: {
                sanskrit: ['उत्तर फल्गुनी'],
                odia: ['ଉତ୍ତର ଫାଲ୍ଗୁନୀ'],
                malayalam: ['ഉത്രം'],
                tamil: ['உத்திரம்'],
                sinhala: ['උත්රපල්'],
                dhivehi: ['އުތުރަ'],
                telugu: ['ఉత్తర ఫల్గుని'],
                kannada: ['ಉತ್ತರ'],
                bengali: ['উত্তরফাল্গুনী'],
                mongolian: ['Харцага'],
                chinese: ['翼'],
                tibetan: ['དབོ།']
            },
            pada: ['टे', 'टो', 'पा', 'पी'],
            description: '"second reddish one"',
            associatedStars: 'Denebola',
            graha: Graha.surya,
            deity: [Diety.aryaman],
            symbol: Symbols.uttaraPhalguni,
            zodiac: { from: { angle: '26°40', rasi: this.Rasi.simha }, to: { angle: '10°', rasi: this.Rasi.kanya } },
            westernZodiac: { from: { angle: '20°26', rasi: this.Rasi.kanya }, to: { angle: '3°46', rasi: this.Rasi.tula } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.hasta]: {
            name: {
                sanskrit: ['हस्त'],
                odia: ['ହସ୍ତା'],
                malayalam: ['അത്തം'],
                tamil: ['அசுதம்'],
                sinhala: ['හත'],
                dhivehi: ['އަތަ'],
                telugu: ['హస్త'],
                kannada: ['ಹಸ್ತ'],
                bengali: ['হস্তা'],
                mongolian: ['Тугчин'],
                chinese: ['軫'],
                tibetan: ['མེ་བཞི།']
            },
            pada: ['पू', 'ष', 'ण', 'ठ'],
            description: '"the hand"',
            associatedStars: '',
            graha: Graha.chandra,
            deity: [Diety.surya],
            symbol: Symbols.hasta,
            zodiac: { from: { angle: '10°', rasi: this.Rasi.kanya }, to: { angle: '23°20', rasi: this.Rasi.kanya } },
            westernZodiac: { from: { angle: '3°46', rasi: this.Rasi.tula }, to: { angle: '17°06', rasi: this.Rasi.tula } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.chitra]: {
            name: {
                sanskrit: ['चित्रा'],
                odia: ['ଚିତ୍ରା'],
                malayalam: ['ചിത്തിര', 'ചിത്ര'],
                tamil: ['சித்திரை'],
                sinhala: ['සිත'],
                dhivehi: ['ހިތަ'],
                telugu: ['చిత్త'],
                kannada: ['ಚಿತ್ರ'],
                bengali: ['চিত্রা'],
                mongolian: ['Тэргүүн дагуул'],
                chinese: ['角'],
                tibetan: ['ནག་པ།']
            },
            pada: ['पे', 'पो', 'रा', 'री'],
            description: '"the bright one", a name of Spica',
            associatedStars: '',
            graha: Graha.mangala,
            deity: [Diety.tvastar, Diety.vishvakarman],
            symbol: Symbols.chitra,
            zodiac: { from: { angle: '23°20', rasi: this.Rasi.kanya }, to: { angle: '6°40', rasi: this.Rasi.tula } },
            westernZodiac: { from: { angle: '17°06', rasi: this.Rasi.tula }, to: { angle: '0°26', rasi: this.Rasi.vrscika } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.svati]: {
            name: {
                sanskrit: ['स्वाती'],
                odia: ['ସ୍ଵାତୀ'],
                malayalam: ['ചോതി'],
                tamil: ['சுவாதி'],
                sinhala: ['සා'],
                dhivehi: ['ހޭ'],
                telugu: ['స్వాతి'],
                kannada: ['ಸ್ವಾತಿ'],
                bengali: ['স্বাতী'],
                mongolian: ['Салхины эх'],
                chinese: ['亢'],
                tibetan: ['ས་རི།']
            },
            pada: ['रू', 'रे', 'रो', 'ता'],
            description: '"Su-Ati (sanskrit) Very good" name of Arcturus',
            associatedStars: '',
            graha: Graha.rahu,
            deity: [Diety.vayu],
            symbol: Symbols.svati,
            zodiac: { from: { angle: '6°40', rasi: this.Rasi.tula }, to: { angle: '20°', rasi: this.Rasi.tula } },
            westernZodiac: { from: { angle: '0°26', rasi: this.Rasi.vrscika }, to: { angle: '13°46', rasi: this.Rasi.vrscika } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.vishakha]: {
            name: {
                sanskrit: ['विशाखा'],
                odia: ['ବିଶାଖା'],
                malayalam: ['വിശാഖം'],
                tamil: ['விசாகம்'],
                sinhala: ['විසා'],
                dhivehi: ['ވިހާ'],
                telugu: ['విశాఖ'],
                kannada: ['ವಿಶಾಖ'],
                bengali: ['বিশাখা'],
                mongolian: ['Эрхтний тэнгэрт'],
                chinese: ['氐'],
                tibetan: ['ས་ག']
            },
            pada: ['ती', 'तू', 'ते', 'तो'],
            description: '"forked, having branches"; also known as rādhā "the gift"',
            associatedStars: '',
            graha: Graha.guru,
            deity: [Diety.indra, Diety.agni],
            symbol: Symbols.vishakha,
            zodiac: { from: { angle: '20°', rasi: this.Rasi.tula }, to: { angle: '3°20', rasi: this.Rasi.vrscika } },
            westernZodiac: { from: { angle: '13°46', rasi: this.Rasi.vrscika }, to: { angle: '27°06', rasi: this.Rasi.vrscika } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.anuradha]: {
            name: {
                sanskrit: ['अनुराधा'],
                odia: ['ଅନୁରାଧା'],
                malayalam: ['അനിഴം'],
                tamil: ['அனுசம்'],
                sinhala: ['අනුර'],
                dhivehi: ['ނޮރަ'],
                telugu: ['అనురాధ'],
                kannada: ['ಅನುರಾಧಾ'],
                bengali: ['অনুরাধা'],
                mongolian: ['Гар од'],
                chinese: ['房'],
                tibetan: ['ལྷ་མཚམས།']
            },
            pada: ['ना', 'नी', 'नू', 'ने'],
            description: '"following rādhā"',
            associatedStars: '',
            graha: Graha.shani,
            deity: [Diety.mitra],
            symbol: Symbols.anuradha,
            zodiac: { from: { angle: '3°20', rasi: this.Rasi.vrscika }, to: { angle: '16°40', rasi: this.Rasi.vrscika } },
            westernZodiac: { from: { angle: '27°06', rasi: this.Rasi.vrscika }, to: { angle: '10°26', rasi: this.Rasi.dhanusa } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.jyeshtha]: {
            name: {
                sanskrit: ['ज्येष्ठा'],
                odia: ['ଜ୍ୟୋଷ୍ଠା'],
                malayalam: ['തൃക്കേട്ട'],
                tamil: ['கேட்டை'],
                sinhala: ['දෙට'],
                dhivehi: ['ދޮށަ'],
                telugu: ['జ్యేష్ఠ'],
                kannada: ['ಜ್ಯೇಷ್ಠ'],
                bengali: ['জ্যেষ্ঠা'],
                mongolian: ['Хонгорцог'],
                chinese: ['心'],
                tibetan: ['སྣྲོན།']
            },
            pada: ['नो', 'या', 'यी', 'यू'],
            description: '"the eldest, most excellent"',
            associatedStars: '',
            graha: Graha.budha,
            deity: [Diety.indra],
            symbol: Symbols.jyeshtha,
            zodiac: { from: { angle: '16°40', rasi: this.Rasi.vrscika }, to: { angle: '30°', rasi: this.Rasi.vrscika } },
            westernZodiac: { from: { angle: '10°26', rasi: this.Rasi.dhanusa }, to: { angle: '23°46', rasi: this.Rasi.dhanusa } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.mula]: {
            name: {
                sanskrit: ['मूल'],
                odia: ['ମୂଳା'],
                malayalam: ['മൂലം'],
                tamil: ['மூலம்'],
                sinhala: ['මුල'],
                dhivehi: ['މުލަ'],
                telugu: ['మూల'],
                kannada: ['ಮೂಲ'],
                bengali: ['মূলা'],
                mongolian: ['Онгоц'],
                chinese: ['尾'],
                tibetan: ['སྣུབས།']
            },
            pada: ['ये', 'यो', 'भा', 'भी'],
            description: '"the root"',
            associatedStars: '',
            graha: Graha.ketu,
            deity: [Diety.nirrti],
            symbol: Symbols.mula,
            zodiac: { from: { angle: '0°', rasi: this.Rasi.dhanusa }, to: { angle: '13°20', rasi: this.Rasi.dhanusa } },
            westernZodiac: { from: { angle: '23°46', rasi: this.Rasi.dhanusa }, to: { angle: '7°06', rasi: this.Rasi.makara } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.purvaAshadha]: {
            name: {
                sanskrit: ['पूर्वाषाढा'],
                odia: ['ପୂର୍ବାଷାଢା'],
                malayalam: ['പൂരാടം'],
                tamil: ['பூராடம்'],
                sinhala: ['පුවසල'],
                dhivehi: ['ފުރަހަޅަ'],
                telugu: ['పూర్వాషాడ'],
                kannada: ['ಪುರ್ವಾಷಾಡ'],
                bengali: ['পূর্বাষাঢ়া'],
                mongolian: ['Суулга'],
                chinese: ['箕'],
                tibetan: ['ཆུ་སྟོད།']
            },
            pada: ['भू', 'धा', 'फा', 'ढा'],
            description: '"first of the āṣāḍhā", āṣāḍhā "the invincible one" being the name of a constellation',
            associatedStars: '',
            graha: Graha.shukra,
            deity: [Diety.apah],
            symbol: Symbols.purvaAshadha,
            zodiac: { from: { angle: '13°20', rasi: this.Rasi.dhanusa }, to: { angle: '26°40', rasi: this.Rasi.dhanusa } },
            westernZodiac: { from: { angle: '7°06', rasi: this.Rasi.makara }, to: { angle: '20°26', rasi: this.Rasi.makara } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.uttaraAshadha]: {
            name: {
                sanskrit: ['उत्तराषाढा'],
                odia: ['ଉତ୍ତରଷାଢା'],
                malayalam: ['ഉത്രാടം'],
                tamil: ['உத்திராடம்'],
                sinhala: ['උත්රසල'],
                dhivehi: ['އުތުރަހަޅަ'],
                telugu: ['ఉత్తరాషాడ'],
                kannada: ['ಉತ್ತರಾಷಾಡ'],
                bengali: ['উত্তরাষাঢ়া'],
                mongolian: ['Элдэв тэнгэртэн'],
                chinese: ['斗'],
                tibetan: ['ཆུ་སྨད།']
            },
            pada: ['भे', 'भो', 'जा', 'जी'],
            description: '"second of the āṣāḍhā"',
            associatedStars: '',
            graha: Graha.shukra,
            deity: [Diety.visvedevas],
            symbol: Symbols.uttaraAshadha,
            zodiac: { from: { angle: '26°40', rasi: this.Rasi.dhanusa }, to: { angle: '10°', rasi: this.Rasi.makara } },
            westernZodiac: { from: { angle: '20°26', rasi: this.Rasi.makara }, to: { angle: '3°46', rasi: this.Rasi.kumbha } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.shravana]: {
            name: {
                sanskrit: ['श्रवण'],
                odia: ['ଶ୍ରବଣା'],
                malayalam: ['ഓണം', 'തിരുവോണം'],
                tamil: ['திருவோணம்'],
                sinhala: ['සුවණ'],
                dhivehi: ['ހުވަން'],
                telugu: ['శ్రవణ'],
                kannada: ['ಶ್ರವಣ'],
                bengali: ['শ্রবণা'],
                mongolian: ['Булаагч', 'Яруу эгшигт'],
                chinese: ['女'],
                tibetan: ['གྲོ་བཞིན།']
            },
            pada: ['खी', 'खू', 'खे', 'खो'],
            description: '',
            associatedStars: '',
            graha: Graha.chandra,
            deity: [Diety.vishnu],
            symbol: Symbols.shravana,
            zodiac: { from: { angle: '10°', rasi: this.Rasi.makara }, to: { angle: '23°20', rasi: this.Rasi.makara } },
            westernZodiac: { from: { angle: '3°46', rasi: this.Rasi.kumbha }, to: { angle: '17°06', rasi: this.Rasi.kumbha } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.dhanishta]: {
            name: {
                sanskrit: ['श्रविष्ठा', 'धनिष्ठा'],
                odia: ['ଧନିଷ୍ଠା'],
                malayalam: ['അവിട്ടം'],
                tamil: ['அவிட்டம்'],
                sinhala: ['දෙණට'],
                dhivehi: ['ދިނަށަ'],
                telugu: ['ధనిష్ఠ'],
                kannada: ['ಧನಿಷ್ಠ'],
                bengali: ['ধনিষ্ঠা'],
                mongolian: ['Тооно'],
                chinese: ['虛'],
                tibetan: ['མོན་གྲེ།']
            },
            pada: ['गा', 'गी', 'गु', 'गे'],
            description: '"most famous", also Shravishthā "swiftest"',
            associatedStars: '',
            graha: Graha.mangala,
            deity: [Diety.vasu],
            symbol: Symbols.dhanishta,
            zodiac: { from: { angle: '23°20', rasi: this.Rasi.makara }, to: { angle: '6°40', rasi: this.Rasi.kumbha } },
            westernZodiac: { from: { angle: '17°06', rasi: this.Rasi.kumbha }, to: { angle: '0°26', rasi: this.Rasi.meena } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.shatabhisha]: {
            name: {
                sanskrit: ['शतभिषक्', 'शततारका'],
                odia: ['ସତଭିଷା'],
                malayalam: ['ചതയം'],
                tamil: ['சதயம்'],
                sinhala: ['සියාවස'],
                dhivehi: ['ހިޔަވިހާ'],
                telugu: ['శతభిష'],
                kannada: ['ಶತಭಿಷ'],
                bengali: ['শতভিষা'],
                mongolian: ['Чөдөр'],
                chinese: ['危'],
                tibetan: ['མོན་གྲུ']
            },
            pada: ['गो', 'सा', 'सी', 'सू'],
            description: '"requiring a hundred physicians"',
            associatedStars: '',
            graha: Graha.rahu,
            deity: [Diety.varuna],
            symbol: Symbols.shatabhisha,
            zodiac: { from: { angle: '6°40', rasi: this.Rasi.kumbha }, to: { angle: '20°', rasi: this.Rasi.kumbha } },
            westernZodiac: { from: { angle: '0°26', rasi: this.Rasi.meena }, to: { angle: '13°46', rasi: this.Rasi.meena } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.purvaBhadrapada]: {
            name: {
                sanskrit: ['पूर्वभाद्रपदा', 'पूर्वप्रोष्ठपदा'],
                odia: ['ପୂର୍ବଭାଦ୍ରପଦ'],
                malayalam: ['പൂരുരുട്ടാതി'],
                tamil: ['பூரட்டாதி'],
                sinhala: ['පුවපුටුප'],
                dhivehi: ['ފުރަބަދުރުވަ'],
                telugu: ['పూర్వ భాద్రపద'],
                kannada: ['ಪೂರ್ವ ಭಾದ್ರಪದ'],
                bengali: ['পূর্বভাদ্রপদ'],
                mongolian: ['Шувуун хошуут'],
                chinese: ['室'],
                tibetan: ['ཁྲུམས་སྟོད།']
            },
            pada: ['से', 'सो', 'दा', 'दी'],
            description: '"the first of the blessed feet"',
            associatedStars: '',
            graha: Graha.guru,
            deity: [Diety.ajaikapada],
            symbol: Symbols.purvaBhadrapada,
            zodiac: { from: { angle: '20°', rasi: this.Rasi.kumbha }, to: { angle: '3°20', rasi: this.Rasi.meena } },
            westernZodiac: { from: { angle: '13°46', rasi: this.Rasi.meena }, to: { angle: '27°06', rasi: this.Rasi.meena } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.uttaraBhadrapada]: {
            name: {
                sanskrit: ['उत्तरभाद्रपदा', 'उत्तरप्रोष्ठपदा'],
                odia: ['ଉତ୍ତରାଭାଦ୍ରପଦ'],
                malayalam: ['ഉത്രട്ടാതി'],
                tamil: ['உத்திரட்டாதி'],
                sinhala: ['උත්රපුටුප'],
                dhivehi: ['ފަސްބަދުރުވަ'],
                telugu: ['ఉత్తర భాద్రపద'],
                kannada: ['ಉತ್ತರ ಭಾದ್ರಪದ'],
                bengali: ['উত্তরভাদ্রপদ'],
                mongolian: ['Могой хүлэгч'],
                chinese: ['壁'],
                tibetan: ['ཁྲུམས་སྨད།']
            },
            pada: ['दू', 'थ', 'झ', 'ञ'],
            description: '"the second of the blessed feet"',
            associatedStars: '',
            graha: Graha.shani,
            deity: [Diety.ahirbudhnya],
            symbol: Symbols.uttaraBhadrapada,
            zodiac: { from: { angle: '3°20', rasi: this.Rasi.meena }, to: { angle: '16°40', rasi: this.Rasi.meena } },
            westernZodiac: { from: { angle: '27°06', rasi: this.Rasi.meena }, to: { angle: '10°26', rasi: this.Rasi.mesha } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        },
        [Nakshatra.revati]: {
            name: {
                sanskrit: ['रेवती'],
                odia: ['ରେବତୀ'],
                malayalam: ['രേവതി'],
                tamil: ['ரேவதி'],
                sinhala: ['රේවතී'],
                dhivehi: ['ރޭވަ'],
                telugu: ['రేవతి'],
                kannada: ['ರೇವತಿ'],
                bengali: ['রেবতী'],
                mongolian: ['Дэлгэрүүлэгч'],
                chinese: ['奎'],
                tibetan: ['ནམ་གྲུ།']
            },
            pada: ['दे', 'दो', 'च', 'ची'],
            description: '"prosperous"',
            associatedStars: '',
            graha: Graha.budha,
            deity: [Diety.pushan],
            symbol: Symbols.revati,
            zodiac: { from: { angle: '16°40', rasi: this.Rasi.meena }, to: { angle: '30°', rasi: this.Rasi.meena } },
            westernZodiac: { from: { angle: '10°26', rasi: this.Rasi.mesha }, to: { angle: '23°46', rasi: this.Rasi.mesha } },
            gana: '',
            jaati: '',
            vrksha: '',
            pashu: '',
            pakshi: '',
            nadi: '',
            varna: '',
            ratna: ''
        }
    }

    //#endregion

    //#endregion

    //#region constructor

    constructor(props: PanchangaType) {
        navigator.geolocation.getCurrentPosition((position) => this.getProperties({ position, props }), () => this.getProperties({ props }));
    }

    //#endregion

    //#region private functions

    private getProperties = (props: { position?: any, props: PanchangaType }) => {
        this.properties.akshamsha = TypeCheck.takeNextIfNull([props.props.akshamsha, props.position?.coords.latitude, 0]);
        this.properties.rekamsha = TypeCheck.takeNextIfNull([props.props.rekamsha, props.position?.coords.longitude, 0]);
        this.properties.maasaarambhaAmaavasya = TypeCheck.takeNextIfNull([props.props.maasaarambhaAmaavasya, true]);
        this.properties.language = TypeCheck.takeNextIfNull([props.props.language, 'sanskrit']);
        this.properties.transliterate = TypeCheck.takeNextIfNull([props.props.transliterate, true]);
        this.properties.date = props.props.date;
        this.setProperties();
    }

    private julianDay = (date: Date) => (TypeCheck.toOADate(date) + 2415018.5);

    private gregorianDay = (julian: number) => TypeCheck.fromOADate(julian - 2415018.5);

    private moonPhase = (d: number, m: number, y: number) => parseFloat(`0.${`${(2 - parseInt(`${y / 100}`) + parseInt(`${parseInt(`${y / 100}`) / 4}`) + d + parseInt(`${365.25636 * (y + 4716)}`) + parseInt(`${30.6001 * ((m < 3 ? m + 11 : m) + 1)}`) - 1524.5 - 2451549.5) / 29.53}`.split('.')[1]}`) * 29.53;

    private getElevationOfObserver = (declination: number) => ((this.RHA.Earth.h0) / ((cos((declination) - (this.properties.akshamsha || 0))) * (cos((declination) + (this.properties.akshamsha || 0)))));

    private getSolarTransit = (meanSolarTime: number, solarMeanAnomaly: number, eclipticLongitude: number) => (2451545.0 + meanSolarTime + (this.JT.Earth.J1 * sin(solarMeanAnomaly)) + (this.JT.Earth.J2 * sin(2 * eclipticLongitude)));

    private getMeanSolarDay = (date: Date) => (this.julianDay(date) - 2451545 + (69.184 / 86400) - (((this.properties.rekamsha || 0) * this.JT.Earth.J3) / 360));

    private getSunRightAscensionDeclinationAndTransit = (date: Date) => {
        const meanSolarTime = this.getMeanSolarDay(date);
        const solarMeanAnomaly = (this.MA.Earth.M0 + this.MA.Earth.M1 * meanSolarTime) % 360;
        const equationOfCenter = (this.EC.Earth.C1 * sin(solarMeanAnomaly)) + (this.EC.Earth.C2 * sin(2 * solarMeanAnomaly)) + ((this.EC.Earth.C3 || 0) * sin(3 * solarMeanAnomaly));
        const eclipticLongitude = (solarMeanAnomaly + equationOfCenter + 180 + this.POE.Earth.Perihelion) % 360;
        const solarTransit = this.getSolarTransit(meanSolarTime, solarMeanAnomaly, eclipticLongitude);
        const AU = 1.00014 - (0.01671 * cos(solarMeanAnomaly)) - (0.00014 * cos(2 * solarMeanAnomaly));
        const obliquityOfEcliptic = this.POE.Earth.Obliquity - (0.0000004 * meanSolarTime);
        return { rightAscension: degToHour(atan((cos(obliquityOfEcliptic)) * tan(eclipticLongitude))), declination: asin(sin(eclipticLongitude) * sin(obliquityOfEcliptic)), solarTransit, AU };
    }

    private getSolarMeanHourAndTransit = (date: Date) => {
        const { declination, rightAscension, solarTransit, AU } = this.getSunRightAscensionDeclinationAndTransit(date);
        this.properties.suryaapratigraha = decimalToDeg(declination);
        this.properties.suryalankodhaya = decimalToDeg(rightAscension);
        const elevationOfObserver = this.getElevationOfObserver(declination);
        return { meanHour: acos((sin(this.RHA.Earth.h0) - (sin(this.properties.akshamsha || 0) * sin(declination))) / ((cos(this.properties.akshamsha || 0) * cos(declination)))), solarTransit, elevationOfObserver, AU };
    }

    private getSunRiseAndSet = (date: Date) => {
        const { meanHour, solarTransit, elevationOfObserver, AU } = this.getSolarMeanHourAndTransit(date);
        this.properties.suryodhaya = this.gregorianDay((solarTransit - ((meanHour / 360) * this.JT.Earth.J3)));
        this.properties.suryaasthama = this.gregorianDay((solarTransit + ((meanHour / 360) * this.JT.Earth.J3)));
    }

    private getLunarTransit = (meanSolarTime: number, solarMeanAnomaly: number, eclipticLongitude: number) => (2451545.0 + meanSolarTime + (this.JT.Earth.J1 * sin(solarMeanAnomaly)) + (this.JT.Earth.J2 * sin(2 * eclipticLongitude)));

    private getDistanceAndCoordinates = (eccentricity: number, semiMajorAxis: number, trueAnomaly: number) => {
        const r = (semiMajorAxis * (1 - (eccentricity * eccentricity))) / (1 + (eccentricity * cos(trueAnomaly)));
        return ({
            r,
            x: r * cos(trueAnomaly),
            y: r * sin(trueAnomaly)
        });
    }

    private getTrueAnomaly = (eccentricity: number, time: number) => {
        const eccentricAnomaly = 0;
        if (eccentricity >= 0 && eccentricity < 1) {
            const excess = eccentricity - 1;
            let meanAnomaly = time * sqrt(this.GVT.Earth.g / cb(this.MEC.Earth?.a || 0));
            // while (abs(meanAnomaly) > PI) {
            //     meanAnomaly = meanAnomaly << meanAnomaly;
            // }
            const perifocalAnomaly = meanAnomaly / sqrt(cb(excess));
            // const ma = eccentricAnomaly - (eccentricity * sin(eccentricAnomaly));
            const te = tan(eccentricAnomaly / 2);
            return ({
                te,
                tv: te * sqrt((1 + eccentricity) / (1 - eccentricity))
            });
        }
    }

    private getTraverseAngle = (semiMajorAxis: number) => (0.9856076686 / sqrt(cb(semiMajorAxis)));

    private getMeanLunarDay = (date: Date) => (this.julianDay(date) - 2451545);

    private getMoonRightAscensionDeclinationAndTransit = (date: Date) => {
        const meanLunarTime = this.getMeanLunarDay(date);
        const traverseAngle = this.getTraverseAngle(this.MEC.Earth?.a || 0);
        const lunarMeanAnomaly = (this.MA.Earth.M0 + (meanLunarTime * traverseAngle));
        const equationOfCenter = (this.EC.Earth.C1 * sin(lunarMeanAnomaly)) + (this.EC.Earth.C2 * sin(2 * lunarMeanAnomaly)) + ((this.EC.Earth.C3 || 0) * sin(3 * lunarMeanAnomaly));
        const eclipticLongitude = (lunarMeanAnomaly + equationOfCenter + 180 + this.POE.Earth.Perihelion) % 360;
        const solarTransit = this.getLunarTransit(lunarMeanAnomaly, lunarMeanAnomaly, eclipticLongitude);
        const AU = 1.00014 - (0.01671 * cos(lunarMeanAnomaly)) - (0.00014 * cos(2 * lunarMeanAnomaly));
        const obliquityOfEcliptic = this.POE.Earth.Obliquity - (0.0000004 * lunarMeanAnomaly);
        return { rightAscension: degToHour(atan((cos(obliquityOfEcliptic)) * tan(eclipticLongitude))), declination: asin(sin(eclipticLongitude) * sin(obliquityOfEcliptic)), solarTransit, AU };
    }

    private getLunarMeanHourAndTransit = (date: Date) => {
        const { declination, rightAscension, solarTransit, AU } = this.getMoonRightAscensionDeclinationAndTransit(date);
        this.properties.suryaapratigraha = decimalToDeg(declination);
        this.properties.suryalankodhaya = decimalToDeg(rightAscension);
        const elevationOfObserver = this.getElevationOfObserver(declination);
        return { meanHour: acos((sin(this.RHA.Earth.h0) - (sin(this.properties.akshamsha || 0) * sin(declination))) / ((cos(this.properties.akshamsha || 0) * cos(declination)))), solarTransit, elevationOfObserver, AU };
    }

    private getMoonRiseAndSet = (date: Date) => {
        const { meanHour, solarTransit, elevationOfObserver, AU } = this.getLunarMeanHourAndTransit(date);
        this.properties.suryodhaya = this.gregorianDay((solarTransit - ((meanHour / 360) * this.JT.Earth.J3)));
        this.properties.suryaasthama = this.gregorianDay((solarTransit + ((meanHour / 360) * this.JT.Earth.J3)));
    }

    private getName = (name: Name) => name?.name?.[this.properties.language || 'sanskrit'];

    private getTithi = (d: number, m: number, y: number) => {
        const tithi = floor(this.moonPhase(d, m, y));
        const allTithis = Object.entries(this.Tithi);
        let index;
        if (tithi > 15) {
            this.properties.paksha = 'krshna';
            if (tithi === 30) {
                index = 16;
            }
            else {
                index = abs(15 - tithi - 1);
            }
        } else {
            index = tithi - 1;
        }
        this.properties.paksha = 'shukla';
        this.properties.tithi = this.getName(allTithis[index]?.[1]);
        return allTithis[index]?.[1];
    }

    // 27 with 800' each total 360deg 1/60deg of each
    private getYoga = () => (((this.properties.chandraapratigraha?.decimal || 0) + (this.properties.suryaapratigraha?.decimal || 0)) / minuteToDeg(800));

    private setKarana = (tithi: TithiType['prathama']) => {
        this.properties.karana = tithi?.karana?.[this.properties?.paksha || Paksha.shukla]?.map(a => this.getName(a));
    }

    private getNakshatra = () => (((this.properties.chandraapratigraha?.decimal || 0) - (this.properties.suryaapratigraha?.decimal || 0)) / 12);

    private getDivasa = (maasa: number) => (((this.properties.chandraapratigraha?.decimal || 0) - (this.properties.suryaapratigraha?.decimal || 0)) / 12);

    private getMaasa = () => {
        const maasa = 0;
        const allMaasas = Object.entries(this.Maasa);
        this.properties.maasa = this.getName(allMaasas[maasa][1]);
        this.properties.suryaMaasa = this.getName(allMaasas[maasa][1].suryaMaasa);
        this.properties.aayana = allMaasas[maasa][1].aayana.map(a => this.getName(a));
        this.properties.rtu = this.getName(allMaasas[maasa][1].rtu);
        return maasa;
    }

    private getSamvatsara = (year: number, maasa: number) => {
        switch (this.properties.calendarType) {
            case CalendarType.defaultNorth:
                this.properties.samvatsara = {
                    year: (year + 56 + (maasa - 8 >= 0 ? 1 : 0)),
                    name: this.getName(this.Samvatsara.akshaya)
                };
                break;
            case CalendarType.saka:
                this.properties.samvatsara = {
                    year: year - 78,
                    name: this.getName(this.Samvatsara.akshaya)
                };
                break;
            case CalendarType.vikrama:
                this.properties.samvatsara = {
                    year: (year + 57),
                    name: this.getName(this.Samvatsara.akshaya)
                };
                break;
            case CalendarType.vikramaKaartika:
                this.properties.samvatsara = {
                    year: (year + 56 + (maasa - 7 > 0 ? 1 : 0)),
                    name: this.getName(this.Samvatsara.akshaya)
                };
                break;
            default:
                this.properties.samvatsara = {
                    year: (year + 57),
                    name: this.getName(this.Samvatsara.akshaya)
                };
                break;
        }
    }

    private setYuga = (yuga: Yuga, year: number) => {
        this.properties.yuga = {
            name: this.getName(this.Yuga[yuga]),
            currentYear: 3102 + year,
            startsOn: this.Yuga[yuga].startsOn,
            endsOn: this.Yuga[yuga].endsOn
        };
    }

    private getKaala = (seconds: number) => VedaKaalaGhataka.samvatsara * seconds;

    private callback = (date: Date) => {
        const year = date.getFullYear();
        const tithi = this.getTithi(date.getDate(), date.getMonth(), year);
        this.getSunRiseAndSet(date);
        this.getMoonRiseAndSet(date);
        this.setKarana(tithi);
        this.getYoga();
        this.getNakshatra();
        const maasa = this.getMaasa();
        this.getDivasa(maasa);
        this.getSamvatsara(year, maasa);
        this.setYuga(Yuga.kali, year);
        this.getKaala(1);
    }

    private setProperties = () => {
        if (this.properties.date) {
            this.callback(this.properties.date);
        } else {
            this.callback(new Date(Date.now()));
        }
    }

    //#endregion

}