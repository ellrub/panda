const list = [
    {
        id: 1,
        type: "Forretter",
        title1: '01. Vårrull 2stk',
        category: 'forretter',
        price1: "59kr",
        alergy1: `GL, SO`,
        
        title2: '02. Kyllingsuppe med mais',
        price2: "59kr",
        alergy2: `GL, SE, E`,
        
        title3: '03. Beijingsuppe (HOT)',
        price3: "59kr",
        alergy3: `GL, SO, SE, E SD`,
        
        title4: '04. Sprøstekte kongereker',
        price4: "75kr",
        alergy4: `GL, SD, E`,
        
        title5: '05. Vegetar vårrull 2stk',
        price5: "59kr",
        alergy5: `GL, SO`,
        
        title6: '06. Reke chips',
        price6: "35kr",
        alergy6: `SD`,
    },
    {
        id: 2,
        type: "Biff",
        title9: '09. Biff i rød karri og kokosmelk saus (HOT)',
        category: 'biff',
        price9: "159kr",
        alergy9: `GL, SD, PN`,
        
        title10: '10. Biff chop suey',
        price10: "159kr",
        alergy10: `GL, SE, SO`,
        
        title11: '11. Biff med bambusskudd i oystersaus',
        price11: "159kr",
        alergy11: `GL, SE, SO`,
        
        title12: '12. Biff i svart peppersaus',
        price12: "159kr",
        alergy12: `GL, SE, SO`,
        
        title13: '13. Biff i grønn karri',
        price13: "159kr",
        alergy13: `GL, SE`,
        
        title14: '14. Biff i hvitløk chilisaus (HOT)',
        price14: "159kr",
        alergy14: `GL, SE`,
        
        title15: '15. Pandas biff (EKSTRA HOT)',
        price15: "159kr",
        alergy15: `GL, SE, SO`,
    },
    {
        id: 3,
        type: "Kylling",
        title23: '23. Kevin spesial (HOT)',
        category: 'kylling',
        price23: "189kr",
        alergy23: `GL, SE, SO`,
        
        title24: '24. Kylling i rød karri og kokosmerlksaus (HOT)',
        price24: "159kr",
        alergy24: `GL, SE, SO`,
        
        title25: '25. Sprøstekt kylling i appelsinsaus',
        price25: "159kr",
        alergy25: `GL, E`,
        
        title26: '26. Sprøstekt kylling i sursøtsaus',
        price26: "159kr",
        alergy26: `GL, E`,
        
        title27: '27. Kylling med cashew-nøtter (HOT)',
        price27: "165kr",
        alergy27: `GL, SE, SO, N`,
        
        title28: '28. Kylling i hvitløk chilisaus (HOT)',
        price28: "159kr",
        alergy28: `GL, SE`,
        
        title29: '29. Kylling i grønn karri',
        price29: "159kr",
        alergy29: `GL, SE`,
        
        title30: '30. Kylling i oystersaus',
        price30: "159kr",
        alergy30: `GL, SE, SO`,
        
        title31: '31. Panda kylling (EKSTRA HOT)',
        price31: "159kr",
        alergy31: `GL, SE, SO`,
    },
    {
        id: 4,
        type: "Svinekjøtt",
        title36: '36. Sprøstekt svinekjøtt med sursøtsaus',
        category: 'svinekjøtt',
        price36: "159kr",
        alergy36: `GL, E`,
        
        title37: '37. Sprøstekt svinekjøtt med szechuansaus (HOT)',
        price37: "159kr",
        alergy37: `GL, E, SE, SO`,
        
        title38: '38. Sprøstekt svinekjøtt med grønn karrisaus',
        price38: "159kr",
        alergy38: `GL, SE, E`,
    },
    {
        id: 5,
        type: "Kongereker",
        title45: '45. Kongereker i rød karri & kokosmelksaus (HOT)',
        category: 'kongereker',
        price45: "189kr",
        alergy45: `GL, SD, PN`,
        
        title46: '46. Sprøstekte kongereker med sursøtsaus',
        price46: "189kr",
        alergy46: `GL, E, SD`,
        
        title47: '47. Kongereker med chashew-nøtter (HOT)',
        price47: "195kr",
        alergy47: `GL, SD, SE, SO, N`,
        
        title48: '48. Pandas kongereker (EKSTRA HOT)',
        price48: "189kr",
        alergy48: `GL, SE, SO, SD`,
        
        title49: '49. Kongereker i hvitløk chilisaus (HOT)',
        price49: "189kr",
        alergy49: `GL, SE, SD`,
    },
    {
        id: 6,
        type: "And",
        title66: '66. Sprøstekt and med sursøtsaus',
        category: 'and',
        price66: "199kr",
        alergy66: `GL, E`,
        
        title67: '67. Sprøstekt and med appelsinsaus',
        price67: "199kr",
        alergy67: `GL, E`,
    },
    {
        id: 7,
        type: "Stekt Ris",
        title70: '70. Stekt ris med biff og egg',
        category: 'stekt ris',
        price70: "159kr",
        alergy70: `GL, SE, E, SO`,
        
        title71: '71. Stekt ris med kylling og egg',
        price71: "159kr",
        alergy71: `GL, SE, E, SO`,
    },
    {
        id: 8,
        type: "Stekte Nudler",
        title72: '72. Stekte nudler med kylling i soyasaus',
        category: 'stekte nudler',
        price72: "159kr",
        alergy72: `GL, SE, E, SO`,
        
        title73: '73. Stekte nudler med biff i soyasaus',
        price73: "159kr",
        alergy73: `GL, SE, E, SO`,
        
        title74: '74. Stekte nudler med kongereker i soyasaus',
        price74: "189kr",
        alergy74: `GL, SD, SE, E, SO`,
        
        title75: '75. Tjo & Hei (HOT HOT)',
        price75: "169kr",
        alergy75: `GL, SE, E, SO`,
    },
    {
        id: 9,
        type: "Grillmeny",
        title77: '77. Grillet kylling med salat og pommes frites',
        category: 'grillmeny',
        price77: "159kr",
        alergy77: ``,
    },
    {
        id: 10,
        type: "Barnemeny",
        title78: '78. Pølse med pommes frites',
        category: 'barnemeny',
        price78: "69kr",
        alergy78: ``,
        
        title79: '79. Kylling med pommes frites',
        price79: "69kr",
        alergy79: ``,
        
        title80: '80. Pommes frites',
        price80: "49kr",
        alergy80: ``,
    },
    {
        id: 11,
        type: "Gourmetretter",
        title90: '90. Lammefilet i hvitløk chilisaus (HOT)',
        category: 'gourmetretter',
        price90: "199kr",
        alergy90: `GL, SE`,
        
        title91: '91. Indrefilet med sterk kinesisk chilisaus (HOT)',
        price91: "199kr",
        alergy91: `GL, SE`,
        
        title92: '92. Indrefilet i svart peppersaus',
        price92: "199kr",
        alergy92: `GL, SE, SO`,
        
        title93: '93. Woket and i szechuansaus (HOT)',
        price93: "199kr",
        alergy93: `GL, SE, SO`,
    },
    {
        id: 12,
        type: "Ekstra",
        title100: 'Ris',
        category: 'ekstra',
        price100: "20kr",
        alergy100: ``,
        
        title101: 'Kylling, Biff & Svinekjøtt',
        price101: "45kr",
        alergy101: ``,
        
        title102: 'Kongereker, And & Gourmet kjøtt',
        price102: "65kr",
        alergy102: ``,
    },
];

export default list;