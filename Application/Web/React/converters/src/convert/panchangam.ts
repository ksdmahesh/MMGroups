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

export enum KaalaGhataka {
    truti,
    renu,
    lava,
    leekshana,
    lipta,
    vipala,
    pala,
    vighata,
    vinaadi,
    ghati,
    naadi,
    danda,
    muhurta,
    ahoraatra,
    tatpara,
    nimesha,
    kastha,
    kala,
    ghatika,
    paramaanu,
    anu,
    trasarenu,
    vedha,
    ksana,
    laghu,
    maasa,
    rtu,
    ayana,
    samvatsara,
    devahoraatra,
    prahara,
    hora,
    yaama,
    saavanahoraatra,
    mahaakalpa,
    mahaapralaya,
    paraardha,
    kalpa,
    pralaya,
    manvantara,
    manvantaraSandhya,
    caturYuga,
    krtaYugaSandhya,
    krtaYugaSandhyaamsa,
    krtaYuga,
    tretaaYugaSandhya,
    tretaaYugaSandhyaamsa,
    tretaaYuga,
    dvaaparaYugaSandhya,
    dvaaparaYugaSandhyaamsa,
    dvaaparaYuga,
    kaliYugaSandhya,
    kaliYugaSandhyaamsa,
    kaliYuga,
    brahma,
    manu,
    deva,
    pitr,
    manusya
}

//#endregion

//#region constants

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

export const Dik = {
    purva: {
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
    pashcima: {
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
    uttara: {
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
    dakshina: {
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
    isana: {
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
    agneya: {
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
    vayavya: {
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
    nairta: {
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
    madhya: {
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

export const Bhuta = {
    Agni: {
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
        dik: Dik.dakshina,
        ruchi: [Ruchi.amla, Ruchi.lavana, Ruchi.katu]
    },
    Bhumi: {
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
        dik: Dik.madhya,
        ruchi: [Ruchi.madhura, Ruchi.amla, Ruchi.kashaya]
    },
    Vayu: {
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
        dik: Dik.pashcima,
        ruchi: [Ruchi.katu, Ruchi.tikta, Ruchi.kashaya]
    },
    Apa: {
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
        dik: Dik.uttara,
        ruchi: [Ruchi.madhura, Ruchi.lavana]
    },
    Akasha: {
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
        dik: Dik.purva,
        ruchi: [Ruchi.tikta]
    }
}

export const Rasi = {
    Mesha: {
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
        bhuta: Bhuta.Agni,
        graha: Graha.mangala,
        mitra: [],
        satru: []
    },
    Vrshabha: {
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
        bhuta: Bhuta.Bhumi,
        graha: Graha.shukra
    },
    Mithuna: {
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
        bhuta: Bhuta.Vayu,
        graha: Graha.budha
    },
    Karka: {
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
        bhuta: Bhuta.Apa,
        graha: Graha.chandra
    },
    Simha: {
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
        bhuta: Bhuta.Agni,
        graha: Graha.surya
    },
    Kanya: {
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
        bhuta: Bhuta.Bhumi,
        graha: Graha.budha
    },
    Tula: {
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
        bhuta: Bhuta.Vayu,
        graha: Graha.shukra
    },
    Vrscika: {
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
        bhuta: Bhuta.Apa,
        graha: Graha.mangala
    },
    Dhanusa: {
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
        bhuta: Bhuta.Agni,
        graha: Graha.guru
    },
    Makara: {
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
        bhuta: Bhuta.Bhumi,
        graha: Graha.shani
    },
    Kumbha: {
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
        bhuta: Bhuta.Vayu,
        graha: Graha.shani
    },
    Meena: {
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
        bhuta: Bhuta.Apa,
        graha: Graha.guru
    },
}

export const Yuga = {
    Satya: {
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
        }
    },
    Treta: {
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
        }
    },
    Dvapara: {
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
        }
    },
    Kali: {
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
        }
    }
}

export const Loka = {
    Satya: {
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
    Tapa: {
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
    Jana: {
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
    Mahar: {
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
    Svar: {
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
    Bhuvar: {
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
    Bhu: {
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
    Atala: {
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
    Vitala: {
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
    Sutala: {
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
    Talatala: {
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
    Mahatala: {
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
    Rasatala: {
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
    Patala: {
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

export const Samvatsara = {
    Prabhava: {
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
    Vibhava: {
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
    Shukla: {
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
    Pramoda: {
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
    Prajaapati: {
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
    Angirasa: {
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
    Shreemukha: {
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
    Bhaava: {
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
    Yuva: {
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
    Dhaata: {
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
    Ishvara: {
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
    Bahudhaanya: {
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
    Pramaathi: {
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
    Vikrama: {
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
    Vrshapraja: {
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
    Chitrabhanu: {
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
    Subhaanu: {
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
    Taarana: {
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
    Paarthiva: {
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
    Vyaya: {
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
    Sarvajit: {
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
    Sarvadhaari: {
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
    Virodhi: {
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
    Vikrti: {
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
    Khara: {
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
    Nandana: {
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
    Vijaya: {
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
    Jaya: {
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
    Manmatha: {
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
    Durmukha: {
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
    Hevilambi: {
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
    Vilambi: {
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
    Vikaari: {
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
    Shaarvari: {
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
    Plava: {
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
    Shubhakrta: {
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
    Shobhakrta: {
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
    Krodhi: {
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
    Vishvaavasu: {
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
    Paraabhava: {
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
    Plavanga: {
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
    Keelaka: {
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
    Saumya: {
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
    Saadhaarana: {
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
    Virodhakrta: {
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
    Paridhaavi: {
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
    Pramaadica: {
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
    Ananda: {
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
    Raakshasa: {
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
    Nala: {
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
    Pingala: {
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
    Kaalayukta: {
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
    Siddharthi: {
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
    Raudra: {
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
    Durmati: {
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
    Dundubhi: {
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
    Rudhirodgaari: {
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
    Raktaakshi: {
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
    Krodhana: {
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
    Akshaya: {
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

export const Yoga = {
    Amrta: {
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
    Marana: {
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
    Prabalarishta: {
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
    Viskambha: {
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
    Preeti: {
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
    Ayushmaan: {
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
    Saubhaagya: {
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
    Shobhana: {
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
    Atiganda: {
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
    Sukarma: {
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
    Dhrti: {
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
    Shoola: {
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
    Ganda: {
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
    Vrddhi: {
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
    Dhruva: {
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
    Vyaaghata: {
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
    Harshana: {
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
    Vajra: {
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
    Siddhi: {
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
    Vyatipaata: {
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
    Variyana: {
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
    Parigha: {
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
    Shiva: {
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
    Siddha: {
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
    Saadhya: {
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
    Shubha: {
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
    Shukla: {
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
    Brahma: {
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
    Maahendra: {
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
    Vaidhrti: {
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

export const Karana = {
    Shakuni: {
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
    Chatushpaada: {
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
    Naaga: {
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
    Kimstughna: {
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
    Bava: {
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
    Baalava: {
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
    Kaulava: {
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
    Taitula: {
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
    Garaja: {
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
    Vanija: {
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
    Vishti: {
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

export const Rtu = {
    Vasanta: {
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
    Grishma: {
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
    Varsha: {
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
    Sarad: {
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
    Hemanta: {
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
    Sisira: {
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

export const Aayana = {
    Uthara: {
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
    Dakshina: {
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

export const Vaara = {
    Aadi: {
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
        graha: Graha.surya
    },
    soma: {
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
        graha: Graha.chandra
    },
    mangala: {
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
        graha: Graha.mangala
    },
    budha: {
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
        graha: Graha.budha
    },
    guru: {
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
        graha: Graha.guru
    },
    shukra: {
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
        graha: Graha.shukra
    },
    shani: {
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
        graha: Graha.shani
    }
}

export const Maasa = {
    Caitra: {
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
        suryaMaasa: Rasi.Meena,
        rtu: Rtu.Vasanta,
        aayana: [Aayana.Uthara]
    },
    Vaishaka: {
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
        suryaMaasa: Rasi.Mesha,
        rtu: Rtu.Vasanta,
        aayana: [Aayana.Uthara]
    },
    Jyesta: {
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
        suryaMaasa: Rasi.Vrshabha,
        rtu: Rtu.Grishma,
        aayana: [Aayana.Uthara]
    },
    Aashada: {
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
        suryaMaasa: Rasi.Mithuna,
        rtu: Rtu.Grishma,
        aayana: [Aayana.Uthara, Aayana.Dakshina]
    },
    Shaavana: {
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
        suryaMaasa: Rasi.Karka,
        rtu: Rtu.Varsha,
        aayana: [Aayana.Dakshina]
    },
    Bhaadrapada: {
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
        suryaMaasa: Rasi.Simha,
        rtu: Rtu.Varsha,
        aayana: [Aayana.Dakshina]
    },
    Ashvina: {
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
        suryaMaasa: Rasi.Kanya,
        rtu: Rtu.Sarad,
        aayana: [Aayana.Dakshina]
    },
    Kaartika: {
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
        suryaMaasa: Rasi.Tula,
        rtu: Rtu.Sarad,
        aayana: [Aayana.Dakshina]
    },
    Maargasirsa: {
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
        suryaMaasa: Rasi.Vrscika,
        rtu: Rtu.Hemanta,
        aayana: [Aayana.Dakshina]
    },
    Pausha: {
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
        suryaMaasa: Rasi.Dhanusa,
        rtu: Rtu.Hemanta,
        aayana: [Aayana.Dakshina, Aayana.Uthara]
    },
    Maagha: {
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
        suryaMaasa: Rasi.Makara,
        rtu: Rtu.Sisira,
        aayana: [Aayana.Uthara]
    },
    Phalguna: {
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
        suryaMaasa: Rasi.Kumbha,
        rtu: Rtu.Sisira,
        aayana: [Aayana.Uthara]
    }
}

export const Paksha = {
    Krshna: {
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
    Shukla: {
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

export const Tithi = {
    Prathama: {
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
            sukla: [Karana.Kimstughna, Karana.Bava],
            krshna: [Karana.Baalava, Karana.Kaulava]
        }
    },
    Dvitiya: {
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
            sukla: [Karana.Baalava, Karana.Kaulava],
            krshna: [Karana.Taitula, Karana.Garaja]
        }
    },
    Trtiya: {
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
            sukla: [Karana.Taitula, Karana.Garaja],
            krshna: [Karana.Vanija, Karana.Vishti]
        }
    },
    Chaturti: {
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
            sukla: [Karana.Vanija, Karana.Vishti],
            krshna: [Karana.Bava, Karana.Baalava]
        }
    },
    Panchami: {
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
            sukla: [Karana.Bava, Karana.Baalava],
            krshna: [Karana.Kaulava, Karana.Taitula]
        }
    },
    Shasti: {
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
            sukla: [Karana.Kaulava, Karana.Taitula],
            krshna: [Karana.Garaja, Karana.Vanija]
        }
    },
    Saptami: {
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
            sukla: [Karana.Garaja, Karana.Vanija],
            krshna: [Karana.Vishti, Karana.Bava]
        }
    },
    Ashtami: {
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
            sukla: [Karana.Vishti, Karana.Bava],
            krshna: [Karana.Baalava, Karana.Kaulava]
        }
    },
    Navami: {
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
            sukla: [Karana.Baalava, Karana.Kaulava],
            krshna: [Karana.Taitula, Karana.Garaja]
        }
    },
    Dasami: {
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
            sukla: [Karana.Taitula, Karana.Garaja],
            krshna: [Karana.Vanija, Karana.Vishti]
        }
    },
    Ekadasi: {
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
            sukla: [Karana.Vanija, Karana.Vishti],
            krshna: [Karana.Bava, Karana.Baalava]
        }
    },
    Dvadasi: {
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
            sukla: [Karana.Bava, Karana.Baalava],
            krshna: [Karana.Kaulava, Karana.Taitula]
        }
    },
    Trayodasi: {
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
            sukla: [Karana.Kaulava, Karana.Taitula],
            krshna: [Karana.Garaja, Karana.Vanija]
        }
    },
    Chaturdasi: {
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
            sukla: [Karana.Garaja, Karana.Vanija],
            krshna: [Karana.Vishti, Karana.Shakuni]
        }
    },
    Paurnami: {
        name: {
            sanskrit: ['पूर्णिमा', 'पूर्णिमा'],
            odia: ['ପୂର୍ଣ୍ଣିମା'],
            malayalam: ['പൌർണമിയോ'],
            tamil: ['பௌர்ணமி', 'முழுநிலவு', 'முழுமதி'],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['పున్నమి', 'పూర్ణిమ', 'పౌర్ణమి'],
            kannada: ['ಪೂರ್ಣಿಮಾ'],
            bengali: ['পূর্ণিমা'],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.soma,
        karana: {
            sukla: [Karana.Vishti, Karana.Bava],
            krshna: []
        }
    },
    Amavasya: {
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
            sukla: [],
            krshna: [Karana.Chatushpaada, Karana.Naaga]
        }
    }
}

export const Nakshatra = {
    Ashvini: {
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
        zodiac: { from: { angle: '0°', rasi: Rasi.Mesha }, to: { angle: '13°20', rasi: Rasi.Mesha } },
        westernZodiac: { from: { angle: '23°46', rasi: Rasi.Mesha }, to: { angle: '7°06', rasi: Rasi.Vrshabha } },
        gana: '',
        jaati: '',
        vrksha: '',
        pashu: '',
        pakshi: '',
        nadi: '',
        varna: '',
        ratna: ''
    },
    Bharani: {
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
        zodiac: { from: { angle: '13°20', rasi: Rasi.Mesha }, to: { angle: '26°40', rasi: Rasi.Mesha } },
        westernZodiac: { from: { angle: '7°06', rasi: Rasi.Vrshabha }, to: { angle: '20°26', rasi: Rasi.Vrshabha } }
    },
    Krttika: {
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
        zodiac: { from: { angle: '26°40', rasi: Rasi.Mesha }, to: { angle: '10°', rasi: Rasi.Vrshabha } },
        westernZodiac: { from: { angle: '20°26', rasi: Rasi.Vrshabha }, to: { angle: '3°46', rasi: Rasi.Mithuna } }
    },
    Rohini: {
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
        zodiac: { from: { angle: '10°', rasi: Rasi.Vrshabha }, to: { angle: '23°20', rasi: Rasi.Vrshabha } },
        westernZodiac: { from: { angle: '3°46', rasi: Rasi.Mithuna }, to: { angle: '17°06', rasi: Rasi.Mithuna } }
    },
    Mrgashirsha: {
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
        zodiac: { from: { angle: '23°20', rasi: Rasi.Vrshabha }, to: { angle: '6°40', rasi: Rasi.Mithuna } },
        westernZodiac: { from: { angle: '17°06', rasi: Rasi.Mithuna }, to: { angle: '0°26', rasi: Rasi.Karka } }
    },
    Ardra: {
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
        zodiac: { from: { angle: '6°40', rasi: Rasi.Mithuna }, to: { angle: '20°', rasi: Rasi.Mithuna } },
        westernZodiac: { from: { angle: '0°26', rasi: Rasi.Karka }, to: { angle: '13°46', rasi: Rasi.Karka } }
    },
    Punarvasu: {
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
        zodiac: { from: { angle: '20°', rasi: Rasi.Mithuna }, to: { angle: '3°20', rasi: Rasi.Karka } },
        westernZodiac: { from: { angle: '13°46', rasi: Rasi.Karka }, to: { angle: '27°06', rasi: Rasi.Karka } }
    },
    Pushya: {
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
        zodiac: { from: { angle: '3°20', rasi: Rasi.Karka }, to: { angle: '16°40', rasi: Rasi.Karka } },
        westernZodiac: { from: { angle: '27°06', rasi: Rasi.Karka }, to: { angle: '10°26', rasi: Rasi.Simha } }
    },
    Ashlesha: {
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
        zodiac: { from: { angle: '16°40', rasi: Rasi.Karka }, to: { angle: '30°', rasi: Rasi.Karka } },
        westernZodiac: { from: { angle: '10°26', rasi: Rasi.Simha }, to: { angle: '23°46', rasi: Rasi.Simha } }
    },
    Magha: {
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
        zodiac: { from: { angle: '0°', rasi: Rasi.Simha }, to: { angle: '13°20', rasi: Rasi.Simha } },
        westernZodiac: { from: { angle: '23°46', rasi: Rasi.Simha }, to: { angle: '7°06', rasi: Rasi.Kanya } }
    },
    PurvaPhalguni: {
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
        zodiac: { from: { angle: '13°20', rasi: Rasi.Simha }, to: { angle: '26°40', rasi: Rasi.Simha } },
        westernZodiac: { from: { angle: '7°06', rasi: Rasi.Kanya }, to: { angle: '20°26', rasi: Rasi.Kanya } }
    },
    UttaraPhalguni: {
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
        zodiac: { from: { angle: '26°40', rasi: Rasi.Simha }, to: { angle: '10°', rasi: Rasi.Kanya } },
        westernZodiac: { from: { angle: '20°26', rasi: Rasi.Kanya }, to: { angle: '3°46', rasi: Rasi.Tula } }
    },
    Hasta: {
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
        zodiac: { from: { angle: '10°', rasi: Rasi.Kanya }, to: { angle: '23°20', rasi: Rasi.Kanya } },
        westernZodiac: { from: { angle: '3°46', rasi: Rasi.Tula }, to: { angle: '17°06', rasi: Rasi.Tula } }
    },
    Chitra: {
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
        zodiac: { from: { angle: '23°20', rasi: Rasi.Kanya }, to: { angle: '6°40', rasi: Rasi.Tula } },
        westernZodiac: { from: { angle: '17°06', rasi: Rasi.Tula }, to: { angle: '0°26', rasi: Rasi.Vrscika } }
    },
    Svati: {
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
        zodiac: { from: { angle: '6°40', rasi: Rasi.Tula }, to: { angle: '20°', rasi: Rasi.Tula } },
        westernZodiac: { from: { angle: '0°26', rasi: Rasi.Vrscika }, to: { angle: '13°46', rasi: Rasi.Vrscika } }
    },
    Vishakha: {
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
        zodiac: { from: { angle: '20°', rasi: Rasi.Tula }, to: { angle: '3°20', rasi: Rasi.Vrscika } },
        westernZodiac: { from: { angle: '13°46', rasi: Rasi.Vrscika }, to: { angle: '27°06', rasi: Rasi.Vrscika } }
    },
    Anuradha: {
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
        zodiac: { from: { angle: '3°20', rasi: Rasi.Vrscika }, to: { angle: '16°40', rasi: Rasi.Vrscika } },
        westernZodiac: { from: { angle: '27°06', rasi: Rasi.Vrscika }, to: { angle: '10°26', rasi: Rasi.Dhanusa } }
    },
    Jyeshtha: {
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
        zodiac: { from: { angle: '16°40', rasi: Rasi.Vrscika }, to: { angle: '30°', rasi: Rasi.Vrscika } },
        westernZodiac: { from: { angle: '10°26', rasi: Rasi.Dhanusa }, to: { angle: '23°46', rasi: Rasi.Dhanusa } }
    },
    Mula: {
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
        zodiac: { from: { angle: '0°', rasi: Rasi.Dhanusa }, to: { angle: '13°20', rasi: Rasi.Dhanusa } },
        westernZodiac: { from: { angle: '23°46', rasi: Rasi.Dhanusa }, to: { angle: '7°06', rasi: Rasi.Makara } }
    },
    PurvaAshadha: {
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
        zodiac: { from: { angle: '13°20', rasi: Rasi.Dhanusa }, to: { angle: '26°40', rasi: Rasi.Dhanusa } },
        westernZodiac: { from: { angle: '7°06', rasi: Rasi.Makara }, to: { angle: '20°26', rasi: Rasi.Makara } }
    },
    UttaraAshadha: {
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
        zodiac: { from: { angle: '26°40', rasi: Rasi.Dhanusa }, to: { angle: '10°', rasi: Rasi.Makara } },
        westernZodiac: { from: { angle: '20°26', rasi: Rasi.Makara }, to: { angle: '3°46', rasi: Rasi.Kumbha } }
    },
    Shravana: {
        name: {
            श्sanskrit: ['रवण'],
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
        zodiac: { from: { angle: '10°', rasi: Rasi.Makara }, to: { angle: '23°20', rasi: Rasi.Makara } },
        westernZodiac: { from: { angle: '3°46', rasi: Rasi.Kumbha }, to: { angle: '17°06', rasi: Rasi.Kumbha } }
    },
    Dhanishta: {
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
        zodiac: { from: { angle: '23°20', rasi: Rasi.Makara }, to: { angle: '6°40', rasi: Rasi.Kumbha } },
        westernZodiac: { from: { angle: '17°06', rasi: Rasi.Kumbha }, to: { angle: '0°26', rasi: Rasi.Meena } }
    },
    Shatabhisha: {
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
        zodiac: { from: { angle: '6°40', rasi: Rasi.Kumbha }, to: { angle: '20°', rasi: Rasi.Kumbha } },
        westernZodiac: { from: { angle: '0°26', rasi: Rasi.Meena }, to: { angle: '13°46', rasi: Rasi.Meena } }
    },
    PurvaBhadrapada: {
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
        zodiac: { from: { angle: '20°', rasi: Rasi.Kumbha }, to: { angle: '3°20', rasi: Rasi.Meena } },
        westernZodiac: { from: { angle: '13°46', rasi: Rasi.Meena }, to: { angle: '27°06', rasi: Rasi.Meena } }
    },
    UttaraBhadrapada: {
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
        zodiac: { from: { angle: '3°20', rasi: Rasi.Meena }, to: { angle: '16°40', rasi: Rasi.Meena } },
        westernZodiac: { from: { angle: '27°06', rasi: Rasi.Meena }, to: { angle: '10°26', rasi: Rasi.Mesha } }
    },
    Revati: {
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
        zodiac: { from: { angle: '16°40', rasi: Rasi.Meena }, to: { angle: '30°', rasi: Rasi.Meena } },
        westernZodiac: { from: { angle: '10°26', rasi: Rasi.Mesha }, to: { angle: '23°46', rasi: Rasi.Mesha } }
    }
}

//#endregion

//#region functions

export const getBhogansha = (graha: Graha) => {
    switch (graha) {
        case Graha.chandra:
            return 0;
        case Graha.surya:
            return 0;
        default:
            return 0;
    }
}

// ghati, vikathi
// 27 with 800' each total 360deg 1/60deg of each
export const getYoga = () => ((getBhogansha(Graha.chandra) - getBhogansha(Graha.surya)) / 12);

export const getKarana = () => ((getBhogansha(Graha.chandra) - getBhogansha(Graha.surya)) / 12);

export const getNakshatra = () => ((getBhogansha(Graha.chandra) - getBhogansha(Graha.surya)) / 12);

export const getTithi = () => ((getBhogansha(Graha.chandra) - getBhogansha(Graha.surya)) / 12);

export const getDivasa = () => ((getBhogansha(Graha.chandra) - getBhogansha(Graha.surya)) / 12);

export const getSamvatsara = () => ((getBhogansha(Graha.chandra) - getBhogansha(Graha.surya)) / 12);

export const getYuga = () => ((getBhogansha(Graha.chandra) - getBhogansha(Graha.surya)) / 12);

//#endregion
