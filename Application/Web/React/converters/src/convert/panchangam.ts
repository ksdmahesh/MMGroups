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
    mina = 'mina'
}

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
    durga = 'durga'
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

export const Rtu = {
    Vasanta: {
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
    Grishma: {
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
    Varsha: {
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
    Sarad: {
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
    Hemanta: {
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
    Sisira: {
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
        lord: Graha.surya
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
        lord: Graha.chandra
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
        lord: Graha.mangala
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
        lord: Graha.budha
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
        lord: Graha.guru
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
        lord: Graha.shukra
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
        lord: Graha.shani
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
        suryaMaasa: Rasi.mina,
        Rtu: Rtu.Vasanta
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
        suryaMaasa: Rasi.mesha,
        Rtu: Rtu.Vasanta
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
        suryaMaasa: Rasi.vrshabha,
        Rtu: Rtu.Grishma
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
        suryaMaasa: Rasi.mithuna,
        Rtu: Rtu.Grishma
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
        suryaMaasa: Rasi.karka,
        Rtu: Rtu.Varsha
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
        suryaMaasa: Rasi.simha,
        Rtu: Rtu.Varsha
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
        suryaMaasa: Rasi.kanya,
        Rtu: Rtu.Sarad
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
        suryaMaasa: Rasi.tula,
        Rtu: Rtu.Sarad
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
        suryaMaasa: Rasi.vrscika,
        Rtu: Rtu.Hemanta
    },
    Pausha: {
        name: {
            sanskrit: ['पौष'],
            odia: ['ପୌଷ'],
            malayalam: ['ധനു'],
            tamil: ['தை	'],
            sinhala: ['දුරුතු'],
            dhivehi: [''],
            telugu: ['పుష్యము'],
            kannada: ['ಪುಷ್ಯ'],
            bengali: ['পৌষ'],
            mongolian: [''],
            chinese: [''],
            tibetan: ['རྒྱལ་ཟླ་བ']
        },
        suryaMaasa: Rasi.dhanusa,
        Rtu: Rtu.Hemanta
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
        suryaMaasa: Rasi.makara,
        Rtu: Rtu.Sisira
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
        suryaMaasa: Rasi.kumbha,
        Rtu: Rtu.Sisira
    }
}

export const Paksha = {
    Krshna: {
        name: {
            sanskrit: ['कृष्ण'],
            odia: [''],
            malayalam: [''],
            tamil: ['தேய்பிறை'],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['కృష్ణ పక్షం'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        }
    },
    Shukla: {
        name: {
            sanskrit: ['शुक्ल'],
            odia: [''],
            malayalam: [''],
            tamil: ['வளர்பிறை'],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['శుక్లపక్షం'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        }
    }
}

export const Samvatsara = {
    Plava: {
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

export const Yoga = {
    Amrta: {
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

export const Karana = {
    Bava: {
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

export const Tithi = {
    Prathama: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['పాడ్యమి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.agni
    },
    Dvitiya: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['విదియ'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.brahma
    },
    Trtiya: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['తదియ'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.gauri
    },
    Chaturti: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['చవితి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.vinayaka
    },
    Panchami: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['పంచమి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.sarpas
    },
    Shasti: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['షష్ఠి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.kumaraswaymi
    },
    Saptami: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['సప్తమి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.surya
    },
    Ashtami: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['అష్టమి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.shiva
    },
    Navami: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['నవమి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.durga
    },
    Dasami: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['దశమి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.yama
    },
    Ekadasi: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['ఏకాదశి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.shiva
    },
    Dvadasi: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['ద్వాదశి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.vishnu
    },
    Trayodasi: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['త్రయోదశి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.manmadha
    },
    Chaturdasi: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['చతుర్దశి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.shiva
    },
    Paurnami: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['పున్నమి', 'పూర్ణిమ', 'పౌర్ణమి'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.soma
    },
    Amavasya: {
        name: {
            sanskrit: [''],
            odia: [''],
            malayalam: [''],
            tamil: [''],
            sinhala: [''],
            dhivehi: [''],
            telugu: ['అమావాస్య'],
            kannada: [''],
            bengali: [''],
            mongolian: [''],
            chinese: [''],
            tibetan: ['']
        },
        diety: Diety.soma
    }
}

export const Aayana = {
    Uthara: {
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
        lord: Graha.ketu,
        deity: [Diety.ashvins],
        symbol: Symbols.ashvini,
        zodiac: { from: { angle: '0°', rasi: Rasi.mesha }, to: { angle: '13°20', rasi: Rasi.mesha } },
        westernZodiac: { from: { angle: '23°46', rasi: Rasi.mesha }, to: { angle: '7°06', rasi: Rasi.vrshabha } }
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
        lord: Graha.shukra,
        deity: [Diety.yama],
        symbol: Symbols.bharani,
        zodiac: { from: { angle: '13°20', rasi: Rasi.mesha }, to: { angle: '26°40', rasi: Rasi.mesha } },
        westernZodiac: { from: { angle: '7°06', rasi: Rasi.vrshabha }, to: { angle: '20°26', rasi: Rasi.vrshabha } }
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
        lord: Graha.surya,
        deity: [Diety.agni],
        symbol: Symbols.krttika,
        zodiac: { from: { angle: '26°40', rasi: Rasi.mesha }, to: { angle: '10°', rasi: Rasi.vrshabha } },
        westernZodiac: { from: { angle: '20°26', rasi: Rasi.vrshabha }, to: { angle: '3°46', rasi: Rasi.mithuna } }
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
        lord: Graha.chandra,
        symbol: Symbols.rohini,
        deity: [Diety.brahma],
        zodiac: { from: { angle: '10°', rasi: Rasi.vrshabha }, to: { angle: '23°20', rasi: Rasi.vrshabha } },
        westernZodiac: { from: { angle: '3°46', rasi: Rasi.mithuna }, to: { angle: '17°06', rasi: Rasi.mithuna } }
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
        lord: Graha.mangala,
        symbol: Symbols.mrgashirsha,
        deity: [Diety.soma],
        zodiac: { from: { angle: '23°20', rasi: Rasi.vrshabha }, to: { angle: '6°40', rasi: Rasi.mithuna } },
        westernZodiac: { from: { angle: '17°06', rasi: Rasi.mithuna }, to: { angle: '0°26', rasi: Rasi.karka } }
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
        lord: Graha.rahu,
        symbol: Symbols.ardra,
        deity: [Diety.rudra],
        zodiac: { from: { angle: '6°40', rasi: Rasi.mithuna }, to: { angle: '20°', rasi: Rasi.mithuna } },
        westernZodiac: { from: { angle: '0°26', rasi: Rasi.karka }, to: { angle: '13°46', rasi: Rasi.karka } }
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
        lord: Graha.guru,
        symbol: Symbols.punarvasu,
        deity: [Diety.aditi],
        zodiac: { from: { angle: '20°', rasi: Rasi.mithuna }, to: { angle: '3°20', rasi: Rasi.karka } },
        westernZodiac: { from: { angle: '13°46', rasi: Rasi.karka }, to: { angle: '27°06', rasi: Rasi.karka } }
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
        lord: Graha.shani,
        deity: [Diety.brhaspati],
        symbol: Symbols.pushya,
        zodiac: { from: { angle: '3°20', rasi: Rasi.karka }, to: { angle: '16°40', rasi: Rasi.karka } },
        westernZodiac: { from: { angle: '27°06', rasi: Rasi.karka }, to: { angle: '10°26', rasi: Rasi.simha } }
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
        lord: Graha.budha,
        deity: [Diety.sarpas],
        symbol: Symbols.ashlesha,
        zodiac: { from: { angle: '16°40', rasi: Rasi.karka }, to: { angle: '30°', rasi: Rasi.karka } },
        westernZodiac: { from: { angle: '10°26', rasi: Rasi.simha }, to: { angle: '23°46', rasi: Rasi.simha } }
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
        lord: Graha.ketu,
        deity: [Diety.pitrs],
        symbol: Symbols.magha,
        zodiac: { from: { angle: '0°', rasi: Rasi.simha }, to: { angle: '13°20', rasi: Rasi.simha } },
        westernZodiac: { from: { angle: '23°46', rasi: Rasi.simha }, to: { angle: '7°06', rasi: Rasi.kanya } }
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
        lord: Graha.shukra,
        deity: [Diety.bhaga],
        symbol: Symbols.purvaPhalguni,
        zodiac: { from: { angle: '13°20', rasi: Rasi.simha }, to: { angle: '26°40', rasi: Rasi.simha } },
        westernZodiac: { from: { angle: '7°06', rasi: Rasi.kanya }, to: { angle: '20°26', rasi: Rasi.kanya } }
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
        lord: Graha.surya,
        deity: [Diety.aryaman],
        symbol: Symbols.uttaraPhalguni,
        zodiac: { from: { angle: '26°40', rasi: Rasi.simha }, to: { angle: '10°', rasi: Rasi.kanya } },
        westernZodiac: { from: { angle: '20°26', rasi: Rasi.kanya }, to: { angle: '3°46', rasi: Rasi.tula } }
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
        lord: Graha.chandra,
        deity: [Diety.surya],
        symbol: Symbols.hasta,
        zodiac: { from: { angle: '10°', rasi: Rasi.kanya }, to: { angle: '23°20', rasi: Rasi.kanya } },
        westernZodiac: { from: { angle: '3°46', rasi: Rasi.tula }, to: { angle: '17°06', rasi: Rasi.tula } }
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
        lord: Graha.mangala,
        deity: [Diety.tvastar, Diety.vishvakarman],
        symbol: Symbols.chitra,
        zodiac: { from: { angle: '23°20', rasi: Rasi.kanya }, to: { angle: '6°40', rasi: Rasi.tula } },
        westernZodiac: { from: { angle: '17°06', rasi: Rasi.tula }, to: { angle: '0°26', rasi: Rasi.vrscika } }
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
        lord: Graha.rahu,
        deity: [Diety.vayu],
        symbol: Symbols.svati,
        zodiac: { from: { angle: '6°40', rasi: Rasi.tula }, to: { angle: '20°', rasi: Rasi.tula } },
        westernZodiac: { from: { angle: '0°26', rasi: Rasi.vrscika }, to: { angle: '13°46', rasi: Rasi.vrscika } }
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
        lord: Graha.guru,
        deity: [Diety.indra, Diety.agni],
        symbol: Symbols.vishakha,
        zodiac: { from: { angle: '20°', rasi: Rasi.tula }, to: { angle: '3°20', rasi: Rasi.vrscika } },
        westernZodiac: { from: { angle: '13°46', rasi: Rasi.vrscika }, to: { angle: '27°06', rasi: Rasi.vrscika } }
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
        lord: Graha.shani,
        deity: [Diety.mitra],
        symbol: Symbols.anuradha,
        zodiac: { from: { angle: '3°20', rasi: Rasi.vrscika }, to: { angle: '16°40', rasi: Rasi.vrscika } },
        westernZodiac: { from: { angle: '27°06', rasi: Rasi.vrscika }, to: { angle: '10°26', rasi: Rasi.dhanusa } }
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
        lord: Graha.budha,
        deity: [Diety.indra],
        symbol: Symbols.jyeshtha,
        zodiac: { from: { angle: '16°40', rasi: Rasi.vrscika }, to: { angle: '30°', rasi: Rasi.vrscika } },
        westernZodiac: { from: { angle: '10°26', rasi: Rasi.dhanusa }, to: { angle: '23°46', rasi: Rasi.dhanusa } }
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
        lord: Graha.ketu,
        deity: [Diety.nirrti],
        symbol: Symbols.mula,
        zodiac: { from: { angle: '0°', rasi: Rasi.dhanusa }, to: { angle: '13°20', rasi: Rasi.dhanusa } },
        westernZodiac: { from: { angle: '23°46', rasi: Rasi.dhanusa }, to: { angle: '7°06', rasi: Rasi.makara } }
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
        lord: Graha.shukra,
        deity: [Diety.apah],
        symbol: Symbols.purvaAshadha,
        zodiac: { from: { angle: '13°20', rasi: Rasi.dhanusa }, to: { angle: '26°40', rasi: Rasi.dhanusa } },
        westernZodiac: { from: { angle: '7°06', rasi: Rasi.makara }, to: { angle: '20°26', rasi: Rasi.makara } }
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
        lord: Graha.shukra,
        deity: [Diety.visvedevas],
        symbol: Symbols.uttaraAshadha,
        zodiac: { from: { angle: '26°40', rasi: Rasi.dhanusa }, to: { angle: '10°', rasi: Rasi.makara } },
        westernZodiac: { from: { angle: '20°26', rasi: Rasi.makara }, to: { angle: '3°46', rasi: Rasi.kumbha } }
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
        lord: Graha.chandra,
        deity: [Diety.vishnu],
        symbol: Symbols.shravana,
        zodiac: { from: { angle: '10°', rasi: Rasi.makara }, to: { angle: '23°20', rasi: Rasi.makara } },
        westernZodiac: { from: { angle: '3°46', rasi: Rasi.kumbha }, to: { angle: '17°06', rasi: Rasi.kumbha } }
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
        lord: Graha.mangala,
        deity: [Diety.vasu],
        symbol: Symbols.dhanishta,
        zodiac: { from: { angle: '23°20', rasi: Rasi.makara }, to: { angle: '6°40', rasi: Rasi.kumbha } },
        westernZodiac: { from: { angle: '17°06', rasi: Rasi.kumbha }, to: { angle: '0°26', rasi: Rasi.mina } }
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
        lord: Graha.rahu,
        deity: [Diety.varuna],
        symbol: Symbols.shatabhisha,
        zodiac: { from: { angle: '6°40', rasi: Rasi.kumbha }, to: { angle: '20°', rasi: Rasi.kumbha } },
        westernZodiac: { from: { angle: '0°26', rasi: Rasi.mina }, to: { angle: '13°46', rasi: Rasi.mina } }
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
        lord: Graha.guru,
        deity: [Diety.ajaikapada],
        symbol: Symbols.purvaBhadrapada,
        zodiac: { from: { angle: '20°', rasi: Rasi.kumbha }, to: { angle: '3°20', rasi: Rasi.mina } },
        westernZodiac: { from: { angle: '13°46', rasi: Rasi.mina }, to: { angle: '27°06', rasi: Rasi.mina } }
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
        lord: Graha.shani,
        deity: [Diety.ahirbudhnya],
        symbol: Symbols.uttaraBhadrapada,
        zodiac: { from: { angle: '3°20', rasi: Rasi.mina }, to: { angle: '16°40', rasi: Rasi.mina } },
        westernZodiac: { from: { angle: '27°06', rasi: Rasi.mina }, to: { angle: '10°26', rasi: Rasi.mesha } }
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
        lord: Graha.budha,
        deity: [Diety.pushan],
        symbol: Symbols.revati,
        zodiac: { from: { angle: '16°40', rasi: Rasi.mina }, to: { angle: '30°', rasi: Rasi.mina } },
        westernZodiac: { from: { angle: '10°26', rasi: Rasi.mesha }, to: { angle: '23°46', rasi: Rasi.mesha } }
    }
}

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

export const getTithi = () => ((getBhogansha(Graha.chandra) - getBhogansha(Graha.surya)) / 12);