// liturgy.js - Structured BCP 1979 Daily Office Liturgical Texts
// This file contains the liturgy for Morning Prayer (Rites I & II), Noonday Prayer, 
// Evening Prayer (Rites I & II), and Compline.

const LiturgyData = {
  // Opening sentences based on season
  openingSentences: {
  "advent": {
    "rite2": [
      "Watch, for you do not know when the master of the house will come, in the evening, or at midnight, or at cockcrow, or in the morning, lest he come suddenly and find you asleep. Mark 13:35, 36",
      "In the wilderness prepare the way of the Lord, make straight in the desert a highway for our God. Isaiah 40:3",
      "The glory of the Lord shall be revealed, and all flesh shall see it together. Isaiah 40:5"
    ],
    "rite1": [
      "Watch ye, for ye know not when the master of the house cometh, at even, or at midnight, or at the cock-crowing, or in the morning; lest coming suddenly he find you sleeping. Mark 13:35, 36",
      "Prepare ye the way of the Lord, make straight in the desert a highway for our God. Isaiah 40:3",
      "The glory of the Lord shall be revealed, and all flesh shall see it together. Isaiah 40:5"
    ]
  },
  "christmas": {
    "rite2": [
      "Behold, I bring you good news of a great joy which will come to all the people; for to you is born this day in the city of David, a Savior, who is Christ the Lord. Luke 2:10, 11",
      "Behold, the dwelling of God is with mankind. He will dwell with them, and they shall be his people, and God himself will be with them, and be their God. Revelation 21:3"
    ],
    "rite1": [
      "Behold, I bring you good tidings of great joy, which shall be to all people. For unto you is born this day in the city of David a Savior, which is Christ the Lord. Luke 2:10, 11",
      "Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God. Revelation 21:3"
    ]
  },
  "epiphany": {
    "rite2": [
      "Nations shall come to your light, and kings to the brightness of your rising. Isaiah 60:3",
      "I will give you as a light to the nations, that my salvation may reach to the end of the earth. Isaiah 49:6b",
      "From the rising of the sun to its setting my Name shall be great among the nations, and in every place incense shall be offered to my Name, and a pure offering; for my Name shall be great among the nations, says the Lord of hosts. Malachi 1:11"
    ],
    "rite1": [
      "The Gentiles shall come to thy light, and kings to the bright- ness of thy rising. Isaiah 60:3",
      "I will give thee for a light to the Gentiles, that thou mayest be my salvation unto the end of the earth. Isaiah 49:6b",
      "From the rising of the sun even unto the going down of the same my Name shall be great among the Gentiles, and in every place incense shall be offered unto my Name, and a pure offering: for my Name shall be great among the heathen, saith the Lord of hosts. Malachi 1:11"
    ]
  },
  "lent": {
    "rite2": [
      "If we say we have no sin, we deceive ourselves, and the truth is not in us, but if we confess our sins, God, who is faithful and just, will forgive our sins and cleanse us from all unrighteousness. 1 John 1:8, 9",
      "Rend your hearts and not your garments. Return to the Lord your God, for he is gracious and merciful, slow to anger and abounding in steadfast love, and repents of evil. Joel 2:13",
      "I will arise and go to my father, and I will say to him, “Father, I have sinned against heaven and before you; I am no longer worthy to be called your son.” Luke 15:18, 19",
      "To the Lord our God belong mercy and forgiveness, because we have rebelled against him and have not obeyed the voice of the Lord our God by following his laws which he set before us. Daniel 9:9, 10",
      "Jesus said, “If anyone would come after me, let him deny himself and take up his cross and follow me.” Mark 8:34"
    ],
    "rite1": [
      "If we say that we have no sin, we deceive ourselves, and the truth is not in us; but if we confess our sins, God is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness. 1 John 1:8, 9",
      "Rend your heart, and not your garments, and turn unto the Lord your God; for he is gracious and merciful, slow to anger and of great kindness, and repenteth him of the evil. Joel 2:13",
      "I will arise and go to my father, and will say unto him, “Father, I have sinned against heaven, and before thee; and am no more worthy to be called thy son.” Luke 15:18, 19",
      "To the Lord our God belong mercies and forgivenesses, though we have rebelled against him; neither have we obeyed the voice of the Lord our God, to walk in his laws which he set before us. Daniel 9:9, 10",
      "Jesus said, “Whosoever will come after me, let him deny himself, and take up his cross, and follow me.” Mark 8:34"
    ]
  },
  "holyweek": {
    "rite2": [
      "All we like sheep have gone astray; we have turned every one to his own way; and the Lord has laid on him the iniquity of us all. Isaiah 53:6",
      "Is it nothing to you, all you who pass by? Look and see if there is any sorrow like my sorrow which was brought upon me, whom the Lord has afflicted. Lamentations 1:12"
    ],
    "rite1": [
      "All we like sheep have gone astray; we have turned every one to his own way; and the Lord hath laid on him the iniquity of us all. Isaiah 53:6",
      "Is it nothing to you, all ye that pass by? Behold and see if there be any sorrow like unto my sorrow which is done unto me, wherewith the Lord hath afflicted me. Lamentations 1:12"
    ]
  },
  "easter": {
    "rite2": [
      "Alleluia! Christ is risen. The Lord is risen indeed. Alleluia!",
      "Thanks be to God, who gives us the victory through our Lord Jesus Christ. 1 Corinthians 15:57",
      "Christ has entered, not into a sanctuary made with hands, a copy of the true one, but into heaven itself, now to appear in the presence of God on our behalf. Hebrews 9:24",
      "You shall receive power when the Holy Spirit has come upon you; and you shall be my witnesses in Jerusalem, and in all Judea, and Samaria, and to the ends of the earth. Acts 1:8"
    ],
    "rite1": [
      "Alleluia! Christ is risen. The Lord is risen indeed. Alleluia!",
      "This is the day which the Lord hath made; we will rejoice and be glad in it. Psalm 118:24",
      "Thanks be to God, which giveth us the victory through our Lord Jesus Christ. 1 Corinthians 15:57",
      "If ye then be risen with Christ, seek the things which are above, where Christ sitteth on the right hand of God. Colossians 3:1",
      "Christ is not entered into the holy places made with hands, which are the figures of the true; but into heaven itself, now to appear in the presence of God for us. Hebrews 9:24",
      "Ye shall receive power, after that the Holy Ghost is come upon you; and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth. Acts 1:8"
    ]
  },
  "trinity": {
    "rite2": [
      "Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come! Revelation 4:8"
    ],
    "rite1": [
      "Holy, holy, holy, Lord God Almighty, which was, and is, and is to come. Revelation 4:8"
    ]
  },
  "allsaints": {
    "rite2": [
      "We give thanks to the Father, who has made us worthy to share in the inheritance of the saints in light. Colossians 1:12",
      "You are no longer strangers and sojourners, but fellow citizens with the saints and members of the household of God. Ephesians 2:19",
      "Their sound has gone out into all lands, and their message to the ends of the world. Psalm 19:4",
      "Give thanks to the Lord, and call upon his Name; make known his deeds among the peoples. Psalm 105:1"
    ],
    "rite1": [
      "We give thanks unto the Father, which hath made us meet to be partakers of the inheritance of the saints in light. Colossians 1:12",
      "Ye are no more strangers and foreigners, but fellow-citizens with the saints and of the household of God. Ephesians 2:19",
      "Their sound is gone out into all lands; and their words into the ends of the world. Psalm 19:4",
      "O give thanks unto the Lord, and call upon his Name; tell the people what things he hath done. Psalm 105:1"
    ]
  },
  "ordinary": {
    "rite2": [
      "Grace to you and peace from God our Father and the Lord Jesus Christ. Philippians 1:2",
      "I was glad when they said to me, “Let us go to the house of the Lord.” Psalm 122:1",
      "Let the words of my mouth and the meditation of my heart be acceptable in your sight, O Lord, my strength and my redeemer. Psalm 19:14",
      "Send out your light and your truth, that they may lead me, and bring me to your holy hill and to your dwelling. Psalm 43:3",
      "The Lord is in his holy temple; let all the earth keep silence before him. Habakkuk 2:20",
      "The hour is coming, and now is, when the true worshipers will worship the Father in spirit and truth, for such the Father seeks to worship him. John 4:23",
      "Thus says the high and lofty One who inhabits eternity, whose name is Holy, “I dwell in the high and holy place and also with the one who has a contrite and humble spirit, to revive the spirit of the humble and to revive the heart of the contrite.” Isaiah 57:15"
    ],
    "rite1": [
      "Grace be unto you, and peace, from God our Father, and from the Lord Jesus Christ. Philippians 1:2",
      "I was glad when they said unto me, “We will go into the house of the Lord.” Psalm 122:1",
      "Let the words of my mouth, and the meditation of my heart, be alway acceptable in thy sight, O Lord, my strength and my redeemer. Psalm 19:14",
      "O send out thy light and thy truth, that they may lead me, and bring me unto thy holy hill, and to thy dwelling. Psalm 43:3",
      "The Lord is in his holy temple; let all the earth keep silence before him. Habakkuk 2:20",
      "The hour cometh, and now is, when the true worshipers shall worship the Father in spirit and in truth, for the Father seeketh such to worship him. John 4:23"
    ]
  }
},

  canticles: {
  "canticle8": {
    "title": "Canticle 8: The Song of Moses Cantemus Domino",
    "subtitle": "Exodus 15:1-6, 11-13, 17-18 (Especially suitable for use in Easter Season)",
    "text": "I will sing to the Lord, for he is lofty and uplifted; *\nthe horse and its rider has he hurled into the sea.\nThe Lord is my strength and my refuge; *\nthe Lord has become my Savior.\nThis is my God and I will praise him, *\nthe God of my people and I will exalt him.\nThe Lord is a mighty warrior; *\nYahweh is his Name.\nThe chariots of Pharaoh and his army has he hurled into the sea; *\nthe finest of those who bear armor have been drowned in the Red Sea.\nThe fathomless deep has overwhelmed them; *\nthey sank into the depths like a stone.\nYour right hand, O Lord, is glorious in might; *\nyour right hand, O Lord, has overthrown the enemy.\nWho can be compared with you, O Lord, among the gods? *\nwho is like you, glorious in holiness,\nawesome in renown, and worker of wonders?\nYou stretched forth your right hand; *\nthe earth swallowed them up.\nWith your constant love you led the people you redeemed; *\nwith your might you brought them in safety to your holy dwelling.\nYou will bring them in and plant them *\non the mount of your possession,\nThe resting-place you have made for yourself, O Lord, *\nthe sanctuary, O Lord, that your hand has established.\nThe Lord shall reign *\nfor ever and for ever.\nGlory to the Father, and to the Son, and to the Holy Spirit: *\nas it was in the beginning, is now, and will be for ever. Amen."
  },
  "canticle9": {
    "title": "Canticle 9: The First Song of Isaiah Ecce, Deus",
    "subtitle": "Isaiah 12:2-6",
    "text": "Surely, it is God who saves me; *\nI will trust in him and not be afraid.\nFor the Lord is my stronghold and my sure defense, *\nand he will be my Savior.\nTherefore you shall draw water with rejoicing *\nfrom the springs of salvation.\nAnd on that day you shall say, *\nGive thanks to the Lord and call upon his Name;\nMake his deeds known among the peoples; *\nsee that they remember that his Name is exalted.\nSing the praises of the Lord, for he has done great things, *\nand this is known in all the world.\nCry aloud, inhabitants of Zion, ring out your joy, *\nfor the great one in the midst of you is the Holy One of Israel.\nGlory to the Father, and to the Son, and to the Holy Spirit: *\nas it was in the beginning, is now, and will be for ever. Amen."
  },
  "canticle10": {
    "title": "Canticle 10: The Second Song of Isaiah Quaerite Dominum",
    "subtitle": "Isaiah 55:6-11",
    "text": "Seek the Lord while he wills to be found; *\ncall upon him when he draws near.\nLet the wicked forsake their ways *\nand the evil ones their thoughts;\nAnd let them turn to the Lord, and he will have compassion, *\nand to our God, for he will richly pardon.\nFor my thoughts are not your thoughts, *\nnor your ways my ways, says the Lord.\nFor as the heavens are higher than the earth, *\nso are my ways higher than your ways,\nand my thoughts than your thoughts.\n \nFor as rain and snow fall from the heavens *\nand return not again, but water the earth,\nBringing forth life and giving growth, *\nseed for sowing and bread for eating,\nSo is my word that goes forth from my mouth; *\nit will not return to me empty;\nBut it will accomplish that which I have purposed, *\nand prosper in that for which I sent it.\nGlory to the Father, and to the Son, and to the Holy Spirit: *\nas it was in the beginning, is now, and will be for ever. Amen."
  },
  "canticle11": {
    "title": "Canticle 11: The Third Song of Isaiah Surge, illuminare",
    "subtitle": "Isaiah 60:1-3, 11a, 14c, 18-19",
    "text": "Arise, shine, for your light has come, *\nand the glory of the Lord has dawned upon you.\nFor behold, darkness covers the land; *\ndeep gloom enshrouds the peoples.\nBut over you the Lord will rise, *\nand his glory will appear upon you.\nNations will stream to your light, *\nand kings to the brightness of your dawning.\nYour gates will always be open; *\nby day or night they will never be shut.\nThey will call you, The City of the Lord, *\nThe Zion of the Holy One of Israel.\nViolence will no more be heard in your land, *\nruin or destruction within your borders.\nYou will call your walls, Salvation, *\nand all your portals, Praise.\nThe sun will no more be your light by day; *\nby night you will not need the brightness of the moon.\n \nThe Lord will be your everlasting light, *\nand your God will be your glory.\nGlory to the Father, and to the Son, and to the Holy Spirit: *\nas it was in the beginning, is now, and will be for ever. Amen."
  },
  "canticle12": {
    "title": "Canticle 12: A Song of Creation Benedicite, omnia opera Domini",
    "subtitle": "Song of the Three Young Men, 35-65",
    "text": "One or more sections of this Canticle may be used. Whatever the selection, it begins with the Invocation and concludes with the Doxology.\nInvocation\nGlorify the Lord, all you works of the Lord, *\npraise him and highly exalt him for ever.\nIn the firmament of his power, glorify the Lord, *\npraise him and highly exalt him for ever.\nI The Cosmic Order\nGlorify the Lord, you angels and all powers of the Lord, *\nO heavens and all waters above the heavens.\nSun and moon and stars of the sky, glorify the Lord, *\npraise him and highly exalt him for ever.\nGlorify the Lord, every shower of rain and fall of dew, *\nall winds and fire and heat.\nWinter and summer, glorify the Lord, *\npraise him and highly exalt him for ever.\nGlorify the Lord, O chill and cold, *\ndrops of dew and flakes of snow.\nFrost and cold, ice and sleet, glorify the Lord, *\npraise him and highly exalt him for ever.\n \nGlorify the Lord, O nights and days, *\nO shining light and enfolding dark.\nStorm clouds and thunderbolts, glorify the Lord, *\npraise him and highly exalt him for ever.\nII The Earth and its Creatures\nLet the earth glorify the Lord, *\npraise him and highly exalt him for ever.\nGlorify the Lord, O mountains and hills,\nand all that grows upon the earth, *\npraise him and highly exalt him for ever.\nGlorify the Lord, O springs of water, seas, and streams, *\nO whales and all that move in the waters.\nAll birds of the air, glorify the Lord, *\npraise him and highly exalt him for ever.\nGlorify the Lord, O beasts of the wild, *\nand all you flocks and herds.\nO men and women everywhere, glorify the Lord, *\npraise him and highly exalt him for ever.\nIII The People of God\nLet the people of God glorify the Lord, *\npraise him and highly exalt him for ever.\nGlorify the Lord, O priests and servants of the Lord, *\npraise him and highly exalt him for ever.\nGlorify the Lord, O spirits and souls of the righteous, *\npraise him and highly exalt him for ever.\nYou that are holy and humble of heart, glorify the Lord, *\npraise him and highly exalt him for ever.\n \nDoxology\nLet us glorify the Lord: Father, Son, and Holy Spirit; *\npraise him and highly exalt him for ever.\nIn the firmament of his power, glorify the Lord, *\npraise him and highly exalt him for ever."
  },
  "canticle13": {
    "title": "Canticle 13: A Song of Praise Benedictus es, Domine",
    "subtitle": "Song of the Three Young Men, 29-34",
    "text": "Glory to you, Lord God of our fathers; *\nyou are worthy of praise; glory to you.\nGlory to you for the radiance of your holy Name; *\nwe will praise you and highly exalt you for ever.\nGlory to you in the splendor of your temple; *\non the throne of your majesty, glory to you.\nGlory to you, seated between the Cherubim; *\nwe will praise you and highly exalt you for ever.\nGlory to you, beholding the depths; *\nin the high vault of heaven, glory to you.\nGlory to you, Father, Son, and Holy Spirit; *\nwe will praise you and highly exalt you for ever."
  },
  "canticle14": {
    "title": "Canticle 14: A Song of Penitence Kyrie Pantokrator",
    "subtitle": "Prayer of Manasseh, 1-2, 4, 6-7, 11-15 (Especially suitable in Lent, and on other penitential occasions)",
    "text": "O Lord and Ruler of the hosts of heaven, *\nGod of Abraham, Isaac, and Jacob,\nand of all their righteous offspring:\nYou made the heavens and the earth, *\nwith all their vast array.\n \nAll things quake with fear at your presence; *\nthey tremble because of your power.\nBut your merciful promise is beyond all measure; *\nit surpasses all that our minds can fathom.\nO Lord, you are full of compassion, *\nlong-suffering, and abounding in mercy.\nYou hold back your hand; *\nyou do not punish as we deserve.\nIn your great goodness, Lord,\nyou have promised forgiveness to sinners, *\nthat they may repent of their sin and be saved.\nAnd now, O Lord, I bend the knee of my heart, *\nand make my appeal, sure of your gracious goodness.\nI have sinned, O Lord, I have sinned, *\nand I know my wickedness only too well.\nTherefore I make this prayer to you: *\nForgive me, Lord, forgive me.\nDo not let me perish in my sin, *\nnor condemn me to the depths of the earth.\nFor you, O Lord, are the God of those who repent, *\nand in me you will show forth your goodness.\nUnworthy as I am, you will save me,\nin accordance with your great mercy, *\nand I will praise you without ceasing all the days of my life.\nFor all the powers of heaven sing your praises, *\nand yours is the glory to ages of ages. Amen."
  },
  "canticle15": {
    "title": "Canticle 15: The Song of Mary Magnificat",
    "subtitle": "Luke 1:46-55",
    "text": "My soul proclaims the greatness of the Lord,\nmy spirit rejoices in God my Savior; *\nfor he has looked with favor on his lowly servant.\n \nFrom this day all generations will call me blessed: *\nthe Almighty has done great things for me,\nand holy is his Name.\nHe has mercy on those who fear him *\nin every generation.\nHe has shown the strength of his arm, *\nhe has scattered the proud in their conceit.\nHe has cast down the mighty from their thrones, *\nand has lifted up the lowly.\nHe has filled the hungry with good things, *\nand the rich he has sent away empty.\nHe has come to the help of his servant Israel, *\nfor he has remembered his promise of mercy,\nThe promise he made to our fathers, *\nto Abraham and his children for ever.\nGlory to the Father, and to the Son, and to the Holy Spirit: *\nas it was in the beginning, is now, and will be for ever. Amen."
  },
  "canticle16": {
    "title": "Canticle 16: The Song of Zechariah Benedictus Dominus Deus",
    "subtitle": "Luke 1: 68-79",
    "text": "Blessed be the Lord, the God of Israel; *\nhe has come to his people and set them free.\nHe has raised up for us a mighty savior, *\nborn of the house of his servant David.\nThrough his holy prophets he promised of old,\nthat he would save us from our enemies, *\nfrom the hands of all who hate us.\nHe promised to show mercy to our fathers *\nand to remember his holy covenant.\nThis was the oath he swore to our father Abraham, *\nto set us free from the hands of our enemies,\nFree to worship him without fear, *\nholy and righteous in his sight\nall the days of our life.\n \nYou, my child, shall be called the prophet of the Most High, *\nfor you will go before the Lord to prepare his way,\nTo give people knowledge of salvation *\nby the forgiveness of their sins.\nIn the tender compassion of our God *\nthe dawn from on high shall break upon us,\nTo shine on those who dwell in darkness and the shadow of death, *\nand to guide our feet into the way of peace.\nGlory to the Father, and to the Son, and to the Holy Spirit: *\nas it was in the beginning, is now, and will be for ever. Amen."
  },
  "canticle17": {
    "title": "Canticle 17: The Song of Simeon Nunc dimittis",
    "subtitle": "Luke 2:29-32",
    "text": "Lord, you now have set your servant free *\nto go in peace as you have promised;\nFor these eyes of mine have seen the Savior, *\nwhom you have prepared for all the world to see:\nA Light to enlighten the nations, *\nand the glory of your people Israel.\nGlory to the Father, and to the Son, and to the Holy Spirit: *\nas it was in the beginning, is now, and will be for ever. Amen."
  },
  "canticle18": {
    "title": "Canticle 18: 18 A Song to the Lamb Dignus es",
    "subtitle": "Revelation 4:11; 5:9-10, 13",
    "text": "Splendor and honor and kingly power *\nare yours by right, O Lord our God,\nFor you created everything that is, *\nand by your will they were created and have their being;\n \nAnd yours by right, O Lamb that was slain, *\nfor with your blood you have redeemed for God,\nFrom every family, language, people, and nation, *\na kingdom of priests to serve our God.\nAnd so, to him who sits upon the throne, *\nand to Christ the Lamb,\nBe worship and praise, dominion and splendor, *\nfor ever and for evermore."
  },
  "canticle19": {
    "title": "Canticle 19: The Song of the Redeemed Magna et mirabilia",
    "subtitle": "Revelation 15:3-4",
    "text": "O ruler of the universe, Lord God,\ngreat deeds are they that you have done, *\nsurpassing human understanding.\nYour ways are ways of righteousness and truth, *\nO King of all the ages.\nWho can fail to do you homage, Lord,\nand sing the praises of your Name? *\nfor you only are the Holy One.\nAll nations will draw near and fall down before you, *\nbecause your just and holy works have been revealed.\nGlory to the Father, and to the Son, and to the Holy Spirit: *\nas it was in the beginning, is now, and will be for ever. Amen."
  },
  "canticle20": {
    "title": "Canticle 20: Glory to God Gloria in excelsis",
    "subtitle": "Glory to God in the highest,",
    "text": "and peace to his people on earth.\nLord God, heavenly King,\nalmighty God and Father,\n we worship you, we give you thanks,\nwe praise you for your glory.\nLord Jesus Christ, only Son of the Father,\nLord God, Lamb of God,\nyou take away the sin of the world;\nhave mercy on us;\nyou are seated at the right hand of the Father;\nreceive our prayer.\nFor you alone are the Holy One,\nyou alone are the Lord,\nyou alone are the Most High,\nJesus Christ,\nwith the Holy Spirit,\nin the glory of God the Father. Amen."
  },
  "canticle21": {
    "title": "Canticle 21: 21 You are God Te Deum laudamus",
    "subtitle": "You are God: we praise you;",
    "text": "You are the Lord: we acclaim you;\nYou are the eternal Father:\nAll creation worships you.\nTo you all angels, all the powers of heaven,\nCherubim and Seraphim, sing in endless praise:\nHoly, holy, holy Lord, God of power and might,\nheaven and earth are full of your glory.\nThe glorious company of apostles praise you.\nThe noble fellowship of prophets praise you.\nThe white-robed army of martyrs praise you.\nThroughout the world the holy Church acclaims you;\nFather, of majesty unbounded,\nyour true and only Son, worthy of all worship,\nand the Holy Spirit, advocate and guide.\n \nYou, Christ, are the king of glory,\nthe eternal Son of the Father.\nWhen you became man to set us free\nyou did not shun the Virgin’s womb.\nYou overcame the sting of death\nand opened the kingdom of heaven to all believers.\nYou are seated at God’s right hand in glory.\nWe believe that you will come and be our judge.\nCome then, Lord, and help your people,\nbought with the price of your own blood,\nand bring us with your saints\nto glory everlasting."
  },
  "canticle1": {
    "title": "Canticle 1 (Rite I)  A Song of Creation Benedicite, omnia opera Domini",
    "subtitle": "Song of the Three Young Men, 35-65 (This Canticle may be shortened by omitting sections II or III)",
    "text": "I Invocation\nO all ye works of the Lord, bless ye the Lord; *\npraise him and magnify him for ever.\nO ye angels of the Lord, bless ye the Lord; *\npraise him and magnify him for ever.\nII The Cosmic Order\nO ye heavens, bless ye the Lord; *\nO ye waters that be above the firmament, bless ye the Lord;\nO all ye powers of the Lord, bless ye the Lord; *\npraise him and magnify him for ever.\n \nO ye sun and moon, bless ye the Lord; *\nO ye stars of heaven, bless ye the Lord;\nO ye showers and dew, bless ye the Lord; *\npraise him and magnify him for ever.\nO ye winds of God, bless ye the Lord; *\nO ye fire and heat, bless ye the Lord;\nO ye winter and summer, bless ye the Lord; *\npraise him and magnify him for ever.\nO ye dews and frosts, bless ye the Lord; *\nO ye frost and cold, bless ye the Lord;\nO ye ice and snow, bless ye the Lord; *\npraise him and magnify him for ever.\nO ye nights and days, bless ye the Lord; *\nO ye light and darkness, bless ye the Lord;\nO ye lightnings and clouds, bless ye the Lord; *\npraise him and magnify him for ever.\nIII The Earth and its Creatures\nO let the earth bless the Lord; *\nO ye mountains and hills, bless ye the Lord;\nO all ye green things upon the earth, bless ye the Lord; *\npraise him and magnify him for ever.\nO ye wells, bless ye the Lord; *\nO ye seas and floods, bless ye the Lord;\nO ye whales and all that move in the waters, bless ye the Lord; *\npraise him and magnify him for ever.\nO all ye fowls of the air, bless ye the Lord; *\nO all ye beasts and cattle, bless ye the Lord;\nO ye children of men, bless ye the Lord; *\npraise him and magnify him for ever.\n IV The People of God\nO ye people of God, bless ye the Lord; *\nO ye priests of the Lord, bless ye the Lord;\nO ye servants of the Lord, bless ye the Lord; *\npraise him and magnify him for ever.\nO ye spirits and souls of the righteous, bless ye the Lord; *\nO ye holy and humble men of heart, bless ye the Lord.\nLet us bless the Father, the Son, and the Holy Spirit; *\npraise him and magnify him for ever."
  },
  "canticle2": {
    "title": "Canticle 2 (Rite I)  A Song of Praise Benedictus es, Domine",
    "subtitle": "Song of the Three Young Men, 29-34",
    "text": "Blessed art thou, O Lord God of our fathers; *\npraised and exalted above all for ever.\nBlessed art thou for the Name of thy Majesty; *\npraised and exalted above all for ever.\nBlessed art thou in the temple of thy holiness; *\npraised and exalted above all for ever.\nBlessed art thou that beholdest the depths, and dwellest between the Cherubim; *\npraised and exalted above all for ever.\nBlessed art thou on the glorious throne of thy kingdom; *\npraised and exalted above all for ever.\nBlessed art thou in the firmament of heaven; *\npraised and exalted above all for ever.\nBlessed art thou, O Father, Son, and Holy Spirit; *\npraised and exalted above all for ever."
  },
  "canticle3": {
    "title": "Canticle 3 (Rite I)  The Song of Mary Magnificat",
    "subtitle": "Luke 1:46-55",
    "text": "My soul doth magnify the Lord, *\nand my spirit hath rejoiced in God my Savior.\nFor he hath regarded *\nthe lowliness of his handmaiden.\nFor behold from henceforth *\nall generations shall call me blessed.\nFor he that is mighty hath magnified me, *\nand holy is his Name.\nAnd his mercy is on them that fear him *\nthroughout all generations.\nHe hath showed strength with his arm; *\nhe hath scattered the proud in the imagination of their hearts.\nHe hath put down the mighty from their seat, *\nand hath exalted the humble and meek.\nHe hath filled the hungry with good things, *\nand the rich he hath sent empty away.\nHe remembering his mercy hath holpen his servant Israel, *\nas he promised to our forefathers,\nAbraham and his seed for ever.\nGlory to the Father, and to the Son, and to the Holy Spirit: *\nas it was in the beginning, is now, and will be for ever. Amen."
  },
  "canticle4": {
    "title": "Canticle 4 (Rite I)  The Song of Zechariah Benedictus Dominus Deus",
    "subtitle": "Luke 1:68-79",
    "text": "Blessed be the Lord God of Israel, *\nfor he hath visited and redeemed his people;\nAnd hath raised up a mighty salvation for us *\nin the house of his servant David,\nAs he spake by the mouth of his holy prophets, *\nwhich have been since the world began:\n \nThat we should be saved from our enemies, *\nand from the hand of all that hate us;\nTo perform the mercy promised to our forefathers, *\nand to remember his holy covenant;\nTo perform the oath which he sware to our forefather Abraham,*\nthat he would give us,\nThat we being delivered out of the hand of our enemies *\nmight serve him without fear,\nIn holiness and righteousness before him, *\nall the days of our life.\nAnd thou, child, shalt be called the prophet of the Highest, *\nfor thou shalt go before the face of the Lord\nto prepare his ways;\nTo give knowledge of salvation unto his people *\nfor the remission of their sins,\nThrough the tender mercy of our God, *\nwhereby the dayspring from on high hath visited us;\nTo give light to them that sit in darkness\nand in the shadow of death, *\nand to guide our feet into the way of peace.\nGlory to the Father, and to the Son, and to the Holy Spirit: *\nas it was in the beginning, is now, and will be for ever. Amen."
  },
  "canticle5": {
    "title": "Canticle 5 (Rite I)  The Song of Simeon Nunc dimittis",
    "subtitle": "Luke 2:29-32",
    "text": "Lord, now lettest thou thy servant depart in peace, *\naccording to thy word;\nFor mine eyes have seen thy salvation, *\nwhich thou hast prepared before the face of all people,\nTo be a light to lighten the Gentiles, *\nand to be the glory of thy people Israel.\n \nGlory to the Father, and to the Son, and to the Holy Spirit: *\nas it was in the beginning, is now, and will be for ever. Amen."
  },
  "canticle6": {
    "title": "Canticle 6 (Rite I)  Glory be to God Gloria in excelsis",
    "subtitle": "Glory be to God on high,",
    "text": "and on earth peace, good will towards men.\nWe praise thee, we bless thee,\nwe worship thee,\nwe glorify thee,\nwe give thanks to thee for thy great glory,\nO Lord God, heavenly King, God the Father Almighty.\nO Lord, the only-begotten Son, Jesus Christ;\nO Lord God, Lamb of God, Son of the Father,\nthat takest away the sins of the world,\nhave mercy upon us.\nThou that takest away the sins of the world,\nreceive our prayer.\nThou that sittest at the right hand of God the Father,\nhave mercy upon us.\nFor thou only art holy,\nthou only art the Lord,\nthou only, O Christ,\nwith the Holy Ghost,\nart most high in the glory of God the Father. Amen."
  },
  "canticle7": {
    "title": "Canticle 7 (Rite I)  We Praise Thee Te Deum laudamus",
    "subtitle": "We praise thee, O God; we acknowledge thee to be the Lord.",
    "text": "All the earth doth worship thee, the Father everlasting.\nTo thee all Angels cry aloud,\nthe Heavens and all the Powers therein.\nTo thee Cherubim and Seraphim continually do cry:\n \nHoly, holy, holy, Lord God of Sabaoth;\nHeaven and earth are full of the majesty of thy glory.\nThe glorious company of the apostles praise thee.\nThe goodly fellowship of the prophets praise thee.\nThe noble army of martyrs praise thee.\nThe holy Church throughout all the world doth acknowledge thee,\nthe Father, of an infinite majesty,\nthine adorable, true, and only Son,\nalso the Holy Ghost the Comforter.\nThou art the King of glory, O Christ.\nThou art the everlasting Son of the Father.\nWhen thou tookest upon thee to deliver man,\nthou didst humble thyself to be born of a Virgin.\nWhen thou hadst overcome the sharpness of death,\nthou didst open the kingdom of heaven to all believers.\nThou sittest at the right hand of God, in the glory of the Father.\nWe believe that thou shalt come to be our judge.\nWe therefore pray thee, help thy servants,\nwhom thou hast redeemed with thy precious blood.\nMake them to be numbered with thy saints,\nin glory everlasting."
  },
  "venite": {
    "title": "Invitatory: Venite",
    "subtitle": "Psalm 95:1-7",
    "text": "Come, let us sing to the Lord;\n  let us shout for joy to the Rock of our salvation.\nLet us come before his presence with thanksgiving\n  and raise a loud shout to him with psalms.\nFor the Lord is a great God,\n  and a great King above all gods.\nIn his hand are the caverns of the earth,\n  and the heights of the hills are his also.\nThe sea is his, for he made it,\n  and his hands have molded the dry land.\nCome, let us bow down, and bend the knee,\n  and kneel before the Lord our Maker.\nFor he is our God,\nand we are the people of his pasture and the sheep of his hand.\n  Oh, that today you would hearken to his voice!"
  },
  "venite_rite1": {
    "title": "Invitatory: Venite",
    "subtitle": "Psalm 95",
    "text": "O come, let us sing unto the Lord; *\n  let us heartily rejoice in the strength of our salvation.\nLet us come before his presence with thanksgiving; *\n  and show ourselves glad in him with psalms.\nFor the Lord is a great God; *\n  and a great King above all gods.\nIn his hand are all the corners of the earth; *\n  and the strength of the hills is his also.\nThe sea is his, and he made it; *\n  and his hands prepared the dry land.\nO come, let us worship and fall down, *\n  and kneel before the Lord our Maker.\nFor he is the Lord our God; *\n  and we are the people of his pasture, and the sheep of his hand.\nToday if ye will hear his voice, harden not your hearts, *\n  as in the provocation, and as in the day of temptation in the wilderness;\nWhen your fathers tempted me, *\n  proved me, and saw my works.\nForty years long was I grieved with this generation, and said, *\n  It is a people that do err in their hearts, for they have not known my ways;\nUnto whom I sware in my wrath, *\n  that they should not enter into my rest."
  },
  "jubilate": {
    "title": "Invitatory: Jubilate",
    "subtitle": "Psalm 100",
    "text": "Be joyful in the Lord, all you lands;\n  serve the Lord with gladness\n  and come before his presence with a song.\nKnow this: The Lord himself is God;\n  he himself has made us, and we are his;\n  we are his people and the sheep of his pasture.\nEnter his gates with thanksgiving;\ngo into his courts with praise;\n  give thanks to him and call upon his Name.\nFor the Lord is good;\nhis mercy is everlasting;\n  and his faithfulness endures from generation to generation."
  },
  "jubilate_rite1": {
    "title": "Invitatory: Jubilate",
    "subtitle": "Psalm 100",
    "text": "O be joyful in the Lord, all ye lands; *\n  serve the Lord with gladness, and come before his presence with a song.\nBe ye sure that the Lord he is God; it is he that hath made us, and not we ourselves; *\n  we are his people, and the sheep of his pasture.\nO go your way into his gates with thanksgiving, and into his courts with praise; *\n  be thankful unto him, and speak good of his Name.\nFor the Lord is gracious, his mercy is everlasting; *\n  and his truth endureth from generation to generation."
  },
  "paschaNostrum": {
    "title": "Invitatory: Christ Our Passover",
    "subtitle": "Pascha Nostrum (1 Cor 5:7-8; Rom 6:9-11; 1 Cor 15:20-22)",
    "text": "Alleluia.\nChrist our Passover has been sacrificed for us;\n  therefore let us keep the feast,\nNot with the old leaven, the leaven of malice and evil,\n  but with the unleavened bread of sincerity and truth. Alleluia.\n\nChrist being raised from the dead will never die again;\n  death no longer has dominion over him.\nThe death he died, he died to sin, once for all;\n  but the life he lives, he lives to God.\nSo also consider yourselves dead to sin,\n  and alive to God in Christ Jesus our Lord. Alleluia.\n\nChrist has been raised from the dead,\n  the first fruits of those who have fallen asleep.\nFor since by a man came death,\n  by a man has come also the resurrection of the dead.\nFor as in Adam all die,\n  so also in Christ shall all be made alive. Alleluia."
  },
  "paschaNostrum_rite1": {
    "title": "Invitatory: Christ Our Passover",
    "subtitle": "Pascha Nostrum (1 Cor 5:7-8; Rom 6:9-11; 1 Cor 15:20-22)",
    "text": "Alleluia.\nChrist our Passover is sacrificed for us; *\n  therefore let us keep the feast;\nNot with the old leaven, neither with the leaven of malice and wickedness; *\n  but with the unleavened bread of sincerity and truth. Alleluia.\n\nChrist being raised from the dead dieth no more; *\n  death hath no more dominion over him.\nFor in that he died, he died unto sin once; *\n  but in that he liveth, he liveth unto God.\nLikewise reckon ye also yourselves to be dead indeed unto sin, *\n  but alive unto God through Jesus Christ our Lord. Alleluia.\n\nChrist is risen from the dead, *\n  and become the first-fruits of them that slept.\nFor since by man came death, *\n  by man came also the resurrection of the dead.\nFor as in Adam all die, *\n  even so in Christ shall all be made alive. Alleluia."
  }
},

  confession: {
    rite2: {
      rubric: "The Officiant says to the people",
      exhortation: "Dearly beloved, we have wandered and strayed from God's ways like lost sheep. Let us humbly confess our sins unto Almighty God.",
      rubricJoint: "Silence may be kept. Officiant and People together, all kneeling:",
      text: "Most merciful God,\nwe confess that we have sinned against you\nin thought, word, and deed,\nby what we have done,\nand by what we have left undone.\nWe have not loved you with our whole heart;\nwe have not loved our neighbors as ourselves.\nWe are truly sorry and we humbly repent.\nFor the sake of your Son Jesus Christ,\nhave mercy on us and forgive us;\nthat we may delight in your will,\nand walk in your ways,\nto the glory of your Name. Amen.",
      rubricAbsolution: "The Priest alone stands and says:",
      absolution: "Almighty God have mercy on you, forgive you all your sins through our Lord Jesus Christ, strengthen you in all goodness, and by the power of the Holy Spirit keep you in eternal life. Amen.",
      layDeclaration: "A layperson leading the service remains kneeling and says:",
      layText: "Almighty God have mercy on us, forgive us all our sins through our Lord Jesus Christ, strengthen us in all goodness, and by the power of the Holy Spirit keep us in eternal life. Amen."
    },
    rite1: {
      rubric: "The Officiant says to the people",
      exhortation: "Dearly beloved, the Scripture moveth us in sundry places to acknowledge and confess our manifold sins and wickedness. Let us confess our sins unto Almighty God.",
      rubricJoint: "Silence may be kept. Officiant and People together, all kneeling:",
      text: "Almighty and most merciful Father,\nwe have erred and strayed from thy ways like lost sheep.\nWe have followed too much the devices and desires of our own hearts.\nWe have offended against thy holy laws.\nWe have left undone those things which we ought to have done;\nand we have done those things which we ought not to have done;\nand there is no health in us.\nBut thou, O Lord, have mercy upon us, miserable offenders.\nSpare thou those, O God, who confess their faults.\nRestore thou those who are penitent;\naccording to thy promises declared unto mankind\nin Christ Jesus our Lord.\nAnd grant, O most merciful Father, for his sake,\nthat we may hereafter live a godly, righteous, and sober life,\nto the glory of thy holy Name. Amen.",
      rubricAbsolution: "The Priest alone stands and says:",
      absolution: "Almighty God, the Father of our Lord Jesus Christ, who desireth not the death of a sinner, pardoneth and absolveth all those who truly repent. Wherefore let us beseech him to grant us true repentance and his Holy Spirit, that those things may please him which we do at this present, and that the rest of our life hereafter may be pure and holy; so that at the last we may come to his eternal joy; through Jesus Christ our Lord. Amen.",
      layDeclaration: "A layperson leading the service remains kneeling and says:",
      layText: "Grant, we beseech thee, merciful Lord, to thy faithful people pardon and peace, that they may be cleansed from all their sins, and serve thee with a quiet mind; through Jesus Christ our Lord. Amen."
    }
  },

  invitatory: {
    rite2: {
      rubric: "All stand",
      v: "O Lord, open our lips.",
      r: "And our mouth shall proclaim your praise.",
      doxology: "Glory to the Father, and to the Son, and to the Holy Spirit: as it was in the beginning, is now, and will be for ever. Amen. Alleluia.",
      rubricAlleluia: "Except in Lent, 'Alleluia' is added."
    },
    rite1: {
      rubric: "All stand",
      v: "O Lord, open thou our lips.",
      r: "And our mouth shall show forth thy praise.",
      doxology: "Glory to the Father, and to the Son, and to the Holy Ghost: as it was in the beginning, is now, and ever shall be, world without end. Amen. Alleluia.",
      rubricAlleluia: "Except in Lent, 'Alleluia' is added."
    }
  },

  creed: {
    rite2: {
      title: "The Apostles' Creed",
      rubric: "Officiant and People together, all standing:",
      text: "I believe in God, the Father almighty,\n  creator of heaven and earth.\nI believe in Jesus Christ, his only Son, our Lord.\n  He was conceived by the power of the Holy Spirit\n    and born of the Virgin Mary.\n  He suffered under Pontius Pilate,\n    was crucified, died, and was buried.\n  He descended to the dead.\n  On the third day he rose again.\n  He ascended into heaven,\n    and is seated at the right hand of the Father.\n  He will come again to judge the living and the dead.\nI believe in the Holy Spirit,\n  the holy catholic Church,\n  the communion of saints,\n  the forgiveness of sins,\n  the resurrection of the body,\n  and the life everlasting. Amen."
    },
    rite1: {
      title: "The Apostles' Creed",
      rubric: "Officiant and People together, all standing:",
      text: "I believe in God, the Father Almighty,\n  maker of heaven and earth;\nAnd in Jesus Christ his only Son our Lord;\n  who was conceived by the Holy Ghost,\n  born of the Virgin Mary,\n  suffered under Pontius Pilate,\n  was crucified, dead, and buried;\n  he descended into hell;\n  the third day he rose again from the dead;\n  he ascended into heaven,\n  and sitteth on the right hand of God the Father Almighty;\n  from thence he shall come to judge the quick and the dead.\nI believe in the Holy Ghost;\n  the holy Catholic Church;\n  the communion of saints;\n  the forgiveness of sins;\n  the resurrection of the body;\n  and the life everlasting. Amen."
    }
  },

  prayers: {
    rite2: {
      rubric: "The People stand or kneel",
      v1: "The Lord be with you.",
      r1: "And also with you.",
      v2: "Let us pray.",
      lordsPrayer: "Our Father in heaven,\n  hallowed be your Name,\n  your kingdom come,\n  your will be done,\n    on earth as in heaven.\n  Give us today our daily bread.\n  Forgive us our sins\n    as we forgive those who sin against us.\n  Save us from the time of trial,\n    and deliver us from evil.\n  For the kingdom, the power,\n    and the glory are yours,\n    now and for ever. Amen.",
      lordsPrayerTraditional: "Our Father, who art in heaven,\n  hallowed be thy Name,\n  thy kingdom come,\n  thy will be done,\n    on earth as it is in heaven.\n  Give us this day our daily bread.\n  And forgive us our trespasses,\n    as we forgive those who trespass against us.\n  And lead us not into temptation,\n    but deliver us from evil.\n  For thine is the kingdom, and the power, and the glory,\n    for ever and ever. Amen.",
      suffragesA: [
        { v: "Show us your mercy, O Lord;", r: "And grant us your salvation." },
        { v: "Clothe your ministers with righteousness;", r: "Let your people sing with joy." },
        { v: "Give peace, O Lord, in all the world;", r: "For only in you can we live in safety." },
        { v: "Lord, keep this nation under your care;", r: "And guide us in the way of justice and truth." },
        { v: "Let your way be known upon earth;", r: "Your saving health among all nations." },
        { v: "Let not the needy, O Lord, be forgotten;", r: "Nor the hope of the poor be taken away." },
        { v: "Create in us clean hearts, O God;", r: "And sustain us with your Holy Spirit." }
      ],
      suffragesB: [
        { v: "Save your people, Lord, and bless your inheritance;", r: "Govern and uphold them, now and always." },
        { v: "Day by day we bless you;", r: "We praise your Name for ever." },
        { v: "Lord, keep us from all sin today;", r: "Have mercy on us, Lord, have mercy." },
        { v: "Lord, show us your love and mercy;", r: "For we put our trust in you." },
        { v: "In you, Lord, is our hope;", r: "And we shall never hope in vain." }
      ]
    },
    rite1: {
      rubric: "The People stand or kneel",
      v1: "The Lord be with you.",
      r1: "And with thy spirit.",
      v2: "Let us pray.",
      lordsPrayer: "Our Father, who art in heaven,\n  hallowed be thy Name,\n  thy kingdom come,\n  thy will be done,\n    on earth as it is in heaven.\n  Give us this day our daily bread.\n  And forgive us our trespasses,\n    as we forgive those who trespass against us.\n  And lead us not into temptation,\n    but deliver us from evil.\n  For thine is the kingdom, and the power, and the glory,\n    for ever and ever. Amen.",
      suffrages: [
        { v: "O Lord, show thy mercy upon us;", r: "And grant us thy salvation." },
        { v: "Endue thy ministers with righteousness;", r: "And make thy chosen people joyful." },
        { v: "Give peace, O Lord, in all the world;", r: "For only in thee can we dwell in safety." },
        { v: "Lord, save thy people, and bless thine heritage;", r: "Govern them and lift them up for ever." },
        { v: "Let not the needy, O Lord, be forgotten;", r: "Nor the hope of the poor be taken away." },
        { v: "Create in us clean hearts, O God;", r: "And take not thy Holy Spirit from us." }
      ]
    }
  },

  collects: {
    rite2: {
      sunday: "O God, you make us glad with the weekly remembrance of the glorious resurrection of your Son our Lord: Give us this day such blessing through our worship of you, that the days to come may be spent in your favor; through Jesus Christ our Lord. Amen.",
      monday: "O Heavenly Father, in you we live and move and have our being: We humbly pray you so to guide and govern us by your Holy Spirit, that in all the cares and occupations of our life we may not forget you, but may remember that we are ever walking in your sight; through Jesus Christ our Lord. Amen.",
      tuesday: "O God, the author of peace and lover of concord, to know you is eternal life and to serve you is perfect freedom: Defend us, your humble servants, in all assaults of our enemies; that we, surely trusting in your defense, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. Amen.",
      wednesday: "O Lord God, almighty and everlasting Father, you have brought us in safety to this new day: Preserve us with your mighty power, that we may not fall into sin, nor be overcome by adversity; and in all we do, direct us to the fulfilling of your purpose; through Jesus Christ our Lord. Amen.",
      thursday: "O God, the King eternal, whose light divides the day from the night and turns the shadow of death into the morning: Drive far from us all wrong desires, harmonize our hearts to do your will, and guide our feet into the way of peace; that, having done your will with cheerfulness during the day, we may, when night comes, rejoice to give you thanks; through Jesus Christ our Lord. Amen.",
      friday: "Almighty God, whose most dear Son went not up to joy but first he suffered pain, and entered not into glory before he was crucified: Mercifully grant that we, walking in the way of the cross, may find it none other than the way of life and peace; through Jesus Christ our Son our Lord. Amen.",
      saturday: "Almighty God, who after the creation of the world rested from all your works and sanctified a day of rest for all your creatures: Grant that we, putting away all earthly anxieties, may be prepared for the service of your sanctuary, and that our rest here on earth may be a preparation for the eternal rest promised to your people in heaven; through Jesus Christ our Lord. Amen.",
      peace: "O God, the author of peace and lover of concord, to know you is eternal life and to serve you is perfect freedom: Defend us, your humble servants, in all assaults of our enemies; that we, surely trusting in your defense, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. Amen.",
      grace: "O Lord God, almighty and everlasting Father, you have brought us in safety to this new day: Preserve us with your mighty power, that we may not fall into sin, nor be overcome by adversity; and in all we do, direct us to the fulfilling of your purpose; through Jesus Christ our Lord. Amen.",
      mission1: "O God, you have made of one blood all the peoples of the earth, and sent your blessed Son to preach peace to those who are far off and to those who are near: Grant that people everywhere may seek after you and find you; bring the nations into your fold; pour out your Spirit upon all flesh; and hasten the coming of your kingdom; through Jesus Christ our Lord. Amen.",
      mission2: "Keep watch, dear Lord, with those who work, or watch, or weep this night, and give your angels charge over those who sleep. Tend the sick, Lord Christ; give rest to the weary, bless the dying, soothe the suffering, pity the afflicted, shield the joyous; and all for your love's sake. Amen."
    },
    rite1: {
      sunday: "O God, who makest us glad with the weekly remembrance of the glorious resurrection of thy Son our Lord: Grant that this day we may so worship thee, that the days to come may be spent in thy favor; through Jesus Christ our Lord. Amen.",
      monday: "O Heavenly Father, in whom we live and move and have our being: We humbly pray thee so to guide and govern us by thy Holy Spirit, that in all the cares and occupations of our life we may not forget thee, but may remember that we are ever walking in thy sight; through Jesus Christ our Lord. Amen.",
      tuesday: "O God, the author of peace and lover of concord, to know thee is eternal life and to serve thee is perfect freedom: Defend us, thy humble servants, in all assaults of our enemies; that we, surely trusting in thy defense, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. Amen.",
      wednesday: "O Lord God, almighty and everlasting Father, who hast safely brought us to the beginning of this day: Defend us in the same with thy mighty power; and grant that this day we fall into no sin, neither run into any kind of danger; but that all our doings may be ordered by thy governance, to do always that is righteous in thy sight; through Jesus Christ our Lord. Amen.",
      thursday: "O God, the King eternal, who dividest the day from the night and turnest the shadow of death into the morning: Drive far from us all wrong desires, harmonize our hearts to do thy will, and guide our feet into the way of peace; that, having done thy will with cheerfulness while it was day, we may, when the night cometh, rejoice to give thee thanks; through Jesus Christ our Lord. Amen.",
      friday: "Almighty God, whose most dear Son went not up to joy but first he suffered pain, and entered not into glory before he was crucified: Mercifully grant that we, walking in the way of the cross, may find it none other than the way of life and peace; through Jesus Christ thy Son our Lord. Amen.",
      saturday: "Almighty God, who after the creation of the world didst rest from all thy works and didst sanctify a day of rest for all thy creatures: Grant that we, putting away all earthly anxieties, may be prepared for the service of thy sanctuary, and that our rest here on earth may be a preparation for the eternal rest promised to thy people in heaven; through Jesus Christ our Lord. Amen."
    }
  },

  closing: {
    rite2: "Let us bless the Lord. Thanks be to God.\n\nThe grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit, be with us all evermore. Amen. (2 Corinthians 13:14)",
    rite1: "Let us bless the Lord. Thanks be to God.\n\nThe grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Ghost, be with us all evermore. Amen. (2 Corinthians 13:14)"
  },

  // Noonday Prayer Liturgy
  noondayPrayer: {
    title: "Noonday Prayer",
    rubric1: "All stand. Officiant says:",
    v1: "O God, make speed to save us.",
    r1: "O Lord, make haste to help us.",
    doxology: "Glory to the Father, and to the Son, and to the Holy Spirit: as it was in the beginning, is now, and will be for ever. Amen. Alleluia.",
    rubricPsalms: "One or more of the following Psalms is sung or said. Click to view:",
    psalms: {
      ps119: {
        title: "Psalm 119:105-112 (Lucerna pedibus meis)",
        text: "Your word is a lantern to my feet\n  and a light upon my path.\nI have sworn and am determined\n  to keep your righteous judgments.\nI am deeply troubled;\n  preserve my life, O Lord, according to your word.\nAccept, O Lord, the willing tribute of my lips,\n  and teach me your judgments.\nMy life is always in my hand,\n  yet I do not forget your law.\nThe wicked have set a trap for me,\n  but I have not strayed from your commandments.\nYour decrees are my heritage for ever;\n  truly, they are the joy of my heart.\nI have applied my heart to fulfill your statutes\n  for ever and to the end.\n\nGlory to the Father, and to the Son, and to the Holy Spirit:\n  as it was in the beginning, is now, and will be for ever. Amen."
      },
      ps121: {
        title: "Psalm 121 (Levavi oculos)",
        text: "I lift up my eyes to the hills;\n  from where is my help to come?\nMy help comes from the Lord,\n  the maker of heaven and earth.\nHe will not let your foot be moved\n  and he who watches over you will not fall asleep.\nBehold, he who keeps watch over Israel\n  shall neither slumber nor sleep;\nThe Lord himself watches over you;\n  the Lord is your shade at your right hand,\nSo that the sun shall not strike you by day,\n  nor the moon by night.\nThe Lord shall preserve you from all evil;\n  it is he who shall keep you safe.\nThe Lord shall watch over your going out and your coming in,\n  from this time forth for evermore.\n\nGlory to the Father, and to the Son, and to the Holy Spirit:\n  as it was in the beginning, is now, and will be for ever. Amen."
      },
      ps126: {
        title: "Psalm 126 (In convertendo)",
        text: "When the Lord restored the fortunes of Zion,\n  then were we like those who dream.\nThen was our mouth filled with laughter,\n  and our tongue with shouts of joy.\nThen they said among the nations,\n  'The Lord has done great things for them.'\nThe Lord has done great things for us,\n  and we are glad indeed.\nRestore our fortunes, O Lord,\n  like the watercourses of the Negev.\nThose who sowed with tears\n  shall reap with songs of joy.\nHe who goes out weeping, carrying the seed,\n  shall come again with joy, shouldering his sheaves.\n\nGlory to the Father, and to the Son, and to the Holy Spirit:\n  as it was in the beginning, is now, and will be for ever. Amen."
      }
    },
    rubricScripture: "One of the following, or some other passage of Scripture is read:",
    scriptures: [
      { text: "If anyone is in Christ, he is a new creation; the old has passed away, behold, the new has come. All this is from God, who through Christ reconciled us to himself and gave us the ministry of reconciliation. (2 Corinthians 5:17-18)", ref: "2 Corinthians 5:17-18" },
      { text: "From the rising of the sun to its setting my Name shall be great among the nations, and in every place incense shall be offered to my Name, and a pure offering; for my Name shall be great among the nations, says the Lord of hosts. (Malachi 1:11)", ref: "Malachi 1:11" },
      { text: "The love of God has been poured into our hearts through the Holy Spirit that has been given to us. (Romans 5:5)", ref: "Romans 5:5" }
    ],
    response: "Thanks be to God.",
    rubricPrayers: "The Officiant says:",
    v2: "Lord, have mercy.",
    r2: "Christ, have mercy.",
    v3: "Lord, have mercy.",
    lordsPrayer: "Our Father in heaven,\n  hallowed be your Name,\n  your kingdom come,\n  your will be done,\n    on earth as in heaven.\n  Give us today our daily bread.\n  Forgive us our sins\n    as we forgive those who sin against us.\n  Save us from the time of trial,\n    and deliver us from evil. Amen.",
    v4: "Lord, hear our prayer.",
    r4: "And let our cry come to you.",
    v5: "Let us pray.",
    collect: "Heavenly Father, send your Holy Spirit into our hearts, to direct and rule us according to your will, to comfort us in all our afflictions, to defend us from all error, and to lead us into all truth; through Jesus Christ our Lord. Amen.",
    dismissal: "Let us bless the Lord.\nThanks be to God."
  },

  // Compline Liturgy
  compline: {
    title: "Compline",
    rubric1: "The Officiant begins:",
    opening: "The Lord Almighty grant us a peaceful night and a perfect end. Amen.",
    v1: "Our help is in the Name of the Lord;",
    r1: "The maker of heaven and earth.",
    rubricConfession: "The Officiant then says:",
    exhortation: "Let us confess our sins to God.",
    text: "Almighty God, our heavenly Father:\nWe have sinned against you, through our own fault,\nin thought, and word, and deed,\nand in what we have left undone.\nFor the sake of your Son our Lord Jesus Christ,\nforgive us all our offenses;\nand grant that we may serve you in newness of life,\nto the glory of your Name. Amen.",
    rubricAbsolution: "Officiant stands and says:",
    absolution: "May the Almighty God grant us forgiveness of all our sins, and the grace and comfort of the Holy Spirit. Amen.",
    v2: "O God, make speed to save us.",
    r2: "O Lord, make haste to help us.",
    doxology: "Glory to the Father, and to the Son, and to the Holy Spirit: as it was in the beginning, is now, and will be for ever. Amen. Alleluia.",
    rubricPsalms: "One or more of the following Psalms is said. Click to view:",
    psalms: {
      ps4: {
        title: "Psalm 4 (Cum invocarem)",
        text: "Answer me when I call, O God, defender of my cause;\n  you set me free when I am hard-pressed;\n  have mercy on me and hear my prayer.\n'You mortals, how long will you dishonor my glory;\n  how long will you worship dumb idols and run after lies?'\nKnow that the Lord does wonders for the faithful;\n  when I call upon the Lord, he will hear me.\nTremble, then, and do not sin;\n  speak to your heart in silence upon your bed.\nOffer the appointed sacrifices\n  and put your trust in the Lord.\nMany are saying, 'Oh, that we might see better times!'\n  Lift up the light of your countenance upon us, O Lord.\nYou have put gladness in my heart,\n  more than when grain and wine and oil increase.\nI lie down in peace; at once I fall asleep;\n  for only you, Lord, make me dwell in safety.\n\nGlory to the Father, and to the Son, and to the Holy Spirit:\n  as it was in the beginning, is now, and will be for ever. Amen."
      },
      ps31: {
        title: "Psalm 31:1-5 (In te, Domine, speravi)",
        text: "In you, O Lord, have I taken refuge;\nlet me never be put to shame;\n  deliver me in your righteousness.\nIncline your ear to me;\n  make haste to deliver me.\nBe you my strong rock, a castle to keep me safe,\nfor you are my crag and my stronghold;\n  for the sake of your Name, lead me and guide me.\nTake me out of the net that they have secretly laid for me,\n  for you are my strength.\nInto your hands I commend my spirit,\n  for you have redeemed me, O Lord, O God of truth.\n\nGlory to the Father, and to the Son, and to the Holy Spirit:\n  as it was in the beginning, is now, and will be for ever. Amen."
      },
      ps91: {
        title: "Psalm 91 (Qui habitat)",
        text: "He who dwells in the shelter of the Most High,\n  abides under the shadow of the Almighty.\nHe shall say to the Lord,\n'My refuge and my stronghold,\n  my God in whom I put my trust.'\nHe shall deliver you from the snare of the hunter\n  and from the deadly pestilence.\nHe shall cover you with his pinions,\nand you shall find refuge under his wings;\n  his faithfulness shall be a shield and buckler.\nYou shall not be afraid of any terror by night,\n  nor of the arrow that flies by day;\nOf the plague that stalks in the darkness,\n  nor of the sickness that lays waste at mid-day.\nA thousand shall fall at your side\nand ten thousand at your right hand,\n  but it shall not come near you.\nYour eyes have only to behold\n  to see the reward of the wicked.\nBecause you have made the Lord your refuge,\n  and the Most High your habitation,\nThere shall no evil happen to you,\n  neither shall any plague come near your dwelling.\nFor he shall give his angels charge over you,\n  to keep you in all your ways.\nThey shall bear you in their hands,\n  lest you dash your foot against a stone.\nYou shall tread upon the lion and adder;\n  you shall trample the young lion and the serpent under your feet.\nBecause he is bound to me in love,\ntherefore will I deliver him;\n  I will protect him, because he knows my Name.\nHe shall call upon me, and I will answer him;\n  I am with him in trouble;\n  I will rescue him and bring him to honor.\nWith long life will I satisfy him,\n  and show him my salvation.\n\nGlory to the Father, and to the Son, and to the Holy Spirit:\n  as it was in the beginning, is now, and will be for ever. Amen."
      }
    },
    rubricScripture: "One of the following passages of Scripture is read:",
    scriptures: [
      { text: "Lord, you are in the midst of us, and we are called by your Name: Do not forsake us, O Lord our God. (Jeremiah 14:9, 22)", ref: "Jeremiah 14:9, 22" },
      { text: "Come to me, all who labor and are heavy-laden, and I will give you rest. Take my yoke upon you, and learn from me; for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light. (Matthew 11:28-30)", ref: "Matthew 11:28-30" },
      { text: "May the God of peace, who brought again from the dead our Lord Jesus, the great Shepherd of the sheep, by the blood of the eternal covenant, equip you with everything good that you may do his will, working in you that which is pleasing in his sight; through Jesus Christ, to whom be glory for ever and ever. Amen. (Hebrews 13:20-21)", ref: "Hebrews 13:20-21" },
      { text: "Be sober, be watchful. Your adversary the devil prowls around like a roaring lion, seeking some-one to devour. Resist him, firm in your faith. (1 Peter 5:8-9)", ref: "1 Peter 5:8-9" }
    ],
    response: "Thanks be to God.",
    v3: "Into your hands, O Lord, I commend my spirit;",
    r3: "For you have redeemed me, O Lord, O God of truth.",
    v4: "Keep us, O Lord, as the apple of your eye;",
    r4: "Hide us under the shadow of your wings.",
    rubricPrayers: "Officiant says:",
    v5: "Lord, have mercy.",
    r5: "Christ, have mercy.",
    v6: "Lord, have mercy.",
    lordsPrayer: "Our Father in heaven,\n  hallowed be your Name,\n  your kingdom come,\n  your will be done,\n    on earth as in heaven.\n  Give us today our daily bread.\n  Forgive us our sins\n    as we forgive those who sin against us.\n  Save us from the time of trial,\n    and deliver us from evil. Amen.",
    v7: "Lord, hear our prayer.",
    r7: "And let our cry come to you.",
    v8: "Let us pray.",
    collects: [
      "Be present, O merciful God, and protect us through the silent hours of this night, so that we who are wearied by the changes and chances of this fleeting world may repose upon your eternal changelessness; through Jesus Christ our Lord. Amen.",
      "Keep watch, dear Lord, with those who work, or watch, or weep this night, and give your angels charge over those who sleep. Tend the sick, Lord Christ; give rest to the weary, bless the dying, soothe the suffering, pity the afflicted, shield the joyous; and all for your love's sake. Amen.",
      "Look down, O Lord, from your heavenly throne, and illumine this night with your celestial brightness; that by day as well as by night your people may glorify your holy Name; through Jesus Christ our Lord. Amen."
    ],
    rubricNunc: "All stand. The following antiphon is sung or said with the Song of Simeon:",
    antiphonBefore: "Guide us waking, O Lord, and guard us sleeping; that awake we may watch with Christ, and asleep we may rest in peace.",
    nuncDimittis: "Lord, now you let your servant go in peace;\n  your word has been fulfilled.\nMy own eyes have seen the salvation\n  which you have prepared in the sight of every people:\nA light to reveal you to the nations,\n  and the glory of your people Israel.\n\nGlory to the Father, and to the Son, and to the Holy Spirit:\n  as it was in the beginning, is now, and will be for ever. Amen.",
    antiphonAfter: "Guide us waking, O Lord, and guard us sleeping; that awake we may watch with Christ, and asleep we may rest in peace. Alleluia, alleluia, alleluia.",
    rubricAlleluia: "In Easter season, the 'Alleluia' is added to the antiphon.",
    v9: "Let us bless the Lord.",
    r9: "Thanks be to God.",
    blessing: "The almighty and merciful Lord, Father, Son, and Holy Spirit, bless us and keep us. Amen."
  }

};

// FeastCalendar - BCP Major Feasts and Lesser Feasts & Fasts 2022 (LFF)
// Complete database of liturgical commemorations for the full church year
const FeastCalendar = {
  "01-01": {
    name: "The Holy Name of Our Lord Jesus Christ",
    type: "major",
    readings: {
      morning: { ot: "Exodus 34:1-8", nt: "Romans 1:1-7", gospel: "Luke 2:15-21", psalms: "Psalm 8" },
      evening: { ot: "Genesis 17:1-12a, 15-16", nt: "Colossians 2:6-12", gospel: "John 16:23b-30", psalms: "Psalm 103" }
    },
    collect: "Eternal Father, you gave to your incarnate Son the holy name of Jesus to be the sign of our salvation: Plant in every heart, we pray, the love of him who is the Savior of the world, our Lord Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.",
    bio: "The Feast of the Holy Name commemorates the circumcision of Jesus on the eighth day after his birth and the giving of his name. The name 'Jesus' (Yeshua in Hebrew) means 'God saves' and was revealed to both Mary and Joseph by angels before his birth. The veneration of the Holy Name has been part of Christian devotion since the earliest centuries, reflecting the conviction that in this one name lies the fullness of salvation. The feast has been observed in the Western church from at least the fifteenth century and is one of the principal days for baptism."
  },
  "01-04": {
    name: "Elizabeth Ann Seton, Vowed Religious and Educator, 1821",
    type: "minor",
    readings: { ot: "2 Esdras 2:15-24", psalms: "Psalm 119:105-112", nt: "Romans 16:17-20", gospel: "Luke 14:15-23" },
    collect: "Give us grace, O God, to love you in all things and above all things; that, following the example of your servant Elizabeth Ann Seton, we might express our love for you in the service of others. Through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.",
    bio: "Elizabeth Ann Seton (1774–1821) was the first native-born citizen of the United States to be canonized by the Roman Catholic Church. She founded the Sisters of Charity of St. Joseph, the first American congregation of religious sisters, and established the first free Catholic school for girls in America, laying the foundation for the Catholic parochial school system in the US."
  },
  "01-05": {
    name: "Sarah, Theodora, and Syncletica of Egypt, Desert Mothers, fourth–fifth century",
    type: "minor",
    readings: { ot: "Proverbs 9:1–6", psalms: "Psalm 119:65–72", nt: "James 4:1-10", gospel: "Mark 12:18–27" },
    collect: "Fix our hearts on You, O God, in pure devotion, that aided by the example of your servants Sarah, Theodora, and Syncletica, the vain pursuits of this world may have no hold upon us, and that by the consuming fire of your Spirit, we may be changed into the image and likeness of your Son, Jesus Christ our Lord; to whom with you and the same Spirit be all honor and glory, now and for ever. Amen.",
    bio: "Sarah, Theodora, and Syncletica of Egypt was a devout desert mothers, fourth– who served the church and community with great distinction in the fourth. Grounded in a life of prayer and steadfast faith, their witness and teachings continue to inspire Christians to dedicate all aspects of their lives to the glory of God and the service of others."
  },
  "01-06": {
    name: "The Epiphany of Our Lord Jesus Christ",
    type: "major",
    readings: {
      morning: { ot: "Isaiah 60:1-6, 9", nt: "Ephesians 3:1-12", gospel: "Matthew 2:1-12", psalms: "Psalm 72" },
      evening: { ot: "Isaiah 49:1-7", nt: "Revelation 21:22-27", gospel: "John 4:7-26", psalms: "Psalm 100" }
    },
    collect: "O God, by the leading of a star you manifested your only Son to the peoples of the earth: Lead us, who know you now by faith, to your presence, where we may see your glory face to face; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "The Epiphany (from Greek epiphania, 'manifestation') celebrates the revelation of Jesus Christ to the Gentiles, represented by the Magi who came from the East following a star. The feast marks the end of the twelve days of Christmas. In Western Christianity it commemorates the visit of the Magi; in the Eastern church it focuses on Jesus's Baptism. The Epiphany is one of the seven principal feasts of the church year, and its season extends until Ash Wednesday."
  },
  "01-08": {
    name: "Harriett Bedell, Deaconness and Missionary, 1969",
    type: "minor",
    readings: { ot: "Exodus 2:1–10", psalms: "Psalm 93", nt: "1 Corinthians 1:4-9", gospel: "Matthew 5:43-48" },
    collect: "Holy God, fill us with compassion and respect for all people, and empower us for the work of ministry whether near or far away; that like your servant Harriet Bedell, we may show forth your praise, not only with our lips, but in our lives, and by giving up ourselves to your service. Through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever.",
    bio: "Harriett Bedell was a devout deaconness and missionary who served the church and community with great distinction in 1969. Grounded in a life of prayer and steadfast faith, their witness and teachings continue to inspire Christians to dedicate all aspects of their lives to the glory of God and the service of others."
  },
  "01-09": {
    name: "Julia Chester Emery, Lay Leader and Missionary, 1922",
    type: "minor",
    readings: { ot: "Ecclesiasticus 3:30-4:6", psalms: "Psalm 67", nt: "Romans 12:6-13", gospel: "Mark 10:42-45" },
    collect: "God of all creation, who calls us to make disciples of all nations and to proclaim your mercy and love: Grant that we, after the example of your servant Julia Chester Emery, might have vision and courage in proclaiming the Gospel to the ends of the earth; through Jesus Christ our light and our salvation, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Julia Chester Emery was a devout lay leader and missionary who served the church and community with great distinction in 1922. Grounded in a life of prayer and steadfast faith, their witness and teachings continue to inspire Christians to dedicate all aspects of their lives to the glory of God and the service of others."
  },
  "01-10": {
    name: "William Laud, Archbishop of Canterbury, 1645",
    type: "minor",
    readings: { ot: "Wisdom 1:6-15", psalms: "Psalm 73:24-29", nt: "Hebrews 12:5-7, 11-14", gospel: "Matthew 10:32-39" },
    collect: "Keep us, O Lord, constant in faith and zealous in witness, that, like your servant William Laud, we may live in your fear, die in your favor, and rest in your peace; for the sake of Jesus Christ your Son our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen",
    bio: "William Laud was a devout archbishop of canterbury who served the church and community with great distinction in 1645. Grounded in a life of prayer and steadfast faith, their witness and teachings continue to inspire Christians to dedicate all aspects of their lives to the glory of God and the service of others."
  },
  "01-12": {
    name: "Aelred of Rievaulx, Monastic and Theologian, 1167",
    type: "minor",
    readings: { ot: "Ecclesiasticus 6:5-17", psalms: "Psalm 36:5-10", nt: "Philippians 2:1-4", gospel: "John 15:9–17" },
    collect: "Grant to your people, Almighty God, a spirit of mutual affection; that, following the example of your servant Aelred of Rivaulx, we might know the love of Christ in loving one another; through the same Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Aelred of Rievaulx was a devout monastic and theologian who served the church and community with great distinction in 1167. Grounded in a life of prayer and steadfast faith, their witness and teachings continue to inspire Christians to dedicate all aspects of their lives to the glory of God and the service of others."
  },
  "01-13": {
    name: "Hilary of Poitiers, Bishop, 367",
    type: "minor",
    readings: { ot: "Zechariah 6:9-15", psalms: "Psalm 9:7-10", nt: "1 John 2:18–25", gospel: "Luke 15:1–7" },
    collect: "Keep us steadfast, Lord God, in that true faith that we professed at our baptism; that, like your servant Hilary of Poitiers, we may rejoice in having you for our Father, and may abide in your Son, in the fellowship of the Holy Spirit; for you live and reign for ever and ever as one God in Trinity of Persons. Amen.",
    bio: "Hilary of Poitiers (c. 315–368) converted to Christianity as an adult and was elected Bishop of Poitiers around 353. He became the leading Latin theologian defending Nicene orthodoxy against Arianism. Exiled to Phrygia (356–360) by the Arian Emperor Constantius II, he wrote his masterwork 'On the Trinity' during exile. He is known as the 'Athanasius of the West' for his resolute defense of Christ's full divinity, and he was the first to introduce hymn-singing into the Western church."
  },
  "01-14": {
    name: "Richard Meux Benson, Priest and Vowed Religious, 1915, and Charles Gore, Bishop and Vowed Religious, 1932, 1915 and 1932",
    type: "minor",
    readings: { ot: "1 Kings 19:9–18", psalms: "Psalm 27:7–11", nt: "1 John 4:7-12", gospel: "John 17:6-11" },
    collect: "Gracious God, who kindled in your servants Richard Meux Benson and Charles Gore the grace to lead a revival of monastic life: Grant us also the resolve to serve you faithfully in contemplation and prayer, ministering to the world that you have made, through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, ever one God, in glory everlasting. Amen.",
    bio: "Richard Meux Benson, Priest and Vowed Religious, 1915, and Charles Gore, Bishop and Vowed Religious, 1932 was a devout and who served the church and community with great distinction in 1915. Grounded in a life of prayer and steadfast faith, their witness and teachings continue to inspire Christians to dedicate all aspects of their lives to the glory of God and the service of others."
  },
  "01-17": {
    name: "Antony of Egypt, Monastic, 356",
    type: "minor",
    readings: { ot: "Ecclesiastes 6:1-12", psalms: "Psalm 90:1-12", nt: "James 1:9–11", gospel: "Mark 10:17–22" },
    collect: "O God, as you by your Holy Spirit enabled your servant Antony to withstand the temptations of the world, the flesh, and the devil; so give us grace to follow you with pure hearts and minds, through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Antony of Egypt (c. 251–356) is known as the Father of Christian monasticism. At age twenty, hearing the gospel command 'Go, sell what you have and give to the poor,' he took it literally, gave away his estate, and withdrew to the Egyptian desert. His life, written by Athanasius of Alexandria, spread the ideal of the hermit life across the Christian world. Antony reportedly lived to age 105, and in his old age welcomed visitors from across the known world who came to him for spiritual direction. He is the archetype of the Desert Father."
  },
  "01-18": {
    name: "Confession of Saint Peter the Apostle",
    type: "major",
    readings: {
      morning: { ot: "Ezekiel 3:4-11", nt: "Acts 4:8-13", gospel: "Matthew 16:13-19", psalms: "Psalm 23" },
      evening: { ot: "1 Samuel 16:1-13", nt: "1 Corinthians 3:11-23", gospel: "John 21:15-22", psalms: "Psalm 66" }
    },
    collect: "Almighty Father, who inspired Simon Peter, first among the apostles, to confess Jesus as Messiah and Son of the living God: Keep your Church steadfast upon the rock of this faith, so that in unity and peace we may proclaim the one truth and follow the one Lord, our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "The Confession of Saint Peter celebrates the pivotal moment at Caesarea Philippi when Simon Peter declared Jesus to be 'the Messiah, the Son of the living God.' This moment marks the turning point in Matthew's Gospel, following which Jesus began to teach about his coming passion. Peter's confession stands as the foundational statement of Christian faith. This feast begins the Week of Prayer for Christian Unity (January 18–25), reflecting the ecumenical significance of Peter's leadership among the apostles."
  },
  "01-19": {
    name: "Wulfstan of Worcester, Bishop, 1095",
    type: "minor",
    readings: { ot: "Genesis 12:1–9", psalms: "Psalm 84:7–12", nt: "1 Corinthians 4:1-5", gospel: "John 15:5–8" },
    collect: "Almighty God, whose only-begotten Son led captivity captive and gave gifts to your people: Multiply among us faithful pastors, who, like your holy bishop Wulfstan, will give courage to those who are oppressed and held in bondage; and bring us all, we pray, into the true freedom of your kingdom; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Wulfstan (c. 1008–1095) was Bishop of Worcester and the only Anglo-Saxon bishop to retain his see after the Norman Conquest of 1066. He was renowned for his pastoral care, simplicity of life, and devotion to the monastic ideal. He successfully worked to abolish the slave trade between England and Ireland. He was known for his humility: despite his high office, he wore simple clothes, distributed his goods to the poor, and was gentle in bearing."
  },
  "01-20": {
    name: "Fabian, Bishop and Martyr, 250",
    type: "minor",
    readings: { ot: "2 Esdras 2:42-48", psalms: "Psalm 6", nt: "1 Corinthians 15:35-44", gospel: "Matthew 10:24–31" },
    collect: "Grant, Almighty God, that in all times of trial and persecution, we might remain steadfast in faith and endurance, according to the example of your servant Fabian, who was faithful even unto death. We ask this for the sake of him who laid down his life for us all, Jesus Christ our Savior; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Fabian served as Bishop of Rome (Pope) from 236 to 250. According to Eusebius, his election was miraculous: a dove descended upon him while the congregation chose a new bishop, and he was unanimously acclaimed pope despite being a layman. He proved energetic and effective, reorganizing the Roman church into districts served by deacons, sending missionaries to Gaul, and building extensively in the Roman catacombs. He was martyred in January 250 during the persecution of Emperor Decius."
  },
  "01-21": {
    name: "Agnes and Cecilia of Rome, Martyrs, 304 and c.230",
    type: "minor",
    readings: { ot: "Song of Songs 2:10–13", psalms: "Psalm 45:11–16", nt: "2 Corinthians 6:16-18", gospel: "Matthew 18:1–6" },
    collect: "Almighty and everlasting God, who chooses those whom the world deems powerless to put the powerful to shame: Grant us so to cherish the memory of your youthful martyrs Agnes and Cecilia, that we might share their pure and steadfast faith in you; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God for ever and ever. Amen.",
    bio: "Agnes (c. 291–304) was only twelve or thirteen years old when she was martyred during the persecution of Emperor Diocletian. She refused to marry the son of a Roman prefect because she had consecrated her virginity to Christ; she was sent to a brothel, remained miraculously unharmed, and was finally executed by beheading. Her feast is one of the oldest in the Roman calendar. She is depicted with a lamb (agnus in Latin, similar to her name) and is patron of girls, chastity, and victims of sexual abuse."
  },
  "01-22": {
    name: "Vincent of Saragossa, Deacon and Martyr, 304",
    type: "minor",
    readings: { ot: "Jeremiah 26:12-15", psalms: "Psalm 31:1–5", nt: "Revelation 7:13–17", gospel: "Luke 12:4–12" },
    collect: "Almighty God, whose deacon Vincent, upheld by you, was neither terrified by threats nor overcome by torments: Strengthen us to endure all adversity with invincible and steadfast faith; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Vincent of Saragossa (died 304) was a deacon of the church in Zaragoza, Spain, martyred during the Diocletianic persecution. His bishop Valerius, who had a speech impediment, depended on Vincent to preach. When arrested, Valerius was exiled but Vincent was subjected to terrible tortures before being executed. The vividness with which early sources described his suffering made him one of the most celebrated martyrs of ancient Christianity, and his cult spread across the entire Christian world."
  },
  "01-23": {
    name: "Phillips Brooks, Bishop, 1893",
    type: "minor",
    readings: { ot: "Jonah 3:1-10", psalms: "Psalm 49:1-10", nt: "Ephesians 3:14–21", gospel: "Matthew 20:1-16" },
    collect: "Everlasting God, who implants your living Word in the minds and on the lips of all who proclaim your truth: Grant that we, like your pastor and preacher Phillips Brooks, might proclaim your Gospel in our own generation with grace and power. Through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, ever one God, now and for ever. Amen.",
    bio: "Phillips Brooks (1835–1893) was the Bishop of Massachusetts and one of the most celebrated preachers in the history of the Episcopal Church, renowned for his eloquent sermons and broad theological vision. The author of the beloved Christmas hymn 'O Little Town of Bethlehem,' he combined intellectual depth with deep personal warmth and pastoral care, leaving a lasting impact on American religious life."
  },
  "01-24": {
    name: "Florence Li Tim-Oi, Priest, 1992",
    type: "minor",
    readings: { ot: "Joel 2:28-32", psalms: "Psalm 116:1–12", nt: "Galatians 3:23–29", gospel: "Luke 5:1–11" },
    collect: "Almighty God, who pours out your Spirit upon your sons and daughters: Grant that we, following the example of your servant Florence Li Tim-Oi, chosen priest in your church, may with faithfulness, patience, and tenacity proclaim your holy gospel to all the nations, through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.",
    bio: "Florence Li Tim-Oi (1907–1992) was a courageous Chinese priest and the first woman to be ordained in the Anglican Communion, ordained by Bishop R.O. Hall in Macau in 1944 to serve the flock during the Japanese occupation. Despite subsequent political trials and decades of forced labor in mainland China, she maintained her steadfast faith and ministry, later resuming public ministry in Canada."
  },
  "01-25": {
    name: "Conversion of Saint Paul the Apostle",
    type: "major",
    readings: {
      morning: { ot: "Isaiah 45:18-25", nt: "Acts 9:1-22", gospel: "Matthew 10:16-22", psalms: "Psalm 67" },
      evening: { ot: "Ecclesiasticus 39:1-10", nt: "Philippians 3:4b-11", gospel: "Galatians 1:11-24", psalms: "Psalm 119:17-32" }
    },
    collect: "O God, who by the preaching of your apostle Paul has caused the light of the Gospel to shine throughout the world: Grant, we pray, that we, having his wonderful conversion in remembrance, may show forth our thankfulness by following the holy doctrine which he taught; through Jesus Christ our Lord. Amen.",
    bio: "The Conversion of Saint Paul commemorates the dramatic event described in Acts 9 when Saul of Tarsus, a zealous persecutor of Christians, encountered the risen Christ on the road to Damascus and was transformed into the apostle to the Gentiles. Dated by tradition to around 34–36 AD, Paul's conversion is one of the most significant events in Christian history. His missionary journeys planted churches throughout the Mediterranean world, and his letters constitute a substantial portion of the New Testament."
  },
  "01-26": {
    name: "Titus and Timothy, Companions of Saint Paul January26",
    type: "minor",
    readings: { ot: "Isaiah 42:1-7", psalms: "Psalm 30:1-5", nt: "Titus 1:1–5", gospel: "John 10:1–10" },
    collect: "Almighty God, who called Timothy and Titus to be evangelists and teachers, and made them strong to endure hardship: Strengthen us to stand fast in adversity, and to live godly and righteous lives in this present time, that with sure confidence we may look for our blessed hope, the glorious appearing of our great God and Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Timothy and Titus were among Paul's closest co-workers. Timothy was the son of a Jewish mother and Greek father from Lystra. Paul addressed two letters to Timothy giving guidance on church leadership. Titus was a Gentile convert who served as Paul's representative to the Corinthian church; Paul wrote one letter to Titus who was organizing the church in Crete. Both are examples of dedicated pastoral leadership in challenging mission fields."
  },
  "01-27": {
    name: "John Chrysostom, Bishop and Theologian, 407",
    type: "minor",
    readings: { ot: "Jeremiah 1:4–10", psalms: "Psalm 49:1–8", nt: "1 Corinthians 12:31-13:7", gospel: "Luke 21:12–15" },
    collect: "O God, who gave your servant John Chrysostom grace eloquently to proclaim your righteousness in the great congregation, and fearlessly to bear reproach for the honor of your Name: Mercifully grant to all who proclaim your word such excellence in preaching, that all your people may be made partakers of the glory that shall be revealed; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God for ever and ever. Amen.",
    bio: "John Chrysostom (c. 347–407), whose surname means 'golden-mouthed,' was one of the greatest preachers in Christian history. Born in Antioch, he became Archbishop of Constantinople in 398. As bishop he sold the lavish episcopal furnishings to provide for the poor and publicly criticized the empress Eudoxia's extravagance. Twice exiled for this, he died on a forced march in 407. His biblical commentaries and sermons remain models of homiletical excellence read to this day."
  },
  "01-28": {
    name: "Thomas Aquinas, Friar and Theologian, 1274",
    type: "minor",
    readings: { ot: "Wisdom 7:7–14", psalms: "Psalm 119:97–104", nt: "1 Corinthians 11:23-26", gospel: "Matthew 13:24–30" },
    collect: "Almighty God, who has enriched your church with the singular learning and holiness of your servant Thomas Aquinas: Enlighten us more and more, we pray, by the disciplined thinking and teaching of Christian scholars, and deepen our devotion by the example of saintly lives; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Thomas Aquinas (1225–1274) was a Dominican friar and the most influential philosopher-theologian of the medieval Western church. His major work, the Summa Theologiae, reconciles Aristotelian philosophy with Christian revelation and has been foundational for theology to this day. He is called the 'Angelic Doctor.' Near the end of his life he reportedly said of his vast writings, 'It is all straw compared to what I have seen,' suggesting a mystical experience that transcended rational theology."
  },
  "01-29": {
    name: "Liliʻuokalani of Hawai’i, Queen or November 11",
    type: "minor",
    readings: { ot: "Isaiah 26:1-8", psalms: "Psalm 57:7-11", nt: "Colossians 3:12-15", gospel: "Matthew 5:38-45" },
    collect: "Almighty God, who called your daughter Lili‘uokalani to an earthly throne that she might advance your heavenly kingdom, and endowed her with gift of song and love for her people: Grant that we may imitate her perseverance in adversity, her commitment to peace, and her capacity for forgiveness. All this we ask in the name of your Son Jesus Christ, who lives, and reigns with you and the Holy Spirit, one God, for ever and ever. Amen..",
    bio: "Liliʻuokalani of Hawai’i was a devout queen or november 11 who served the church and community with great distinction. Grounded in a life of prayer and steadfast faith, their witness and teachings continue to inspire Christians to dedicate all aspects of their lives to the glory of God and the service of others."
  },
  "01-31": {
    name: "Marcella of Rome, Monastic and Scholar, 410",
    type: "minor",
    readings: { ot: "1 Kings 17:8–16", psalms: "Psalm 12", nt: "Colossians 3:1-4", gospel: "Luke 6:17-26" },
    collect: "O God, who satisfies the longing soul and fills the hungry with good things: Grant that we, like your servant Marcella, may hunger and thirst after you above the vain pomp and glory of the world, and delight in your word above all manner of riches; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Marcella of Rome (325–410) was a Christian ascetic and scholar who gathered a community of noblewomen at her palace on the Aventine Hill for study, prayer, and charitable works. A close associate of Jerome, she was highly respected for her knowledge of Scripture, and she was martyred by the Goths when they sacked Rome, remaining steadfast in her devotion."
  },
  "02-01": {
    name: "Brigid of Kildare, Monastic, c. 523",
    type: "minor",
    readings: { ot: "Tobit 2:9-14", psalms: "Psalm 138", nt: "1 Corinthians 1:26-31", gospel: "Matthew 6:19–24" },
    collect: "O God, whose servant Brigid, kindled with the flame of your love, became a shining light in your church: Grant that we also may be aflame with the spirit of love and discipline, and walk before you as children of light; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Brigid of Kildare (c. 451–525) is one of Ireland's patron saints, who founded the monastery of Kildare, a unique double monastery of monks and nuns. Renowned for her extraordinary charity, hospitality, and concern for the poor, she played a vital role in the expansion of Celtic Christianity and is widely regarded as a spiritual mother of Ireland."
  },
  "02-02": {
    name: "Presentation of Our Lord Jesus Christ in the Temple",
    type: "major",
    readings: {
      morning: { ot: "1 Samuel 1:20-28", nt: "Romans 8:14-17", gospel: "Luke 2:22-40", psalms: "Psalm 84" },
      evening: { ot: "Haggai 2:1-9", nt: "Hebrews 10:1-25", gospel: "Luke 2:22-40", psalms: "Psalm 48" }
    },
    collect: "Almighty and everliving God, we humbly pray that, as your only-begotten Son was this day presented in the temple, so we may be presented to you with pure and clean hearts by Jesus Christ our Lord; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "The Presentation of Our Lord in the Temple (Candlemas) commemorates the occasion forty days after Jesus's birth when Mary and Joseph brought him to the Temple for purification and consecration of the firstborn. At this occasion they encountered Simeon, who sang the Nunc dimittis, and the prophetess Anna. This feast is also known as Candlemas because of the ancient tradition of blessing candles. It is one of the seven principal feasts of the Episcopal Church year."
  },
  "02-03": {
    name: "Anskar, Bishop and Missionary, 865",
    type: "minor",
    readings: { ot: "Genesis 11:1–9", psalms: "Psalm 13", nt: "Acts 1:1-9", gospel: "Mark 6:7-13" },
    collect: "Keep your church from discouragement in the day of small things, O God, in the knowledge that when you have begun a good work, you will bring it to a fruitful conclusion, just as you did for your servant Anskar; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Anskar (801–865) was a Frankish monk who became the first Archbishop of Hamburg and the 'Apostle of the North.' He undertook dangerous missionary journeys to Denmark and Sweden, planting churches often later destroyed by Norse raiders. He was known for his care for the poor and for slaves (whom he bought and freed), and for his constant prayer. He is regarded as the founder of Christianity in Scandinavia, though major Christianization occurred after his death."
  },
  "02-04": {
    name: "Manche Masemola, Martyr, 1928",
    type: "minor",
    readings: { ot: "Ruth 1:8-18", psalms: "Psalm 118:8–14", nt: "James 5:7-11", gospel: "Matthew 19:13–15" },
    collect: "Almighty and Everlasting God, who kindled the flame of your love in the heart of your faithful martyr Manche Masemola: Grant to us your servants, a like faith and power of love, that we who rejoice in her triumph may profit by her example; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Manche Masemola (1913–1928) was a young Pedi woman from South Africa who was beaten to death by her parents for converting to Christianity. Her steadfast faith in the face of intense opposition and her ultimate martyrdom led to her being honored with a statue above the Great West Door of Westminster Abbey among the modern martyrs of the twentieth century."
  },
  "02-05": {
    name: "Agatha of Sicily, Martyr, c.251",
    type: "minor",
    readings: { ot: "Judith 9:1–4, [5–9], 10–14", psalms: "Psalm 125", nt: "Romans 8:31-39", gospel: "Mark 9:42–50" },
    collect: "Almighty and everlasting God, who strengthened your martyr Agatha with constancy and courage: Grant us for the love of you to make no peace with oppression, to fear no adversity, and to have no tolerance for those who would use their power to abuse or exploit; Through Jesus Christ our Lord, to whom with you and the Holy Spirit be all honor and glory, now and for ever. Amen.",
    bio: "Agatha of Sicily (c. 251) was a young Christian woman martyred in Catania, Sicily, during the persecution under the Emperor Decius. According to tradition, she had dedicated her virginity to God and steadfastly rejected the advances of the Roman prefect, enduring severe torture and mutilation of her breasts with absolute courage before dying in prison. She is celebrated in the early church as a primary model of virginity, courage, and martyrdom."
  },
  "02-06": {
    name: "The Martyrs of Japan, 1597",
    type: "minor",
    readings: { ot: "Lamentations 3:52-60", psalms: "Psalm 39:5-8", nt: "Galatians 2:19–3:6", gospel: "Mark 8:34-38" },
    collect: "O God our Father, who brought the holy martyrs of Japan through the suffering of the cross to the joys of eternal life: Grant that we, encouraged by their example, may hold fast to the faith we profess, even unto death itself; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "The Martyrs of Japan (d. 1597) was a group of twenty-six Franciscan and Jesuit missionaries and laypeople, including three young altar boys, who were crucified at Nagasaki under the daimyo Toyotomi Hideyoshi. They were the first Christian martyrs of Japan, demonstrating extraordinary courage and faith as they sang hymns and preached forgiveness from their crosses, planting the seeds of the Japanese church."
  },
  "02-08": {
    name: "Bakhita, (Josephine Margaret Bakhita), Monastic, 1947",
    type: "minor",
    readings: { ot: "Amos 8:4-12", psalms: "Psalm 3", nt: "James 2:1-7", gospel: "Luke 3:1-9" },
    collect: "O God of Love, who delivered your servant Josephine Margaret Bakhita from the bondage of slavery to the true freedom of your service; Grant to the wounded your healing grace in mind, body, and spirit and to your church the zeal to combat exploitation and slavery in all its forms; through Jesus Christ our Lord. Amen.",
    bio: "Josephine Bakhita (c. 1869–1947) was a Sudanese-born Canossian sister who survived enslavement and extreme cruelty before escaping to Italy, where she discovered Christianity and won her legal freedom. Known for her extraordinary forgiveness, humility, and gentle nature, she spent the rest of her life as a vowed religious, serving as a powerful symbol of hope and human dignity."
  },
  "02-10": {
    name: "Scholastica, Monastic, 543",
    type: "minor",
    readings: { ot: "Ecclesiastes 12:1-18", psalms: "Psalm 4:1-5", nt: "Acts 4:32–35", gospel: "Matthew 6:5–8" },
    collect: "Assist us, O God, to love one another as sisters and brothers, and to balance discipline with love and rules with compassion, according to the example shown by your servant Scholastica; for the sake of your Son Jesus Christ our Lord, to whom with you and the Holy Spirit be all honor and glory, now and for ever. Amen.",
    bio: "Scholastica (c. 480–543) was a monastically consecrated virgin and the twin sister of Benedict of Nursia, who established a monastery for women near Monte Cassino. According to Gregory the Great, her deep love and spiritual intimacy with her brother was so great that her prayers once brought a violent storm to prolong their final spiritual conversation, illustrating her saintly devotion."
  },
  "02-11": {
    name: "The Consecration of Barbara Clementine Harris, First Woman Bishop in the Anglican Communion, 1989",
    type: "minor",
    readings: { ot: "Isaiah 58:6–12", psalms: "Psalm 33:18-22", nt: "Philippians 4:1-9", gospel: "Luke 18:1-8" },
    collect: "God of the prophets, we give you thanks for calling Barbara Clementine Harris to the office of bishop. Open our eyes to behold the wondrous works you have prepared for your church in calling women to share in the ministry of the episcopate. May we, inspired by their example as faithful shepherds, wise teachers, courageous prophets, and guardians of the faith, proclaim the Good News and carry out the works of Jesus Christ in the world; who with you and the Holy Spirit lives and reigns for ever and ever. Amen.",
    bio: "Barbara Harris (1930–2020) was the first woman to be consecrated a bishop in the Anglican Communion, serving as Bishop Suffragan of Massachusetts. Throughout her decades of public ministry and advocacy, she was a prophetic and outspoken voice for racial justice, gender equality, civil rights, and the inclusion of marginalized communities in the church."
  },
  "02-12": {
    name: "Theodora, Empress, c.867",
    type: "minor",
    readings: { ot: "1 Samuel 25:2-3, 23-31", psalms: "Psalm 100", nt: "Colossians 1:15–20", gospel: "Luke 17:1-10" },
    collect: "O God, who called your servant Theodora to an earthly throne that she might advance your heavenly kingdom and who gave her the wisdom to establish unity where there had been division; Create in your church such godly union and concord that we might proclaim the Gospel of the Prince of Peace, not only in correct theology but in right actions; through the same Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Theodora (c. 815–867) was an Empress of the Byzantine Empire who brought a definitive end to the second period of Byzantine Iconoclasm in 843. Her restoration of the veneration of icons, celebrated annually as the Triumph of Orthodoxy, preserved the theological legacy of the church and ensured the rich visual spirituality of the Eastern Christian tradition."
  },
  "02-13": {
    name: "Absalom Jones, Priest, 1818",
    type: "minor",
    readings: { ot: "Isaiah 42:5–9", psalms: "Psalm 126", nt: "Galatians 5:1-5", gospel: "John 15:12-15" },
    collect: "Set us free, heavenly Father, from every bond of prejudice and fear; that, honoring the steadfast courage of your servant Absalom Jones, we may show forth in our lives the reconciling love and true freedom of the children of God, which you have given us in your Son our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Absalom Jones (1746–1818) was the first African American to be ordained a priest in the Episcopal Church. Born enslaved in Delaware, he taught himself to read using the New Testament and was eventually freed in 1784. When he and other Black worshippers were pulled from their knees while praying at St. George's Methodist Church, they walked out. He co-founded the Free African Society in 1787 and founded the African Episcopal Church of St. Thomas in 1792. He was ordained priest in 1804 and served his congregation faithfully until his death."
  },
  "02-14": {
    name: "Cyril and Methodius, Missionaries, 869 and 885",
    type: "minor",
    readings: { ot: "Ecclesiastes 4:7-12", psalms: "Psalm 29", nt: "Philippians 1:15–26", gospel: "Mark 16:15–20" },
    collect: "Almighty and everlasting God, who by the power of the Holy Spirit moved your servants Cyril and Methodius to bring the light of the Gospel to a hostile and divided people: Overcome all bitterness and strife among us by the love of Christ, and make us one united family under the banner of the Prince of Peace; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Cyril (826–869) and Methodius (815–885) were Greek brothers known as the 'Apostles of the Slavs.' Sent as missionaries to Moravia in 863, they developed the Glagolitic alphabet (precursor to Cyrillic) to write the Slavic language and translated the scriptures and liturgy into the vernacular — a revolutionary act challenging the Western practice of using only Latin. Vindicated by Pope Hadrian II, their liturgical use of Slavonic laid the foundation for Slavic Christian culture."
  },
  "02-15": {
    name: "Thomas Bray, Priest and Missionary, 1730",
    type: "minor",
    readings: { ot: "Jonah 4:1–11", psalms: "Psalm 85:7–13", nt: "Philippians 2:5-11", gospel: "Luke 5:27-32" },
    collect: "O God of compassion, who opened the heart of your servant Thomas Bray to answer the needs of the church in the New World: Make your church diligent at all times to propagate the Gospel, and to promote the spread of Christian knowledge; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Thomas Bray (1658–1730) was an English priest and missionary who founded the Society for Promoting Christian Knowledge (SPCK) and the Society for the Propagation of the Gospel in Foreign Parts (SPG). His work in establishing libraries, training missionaries, and supporting education across Britain and the American colonies revitalized the global ministry of the Anglican Communion."
  },
  "02-17": {
    name: "Janani Luwum, Archbishop and Martyr, 1977",
    type: "minor",
    readings: { ot: "Ecclesiasticus 4:20–28", psalms: "Psalm 119:129-136", nt: "2 Corinthians 6:1-10", gospel: "John 12:24–32" },
    collect: "O God, whose Son the Good Shepherd laid down his life for his sheep: We give you thanks for your faithful shepherd, Janani Luwum, who after his Savior’s example gave up his life for the sake of his flock. Grant us to be so inspired by his witness that we make no peace with oppression, but live as those who are sealed with the cross of Christ, who died and rose again, and now lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Janani Luwum (c. 1922–1977) was the Archbishop of Uganda, Rwanda, Burundi, and Boga-Zaire, who was murdered by the military regime of Idi Amin for his outspoken defense of human rights and condemnation of state violence. His courageous leadership and ultimate martyrdom drew global attention to the suffering of the Ugandan people, and he is honored among the modern martyrs."
  },
  "02-18": {
    name: "Martin Luther, Pastor and Reformer, 1546",
    type: "minor",
    readings: { ot: "Isaiah 55:6–11", psalms: "Psalm 46", nt: "Romans 3:21-28", gospel: "John 15:1–11" },
    collect: "O God, our refuge and our strength, who raised up your servant Martin Luther to reform and renew your church in the light of your word: Defend and purify the church in our own day and grant that, through faith, we may boldly proclaim the riches of your grace, which you have made known in Jesus Christ our Savior, who with you and the Holy Spirit, lives and reigns, one God, now and for ever. Amen.",
    bio: "Martin Luther (1483–1546) was a German monk, priest, and theology professor whose posting of the Ninety-Five Theses in Wittenberg sparked the Protestant Reformation. His theological keynotes of justification by faith alone (sola fide) and the authority of Scripture (sola scriptura), along with his translation of the Bible into German, reshaped the landscape of Western Christianity."
  },
  "02-19": {
    name: "Agnes Tsao Kou Ying, Agatha Lin Zhao, and Lucy Yi Zhenmei, Catechists and Martyrs, 1856, 1858, and 1862 20 Frederick Douglass, Social Reformer, 1895",
    type: "minor",
    readings: { ot: "Exodus 23:1–9", psalms: "Psalm 25", nt: "2 Corinthians 6:16-18", gospel: "Matthew 25:1–13" },
    collect: "Lord Jesus Christ, who willingly walked the way of the cross: Strengthen your church through the witness of your servants Agnes Tsao Kou Ying, Agatha Lin Zhao, and Lucy Yi Zhenmei to hold fast to the path of discipleship even unto death; for with the Father and Holy Spirit you live and reign, one God, for ever and ever. Amen.",
    bio: "Agnes Tsao Kou Ying, Agatha Lin Zhao, and Lucy Yi Zhenmei was a devout catechists and martyrs, and 20 frederick douglass, social reformer who served the church and community with great distinction in 1856. Grounded in a life of prayer and steadfast faith, their witness and teachings continue to inspire Christians to dedicate all aspects of their lives to the glory of God and the service of others."
  },
  "02-22": {
    name: "Margaret of Cortona, Monastic, 1297",
    type: "minor",
    readings: { ot: "Zephaniah 3:7–13", psalms: "Psalm 30: 6–13", nt: "James 5:1-6", gospel: "Luke 7:36–50" },
    collect: "Grant, O God, to all your people, as to your servant Margaret of Cortona, the spirit of repentance and supplication, that we might seek and desire nothing in this transitory life above you; through Jesus Christ our Lord. Amen.",
    bio: "Margaret of Cortona (1247–1297) was a secular Franciscan penitent who, after a turbulent early life, experienced a profound spiritual conversion and dedicated herself to prayer, severe penance, and works of mercy. She founded a hospital in Cortona for the sick poor and established a congregation of Franciscan sisters, serving as a powerful example of spiritual transformation."
  },
  "02-23": {
    name: "Polycarp of Smyrna, Bishop and Martyr, 156",
    type: "minor",
    readings: { ot: "Numbers 23:5-12", psalms: "Psalm 119:9-16", nt: "Revelation 2:8–11", gospel: "Matthew 20:20–28" },
    collect: "O God, the maker of heaven and earth, you gave your venerable servant, the holy and gentle Polycarp, the boldness to confess Jesus Christ as King and Savior and the steadfastness to die for his faith: Give us grace, following his example, to share the cup of Christ and to rise to eternal life; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Polycarp (c. 69–155) was Bishop of Smyrna and one of the great figures of second-century Christianity. A disciple of the apostle John and companion of eyewitnesses to Jesus, his letter to the Philippians survives as an important early Christian document. When Roman authorities demanded he deny Christ, he famously replied: 'Eighty-six years I have served him, and he has done me no wrong. How can I blaspheme my King who saved me?' He was burned at the stake, and his Martyrdom is the earliest such account outside the New Testament."
  },
  "02-24": {
    name: "Saint Matthias the Apostle",
    type: "major",
    readings: {
      morning: { ot: "1 Samuel 16:1-13", nt: "Acts 1:15-26", gospel: "John 15:1-11", psalms: "Psalm 80" },
      evening: { ot: "Isaiah 22:15-25", nt: "Ephesians 2:19-22", gospel: "Matthew 7:15-27", psalms: "Psalm 33" }
    },
    collect: "Almighty God, who into the place of Judas chose your faithful servant Matthias to be of the number of the Twelve: Grant that your Church, being delivered from false apostles, may always be guided and governed by faithful and true pastors; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Saint Matthias was, according to the Acts of the Apostles, chosen by the remaining eleven Apostles to replace Judas Iscariot following Judas' betrayal of Jesus and subsequent death. The selection was made by casting lots between Matthias and Joseph called Barsabbas, after prayer for guidance. Matthias had been a follower of Jesus since his baptism by John and was a witness to the Resurrection. Tradition states that he preached the Gospel in Judea and Colchis (modern-day Georgia), where he was eventually martyred."
  },
  "02-25": {
    name: "Emily Malbone Morgan, Lay Leader and Contemplative, 1937",
    type: "minor",
    readings: { ot: "2 Samuel 14:12–17", psalms: "Psalm 119:137–144", nt: "Romans 16:1-6", gospel: "Luke 10:38–42" },
    collect: "Inspire us, Gracious God, with that same spirit of devotion that animated your servant Emily Malbone Morgan; that, like her, we might dedicate our lives to your service and to the welfare of others; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Emily Malbone Morgan (1862–1937) was an American lay leader, author, and contemplative who founded the Society of the Companions of the Holy Cross. She dedicated her life to creating a community of women focused on intercessory prayer, social justice, and international peace, establishing a permanent house of retreat and prayer in South Byfield, Massachusetts."
  },
  "02-26": {
    name: "Photini, The Samaritan Woman, c.67",
    type: "minor",
    readings: { ot: "Genesis 24:12–20", psalms: "Psalm 119:73-80", nt: "Colossians 2:16-23", gospel: "John 4:4–26" },
    collect: "O Almighty God, whose most blessed Son revealed to the Samaritan woman that He is indeed the Christ, the Savior of the World; Grant us to drink of the well that springs up to everlasting life that we may worship you in spirit and in truth through your Son, Jesus Christ our Lord. Amen.",
    bio: "Photini, historically identified as the Samaritan Woman whom Jesus met at Jacob's Well in John 4, is celebrated as a powerful early Christian evangelist. According to tradition, her encounter with Christ transformed her into a bold witness who traveled widely preaching the gospel, eventually suffering martyrdom under the Emperor Nero."
  },
  "02-27": {
    name: "George Herbert, Priest and Poet, 1633",
    type: "minor",
    readings: { ot: "Ecclesiastes 4:13–5:7", psalms: "Psalm 23", nt: "2 Corinthians 4:16-18", gospel: "Mark 9:2–8" },
    collect: "Almighty God, who called your servant George Herbert from the pursuit of worldly honors to be a poet and a pastor of souls: Give us grace, we pray, joyfully to dedicate all our powers to your service; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "George Herbert (1593–1633) was an English priest, orator, and one of the greatest devotional poets in the English language, who spent his final years serving a small rural parish in Bemerton. His collection of poems, 'The Temple,' and his handbook on pastoral care, 'The Country Parson,' reflect his profound humility, deep love for the liturgy, and absolute dedication to serving God in all things."
  },
  "02-28": {
    name: "Anna Julia Haywood Cooper, Educator, 1964",
    type: "minor",
    readings: { ot: "Proverbs 9:7–12", psalms: "Psalm 10:15-19", nt: "1 Timothy 4:6-16", gospel: "Luke 4:38-42" },
    collect: "Almighty God, who inspired your servant Anna Julia Haywood Cooper with the love of learning and the skill of teaching: Enlighten us more and more through the discipline of learning, and deepen our commitment to the education of all your children; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Anna Julia Cooper (1858–1964) was an American author, educator, and one of the most prominent African American scholars and social reformers in US history. The fourth African American woman to earn a doctoral degree, she spent her life advocating for the education of Black women, racial equality, and social justice, articulating her vision in the classic text 'A Voice from the South.'"
  },
  "03-01": {
    name: "David of Wales, Bishop, c.544",
    type: "minor",
    readings: { ot: "Proverbs 15:14-21", psalms: "Psalm 135:13-21", nt: "1 Thessalonians 2:7b–12", gospel: "Mark 4:26–29" },
    collect: "Almighty God, who called your servant David to be a faithful and wise steward of your mysteries for the people of Wales: Mercifully grant that, following his purity of life and zeal for the Gospel of Christ, we may, with him, praise you both here on earth and also in your everlasting kingdom; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "David (died c. 589) is the patron saint of Wales. He founded a monastic community at Menevia (now St. David's in Pembrokeshire) which became an important center of learning. He presided over the Synod of Brefi around 545 and was known for his austere lifestyle — his monks drank only water and ate no meat. He is said to have died with the words 'Be joyful, brothers and sisters. Keep your faith, and do the little things that you have seen and heard with me.'"
  },
  "03-02": {
    name: "Chad, Bishop of Lichfield, 672",
    type: "minor",
    readings: { ot: "Leviticus 10:1–3", psalms: "Psalm 103:13-18", nt: "Philippians 4:10-13", gospel: "Luke 14:1–14" },
    collect: "Heavenly Father, whose son our Lord Jesus Christ took the form of a servant for the sake of his brothers and sisters: Strengthen us with the prayers and example of your servant Chad, who became the least of all to minister to all; through the same Christ our Lord, who lives and reigns, with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Chad (died 672) was an Anglo-Saxon monk and bishop renowned for his humility. When Archbishop Theodore of Canterbury determined that Chad's episcopal consecration had been irregular, Chad humbly submitted and stepped down. Theodore was so impressed that he immediately consecrated Chad as Bishop of Mercia. Chad served this vast diocese with extraordinary energy, often traveling on foot rather than on horseback, until his death from plague in 672."
  },
  "03-03": {
    name: "John and Charles Wesley, Priests, 1791, 1788",
    type: "minor",
    readings: { ot: "Isaiah 6:1–8", psalms: "Psalm 129", nt: "Romans 12:11-17", gospel: "Luke 9:1–6" },
    collect: "Lord God, you inspired your servants John and Charles Wesley with burning zeal for the sanctification of souls and endowed them with eloquence in speech and song: Kindle such fervor in your church, we entreat you, that those whose faith has cooled may be warmed, and those who have not known Christ may turn to him and be saved; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "John Wesley (1703–1791) and Charles Wesley (1707–1788) were Anglican priests and brothers who led the Methodist revival within the Church of England. John was a tireless itinerant preacher and organizer who spread the gospel across Britain and America, while Charles was a prolific hymnwriter who composed over 6,500 hymns, including 'Hark! the Herald Angels Sing,' expressing profound theology in song."
  },
  "03-07": {
    name: "Perpetua and Felicity, Martyrs, 202",
    type: "minor",
    readings: { ot: "Daniel 6:10-16", psalms: "Psalm 124", nt: "Hebrews 10:32–39", gospel: "Matthew 24:9–14" },
    collect: "O God, the King of Saints, who strengthened your servants Perpetua, Felicity, and their companions to make a good confession and to encourage one another in the time of trial: Grant that we who cherish their blessed memory may share their pure and steadfast faith, and win with them the palm of victory; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Vibia Perpetua was a twenty-two-year-old noblewoman martyred in Carthage in 203, along with her slave Felicitas and three other catechumens. Her account of her imprisonment and visions is one of the earliest surviving writings by a Christian woman, remarkable for its spiritual depth and psychological honesty. Though her father pleaded with her to deny her faith for her infant son's sake, she refused. Felicitas gave birth to a daughter two days before their execution so both women could share martyrdom together."
  },
  "03-09": {
    name: "Gregory of Nyssa, Bishop and Theologian, c.394",
    type: "minor",
    readings: { ot: "Wisdom 7:24–8:1", psalms: "Psalm 8", nt: "Ephesians 2:17-22", gospel: "John 14:23–26" },
    collect: "Almighty God, who has revealed to your Church your eternal Being of glorious majesty and perfect love as one God in Trinity of Persons: Give us grace that, like your bishop Gregory of Nyssa, we may continue steadfast in the confession of this faith, and constant in our worship of you, Father, Son and Holy Spirit; who live and reign for ever and ever. Amen.",
    bio: "Gregory of Nyssa (c. 335–395) was a saintly Bishop of Nyssa, a younger brother of Basil the Great, and one of the Cappadocian Fathers. A brilliant mystical theologian, he made monumental contributions to the defense of the Trinity and the divinity of the Holy Spirit at the Council of Constantinople, and wrote extensively on the soul's infinite ascent into the divine mystery."
  },
  "03-10": {
    name: "Harriet Ross Tubman, Social Reformer, 1923",
    type: "minor",
    readings: { ot: "Judges 9:50–55", psalms: "Psalm 102:18-28", nt: "James 2:14-17", gospel: "Luke 11:5–10" },
    collect: "O God, whose Spirit guides us into all truth and makes us free: Strengthen and sustain us as you did your servant Harriet Ross Tubman. Give us vision and courage to stand against oppression and injustice and all that works against the glorious liberty to which you call all your children; through Jesus Christ our Savior, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Harriet Tubman (c. 1822–1913) was a heroic abolitionist, political activist, and Underground Railroad conductor who escaped slavery and subsequently led dozens of enslaved people to freedom. During the American Civil War, she served as an armed scout and spy for the Union Army, leading the Combahee Ferry Raid which liberated over 700 enslaved people, and spent her later years advocating for women's suffrage."
  },
  "03-12": {
    name: "Gregory the Great, Bishop and Theologian, 604",
    type: "minor",
    readings: { ot: "Genesis 18:1–15", psalms: "Psalm 66:1-8", nt: "Colossians 1:28-2:3", gospel: "Mark 10:42–45" },
    collect: "Almighty and merciful God, you raised up Gregory of Rome to be a servant of the servants of God, and inspired him to send missionaries to preach the Gospel to the English people: Preserve your church in the catholic and apostolic faith, that your people, being fruitful in every good work, may receive the crown of glory that never fades away; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Gregory I (c. 540–604), known as Gregory the Great, was a Roman prefect who became a monk and later served as Bishop of Rome. A prolific theologian and administrator, he reformed the liturgy, promoted monasticism, sent the Gregorian mission to convert the Anglo-Saxons, and is widely remembered for his pastoral text, the 'Regula Pastoralis,' and his humility as the 'servant of the servants of God.'"
  },
  "03-13": {
    name: "James Theodore Holly, Bishop, 1911",
    type: "minor",
    readings: { ot: "Deuteronomy 6:20–25", psalms: "Psalm 86:11–17", nt: "Acts 8:26-39", gospel: "John 4:31–38" },
    collect: "Most gracious God, whose servant James Theodore Holly labored to build a church in which all might be free: Grant that we might overcome our prejudice, and honor those whom you call from every family, language, people, and nation; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "James Theodore Holly (1829–1911) was the first African American bishop in the Episcopal Church, who emigrated to Haiti to establish a mission that grew into the Orthodox Apostolic Church of Haiti. Throughout his life of heroic missionary service, he was a tireless advocate for racial justice, Pan-Africanism, and the spiritual and social uplift of the Haitian people."
  },
  "03-15": {
    name: "Vincent De Paul, Priest, 1660 and Louise De Marillac, Vowed Religious, 1660, Workers of Charity, 1660",
    type: "minor",
    readings: { ot: "Micah 3:1-12", psalms: "Psalm 37:1-17", nt: "Philippians 2:12–15", gospel: "Matthew 18:18-20" },
    collect: "Most Gracious God, who has bidden us to act justly, love mercy, and walk humbly before you; Teach us, like your servants Vincent de Paul and Louise de Marillac, to see and to serve Christ by feeding the hungry, welcoming the stranger, clothing the naked, and caring for the sick; that we may know him to be the giver of all good things, through the same Jesus Christ our Lord. Amen.",
    bio: "Vincent de Paul (1581–1660) and Louise de Marillac (1591–1660) were French Roman Catholics who dedicated their lives to serving the sick, poor, and marginalized. They co-founded the Daughters of Charity, a unique congregation of non-cloistered religious sisters who worked directly in hospitals, prisons, and streets, establishing a lasting legacy of compassionate social service."
  },
  "03-17": {
    name: "Patrick of Ireland, Bishop and Missionary, 461",
    type: "minor",
    readings: { ot: "Ezekiel 36:33-38", psalms: "Psalm 97", nt: "1 Thessalonians 2:1–8", gospel: "Matthew 28:16–20" },
    collect: "Almighty God, in your providence you chose your servant Patrick to be the apostle to the Irish people, to bring those who were wandering in darkness and error to the true light and knowledge of you: Grant us so to walk in that way that we may come at last to the light of everlasting life; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Patrick (c. 387–461) was born in Roman Britain and captured by Irish raiders at sixteen, serving as a slave for six years. After escaping to Britain, he felt called to return to Ireland as a missionary. Ordained bishop around 432, he spent the rest of his life evangelizing Ireland, baptizing thousands, ordaining clergy, and establishing monasteries. His Confession and Letter to Coroticus are the earliest surviving documents from Irish Christianity. He is credited with abolishing human sacrifice in Ireland."
  },
  "03-18": {
    name: "Cyril of Jerusalem, Bishop and Theologian, 386",
    type: "minor",
    readings: { ot: "Ecclesiasticus 47:2–10", psalms: "Psalm 29", nt: "Hebrews 13:14-21", gospel: "Mark 9:38–41" },
    collect: "Strengthen, O God, your Church in the sacraments of your grace, that we, in union with the teaching and prayers of your servant Cyril of Jerusalem, may enter more fully into your Paschal mystery; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Cyril of Jerusalem (c. 313–386) served as Bishop of Jerusalem from around 349. His tenure was marked by constant conflict with Arian bishops and emperors who exiled him three times. His Catechetical Lectures, delivered to those preparing for baptism, provide an invaluable picture of fourth-century Christian worship and theology. He is remembered for his emphasis on the real presence of Christ in the Eucharist and for his vivid descriptions of the ceremonies at the Jerusalem holy sites."
  },
  "03-19": {
    name: "Saint Joseph",
    type: "major",
    readings: {
      morning: { ot: "2 Samuel 7:4, 8-16", nt: "Romans 4:13-18", gospel: "Luke 2:41-52", psalms: "Psalm 89:1-29" },
      evening: { ot: "Isaiah 63:7-16", nt: "Hebrews 7:1-17", gospel: "Matthew 1:18-25", psalms: "Psalm 132" }
    },
    collect: "O God, who from the family of your servant David raised up Joseph to be the guardian of your incarnate Son and the spouse of his virgin mother: Give us grace to imitate his uprightness of life and his obedience to your commands; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Saint Joseph was the husband of Mary and earthly father of Jesus. A carpenter from Nazareth and descendant of King David, the New Testament portrays him as a righteous man. When he learned of Mary's unexpected pregnancy, he initially decided to divorce her quietly rather than expose her to shame. After an angel appeared in a dream, he took Mary as his wife, received Jesus as his own, and named him. He figures in the accounts of Jesus's birth and childhood but disappears before the public ministry, suggesting he died during those years."
  },
  "03-20": {
    name: "Cuthbert, Bishop, 687",
    type: "minor",
    readings: { ot: "Job 38:1, 12-21", psalms: "Psalm 23", nt: "2 Corinthians 6:1–10", gospel: "Luke 5:12-16" },
    collect: "Merciful God, who called Cuthbert from following the flock to be a shepherd of your people: Mercifully grant that we also may go without fear to dangerous and remote places, to seek the indifferent and the lost; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Cuthbert (c. 634–687) was an Anglo-Saxon monk who became the most celebrated saint of northern England. After a vision of Aidan's soul ascending to heaven, he joined Melrose monastery, later moving to Lindisfarne. Known for miraculous healings and power over nature, he became a hermit on Farne Island in 676. Despite his love of solitude, he was elected Bishop of Lindisfarne in 684. After his death, his body was carried by monks for years during Danish raids until it came to rest at Durham, where the great cathedral was built over his tomb."
  },
  "03-21": {
    name: "Thomas Ken, Bishop of Bath and Wells, 1711",
    type: "minor",
    readings: { ot: "Deuteronomy 26:16-19", psalms: "Psalm 22:26-30", nt: "Philippians 4:4–9", gospel: "Luke 19:1-9" },
    collect: "Almighty God, you gave your servant Thomas Ken grace and courage to bear witness to the truth before rulers and kings: Give us strength also that we may constantly defend what is right, boldly reprove what is evil, and patiently suffer for the truth’s sake; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Thomas Ken (1637–1711) was Bishop of Bath and Wells and one of the 'Seven Bishops' tried for refusing to sign King James II's Declaration of Indulgence. He is best remembered for his Morning and Evening Hymns, which concluded with the Doxology ('Praise God, from whom all blessings flow'). When William and Mary came to power, Ken refused to take the oath of allegiance and was deprived of his bishopric, living in poverty for the last twenty years of his life, sustained by friends who admired his integrity."
  },
  "03-22": {
    name: "James De Koven, Priest, 1879",
    type: "minor",
    readings: { ot: "Exodus 24:1-8", psalms: "Psalm 84:7–12", nt: "2 Timothy 2:10–15", gospel: "Luke 16:1-15" },
    collect: "Almighty and everlasting God, who led your servant James DeKoven to honor your presence at the altar, and constantly to point to Christ: Grant that all ministers and stewards of your mysteries may impart to your faithful people the knowledge of your presence and the truth of your grace; through the same Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "James De Koven (1831–1879) was a priest, educator, and leading figure in the Catholic revival within the Episcopal Church. He served as warden of Racine College in Wisconsin. At the General Conventions of 1871 and 1874, he made impassioned speeches defending ritual practices associated with the Oxford Movement. Though twice denied election as bishop, his eloquence and learning helped secure a more tolerant attitude toward ceremonial worship in the Episcopal Church."
  },
  "03-23": {
    name: "Gregory the Illuminator, Bishop and Missionary, c.332",
    type: "minor",
    readings: { ot: "Ecclesiastes 2:1-11", psalms: "Psalm 33:6–11", nt: "Acts 17:22–31", gospel: "Mark 2:18–22" },
    collect: "Almighty God, who raised up your servant Gregory to be a light in the world, and to preach the Gospel to the people of Armenia: Illuminate our hearts, that we also in our own generation may show forth your praise, who called us out of darkness and into your marvelous light; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Gregory the Illuminator (c. 257–331) is the patron saint of Armenia and founder of the Armenian Apostolic Church. He was imprisoned for thirteen years by King Tiridates III. When Tiridates became seriously ill, he was healed by Gregory, who then baptized him — making Armenia the first nation to adopt Christianity as its state religion, in 301. Gregory is called 'the Illuminator' because he brought the light of Christian faith to the Armenian people."
  },
  "03-24": {
    name: "O&#769;scar Romero, Archbishop and Martyr, 1980, and the Martyrs of El Salvador",
    type: "minor",
    readings: { ot: "1 Kings 21:1–19", psalms: "Psalm 31:15–24", nt: "Revelation 7:13-17", gospel: "John 12:20–26" },
    collect: "Almighty God, you called your servant Óscar Romero to be a voice for the voiceless poor, and to give his life as a seed of freedom and a sign of hope: Grant that we, inspired by his sacrifice and the example of the martyrs of El Salvador, may without fear or favor witness to your Word who abides, your Word who is Life, even Jesus Christ our Lord, to whom, with you and the Holy Spirit, be praise and glory now and for ever. Amen.",
    bio: "Óscar Romero (1917–1980) was the Archbishop of San Salvador who became a powerful 'voice for the voiceless' amid civil conflict, advocating for human rights and social justice. Guided by the gospel call to love the poor, he was assassinated while celebrating Mass in a hospital chapel, becoming a modern martyr for the peace and justice of Christ's kingdom."
  },
  "03-25": {
    name: "The Annunciation of Our Lord Jesus Christ to the Blessed Virgin Mary",
    type: "major",
    readings: {
      morning: { ot: "Isaiah 7:10-14", nt: "Hebrews 10:4-10", gospel: "Luke 1:26-38", psalms: "Psalm 40" },
      evening: { ot: "Isaiah 52:7-12", nt: "Galatians 4:4-7", gospel: "Matthew 1:18-25", psalms: "Psalm 65" }
    },
    collect: "Pour your grace into our hearts, O Lord, that we who have known the incarnation of your Son Jesus Christ, announced by an angel to the Virgin Mary, may by his cross and passion be brought to the glory of his resurrection; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "The Annunciation commemorates the visit of the angel Gabriel to the Virgin Mary announcing that she would conceive and bear the Son of God. Mary's consent — 'Let it be to me according to your word' — is understood as the moment of the Incarnation. Celebrated nine months before Christmas, this feast marks both the beginning of the Incarnation and the beginning of Mary's unique role as Theotokos (God-bearer). It is one of the seven principal feasts of the church year."
  },
  "03-26": {
    name: "Harriet Monsell, Monastic, 1883",
    type: "minor",
    readings: { ot: "Isaiah 66:1–4", psalms: "Psalm 133", nt: "1 Timothy 6:6-10", gospel: "John 3:25–30" },
    collect: "Gracious God, who led your servant Harriet Monsell through grief to a new vocation; grant that we, inspired by her example, may grow in the life of prayer and the work of service so that in sorrow or joy, your presence may increase among us and our lives reveal the mind of Jesus Christ, to whom, with you and the Holy Spirit be honor and glory, now and for ever. Amen.",
    bio: "Harriet Monsell (1811–1883) was the founding Superior of the Community of St. John Baptist in Clewer, England, one of the earliest revived religious sisterhoods in the Anglican Communion. Under her loving and energetic leadership, the community expanded rapidly, dedicating itself to the rehabilitation of marginalized women, orphanages, schools, and hospitals."
  },
  "03-27": {
    name: "Charles Henry Brent, Bishop, 1929",
    type: "minor",
    readings: { ot: "Isaiah 56:6-8", psalms: "Psalm 122", nt: "Ephesians 4:1–6", gospel: "Matthew 9:35–38" },
    collect: "Heavenly Father, whose Son prayed that we all might be one: Deliver us from arrogance and prejudice, and give us wisdom and forbearance, that, following your servant Charles Henry Brent, we may be united in one family with all who confess the Name of your Son Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Charles Henry Brent (1862–1929) was one of the founders of the modern ecumenical movement. He served as the first Bishop of the Philippines (1901–1918) where he effectively combated the opium trade. Inspired by the Edinburgh World Missionary Conference (1910), he became the driving force behind the Faith and Order movement, which eventually merged with Life and Work to form the World Council of Churches. He chaired the first World Conference on Faith and Order in Lausanne in 1927."
  },
  "03-28": {
    name: "James Solomon Russell, Priest, 1935",
    type: "minor",
    readings: { ot: "1 Kings 5:1–12", psalms: "Psalm 127", nt: "1 Timothy 6:11-16", gospel: "Matthew 18:12-20" },
    collect: "O God, the font of resurrected life, draw us into the wilderness and speak tenderly to us, so that we might love and worship you as your servant James Solomon Russell did, in assurance of the saving grace of Jesus Christ, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "James Solomon Russell (1857–1935) was a pioneering African American priest and educator born into slavery, who founded Saint Paul's Normal and Industrial School (now St. Paul's College) in Lawrenceville, Virginia. Throughout his decades of public ministry, he worked tirelessly to provide quality education and spiritual care to Black students in the South."
  },
  "03-29": {
    name: "John Keble, Priest and Poet, 1866",
    type: "minor",
    readings: { ot: "Jeremiah 18:1-11", psalms: "Psalm 150", nt: "Romans 12:9–21", gospel: "Mark 1:9–13" },
    collect: "Grant, O God, that in all time of our testing we may know your presence and obey your will, that, following the example of your servant John Keble, we may accomplish with integrity and courage what you give us to do and endure what you give us to bear; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "John Keble (1792–1866) was an English priest, theologian, and poet whose Assize Sermon on 'National Apostasy' in 1833 launched the Oxford Movement, which sought to recover the Catholic heritage of the Church of England. The author of the highly popular poetry collection 'The Christian Year,' his life of quiet devotion and academic brilliance revitalized Anglican theology and pastoral practice."
  },
  "03-30": {
    name: "Mary of Egypt, Monastic, c.421",
    type: "minor",
    readings: { ot: "Hosea 11:1-4", psalms: "Psalm 48:8-14", nt: "Hebrews 11:32–40", gospel: "John 8:1–11" },
    collect: "Merciful Lord, who raises up sinners by your boundless compassion and mercy: Cause the desert sun to burn away our coarseness and to melt our hardness of heart, that, like your servant Mary of Egypt, we may not depart from this life until we understand the ways of repentance and the benefits of prayer; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Mary of Egypt (c. 344–421) was an early Christian ascetic who, after a dissolute youth in Alexandria, experienced a profound spiritual conversion in Jerusalem and withdrew into the Judean Desert. She spent forty-seven years in absolute solitude, prayer, and severe penance, and is celebrated as a patron saint of penitents and a model of radical spiritual transformation."
  },
  "03-31": {
    name: "John Donne, Priest and Poet, 1631",
    type: "minor",
    readings: { ot: "Ecclesiastes 9:1–12", psalms: "Psalm 16", nt: "1 Corinthians 15:20-28", gospel: "John 5:19–24" },
    collect: "O God of etermal glory, whom no one living can see and yet whom to see is to live; grant that with your servant John Donne, we may see your glory in the face of your Son, Jesus Christ, and then, with all our skill and wit, offer you our crown of prayer and praise, until by his grace we stand in that last and everlasting day, when death itself wll die, and all will live in you, who with the Holy Spirit and the same Lord Jesus Christ are one God in everlasting light and glory. Amen.",
    bio: "John Donne (1572–1631) was a legendary English poet and the Dean of St. Paul's Cathedral in London, celebrated as one of the greatest of the Metaphysical poets and preachers. His sermon collections and Holy Sonnets, written with intense intellectual passion and emotional depth, explored themes of sin, mortality, and the overwhelming mercy of God."
  },
  "04-01": {
    name: "Frederick Denison Maurice, Priest 1872",
    type: "minor",
    readings: { ot: "Numbers 21:4–9", psalms: "Psalm 145", nt: "Acts 2:42-47", gospel: "John 18:33–37" },
    collect: "Almighty God, who has restored our human nature to heavenly glory through the perfect obedience of our Savior Jesus Christ: Enliven in your Church, we pray, the passion for justice and truth, that, like your servant Frederick Denison Maurice, we may work and pray for the triumph of the kingdom of Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Frederick Denison Maurice (1805–1872) was an Anglican theologian and founder of Christian Socialism. He was dismissed from King's College London in 1853 for denying the eternity of punishment. With Charles Kingsley he established the Working Men's College in London in 1854. His theological work challenged the social complacency of Victorian Christianity and insisted that the Church's mission was the redemption of all human society, not merely individual salvation."
  },
  "04-02": {
    name: "James Lloyd Breck, Priest, 1876",
    type: "minor",
    readings: { ot: "Joshua 24:14-18", psalms: "Psalm 119:145-152", nt: "1 Corinthians 3:1-7", gospel: "Luke 7:1-10" },
    collect: "O God, who sent your Son to preach peace to those who are far off and to those who are near: call us from comfortable complacency to preach, teach, and plant your church on new frontiers, after the example of your servant James Lloyd Breck; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "James Lloyd Breck (1818–1876) was an Episcopal priest, missionary, and educator who founded numerous parishes, schools, and seminaries, including Nashotah House in Wisconsin and Seabury Divinity School in Minnesota. Known as the 'Apostle of the Wilderness,' he spent his life establishing missions among Native Americans and settlers on the American frontier."
  },
  "04-03": {
    name: "Richard of Chichester, Bishop, 1253",
    type: "minor",
    readings: { ot: "Proverbs 16:16-20", psalms: "Psalm 101:1-4", nt: "Jude 17–25", gospel: "Luke 3:7–14" },
    collect: "Almighty and most merciful God, who calls your people to yourself, we pray that, following the example of your bishop Richard of Chichester, we may see your Son Jesus Christ more clearly, love him more dearly, and follow him more nearly; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Richard of Chichester (1197–1253) was a saintly Bishop of Chichester known for his academic brilliance, personal austerity, and dedicated defense of the rights of the clergy and the poor. A popular preacher and teacher, he is best remembered for his famous personal prayer: 'to see thee more clearly, love thee more dearly, and follow thee more nearly, day by day.'"
  },
  "04-04": {
    name: "Martin Luther King, Jr., Pastor and Martyr, 1968",
    type: "minor",
    readings: { ot: "Exodus 3:7–12", psalms: "Psalm 77:11–20", nt: "Ephesians 6:10-20", gospel: "Luke 6:27–36" },
    collect: "Almighty God, by the hand of Moses your servant you led your people out of slavery, and made them free at last: Grant that your church, following the example of your prophet Martin Luther King, may resist oppression in the name of your love, and may strive to secure for all your children the blessed liberty of the Gospel of Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Martin Luther King, Jr. (1929–1968) was a Baptist minister, theologian, and Nobel Peace Prize laureate who became the preeminent leader of the American civil rights movement. Grounded in Christian love and nonviolent resistance, he led historic campaigns against racial segregation and injustice, delivering his prophetic vision of a beloved community before being assassinated in Memphis, Tennessee."
  },
  "04-05": {
    name: "Harriet Starr Cannon, Monastic, 1896",
    type: "minor",
    readings: { ot: "Wisdom 16:20-26", psalms: "Psalm 131", nt: "Hebrews 13:7–16", gospel: "Mark 9:33–37" },
    collect: "Gracious God, who called Harriet Starr Cannon and her companions to revive the monastic vocation in the Episcopal Church and to dedicate their lives to you: Grant that we, after their example, may ever surrender ourselves to the revelation of your holy will; through our Lord and Savior Jesus Christ, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Harriet Starr Cannon (1823–1896) was the first Mother Superior of the Sisterhood of St. Mary, one of the first monastic orders for women established in the Episcopal Church. Under her visionary and courageous leadership, the sisters founded schools, orphanages, and hospitals, including a heroic ministry during the yellow fever epidemic in Memphis, Tennessee."
  },
  "04-07": {
    name: "Tikhon, Bishop and Ecumenist, 1925",
    type: "minor",
    readings: { ot: "Jeremiah 31:10–14", psalms: "Psalm 72", nt: "2 Peter 1:3-11", gospel: "Matthew 21:28-32" },
    collect: "Holy God, holy and mighty, you call us together into one communion and fellowship: Open our eyes, we pray, as you opened the eyes of your servant Tikhon, that we may see the faithfulness of others as we strive to be steadfast in the faith delivered unto us, that the world may see and know you; through Jesus Christ our Lord, to whom, with you and the Holy Spirit, be glory and praise unto ages of ages. Amen.",
    bio: "Tikhon of Moscow (1865–1925) was a Russian bishop who served as Bishop of the Aleutians and Alaska, establishing the headquarters of the Russian Orthodox Church in North America. Later elected Patriarch of Moscow during the Bolshevik Revolution, he courageously defended the independence of the church and suffered house arrest and persecution for his faith."
  },
  "04-08": {
    name: "William Augustus Muhlenberg, Priest, 1877",
    type: "minor",
    readings: { ot: "Isaiah 63:7-9", psalms: "Psalm 100", nt: "James 1:12–18", gospel: "Matthew 21:12–16" },
    collect: "Open the eyes of your church, O Lord, to the plight of the poor and neglected, the homeless and destitute, the old and the sick, the lonely and those who have none to care for them. Give to us the vision and compassion with which you so richly endowed your servant William Augustus Muhlenberg, that we may labor tirelessly to heal those who are broken in body or spirit, and to turn their sorrow into joy; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "William Augustus Muhlenberg (1796–1877) was a saintly Episcopal priest and educator who played a key role in the Christian social movement. He founded St. Paul's College in Long Island, established St. Luke's Hospital in New York, and pioneered the free church movement, working to make church pews free to all people regardless of income."
  },
  "04-09": {
    name: "Dietrich Bonhoeffer, Pastor and Theologian, 1945",
    type: "minor",
    readings: { ot: "Judges 7:1–8a", psalms: "Psalm 119:81-88", nt: "Romans 6:3-11", gospel: "Matthew 13:47–52" },
    collect: "Embolden our lives, O Lord, and inspire our faiths, that we, following the example of your servant Dietrich Bonhoeffer, might embrace your call with undivided hearts; through Jesus Christ our Savior, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Dietrich Bonhoeffer (1906–1945) was a German Lutheran pastor, theologian, and anti-Nazi dissident who became one of the most influential Christian witnesses of the twentieth century. A founding member of the Confessing Church, he wrote 'The Cost of Discipleship' and 'Life Together.' Returning to Germany from safety in America in 1939 because he could not share in rebuilding Germany without sharing in its suffering, he joined the resistance movement. He was arrested by the Gestapo in 1943 and executed at Flossenbürg concentration camp on April 9, 1945, weeks before the end of the war."
  },
  "04-10": {
    name: "William Law, Priest, 1761",
    type: "minor",
    readings: { ot: "Ecclesiasticus 1:11-20", psalms: "Psalm 128", nt: "2 Peter 1:3–11", gospel: "Matthew 6:1–8" },
    collect: "Almighty God, whose servant William Law taught us to hear and follow your call to a devout and holy life: Grant that we, loving you above all things and in all things, may seek your purpose and shape our actions to your will, that we may grow in all virtue and be diligent in prayer all the days of our lives, through Jesus Christ our Lord, to whom with you and the Holy Spirit be all honor and glory now and for ever. Amen.",
    bio: "William Law (1686–1761) was an English priest, theologian, and spiritual writer who lost his academic post for refusing to take an oath of allegiance to the Hanoverian monarchs. He is best remembered for his classic devotional book, 'A Serious Call to a Devout and Holy Life,' which deeply influenced John and Charles Wesley and emphasized the absolute dedication of all aspects of life to God."
  },
  "04-11": {
    name: "George Augustus Selwyn, Bishop, 1878",
    type: "minor",
    readings: { ot: "Ecclesiasticus 1:1-10", psalms: "Psalm 21:1-4", nt: "Ephesians 2:8–10", gospel: "Matthew 10:7–16" },
    collect: "Almighty and everlasting God, whose servant George Augustus Selwyn laid a firm foundation for the growth of your church in many nations: Raise up in this and every land evangelists and heralds of your kingdom, that your church may proclaim the unsearchable riches of our Lord Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "George Augustus Selwyn (1809–1878) was the first Anglican Bishop of New Zealand, who traveled extensively by foot and boat to minister to both the European settlers and the indigenous Māori people. A key figure in establishing the self-governing synodical structure of the Anglican Communion, he later returned to England to serve as Bishop of Lichfield."
  },
  "04-14": {
    name: "Zenaida, Philonella, and Hermione, Unmercenary Physicians, c.100, c.117",
    type: "minor",
    readings: { ot: "Ecclesiasticus 38:1–15", psalms: "Psalm 147", nt: "Acts 2:43-47", gospel: "Mark 1:29–34" },
    collect: "Merciful God, whose most dear Son came to heal the sick, raise the dead, cast out demons, and preach good news to the poor: Lead us by the example of your servants, Zenaida, Philonella, and Hermione, to freely give even as we have freely received; through Jesus Christ our Lord. Amen.",
    bio: "Zenaida, Philonella, and Hermione (c. 100) are recognized in the early church as 'unmercenary physicians' who combined medical care with Christian evangelism and prayer, refusing to accept payment from their patients. Relatives of the Apostle Paul, they established clinics and dedicated their lives to healing the sick and preaching the gospel."
  },
  "04-15": {
    name: "Damien, Priest, 1889 and Marianne Cope, Monastic, 1918 of Hawaii",
    type: "minor",
    readings: { ot: "Isaiah 57:14–19", psalms: "Psalm 32:7-12", nt: "1 Corinthians 4:9-13", gospel: "Matthew 11:1–6" },
    collect: "Bind up the wounds of your children, O God, and help us to be bold and loving in service to all who are shunned for the diseases they suffer, following the example of your servants Damien and Marianne, that your grace may be poured forth upon all; through Jesus Christ our Lord, who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
    bio: "Father Damien De Veuster (1840–1889) and Mother Marianne Cope (1838–1918) were heroic missionaries who dedicated their lives to serving the isolated colony of people suffering from leprosy (Hansen's disease) on the Kalaupapa Peninsula of Molokai, Hawaii. Damien contracted and died of the disease after sixteen years of labor, and Marianne continued his work, building schools and caring for the patients with deep love."
  },
  "04-16": {
    name: "Peter Williams Cassey, Deacon, 1917 and Annie Besant Cassey, 1875",
    type: "minor",
    readings: { ot: "Proverbs 22:1–9", psalms: "Psalm 13", nt: "Romans 8:31-39", gospel: "Matthew 5:13–16" },
    collect: "O God of justice and mercy, we remember before you your servants Peter Williams Cassey and Anna Besant Cassey, who, in the face of slavery and discrimination, gave the blessings of education and spiritual haven to the marginalized; Grant us to be fearless in the face of injustice and to work for blessings that will touch those whom the world does not count of value; through Jesus Christ our Lord, who with you and the Holy Spirit lives and reigns for ever and ever. Amen.",
    bio: "Peter Williams Cassey (1831–1917) and Annie Besant Cassey (1852–1875) were African American educators and social reformers who established Christ Church and the St. Philip's Mission in San Jose, California. They dedicated their lives to providing quality education, vocational training, and spiritual care to Black and Chinese children during the post-Civil War era."
  },
  "04-17": {
    name: "Kateri Tekakwitha, Lay Contemplative, 1680",
    type: "minor",
    readings: { ot: "1 Kings 19:19–21", psalms: "Psalm 6", nt: "1 Thessalonians 5:16-24", gospel: "Matthew 8:18–22" },
    collect: "Almighty and everliving God, who opened the heart of Kateri Tekakwitha to receive the Good News of Jesus Christ and to devote her life to your service: Grant us the same zeal of devotion to persevere in faith through the trials and tribulations of our lives, through Jesus Christ our Lord. Amen.",
    bio: "Kateri Tekakwitha (1656–1680), known as the 'Lily of the Mohawks,' was an Algonquin-Mohawk woman who became the first Native American to be canonized. Despite childhood illness, scarring, and persecution from her community for her conversion to Christianity, she lived a life of intense prayer, deep penance, and loving service to the sick and elderly at the Jesuit mission in Quebec."
  },
  "04-18": {
    name: "Juana Inés de la Cruz, Monastic and Theologian, 1695",
    type: "minor",
    readings: { ot: "Judith 16:1–10", psalms: "Psalm 56:8-12", nt: "Ephesians 4:20-27", gospel: "Matthew 5:17–20" },
    collect: "Almighty God, Source of all knowledge, we give you thanks for the witness of your servant Juana Inés de la Cruz in her fierce passion for learning and creativity. Teach us to be faithful stewards of our minds and hearts, so that, following her example, we might forever proclaim the riches of your unending love in Jesus Christ our Lord. Through Jesus Christ who, with you and the Holy Spirit, lives and reigns, one God, for ever and ever. Amen.",
    bio: "Juana Inés de la Cruz (1648–1695) was a Hieronymite nun of New Spain (Mexico), a brilliant self-taught scholar, poet, and philosopher who became known as the 'Tenth Muse.' A pioneer of women's intellectual rights, she wrote monumental works of literature, poetry, and theology before dedicating her final years to nursing her sister nuns during a plague."
  },
  "04-19": {
    name: "Alphege, Archbishop of Canterbury, and Martyr, 1012",
    type: "minor",
    readings: { ot: "Micah 2:1-11", psalms: "Psalm 30:1-5", nt: "Colossians 1:24–29", gospel: "Luke 12:35–40" },
    collect: "Lord Jesus Christ, who willingly walked the way of the cross: Strengthen your church through the example and prayers of your servant Alphege to hold fast to the path of discipleship; for with the Father and Holy Spirit you live and reign, one God, for ever and ever. Amen.",
    bio: "Alphege (954–1012) served as Archbishop of Canterbury from 1006 until his martyrdom. When Vikings besieged and sacked Canterbury, Alphege was captured and held for ransom. When his people were unable to pay, he refused to allow them to be further impoverished for his sake. The Danes pelted him with bones and ox-heads at a feast until one, taking pity, gave him a merciful death with an axe. He died rather than allow his flock to be robbed for his release."
  },
  "04-21": {
    name: "Anselm, Archbishop of Canterbury, 1109",
    type: "minor",
    readings: { ot: "Wisdom 6:12-16", psalms: "Psalm 108:1-6", nt: "Romans 5:1–11", gospel: "Matthew 11:25–30" },
    collect: "Almighty God, whose servant Anselm helped your church to understand its faith in your eternal Being, perfect justice, and saving mercy: Provide your church in all ages with devout and learned scholars and teachers, that we may be able to give a reason for the hope that is in us; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Anselm (1033–1109) became Archbishop of Canterbury in 1093. He is called the 'Father of Scholasticism' and his method — 'faith seeking understanding' — set the agenda for medieval theology. His ontological argument for God's existence and his theory of atonement (Cur Deus Homo) have been enormously influential. His tenure was marked by constant conflict with Kings William II and Henry I over the independence of the church, and he spent years in exile."
  },
  "04-22": {
    name: "Hadewijch of Brabant, Poet and Mystic, thirteenth century",
    type: "minor",
    readings: { ot: "Isaiah 52:13–53:12", psalms: "Psalm 57:6-11", nt: "Galatians 5:22-26", gospel: "John 19:31–37" },
    collect: "Triune God of Love, overwhelming and all-encompassing: Visit us in our solitude and in our companionship, and draw us ever more deeply into union with you, who are ever present and ever mysterious; that we, like your servant Hadewijch, might know you ever more fully, even as we have been fully known. Amen.",
    bio: "Hadewijch (flourished 13th century) was a Flemish mystic, poet, and spiritual director. A leader of the Beguines — a movement of lay religious women living in communities without permanent vows — she wrote letters, poems, and visions distinguished by their lyrical quality, courtly love imagery applied to the soul's relationship with God, and profound theological insight. She wrote in Middle Dutch and is considered one of the greatest spiritual writers of the medieval period."
  },
  "04-23": {
    name: "Toyohiko Kagawa, Social Reformer, 1960",
    type: "minor",
    readings: { ot: "Job 13:13–22", psalms: "Psalm 140", nt: "Philippians 1:12-20", gospel: "Luke 22:47–53" },
    collect: "Strengthen and protect, O God, all those who suffer for their fidelity to Jesus Christ; that, like your servant Toyohiko Kagawa, they might persevere in seeking and serving Christ in all persons, and work tirelessly for the advancement of your kingdom; through the same Jesus Christ our Lord, to whom with you and the Holy Spirit be all honor and glory now and for ever. Amen.",
    bio: "Toyohiko Kagawa (1888–1960) was a pioneering Japanese pacifist, Christian reformer, and labor activist who lived and worked among the poor in the slums of Kobe. A prolific author and social entrepreneur, he founded co-operatives, unions, and hospitals, and throughout his life of tireless service, he bore witness to the social gospel and the peace of Christ on a global scale."
  },
  "04-24": {
    name: "Toyohiko Kagawa, Mystic and Servant of the Poor",
    type: "minor",
    readings: { ot: "Amos 5:21-24", psalms: "Psalm 72:1-8", nt: "Galatians 5:22-6:5", gospel: "Matthew 25:31-46" },
    collect: "Grant, O God, that following the example of your servant Toyohiko Kagawa, we may labor unceasingly for the poor and oppressed, that your kingdom of justice and love may be established on earth; through Jesus Christ our Lord. Amen.",
    bio: "Toyohiko Kagawa (1888–1960) was a Japanese Christian social reformer, author, and pacifist. Converted as a teenager, he moved into the Kobe slums in 1909 to live among the poorest. He suffered from tuberculosis and trachoma contracted from slum conditions yet continued his ministry for decades. He founded cooperative and labor movements, worked for world peace and women's rights, and became internationally famous through his writings. He was arrested for his antiwar stance during World War II."
  },
  "04-25": {
    name: "Saint Mark the Evangelist",
    type: "major",
    readings: {
      morning: { ot: "Isaiah 62:6-12", nt: "Acts 15:35-41", gospel: "Mark 1:1-15", psalms: "Psalm 2" },
      evening: { ot: "Ezekiel 1:1-14", nt: "Ephesians 4:7-16", gospel: "Mark 16:15-20", psalms: "Psalm 89:1-18" }
    },
    collect: "Almighty God, who by the hand of Mark the evangelist gave to your Church the Gospel of Jesus Christ the Son of God: We thank you for this witness, and pray that we may be firmly grounded in its truth; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Mark is identified in the New Testament as a companion of both Paul and Peter. His Gospel, the shortest and earliest, was written probably in Rome around 65–70 AD. Ancient tradition holds that Mark wrote down the preaching of Peter. Mark accompanied Paul and Barnabas on their first missionary journey but turned back, causing the sharp disagreement that led to Paul and Barnabas separating. He was later reconciled with Paul. According to tradition, Mark founded the church in Alexandria, Egypt, and died a martyr."
  },
  "04-27": {
    name: "Zita of Tuscany, Worker of Charity, 1271",
    type: "minor",
    readings: { ot: "Exodus 1:15–21", psalms: "Psalm 16", nt: "James 2:1-7", gospel: "Mark 12:41–44" },
    collect: "Merciful God, who has given to us all things necessary for life and godliness; Grant that we, like your servant Zita, may be faithful in the exercise of our duties and that, whatever you give us to do, we may do it heartily to you for the honor and glory of your Name; through him who has called us to virtue, Jesus Christ, your Son, our Lord. Amen.",
    bio: "Zita of Tuscany (c. 1212–1272) spent her entire life working as a domestic servant for a wealthy family in Lucca, Italy, dedicating her wages and free time to feeding the hungry, visiting prisoners, and caring for the sick. Renowned for her extraordinary piety, diligence, and joy in work, she is celebrated as the patron saint of domestic servants."
  },
  "04-29": {
    name: "Catherine, of Siena, Mystic and Prophetic Witness, 1380",
    type: "minor",
    readings: { ot: "Lamentations 3:31-36", psalms: "Psalm 36", nt: "1 John 1:5–2:2", gospel: "Luke 12:22–31" },
    collect: "Almighty and everlasting God, who kindled the flame of your love in the heart of your servant Catherine of Siena: Grant unto us the same strength of conviction and power of love that, as we rejoice in her triumph, we may profit by her example; through Jesus Christ our Lord. Amen.",
    bio: "Catherine of Siena (1347–1380) was an Italian Dominican tertiary, mystic, activist, and Doctor of the Church. She devoted herself to fasting, prayer, and service to the sick and poor. She received the stigmata, invisible during her lifetime. She wrote hundreds of letters to popes, princes, and cardinals urging church reform and was instrumental in persuading Pope Gregory XI to return the papacy from Avignon to Rome in 1377. Her major work, 'The Dialogue,' records her mystical conversations with God."
  },
  "05-01": {
    name: "Saint Philip and Saint James, Apostles",
    type: "major",
    readings: {
      morning: { ot: "Proverbs 4:1-15", nt: "Acts 5:12-22", gospel: "John 1:43-51", psalms: "Psalm 119:33-56" },
      evening: { ot: "Job 23:1-12", nt: "1 Corinthians 15:1-11", gospel: "John 14:1-14", psalms: "Psalm 66" }
    },
    collect: "Almighty God, who gave to your apostles Philip and James grace and strength to bear witness to the truth: Grant that we, being mindful of their victory of faith, may glorify in life and death the Name of our Lord Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Philip was called directly by Jesus as one of his first disciples. Coming from Bethsaida, he shows characteristic practicality in John's Gospel — asking how to feed the five thousand and requesting 'Lord, show us the Father.' He brought his friend Nathanael (Bartholomew) to Jesus. James the Less (son of Alphaeus) is one of the Twelve about whom little is recorded. Tradition holds Philip was martyred in Asia Minor; James was martyred in Jerusalem. They are commemorated together because a Roman basilica was dedicated to them on this day."
  },
  "05-02": {
    name: "Athanasius of Alexandria, Bishop and Theologian, 373",
    type: "minor",
    readings: { ot: "Ezekiel 3:1-14", psalms: "Psalm 71:1–8", nt: "1 John 5:1–5", gospel: "Matthew 10:24-33" },
    collect: "O Lord, who established your servant Athanasius, through wisdom, in your truth: Grant that we, perceiving the humanity and divinity of your Son Jesus Christ, may follow in his footsteps and ascend the way to eternal life, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Athanasius (c. 296–373) served as Bishop of Alexandria for nearly fifty years and was the foremost defender of Nicene orthodoxy against Arianism, which taught that the Son was a created being inferior to the Father. Athanasius maintained the Son is fully divine — 'of one substance with the Father' — as essential to the gospel. He was exiled five times by four different emperors, remembered in the phrase 'Athanasius contra mundum' (against the world). His biography of Anthony helped spread monasticism throughout the Christian world."
  },
  "05-03": {
    name: "Elisabeth Cruciger, Poet and Hymnographer, 1535",
    type: "minor",
    readings: { ot: "Joel 2:23–29", psalms: "Psalm 26", nt: "Colossians 3:11-17", gospel: "Mark 4:26-29" },
    collect: "Pour out your Spirit upon all of your sons and daughters, Almighty God, that like your servant Elisabeth Cruciger our lips may praise you, our lives may bless you, and our worship may give you glory; through Jesus Christ our Lord. Amen.",
    bio: "Elisabeth Cruciger (c. 1500–1535) was a German poet, hymnographer, and close friend of Martin Luther, who is recognized as the first female poet of the Protestant Reformation. Her beautiful advent hymn, 'Herr Christ, der einig Gotts Sohn,' integrated deep theological insight with poetic elegance, establishing her as a foundational voice in Lutheran hymnody."
  },
  "05-04": {
    name: "Monica, Mother of Augustine of Hippo, 387",
    type: "minor",
    readings: { ot: "1 Samuel 1:10–20", psalms: "Psalm 115:12–18", nt: "Galatians 4:1-12a", gospel: "Luke 7:11-17" },
    collect: "Deepen our devotion, O Lord, and use us in accordance with your will; that inspired by the example of your servant Monica, we may bring others to acknowledge Jesus Christ as Savior and Lord; who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
    bio: "Monnica (331–387) was the mother of Augustine of Hippo, venerated for her persistent, devoted prayer for her son's conversion. A devout Christian married to the pagan Patricius, she prayed for Augustine constantly even following him to Rome when he fled without telling her. A bishop comforted her, saying that a son of so many tears cannot be lost. She lived to see Augustine's conversion and baptism in 386, dying at Ostia while they awaited a ship back to Africa."
  },
  "05-05": {
    name: "Martyrs of the Reformation Era",
    type: "minor",
    readings: { ot: "Ezekiel 34:1-10", psalms: "Psalm 51:10–17", nt: "2 Corinthians 4:7–12", gospel: "Matthew 7:1–6" },
    collect: "Almighty and Most Merciful God, give to your church that peace which the world cannot give, and grant that those who have been divided on earth may be reconciled in heaven, and share together in the vision of your glory; through Jesus Christ your Son our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "The Martyrs of the Reformation Era commemorates all those Christians—Protestant and Roman Catholic alike—who were executed for their religious convictions during the turbulent conflicts of the sixteenth and seventeenth centuries. This observance invites the church to repent of past violence and celebrate the shared witness of all who died for their love of Christ."
  },
  "05-06": {
    name: "George of Lydda, Martyr, c. 304",
    type: "minor",
    readings: { ot: "Joshua 1:7-9", psalms: "Psalm 3", nt: "Revelation 12:7-12", gospel: "John 15:18-21" },
    collect: "Almighty God, you commissioned your holy martyr George to bear before the rulers of this world the banner of the cross: Strengthen us in our battles against the great serpent of sin and evil, that we too may attain the crown of eternal life; through Jesus Christ our Redeemer, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen. .",
    bio: "George of Lydda (c. 280–303) was a Christian soldier in the Roman army who was martyred under the Emperor Diocletian for refusing to renounce his faith. The subject of numerous legends, most notably his defeat of a dragon to rescue a maiden, he is widely venerated in both Eastern and Western traditions as a powerful symbol of courage and the triumph of good over evil."
  },
  "05-08": {
    name: "Dame Julian of Norwich, Mystic",
    type: "minor",
    readings: { ot: "Isaiah 46:3-10", psalms: "Psalm 27", nt: "1 John 4:9-16", gospel: "Matthew 11:25-30" },
    collect: "Lord of love, you directed your servant Julian of Norwich to experience the fullness of your love in the depths of suffering: May we know with Julian that 'all shall be well, and all shall be well, and all manner of thing shall be well'; through Jesus Christ our Lord. Amen.",
    bio: "Julian of Norwich (1342–c. 1416) was an English mystic and anchoress whose 'Revelations of Divine Love' is the first surviving book in the English language written by a woman. On May 8, 1373, when gravely ill, she received sixteen visions of Christ's Passion. She spent twenty years meditating on their meaning as an anchoress at St. Julian's Church in Norwich. She is remembered for her profound theology of divine love and her hopeful conviction that 'all shall be well.'"
  },
  "05-09": {
    name: "Gregory of Nazianzus, Bishop and Theologian, 389",
    type: "minor",
    readings: { ot: "Jonah 1:1–16", psalms: "Psalm 19:7–14", nt: "Ephesians 3:14-21", gospel: "John 8:25–32" },
    collect: "Almighty God, who has revealed to your Church your eternal Being of glorious majesty and perfect love as one God in Trinity of Persons: Give us grace that, like your bishop Gregory of Nazianzus, we may continue steadfast in the confession of this faith, and constant in our worship of you, Father, Son, and Holy Spirit; who live and reign for ever and ever. Amen.",
    bio: "Gregory of Nazianzus (c. 329–389) was one of the three Cappadocian Fathers who articulated the definitive formula for the doctrine of the Trinity. Serving briefly as Archbishop of Constantinople from 380–381, his 'Five Theological Orations' are masterpieces of trinitarian argumentation. He resigned due to ill health and controversy, spending his last years writing poetry, letters, and theological treatises. He is called 'the Theologian' in the Eastern church."
  },
  "05-11": {
    name: "Johann Arndt and Jacob Boehme, Mystics, 1621 and 1624",
    type: "minor",
    readings: { ot: "Exodus 17:1–7", psalms: "Psalm 119:25-32", nt: "Romans 7:21-25", gospel: "Mark 6:45–52" },
    collect: "Holy God, who dwells with those who have a contrite and humble spirit: Revive our spirits; purify us from deceitful lusts; and clothe us in righteousness and true holiness; though Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God now and for ever. Amen.",
    bio: "Johann Arndt (1555–1621) was a German Lutheran pastor whose 'True Christianity' (1605) became one of the most widely read devotional books in Protestantism. Alarmed that Lutheran orthodoxy had become purely doctrinal, Arndt called Christians back to genuine piety, devotion, and love. His work influenced Pietism, which transformed Lutheranism in the seventeenth and eighteenth centuries and, through the Pietists, influenced John Wesley and the Methodist movement."
  },
  "05-13": {
    name: "Frances Perkins, Social Reformer, 1965",
    type: "minor",
    readings: { ot: "Deuteronomy 15:7–11", psalms: "Psalm 37:27–31", nt: "Ephesians 4:25-5:2", gospel: "Luke 9:10–17" },
    collect: "Loving God, we bless your Name for Frances Perkins, who in faithfulness to her baptism envisioned a society in which all might live in health and decency: Help us, following her example and in union with her prayers, to contend tirelessly for justice and for the protection of all, that we may be faithful followers of Jesus Christ; who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
    bio: "Frances Perkins (1880–1965) was a devout Episcopalian, social reformer, and the first female Cabinet member in United States history, serving as Secretary of Labor under Franklin D. Roosevelt. Guided by her deep Christian faith and social conscience, she was the principal architect of the New Deal's social safety net, including Social Security, the minimum wage, and unemployment insurance."
  },
  "05-15": {
    name: "Pachomius of Tabennisi, Monastic, 348",
    type: "minor",
    readings: { ot: "1 Samuel 10:20-27", psalms: "Psalm 16", nt: "2 Timothy 2:1–6", gospel: "Mark 10:23-31" },
    collect: "Set us free, O God, from all false desires, vain ambitions, and everything that would separate us from your love; that, like your servant Pachomius, we might give ourselves fully to a life of discipleship, seeking you alone and serving those whom you have given us to serve; through Jesus Christ, our only mediator and advocate. Amen.",
    bio: "Pachomius of Tabennisi (c. 292–348) was an Egyptian monastic who is credited with founding cenobitic (communal) Christian monasticism. Drawing on his experience as a soldier, he established a highly structured rule of communal prayer, labor, and mutual support, founding nine monasteries for men and two for women along the Nile."
  },
  "05-17": {
    name: "Thurgood Marshall, Public Servant, 1993",
    type: "minor",
    readings: { ot: "Amos 5:10-15", psalms: "Psalm 34:15-22", nt: "1 Corinthians 13:1-13", gospel: "Matthew 23:1-12" },
    collect: "Eternal and ever-gracious God, who blessed your servant Thurgood Marshall with grace and courage to discern and speak the truth: Grant that, following his example, we may know you and recognize that we are all your children, brothers and sisters of Jesus Christ, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Thurgood Marshall (1908–1993) was a pioneering civil rights lawyer and the first African American Associate Justice of the United States Supreme Court. As chief counsel for the NAACP, he successfully argued the landmark case Brown v. Board of Education, and throughout his legal career and judicial service, he remained a steadfast defender of equal justice, civil rights, and human dignity."
  },
  "05-19": {
    name: "Dunstan, Archbishop of Canterbury, 988",
    type: "minor",
    readings: { ot: "Exodus 25:31–40", psalms: "Psalm 57:6–11", nt: "Ephesians 5:15-20", gospel: "Matthew 24:42–47" },
    collect: "Direct your Church, O Lord, into the beauty of holiness, that, following the good example of your servant Dunstan, we may honor your Son Jesus Christ with our lips and in our lives; to the glory of his Name, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Dunstan (c. 910–988) was one of the greatest archbishops of Canterbury in the Anglo-Saxon period and a major force in the revival of English monasticism. He served as Archbishop of Canterbury from 960 until his death. With Bishop Æthelwold and Archbishop Oswald, he led the 'Benedictine Reform' that transformed English monasticism and culture. He was also a gifted artist, musician, and metalworker."
  },
  "05-20": {
    name: "Alcuin, Deacon, and Abbot of Tours, 80",
    type: "minor",
    readings: { ot: "Ecclesiastes 3:1-8", psalms: "Psalm 107:1-8", nt: "Titus 2:1-3", gospel: "Matthew 13:24–30" },
    collect: "Almighty God, who raised up your servant Alcuin as a beacon of learning: Shine in our hearts, we pray, that we may also show forth your praise in our own generation, for you have called us out of darkness and into your marvelous light; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Alcuin (c. 735–804) was an Anglo-Saxon scholar from York who became the leading intellectual at Charlemagne's court. He organized the copying of manuscripts, supervised revision of the Vulgate Bible and the liturgy, and established the Palatine School as a center of learning. He spent his last years as Abbot of Tours. He is often called 'the schoolmaster of Europe' and is considered a central figure in the Carolingian Renaissance."
  },
  "05-21": {
    name: "Lydia of Thyatira, Coworker of the Apostle Paul",
    type: "minor",
    readings: { ot: "Malachi 3:16-18", psalms: "Psalm 100", nt: "Acts 16:11–15", gospel: "Luke 15:8–10" },
    collect: "Eternal God, who gives good gifts to all people, and who grants the spirit of generosity: Give us, we pray you, hearts always open to hear your word, that, following the example of your servant Lydia, we may show hospitality to those who are in any need or trouble; through Jesus Christ our Lord who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Lydia of Thyatira (first century) was a merchant of purple cloth and a worshiper of God who became Paul's first convert in Europe. Her baptism, along with that of her household, marked the beginning of the church in Philippi, and she graciously opened her home as a center for the early Christian community, exemplifying Christian hospitality."
  },
  "05-22": {
    name: "Helena of Constantinople, Protector of the Holy Places, 330",
    type: "minor",
    readings: { ot: "Micah 4:1–4", psalms: "Psalm 2", nt: "2 Corinthians 8:7-15", gospel: "Luke 23:26–32" },
    collect: "Most Merciful God, who blessed your servant Helena with such grace and devotion to you that she venerated the very footsteps of our Savior; Grant unto us the same grace that, aided by her prayers and example, we also may always behold your glory in the cross of your Son. Through the same Jesus Christ our Lord; who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Helena of Constantinople (c. 246–330) was the mother of the Roman Emperor Constantine the Great, who dedicated her later years to pilgrimage, works of charity, and the protection of holy sites. According to tradition, she discovered the True Cross during her travels in the Holy Land, and her patronage established historic basilicas at Bethlehem and the Mount of Olives."
  },
  "05-24": {
    name: "Jackson Kemper, Bishop and Missionary, 1870",
    type: "minor",
    readings: { ot: "Exodus 15:22-25", psalms: "Psalm 67", nt: "1 Corinthians 3:8–15", gospel: "Luke 13:1-9" },
    collect: "O God, who sent your son Jesus Christ to preach peace to those who are far off and to those who are near: Grant that we, like your servant Jackson Kemper, may proclaim the Gospel in our own day, with courage, vision, and perseverance; through the same Jesus Christ our Lord, who with you and the Holy Spirit lives and reigns, now and for ever. Amen.",
    bio: "Jackson Kemper (1789–1870) was the first missionary bishop of the Episcopal Church, consecrated in 1835 with jurisdiction over Missouri and Indiana. He traveled tirelessly throughout the Midwest, establishing congregations, schools, and seminaries in Missouri, Indiana, Wisconsin, Iowa, and other territories. He helped found Nashotah House seminary and served as a bishop for thirty-five years, establishing the church throughout a vast region of North America."
  },
  "05-25": {
    name: "Bede the Venerable, Priest and Historian, 735",
    type: "minor",
    readings: { ot: "Ecclesiastes 12:9–14", psalms: "Psalm 139:10-17", nt: "1 Corinthians 15:1-8", gospel: "Matthew 13:31–33" },
    collect: "Almighty God, who has enriched your church with the learning and holiness of your servant Bede: Grant us to find in Scripture and disciplined prayer the image of your Son our Savior Jesus Christ, and to fashion our lives according to his likeness, to the glory of your great Name and to the benefit of your holy church; through the same Jesus Christ our Lord. Amen.",
    bio: "Bede (c. 673–735), called 'the Venerable,' was an Anglo-Saxon monk at Wearmouth-Jarrow in Northumbria. His Ecclesiastical History of the English People is the primary source for early English history. He introduced the system of dating from Christ's birth (AD) to England and was a prolific biblical commentator. He died while translating John's Gospel into Old English. He is the only Englishman given the title 'Doctor of the Church.'"
  },
  "05-26": {
    name: "Augustine, First Archbishop of Canterbury, 605",
    type: "minor",
    readings: { ot: "Tobit 13:1, 10-11", psalms: "Psalm 66:1–8", nt: "2 Corinthians 5:17–21", gospel: "Luke 5:1–11" },
    collect: "O Lord our God, who by your Son Jesus Christ called your servant Augustine to preach the Gospel to the English people: We pray that all whom you call and send may do your will, bide your time, and see your glory; through the same Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen",
    bio: "Augustine of Canterbury (died c. 604) was sent by Pope Gregory the Great in 596 with forty monks to evangelize the Anglo-Saxons. Welcomed by King Æthelberht of Kent, he baptized the king and thousands of subjects on Christmas Day. He became the first Archbishop of Canterbury and worked to establish the church on Roman lines. He died around 604, having established the church in southern England on firm foundations."
  },
  "05-28": {
    name: "Mechthild of Magdeburg, Mystic, c.1282",
    type: "minor",
    readings: { ot: "Song of Songs 3:1–5", psalms: "Psalm 71:17-23", nt: "2 Thessalonians 3:6-13", gospel: "Mark 8:22–26" },
    collect: "Draw the souls of your people into your love, O God, that like your servant Mechthild, we may yearn to be fully yours, for you know us better than we can know ourselves; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God now and for ever. Amen.",
    bio: "Mechthild of Magdeburg (c. 1207–1282) was a German Beguine and later Cistercian nun who wrote 'The Flowing Light of the Godhead,' a collection of mystical poetry and prose. Her writings, composed in the vernacular Middle Low German, are celebrated for their intense emotional depth, theological brilliance, and vivid descriptions of the soul's union with Christ."
  },
  "05-31": {
    name: "The Visitation of the Blessed Virgin Mary to Elizabeth",
    type: "major",
    readings: {
      morning: { ot: "1 Samuel 2:1-10", nt: "Romans 12:9-16b", gospel: "Luke 1:39-57", psalms: "Psalm 113" },
      evening: { ot: "Zechariah 2:10-13", nt: "Colossians 3:12-17", gospel: "Luke 1:46-55", psalms: "Psalm 146" }
    },
    collect: "Father in heaven, by your grace the virgin mother of your incarnate Son was blessed in bearing him, but still more blessed in keeping your word: Grant us who honor the exaltation of her lowliness to follow the example of her devotion to your will; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "The Visitation commemorates the meeting of the Virgin Mary with her cousin Elizabeth. After the Annunciation, Mary traveled to visit Elizabeth, who was six months pregnant with John the Baptist. When Mary entered, the child leapt in Elizabeth's womb and Elizabeth cried out 'Blessed are you among women!' Mary responded with the Magnificat — the great hymn of praise that has become central to Evening Prayer. This feast, celebrated on May 31, was established in the Western church in the fifteenth century."
  },
  "06-01": {
    name: "Justin, Martyr, c.167",
    type: "minor",
    readings: { ot: "Deuteronomy 7:7-9", psalms: "Psalm 116:1–9", nt: "1 Corinthians 1:18–25", gospel: "John 12:44–50" },
    collect: "O God, who has given your church wisdom and revealed to it deep and secret things: Grant that we, like your servant Justin and in union with his prayers, may find your Word an abiding refuge all the days of our lives; through Jesus Christ our Lord, who with you and the Holy Spirit lives and reigns, one God, in glory everlasting. Amen.",
    bio: "Justin Martyr (c. 100–165) was a philosopher who converted to Christianity and continued wearing the philosopher's cloak, viewing Christianity as the true philosophy. His two Apologies defending Christianity and his Dialogue with Trypho provide invaluable information about early Christian worship, including the first detailed description of the Sunday Eucharist. He was martyred in Rome around 165 when he refused to sacrifice to the gods."
  },
  "06-02": {
    name: "Blandina and Her Companions, the Martyrs of Lyons, 177",
    type: "minor",
    readings: { ot: "Jeremiah 12:1-4", psalms: "Psalm 126", nt: "1 Peter 1:3–9", gospel: "Mark 14:32–42" },
    collect: "Almighty God, who gave such courage and endurance to Blandina and her companions that by their deaths many hearts were turned to you; Grant that we, in accordance with their example, may also gladly endure all that is required of us as we witness to you in our own day; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Blandina and Her Companions (d. 177) were a group of forty-eight Christians who were brutally tortured and martyred in Lyons, France, under the Emperor Marcus Aurelius. Blandina, a young slave woman, demonstrated extraordinary courage and endurance in the arena, inspiring her fellow martyrs and becoming a powerful symbol of spiritual strength in weakness."
  },
  "06-03": {
    name: "The Martyrs of Uganda, 1886",
    type: "minor",
    readings: { ot: "Habakkuk 2:9-14", psalms: "Psalm 138", nt: "Hebrews 10:32–39", gospel: "Matthew 24:9–14" },
    collect: "O God, by whose providence the blood of the martyrs is the seed of the church: Grant that we who remember before you the blessed martyrs of Uganda, may, like them, be steadfast in our faith in Jesus Christ, to whom they gave obedience even to death, and by their sacrifice brought forth a plentiful harvest; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Between 1885 and 1887, young men serving as royal pages at the court of Kabaka Mwanga II of Buganda were martyred for refusing the king's sexual demands and for their Christian faith. Led by Charles Lwanga, the martyrs included both Catholic and Anglican Christians aged fourteen to thirty. Charles Lwanga and fifteen Catholic companions were burned alive on June 3, 1886; Anglican martyrs included James Hannington. Their calm acceptance of death transformed the young Christian community in Uganda."
  },
  "06-04": {
    name: "John XXIII (Angelo Guiseppe Roncalli), Bishop, 1963",
    type: "minor",
    readings: { ot: "Numbers 11:10-17", psalms: "Psalm 50:1–6", nt: "1 Peter 5:1-4", gospel: "Luke 5:36–39" },
    collect: "God of all truth and peace, who raised up your bishop John to be servant of the servants of God and bestowed on him wisdom to call for the work of renewing your church: Grant that, following his example, we may reach out to other Christians in the love of your Son, and labor throughout the nations of the world to kindle a desire for justice and peace; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "John XXIII (1881–1963), born Angelo Giuseppe Roncalli, was elected Pope of the Roman Catholic Church in 1958 and surprised the world by convening the Second Vatican Council (Vatican II). Known for his warmth, simplicity, and pastoral heart, he sought to open the windows of the church to the modern world, promoting ecumenism, peace, and social justice."
  },
  "06-05": {
    name: "Boniface, Bishop and Missionary, 754",
    type: "minor",
    readings: { ot: "Ecclesiastes 3:16-22", psalms: "Psalm 115:1–8", nt: "Acts 20:17-28", gospel: "Mark 8:27–30" },
    collect: "Pour out your Holy Spirit, O God, upon your church in every land, that like your servant Boniface we might proclaim the Gospel to all nations, that your kingdom might be enlarged and that your holy Name might be glorified in all the world; through Jesus Christ our Lord, who lives and reigns with you and the same Spirit, one God, for ever and ever. Amen.",
    bio: "Boniface (c. 675–754), born Winfrid in Wessex, England, became the 'Apostle of Germany.' He famously cut down the sacred oak of Thor at Geismar, and when lightning did not strike him, many converted. He organized the German church, founded monasteries, and became Archbishop of Mainz. He was martyred by pagans near Dokkum, Frisia, in 754 while returning to missionary work in his old age."
  },
  "06-08": {
    name: "Melania the Elder, Monastic, 410",
    type: "minor",
    readings: { ot: "Exodus 4:24–26", psalms: "Psalm 119:113-120", nt: "Romans 8:18-25", gospel: "Mark 8:14–21" },
    collect: "Most High and Merciful God, who called your servant Melania to forsake earthly comforts in order to devote herself to studying the scriptures and to welcoming the poor: Instruct us in the ways of poverty and the grace of hospitality, that we might comfort those who have no place to rest and teach the way of your love; through Jesus Christ our Lord. Amen.",
    bio: "Melania the Elder (c. 350–410) was a wealthy Roman noblewoman who, after being widowed at a young age, distributed her fortune to the poor, traveled to Egypt to support the Desert Fathers, and established a double monastery for men and women on the Mount of Olives. A highly educated scholar, she played a vital role in the early monastic movement."
  },
  "06-09": {
    name: "Columba of Iona,, Monastic, 597",
    type: "minor",
    readings: { ot: "Wisdom 19:18-22", psalms: "Psalm 111", nt: "1 Corinthians 3:16–23", gospel: "Luke 10:17–20" },
    collect: "O God, who by the preaching of your servant Columba caused the light of the Gospel to shine in Scotland: Grant, we pray, that, remembering his life and labors, we may follow the example of his zeal and patience; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Columba (521–597) was an Irish monk who, following a dispute that led to a bloody battle, exiled himself from Ireland to Scotland as a 'pilgrim for Christ.' He founded the famous monastery on the island of Iona, which became one of the greatest centers of Christian learning and missionary activity in the early medieval period. He and his followers evangelized the Picts of Scotland and had influence throughout Britain, remembered for his love of learning, prophecy, and nature."
  },
  "06-10": {
    name: "Ephrem of Nisibis, Deacon and Poet, 373",
    type: "minor",
    readings: { ot: "Job 38:1–11", psalms: "Psalm 68:11–18", nt: "Ephesians 3:8-12", gospel: "Mark 9:38–41" },
    collect: "Pour out upon us, O Lord, that same Spirit by which your deacon Ephrem declared the mysteries of faith in sacred song; that, with gladdened hearts, we too might proclaim the riches of your glory; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Ephrem of Nisibis (c. 306–373) was a Syriac deacon, theologian, and poet who composed hundreds of madrase (hymns) and mimre (sermons in verse) defending the orthodox faith against heresy. Known as the 'Harp of the Spirit,' his beautiful hymns integrated profound theological metaphors with musical form, making him a primary doctor of the Syriac church."
  },
  "06-11": {
    name: "Saint Barnabas the Apostle",
    type: "major",
    readings: {
      morning: { ot: "Isaiah 42:5-12", nt: "Acts 11:19-30; 13:1-3", gospel: "Matthew 10:7-16", psalms: "Psalm 112" },
      evening: { ot: "Isaiah 66:1-2, 18-21", nt: "Galatians 2:1-10", gospel: "Luke 10:1-9", psalms: "Psalm 100" }
    },
    collect: "Grant, O God, that we may follow the example of your faithful servant Barnabas, who, seeking not his own renown but the well-being of your Church, gave generously of his life and substance for the relief of the poor and the spread of the Gospel; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Barnabas, a Jew from Cyprus, was one of the earliest and most important leaders of the Jerusalem church. His name means 'Son of Encouragement,' and Acts consistently portrays him as generous, welcoming the newly converted Paul when others were suspicious. He accompanied Paul on the first missionary journey and helped establish churches in Cyprus and Asia Minor. They separated when they disagreed over whether to take John Mark with them. Barnabas then took Mark to Cyprus. Though not one of the Twelve, he is given the title of apostle in the New Testament."
  },
  "06-12": {
    name: "Enmegahbowh, Priest and Missionary, 1902",
    type: "minor",
    readings: { ot: "Isaiah 52:1–6", psalms: "Psalm 129", nt: "1 Peter 5:1-4", gospel: "Luke 6:17-26" },
    collect: "Almighty God, who led your pilgrim people of old by fire and cloud: Grant that the ministers of your church, following the example of your servant Enmegahbowh, may lead your people with fiery zeal and gentle humility; through Jesus Christ, who lives and reigns with you in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Enmegahbowh (c. 1807–1902) was an Ottawa Indian who was ordained the first Native American priest in the Episcopal Church, serving as a missionary among the Ojibwe (Chippewa) in Minnesota. A key figure in negotiating peace during conflicts between settlers and indigenous peoples, he dedicated his life to spiritual care, education, and reconciliation."
  },
  "06-14": {
    name: "Basil of Caesarea, Bishop and Theologian, 379",
    type: "minor",
    readings: { ot: "Ezekiel 22:23-30", psalms: "Psalm 139:1–9", nt: "1 Corinthians 2:6–13", gospel: "Luke 10:21–24" },
    collect: "Almighty God, who has revealed to your church your eternal Being of glorious majesty and perfect love as one God in Trinity of Persons: Give us grace that, like your bishop Basil of Caesarea, we may continue steadfastly in the confession of this faith and remain constant in our worship of you, Father, Son, and Holy Spirit; ever one God, for ever and ever. Amen.",
    bio: "Basil the Great (c. 329–379) was Bishop of Caesarea and one of the three Cappadocian Fathers who helped defeat Arianism and articulate the doctrine of the Trinity. He founded a great complex of institutions outside Caesarea — including a hospital, hospice, and poorhouse — that became a model for Christian social welfare. His monastic Rule became the basis for Eastern Christian monasticism. His Divine Liturgy is still celebrated in Eastern Orthodox churches on certain days."
  },
  "06-15": {
    name: "Evelyn Underhill, Mystic and Writer, 1941",
    type: "minor",
    readings: { ot: "2 Kings 22:14–20", psalms: "Psalm 96:7–13", nt: "1 Corinthians 4:1-5", gospel: "John 4:19–24" },
    collect: "O God, Origin, Sustainer, and End of all creatures: Grant that your church, taught by your servant Evelyn Underhill, may continually offer to you all glory and thanksgiving, and attain with your saints to the blessed hope of everlasting life, which you have promised us by our Savior Jesus Christ; who with you and the Holy Spirit lives and reigns, one God, now and for ever. Amen.",
    bio: "Evelyn Underhill (1875–1941) was an English Anglo-Catholic writer, mystic, and spiritual director whose pioneering book 'Mysticism' introduced spiritual theology to the modern world. The first woman to lecture on theology at Oxford, she spent her later years conducting spiritual retreats and writing extensively on prayer, helping laypeople discover the contemplative life in the midst of daily activity."
  },
  "06-16": {
    name: "Joseph Butler, Bishop and Theologian, 1752",
    type: "minor",
    readings: { ot: "Ecclesiastes 1:12–18", psalms: "Psalm 134", nt: "Acts 13:38-44", gospel: "Luke 10:25–28" },
    collect: "O God, who raises up scholars for your church in every generation; we praise you for the wisdom and insight granted to your bishop and theologian Joseph Butler, and pray that your church may never be destitute of such gifts; through Jesus Christ our Lord, who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
    bio: "Joseph Butler (1692–1752) was a saintly Bishop of Durham and one of the preeminent theologians and moral philosophers of the eighteenth century. In his landmark work, 'The Analogy of Religion,' he defended the reasonableness of Christian revelation against Deism, and his moral sermons established a profound defense of conscience as the supreme rational guide for human behavior."
  },
  "06-17": {
    name: "Marina the Monk, Monastic, fifth century",
    type: "minor",
    readings: { ot: "Susanna 34–46", psalms: "Psalm 148", nt: "James 1:19-27", gospel: "Luke 18:18–30" },
    collect: "Give us grace, Lord God, to refrain from judgments about the sins of others; that, like your servant Marina the Monk, we may hold fast to the path of discipleship in the midst of unjust judgments; through Jesus Christ our Lord who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Marina the Monk (fifth century), also known as Maria of Alexandria, was an early Christian saint who disguised herself as a man to enter a monastery in Alexandria to pursue a life of quiet prayer and avoid a forced marriage. She lived a life of rigorous devotion, served as a trusted spiritual counselor to her own father before revealing her identity upon her death."
  },
  "06-18": {
    name: "Bernard Mizeki, Martyr, 1896",
    type: "minor",
    readings: { ot: "Nehemiah 6:6-11", psalms: "Psalm 70", nt: "Revelation 7:13–17", gospel: "Luke 12:1–12" },
    collect: "Almighty and everlasting God, who kindled the flame of your love in the heart of your holy martyr Bernard Mizeki: Grant unto us your humble servants a like faith and power of love, that we, who rejoice in his triumph, may profit by his example; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Bernard Mizeki (c. 1861–1896) was a Mozambican-born Anglican catechist and the first martyr of the Anglican Church in Zimbabwe. Born on the East African coast, he was baptized and educated in Cape Town. He went as a catechist to Mashonaland in 1891, learning the local language and making converts. During an 1896 uprising against colonial rule, he was killed because his mission was seen as part of the colonial establishment. His shrine near Marondera draws thousands of pilgrims annually."
  },
  "06-19": {
    name: "Adelaide Teague Case, Educator, 1948",
    type: "minor",
    readings: { ot: "Proverbs 4:1-9", psalms: "Psalm 134", nt: "Hebrews 5:11–6:1", gospel: "Mark 4:21-25" },
    collect: "Almighty and everlasting God, who raises up educators and teachers of the faith in every generation of your church: Grant that following the example of your servant Adelaide Teague Case, we might be bold to proclaim the reconciling power of Christ’s love in our own generation. Through the same Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.",
    bio: "Adelaide Teague Case (1887–1948) was a prominent American educator and the first woman to be appointed to a full professorship at Episcopal Theological School in Cambridge, Massachusetts. A pioneer in religious education, she integrated modern educational theory with Christian theology, advocating for active lay participation and social responsibility."
  },
  "06-22": {
    name: "Alban, Martyr, c.304",
    type: "minor",
    readings: { ot: "Wisdom 3:1–9", psalms: "Psalm 125", nt: "1 John 3:13–16", gospel: "Matthew 10:34–42" },
    collect: "Almighty God, by whose grace and power your holy martyr Alban triumphed over suffering and was faithful even unto death: Grant us, who now remember him in thanksgiving, to be so faithful in our witness to you in this world that we may receive with him the crown of life; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Alban (died c. 304) is venerated as the first Christian martyr of Britain. According to Bede's Ecclesiastical History, Alban was a pagan Roman soldier who sheltered a Christian priest fleeing persecution. Moved by the priest's faith, Alban converted, helped the priest escape, and was arrested in his place. When brought before the governor he refused to sacrifice to the gods and was executed. The city of Verulamium (now St Albans) grew up at the site of his martyrdom."
  },
  "06-24": {
    name: "The Nativity of Saint John the Baptist",
    type: "major",
    readings: {
      morning: { ot: "Malachi 3:1-5", nt: "Acts 13:14b-26", gospel: "Luke 1:57-80", psalms: "Psalm 82" },
      evening: { ot: "Malachi 4:1-6", nt: "Revelation 19:6-11", gospel: "Matthew 11:2-19", psalms: "Psalm 80" }
    },
    collect: "Almighty God, by whose providence your servant John the Baptist was wonderfully born, and sent to prepare the way of your Son our Savior by preaching repentance: Make us so to follow his teaching and holy life, that we may truly repent; and, following his example, constantly speak the truth, boldly rebuke vice, and patiently suffer for the truth's sake; through Jesus Christ your Son our Lord. Amen.",
    bio: "John the Baptist was the forerunner of Jesus Christ, born to Elizabeth and Zechariah in answer to their prayers. He lived as an ascetic in the desert, wore camel's hair, ate locusts and wild honey, and preached a baptism of repentance. He baptized Jesus in the Jordan River and declared 'one mightier than I is coming.' Arrested by Herod Antipas for condemning Herod's unlawful marriage, he was eventually executed after Herodias's daughter requested his head at a feast."
  },
  "06-26": {
    name: "Isabel Florence Hapgood, Ecumenist, 1928",
    type: "minor",
    readings: { ot: "Numbers 27:1-11", psalms: "Psalm 24", nt: "Revelation 5:8-14", gospel: "John 15:5–8" },
    collect: "Teach your divided church, O God, so to follow the example of your servant Isabel Florence Hapgood that we might look upon one another with a holy envy, to honor whatever is good and right in our separate traditions, and to continually seek the unity that you desire for all your people. We ask this in the name of Jesus Christ our Lord, who prayed that his church might be one. Amen.",
    bio: "Isabel Florence Hapgood (1851–1928) was an American journalist, translator, and ecumenist who translated numerous Russian literary and theological classics into English. A dedicated advocate for ecumenical relations between the Episcopal Church and the Eastern Orthodox churches, she compiled the historic 'Service Book of the Holy Orthodox-Catholic Apostolic Church.'"
  },
  "06-28": {
    name: "Irenaeus of Lyons, Bishop and Theologian, c.202",
    type: "minor",
    readings: { ot: "Proverbs 8:6-11", psalms: "Psalm 8", nt: "2 Timothy 2:22–26", gospel: "Luke 11:33–36" },
    collect: "Almighty God, who strengthened your servant Irenaeus to defend thy truth against every blast of vain doctrine: Keep us, we pray, steadfast in your true religion, that in constancy and peace we may walk in the way that leads to eternal life; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Irenaeus (c. 130–202) was Bishop of Lyon and one of the most important theologians of the early church. A disciple of Polycarp, giving him a direct link to the apostolic tradition, his major work 'Against Heresies' (Adversus Haereses) is the earliest comprehensive refutation of Gnosticism and remains a primary source for our knowledge of Gnostic teachings. He emphasized the continuity of the gospel with the Old Testament and the authority of the apostolic tradition."
  },
  "06-29": {
    name: "Saint Peter and Saint Paul, Apostles",
    type: "major",
    readings: {
      morning: { ot: "Ezekiel 2:1-7", nt: "Acts 11:1-18", gospel: "John 21:15-22", psalms: "Psalm 87" },
      evening: { ot: "Isaiah 49:1-6", nt: "Galatians 1:11-24", gospel: "Matthew 16:13-19", psalms: "Psalm 66" }
    },
    collect: "Almighty God, whose blessed apostles Peter and Paul glorified you by their martyrdom: Grant that your Church, instructed by their teaching and example, and knit together in unity by your Spirit, may ever stand firm upon the one foundation, which is Jesus Christ our Lord; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "The feast of Saints Peter and Paul celebrates the two greatest apostolic leaders of the early church. Peter (Simon, son of John) was a fisherman who became leader of the Twelve Apostles. Paul of Tarsus was a Pharisee and persecutor who became the greatest missionary and theologian of the apostolic age. Both were martyred in Rome under Emperor Nero around 64–68 AD: Peter reportedly by upside-down crucifixion and Paul by beheading. Their bodies were venerated at the sites that became the great Roman basilicas bearing their names."
  },
  "07-01": {
    name: "Pauli Murray, Priest, 1985",
    type: "minor",
    readings: { ot: "Isaiah 55;10-13", psalms: "Psalm 119:17–24", nt: "Galatians 3:23–29", gospel: "Mark 12:1–12" },
    collect: "Liberating God, we thank you for the steadfast courage of your servant Pauli Murray, who fought long and well: Unshackle us from the chains of prejudice and fear, that we may show forth the reconciling love and true freedom which you revealed in your Son our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Pauli Murray (1910–1985) was a brilliant civil rights attorney, legal scholar, poet, feminist activist, and the first African American woman ordained as an Episcopal priest in 1977. Throughout a lifetime of breaking racial and gender barriers, she co-founded the National Organization for Women, argued seminal civil rights cases, and dedicated her later years to pastoral ministry and reconciliation."
  },
  "07-02": {
    name: "Moses the Black, Monastic and Martyr, c.400",
    type: "minor",
    readings: { ot: "2 Chronicles 28:8–15", psalms: "Psalm 62", nt: "Acts 22:6-21", gospel: "Luke 23:39–43" },
    collect: "Almighty God, whose blessed Son guides our footsteps in the way of peace: Deliver us from the paths of hatred and violence, that we, following the example of your servant Moses, may serve you with singleness of heart and attain to the tranquility of the world to come; through Jesus Christ our Lord, who lives and reigns with you in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Moses the Black (330–405), also known as Moses the Ethiopian, was a notorious desert bandit who converted to Christianity, joined a monastic community in Scetis, and became a beloved Desert Father. Renowned for his profound humility, non-violence, and spiritual wisdom, he was martyred when he refused to take up arms to defend his monastery from invaders, embodying the peace of Christ."
  },
  "07-04": {
    name: "Independence Day",
    type: "major",
    readings: {
      morning: { ot: "Deuteronomy 10:17-21", nt: "Hebrews 11:8-16", gospel: "Matthew 5:43-48", psalms: "Psalm 145" },
      evening: { ot: "Wisdom 6:1-11", nt: "Galatians 5:1-14", gospel: "John 8:31-36", psalms: "Psalm 144" }
    },
    collect: "Lord God Almighty, in whose Name the founders of this country won liberty for themselves and for us, and lit the torch of freedom for nations then unborn: Grant that we and all the people of this land may have grace to maintain our liberties in righteousness and peace; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Independence Day is a major civil feast in the Episcopal Church, commemorating the signing of the Declaration of Independence on July 4, 1776. The liturgy emphasizes the themes of liberty, justice, and the responsibility of a free people to govern themselves under God with respect for the dignity of all people. It serves as a day of thanksgiving for national blessings and a prayer for the ongoing pursuit of equality and peace."
  },
  "07-06": {
    name: "Eva Lee Matthews, Monastic, 1928",
    type: "minor",
    readings: { ot: "Micah 6:6–8", psalms: "Psalm 90:1-12", nt: "Acts 4:32-35", gospel: "Matthew 26:6–13" },
    collect: "O God, whose blessed Son became poor that we through his poverty might be rich: Deliver us from an inordinate love of this world, that, inspired by the devotion of your servant Eva Lee Matthews, we may serve you with singleness of heart, and attain to the riches of the age to come; through the same Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Eva Lee Matthews (1862–1928) was the founding Mother of the Community of the Transfiguration, a monastic order for women established in the Episcopal Church. Grounded in a life of prayer and simplicity, she dedicated the community to serving the poor, establishing homes for children, schools, and healthcare missions in Ohio, North Carolina, and Hawaii."
  },
  "07-08": {
    name: "Priscilla and Aquila, Coworkers of the Apostle Paul",
    type: "minor",
    readings: { ot: "Jeremiah 23:23-32", psalms: "Psalm 18:30-36", nt: "Acts 18:1–4, 18–21, 24–28", gospel: "Luke 24:28–35" },
    collect: "God of grace and might, who gave to your servants Aquila and Priscilla gifts of zeal and eloquence to make known the truth of the Gospel: Raise up, we pray, in every country, heralds and evangelists of your kingdom, so that the world may know the immeasurable riches of our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Priscilla and Aquila (first century) were a Jewish Christian married couple and tentmakers who were close friends and coworkers of the Apostle Paul. Mentioned numerous times in the New Testament, they hosted house churches in Corinth, Ephesus, and Rome, and famously instructed the eloquent evangelist Apollos in the Christian faith with greater accuracy."
  },
  "07-11": {
    name: "Benedict of Nursia, Monastic, c.543",
    type: "minor",
    readings: { ot: "1 Kings 17:2-6", psalms: "Psalm 4:1-5", nt: "Philippians 2:12-18", gospel: "Luke 14:26–33" },
    collect: "Gracious God, whose service is perfect freedom and in whose commandments there is nothing harsh nor burdensome: Grant that we, with your servant Benedict, may listen with attentive minds, pray with fervent hearts, and serve you with willing hands, so that we might live at peace with one another and in obedience to your Word, Jesus Christ our Lord, who with you and the Holy Spirit lives and reigns, one God, now and for ever. Amen.",
    bio: "Benedict of Nursia (c. 480–547) is called the 'Father of Western Monasticism' and author of the Rule of Saint Benedict, which has guided Christian monastic life in the West for over fifteen centuries. Appalled by the licentiousness in Rome, he withdrew to live as a hermit at Subiaco. Disciples gathered around him and he eventually founded the monastery of Monte Cassino. His Rule is characterized by moderation, balance, and common sense, emphasizing hospitality, ora et labora (prayer and work), stability, and obedience."
  },
  "07-14": {
    name: "Argula von Grumbach, Scholar and Church Reformer, c.1554",
    type: "minor",
    readings: { ot: "Judges 4:4–9", psalms: "Psalm 118:19–29", nt: "James 2:8-13", gospel: "Matthew 7:24–29" },
    collect: "Almighty God, who gave your servant Argula von Grumbach a spirit of wisdom and power to love your Word and to boldly draw others to its truth: Pour out that same spirit upon us, that we, knowing and loving your Holy Word, may be unashamed of Christ and may not sin against the Holy Spirit that is within us. Amen.",
    bio: "Argula von Grumbach (c. 1492–1554) was a Bavarian noblewoman and the first female Protestant writer, who published highly popular pamphlets defending Reformation theology and the intellectual rights of women. A courageous lay theologian, she debated university professors and nobility, advocating for the authority of Scripture and educational reform."
  },
  "07-17": {
    name: "William White, Bishop, 1836",
    type: "minor",
    readings: { ot: "Jeremiah 1:4–10", psalms: "Psalm 40:4-10", nt: "1 Timothy 3:1-10", gospel: "Mark 4:30–34" },
    collect: "O Lord, who in a time of turmoil and confusion raised up your servant William White to lead your church into ways of stability and peace; Hear our prayer, and give us wise and faithful leaders, that, through their ministry, your people may be blessed and your will be done; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "William White (1748–1836) was the first Bishop of Pennsylvania and one of the principal architects of the constitution and liturgy of the Protestant Episcopal Church in the United States. He served as Presiding Bishop for nearly forty years, helping guide the church through its critical post-Revolutionary reorganization and promoting theological education."
  },
  "07-19": {
    name: "Macrina of Caesarea, Monastic and Teacher, 379",
    type: "minor",
    readings: { ot: "Sirach (Ecclesiasticus) 51:13–22", psalms: "Psalm 119:121-128", nt: "Philippians 3:7-11", gospel: "Mark 3:20–34" },
    collect: "Merciful God, who called your servant Macrina to reveal in her life and teaching the riches of your grace and truth: Grant that we, following her example, may seek after your wisdom and live according to the way of your Son our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Macrina of Caesarea (c. 327–379), known as Macrina the Younger, was a monastically consecrated virgin and a major teacher of the early church. Sibling to Basil the Great, Gregory of Nyssa, and Peter of Sebaste, she established a monastic community on her family's estate, serving as a primary intellectual and spiritual mentor to her celebrated theologian brothers."
  },
  "07-20": {
    name: "Elizabeth Cady Stanton, Amelia Bloomer, and Sojourner Truth, Social Reformers",
    type: "minor",
    readings: { ot: "Esther 1:1-21", psalms: "Psalm 146", nt: "1 Peter 4:10-11", gospel: "Luke 11:5–10" },
    collect: "O God, whose Spirit guides us into all truth and makes us free: Strengthen and sustain us as you did your servants Elizabeth, Amelia, and Sojourner. Give us vision and courage to stand against oppression and injustice and all that works against the glorious liberty to which you call all your children; through Jesus Christ our Savior, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Elizabeth Cady Stanton (1815–1902), Amelia Bloomer (1818–1894), and Sojourner Truth (c. 1797–1883) were pioneering social reformers who worked tirelessly for women's rights, abolition, and temperance. Grounded in their respective Christian convictions, they challenged the legal and social subordination of women, advocating for suffrage, educational opportunities, and human equality."
  },
  "07-21": {
    name: "Maria Skobtsova, Monastic and Martyr, 1945",
    type: "minor",
    readings: { ot: "Judges 5:1–9", psalms: "Psalm 9:7-10", nt: "Romans 8:28-30", gospel: "John 2:1-10" },
    collect: "O Creator and Giver of Life, who crowned your martyr Maria Skobtsova with glory and gave her as an example of service to the suffering and poor even unto death: Teach us to love Christ in our neighbors, and thereby battle injustice and evil with the light of the Resurrection; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God in glory everlasting. Amen.",
    bio: "Maria Skobtsova (1891–1945), also known as Mother Maria of Paris, was a Russian noblewoman and intellectual who emigrated to France, became a non-traditional Orthodox nun, and dedicated her life to serving the homeless, poor, and marginalized. During the Nazi occupation of Paris, she actively rescued Jews and was subsequently martyred at Ravensbrück."
  },
  "07-22": {
    name: "Saint Mary Magdalene",
    type: "major",
    readings: {
      morning: { ot: "Zephaniah 3:14-20", nt: "Acts 13:26-33a", gospel: "John 20:11-18", psalms: "Psalm 116" },
      evening: { ot: "Ruth 1:6-18", nt: "2 Corinthians 1:3-7", gospel: "Mark 15:47-16:7", psalms: "Psalm 73" }
    },
    collect: "Almighty God, whose blessed Son restored Mary Magdalene to health of body and of mind, and called her to be a witness of his resurrection: Mercifully grant that by your grace we may be healed from all our infirmities and know you in the power of his unending life; who with you and the Holy Spirit lives and reigns, one God, now and for ever. Amen.",
    bio: "Mary Magdalene was one of the most devoted followers of Jesus, healed by him of seven demons. She was among the women who traveled with Jesus and supported his ministry. She was present at the crucifixion, the burial, and was the first person to see the risen Christ on Easter morning, being sent by him to announce his resurrection to the disciples — earning her the title 'Apostle to the Apostles' in the early church. She is venerated as a saint in both Eastern and Western traditions."
  },
  "07-23": {
    name: "John Cassian, Monastic and Theologian, 435",
    type: "minor",
    readings: { ot: "2 Kings 2:9-15", psalms: "Psalm 145:1-7", nt: "1 John 3:1-3", gospel: "John 1:1-14" },
    collect: "Holy God, whose beloved Son Jesus Christ blessed the pure in heart: Grant that we, together with your servant John Cassian and in union with his prayers, may ever seek the purity with which to behold you as you are; one God in Trinity of persons now and for ever. Amen.",
    bio: "John Cassian (c. 360–435) was a monk and theologian who traveled extensively among the Egyptian Desert Fathers before establishing monasteries in Marseilles, France. His landmark writings, the 'Institutes' and the 'Conferences,' translated the spiritual wisdom of Eastern monasticism for the Western church, deeply influencing Benedict of Nursia."
  },
  "07-24": {
    name: "Thomas a Kempis, Priest and Mystic, 1471",
    type: "minor",
    readings: { ot: "Ecclesiastes 1:1–11", psalms: "Psalm 113", nt: "Ephesians 4:32–5:2", gospel: "Matthew 18:18-20" },
    collect: "Holy Father, you have nourished and strengthened your church by the writings of your servant Thomas à Kempis: Grant that we may learn from him to know what is necessary to be known, to love what is to be loved, to praise what highly pleases you, and always to seek to know and to follow your will; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Thomas a Kempis was a devout priest and mystic who served the church and community with great distinction in 1471. Grounded in a life of prayer and steadfast faith, their witness and teachings continue to inspire Christians to dedicate all aspects of their lives to the glory of God and the service of others."
  },
  "07-25": {
    name: "Saint James the Apostle",
    type: "major",
    readings: {
      morning: { ot: "Jeremiah 45:1-5", nt: "Acts 11:27-12:3", gospel: "Matthew 20:20-28", psalms: "Psalm 94" },
      evening: { ot: "Ezekiel 2:1-7", nt: "Revelation 7:9-17", gospel: "Matthew 10:35-45", psalms: "Psalm 76" }
    },
    collect: "O gracious God, we remember before you today your servant and apostle James, first among the Twelve to suffer martyrdom for the Name of Jesus Christ; and we pray that you will pour out upon the leaders of your Church that spirit of self-denying service by which alone they may have true authority; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "James, son of Zebedee, was one of the Twelve Apostles and the brother of John. With Peter and John, he formed the inner circle present at the Transfiguration and Gethsemane. Jesus gave James and John the nickname 'Boanerges' (Sons of Thunder). James was the first of the Twelve to suffer martyrdom, executed by Herod Agrippa I around 44 AD. He is the patron saint of Spain, where tradition holds that his relics were brought, making Santiago de Compostela one of the great medieval pilgrimage sites."
  },
  "07-26": {
    name: "Parents of the Blessed Virgin Mary",
    type: "minor",
    readings: { ot: "Genesis 17:1-8", psalms: "Psalm 132:11-19", nt: "1 Thessalonians 1:1-5", gospel: "Luke 1:26-33" },
    collect: "Almighty God, heavenly Father, we remember in thanksgiving this day the parents of the Blessed Virgin Mary; and we pray that we all may be made one in the heavenly family of your Son Jesus Christ our Lord; who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
    bio: "The Parents of the Blessed Virgin Mary, traditionally identified as Joachim and Anne, are commemorated in Christian tradition as the grandfather and grandmother of Jesus. Veneration of Saint Anne dates from the early Byzantine period and expanded globally, celebrating their faithful guidance of Mary and the continuity of God's covenant across generations."
  },
  "07-27": {
    name: "William Reed Huntington, Priest, 1909",
    type: "minor",
    readings: { ot: "Joel 2:12–17", psalms: "Psalm 133", nt: "Galatians 6:14-18", gospel: "John 17:20–26" },
    collect: "O Lord our God, we thank you for instilling in the heart of your servant William Reed Huntington a fervent love for your Church and its mission in the world; and we pray that, with unflagging faith in your promises, we may make known to all people your blessed gift of eternal life; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "William Reed Huntington (1838–1909) was an Episcopal priest, theologian, and long-time rector of Grace Church in New York City, who played a central role in liturgical reform and ecumenical relations. He was the primary author of the Chicago-Lambeth Quadrilateral, which defined the four essential benchmarks for Anglican ecumenical dialogue."
  },
  "07-28": {
    name: "Johann Sebastian Bach, Composer, 1750",
    type: "minor",
    readings: { ot: "2 Chronicles 5:11–14", psalms: "Psalm 150", nt: "Colossians 2:2-6", gospel: "Luke 2:8–14" },
    collect: "Sound out your majesty, O God, and call us to your work; that, like thy servant Johann Sebastian Bach, we might present our lives and our works to your glory alone; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Johann Sebastian Bach was a devout composer who served the church and community with great distinction in 1750. Grounded in a life of prayer and steadfast faith, their witness and teachings continue to inspire Christians to dedicate all aspects of their lives to the glory of God and the service of others."
  },
  "07-29": {
    name: "Mary and Martha, of Bethany or [The Philadelphia Eleven]",
    type: "minor",
    readings: { ot: "1 Samuel 25:18–38", psalms: "Psalm 36:1–5", nt: "Romans 12:9-13", gospel: "Luke 10:38–42" },
    collect: "O God, heavenly Father, your Son Jesus Christ enjoyed rest and refreshment in the home of Mary and Martha of Bethany: Give us the will to love you, open our hearts to hear you, and strengthen our hands to serve you in others for his sake; who lives and reigns with you and the Holy Spirit, one God, now and for ever.Amen.",
    bio: "Mary, Martha, and Lazarus of Bethany were three siblings who were close friends of Jesus. Mary sat at Jesus's feet while Martha served. At the anointing at Bethany, Mary anointed Jesus's feet with costly perfume. Martha's confession — 'I believe that you are the Messiah, the Son of God' — is one of the most significant affirmations of faith in the Gospels. Lazarus was raised from the dead by Jesus after four days in the tomb, prefiguring and foreshadowing the resurrection of Christ."
  },
  "07-30": {
    name: "William Wilberforce, Social Reformer, 1833",
    type: "minor",
    readings: { ot: "2 Samuel 12:1–10", psalms: "Psalm 35:23-28", nt: "James 5:1-6", gospel: "Matthew 20:1-16" },
    collect: "Let your continual mercy, O Lord, kindle in your Church the never-failing gift of love; that, following the example of your servant William Wilberforce, we may have grace to defend the poor, and maintain the cause of those who have no helper; for the sake of him who gave his life for us, your Son our Savior Jesus Christ, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "William Wilberforce (1759–1833) was an English politician who led the campaign to abolish the slave trade in the British Empire. Converted to evangelical Christianity in 1785 through the influence of John Newton (author of 'Amazing Grace'), he devoted his life to moral reform and abolition. After nearly two decades of parliamentary struggle, the Slave Trade Act of 1807 abolished the slave trade. Wilberforce continued working for the abolition of slavery itself, which was achieved three days before his death in 1833."
  },
  "07-31": {
    name: "Ignatius of Loyola, Priest and Spiritual Writer, 1556",
    type: "minor",
    readings: { ot: "Genesis 32:22–31", psalms: "Psalm 22:27-30", nt: "1 Corinthians 10:31-11:1", gospel: "Luke 9:57–62" },
    collect: "Almighty God, who called Ignatius of Loyola to the service of your Divine Majesty and to seek you in all things; Give us also the grace to labor without counting the cost and to seek no reward other than knowing that we do your will; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, now and for ever.Amen.",
    bio: "Ignatius of Loyola (1491–1556) was a Spanish soldier who, recovering from a cannonball wound, underwent a profound conversion through reading about Christ and the saints. He founded the Society of Jesus (Jesuits) in 1540, which played a central role in the Counter-Reformation, in education (founding hundreds of schools), and in worldwide missionary work. His 'Spiritual Exercises' is one of the most influential works of Christian spirituality ever written."
  },
  "08-01": {
    name: "Joseph of Arimathaea",
    type: "minor",
    readings: { ot: "Proverbs 4:10–18", psalms: "Psalm 128", nt: "James 1:17–18", gospel: "Luke 23:50–56" },
    collect: "Merciful God, whose servant Joseph of Arimathea with reverence and godly fear prepared the body of our Lord and Savior for burial and laid it in his own tomb: Grant to us, your faithful people, grace and courage to love and serve Jesus with sincere devotion all the days of our life; through the same Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Joseph of Arimathaea (first century) was a wealthy member of the Sanhedrin and a secret disciple of Jesus, who courageously asked Pontius Pilate for Jesus' body after the crucifixion. He provided his own new rock-hewn tomb for Jesus' burial and wrapped the body in clean linen, exemplifying loving, quiet devotion in a moment of extreme crisis."
  },
  "08-03": {
    name: "Joanna, Mary, and Salome, Myrrh-Bearing Women",
    type: "minor",
    readings: { ot: "Job 2:11-13", psalms: "Psalm 50", nt: "Acts 2:29–36", gospel: "Mark 16:1–8" },
    collect: "Almighty God, who revealed the resurrection of your Son to Joanna, Mary, and Salome as they faithfully came bearing myrrh to his tomb: Grant that we too may perceive the presence of the risen Lord in the midst of pain and fear, and go forth proclaiming his resurrection; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Joanna, Mary, and Salome (first century) were among the faithful women who followed Jesus from Galilee, supported his ministry, and witnessed his crucifixion and burial. Grounded in their deep devotion, they were the first 'Myrrh-Bearing Women' to visit the empty tomb on Easter morning, receiving the angelic proclamation of the Resurrection."
  },
  "08-06": {
    name: "The Transfiguration of Our Lord Jesus Christ",
    type: "major",
    readings: {
      morning: { ot: "Exodus 34:29-35", nt: "2 Peter 1:13-21", gospel: "Luke 9:28-36", psalms: "Psalm 99" },
      evening: { ot: "Daniel 7:9-10, 13-14", nt: "2 Corinthians 3:12-4:2", gospel: "Mark 9:2-10", psalms: "Psalm 2" }
    },
    collect: "O God, who on the holy mount revealed to chosen witnesses your well-beloved Son, wonderfully transfigured, in raiment white and glistening: Mercifully grant that we, being delivered from the disquietude of this world, may by faith behold the King in his beauty; who with you, O Father, and you, O Holy Spirit, lives and reigns, one God, for ever and ever. Amen.",
    bio: "The Transfiguration is one of the principal feasts of the church year, celebrating the occasion when Jesus took Peter, James, and John to a high mountain, where his face shone like the sun and his garments became dazzling white. Moses and Elijah appeared with him, and God's voice declared 'This is my Son, my Beloved; listen to him.' The Transfiguration gave the disciples a vision of Christ's divine glory to sustain their faith through the coming passion. The feast has been celebrated in the Eastern church since at least the fifth century."
  },
  "08-07": {
    name: "John Mason Neale, Priest and Hymnographer, 1866",
    type: "minor",
    readings: { ot: "2 Chronicles 20:20–21", psalms: "Psalm 102:18-28", nt: "1 Corinthians 1:1–9", gospel: "Matthew 13:44–46" },
    collect: "Grant, O God, that in all time of our testing we may know your presence and obey your will; that, following the example of your servant John Mason Neale, we may with integrity and courage accomplish what you give us to do, and endure what you give us to bear; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "John Mason Neale (1818–1866) was a brilliant English priest, scholar, and hymnwriter who translated hundreds of ancient Greek and Latin hymns into English, restoring them to active worship. The founder of the Society of Saint Margaret, an Anglican sisterhood, he dedicated his life to caring for the poor and sick while enriching church liturgy with hymns like 'O Come, O Come, Emmanuel.'"
  },
  "08-08": {
    name: "Dominic, Priest and Friar, 1221",
    type: "minor",
    readings: { ot: "Ecclesiastes 12:1–8", psalms: "Psalm 103:1-7", nt: "Romans 10:13–17", gospel: "John 7:16–18" },
    collect: "Almighty God, grant unto your people a hunger for your Word and an urgent longing to share your Gospel; that, like your servant Dominic, we might labor to bring the whole world to the knowledge and love of you as you are revealed in your Son Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Dominic (1170–1221) was a Spanish priest who founded the Order of Preachers (Dominicans) in 1216. He established the order to combat the Albigensian heresy through educated preaching. The Dominicans became one of the most important orders in the medieval church, producing Thomas Aquinas and Albert the Great. Dominic was known for his poverty, ceaseless prayer, compassion for those in error, and burning desire for the salvation of all people."
  },
  "08-09": {
    name: "Edith Stein (Teresa Benedicta of the Cross), Philosopher, Monastic, and Martyr 1942",
    type: "minor",
    readings: { ot: "Jeremiah 31:31–34", psalms: "Psalm 119:49–56", nt: "2 Corinthians 12:1-10", gospel: "John 3:1–15" },
    collect: "Pour out your grace upon thy church, O God; that, like your servant Edith Stein, we may always seek what is true, defend what is right, reprove what is evil, and forgive those who sin against us, even as your Son commanded; through the same Jesus Christ our Lord, to whom with you and the Holy Spirit be all honor and glory, now and for ever. Amen.",
    bio: "Edith Stein (1891–1942), also known as Teresa Benedicta of the Cross, was a German-Jewish philosopher who converted to Catholicism, became a Carmelite nun, and was martyred at Auschwitz. A brilliant intellectual who integrated phenomenology with Thomistic philosophy, her life of contemplative prayer and ultimate sacrifice stands as a powerful witness of faith, intellectual integrity, and solidarity with her people."
  },
  "08-10": {
    name: "Laurence of Rome, Deacon and Martyr, 258",
    type: "minor",
    readings: { ot: "Daniel 3:19–27", psalms: "Psalm 126", nt: "2 Corinthians 9:6–10", gospel: "Luke 14:12-14" },
    collect: "Almighty God, by whose grace and power your servant Laurence triumphed over suffering and despised death: Grant that we may be steadfast in service to the poor and outcast, and may share with him in the joys of your everlasting kingdom; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Laurence (died 258) was one of the seven deacons of Rome, martyred three days after Pope Sixtus II during the persecution of Emperor Valerian. When Roman authorities demanded the church's treasures, Laurence brought the poor and sick, saying 'Here is the church's treasure.' He was executed by being roasted on a gridiron. His legendary cheerfulness during torture — reportedly saying 'Turn me over, I'm done on this side' — has made him one of the most beloved martyrs of the early church."
  },
  "08-11": {
    name: "Clare of Assisi, Monastic, 1253",
    type: "minor",
    readings: { ot: "Ecclesiastes 5:8–15", psalms: "Psalm 49:16-20", nt: "1 Peter 4:1–2", gospel: "Luke 12:32–34" },
    collect: "O God, whose blessed Son became poor that we through his poverty might be rich: Deliver us from an inordinate love of this world, that we, inspired by the devotion of your servant Clare, might serve you with singleness of heart, and attain to the riches of the age to come; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Clare of Assisi (1194–1253) was an Italian mystic who founded the Order of Poor Ladies (Poor Clares) with Francis of Assisi. Born to a wealthy family, she ran away to join Francis in 1212. Despite persistent papal pressure to adopt a more comfortable rule, Clare fought throughout her life to maintain strict poverty — her 'privilege of poverty.' She was the first woman known to have written her own monastic rule and received papal approval for it."
  },
  "08-12": {
    name: "Florence Nightingale, Nurse, 1910",
    type: "minor",
    readings: { ot: "Jeremiah 30:12–17", psalms: "Psalm 41", nt: "1 Corinthians 12:4–11", gospel: "Luke 10:29–37" },
    collect: "O God, who gave grace to your servant Florence Nightingale to bear your healing love into the shadow of death: Grant to all who heal the same virtues of patience, mercy, and steadfast love, that your saving health may be revealed to all; through Jesus Christ, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Florence Nightingale (1820–1910) was a British social reformer, statistician, and the founder of modern professional nursing. Driven by what she experienced as a divine calling to serve others, her pioneering work during the Crimean War established sanitary nursing standards, and her subsequent efforts transformed healthcare and hospital design worldwide, exemplifying the ministry of healing."
  },
  "08-13": {
    name: "Jeremy Taylor, Bishop and Theologian, 1667",
    type: "minor",
    readings: { ot: "Ecclesiastes 3:1–15", psalms: "Psalm 114", nt: "Romans 14:7–12", gospel: "Mark 13:32–37" },
    collect: "O God, whose days are without end, and whose mercies cannot be numbered: Make us, like your servant Jeremy Taylor, deeply aware of the shortness and uncertainty of human life; and let your Holy Spirit lead us in holiness and righteousness all our days; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Jeremy Taylor (1613–1667) was an Anglican bishop and theologian called the 'Shakespeare of Divines' for the beauty of his prose. During the Interregnum he wrote 'Holy Living' (1650) and 'Holy Dying' (1651), which guided generations of Anglicans in the practice of Christian faith. His 'Liberty of Prophesying' (1647) was an early defense of religious toleration. He became Bishop of Down and Connor in Ireland after the Restoration."
  },
  "08-14": {
    name: "Jonathan Myrick Daniels, Martyr, 1965",
    type: "minor",
    readings: { ot: "Amos 5:18–24", psalms: "Psalm 85:7–13", nt: "Galatians 3:22–28", gospel: "Luke 1:46–55" },
    collect: "O God of justice and compassion, who puts down the proud and mighty from their place, and lifts up the poor and the afflicted: We give you thanks for your faithful witness Jonathan Myrick Daniels, who, in the midst of injustice and violence, risked and gave his life for another; and we pray that we, following his example, may make no peace with oppression; through Jesus Christ our Savior, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Jonathan Myrick Daniels (1939–1965) was an Episcopal seminarian from New Hampshire murdered during the Civil Rights Movement. Moved by Dr. King's call in Selma, he went to Alabama to register Black voters. After being jailed and released in Hayneville, he was shot on August 20, 1965, by a deputy sheriff when he pushed a young Black girl out of the line of fire. He died instantly at age twenty-six. He is commemorated in the Episcopal Church as a martyr for the cause of civil rights."
  },
  "08-15": {
    name: "Saint Mary the Virgin, Mother of Our Lord Jesus Christ",
    type: "major",
    readings: {
      morning: { ot: "Isaiah 61:10-11", nt: "Galatians 4:4-7", gospel: "Luke 1:46-55", psalms: "Psalm 34" },
      evening: { ot: "1 Samuel 2:1-10", nt: "Revelation 11:19-12:6, 10", gospel: "Luke 1:26-38", psalms: "Psalm 45" }
    },
    collect: "O God, you have taken to yourself the blessed Virgin Mary, mother of your incarnate Son: Grant that we, who have been redeemed by his blood, may share with her the glory of your eternal kingdom; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "The feast of Saint Mary the Virgin on August 15 honors the Blessed Virgin Mary as the Mother of Our Lord. Mary occupies a unique place in the history of salvation as the one through whom God the Son entered human existence. The New Testament portrays her as a woman of great faith and obedience, present from the Annunciation through the Crucifixion and Pentecost. Her Magnificat has been sung at Evening Prayer across the centuries. The Anglican tradition honors her highly while avoiding dogmas that go beyond scripture."
  },
  "08-20": {
    name: "Bernard of Clairvaux, Monastic and Theologian, 1153",
    type: "minor",
    readings: { ot: "Song of Songs 1:1–8", psalms: "Psalm 139:1–9", nt: "Jude 1–3", gospel: "Mark 10:23-31" },
    collect: "O God, by whose grace your servant Bernard of Clairvaux, kindled with the flame of your love, became a burning and a shining light in your church: Grant that we also may be aflame with the spirit of love and discipline and walk before you as children of light; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Bernard of Clairvaux (1090–1153) was a French Cistercian monk who became one of the most influential figures of the twelfth century. He founded the monastery of Clairvaux, which became the center of Cistercian expansion across Europe. He was a brilliant preacher and writer; his sermons on the Song of Songs are classics of medieval spirituality. He preached the Second Crusade and exercised enormous influence on the papacy and European politics. He is a Doctor of the Church and is known as the 'Last of the Fathers.'"
  },
  "08-24": {
    name: "Saint Bartholomew the Apostle",
    type: "major",
    readings: {
      morning: { ot: "Deuteronomy 18:15-18", nt: "Acts 5:12-16", gospel: "Luke 22:24-30", psalms: "Psalm 91" },
      evening: { ot: "Genesis 28:10-17", nt: "1 Corinthians 4:9-15", gospel: "John 1:43-51", psalms: "Psalm 86" }
    },
    collect: "Almighty and everlasting God, who gave to your apostle Bartholomew grace truly to believe and to preach your Word: Grant that your Church may love what he believed and preach what he taught; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Bartholomew is one of the Twelve Apostles, often identified with Nathanael of Cana — 'the Israelite in whom there is no guile' — who exclaimed 'Can anything good come out of Nazareth?' before Jesus confirmed his faith. According to tradition, he was a missionary in Asia Minor and particularly Armenia, where he is said to have been martyred by being flayed alive. He is the patron saint of Armenia and is depicted in art holding his own skin."
  },
  "08-25": {
    name: "Louis, King, 1270",
    type: "minor",
    readings: { ot: "Wisdom 7:1-6", psalms: "Psalm 21:1–7", nt: "Colossians 2:6–10", gospel: "Mark 2:13–17" },
    collect: "O God, you called your servant Louis of France to an earthly throne that he might advance your heavenly kingdom, and gave him zeal for your church and love for your people: Mercifully grant that we who commemorate him this day may be fruitful in good works and attain to the glorious crown of your saints; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Louis IX (1214–1270) was a devout King of France who dedicated his reign to promoting justice, supporting charities, establishing hospitals, and patronizing religious art and architecture, including the Sainte-Chapelle in Paris. Known for his personal austerity, concern for the poor, and regular distribution of alms, he sought to govern according to Christian ideals."
  },
  "08-27": {
    name: "Thomas Gallaudet and Henry Winter Syle, Priests, 1902 and 1890 28 Augustine of Hippo, Bishop and Theologian, 430",
    type: "minor",
    readings: { ot: "Isaiah 35:1–7", psalms: "Psalm 119:1–8", nt: "2 Thessalonians 1:3–4", gospel: "Mark 7:31–37" },
    collect: "O Loving God, whose will it is that everyone should come to you and be saved: We bless your holy Name for your servants Thomas Gallaudet and Henry Winter Syle, and we pray that you will continually move your Church to respond in love to the needs of all people; through Jesus Christ, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Thomas Gallaudet (1822–1902) and Henry Winter Syle (1846–1890) were pioneering priests who established deaf ministries in the Episcopal Church. Gallaudet founded St. Ann's Church for the Deaf in New York City, and Syle, who was deaf, became the first deaf person ordained in the Episcopal Church, dedicating his life to education, spiritual care, and advocacy for deaf communities."
  },
  "08-28": {
    name: "Augustine of Hippo, Bishop and Teacher of the Faith",
    type: "minor",
    readings: { ot: "Ecclesiasticus 39:1-9", psalms: "Psalm 119:97-104", nt: "1 Corinthians 1:18-25", gospel: "John 17:18-23" },
    collect: "Lord God, the light of the minds that know you, the life of the souls that love you, and the strength of the thoughts that seek you: Help us so to know you that we may truly love you, and so to love you that we may fully serve you, whom to serve is perfect freedom; through Jesus Christ our Lord. Amen.",
    bio: "Augustine of Hippo (354–430) is one of the most important theologians in Western Christianity. Born in North Africa, he spent early life in intellectual pursuits and moral struggles before his conversion in Milan in 386 under Ambrose's influence, described in his 'Confessions.' As Bishop of Hippo for thirty-five years, he produced a vast body of theological writing including 'The City of God' and 'On the Trinity.' His understanding of grace, free will, and original sin shaped Western Christianity more profoundly than any other single theologian."
  },
  "08-29": {
    name: "The Beheading of Saint John the Baptist",
    type: "minor",
    readings: { ot: "Wisdom 2:23-3:9", psalms: "Psalm 5:1-5", nt: "2 Corinthians 4:5–11", gospel: "Matthew 14:1–12" },
    collect: "Almighty God, who called your servant John the Baptist to go before your Son our Lord both in life and death; Grant that we who remember his witness may with boldness speak your truth and in humility hear it when it is spoken to us, through Jesus Christ, the firstborn from the dead, who with you and the Holy Spirit lives and reigns one God for ever and ever. Amen.",
    bio: "The Beheading of Saint John the Baptist commemorates the martyrdom of John the Baptist, who was executed by Herod Antipas for his bold defense of God's moral law. As the forerunner of Christ, his death foreshadowed the sacrifice of Jesus, and he is widely venerated as a powerful witness to truth, repentance, and prophetic courage."
  },
  "08-30": {
    name: "Margaret Ward, Margaret Clitherow, and Anne Line, Martyrs",
    type: "minor",
    readings: { ot: "Ezekiel 37:1–14", psalms: "Psalm 43", nt: "Romans 1:16-17", gospel: "Mark 13:3–13" },
    collect: "Most Merciful God, who despises not a broken and contrite heart and has promised to fill those who hunger and thirst after righteousness; We humbly beseech you, remember not the sins and offenses of our ancestors, but grant that, like your servants Margaret Ward, Margaret Clitherow, and Anne Line, we may sanctify you in our hearts and be always ready to answer for our faith with meekness and fear; through our only Mediator and Advocate, Jesus Christ our Lord. Amen.",
    bio: "Margaret Ward (d. 1588), Margaret Clitherow (1556–1586), and Anne Line (c. 1563–1601) were English laywomen who were executed under Queen Elizabeth I for harbor and support of Roman Catholic priests. Grounded in their deep spiritual convictions, they demonstrated extraordinary courage and resourcefulness in maintaining their faith, remembered as martyrs of conscience."
  },
  "08-31": {
    name: "Aidan, Bishop of Lindisfarne, 651",
    type: "minor",
    readings: { ot: "Proverbs 3:21-32", psalms: "Psalm 103:13-18", nt: "1 Corinthians 9:16-23", gospel: "Matthew 19:27-30" },
    collect: "O loving God, you called your servant Aidan from the cloister to re-establish the Christian mission in northern England: Grant that we, following his example, may use what you have given us for the relief of human need, and may persevere in commending the saving Gospel of our Redeemer Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Aidan (died 651) was an Irish monk from Iona who became the Apostle of Northumbria. At King Oswald's request, he made his base on Lindisfarne (Holy Island) and traveled throughout Northumbria on foot, preaching to all. He established schools, founded churches, bought the freedom of slaves, and cared for the poor. The Venerable Bede, who did not always agree with Celtic practices, praised Aidan highly for his personal holiness and genuine concern for all people's spiritual welfare."
  },
  "09-01": {
    name: "David Pendleton Oakerhater, Deacon, 1931",
    type: "minor",
    readings: { ot: "Daniel 1:1–17", psalms: "Psalm 11", nt: "Romans 8:1–6", gospel: "Luke 10:1–9" },
    collect: "O God of unsearchable wisdom and mercy; Liberate us from bondage to self, and empower us to serve you and our neighbors, that like your servant David Oakerhater, we might bring those who do not know you to the knowledge and love of you; through Jesus Christ, the captain of our salvation, who lives and reigns with you and the Holy Spirit, one God for ever and ever. Amen.",
    bio: "David Pendleton Oakerhater (c. 1847–1931), also known as Medicine Water, was a Cheyenne warrior who converted to Christianity while imprisoned in Florida, became an Episcopal deacon, and returned to Oklahoma to serve as a missionary to his people for forty years. A courageous and beloved peacemaker, he pioneered native leadership and dedicated his life to his people."
  },
  "09-02": {
    name: "The Martyrs of New Guinea, 1942",
    type: "minor",
    readings: { ot: "1 Chronicles 22:11–13", psalms: "Psalm 130", nt: "Revelation 7:9–12", gospel: "Luke 12:4–12" },
    collect: "Almighty God, we remember before you this day the blessed martyrs of New Guinea, who, following the example of their Savior, laid down their lives for their friends, and we pray that we who honor their memory may imitate their loyalty and faith; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "The Martyrs of New Guinea commemorates the group of twelve Anglican missionaries—including priests, teachers, and nurses—who were executed by Japanese forces in 1942 during World War II for refusing to abandon their flocks. Their heroic dedication and ultimate sacrifice bore witness to the global solidarity of the church, inspiring generations of Christians."
  },
  "09-03": {
    name: "Phoebe, Deacon",
    type: "minor",
    readings: { ot: "Romans 16:1–7", psalms: "Psalm 40:4-10", nt: "", gospel: "Luke 11:42-54" },
    collect: "Eternal God, who raised up Phoebe as a deacon in your church and minister of your Gospel; Grant us that same grace that, assisted by her prayers and example, we too may take the Gospel to the ends of the earth; through Jesus Christ your Son our Lord who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Phoebe (first century) was a deacon of the church at Cenchreae and a patron of many, including the Apostle Paul. Entrusted by Paul with delivering his Epistle to the Romans, she traveled from Greece to Rome, where she read, interpreted, and distributed the letter, serving as a vital lay leader and patron of the early Christian mission."
  },
  "09-04": {
    name: "Paul Jones, Bishop, 1941",
    type: "minor",
    readings: { ot: "Malachi 2:17-3:5", psalms: "Psalm 120", nt: "1 Peter 3:8-17", gospel: "John 8:31–36" },
    collect: "Merciful God, you sent your beloved Son to preach peace to those who are far off and to those who are near: Raise up in this and every land witnesses who, after the example of your servant Paul Jones, will stand firm in proclaiming the Gospel of the Prince of Peace, our Savior Jesus Christ, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Paul Jones (1880–1941) was the Episcopal Bishop of Utah who was forced to resign his see in 1918 due to his outspoken Christian pacifism and opposition to US entry into World War I. Throughout his later years of dedicated ministry and advocacy, he remained a steadfast witness to the peace of Christ, serving as a powerful example of prophetic integrity."
  },
  "09-05": {
    name: "Katharina Zell, Church Reformer and Writer, 1562",
    type: "minor",
    readings: { ot: "Genesis 38:6–26", psalms: "Psalm 71:17-23", nt: "Galatians 5:13-18", gospel: "Luke 4:23–30" },
    collect: "Almighty God, whose servant Katharina Zell toiled for the reform of your church both in word and in deed: Fill us with the wisdom to speak out in defense of your truth, with love for you and for our neighbor, that we may serve you and welcome all your people with a mother’s heart; through Christ our Lord. Amen.",
    bio: "Katharina Zell (1497–1562) was a German church reformer, writer, and close associate of Martin Bucer, who published numerous theological writings, hymnbooks, and tracts. A tireless advocate for religious toleration and pastoral care, she hosted hundreds of refugees in her home in Strasbourg, exemplifying the Christian ministry of hospitality."
  },
  "09-06": {
    name: "Hannah More, Religious Writer and Philanthropist, 1833",
    type: "minor",
    readings: { ot: "Genesis 21:14–21", psalms: "Psalm 146:4–9", nt: "Romans 13:8-10", gospel: "John 9:1-12" },
    collect: "Almighty God, whose only-begotten Son led captivity captive: Multiply among us faithful witnesses like your servant Hannah More, who will fight for all who are oppressed or held in bondage, and bring us all, we pray, into the glorious liberty that you have promised to all your children; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Hannah More (1745–1833) was a prominent English educator, writer, and philanthropist who worked closely with William Wilberforce in the abolitionist movement. She wrote highly popular moral tracts and established numerous schools in impoverished mining and agricultural districts, dedicated to providing spiritual education and social uplift."
  },
  "09-07": {
    name: "Kassiani, Poet and Hymnographer, 865",
    type: "minor",
    readings: { ot: "1 Samuel 2:1–10", psalms: "Psalm 57:6-11", nt: "1 Corinthians 7:29-35", gospel: "Mark 4:30–34" },
    collect: "O God of boundless mercy, whose handmaiden Kassiani brought forth poetry and song: Inspire in your church a new song, that following her most excellent example, we may boldly proclaim the truth of your Word; even Jesus Christ, our Savior and Deliverer. Amen.",
    bio: "Kassiani (c. 810–865) was a Byzantine abbess, poet, composer, and hymnographer whose beautiful liturgical hymns are celebrated as masterpieces of Orthodox liturgical art. The author of the famous 'Hymn of Kassiani,' sung during Holy Week, she integrated deep theological insight, musical form, and poetic elegance, recognized as a primary Byzantine musical voice."
  },
  "09-08": {
    name: "The Nativity of the Blessed Virgin Mary",
    type: "minor",
    readings: { ot: "1 Samuel 1:10–20", psalms: "Psalm 27:1-5", nt: "Ephesians 1:3-14", gospel: "Luke 1:26–38" },
    collect: "Father in heaven, by your grace the virgin mother of your incarnate Son was blessed in bearing him, but still more blessed in keeping your word: Grant us who honor the exaltation of her lowliness to follow the example of her devotion to your will; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "The Nativity of the Blessed Virgin Mary commemorates the birth of Mary, the mother of Jesus, which has been celebrated on this date since at least the sixth century. This feast celebrates the beginning of the immediate preparation for the Incarnation, honoring Mary's vital role in the history of salvation and the fulfillment of God's promises."
  },
  "09-09": {
    name: "Constance, Thecla, Ruth, Frances, Charles Parsons, and Louis Schuyler, Martyrs, 1878",
    type: "minor",
    readings: { ot: "Jeremiah 18:1-11", psalms: "Psalm 17:6-10", nt: "2 Corinthians 1:3–5", gospel: "John 12:24–28" },
    collect: "We give you thanks and praise, O God of compassion, for the heroic witness of the Martyrs of Memphis, who, in a time of plague and pestilence, were steadfast in their care for the sick and dying, and loved not their own lives, even unto death; Inspire in us a like love and commitment to those in need, following the example of our Savior Jesus Christ; who with you and the Holy Spirit lives and reigns, one God, now and for ever. Amen.",
    bio: "Constance and her Companions (d. 1878), known as the Martyrs of Memphis, were a group of Episcopal sisters and clergy who refused to flee Memphis during a devastating yellow fever epidemic. Dedicating themselves to nursing the sick and dying, Constance, the Sister Superior, and her fellow sisters and priests contracted the disease and died, exemplifying supreme Christian love."
  },
  "09-10": {
    name: "Alexander Crummell, Priest, 1898",
    type: "minor",
    readings: { ot: "Ecclesiasticus 39:6–11", psalms: "Psalm 19:7–11", nt: "James 1:2-5", gospel: "Mark 4:21–25" },
    collect: "Almighty and everlasting God, we thank you for your servant Alexander Crummell, whom you called to preach the gospel to those who were far off and to those who were near: Raise up, in this and every land, evangelists and heralds of your kingdom, that your church may proclaim the unsearchable riches of our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Alexander Crummell (1819–1898) was a brilliant African American priest, missionary, and intellectual who, after being refused admission to US seminaries due to his race, earned a degree from Cambridge and spent twenty years as a missionary in Liberia. Later returning to Washington, D.C., he founded the American Negro Academy and dedicated his life to Black education, theology, and racial equality."
  },
  "09-12": {
    name: "John Henry Hobart, Bishop of New York, 1830",
    type: "minor",
    readings: { ot: "Job 38:1, 22-30", psalms: "Psalm 92:1-7", nt: "Titus 1:7–9", gospel: "Mark 8:1–13" },
    collect: "Revive your church, Lord God of hosts, whenever it falls into complacency and sloth, by raising up devoted leaders like your servant John Henry Hobart; and grant that their faith and vigor of mind may awaken your people to your message and their mission; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "John Henry Hobart (1775–1830) was the third Bishop of New York and one of the most energetic leaders the Episcopal Church has known. Consecrated bishop in 1811, he transformed the Diocese of New York into one of the strongest dioceses in the country. He founded the General Theological Seminary in New York City and established hundreds of congregations. His High Church emphasis on catholicity, apostolic succession, and sacramental life shaped the Episcopal Church's identity."
  },
  "09-13": {
    name: "Cyprian of Carthage, Bishop and Martyr, 258",
    type: "minor",
    readings: { ot: "Jeremiah 14:13-18", psalms: "Psalm 116:10–17", nt: "James 4:11–17", gospel: "John 10:11–16" },
    collect: "Almighty God, who gave to your servant Cyprian boldness to confess the Name of our Savior Jesus Christ before the rulers of this world and courage to die for this faith: Grant that we may always be ready to give a reason for the hope that is in us and to suffer gladly for the sake of our Lord Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Cyprian of Carthage (c. 200–258) was a brilliant Roman rhetorician who converted to Christianity and was elected Bishop of Carthage. A leading early church father and theologian, he steered the North African church through intense persecutions and theological controversies over the lapsed, writing classic texts on the unity of the church before suffering martyrdom."
  },
  "09-14": {
    name: "Holy Cross Day",
    type: "major",
    readings: {
      morning: { ot: "Numbers 21:4-9", nt: "1 Corinthians 1:18-24", gospel: "John 3:11-17", psalms: "Psalm 66" },
      evening: { ot: "Isaiah 45:21-25", nt: "Philippians 2:5-11", gospel: "John 12:31-36a", psalms: "Psalm 118" }
    },
    collect: "Almighty God, whose Son our Savior Jesus Christ was lifted high upon the cross that he might draw the whole world unto himself: Mercifully grant that we, who glory in the mystery of our redemption, may have grace to take up our cross and follow him; who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.",
    bio: "Holy Cross Day (also known as the Triumph of the Cross) commemorates the dedication of the Church of the Holy Sepulchre in Jerusalem in 335, on the site where the cross of Jesus was believed to have been found by Saint Helena, the mother of Emperor Constantine. The feast celebrates the cross not merely as an instrument of torture, but as the symbol of Christ's victory over sin and death, and the means of the world's redemption."
  },
  "09-15": {
    name: "Catherine of Genoa, Mystic and Nurse, 1510",
    type: "minor",
    readings: { ot: "Zephaniah 1:7–18", psalms: "Psalm 86:3–12", nt: "James 5:1-6", gospel: "Mark 9:43-50" },
    collect: "Gracious God, reveal to your church the depths of your love; that, like your servant Catherine of Genoa, we might give ourselves in loving service, knowing that we have been perfectly loved by you; through Jesus Christ our Lord. Amen.",
    bio: "Catherine of Genoa (1447–1510) was an Italian mystic, author, and nurse who, after a dramatic spiritual conversion, dedicated her life to caring for plague victims at the hospital in Genoa. Her celebrated writings on purgatory and spiritual theology, written with intense intellectual passion, explored the purifying fire of divine love and the soul's union with God."
  },
  "09-16": {
    name: "Ninian, Bishop, c.430",
    type: "minor",
    readings: { ot: "Numbers 22:21–33", psalms: "Psalm 97", nt: "Acts 10:21-35", gospel: "Matthew 28:16–20" },
    collect: "O God, who by the preaching of your blessed servant and bishop Ninian caused the light of the Gospel to shine in the land of Britain: Grant, we pray, that having his life and labors in remembrance we may show our thankfulness by following the example of his zeal and patience; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Ninian (c. 360–432) is one of the earliest known Christian missionaries in Scotland, sometimes called the 'Apostle of the Southern Picts.' Educated in Rome and consecrated a bishop, he established a monastery and church at Whithorn in Galloway, known as Candida Casa (White House) — possibly the first stone church in Scotland. From there he evangelized among the Britons and Picts. Much of what we know comes from Bede, who praised his learning and orthodox faith."
  },
  "09-17": {
    name: "Hildegard of Bingen, Mystic and Scholar, 1179",
    type: "minor",
    readings: { ot: "Ecclesiasticus 43:1–12", psalms: "Psalm 8", nt: "Colossians 3:14-17", gospel: "John 3:16–21" },
    collect: "God of all times and seasons: Give us grace that we, after the example of your servant Hildegard, may both know and make known the joy and jubilation of being part of your creation, and show forth your glory in the world; through Jesus Christ our Savior, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Hildegard of Bingen (1098–1179) was a German Benedictine abbess, mystic, theologian, composer, and herbalist — one of the most remarkable persons of the medieval period. From early childhood she experienced visions she described as 'the Living Light.' With Bernard of Clairvaux's encouragement, she began to record them in 'Scivias.' She also wrote on natural history and medicine, composed music still performed today, and corresponded with popes, bishops, and rulers throughout Europe. She was declared a Doctor of the Church in 2012."
  },
  "09-18": {
    name: "Edward Bouverie Pusey, Priest, 1882",
    type: "minor",
    readings: { ot: "Ezekiel 36:24-28", psalms: "Psalm 106:1–5", nt: "1 Peter 2:19–23", gospel: "Matthew 18:12-14" },
    collect: "Grant, O God, that in all time of our testing we may know your presence and obey your will; that, following the example of your servant Edward Bouverie Pusey, we may with integrity and courage accomplish what you give us to do, and endure what you give us to bear; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Edward Bouverie Pusey (1800–1882) was a brilliant English priest, Hebrew scholar, and theologian who, as a leader of the Oxford Movement, spent decades defending the Catholic heritage of the Anglican church. His extensive writings on the sacraments, spiritual life, and biblical commentary, along with his role in reviving religious sisterhoods, had a profound impact on Anglicanism."
  },
  "09-19": {
    name: "Theodore of Tarsus, Archbishop of Canterbury, 690",
    type: "minor",
    readings: { ot: "Malachi 2:5-7", psalms: "Psalm 34:9–14", nt: "James 2:14–26", gospel: "Matthew 24:42–47" },
    collect: "Almighty God, who gave your servant Theodore of Tarsus gifts of grace and wisdom to establish unity where there had been division and order where there had been chaos: Create in your church, by the operation of the Holy Spirit, such godly union and concord that it may proclaim, both by word and example, the Gospel of the Prince of Peace; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Theodore of Tarsus (c. 602–690) was a Greek scholar appointed Archbishop of Canterbury by Pope Vitalian in 668, at age sixty-six. Despite his advanced age, he proved the most effective organizer the early English church ever had. Traveling throughout England, he established canonical boundaries for dioceses, held church councils, and organized education. With his companion Hadrian, he founded the Canterbury school — the greatest center of learning in seventh-century Europe — and unified the church in England as no one before him had done."
  },
  "09-20": {
    name: "John Coleridge Patteson, Bishop, and his Companions, Martyrs, 1871",
    type: "minor",
    readings: { ot: "1 Chronicles 21:1-13", psalms: "Psalm 9:11-20", nt: "1 Peter 4:12–19", gospel: "Mark 8:34–38" },
    collect: "Almighty God, who called your faithful servant John Coleridge Patteson and his companions to witness to the gospel, and by their labors and sufferings raised up a people for your own possession: Pour out your Holy Spirit upon your church in every land, that, by the service and sacrifice of many, your holy Name may be glorified and your kingdom enlarged; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "John Coleridge Patteson (1827–1871) was the first Anglican Bishop of Melanesia, who traveled extensively by boat to minister to the islands of the South Pacific, learning numerous indigenous languages. He was martyred by local inhabitants on the island of Nukapu in retaliation for the kidnapping of Maoris by European slave traders, becoming a modern martyr."
  },
  "09-21": {
    name: "Saint Matthew, Apostle and Evangelist",
    type: "major",
    readings: {
      morning: { ot: "Ecclesiasticus 39:1-10", nt: "Acts 16:6-15", gospel: "Matthew 9:9-13", psalms: "Psalm 119:33-56" },
      evening: { ot: "Proverbs 3:1-17", nt: "2 Timothy 3:14-17", gospel: "Luke 5:27-32", psalms: "Psalm 19" }
    },
    collect: "We thank you, heavenly Father, for the witness of your apostle and evangelist Matthew to the Gospel of your Son our Savior; and we pray that, after his example, we may with ready wills and hearts obey the calling of our Lord to follow him; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Matthew was a tax collector sitting at his customs booth when Jesus called him with the words 'Follow me,' and he immediately left everything and followed. Tax collectors were despised as collaborators with Roman occupiers. Matthew's invitation of Jesus to his home for a meal, which included other tax collectors and sinners, elicited the Pharisees' criticism — to which Jesus responded: 'I have come not to call the righteous, but sinners.' Matthew is identified as the author of the Gospel bearing his name. According to tradition he was martyred in Ethiopia."
  },
  "09-22": {
    name: "Philander Chase, Bishop, 1852",
    type: "minor",
    readings: { ot: "Isaiah 44:1–8", psalms: "Psalm 117", nt: "Acts 18:7-11", gospel: "Luke 9:1–6" },
    collect: "Almighty God, whose Son Jesus Christ is the pioneer and perfecter of our faith: Grant that like your servant Philander Chase we might have the grace to minister in Christ’s name in every place, led by bold witnesses to the Gospel of the Prince of Peace, Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Philander Chase (1775–1852) was a pioneering Episcopal bishop who founded Kenyon College and Bexley Hall in Ohio, and later Jubilee College in Illinois. Known for his extraordinary energy and zeal on the frontier, he traveled extensively to establish missions, parishes, and schools, helping lay the foundation of the Episcopal Church in the Midwest."
  },
  "09-23": {
    name: "Thecla of Iconium, Proto-Martyr Among Women, c.70",
    type: "minor",
    readings: { ot: "Judges 4:16–24", psalms: "Psalm 123", nt: "2 Timothy 3:10-12", gospel: "Luke 24:1–11" },
    collect: "God of liberating power, who called Thecla to proclaim the gospel and did not permit any obstacle or peril to inhibit her: Empower courageous evangelists among us, that men and women everywhere may know the freedom that you offer us in Jesus Christ, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Thecla of Iconium (first century) is celebrated in Christian tradition as a powerful early Christian missionary, virgin, and proto-martyr among women. A close associate and disciple of the Apostle Paul, according to tradition she miraculously survived multiple executions and traveled widely preaching the gospel, serving as a primary model of female spiritual strength."
  },
  "09-24": {
    name: "Anna Ellison Butler Alexander, Deaconess and Teacher, 1947",
    type: "minor",
    readings: { ot: "Deuteronomy 6:4–9", psalms: "Psalm 78:1-7", nt: "2 Timothy 3:14-4:5", gospel: "Matthew 11:25-30" },
    collect: "Loving God, who called Anna Alexander as a deaconess in your church: Grant us the wisdom to teach the gospel of Christ to whomever we meet, by word and by example, that all may come to the enlightenment that you intend for your people; through Jesus Christ, our Teacher and Savior. Amen.",
    bio: "Anna Ellison Butler Alexander (c. 1865–1947) was a pioneering African American deaconess and educator who established the St. Cyprian's Episcopal Church and School in Darien, Georgia. The first Black deaconess in the Episcopal Church, she spent decades providing quality education, vocational training, and spiritual care to Black children in rural Georgia."
  },
  "09-25": {
    name: "Sergius of Radonezh, Monastic, Moscow, 1392",
    type: "minor",
    readings: { ot: "Ecclesiasticus 29:1–9", psalms: "Psalm 39:4-8", nt: "1 John 2:15-17", gospel: "Mark 2:23–28" },
    collect: "O God, whose blessed Son became poor that we, through his poverty, might be rich: Deliver us from an inordinate love of this world, that we, inspired by the devotion of your servant Sergius, may serve you with singleness of heart and attain to the riches of the age to come; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Sergius of Radonezh (c. 1314–1392) was a Russian Orthodox monk who established the Trinity-Sergius Monastery near Moscow, the most important monastery in Russia. He dedicated it to the Holy Trinity, expressing the conviction that trinitarian unity should inspire human unity and cooperation. Known for his humility, love of the poor, and mystical gifts, he mediated between feuding Russian princes and blessed the Russian army before the Battle of Kulikovo in 1380, which began the process of ending Mongol domination of Russia."
  },
  "09-26": {
    name: "Lancelot Andrewes, Bishop, 1626",
    type: "minor",
    readings: { ot: "Isaiah 11:1-9", psalms: "Psalm 63:1–7", nt: "1 Timothy 2:1–7", gospel: "Luke 11:1–4" },
    collect: "Perfect in us, Almighty God, whatever is lacking of your gifts: of faith, to increase it; of hope, to establish it; of love, to kindle it; that like your servant Lancelot Andrewes we may live in the life of your grace and glory; through Jesus Christ your Son our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Lancelot Andrewes (1555–1626) was a saintly Bishop of Winchester, a brilliant scholar, and a leading translator of the King James Bible who helped define classical Anglican theology. Renowned for his intellectual sermons and his deeply personal prayer collection, the 'Preces Privatae,' he emphasized the beauty of holiness in worship and the mystery of the Incarnation."
  },
  "09-27": {
    name: "Euphrosyne/Smaragdus of Alexandria, Monastic, fifth century",
    type: "minor",
    readings: { ot: "Judges 11:32–40", psalms: "Psalm 19", nt: "1 Corinthians 13:8-13", gospel: "Luke 14:26–33" },
    collect: "Merciful God, who looks not with outward eyes but discerns the heart of each: we confess that those whom we love the most are often strangers to us. Give to all parents and children, we pray, the grace to see one another as they truly are and as you have called them to be. All this we ask in the name of Jesus Christ, our only mediator and advocate. Amen.",
    bio: "Euphrosyne of Alexandria (fifth century), also known as Smaragdus, was an early Christian saint who disguised herself as a man to enter a monastery in Alexandria to pursue a life of quiet prayer and avoid a forced marriage. She lived a life of rigorous devotion, serving as a trusted spiritual counselor to her own father before revealing her identity upon her death."
  },
  "09-28": {
    name: "Paula and Eustochium of Rome, Monastics and Scholars, 404 and c.419",
    type: "minor",
    readings: { ot: "Judith 8:9–17", psalms: "Psalm 111", nt: "James 4:1-10", gospel: "Luke 8:1–3" },
    collect: "Compel us, O God, to attend diligently to your Word, as did your faithful servants Paula and Eustochium; that, by the inspiration of the Holy Spirit, we may find it profitable for doctrine, for reproof, for correction, and for instruction in righteousness; and that thereby we may be made wise unto salvation through faith in Christ Jesus our Lord. Amen.",
    bio: "Paula (347–404) and Eustochium (c. 368–419) were Roman noblewomen, mother and daughter, who were close associates of Jerome. Brilliantly educated, they moved to Bethlehem, where they established double monasteries, assisted Jerome in translating the Vulgate Bible, and dedicated their lives to prayer, biblical study, and hospitality for pilgrims."
  },
  "09-29": {
    name: "Saint Michael and All Angels",
    type: "major",
    readings: {
      morning: { ot: "Genesis 28:10-17", nt: "Revelation 12:7-12", gospel: "John 1:47-51", psalms: "Psalm 103:19-22" },
      evening: { ot: "Daniel 12:1-3", nt: "Acts 12:1-11", gospel: "Luke 10:17-20", psalms: "Psalm 91" }
    },
    collect: "Everlasting God, you have ordained and constituted in a wonderful order the ministries of angels and mortals: Mercifully grant that, as your holy angels always serve and worship you in heaven, so by your appointment they may help and defend us here on earth; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Michaelmas, the feast of Saint Michael and All Angels, celebrates the ministry of angels in the service of God. Michael ('Who is like God?') appears in Daniel as the great prince who protects God's people, in Revelation as the leader of heavenly armies defeating the dragon, and in Jude in dispute with the devil. Gabriel ('God is my strength') is the angel of the Annunciation. Raphael ('God heals') is an archangel in Tobit. The feast dates from the fifth century."
  },
  "09-30": {
    name: "Jerome, Priest, and Scholar, 420",
    type: "minor",
    readings: { ot: "Numbers 9:15-23", psalms: "Psalm 19:7–14", nt: "Colossians 3:5–11", gospel: "Luke 24:44–48" },
    collect: "O God, who gave us the holy Scriptures as a light to shine upon our path: Grant us, after the example of your servant Jerome, so to learn of you according to your holy Word, that we may find the Light that shines more and more to the perfect day; even Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and ever. Amen.",
    bio: "Jerome (c. 347–420) was a brilliant Roman priest, monk, and scholar who is widely recognized as one of the greatest biblical translators and theologians in history. Working from Bethlehem, he translated the Old and New Testaments from their original Hebrew and Greek into Latin, producing the Vulgate, and wrote extensive commentaries on Scripture."
  },
  "10-01": {
    name: "Thérèse of Lisieux, Monastic, 1897",
    type: "minor",
    readings: { ot: "Judith 8:1–8", psalms: "Psalm 119:1–8", nt: "Colossians 3:1-4", gospel: "Luke 21:1–4" },
    collect: "Gracious Father, who called your servant Thérèse to a life of fervent prayer: Give to us that spirit of prayer and zeal for the ministry of the Gospel, that the love of Christ may be known throughout all the world; through the same Jesus Christ, our Lord. Amen.",
    bio: "Thérèse of Lisieux (1873–1897) was a young French Discalced Carmelite nun who is celebrated for her 'little way' of spiritual childhood, which emphasizes seeking holiness in the ordinary actions of daily life with great love. Her spiritual autobiography, 'The Story of a Soul,' became a global classic, offering a profound theology of grace."
  },
  "10-02": {
    name: "Remigius of Rheims, Bishop, c.530",
    type: "minor",
    readings: { ot: "Jeremiah 10:1–11", psalms: "Psalm 135:13–21", nt: "1 John 4:1–6", gospel: "John 14:1–7" },
    collect: "Almighty God, who by your servant Remigius spread the truth of the gospel and the fullness of the catholic faith: Grant that we who glory in the name of Christian may show forth our faith in worthy deeds; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Remigius of Rheims (c. 437–533) was a saintly Bishop of Rheims who served for seventy-three years and is celebrated as the Apostle of the Franks. He famously converted and baptized Clovis I, the King of the Franks, on Christmas Day in 496, establishing a historic alliance between the French monarchy and the church that reshaped Western Europe."
  },
  "10-03": {
    name: "John Raleigh Mott, Ecumenist and Missionary, 1955",
    type: "minor",
    readings: { ot: "Isaiah 60:1–5", psalms: "Psalm 133", nt: "1 John 2:12-14", gospel: "Luke 7:11–17" },
    collect: "Everlasting God, who leads your people’s feet into the ways of peace; Raise up heralds and evangelists of your kingdom like your servant John Mott, that your church may make known to all the world the unsearchable riches and unsurpassed peace of your Son, Jesus Christ our Lord; to whom with you and the Holy Spirit be all honor and glory, now and for ever. Amen.",
    bio: "John R. Mott (1865–1955) was an American lay leader and Nobel Peace Prize laureate who played a central role in the global ecumenical movement. He served as leader of the YMCA, co-founded the World Student Christian Federation, and chaired the historic 1910 World Missionary Conference in Edinburgh, which laid the foundation for the World Council of Churches."
  },
  "10-04": {
    name: "Francis of Assisi, Friar, 1226",
    type: "minor",
    readings: { ot: "Job 39:1–18", psalms: "Psalm 121", nt: "Acts 4:32-35, 5:1-11", gospel: "Luke 12:13-21" },
    collect: "Most high, omnipotent, good Lord, grant your people grace to renounce gladly the vanities of this world; that, following the way of blessed Francis, we may, for love of you, delight in your whole creation with perfectness of joy; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Francis of Assisi (1181–1226) was an Italian friar and preacher who founded the Franciscan Order. Born Giovanni di Pietro di Bernardone to a wealthy cloth merchant family, a series of spiritual experiences transformed him. He embraced radical poverty, preached throughout Italy, and founded the Order of Friars Minor. His 'Canticle of the Sun' is one of the earliest Italian literary works. He received the stigmata (the five wounds of Christ) in 1224. He is patron saint of animals and ecology."
  },
  "10-06": {
    name: "William Tyndale, Priest, 1536 7 Birgitta of Sweden, Mystic, 1373",
    type: "minor",
    readings: { ot: "Proverbs 8:10-17", psalms: "Psalm 15", nt: "James 1:19–27", gospel: "John 12:44–50" },
    collect: "Reveal to us your saving word, O God, that like your servant William Tyndale we might hear its call to repentance and new life. Plant in our hearts that same consuming passion to bring the scriptures to all people in their native tongue, and the strength to endure amidst all obstacles; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "William Tyndale (c. 1494–1536) was an English priest who produced the first English New Testament translated from the original Greek (1526). Because he produced these translations without church authority and held Protestant sympathies, he was declared a heretic. Captured in Antwerp in 1535, he was strangled and burned at the stake in 1536. His dying prayer — 'Lord, open the King of England's eyes' — was reportedly answered within a year, when Henry VIII authorized an English Bible."
  },
  "10-09": {
    name: "Robert Grosseteste, Bishop, 1253",
    type: "minor",
    readings: { ot: "Ezekiel 1:1-14", psalms: "Psalm 90:13-17", nt: "Titus 2:11-15", gospel: "Luke 16:10–15" },
    collect: "O God, our heavenly Father, who raised up your faithful servant Robert Grosseteste to be a bishop and pastor in your church and to feed your flock: Give abundantly to all pastors the gifts of your Holy Spirit, that they may minister in your household as true servants of Christ and stewards of your divine mysteries; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Robert Grosseteste (c. 1175–1253) was a saintly Bishop of Lincoln, a brilliant scholar, and one of the preeminent intellectuals of the high Middle Ages. A pioneer of the scientific method and a translator of Greek classics, he reform-minded his diocese, defended the rights of the clergy, and advocated for the spiritual care of the poor."
  },
  "10-10": {
    name: "Vida Dutton Scudder, Educator, 1954",
    type: "minor",
    readings: { ot: "Job 38:1, 34-41", psalms: "Psalm 25:1–14", nt: "Romans 12:1-2, 14-21", gospel: "John 6:37–51" },
    collect: "Most gracious God, you sent your beloved Son to preach peace to those who are far off and to those who are near: Raise up in your church witnesses who, after the example of your servant Vida Dutton Scudder, stand firm in proclaiming the power of the gospel of Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Vida Dutton Scudder (1861–1954) was an American author, educator, and Christian socialist who pioneered the college settlement movement in Boston. A professor of literature at Wellesley College, she integrated academic scholarship with social activism, advocating for labor rights, economic equality, and peace, grounded in her deep Anglo-Catholic faith."
  },
  "10-11": {
    name: "Philip, Deacon and Evangelist",
    type: "minor",
    readings: { ot: "Leviticus 19:9-16", psalms: "Psalm 67", nt: "Acts 8:26–40", gospel: "Luke 24:13–27" },
    collect: "O God, who has made of one blood all the peoples of the earth and sent your Son to preach peace to those who are far off and to those who are near: Grant that we, following the example of your servant Philip, may bring your Word to those who seek you, for the glory of your Name; through Jesus Christ our Lord, who lives and reigns with you in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Philip the Deacon (first century), also known as Philip the Evangelist, was one of the seven deacons appointed in the early church at Jerusalem. Mentioned in the Acts of the Apostles, he preached the gospel in Samaria, famously baptized the Ethiopian eunuch on the road to Gaza, and hosted the Apostle Paul in Caesarea, exemplifying early missionary zeal."
  },
  "10-12": {
    name: "Edith Cavell, Nurse, 1915",
    type: "minor",
    readings: { ot: "Joshua 2:1–21", psalms: "Psalm 46", nt: "Romans 2:1-4", gospel: "Matthew 18:21-35" },
    collect: "Living God, the source of all healing and wholeness: we bless you for the compassionate witness of your servant Edith Cavell. Inspire us to be agents of peace and reconciliation in a world beset by injustice, poverty, and war. We ask this through Jesus Christ, the Prince of Peace, who lives and reigns with you and the Holy Spirit, one God, to the ages of ages. Amen.",
    bio: "Edith Cavell (1865–1915) was a heroic British nurse who established professional nursing standards in Belgium and cared for wounded soldiers of all nationalities without distinction during World War I. Arrested by German forces for helping Allied soldiers escape occupied Belgium, she was executed, her final words expressing her deep faith: 'Patriotism is not enough. I must have no hatred or bitterness towards anyone.'"
  },
  "10-14": {
    name: "Samuel Isaac Joseph Schereschewsky, Bishop and Missionary, 1906",
    type: "minor",
    readings: { ot: "Isaiah 12:1-6", psalms: "Psalm 90:1-12;", nt: "2 Corinthians 4:11–18", gospel: "Luke 15:1–7" },
    collect: "O God, who in your providence called Joseph Schereschewsky to the ministry of this church and gave him the gifts and the perseverance to translate the Holy Scriptures: Inspire us, by his example and prayers, to commit our talents to your service, confident that you uphold those whom you call; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Samuel Isaac Joseph Schereschewsky (1831–1906) was a Lithuanian-born Jewish convert who became the Episcopal Bishop of Shanghai. A brilliant linguist, he translated the Book of Common Prayer and the entire Bible into Wenli (classical Chinese) and Mandarin, and founded St. John's University in Shanghai, pioneering educational ministry."
  },
  "10-15": {
    name: "Teresa of Avila, Mystic and Monastic Reformer, 1582",
    type: "minor",
    readings: { ot: "1 Samuel 3:1–18", psalms: "Psalm 42:1–7", nt: "Romans 8:22-27", gospel: "Mark 1:35–39" },
    collect: "O God, who by your Holy Spirit moved Teresa of Avila to manifest to your church the way of perfection: Grant us, we pray, to be nourished by her teaching, and enkindle within us a keen and unquenchable longing for true holiness; through Jesus Christ, the joy of loving hearts, who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
    bio: "Teresa of Ávila (1515–1582) was a Spanish Carmelite nun, mystic, and Doctor of the Church who was also a remarkable administrator and reformer. After intense spiritual struggle in midlife, she underwent profound mystical experiences and wrote classics of spiritual literature including 'The Interior Castle' and 'The Way of Perfection.' With John of the Cross, she reformed the Carmelite order, founding seventeen convents of Discalced Carmelites. She was the first woman declared a Doctor of the Church (1970)."
  },
  "10-16": {
    name: "Hugh Latimer, Nicholas Ridley, and Thomas Cranmer, 1555, 1556",
    type: "minor",
    readings: { ot: "Zephaniah 3:1-5", psalms: "Psalm 142", nt: "1 Corinthians 3:9–14", gospel: "John 15:18-20" },
    collect: "Keep us, O Lord, constant in faith and zealous in witness, that, like your servants Hugh Latimer, Nicholas Ridley, and Thomas Cranmer we may live in your fear, die in your favor, and rest in your peace; for the sake of Jesus Christ, your Son our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Hugh Latimer (c. 1487–1555), Nicholas Ridley (c. 1500–1555), and Thomas Cranmer (1489–1556) were leaders of the English Reformation burned at the stake during Queen Mary I's reign. Latimer was Bishop of Worcester; Ridley was Bishop of London; Cranmer was Archbishop of Canterbury and principal author of the Book of Common Prayer. Latimer and Ridley were burned together in Oxford on October 16, 1555. Latimer reportedly encouraged Ridley: 'We shall this day light such a candle by God's grace in England as I trust shall never be put out.' Cranmer was burned in March 1556."
  },
  "10-17": {
    name: "Ignatius of Antioch, Bishop and Martyr, c.115",
    type: "minor",
    readings: { ot: "Jeremiah 9:1-9", psalms: "Psalm 28", nt: "Romans 8:18-25", gospel: "John 12:23–26" },
    collect: "Almighty God, we praise your Name for your bishop and martyr Ignatius of Antioch, who offered himself as grain to be ground by the teeth of wild beasts that he might present to you the pure bread of sacrifice. Accept, we pray, the willing tribute of our lives and give us a share in the pure and spotless offering of your Son Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Ignatius of Antioch (c. 35–108) was the Bishop of Antioch, traditionally a disciple of the apostle John. Around 108 he was arrested and transported to Rome to be executed. During the journey he wrote seven letters to churches that are among the most important documents of early Christianity. He pleaded with the Roman church not to intervene on his behalf as he longed for martyrdom. His letters emphasize episcopal authority, the reality of Christ's humanity against Docetism, and the centrality of the Eucharist. He first used the term 'Catholic Church' in surviving literature."
  },
  "10-18": {
    name: "Saint Luke the Evangelist",
    type: "major",
    readings: {
      morning: { ot: "Ecclesiasticus 38:1-4, 6-10, 12-14", nt: "2 Timothy 4:5-13", gospel: "Luke 4:14-21", psalms: "Psalm 103" },
      evening: { ot: "Isaiah 61:1-6", nt: "Acts 16:6-12a", gospel: "Luke 10:1-9", psalms: "Psalm 67" }
    },
    collect: "Almighty God, who inspired your servant Luke the physician to set forth in the Gospel the love and healing power of your Son: Graciously continue in your Church this love and power to heal, to the praise and glory of your Name; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Luke is identified as 'the beloved physician' and a companion of Paul. Tradition identifies him as the author of both the Gospel of Luke and the Acts of the Apostles — together the largest portion of the New Testament. His Gospel is distinctive for its emphasis on mercy, prayer, women, the poor, and the universal scope of salvation. It contains parables not found elsewhere: the Good Samaritan, the Prodigal Son, the Rich Man and Lazarus, and the Ten Lepers. Tradition holds he was Greek, born in Antioch."
  },
  "10-19": {
    name: "Henry Martyn, Priest and Missionary, 1812",
    type: "minor",
    readings: { ot: "Isaiah 49:1–7", psalms: "Psalm 98", nt: "Romans 1:8-15", gospel: "John 4:21–26" },
    collect: "O God of the nations, who gave to your servant Henry Martyn a longing to share your Gospel with all peoples; Inspire the church in our own day with that said desire, that we may be eager to commit both life and talents to you who gave them; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Henry Martyn (1781–1812) was an Anglican priest and chaplain to the East India Company who dedicated his life to missionary service in India and Persia. A brilliant scholar, he translated the New Testament and the Book of Common Prayer into Hindustani and Persian, and spent his final years traveling and preaching before dying of illness in Turkey."
  },
  "10-20": {
    name: "Cornelius the Centurion, the Centurion",
    type: "minor",
    readings: { ot: "Isaiah 56:6-8", psalms: "Psalm 29", nt: "Acts 11:1-18", gospel: "Luke 13:22-29" },
    collect: "O God, who by your Spirit called Cornelius the Centurion to be the first Christian among the Gentiles: Grant to your church such a ready will to go where you send and to do what you command that the prejudices that blind us might cease, and that we might welcome all who turn to you in love; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Cornelius the Centurion (first century) was a Roman centurion stationed in Caesarea who is celebrated as the first Gentile convert to Christianity. Mentioned in Acts 10, his divine vision led him to send for the Apostle Peter, whose subsequent preaching and the descent of the Holy Spirit on Cornelius' household opened the door of the church to all nations."
  },
  "10-23": {
    name: "Saint James of Jerusalem, Brother of Our Lord Jesus Christ and Martyr",
    type: "major",
    readings: {
      morning: { ot: "Jeremiah 11:18-23", nt: "James 1:1-12", gospel: "Matthew 13:54-58", psalms: "Psalm 48" },
      evening: { ot: "Isaiah 65:17-25", nt: "Hebrews 11:32-12:2", gospel: "Matthew 13:54-58", psalms: "Psalm 119:145-168" }
    },
    collect: "Grant, O God, that, following the example of your servant James the Just, brother of our Lord, your Church may give itself continually to prayer and to the reconciliation of all who are at variance; through Jesus Christ our Lord. Amen.",
    bio: "James of Jerusalem, 'the brother of the Lord,' was the leader of the Jerusalem church following Peter's departure. He presided over the Jerusalem Council (Acts 15) which decided whether Gentile converts needed circumcision. Known as 'James the Just' for his intense personal piety — so much time spent in prayer that his knees became 'like those of a camel' — he was martyred in Jerusalem in 62 AD according to the historian Josephus. The Letter of James is attributed to him."
  },
  "10-25": {
    name: "Tabitha (Dorcas) of Joppa",
    type: "minor",
    readings: { ot: "Leviticus 19:32-37", psalms: "Psalm 101:1-4", nt: "Acts 9:36–42", gospel: "Matthew 25:1–13" },
    collect: "Most Holy God, who did raise from the dead your servant Tabitha to display your power and confirm that your Son is Lord; Grant unto us your grace, that, aided by her prayers and example, we may be given a new life in you, to do works pleasing in your sight; through Jesus Christ your Son our Lord; who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Tabitha, historically known as Dorcas in Greek, was a Christian disciple in Joppa who was celebrated for her extraordinary charity, hospitality, and sewing of garments for widows and the poor. Mentioned in Acts 9, she was miraculously raised from the dead by the Apostle Peter, serving as a powerful witness to the early Christian community."
  },
  "10-26": {
    name: "Alfred, King, 899",
    type: "minor",
    readings: { ot: "Wisdom 6:1–11", psalms: "Psalm 21:1–7", nt: "2 Thessalonians 2:13-17", gospel: "Luke 6:43–49" },
    collect: "O God, who called your servant Alfred to an earthly throne that he might advance your heavenly kingdom, and gave him zeal for your Church and love for your people: Grant that we, inspired by his example and prayers, may remain steadfast in the work you have given us to do for the building up of your reign of love; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Alfred the Great (849–899) was King of Wessex and the only English monarch to receive the title 'the Great.' Venerated in the Anglican tradition for his deep Christian faith, he successfully defended his kingdom against Danish Viking invaders. He promoted use of the English language, translating key Latin works including Boethius's 'Consolation of Philosophy' and Gregory's 'Pastoral Care.' He is also famous for the legend of the burned cakes, symbolizing the trials he faced before his victories."
  },
  "10-28": {
    name: "Saint Simon and Saint Jude, Apostles",
    type: "major",
    readings: {
      morning: { ot: "Isaiah 28:9-16", nt: "Ephesians 4:1-16", gospel: "John 14:15-31", psalms: "Psalm 116" },
      evening: { ot: "Ezekiel 34:11-16", nt: "Ephesians 2:13-22", gospel: "John 4:31-38", psalms: "Psalm 133" }
    },
    collect: "O God, we thank you for the glorious company of the apostles, and especially on this day for Simon and Jude; and we pray that, as they were faithful and zealous in their mission, so we may with ardent devotion make known the love and mercy of our Lord and Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Simon and Jude are two of the Twelve Apostles about whom relatively little is known. Simon is called 'the Zealot,' possibly indicating he had belonged to the Jewish revolutionary movement. Jude (also called Thaddeus) is mentioned in apostle lists but distinguished from Judas Iscariot. The Letter of Jude is attributed to him. According to various traditions, Simon preached in Persia and was martyred there; Jude also preached in Persia. Jude has become particularly venerated as a saint to invoke in hopeless causes."
  },
  "10-30": {
    name: "Maryam of Qidun, Monastic, fourth century",
    type: "minor",
    readings: { ot: "Romans 8:31-39", psalms: "Psalm 31:15-24", nt: "", gospel: "John 8:1–11" },
    collect: "O God of holiness and strength, rescue us from the sins that ensnare us and destroy the evils that defame us, that, like your servant Maryam of Qidun, we may find our own selves inseparable from your love made known in Christ Jesus our Lord; who with you and the Holy Spirit lives and reigns, one God, in glory everlasting. Amen.",
    bio: "Maryam of Qidun (fourth century) was an early Christian saint who disguised herself as a monk to enter a monastery in Syria with her uncle, Abraham of Qidun. She lived a life of rigorous devotion, spent years in quiet prayer, and is celebrated in Eastern Christian tradition for her deep humility, repentance, and dedication to the contemplative life."
  },
  "11-01": {
    name: "All Saints' Day",
    type: "major",
    readings: {
      morning: { ot: "Isaiah 26:1-8", nt: "Hebrews 11:32-12:2", gospel: "Matthew 5:1-12", psalms: "Psalm 111, 112" },
      evening: { ot: "Isaiah 60:1-17", nt: "Revelation 19:1-16", gospel: "Luke 6:20-31", psalms: "Psalm 148, 149" }
    },
    collect: "Almighty God, you have knit together your elect in one communion and fellowship in the mystical body of your Son Christ our Lord: Give us grace so to follow your blessed saints in all virtuous and godly living, that we may come to those ineffable joys that you have prepared for those who truly love you; through Jesus Christ our Lord, who with you and the Holy Spirit lives and reigns, one God, in glory everlasting. Amen.",
    bio: "All Saints' Day celebrates the communion of all saints, both known and unknown, who have departed this life and are gathered in glory. The festival began in the fourth century as a commemoration of all Christian martyrs. Over time it came to honor all the faithful departed who lived lives of exemplary holiness, serving as a reminder of the universal call to holiness and the hope of resurrection. In the Episcopal Church, All Saints' Day is one of the seven principal feasts and a principal day for baptism."
  },
  "11-02": {
    name: "Commemoration of All Souls / All Faithful Departed",
    type: "minor",
    readings: { ot: "Wisdom 3:1–9", psalms: "Psalm 130", nt: "1 Thessalonians 4:13–18", gospel: "John 5:24-27" },
    collect: "O God, the Maker and Redeemer of all believers: Grant to the faithful departed the unsearchable benefits of the passion of your Son; that on the day of his appearing they may be manifested as your children; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "The Commemoration of All Faithful Departed (All Souls' Day) is observed on November 2 as an occasion to pray for and remember all who have died in faith. While All Saints' Day celebrates recognized sanctity, All Souls' Day extends commemoration to all the faithful — including those who may not have lived lives of exceptional holiness but who died trusting in God's mercy. In the Episcopal Church this is observed as a day of solemn remembrance."
  },
  "11-03": {
    name: "Richard Hooker, Priest and Theologian, 1600",
    type: "minor",
    readings: { ot: "Ecclesiasticus 44:10-15", psalms: "Psalm 37:1-9", nt: "1 Corinthians 2:6–16", gospel: "John 17:18–23" },
    collect: "O God of truth and peace, you raised up your servant Richard Hooker in a day of bitter controversy to defend with sound reasoning and great charity the catholic and reformed religion: Grant that we may maintain that middle way, not as a compromise for the sake of peace, but as a comprehension for the sake of truth; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Richard Hooker (1554–1600) was an English priest, theologian, and the primary architect of classical Anglican theology, celebrated for his monumental work, 'Of the Laws of Ecclesiastical Polity.' He established the Anglican via media (middle way), synthesizing Scripture, tradition, and reason as the three essential pillars for theology and church governance."
  },
  "11-04": {
    name: "Adeline Blanchard Tyler and her Companions, Deaconesses",
    type: "minor",
    readings: { ot: "Isaiah 58:1-12", psalms: "Psalm 103:1-6", nt: "Romans 16:1-2, 25-27", gospel: "Matthew 14:13-21" },
    collect: "Merciful God, who endowed Adeline and her companions with faith and courage, wisdom and humility, and called them to serve you as deaconesses, ministering to the sick, the oppressed, and the poor: By your grace, grant that we, following their example, may live to serve you as they did, revealing your steadfast love to the world, through our Lord Jesus Christ. Amen..",
    bio: "Adeline Blanchard Tyler (1805–1875) and her Companions were pioneering deaconesses who established Christ Church and the St. Andrew's Mission in Baltimore, Maryland. Grounded in their deep spiritual convictions, they dedicated their lives to providing quality education, vocational training, and spiritual care to marginalized children in the post-Civil War era."
  },
  "11-06": {
    name: "William Temple, Archbishop of Canterbury, 1944",
    type: "minor",
    readings: { ot: "Exodus 22:21-27", psalms: "Psalm 119:97–104", nt: "Philippians 2:12-13", gospel: "John 1:1-14" },
    collect: "O God of light and love, you illumined your Church through the witness of your servant William Temple: Inspire us, we pray, by his teaching and example, that we may rejoice with courage, confidence, and faith in the Word made flesh, and may be led to establish that city which has justice for its foundation and love for its law; through Jesus Christ, the light of the world, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "William Temple (1881–1944) was the Archbishop of Canterbury during World War II, who is widely recognized as one of the greatest Anglican social theologians of the twentieth century. A passionate ecumenist and advocate for social justice, he was a key architect of the welfare state and wrote extensively on the integration of Christian theology with social reform."
  },
  "11-07": {
    name: "Willibrord, Bishop and Missionary, 739",
    type: "minor",
    readings: { ot: "2 Kings 2:19-25", psalms: "Psalm 105:1-5", nt: "Acts 1:1-9", gospel: "Luke 18:1-8" },
    collect: "O Lord our God, you call whom you will and send them where you choose: We thank you for sending your servant Willibrord to be an apostle to the Low Countries, to turn them from the worship of idols to serve you, the living God; and we entreat you to preserve us from the temptation to exchange the perfect freedom of your service for servitude to false gods and to idols of our own devising; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Willibrord (658–739) was a Northumbrian-born monk who became the 'Apostle of the Frisians.' Sent to Frisia (modern Netherlands) in 690, he obtained the support of Pippin of Herstal and Pope Sergius I, who consecrated him Archbishop of the Frisians in 695. He established his see at Utrecht and worked tirelessly to evangelize the pagan Frisians, founding monasteries and training local clergy despite repeated setbacks from wars between the Franks and Frisians."
  },
  "11-08": {
    name: "Ammonius, Hermit, c.403",
    type: "minor",
    readings: { ot: "1 Samuel 10:20-27", psalms: "Psalm 24", nt: "James 3:1-12", gospel: "Matthew 23:1-12" },
    collect: "Drive far from your church, O God, every vain spirit of clerical ambition, that, like your servant Ammonius, we may refuse to conflate ordination and leadership, and may never confuse rank with holiness; in the name of your son Jesus Christ our Lord, who alone is our great High Priest. Amen. Amen.",
    bio: "Ammonius (c. 320–403), also known as Ammonius of Nitria, was an early Christian hermit and monastic leader who established a community of hermits in the Nitrian Desert of Egypt. A disciple of Antony the Great, he wrote extensively on spiritual direction, asceticism, and the contemplative life, serving as a model of quiet devotion."
  },
  "11-09": {
    name: "Richard Rolle, Walter Hilton, and Margery Kempe, Mystics, 1349, 1396, and c.1440",
    type: "minor",
    readings: { ot: "Job 26:1-14", psalms: "Psalm 63:1-8", nt: "Romans 11-33-36", gospel: "Mark 4:35-41" },
    collect: "Direct our hearts, O Gracious God, and inspire our minds; that like your servants Richard Rolle, Walter Hilton, and Margery Kempe, we might pass through the cloud of unknowing until we behold your glory face to face; in the Name of Jesus Christ our Lord; who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
    bio: "Richard Rolle (c. 1300–1349), Walter Hilton (c. 1340–1396), and Margery Kempe (c. 1373–1438) were English mystics and spiritual writers who made monumental contributions to medieval spirituality. Rolle wrote of the physical sensation of divine love, Hilton compiled the classic guide 'The Scale of Perfection,' and Kempe wrote the first autobiography in English, reflecting a deeply personal devotion."
  },
  "11-10": {
    name: "Leo of Rome, Bishop, 461",
    type: "minor",
    readings: { ot: "Jeremiah 38:1-6", psalms: "Psalm 77:11–15", nt: "2 Timothy 1:6–12", gospel: "Matthew 5:13–19" },
    collect: "O Lord our God, grant that your Church, following the teaching of your servant Leo of Rome, may hold fast the great mystery of our redemption, and adore the one Christ, true God and true Man, neither divided from our human nature nor separate from your divine Being; through the same Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Leo I (c. 400–461), called Leo the Great, served as Bishop of Rome from 440 to 461. His 'Tome' — a letter on the two natures of Christ — was read at the Council of Chalcedon (451) and greeted with the acclamation 'Peter has spoken through Leo.' The council adopted his teaching that Christ is truly God and truly man in one person. His face-to-face meeting with Attila the Hun in 452, which resulted in the Huns' withdrawal from Italy, enhanced his reputation as a defender of the Roman world."
  },
  "11-11": {
    name: "Martin of Tours, Bishop, 397",
    type: "minor",
    readings: { ot: "Hosea 2:18-23", psalms: "Psalm 11", nt: "Galatians 6:1-2", gospel: "Matthew 25:31-46" },
    collect: "Lord God of hosts, you clothed your servant Martin the soldier with the spirit of sacrifice and set him as a bishop in your Church to be a defender of the catholic faith: Give us grace to follow in his holy steps, that, at the last, we may be found clothed with righteousness in the dwellings of peace; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Martin of Tours (c. 316–397) was a Roman soldier who became one of the most celebrated saints of the Western church. Born in Pannonia, he was baptized after the famous incident in which he cut his military cloak in half to give to a freezing beggar — and dreamed of Christ wearing the cloak. After leaving the army, he became a monk and eventually Bishop of Tours. He is remembered for his humility, ministry to the poor, opposition to violence against heretics, and the model of monastic community he established at Marmoutier."
  },
  "11-12": {
    name: "Charles Simeon, Priest, 1836",
    type: "minor",
    readings: { ot: "Amos 6:1-7", psalms: "Psalm 108:1-6", nt: "Ephesians 3:7-12", gospel: "Matthew 22:1-14" },
    collect: "Loving God, whose unerring wisdom and unbounded love order all things: Grant us in all things to see your hand; that, following the example and teaching of your servant Charles Simeon, we may walk with Christ in all simplicity and serve you with a quiet and contented mind; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Charles Simeon (1759–1836) was a founding figure of evangelical Christianity in the Church of England. He served as vicar of Holy Trinity Church, Cambridge, for fifty-four years, exercising enormous influence over generations of students and ordinands. Despite fierce opposition in his early years, he became one of the most beloved preachers in Cambridge. He was a founding member of the Church Missionary Society and the British and Foreign Bible Society."
  },
  "11-14": {
    name: "Consecration of Samuel Seabury, First American Bishop, 1784",
    type: "minor",
    readings: { ot: "1 Samuel 8:1-22", psalms: "Psalm 110:1-4", nt: "Acts 1:15-26", gospel: "Matthew 9:35–38" },
    collect: "We give you thanks, O Lord our God, for your goodness in bestowing upon this church the gift of the episcopate; and we pray that, joined together in unity with our bishops and nourished by your holy sacraments, we may proclaim the Gospel of redemption with apostolic zeal; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Samuel Seabury (1729–1796) was the first bishop of the Episcopal Church in America. When the Revolution separated American Anglicanism from England, Seabury traveled seeking consecration. Blocked by British legal requirements, he went to Scotland where the non-juring Scottish Episcopal Church consecrated him on November 14, 1784 — securing the apostolic succession in American Anglicanism. He returned to Connecticut and served effectively as bishop for twelve years."
  },
  "11-15": {
    name: "Herman of Alaska, Missionary,1837",
    type: "minor",
    readings: { ot: "2 Kings 4:38-41", psalms: "Psalm 148:7-14", nt: "2 Timothy 1:3-7", gospel: "Luke 9:46-48" },
    collect: "Almighty God, who raised up your servant Herman to be a light in the world, and to preach the Gospel to the people of Alaska: Illuminate our hearts, that we also in our own generation may show forth your praise, who called us out of darkness and into your marvelous light; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Herman of Alaska (c. 1756–1837) was a Russian Orthodox monk who served as a missionary to the Aleut people on Spruce Island, Alaska. A beloved and saintly hermit, he defended the indigenous people against exploitation by Russian fur traders, established schools and orphanages, and lived a life of intense prayer and absolute dedication to the gospel."
  },
  "11-16": {
    name: "Margaret of Scotland, Queen, 1093",
    type: "minor",
    readings: { ot: "Proverbs 31:10-20", psalms: "Psalm 139:10-17", nt: "2 John 1-9", gospel: "Matthew 13:44-46" },
    collect: "O God, who called your servant Margaret to an earthly throne that she might advance your heavenly kingdom, and gave her zeal for your church and love for your people: Mercifully grant that we also may be fruitful in good works, and attain to the glorious crown of your saints; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Margaret of Scotland (c. 1045–1093) was a Hungarian-born princess who became Queen of Scotland as wife of King Malcolm III. A woman of deep personal piety, she reformed the Scottish church, standardizing practices and promoting Sunday observance; founded churches and monasteries; and cared personally for orphans, the poor, and pilgrims. Her biography written by her confessor Turgot is one of the earliest biographies of a Scottish figure."
  },
  "11-17": {
    name: "Hugh, of Lincoln, Bishop1200",
    type: "minor",
    readings: { ot: "Tobit 6:1-6", psalms: "Psalm 15", nt: "Titus 2:7-8", gospel: "Mark 13:32-37" },
    collect: "Holy God, who endowed your servant Hugh of Lincoln with wise and cheerful boldness, and taught him to commend the discipline of holy life to kings and princes: Grant that we also, rejoicing in the Good News of your mercy, and fearing nothing but the loss of you, may be bold to speak the truth in love, in the name of Jesus Christ our Redeemer; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Hugh of Lincoln (1135/1140–1200) was a Burgundian-born Carthusian monk who became one of the most beloved bishops of medieval England. Called to England by King Henry II to establish the first Carthusian monastery in England, he became Bishop of Lincoln in 1186. He was known for standing fearlessly up to the king, ministering to lepers and Jews (protecting them from anti-Semitic violence), and for his remarkable pet swan which followed him everywhere and slept at his feet."
  },
  "11-18": {
    name: "Hilda of Whitby, Abbess, 680",
    type: "minor",
    readings: { ot: "Proverbs 6:20-23", psalms: "Psalm 122", nt: "Ephesians 4:1–6", gospel: "Matthew 19:27-30" },
    collect: "O God of peace, by whose grace the abbess Hilda was endowed with gifts of justice, prudence, and strength to rule as a wise mother over the nuns and monks of her household: Raise up these gifts in us, that we, following her example and prayers, may build up one another in love to the benefit of your church; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Hilda (614–680) was baptized with her great-uncle King Edwin of Northumbria at Easter 627. After living at court until age thirty-three, she became a nun and eventually Abbess of Whitby, which became a center of learning and missionary training under her guidance — five of its monks became bishops. She hosted the famous Synod of Whitby in 664, which decided that the English church would follow Roman rather than Celtic traditions for calculating Easter. She also encouraged the poet Cædmon."
  },
  "11-19": {
    name: "Elizabeth of Hungary, Princess, 1231",
    type: "minor",
    readings: { ot: "Tobit 12:8-10", psalms: "Psalm 112", nt: "2 Corinthians 8:7-15", gospel: "Luke 12:32-34" },
    collect: "Almighty God, by your grace your servant Elizabeth of Hungary recognized and honored Jesus in the poor of this world: Grant that we, following her example, may with love and gladness serve those in any need or trouble, in the name and for the sake of Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Elizabeth of Hungary (1207–1231) was a princess who became a model of Christian charity. Daughter of the King of Hungary, after her husband died on crusade in 1227 she was expelled from court, joined the Third Order of Francis of Assisi, and devoted herself entirely to caring for the poor and sick. She built a hospital and personally washed and nursed lepers. She died at age twenty-four and was canonized just four years later — one of the fastest canonizations in history."
  },
  "11-20": {
    name: "Edmund, King, 870",
    type: "minor",
    readings: { ot: "2 Kings 11:1-8", psalms: "Psalm 7:1-10", nt: "Ephesians 6:10-17", gospel: "Matthew 10:16–22" },
    collect: "Merciful God, who gave grace and fortitude to Edmund to die nobly for your Name: Bestow on us your servants the shield of faith, with which we can withstand the assaults of our ancient enemy; through Jesus Christ our Redeemer, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Edmund (c. 841–870) was a saintly King of the East Angles who was captured and martyred by the Danes for refusing to renounce his Christian faith or submit to pagan rulers. Renowned for his justice, piety, and courageous defense of his people, he was widely venerated as a patron saint of England and a model of Christian kingship."
  },
  "11-21": {
    name: "Mechthilde of Hackeborn and Gertrude the Great, Mystics and Thoelogians, 1298 and 1302",
    type: "minor",
    readings: { ot: "", psalms: "Psalm 119:41-48", nt: "Acts 2:42-47", gospel: "Luke 10:38-42" },
    collect: "Almighty God, who gave to your servants Mechthilde and Gertrude special gifts of grace to understand and teach the truth in Christ Jesus: Grant that by their teachings we may know you, the one true God, and Jesus Christ your Son; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Mechthilde of Hackeborn (1241–1298) and Gertrude the Great (1256–1302) were Cistercian nuns of the monastery of Helfta in Saxony, who made monumental contributions to medieval mysticism. Renowned for their intellectual brilliance, they wrote extensive mystical treatises on the Sacred Heart, divine love, and liturgical prayer, elevating Helfta to a major center of learning."
  },
  "11-22": {
    name: "Clive Staples Lewis, Apologist and Spiritual Writer, 1963",
    type: "minor",
    readings: { ot: "Proverbs 23:15-18", psalms: "Psalm 139:1–9", nt: "1 Peter 1:3–9", gospel: "John 16:7–15" },
    collect: "O God of searing truth and surpassing beauty, we give you thanks for Clive Staples Lewis, whose sanctified imagination lit fires of faith in young and old alike. Surprise us also with your joy and draw us into that new and abundant life which is ours in Christ Jesus, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Clive Staples Lewis (1898–1963) was a brilliant Oxford and Cambridge scholar, literary critic, and lay theologian who became the most influential Christian apologist of the twentieth century. Through works of imaginative fiction like 'The Chronicles of Narnia' and robust apologetics like 'Mere Christianity,' he articulated the depth of the Christian faith with unique clarity, logic, and creative genius."
  },
  "11-23": {
    name: "Clement of Rome, Bishop, c.100",
    type: "minor",
    readings: { ot: "1 Chronicles 23:28-32", psalms: "Psalm 78:1–7", nt: "Colossians 2:6-15", gospel: "Luke 6:37–45" },
    collect: "Almighty God, you chose your servant Clement of Rome to recall the Church in Corinth to obedience and stability: Grant that your Church may be grounded and settled in your truth by the indwelling of the Holy Spirit; reveal to it what is not yet known; fill up what is lacking; confirm what has already been revealed; and keep it blameless in your service; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Clement of Rome (died c. 99) served as Bishop of Rome toward the end of the first century. He is best known for a letter from the Roman church to the church in Corinth (1 Clement), one of the most important early Christian documents outside the New Testament. It urges the Corinthian church to restore their deposed elders and demonstrates the early exercise of authority by the Roman church. He is said to have been martyred by being tied to an anchor and thrown into the sea."
  },
  "11-24": {
    name: "Catherine of Alexandria, Barbara of Nicomedia, and Margaret of Antioch, Martyrs, c.305",
    type: "minor",
    readings: { ot: "", psalms: "Psalm 43", nt: "Romans 8:31-39", gospel: "Matthew 5:1-12" },
    collect: "Embolden your church, O God, with the stories of your saints Catherine, Barbara, and Margaret, that we might face all trials and adversities with a fearless mind and an unbroken spirit, knowing that we are more than conquerors through Jesus Christ who strengthens us. Through the same Jesus Christ our Lord, Amen.",
    bio: "Catherine of Alexandria, Barbara of Nicomedia, and Margaret of Antioch (c. 305) are celebrated in Christian tradition as three of the Holy Helpers who suffered martyrdom during the Great Persecution under the Emperor Diocletian. Renowned for their extraordinary courage, wisdom, and steadfast faith, they served as primary models of female spiritual strength."
  },
  "11-25": {
    name: "James Otis Sargent Huntington, Monastic and Priest, 1935",
    type: "minor",
    readings: { ot: "Nehemiah 5:1-12", psalms: "Psalm 34:1-8", nt: "Galatians 6:14–18", gospel: "John 6:34–38" },
    collect: "Preserve your people, O God, from discouragement in the face of adversity, as you did your servant James Huntington, knowing that when you have begun a good work you will bring it to completion. Through Jesus Christ our Lord, who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
    bio: "James Otis Sargent Huntington (1854–1935) was the founding priest of the Order of the Holy Cross, the first permanent monastic order for men established in the Episcopal Church. Grounded in a life of prayer and simplicity, he dedicated the community to serving the poor, establishing schools, and conducting missions, serving as a primary model of modern monasticism."
  },
  "11-28": {
    name: "Kamehameha and Emma, of Hawaii, King and Queen, 1863 and 1885",
    type: "minor",
    readings: { ot: "Micah 4:1-4", psalms: "Psalm 33:12-22", nt: "Acts 17:22–31", gospel: "Matthew 25:14-30" },
    collect: "O God, who called your servants Kamehameha and Emma to an earthly throne that they might advance your heavenly kingdom, and gave them zeal for you church and love for your people: Mercifully grant that we also may be fruitful in good works, and attain to the glorious crown of your saints; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Kamehameha IV (1834–1863) and Queen Emma (1836–1885) of Hawaii were devout monarchs who established the Anglican Church in Hawaii (the Reformed Catholic Church). Grounded in their deep Christian faith, they co-founded the Queen's Hospital to care for their people during epidemics, established St. Andrew's Cathedral, and translated the Book of Common Prayer into Hawaiian."
  },
  "11-30": {
    name: "Saint Andrew the Apostle",
    type: "major",
    readings: {
      morning: { ot: "Isaiah 49:1-6", nt: "1 Corinthians 4:1-16", gospel: "John 1:35-42", psalms: "Psalm 84" },
      evening: { ot: "Isaiah 55:1-5", nt: "Ephesians 2:13-22", gospel: "John 12:20-32", psalms: "Psalm 96, 100" }
    },
    collect: "Almighty God, who gave such grace unto your holy Apostle Andrew, that he readily obeyed the calling of your Son Jesus Christ, and followed him without delay: Grant unto us all, that we, being called by your holy Word, may forthwith give up ourselves obediently to fulfill your holy commandments; through the same Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Andrew, the brother of Simon Peter, was the first of the disciples called by Jesus. Originally a disciple of John the Baptist from Bethsaida in Galilee, Andrew immediately recognized Jesus as the Messiah and brought his brother Peter to him. In John's Gospel he brings the boy with the loaves and fish before the feeding of the five thousand, and brings Greek-speaking pilgrims to meet Jesus. Tradition holds he was martyred by crucifixion on an X-shaped cross (crux decussata) in Patras, Greece — known as St. Andrew's Cross, now the flag of Scotland."
  },
  "12-01": {
    name: "Charles de Foucauld, Monastic and Martyr, 1916",
    type: "minor",
    readings: { ot: "Habakkuk 3:17-19", psalms: "Psalm 73:24–29", nt: "James 1:1-11", gospel: "John 16:25–33" },
    collect: "Loving God, help us to know you wherever we find you and seek to serve you in all people, that with your servant Charles de Foucauld, we may be faithful even unto death; through Jesus Christ, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Charles de Foucauld (1858–1916) was a French soldier, explorer, and Trappist monk who later lived as a hermit among the Tuareg people in the Algerian Sahara. Known for his extraordinary humility, hospitality, and life of quiet presence, his writings inspired the founding of the Little Brothers and Sisters of Jesus after his martyrdom."
  },
  "12-02": {
    name: "Channing Moore Williams, Bishop and Missionary, 1910",
    type: "minor",
    readings: { ot: "Isaiah 49:22-23", psalms: "Psalm 96:1–7", nt: "Acts 1:1–9", gospel: "Luke 10:1–12" },
    collect: "O God, who in your providence called Channing Moore Williams to the ministry of this church and gave him the gifts and the perseverance to preach the Gospel in new lands: Inspire us, by his example and prayers, to commit our talents to your service, confident that you uphold those whom you call; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Channing Moore Williams (1829–1910) was a pioneering Episcopal bishop who served as a missionary in China and Japan, establishing the headquarters of the Episcopal Church in Tokyo. He founded Rikkyo University and numerous parishes and schools, dedicating his life to spiritual care, education, and ecumenical relations."
  },
  "12-03": {
    name: "Francis Xavier, Priest and Missionary, 1552",
    type: "minor",
    readings: { ot: "Ecclesiasticus 2:1-7", psalms: "Psalm 62", nt: "1 Corinthians 9:16-23", gospel: "Mark 16:15–20" },
    collect: "God of all nations; Raise up in this and every land, evangelists and heralds of your kingdom, that like your servant Francis Xavier we may proclaim the unsearchable riches of our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen Amen.",
    bio: "Francis Xavier (1506–1552) was a Spanish Jesuit priest and missionary who dedicated his life to establishing the Christian faith in India, Southeast Asia, and Japan. A co-founder of the Society of Jesus, he baptized tens of thousands of converts and translated Christian teachings into numerous local languages, pioneering global mission."
  },
  "12-04": {
    name: "John of Damascus, Priest and Theologian, c.760",
    type: "minor",
    readings: { ot: "Wisdom 16:20-26", psalms: "Psalm 118:14-21", nt: "Romans 6:1-11", gospel: "Luke 17:20-21" },
    collect: "Confirm our minds, O Lord, in the mysteries of the true faith, set forth with power by your servant John of Damascus; that we, with him, confessing Jesus to be true God and true Man, and singing the praises of the risen Lord, may, by the power of the resurrection, attain to eternal joy; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "John of Damascus (c. 676–760) was a Syrian priest, monk, and theologian who served as a high official in the Umayyad Caliphate before entering the monastery of Mar Saba near Jerusalem. A primary doctor of the church, he wrote 'The Fount of Knowledge' and famously defended the veneration of icons during the Iconoclastic Controversy."
  },
  "12-05": {
    name: "Clement of Alexandria, Priest and Theologian, c.210",
    type: "minor",
    readings: { ot: "1 Samuel 12:20-25", psalms: "Psalm 34:9–14", nt: "Colossians 1:11–20", gospel: "John 6:57–63" },
    collect: "O God of unsearchable wisdom, you gave your servant Clement grace to understand and teach the truth as it is in Jesus Christ, the source of all truth: Grant to your church the same grace to discern your Word wherever truth is found; through Jesus Christ our unfailing light, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Clement of Alexandria (c. 150–215) was a brilliant Christian theologian and philosopher who led the Catechetical School of Alexandria. A pioneer in synthesizing Greek philosophy with Christian theology, he wrote monumental works of literature, poetry, and theology, demonstrating the reasonableness of Christian revelation."
  },
  "12-06": {
    name: "Nicholas of Myra, Bishop, c.342",
    type: "minor",
    readings: { ot: "1 Kings 17:7-16", psalms: "Psalm 145:8–13", nt: "1 John 4:13-18", gospel: "Mark 10:13–16" },
    collect: "Grant, Almighty God, that your church may be so inspired by the example of your servant Nicholas of Myra, that it may never cease to work for the welfare of children, the safety of sailors, the relief of the poor, and the help of those tossed by tempests of doubt or grief; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Nicholas (c. 270–343) was the Bishop of Myra in Lycia (modern Turkey) and one of the most beloved saints in both Eastern and Western Christianity. The most famous legend about him describes how he secretly provided bags of gold as dowries for three poor sisters, dropping them through a window at night — the origin of gift-giving customs associated with him. His remains were translated to Bari, Italy, in 1087. The Dutch Sinterklaas (from his name) became the basis for the modern figure of Santa Claus."
  },
  "12-07": {
    name: "Ambrose of Milan, Bishop and Theologian, 397",
    type: "minor",
    readings: { ot: "1 Kings 21:17–29", psalms: "Psalm 27:1-5", nt: "Acts 4:23-31", gospel: "Luke 12:35-40" },
    collect: "O God, who gave your servant Ambrose grace eloquently to proclaim your righteousness in the great congregation, and fearlessly to bear reproach for the honor of your Name: Mercifully grant to all bishops and pastors such excellence in preaching and faithfulness in ministering your Word, that your people may be partakers with them of the glory that shall be revealed; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Ambrose (c. 339–397) was a Roman imperial governor who was acclaimed bishop by the people of Milan despite not yet being baptized. He immediately resigned his government post and dedicated himself to the church. He championed the rights of the church against the state — famously requiring Emperor Theodosius to do public penance — promoted congregational singing through his hymns, and played a crucial role in the conversion of Augustine of Hippo. He is one of the four original Doctors of the Western Church."
  },
  "12-08": {
    name: "Nicholas Ferrar, Deacon, 1637",
    type: "minor",
    readings: { ot: "Proverbs 1:20-33", psalms: "Psalm 127", nt: "Galatians 6:7-10", gospel: "Matthew 13:47-52" },
    collect: "Lord God, make us worthy of your perfect love; that, with your deacon Nicholas Ferrar and his household, we may rule ourselves according to your Word, and serve you with our whole heart; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Nicholas Ferrar (1592–1637) was an English academic, politician, and deacon who founded a unique, semi-monastic religious community at Little Gidding in Huntingdonshire. The community, composed of his extended family, was dedicated to a life of structured prayer, daily reciting of the Psalter, charitable service, and bookbinding, serving as a beautiful model of quiet devotion."
  },
  "12-12": {
    name: "Francis de Sales, Bishop, and Jane de Chantal, Vowed Religious, 1622 and 1641",
    type: "minor",
    readings: { ot: "Judges 6:11–24", psalms: "Psalm 111", nt: "James 3:13-18", gospel: "Mark 12:41–44" },
    collect: "Most Gracious God, who has bidden us to act justly, love mercy, and walk humbly before you; Grant that we, like your servants Francis and Jane, may see and serve Christ in all people, and know him as the giver of all good things; through the same Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Francis de Sales (1567–1622) and Jane de Chantal (1572–1641) were French Roman Catholics who dedicated their lives to promoting spiritual direction, interior devotion, and works of mercy. They co-founded the Order of the Visitation of Holy Mary, and Francis wrote the classic devotional book, 'Introduction to the Devout Life,' emphasizing holiness in all vocations."
  },
  "12-13": {
    name: "Lucy of Syracuse, Martyr, 304",
    type: "minor",
    readings: { ot: "Esther 4:9-16", psalms: "Psalm 131", nt: "Revelation 19:5–8", gospel: "John 1:9–14" },
    collect: "Loving God, for the salvation of all you gave Jesus Christ as light to a world in darkness: Illumine us, as you did your daughter Lucy, with the light of Christ, that by the merits of his passion, we may be led to eternal life; through the same Jesus Christ, who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
    bio: "Lucy of Syracuse (283–304) was a young Christian martyr who was executed during the Great Persecution under the Emperor Diocletian for her vow of virginity and distribution of her dowry to the poor. Renowned for her extraordinary faith and courage, she is widely venerated as a patron saint of the blind and a model of spiritual purity."
  },
  "12-14": {
    name: "John of the Cross, Mystic and Monastic Reformer, 1591",
    type: "minor",
    readings: { ot: "", psalms: "Psalm 121", nt: "Colossians 4:2-6", gospel: "John 16:12–22" },
    collect: "Judge eternal, throned in splendor, who gave John of the Cross strength of purpose and faith that sustained him even through the dark night of the soul: Shed your light on all who love you, in unity with Jesus Christ our Savior; who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
    bio: "John of the Cross (1542–1591), born Juan de Yepes y Álvarez, was a Spanish Discalced Carmelite priest, reformer, and one of the preeminent mystical theologians in history. A close associate of Teresa of Avila, his classic writings like 'The Dark Night of the Soul' and 'The Spiritual Canticle' explored the purifying path of divine love."
  },
  "12-15": {
    name: "Nino of Georgia, Missionary, c.332",
    type: "minor",
    readings: { ot: "2 Kings 5:1–14", psalms: "Psalm 17:6-10", nt: "Philippians 1:12-18", gospel: "Luke 13:10–17" },
    collect: "Almighty God, who called your servant Nino to be your apostle to the people of Georgia, to bring those wandering in darkness to the true light and knowledge of you; Grant us so to walk in that light, that we may come at last to the light of your everlasting day; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Nino of Georgia (c. 296–332) was a saintly woman who is recognized as the Apostle of Georgia, having converted Queen Nana and King Mirian III of Iberia to Christianity. According to tradition, she worked extraordinary miracles of healing, preached the gospel with great boldness, and established the Georgian Orthodox Church."
  },
  "12-17": {
    name: "Dorothy L Sayers, Apologist and Spiritual Writer, 1957",
    type: "minor",
    readings: { ot: "Judges 3:15–30", psalms: "Psalm 19", nt: "1 Corinthians 12:4-11", gospel: "John 21:1–9" },
    collect: "Almighty God, who strengthened your servant Dorothy Sayers with eloquence to defend Christian teaching: Keep us, we pray, steadfast in your true religion, that in constancy and peace we may always teach right doctrine, and teach doctrine rightly; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Dorothy L. Sayers (1893–1957) was a brilliant English author, translator, and lay theologian who was celebrated for her detective novels and her robust Christian apologetics. A close associate of C.S. Lewis and the Inklings, she translated Dante's 'Divine Comedy' and wrote highly popular plays and essays defending classical Christian theology."
  },
  "12-20": {
    name: "Katharina von Bora, Church Reformer, 1552 29 Thomas Becket, Archbishop of Canterbury and Martyr, 1170",
    type: "minor",
    readings: { ot: "Isaiah 55:6–11", psalms: "Psalm 46", nt: "Romans 3:21-28", gospel: "John 15:1–11" },
    collect: "Almighty God, who called your servant Katharina von Bora from a cloister to work for the reform of your church: Grant that, for the sake of your glory and the welfare of your church, we may go wherever you should call, and serve however you should will; through Jesus Christ, our only mediator and advocate. Amen.",
    bio: "Katharina von Bora (1499–1552), the wife of Martin Luther, was a former Cistercian nun who played a vital role in the social and economic success of the German Reformation. An extraordinary administrator, she managed Luther's extensive estate, supported numerous students and guests, and established a model for the Protestant parsonage."
  },
  "12-21": {
    name: "Saint Thomas the Apostle",
    type: "major",
    readings: {
      morning: { ot: "Habakkuk 2:1-4", nt: "Hebrews 10:35-11:1", gospel: "John 20:19-29", psalms: "Psalm 139:1-11" },
      evening: { ot: "Job 42:1-6", nt: "Hebrews 11:1-3", gospel: "John 11:1-16", psalms: "Psalm 16" }
    },
    collect: "Everliving God, who strengthened your apostle Thomas with firm and certain faith in your Son's resurrection: Grant us so perfectly and without doubt to believe in Jesus Christ, our Lord and our God, that our faith may never be found wanting in your sight; through him who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Thomas, one of the Twelve, is remembered primarily for his initial refusal to believe in the Resurrection without physical proof. When Jesus appeared to him and invited him to touch his wounds, Thomas made the most profound confession of faith in the Gospels: 'My Lord and my God!' Jesus responded: 'Blessed are those who have not seen and yet have come to believe.' Thomas shows remarkable courage earlier in John's Gospel when he suggests they all go with Jesus to Judea to die with him. Tradition holds he was martyred near Madras, India, where the ancient Thomas Christians of Kerala trace their origins to him."
  },
  "12-25": {
    name: "Christmas Day",
    type: "major",
    readings: {
      morning: { ot: "Zechariah 2:10-13", nt: "1 John 4:7-16", gospel: "John 1:1-14", psalms: "Psalm 2, 85" },
      evening: { ot: "Isaiah 9:2-7", nt: "Hebrews 1:1-12", gospel: "Luke 2:1-20", psalms: "Psalm 110, 132" }
    },
    collect: "Almighty God, you have given your only-begotten Son to take our nature upon him, and to be born of a pure virgin: Grant that we, who have been born again and made your children by adoption and grace, may daily be renewed by your Holy Spirit; through our Lord Jesus Christ, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
    bio: "Christmas Day commemorates the Nativity of Our Lord Jesus Christ, the Incarnation of God in human flesh. It is one of the principal feasts of the Christian year, celebrating the birth of the Savior in Bethlehem. The observance dates back to the fourth century in the Western Church, combining the theological celebration of the Word made flesh with themes of light shining in darkness, peace on earth, and goodwill to all people."
  },
  "12-26": {
    name: "St. Stephen, Deacon and Martyr",
    type: "major",
    readings: {
      morning: { ot: "Jeremiah 26:1-15", nt: "Acts 6:8-7:2a, 51-60", gospel: "Matthew 23:34-39", psalms: "Psalm 28" },
      evening: { ot: "Genesis 4:1-10", nt: "1 John 3:11-18", gospel: "Luke 11:47-51", psalms: "Psalm 31" }
    },
    collect: "We give you thanks, O Lord of glory, for the example of the first martyr Stephen, who looked up to heaven and prayed for his persecutors to your Son Jesus Christ, who stands at your right hand; where he lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.",
    bio: "Stephen was one of the original seven deacons appointed by the Apostles in Jerusalem. A man 'full of faith and the Holy Spirit' who performed great wonders and signs, his powerful preaching drew the hostility of Jewish authorities who accused him of blasphemy. His speech before the Sanhedrin (Acts 7) is the longest in Acts and ends with the accusation that they have resisted the Holy Spirit. He was stoned to death, becoming the first Christian martyr, while praying for his executioners — echoing Christ's words from the cross. Among those who approved was Saul of Tarsus, later St. Paul."
  },
  "12-27": {
    name: "Saint John, Apostle and Evangelist",
    type: "major",
    readings: {
      morning: { ot: "Exodus 33:18-23", nt: "1 John 1:1-9", gospel: "John 21:19b-24", psalms: "Psalm 92" },
      evening: { ot: "Isaiah 44:1-8", nt: "Revelation 1:1-8", gospel: "John 13:23-35", psalms: "Psalm 97" }
    },
    collect: "Shed upon your Church, O Lord, the brightness of your light; that we, being illumined by the teaching of your apostle and evangelist John, may so walk in the light of your truth, that at length we may attain to the fullness of eternal life; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "John, son of Zebedee and brother of James, was one of the inner circle of the Twelve Apostles. He is identified by tradition as the 'Beloved Disciple' of John's Gospel and as the author of that Gospel, three letters (1, 2, and 3 John), and the Book of Revelation. With Peter and James he was present at the Transfiguration and Gethsemane. He was the disciple to whom the dying Jesus entrusted his mother Mary. Unlike most apostles, he reportedly died a natural death in extreme old age at Ephesus, where he had settled with Mary."
  },
  "12-28": {
    name: "The Holy Innocents",
    type: "major",
    readings: {
      morning: { ot: "Baruch 4:21-27", nt: "Revelation 21:1-7", gospel: "Matthew 2:13-18", psalms: "Psalm 124" },
      evening: { ot: "Isaiah 49:13-23", nt: "Romans 8:31-39", gospel: "Mark 10:13-16", psalms: "Psalm 130" }
    },
    collect: "We remember today, O God, the slaughter of the holy innocents of Bethlehem by King Herod. Receive, we pray, into the arms of your mercy all innocent victims; and by your great might frustrate the designs of evil tyrants and establish your rule of justice, love, and peace; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "The feast of the Holy Innocents commemorates the massacre of the children of Bethlehem ordered by King Herod in his attempt to eliminate the newborn King of the Jews. Matthew's Gospel (2:16-18) records that Herod ordered the killing of all male children in Bethlehem aged two and under, fulfilling Jeremiah's prophecy of Rachel weeping for her children. The Holy Innocents are venerated as the first martyrs for Christ — those who died in his place. The feast has also been used as an occasion to remember all innocent victims of violence and injustice."
  },
  "12-31": {
    name: "Frances Joseph Gaudet, Educator and Social Reformer, 1934",
    type: "minor",
    readings: { ot: "Lamentations 3:26–36", psalms: "Psalm 146", nt: "Acts 16:25-34", gospel: "Luke 4:14–21" },
    collect: "Merciful God, who raised up thy servant Frances Joseph Gaudet to be a champion of the oppressed: Grant that we, encouraged by her example, may advocate for all who are denied the fullness of life to which you have called all your children; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
    bio: "Frances Joseph-Gaudet (1861–1934) was an African American educator, prison reformer, and social worker in New Orleans who dedicated her life to helping juvenile offenders and established the Gaudet Normal and Industrial School. The first Black woman to be ordained a missionary by the local church, she was a prophetic voice for racial justice."
  }
};







const FEEDS = {
  morning: 'https://feeds.megaphone.fm/FDMV8366345804',
  evening: 'https://feeds.megaphone.fm/FDMV2784874884',
  song: 'https://api.riverside.fm/hosting/TWlry4RJ.rss'
};


const CORS_PROXIES = [
  url => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  url => `https://corsproxy.io/?${encodeURIComponent(url)}`
];

async function fetchWithProxyFallback(targetUrl) {
  let lastError;
  // Try direct fetch first for CORS-friendly APIs
  try {
    const response = await fetch(targetUrl, { signal: AbortSignal.timeout(5000) });
    if (response.ok) {
      const text = await response.text();
      try { const json = JSON.parse(text); if (json.contents) return json.contents; } catch(_) {}
      return text;
    }
  } catch(e) { console.info('Direct fetch failed, trying proxies...', e.message); }

  for (const proxyFn of CORS_PROXIES) {
    try {
      const proxyUrl = proxyFn(targetUrl);
      const response = await fetch(proxyUrl, { signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = await response.text();
      try {
        const json = JSON.parse(text);
        if (json.contents) return json.contents;
      } catch (_) {}
      return text;
    } catch(err) {
      lastError = err;
      console.warn('Proxy failed, trying next...', err.message);
    }
  }
  throw new Error(`All proxies failed: ${lastError?.message}`);
}


// bible.js - Scripture Reader Service
// Fetches scripture from Oremus Bible Browser (NRSV/NRSVAE), BibleGateway (ESV/RSV/NIV), or Bible-API (WEB/KJV fallback)



/**
 * Fetches scripture text for a given passage reference.
 */
async function fetchScripture(passage, translation = 'NRSV') {
  const p = passage.trim();
  try {
    if (translation === 'WEB') return await fetchFromBibleApi(p, 'web');
    if (translation === 'KJV') return await fetchFromBibleApi(p, 'kjv');
    if (['ESV', 'RSV', 'NIV'].includes(translation)) return await fetchFromBibleGateway(p, translation);
    return await fetchFromOremus(p, translation);
  } catch(e) {
    console.warn(`Primary fetch failed for ${translation}, falling back to bible-api.com (WEB translation):`, e.message);
    return await fetchFromBibleApi(p, 'web');
  }
}

/**
 * Fetches and parses scripture from the Oremus Bible Browser.
 */
async function fetchFromOremus(passage, version) {
  const targetUrl = `https://bible.oremus.org/?version=${version}&passage=${encodeURIComponent(passage)}&vnum=YES&fnote=YES&headings=YES`;
  const rawHtml = await fetchWithProxyFallback(targetUrl);
  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');
  const bibleTextDiv = doc.querySelector('.bibletext');
  if (!bibleTextDiv) throw new Error('Could not find .bibletext in Oremus response.');
  bibleTextDiv.querySelectorAll('form,.visbuttons,hr,.adj').forEach(el => el.remove());
  let contentHtml = bibleTextDiv.innerHTML.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,'');
  return { reference: passage, textHtml: contentHtml, source: `${version} (via oremus)` };
}

/**
 * Fetches and parses scripture from BibleGateway.
 */
async function fetchFromBibleGateway(passage, version) {
  const targetUrl = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(passage)}&version=${version}`;
  const rawHtml = await fetchWithProxyFallback(targetUrl);
  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');
  const passageDivs = doc.querySelectorAll('.passage-text');
  if (passageDivs.length === 0) throw new Error(`Could not find passage text on BibleGateway for ${version}.`);
  const container = document.createElement('div');
  container.className = 'bible-gateway-text';
  passageDivs.forEach(div => {
    const cloned = div.cloneNode(true);
    cloned.querySelectorAll('.footnote, .footnotes, .crossreference, .crossrefs, .passage-other-trans, .share-options, .heading-num, .dropdowns').forEach(el => el.remove());
    container.appendChild(cloned);
  });
  return { reference: passage, textHtml: container.innerHTML, source: `${version} (via BibleGateway)` };
}

/**
 * Fetches scripture from the free, no-key bible-api.com.
 */
async function fetchFromBibleApi(passage, translation = 'web') {
  const url = `https://bible-api.com/${encodeURIComponent(passage)}?translation=${translation}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Bible-API failed: ${response.status}`);
  const data = await response.json();
  let html = `<div class="bible-api-text">`;
  data.verses.forEach(v => { html += `<p class="verse-para"><sup class="vnumVis">${v.verse}</sup> ${v.text.trim()}</p>`; });
  html += '</div>';
  return { reference: data.reference, textHtml: html, source: translation === 'kjv' ? 'King James Version (KJV)' : 'World English Bible (WEB)' };
}


// podcast.js - Podcast RSS Parser and Audio Controller
// Handles fetching Episcopal podcasts from Megaphone and managing audio playback.






/**
 * Parses today's scripture readings from the podcast description.
 * @param {string} description - The podcast item description.
 * @returns {object|null} An object with ot, nt, gospel, and psalms references or null if not parsed.
 */
function extractReadings(description) {
  if (!description) return null;
  
  const readings = {
    psalms: '',
    ot: '',
    nt: '',
    gospel: ''
  };
  
  // Clean sweep helper to remove trailing names or commas
  const clean = (str) => {
    if (!str) return '';
    return str
      .replace(/\s+/g, ' ')
      // Clean typical names or officiant trailing credits
      .replace(/(?:Fr\.|Mtr\.|The\s+Rev\.|the\s+Rev\.|James\s+Foster|Laura\s+Ammons|Caitlyn\s+Darnell|Elizabeth\s+Henry-McKeever|Noah\s+Stansbury|Ellen\s+Singer|Ian\s+Lasch|James\s+Foster|The\s+Rev\.\s+[a-zA-Z\s]+|Mtr\.\s+[a-zA-Z\s]+|Fr\.\s+[a-zA-Z\s]+)\s*$/gi, '')
      .trim()
      .replace(/,\s*$/, '') // clean trailing commas
      .replace(/\.$/, '')    // clean trailing periods
      .trim();
  };

  // 1. Parse Psalms
  const psalmsMatch = description.match(/Psalm\(s\):\s*(Psalm\s+[^,]+(?:,\s*\d+)*)/i);
  if (psalmsMatch) {
    readings.psalms = psalmsMatch[1];
  } else {
    // Alternate lookup
    const altPsalmsMatch = description.match(/Psalm\(s\):\s*([a-zA-Z0-9\s\:\-\,]+?)(?=(?:,\s*(?:Fr\.|Mtr\.|The\s+Rev\.|Laura|Old Testament:)))/i);
    if (altPsalmsMatch) readings.psalms = altPsalmsMatch[1];
  }

  // 2. Parse Old Testament
  const otMatch = description.match(/Old Testament:\s*([a-zA-Z0-9\s\:\-\,\(\)]+?)(?=(?:,\s*(?:Fr\.|Mtr\.|The\s+Rev\.|Laura|New Testament:|First Canticle:|Second Canticle:)))/i);
  if (otMatch) {
    readings.ot = otMatch[1];
  } else {
    const simpleOt = description.match(/Old Testament:\s*([^,]+)/i);
    if (simpleOt) readings.ot = simpleOt[1];
  }

  // 3. Parse New Testament
  const ntMatch = description.match(/New Testament:\s*([a-zA-Z0-9\s\:\-\,\(\)]+?)(?=(?:,\s*(?:Fr\.|Mtr\.|The\s+Rev\.|Gospel:|First Canticle:|Second Canticle:)))/i);
  if (ntMatch) {
    readings.nt = ntMatch[1];
  } else {
    const simpleNt = description.match(/New Testament:\s*([^,]+)/i);
    if (simpleNt) readings.nt = simpleNt[1];
  }

  // 4. Parse Gospel
  const gospelMatch = description.match(/Gospel:\s*([a-zA-Z0-9\s\:\-\,\(\)]+?)(?=(?:,\s*(?:Fr\.|Mtr\.|The\s+Rev\.|Logo|Logo image|\.)))/i);
  if (gospelMatch) {
    readings.gospel = gospelMatch[1];
  } else {
    const simpleGospel = description.match(/Gospel:\s*([^,\.]+)/i);
    if (simpleGospel) readings.gospel = simpleGospel[1];
  }

  // Apply cleaning to all parsed fields
  readings.psalms = clean(readings.psalms);
  readings.ot = clean(readings.ot);
  readings.nt = clean(readings.nt);
  readings.gospel = clean(readings.gospel);

  if (!readings.psalms && !readings.ot && !readings.nt && !readings.gospel) {
    return null;
  }
  
  return readings;
}

/**
 * Parses XML string into episode objects.
 * @param {string} rawXml - The raw feed XML.
 * @param {string} type - The podcast type.
 * @returns {Array<object>} A list of parsed episodes.
 */
function parseXmlEpisodes(rawXml, type) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(rawXml, 'text/xml');

  // Handle parsing errors
  const parseError = xmlDoc.querySelector('parsererror');
  if (parseError) throw new Error('XML parsing failed.');

  const items = xmlDoc.querySelectorAll('item');
  const episodes = [];

  items.forEach(item => {
    const title = item.querySelector('title')?.textContent || '';
    const description = item.querySelector('description')?.textContent || item.querySelector('summary')?.textContent || '';
    const pubDateStr = item.querySelector('pubDate')?.textContent || '';
    const pubDate = pubDateStr ? new Date(pubDateStr) : new Date();
    
    // Audio enclosure
    const enclosure = item.querySelector('enclosure');
    const audioUrl = enclosure ? enclosure.getAttribute('url') : '';
    
    // Duration (convert to seconds if format is hh:mm:ss or mm:ss)
    let durationSec = 0;
    const durationText = item.querySelector('duration')?.textContent || '';
    if (durationText) {
      if (durationText.includes(':')) {
        const parts = durationText.split(':').map(Number);
        if (parts.length === 3) {
          durationSec = parts[0] * 3600 + parts[1] * 60 + parts[2];
        } else if (parts.length === 2) {
          durationSec = parts[0] * 60 + parts[1];
        }
      } else {
        durationSec = Number(durationText);
      }
    }

    // Extract scripture readings from description
    const readings = extractReadings(description);

    episodes.push({
      title,
      description,
      pubDate,
      audioUrl,
      duration: durationSec,
      readings,
      feedType: type
    });
  });

  return episodes;
}

/**
 * Fetches and parses a podcast RSS feed.
 * @param {'morning'|'evening'|'song'} type - The podcast type.
 * @returns {Promise<Array<object>>} A list of episodes.
 */
async function fetchPodcastEpisodes(type) {
  const feedUrl = FEEDS[type];
  if (!feedUrl) throw new Error(`Invalid feed type: ${type}`);

  // 1. Try direct fetch first (works if CORS is supported by feed server)
  try {
    const response = await fetch(feedUrl, { signal: AbortSignal.timeout(5000) });
    if (response.ok) {
      const rawXml = await response.text();
      return parseXmlEpisodes(rawXml, type);
    }
  } catch (e) {
    console.info(`Direct fetch failed for ${type}, attempting alternatives...`, e.message);
  }

  // 2. Try RSS2JSON API converter (highly reliable for non-CORS feeds protected by Cloudflare bot protection)
  try {
    const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
    const response = await fetch(rss2jsonUrl, { signal: AbortSignal.timeout(10000) });
    if (response.ok) {
      const data = await response.json();
      if (data.status === 'ok' && data.items) {
        console.log(`Successfully fetched episodes for ${type} via RSS2JSON converter`);
        return data.items.map(item => {
          const duration = item.enclosure ? Number(item.enclosure.duration || 0) : 0;
          return {
            title: item.title || '',
            description: item.description || item.content || '',
            pubDate: item.pubDate ? new Date(item.pubDate.replace(/-/g, '/')) : new Date(),
            audioUrl: item.enclosure ? item.enclosure.link : '',
            duration: duration,
            readings: extractReadings(item.description || item.content || ''),
            feedType: type
          };
        });
      }
    }
  } catch (err) {
    console.warn(`RSS2JSON converter failed for ${type}:`, err.message);
  }

  // 3. Fallback to original CORS proxy engines and raw XML parsing
  const rawXml = await fetchWithProxyFallback(feedUrl);
  return parseXmlEpisodes(rawXml, type);
}


// ==========================================
// AUDIO ENGINE MANAGER
// ==========================================
class PodcastAudioEngine {
  constructor() {
    this.audio = new Audio();
    this.currentEpisode = null;
    this.callbacks = {
      onTimeUpdate: null,
      onPlay: null,
      onPause: null,
      onEnded: null,
      onError: null,
      onLoadedMetadata: null
    };

    this.audio.addEventListener('timeupdate', () => {
      if (this.callbacks.onTimeUpdate) {
        this.callbacks.onTimeUpdate(this.audio.currentTime, this.audio.duration || 0);
      }
    });

    this.audio.addEventListener('play', () => {
      if (this.callbacks.onPlay) this.callbacks.onPlay(this.currentEpisode);
    });

    this.audio.addEventListener('pause', () => {
      if (this.callbacks.onPause) this.callbacks.onPause();
    });

    this.audio.addEventListener('ended', () => {
      if (this.callbacks.onEnded) this.callbacks.onEnded();
    });

    this.audio.addEventListener('loadedmetadata', () => {
      if (this.callbacks.onLoadedMetadata) {
        this.callbacks.onLoadedMetadata(this.audio.duration);
      }
    });

    this.audio.addEventListener('error', (e) => {
      console.error("Audio playback error:", e);
      if (this.callbacks.onError) this.callbacks.onError(e);
    });
  }

  playEpisode(episode) {
    if (!episode || !episode.audioUrl) return;

    if (this.currentEpisode && this.currentEpisode.audioUrl === episode.audioUrl) {
      this.audio.play();
    } else {
      this.audio.src = episode.audioUrl;
      this.currentEpisode = episode;
      this.audio.load();
      this.audio.play().catch(err => {
        console.warn("Autoplay block or playback interrupted:", err);
      });
    }
  }

  pause() {
    this.audio.pause();
  }

  toggle() {
    if (this.audio.paused) {
      this.audio.play().catch(err => console.warn(err));
    } else {
      this.audio.pause();
    }
  }

  seek(seconds) {
    if (this.audio.duration) {
      this.audio.currentTime = Math.max(0, Math.min(seconds, this.audio.duration));
    }
  }

  skip(seconds) {
    if (this.audio.duration) {
      this.seek(this.audio.currentTime + seconds);
    }
  }

  setSpeed(rate) {
    this.audio.playbackRate = rate;
  }

  getSpeed() {
    return this.audio.playbackRate;
  }

  setVolume(volume) {
    this.audio.volume = Math.max(0, Math.min(volume, 1));
  }

  isPlaying() {
    return !this.audio.paused;
  }

  getDuration() {
    return this.audio.duration || 0;
  }

  getCurrentTime() {
    return this.audio.currentTime || 0;
  }

  registerCallbacks(cbs) {
    this.callbacks = { ...this.callbacks, ...cbs };
  }
}

const AudioEngine = new PodcastAudioEngine();


// app.js - Main Application Orchestrator




// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
const AppState = {
  currentDate: new Date(),
  activeOffice: 'morning', // 'morning', 'noonday', 'evening', 'compline'
  activeRite: 'rite2',    // 'rite1', 'rite2'
  activeShow: 'morning',   // 'morning', 'evening' (podcast side)
  theme: 'sepia',          // 'light', 'sepia', 'dark'
  fontSize: 'medium',      // 'small', 'medium', 'large'
  bibleVersion: 'NRSV',    // 'NRSV', 'NRSVAE', 'ESV', 'RSV', 'NIV', 'KJV', 'WEB'
  useFeast: false,         // BCP Major Feast override
  useLff: false,           // Lesser Feasts & Fasts override
  useRcl: false,           // Sunday RCL override
  feastCollect: null,      // Collect for active feast/LFF day
  liturgicalOverrideName: null, // Name of active feast override
  activeCommemoration: null, // Active commemoration details
  playerMinimized: false,  // Podcast control bar minimization state
  prayerList: [],          // Private intercessions
  habitLogs: {},           // Prayer completion logs
  
  // Loaded podcast episodes data
  episodes: {
    morning: [],
    evening: [],
    song: []
  },

  
  // Readings extracted from today's podcast episodes
  todayReadings: {
    morning: null, // { psalms, ot, nt, gospel }
    evening: null
  },
  
  // Currently displayed scripture readings
  currentAppointedReadings: null, // Ref to the active office's readings
  activeReadingTab: 'ot',         // 'psalms', 'ot', 'nt', 'gospel'
  activeMobilePane: 'liturgy',    // 'liturgy', 'podcast', 'saint'
  
  // Audio state
  playingEpisode: null,
  isPreloading: false,

  // Podcast search
  podcastSearchQuery: '',

  // Choral Pitchpipe State
  pitchpipeActiveOscillator: null,
  pitchpipeAudioCtx: null,
  pitchpipeFreq: 196.00, // G3 default
  pitchpipeNote: "G3",

  // Phase 3 States
  activeTypography: 'serif', // 'serif' (liturgical Garamond), 'sans'
  activePrayerProfile: 'Default' // local prayer profile
};

// ==========================================================================
// LITURGICAL CALENDAR CALCULATIONS
// ==========================================================================
function getEasterDate(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function getAdventSunday(year) {
  const nov30 = new Date(year, 10, 30);
  const dayOfWeek = nov30.getDay();
  let diff = 0;
  if (dayOfWeek <= 3) {
    diff = -dayOfWeek;
  } else {
    diff = 7 - dayOfWeek;
  }
  return new Date(year, 10, 30 + diff);
}

function getLiturgicalSeason(date) {
  const year = date.getFullYear();
  const time = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  
  const easter = getEasterDate(year);
  const ashWednesday = new Date(easter.getTime() - 46 * 24 * 60 * 60 * 1000);
  const pentecost = new Date(easter.getTime() + 49 * 24 * 60 * 60 * 1000);
  const trinitySunday = new Date(easter.getTime() + 56 * 24 * 60 * 60 * 1000);
  const advent = getAdventSunday(year);
  
  const christmasDay = new Date(year, 11, 25);
  const epiphanyDay = new Date(year, 0, 6);
  
  // January Christmas time (spilling from last year)
  const prevYearChristmas = new Date(year - 1, 11, 25);
  const prevYearEpiphanyEve = new Date(year, 0, 5);
  
  if (time >= prevYearChristmas.getTime() && time <= prevYearEpiphanyEve.getTime()) {
    return { name: 'Christmas Season', key: 'christmas', color: 'christmas' };
  }
  
  if (time >= epiphanyDay.getTime() && time < ashWednesday.getTime()) {
    if (date.getMonth() === 0 && date.getDate() === 6) {
      return { name: 'The Epiphany', key: 'epiphany', color: 'christmas' };
    }
    return { name: 'Season after Epiphany', key: 'epiphany', color: 'ordinary' };
  }
  
  if (time >= ashWednesday.getTime() && time < easter.getTime()) {
    const holyWeekStart = easter.getTime() - 7 * 24 * 60 * 60 * 1000;
    if (time >= holyWeekStart) {
      return { name: 'Holy Week', key: 'holy-week', color: 'holy-week' };
    }
    return { name: 'Lent', key: 'lent', color: 'lent' };
  }
  
  if (time >= easter.getTime() && time < pentecost.getTime()) {
    return { name: 'Easter Season', key: 'easter', color: 'easter' };
  }
  
  if (date.getMonth() === pentecost.getMonth() && date.getDate() === pentecost.getDate()) {
    return { name: 'The Day of Pentecost', key: 'pentecost', color: 'pentecost' };
  }
  
  if (date.getMonth() === trinitySunday.getMonth() && date.getDate() === trinitySunday.getDate()) {
    return { name: 'Trinity Sunday', key: 'trinity', color: 'easter' };
  }
  
  const nextAdvent = getAdventSunday(year);
  if (time >= pentecost.getTime() && time < nextAdvent.getTime()) {
    return { name: 'Season after Pentecost', key: 'ordinary', color: 'ordinary' };
  }
  
  const nextChristmasDay = new Date(year, 11, 25);
  if (time >= nextAdvent.getTime() && time < nextChristmasDay.getTime()) {
    return { name: 'Advent', key: 'advent', color: 'advent' };
  }
  
  if (time >= nextChristmasDay.getTime()) {
    return { name: 'Christmas', key: 'christmas', color: 'christmas' };
  }
  
  return { name: 'Ordinary Time', key: 'ordinary', color: 'ordinary' };
}

// Format a date cleanly
function formatDateDisplay(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Simple liturgical day name resolver based on calendar dates
function getLiturgicalDayLabel(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[date.getDay()];
  const seasonInfo = getLiturgicalSeason(date);
  
  if (seasonInfo.key === 'pentecost') return 'The Day of Pentecost';
  if (seasonInfo.key === 'trinity') return 'Trinity Sunday';
  
  if (seasonInfo.key === 'easter') {
    const easter = getEasterDate(date.getFullYear());
    const diffWeeks = Math.floor((date.getTime() - easter.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
    if (diffWeeks === 1 && date.getTime() === easter.getTime()) return 'Easter Day';
    return `${dayName} in the ${diffWeeks} week of Easter`;
  }
  
  if (seasonInfo.key === 'lent') {
    const easter = getEasterDate(date.getFullYear());
    const ashWednesday = new Date(easter.getTime() - 46 * 24 * 60 * 60 * 1000);
    // Find the Sunday of Lent count
    const diffDays = Math.floor((date.getTime() - ashWednesday.getTime()) / (24 * 60 * 60 * 1000));
    if (diffDays === 0) return 'Ash Wednesday';
    const weekNum = Math.floor(diffDays / 7) + 1;
    return `${dayName} in the ${weekNum} week of Lent`;
  }
  
  if (seasonInfo.key === 'advent') {
    const advent = getAdventSunday(date.getFullYear());
    const diffWeeks = Math.floor((date.getTime() - advent.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
    return `${dayName} in the ${diffWeeks} week of Advent`;
  }

  // Fallback default
  return `${dayName} in Ordinary Time`;
}

// ==========================================
// CONFIGURATION & SETUP LOCAL STORAGE
// ==========================================
function loadSettings() {
  const savedTheme = localStorage.getItem('theme');
  const savedFontSize = localStorage.getItem('fontSize');
  const savedBibleVersion = localStorage.getItem('bibleVersion');
  const savedRite = localStorage.getItem('activeRite');
  const savedTypography = localStorage.getItem('activeTypography');
  const savedUseFeast = localStorage.getItem('useFeast');
  const savedUseLff = localStorage.getItem('useLff');
  const savedUseRcl = localStorage.getItem('useRcl');
  const savedPlayerMinimized = localStorage.getItem('playerMinimized');
  
  if (savedTheme) AppState.theme = savedTheme;
  if (savedFontSize) AppState.fontSize = savedFontSize;
  if (savedBibleVersion) AppState.bibleVersion = savedBibleVersion;
  if (savedRite) AppState.activeRite = savedRite;
  if (savedTypography) AppState.activeTypography = savedTypography;
  if (savedUseFeast !== null) AppState.useFeast = savedUseFeast === 'true';
  if (savedUseLff !== null) AppState.useLff = savedUseLff === 'true';
  if (savedUseRcl !== null) AppState.useRcl = savedUseRcl === 'true';
  if (savedPlayerMinimized !== null) AppState.playerMinimized = savedPlayerMinimized === 'true';

  // Apply settings to body
  applyThemeAndSettings();
  syncPlayerMinimizedState();
  
  // Load prayers and habit logs
  loadPrayers();
  loadHabits();
}

function saveSetting(key, value) {
  AppState[key] = value;
  localStorage.setItem(key, value);
  applyThemeAndSettings();
}

function applyThemeAndSettings() {
  const body = document.body;
  
  // Theme class
  body.classList.remove('theme-light', 'theme-sepia', 'theme-dark');
  body.classList.add(`theme-${AppState.theme}`);
  
  // Font size class
  body.classList.remove('fontsize-small', 'fontsize-medium', 'fontsize-large');
  body.classList.add(`fontsize-${AppState.fontSize}`);

  // Typography class
  body.classList.remove('font-style-serif', 'font-style-sans');
  body.classList.add(`font-style-${AppState.activeTypography}`);
  
  // Liturgical season class (determines accent colors)
  const seasonInfo = getLiturgicalSeason(AppState.currentDate);
  body.classList.remove(
    'season-easter', 'season-christmas', 'season-advent', 'season-lent',
    'season-pentecost', 'season-ordinary', 'season-holy-week', 'season-martyr'
  );
  
  const isMartyr = AppState.activeCommemoration && 
                   AppState.activeCommemoration.name && 
                   (AppState.activeCommemoration.name.toLowerCase().includes('martyr') || 
                    AppState.activeCommemoration.name.toLowerCase().includes('martyrs'));
                    
  if (isMartyr) {
    body.classList.add('season-martyr');
  } else {
    const colorClasses = seasonInfo.color.split('-');
    colorClasses.forEach(cls => {
      body.classList.add(`season-${cls}`);
    });
  }

  // Sync settings modal buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-theme') === AppState.theme);
  });
  
  document.querySelectorAll('.fontsize-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-size') === AppState.fontSize);
  });

  document.querySelectorAll('.typography-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-style') === AppState.activeTypography);
  });
  
  const versionSelect = document.getElementById('setting-bible-version');
  if (versionSelect) versionSelect.value = AppState.bibleVersion;

  // Sync override pill active state
  const feastPill = document.getElementById('override-feast');
  const lffPill = document.getElementById('override-lff');
  const rclPill = document.getElementById('override-rcl');
  if (feastPill) feastPill.classList.toggle('active', AppState.useFeast);
  if (lffPill) lffPill.classList.toggle('active', AppState.useLff);
  if (rclPill) {
    rclPill.classList.toggle('active', AppState.useRcl);
    // Dim RCL pill on non-Sundays
    const isSunday = AppState.currentDate.getDay() === 0;
    rclPill.title = isSunday
      ? 'Use Sunday RCL lectionary readings'
      : 'Use Sunday RCL readings (only applies on Sundays)';
  }

  // Sync rite buttons in liturgy subbar
  document.querySelectorAll('.rite-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-rite') === AppState.activeRite);
  });

  // Sync brand name color / details
  const displaySeason = document.getElementById('liturgical-season-display');
  if (displaySeason) {
    displaySeason.textContent = seasonInfo.name;
  }
}

function syncPlayerMinimizedState() {
  const bar = document.getElementById('bottom-player-bar');
  const body = document.body;
  if (!bar) return;
  
  const isMinimized = AppState.playerMinimized;
  bar.classList.toggle('minimized', isMinimized);
  body.classList.toggle('player-minimized', isMinimized);
  
  // Update aria-label and title for accessibility
  const btn = document.getElementById('player-minimize-btn');
  if (btn) {
    btn.title = isMinimized ? 'Expand Player' : 'Minimize Player';
    btn.setAttribute('aria-label', isMinimized ? 'Expand Player' : 'Minimize Player');
  }
}

function switchMobilePane(paneName) {
  AppState.activeMobilePane = paneName;
  const appContainer = document.querySelector('.app-container');
  if (appContainer) {
    appContainer.classList.remove('show-liturgy', 'show-podcast', 'show-saint');
    appContainer.classList.add('show-' + paneName);
  }
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-pane') === paneName);
  });
}

// Select default office based on current local time
function selectDefaultOffice() {
  const hour = AppState.currentDate.getHours();
  let defaultOffice = 'morning';
  
  if (hour >= 11 && hour < 15) {
    defaultOffice = 'noonday';
  } else if (hour >= 15 && hour < 20) {
    defaultOffice = 'evening';
  } else if (hour >= 20 || hour < 6) {
    defaultOffice = 'compline';
  }
  
  AppState.activeOffice = defaultOffice;
  
  // Update liturgy selector active tab
  document.querySelectorAll('#liturgy-tabs .tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-office') === defaultOffice);
  });

  // Hide/Show Rite Selector for Noonday & Compline (they don't have Rites in BCP)
  const riteContainer = document.getElementById('rite-selector-container');
  if (riteContainer) {
    if (defaultOffice === 'noonday' || defaultOffice === 'compline') {
      riteContainer.style.visibility = 'hidden';
    } else {
      riteContainer.style.visibility = 'visible';
    }
  }
}

// ==========================================
// LITURGICAL RESOLVERS & OVERRIDES
// ==========================================
function getOpeningSentence(season, rite, date) {
  const sentencesObj = LiturgyData.openingSentences[season] || LiturgyData.openingSentences.ordinary;
  const sentences = sentencesObj[rite] || LiturgyData.openingSentences.ordinary[rite];
  if (!sentences || sentences.length === 0) return '';
  const index = (date.getDate() + date.getMonth()) % sentences.length;
  return sentences[index];
}

function isApocrypha(passage) {
  if (!passage) return false;
  const lower = passage.toLowerCase();
  const apocryphalBooks = [
    'wisdom', 'sirach', 'ecclesiasticus', 'tobit', 'judith', 
    'baruch', 'esdras', 'maccabees', 'bel and the dragon', 'susanna'
  ];
  return apocryphalBooks.some(book => lower.includes(book));
}

function getReadingResponseHtml(passage, rite) {
  const isApoc = isApocrypha(passage);
  const isRite1 = (rite === 'rite1');
  if (isApoc) {
    return `
      <div class="reading-response" style="margin-top: 1rem; font-style: italic; color: var(--text-secondary);">
        Here ${isRite1 ? 'endeth' : 'ends'} the reading.
      </div>
    `;
  } else {
    return `
      <div class="reading-response" style="margin-top: 1rem; font-style: italic; color: var(--text-secondary);">
        Here ${isRite1 ? 'endeth' : 'ends'} the reading.
      </div>
      <div class="liturgical-response" style="margin-top: 0.5rem; padding-left: 1rem; border-left: 2px solid var(--accent-color); font-family: var(--font-heading);">
        <div><strong>Reader:</strong> The Word of the Lord.</div>
        <div><strong>People:</strong> Thanks be to God.</div>
      </div>
    `;
  }
}

function getCanticleByKey(key, rite) {
  if (rite === 'rite1') {
    const rite1Mappings = {
      'canticle12': 'canticle1',
      'canticle13': 'canticle2',
      'canticle15': 'canticle3',
      'canticle16': 'canticle4',
      'canticle17': 'canticle5',
      'canticle20': 'canticle6',
      'canticle21': 'canticle7'
    };
    if (rite1Mappings[key]) {
      return LiturgyData.canticles[rite1Mappings[key]];
    }
  }
  return LiturgyData.canticles[key];
}

function getSuggestedCanticles(office, date, season, rite, isFeast) {
  const day = date.getDay();
  let otKey = '';
  let ntKey = '';
  
  if (office === 'morning') {
    if (isFeast) {
      otKey = 'canticle16';
      ntKey = 'canticle21';
    } else {
      switch (day) {
        case 0:
          if (season === 'advent') {
            otKey = 'canticle11';
            ntKey = 'canticle16';
          } else if (season === 'lent') {
            otKey = 'canticle14';
            ntKey = 'canticle16';
          } else if (season === 'easter') {
            otKey = 'canticle8';
            ntKey = 'canticle21';
          } else {
            otKey = 'canticle16';
            ntKey = 'canticle21';
          }
          break;
        case 1:
          otKey = 'canticle9';
          ntKey = 'canticle19';
          break;
        case 2:
          otKey = 'canticle13';
          ntKey = 'canticle18';
          break;
        case 3:
          if (season === 'lent') {
            otKey = 'canticle14';
          } else {
            otKey = 'canticle11';
          }
          ntKey = 'canticle16';
          break;
        case 4:
          otKey = 'canticle8';
          if (season === 'advent' || season === 'lent') {
            ntKey = 'canticle19';
          } else {
            ntKey = 'canticle20';
          }
          break;
        case 5:
          if (season === 'lent') {
            otKey = 'canticle14';
          } else {
            otKey = 'canticle10';
          }
          ntKey = 'canticle18';
          break;
        case 6:
          otKey = 'canticle12';
          ntKey = 'canticle19';
          break;
      }
    }
  } else if (office === 'evening') {
    if (isFeast) {
      otKey = 'canticle15';
      ntKey = 'canticle17';
    } else {
      switch (day) {
        case 0:
          otKey = 'canticle15';
          ntKey = 'canticle17';
          break;
        case 1:
          if (season === 'lent') {
            otKey = 'canticle14';
          } else {
            otKey = 'canticle8';
          }
          ntKey = 'canticle17';
          break;
        case 2:
          otKey = 'canticle10';
          ntKey = 'canticle15';
          break;
        case 3:
          otKey = 'canticle12';
          ntKey = 'canticle17';
          break;
        case 4:
          otKey = 'canticle11';
          ntKey = 'canticle15';
          break;
        case 5:
          otKey = 'canticle13';
          ntKey = 'canticle17';
          break;
        case 6:
          otKey = 'canticle9';
          ntKey = 'canticle15';
          break;
      }
    }
  }
  
  return {
    first: getCanticleByKey(otKey, rite),
    second: getCanticleByKey(ntKey, rite)
  };
}

async function fetchRclReadings(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;
  const targetUrl = `https://lectio-api.org/api/v1/readings?date=${dateStr}&tradition=rcl`;
  
  try {
    const rawText = await fetchWithProxyFallback(targetUrl);
    const parsed = JSON.parse(rawText);
    const data = parsed && parsed.data ? parsed.data : parsed;
    
    if (data && data.readings && Array.isArray(data.readings)) {
      const getByPreference = (type) => {
        const typedReadings = data.readings.filter(r => r.type === type);
        if (typedReadings.length === 0) return null;
        const primary = typedReadings.find(r => !r.isAlternative);
        return (primary || typedReadings[0]).citation;
      };
      
      const ot = getByPreference('first');
      const psalms = getByPreference('psalm');
      const nt = getByPreference('second');
      const gospel = getByPreference('gospel');
      
      if (ot || psalms || nt || gospel) {
        return { ot, psalms, nt, gospel };
      }
    }
    throw new Error("No readings found in API response");
  } catch(e) {
    console.error("Failed to fetch RCL readings", e);
    return null;
  }
}

function updateSaintBiographySidebar(commemoration, isOverridden = false, isTransferred = false, yesterdayName = '') {
  const pane = document.getElementById('saint-bio-pane');
  const appContainer = document.querySelector('.app-container');
  const bioBtn = document.getElementById('mobile-nav-bio-btn');
  if (!pane) return;
  
  if (commemoration) {
    let alertHtml = '';
    if (isOverridden) {
      alertHtml = `
        <div class="saint-transfer-alert" style="background-color: rgba(212, 163, 89, 0.15); border-left: 4px solid #d4a359; color: #9c6c21; padding: 12px; margin: 16px; margin-bottom: 0; border-radius: 4px; font-size: 0.88em; line-height: 1.4; border-top-right-radius: 4px; border-bottom-right-radius: 4px;">
          <strong>Liturgical Overlap:</strong> This commemoration coincides with a Major Feast or Sunday. The primary liturgy of the day takes precedence, and this observance is typically transferred to the following open day.
        </div>
      `;
    } else if (isTransferred) {
      alertHtml = `
        <div class="saint-transfer-alert" style="background-color: rgba(212, 163, 89, 0.15); border-left: 4px solid #d4a359; color: #9c6c21; padding: 12px; margin: 16px; margin-bottom: 0; border-radius: 4px; font-size: 0.88em; line-height: 1.4; border-top-right-radius: 4px; border-bottom-right-radius: 4px;">
          <strong>Transferred Observance:</strong> This feast was transferred from yesterday (${yesterdayName}) because yesterday was a Major Feast or Sunday.
        </div>
      `;
    }
    
    pane.innerHTML = `
      <div class="saint-pane-header">
        <h2>${commemoration.name}</h2>
        <span class="saint-type-tag">${commemoration.type === 'major' ? 'Major Feast' : 'Lesser Feast / Commemoration'}</span>
      </div>
      ${alertHtml}
      <div class="saint-pane-body">
        <div class="saint-collect-box">
          <h3>Collect of the Day</h3>
          <p>${commemoration.collect}</p>
        </div>
        <div class="saint-bio-content">
          <h3>Biography</h3>
          <p>${commemoration.bio}</p>
        </div>
      </div>
    `;
    pane.style.display = 'block';
    if (appContainer) appContainer.classList.add('has-saint-sidebar');
    if (bioBtn) bioBtn.style.display = 'flex';
  } else {
    pane.innerHTML = '';
    pane.style.display = 'none';
    if (appContainer) appContainer.classList.remove('has-saint-sidebar');
    if (bioBtn) bioBtn.style.display = 'none';
    if (AppState.activeMobilePane === 'saint') {
      switchMobilePane('liturgy');
    }
  }
}

// ==========================================
// LITURGY RENDER ENGINE
// ==========================================
function renderLiturgyFlow() {
  const target = document.getElementById('liturgy-body-target');
  if (!target) return;
  
  const office = AppState.activeOffice;
  const rite = AppState.activeRite;
  const season = getLiturgicalSeason(AppState.currentDate).key;
  
  let html = '';
  
  if (office === 'morning') {
    html = renderMorningPrayer(rite, season);
  } else if (office === 'noonday') {
    html = renderNoondayPrayer();
  } else if (office === 'evening') {
    html = renderEveningPrayer(rite, season);
  } else if (office === 'compline') {
    html = renderCompline();
  }
  
  target.innerHTML = html;
  
  // Attach event listeners for expanding/collapsing local Psalms (Noonday / Compline)
  document.querySelectorAll('.toggle-psalm-header').forEach(el => {
    el.addEventListener('click', (e) => {
      const targetId = el.getAttribute('data-psalm');
      const box = document.getElementById(targetId);
      if (box) {
        const isCollapsed = box.style.display === 'none';
        box.style.display = isCollapsed ? 'block' : 'none';
        el.querySelector('.toggle-indicator').textContent = isCollapsed ? '▼' : '▶';
      }
    });
  });

  // Re-bind click event on Appointed readings tabs inside liturgy
  bindLiturgyReadingTabs();
}

// ==========================================
// LITURGICAL SEASONAL SVG FLOURISH GENERATOR (REMOVED AS REQUESTED)
// ==========================================
function getSeasonalOrnamentHtml(season) {
  return '';
}

// ==========================================
// LITURGICAL ILLUMINATED DROP-CAP WRAPPER
// ==========================================
function applyIlluminatedDropCap(html) {
  if (AppState.activeTypography !== 'serif') return html;
  if (!html || typeof html !== 'string') return html;
  
  // Robust match: optional tag prefix, then first alphabetical letter
  const match = html.match(/^(<p[^>]*>)?([A-Za-z])/);
  if (match) {
    const openingTag = match[1] || '';
    const firstLetter = match[2];
    const restOfHtml = html.substring(openingTag.length + 1);
    return `${openingTag}<span class="liturgical-drop-cap">${firstLetter}</span>${restOfHtml}`;
  }
  return html;
}

function renderMorningPrayer(rite, season) {
  const conf = LiturgyData.confession[rite];
  const invit = LiturgyData.invitatory[rite];
  const sentence = getOpeningSentence(season, rite, AppState.currentDate);
  const closingText = LiturgyData.closing[rite];

  // Invitatory Psalm choice
  let invitPsalm = LiturgyData.canticles.venite;
  if (rite === 'rite1') {
    invitPsalm = LiturgyData.canticles.venite_rite1;
    if (season === 'easter') {
      invitPsalm = LiturgyData.canticles.paschaNostrum_rite1;
    } else if (AppState.currentDate.getDay() === 0 || season === 'christmas' || season === 'epiphany') {
      invitPsalm = LiturgyData.canticles.jubilate_rite1;
    }
  } else {
    if (season === 'easter') {
      invitPsalm = LiturgyData.canticles.paschaNostrum;
    } else if (AppState.currentDate.getDay() === 0 || season === 'christmas' || season === 'epiphany') {
      invitPsalm = LiturgyData.canticles.jubilate;
    }
  }
  
  // Canticle picks (BCP 144 suggested rotation)
  const suggested = getSuggestedCanticles('morning', AppState.currentDate, season, rite, !!AppState.activeCommemoration);
  const firstCanticle = suggested.first;
  const secondCanticle = suggested.second;
  
  // Daily Office Suffrages & Collect choice
  const prayers = LiturgyData.prayers[rite];
  const dayIndex = AppState.currentDate.getDay();
  
  // Weekly Collect (previous Sunday's collect)
  const sundayCollectObj = getPreviousSundayCollect(AppState.currentDate, rite);
  
  // Daily Collect (specific to this day of the week)
  const dailyCollectObj = getDailyCollect(dayIndex, rite);

  // If LFF/Feast is active, it replaces the Weekly Collect
  const weeklyCollectText = applyIlluminatedDropCap(AppState.feastCollect || sundayCollectObj.text);
  const weeklyCollectTitle = AppState.feastCollect 
    ? `Collect of the Day: ${AppState.liturgicalOverrideName || 'the Feast'}`
    : sundayCollectObj.title;

  const isRite2 = (rite === 'rite2');

  return `
    ${getSeasonalOrnamentHtml(season)}
    <h2 class="liturgy-section-title">Daily Morning Prayer: ${isRite2 ? 'Rite II' : 'Rite I'}</h2>
    
    ${renderLiturgicalPodcastBanner()}
    
    <div class="rubric">The Officiant begins the service with one or more of these sentences of Scripture</div>
    <div class="prayer-block">
      <p style="font-weight: 500; font-style: italic;">${sentence}</p>
    </div>
    
    <h3 class="prayer-title">Confession of Sin</h3>
    <div class="rubric">${conf.rubric}</div>
    <div class="prayer-block"><p>${conf.exhortation}</p></div>
    <div class="rubric">${conf.rubricJoint}</div>
    <div class="indented-text">${conf.text}</div>
    
    <div class="rubric">${conf.rubricAbsolution}</div>
    <div class="prayer-block">
      <p>${conf.absolution}</p>
      <div class="rubric" style="margin-top:0.5rem; margin-bottom:0.25rem;">Or the following declaration of forgiveness if led by a layperson:</div>
      <p style="font-style: italic; color: var(--text-secondary);">${conf.layText}</p>
    </div>
    
    <h3 class="prayer-title">The Invitatory and Psalter</h3>
    <div class="rubric">${invit.rubric}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${invit.v}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${invit.r}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:0.5rem;">${season === 'lent' ? invit.doxology.replace(/\s*Alleluia\.?/gi, '') : invit.doxology}</div>
    <div class="rubric">${invit.rubricAlleluia}</div>
    
    <h4 class="prayer-title">${invitPsalm.title}</h4>
    <div class="rubric">${invitPsalm.subtitle}</div>
    <div class="indented-text">${invitPsalm.text}</div>
    
    <!-- APPOINTED READINGS INTEGRATION -->
    ${renderAppointedReadingsContainer()}
    
    <h4 class="prayer-title">${firstCanticle.title}</h4>
    <div class="rubric">${firstCanticle.subtitle}</div>
    <div class="indented-text">${firstCanticle.text}</div>
    
    <h4 class="prayer-title">${secondCanticle.title}</h4>
    <div class="rubric">${secondCanticle.subtitle}</div>
    <div class="indented-text">${secondCanticle.text}</div>
    
    <h3 class="prayer-title">The Apostles' Creed</h3>
    <div class="rubric">${LiturgyData.creed[rite].rubric}</div>
    <div class="indented-text">${LiturgyData.creed[rite].text}</div>
    
    <h3 class="prayer-title">The Prayers</h3>
    <div class="rubric">${prayers.rubric}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${prayers.v1}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${prayers.r1}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${prayers.v2}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:1.5rem;">
      ${isRite2 ? prayers.lordsPrayerTraditional : prayers.lordsPrayer}
    </div>
    
    <h4 class="prayer-title">Suffrages</h4>
    ${renderSuffrages(prayers.suffragesA || prayers.suffrages)}
    
    <h3 class="prayer-title">${weeklyCollectTitle}</h3>
    <div class="prayer-block"><p>${weeklyCollectText}</p></div>
    
    <h4 class="prayer-title">${dailyCollectObj.title}</h4>
    <div class="prayer-block"><p>${dailyCollectObj.text}</p></div>
    
    <h4 class="prayer-title">A Prayer for Mission</h4>
    <div class="prayer-block"><p>${LiturgyData.collects.rite2.mission1}</p></div>
    
    <div class="rubric">Authorized intercessions and thanksgivings may be offered here.</div>
    ${getPersonalIntercessionsCardHtml()}
    
    <h3 class="prayer-title">The General Thanksgiving</h3>
    <div class="indented-text">
      Almighty God, Father of all mercies,\nwe your unworthy servants give you humble thanks\nfor all your goodness and loving-kindness\nto us and to all whom you have made.\nWe bless you for our creation, preservation,\nand all the blessings of this life;\nbut above all for your immeasurable love\nin the redemption of the world by our Lord Jesus Christ;\nfor the means of grace, and for the hope of glory.\nAnd, we pray, give us such an awareness of your mercies,\nthat with truly thankful hearts we may show forth your praise,\nnot only with our lips, but in our lives,\nby giving up our selves to your service,\nand by walking before you\nin holiness and righteousness all our days;\nthrough Jesus Christ our Lord,\nto whom, with you and the Holy Spirit,\nbe honor and glory throughout all ages. Amen.
    </div>
    
    <div class="prayer-block" style="margin-top:2rem;">
      <p style="white-space: pre-line;">${closingText}</p>
    </div>
    ${renderHabitCheckInHtml('morning')}
  `;
}

function renderNoondayPrayer() {
  const data = LiturgyData.noondayPrayer;
  const season = getLiturgicalSeason(AppState.currentDate).key;
  return `
    ${getSeasonalOrnamentHtml(season)}
    <h2 class="liturgy-section-title">${data.title}</h2>
    
    ${renderLiturgicalPodcastBanner()}
    
    <div class="rubric">${data.rubric1}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v1}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r1}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:1rem;">${season === 'lent' ? data.doxology.replace(/\s*Alleluia\.?/gi, '') : data.doxology}</div>
    
    <div class="rubric">${data.rubricPsalms}</div>
    <div class="prayer-block" style="display:flex; flex-direction:column; gap:0.5rem;">
      ${Object.entries(data.psalms).map(([key, ps]) => `
        <div style="border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); overflow:hidden;">
          <button class="toggle-psalm-header" data-psalm="${key}" style="width:100%; display:flex; justify-content:space-between; padding:0.65rem 1rem; font-family:var(--font-heading); font-weight:600; background-color:var(--bg-secondary); color:var(--text-primary);">
            <span>${ps.title}</span>
            <span class="toggle-indicator">▶</span>
          </button>
          <div id="${key}" style="display:none; padding:1.25rem; background-color:var(--bg-card); border-top:1px solid var(--border-color);" class="indented-text">
            ${ps.text}
          </div>
        </div>
      `).join('')}
    </div>
    
    <div class="rubric">${data.rubricScripture}</div>
    <div class="prayer-block" style="display:flex; flex-direction:column; gap:0.75rem;">
      ${data.scriptures.map(s => `
        <div style="background-color: var(--bg-secondary); padding: 1rem; border-radius: var(--border-radius-sm); border: 1px solid var(--border-color);">
          <p style="font-style: italic; margin-bottom: 0.25rem;">${s.text}</p>
          <button class="btn-primary" style="font-size:10px; padding:0.25rem 0.5rem; margin-top:0.25rem;" onclick="window.LookupScriptureDirect('${s.ref}')">Read full passage</button>
        </div>
      `).join('')}
      <div class="versicle-row" style="margin-top:0.5rem;"><span class="r-indicator">R.</span><span>${data.response}</span></div>
    </div>
    
    <div class="rubric">${data.rubricPrayers}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v2}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r2}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v3}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-top:0.5rem;">${data.lordsPrayer}</div>
    
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v4}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r4}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v5}</span></div>
    <div class="prayer-block" style="margin-top:0.5rem;"><p>${data.collect}</p></div>
    
    <div class="prayer-block" style="margin-top:1.5rem; font-weight:600;"><p>${data.dismissal}</p></div>
    ${renderHabitCheckInHtml('noonday')}
  `;
}

function renderEveningPrayer(rite, season) {
  const conf = LiturgyData.confession[rite];
  const invit = LiturgyData.invitatory[rite];
  const sentence = getOpeningSentence(season, rite, AppState.currentDate);
  const closingText = LiturgyData.closing[rite];

  // Canticle picks (BCP 145 suggested rotation)
  const suggested = getSuggestedCanticles('evening', AppState.currentDate, season, rite, !!AppState.activeCommemoration);
  const firstCanticle = suggested.first;
  const secondCanticle = suggested.second;

  const prayers = LiturgyData.prayers[rite];
  const dayIndex = AppState.currentDate.getDay();
  
  // Weekly Collect (previous Sunday's collect)
  const sundayCollectObj = getPreviousSundayCollect(AppState.currentDate, rite);
  
  const collectPeace = LiturgyData.collects[rite].peace;

  // If LFF/Feast is active, it replaces the Weekly Collect
  const weeklyCollectText = applyIlluminatedDropCap(AppState.feastCollect || sundayCollectObj.text);
  const weeklyCollectTitle = AppState.feastCollect 
    ? `Collect of the Day: ${AppState.liturgicalOverrideName || 'the Feast'}`
    : sundayCollectObj.title;

  const isRite2 = (rite === 'rite2');

  return `
    ${getSeasonalOrnamentHtml(season)}
    <h2 class="liturgy-section-title">Daily Evening Prayer: ${isRite2 ? 'Rite II' : 'Rite I'}</h2>
    
    ${renderLiturgicalPodcastBanner()}
    
    <div class="rubric">The Officiant begins the service with one or more of these sentences of Scripture</div>
    <div class="prayer-block">
      <p style="font-weight: 500; font-style: italic;">${sentence}</p>
    </div>
    
    <h3 class="prayer-title">Confession of Sin</h3>
    <div class="rubric">${conf.rubric}</div>
    <div class="prayer-block"><p>${conf.exhortation}</p></div>
    <div class="rubric">${conf.rubricJoint}</div>
    <div class="indented-text">${conf.text}</div>
    
    <div class="rubric">${conf.rubricAbsolution}</div>
    <div class="prayer-block">
      <p>${conf.absolution}</p>
      <div class="rubric" style="margin-top:0.5rem; margin-bottom:0.25rem;">Or the following declaration of forgiveness if led by a layperson:</div>
      <p style="font-style: italic; color: var(--text-secondary);">${conf.layText}</p>
    </div>
    
    <h3 class="prayer-title">The Invitatory and Psalter</h3>
    <div class="rubric">${invit.rubric}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${invit.v}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${invit.r}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:0.5rem;">${season === 'lent' ? invit.doxology.replace(/\s*Alleluia\.?/gi, '') : invit.doxology}</div>
    
    <h4 class="prayer-title">Phos Hilaron</h4>
    <div class="rubric">O Gracious Light</div>
    <div class="indented-text">
      O gracious Light,\npure brightness of the everliving Father in heaven,\nO Jesus Christ, holy and blessed!\n\nNow as we come to the setting of the sun,\nand our eyes behold the vesper light,\nwe sing your praises, O God: Father, Son, and Holy Spirit.\n\nYou are worthy at all times to be praised by happy voices,\nO Son of God, O Giver of life,\nand to be glorified through all the worlds.
    </div>
    
    <!-- APPOINTED READINGS INTEGRATION -->
    ${renderAppointedReadingsContainer()}
    
    <h4 class="prayer-title">${firstCanticle.title}</h4>
    <div class="rubric">${firstCanticle.subtitle}</div>
    <div class="indented-text">${firstCanticle.text}</div>
    
    <h4 class="prayer-title">${secondCanticle.title}</h4>
    <div class="rubric">${secondCanticle.subtitle}</div>
    <div class="indented-text">${secondCanticle.text}</div>
    
    <h3 class="prayer-title">The Apostles' Creed</h3>
    <div class="rubric">${LiturgyData.creed[rite].rubric}</div>
    <div class="indented-text">${LiturgyData.creed[rite].text}</div>
    
    <h3 class="prayer-title">The Prayers</h3>
    <div class="rubric">${prayers.rubric}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${prayers.v1}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${prayers.r1}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${prayers.v2}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:1.5rem;">
      ${isRite2 ? prayers.lordsPrayerTraditional : prayers.lordsPrayer}
    </div>
    
    <h4 class="prayer-title">Suffrages</h4>
    ${renderSuffrages(prayers.suffragesA || prayers.suffrages)}
    
    <h3 class="prayer-title">${weeklyCollectTitle}</h3>
    <div class="prayer-block"><p>${weeklyCollectText}</p></div>
    
    <h4 class="prayer-title">A Collect for Peace</h4>
    <div class="prayer-block"><p>${collectPeace}</p></div>    <h4 class="prayer-title">A Prayer for Mission</h4>
    <div class="prayer-block"><p>${LiturgyData.collects.rite2.mission2}</p></div>
    
    <div class="rubric">Authorized intercessions and thanksgivings may be offered here.</div>
    ${getPersonalIntercessionsCardHtml()}
    
    <h3 class="prayer-title">The General Thanksgiving</h3>
    <div class="indented-text">
      Almighty God, Father of all mercies,\nwe your unworthy servants give you humble thanks\nfor all your goodness and loving-kindness\nto us and to all whom you have made.\nWe bless you for our creation, preservation,\nand all the blessings of this life;\nbut above all for your immeasurable love\nin the redemption of the world by our Lord Jesus Christ;\nfor the means of grace, and for the hope of glory.\nAnd, we pray, give us such an awareness of your mercies,\nthat with truly thankful hearts we may show forth your praise,\nnot only with our lips, but in our lives,\nby giving up our selves to your service,\nand by walking before you\nin holiness and righteousness all our days;\nthrough Jesus Christ our Lord,\nto whom, with you and the Holy Spirit,\nbe honor and glory throughout all ages. Amen.
    </div>
    
    <div class="prayer-block" style="margin-top:2rem;">
      <p style="white-space: pre-line;">${closingText}</p>
    </div>
    ${renderHabitCheckInHtml('evening')}
  `;
}

function renderCompline() {
  const data = LiturgyData.compline;
  const seasonObj = getLiturgicalSeason(AppState.currentDate);
  const season = seasonObj.key;
  const isEaster = season === 'easter';

  return `
    ${getSeasonalOrnamentHtml(season)}
    <h2 class="liturgy-section-title">${data.title}</h2>
    
    ${renderLiturgicalPodcastBanner()}
    
    <div class="rubric">${data.rubric1}</div>
    <div class="prayer-block"><p>${data.opening}</p></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v1}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r1}</span></div>
    
    <div class="rubric">${data.rubricConfession}</div>
    <div class="prayer-block"><p>${data.exhortation}</p></div>
    <div class="indented-text">${data.text}</div>
    
    <div class="rubric">${data.rubricAbsolution}</div>
    <div class="prayer-block"><p>${data.absolution}</p></div>
    
    <div class="versicle-row" style="margin-top:1.5rem;"><span class="v-indicator">V.</span><span>${data.v2}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r2}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:1rem;">${season === 'lent' ? data.doxology.replace(/\s*Alleluia\.?/gi, '') : data.doxology}</div>
    
    <div class="rubric">${data.rubricPsalms}</div>
    <div class="prayer-block" style="display:flex; flex-direction:column; gap:0.5rem;">
      ${Object.entries(data.psalms).map(([key, ps]) => `
        <div style="border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); overflow:hidden;">
          <button class="toggle-psalm-header" data-psalm="${key}" style="width:100%; display:flex; justify-content:space-between; padding:0.65rem 1rem; font-family:var(--font-heading); font-weight:600; background-color:var(--bg-secondary); color:var(--text-primary);">
            <span>${ps.title}</span>
            <span class="toggle-indicator">▶</span>
          </button>
          <div id="${key}" style="display:none; padding:1.25rem; background-color:var(--bg-card); border-top:1px solid var(--border-color);" class="indented-text">
            ${ps.text}
          </div>
        </div>
      `).join('')}
    </div>
    
    <div class="rubric">${data.rubricScripture}</div>
    <div class="prayer-block" style="display:flex; flex-direction:column; gap:0.75rem;">
      ${data.scriptures.map(s => `
        <div style="background-color: var(--bg-secondary); padding: 1rem; border-radius: var(--border-radius-sm); border: 1px solid var(--border-color);">
          <p style="font-style: italic; margin-bottom: 0.25rem;">${s.text}</p>
          <button class="btn-primary" style="font-size:10px; padding:0.25rem 0.5rem; margin-top:0.25rem;" onclick="window.LookupScriptureDirect('${s.ref}')">Read full passage</button>
        </div>
      `).join('')}
      <div class="versicle-row" style="margin-top:0.5rem;"><span class="r-indicator">R.</span><span>${data.response}</span></div>
    </div>
    
    <div class="versicle-row" style="margin-top:1.5rem;"><span class="v-indicator">V.</span><span>${data.v3}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r3}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v4}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r4}</span></div>
    
    <div class="rubric">${data.rubricPrayers}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v5}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r5}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v6}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-top:0.5rem;">${data.lordsPrayer}</div>
    
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v7}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r7}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v8}</span></div>
    
    <div class="prayer-block" style="margin-top:0.5rem; display:flex; flex-direction:column; gap:0.75rem;">
      ${data.collects.map(c => `<p>${c}</p>`).join('')}
    </div>
    
    <h4 class="prayer-title" style="margin-top:1.5rem;">The Song of Simeon</h4>
    <div class="rubric">${data.rubricNunc}</div>
    <p style="font-weight: 500; font-style: italic; margin-bottom: 0.5rem;">${data.antiphonBefore}</p>
    <div class="indented-text">${data.nuncDimittis}</div>
    <p style="font-weight: 500; font-style: italic; margin-top: 0.5rem;">
      ${isEaster ? data.antiphonAfter : data.antiphonAfter.replace(' Alleluia, alleluia, alleluia.', '')}
    </p>
    
    <div class="versicle-row" style="margin-top:1.5rem;"><span class="v-indicator">V.</span><span>${data.v9}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r9}</span></div>
    
    <div class="prayer-block" style="margin-top:1.5rem;"><p>${data.blessing}</p></div>
    ${renderHabitCheckInHtml('compline')}
  `;
}

function renderSuffrages(list) {
  return list.map(item => `
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${item.v}</span></div>
    <div class="versicle-row" style="margin-bottom:0.75rem;"><span class="r-indicator">R.</span><span>${item.r}</span></div>
  `).join('');
}

// Render the Readings Container layout block inside liturgy
function renderAppointedReadingsContainer() {
  const readings = AppState.currentAppointedReadings;
  
  if (!readings) {
    return `
      <div class="appointed-readings-section">
        <div class="readings-header">
          <span class="readings-title">
            <span class="desktop-only">Appointed Scripture Lessons</span>
            <span class="mobile-only">Today's Appointed Readings</span>
          </span>
        </div>
        <div class="scripture-loading" style="height:120px;">
          <div class="spinner"></div>
          <span>Parsing readings from podcast description...</span>
        </div>
      </div>
    `;
  }

  const activeTab = AppState.activeReadingTab;
  
  return `
    <div class="appointed-readings-section">
      <div class="readings-header">
        <span class="readings-title">
          <span class="desktop-only">Today's Appointed Scripture (${AppState.bibleVersion})</span>
          <span class="mobile-only">Today's Appointed Readings</span>
        </span>
        <div class="readings-nav-tabs">
          ${readings.ot ? `<button class="reading-tab-btn ${activeTab === 'ot' ? 'active' : ''}" data-readtab="ot"><span class="desktop-only">Old Testament</span><span class="mobile-only">OT</span></button>` : ''}
          ${readings.psalms ? `<button class="reading-tab-btn ${activeTab === 'psalms' ? 'active' : ''}" data-readtab="psalms">Psalms</button>` : ''}
          ${readings.nt ? `<button class="reading-tab-btn ${activeTab === 'nt' ? 'active' : ''}" data-readtab="nt"><span class="desktop-only">Epistle</span><span class="mobile-only">NT</span></button>` : ''}
          ${readings.gospel ? `<button class="reading-tab-btn ${activeTab === 'gospel' ? 'active' : ''}" data-readtab="gospel">Gospel</button>` : ''}
        </div>
      </div>
      
      <div class="reading-content-box" id="liturgy-reading-box">
        <!-- Text gets injected here by loadActiveReadingText() -->
      </div>
    </div>
  `;
}

// Binds event listeners to the tabs within the liturgy reading block
function bindLiturgyReadingTabs() {
  document.querySelectorAll('.reading-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-readtab');
      AppState.activeReadingTab = tab;
      
      // Update tab active state in DOM
      document.querySelectorAll('.reading-tab-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-readtab') === tab);
      });
      
      loadActiveReadingText();
    });
  });

  // Perform initial load of scripture text for the active tab
  loadActiveReadingText();
}

let cachedPsalter = null;

async function getBcpPsalter() {
  return BcpPsalter;
}

async function getDolYearOne() { return DolYearOne; }
async function getDolYearTwo() { return DolYearTwo; }
async function getDolHolyDays() { return DolHolyDays; }

function getLectionaryKey(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();
  const dayOfWeek = date.getDay();
  const daysOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeekNames[dayOfWeek];

  const dateMidnight = new Date(year, month, dayOfMonth);
  const time = dateMidnight.getTime();

  // Reference dates for current calendar year
  const easter = getEasterDate(year);
  const ashWednesday = new Date(easter.getTime() - 46 * 24 * 60 * 60 * 1000);
  const pentecost = new Date(easter.getTime() + 49 * 24 * 60 * 60 * 1000);
  const trinitySunday = new Date(easter.getTime() + 56 * 24 * 60 * 60 * 1000);
  const advent = getAdventSunday(year);

  // 1. Determine Lectionary Year Cycle
  // Year One starts 1st Advent preceding odd-numbered years.
  // Year Two starts 1st Advent preceding even-numbered years.
  let targetCycleYear = year;
  if (time >= advent.getTime()) {
    targetCycleYear = year + 1;
  }
  const isYearOne = (targetCycleYear % 2 === 1);
  const cycleName = isYearOne ? 'Year One' : 'Year Two';

  // 2. Check for Holy Days (Dec 26, 27, 28)
  const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateMMDD = `${monthNamesShort[month]} ${dayOfMonth}`;
  
  if (month === 11 && (dayOfMonth === 26 || dayOfMonth === 27 || dayOfMonth === 28)) {
    return { cycle: cycleName, season: 'Holy Day', week: undefined, day: dateMMDD, isHolyDay: true };
  }

  // 3. Liturgical Season & Week Calculations
  
  // A. Christmas season spillover from previous year (Jan 1 to Jan 5)
  const prevYearChristmas = new Date(year - 1, 11, 25);
  const prevYearEpiphanyEve = new Date(year, 0, 5);
  const isSpilloverChristmas = (time >= new Date(year, 0, 1).getTime() && time <= prevYearEpiphanyEve.getTime());
  
  if ((month === 11 && dayOfMonth >= 25) || isSpilloverChristmas) {
    const season = 'Christmas';
    const week = 'Christmas Day and Following';
    if (dayOfWeek === 0) {
      const title = dayOfMonth <= 1 || month === 11 ? 'The First Sunday after Christmas' : 'The Second Sunday after Christmas';
      return { cycle: cycleName, season, week, day: 'Sunday', title };
    } else {
      return { cycle: cycleName, season, week, day: dateMMDD };
    }
  }

  // B. Advent (from Advent Sunday to Dec 24)
  if (time >= advent.getTime() && time < new Date(year, 11, 25).getTime()) {
    const season = 'Advent';
    if (month === 11 && dayOfMonth === 24) {
      return { cycle: cycleName, season, week: 'Week of 4 Advent', day: 'Dec 24' };
    }
    const diffDays = Math.floor((time - advent.getTime()) / (24 * 60 * 60 * 1000));
    const weekNum = Math.floor(diffDays / 7) + 1;
    return { cycle: cycleName, season, week: `Week of ${weekNum} Advent`, day: dayName };
  }

  // C. Epiphany (Jan 6 to Ash Wednesday eve)
  if (time >= new Date(year, 0, 6).getTime() && time < ashWednesday.getTime()) {
    const season = 'Epiphany';
    if (month === 0 && dayOfMonth === 6) {
      return { cycle: cycleName, season, week: 'The Epiphany and Following', day: 'Jan 6' };
    }
    
    // Find Baptism Sunday (first Sunday after Jan 6)
    let baptismSunday = new Date(year, 0, 7);
    while (baptismSunday.getDay() !== 0) {
      baptismSunday.setDate(baptismSunday.getDate() + 1);
    }
    
    if (time < baptismSunday.getTime()) {
      return { cycle: cycleName, season, week: 'The Epiphany and Following', day: dateMMDD };
    }
    
    const S = new Date(time);
    S.setDate(S.getDate() - dayOfWeek);
    
    const lastEpiphanySunday = new Date(ashWednesday.getTime() - 3 * 24 * 60 * 60 * 1000);
    if (S.getTime() === lastEpiphanySunday.getTime()) {
      return { cycle: cycleName, season, week: 'Week of Last Epiphany', day: dayName };
    } else {
      const diffWeeks = Math.floor((S.getTime() - baptismSunday.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
      return { cycle: cycleName, season, week: `Week of ${diffWeeks} Epiphany`, day: dayName };
    }
  }

  // D. Lent (Ash Wednesday to Holy Saturday)
  if (time >= ashWednesday.getTime() && time < easter.getTime()) {
    const season = 'Lent';
    const lent1Sunday = new Date(ashWednesday.getTime() + 4 * 24 * 60 * 60 * 1000);
    if (time < lent1Sunday.getTime()) {
      return { cycle: cycleName, season, week: 'Ash Wednesday and Following', day: dayName };
    }
    
    const S = new Date(time);
    S.setDate(S.getDate() - dayOfWeek);
    
    const diffWeeks = Math.floor((S.getTime() - lent1Sunday.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
    if (diffWeeks <= 5) {
      return { cycle: cycleName, season, week: `Week of ${diffWeeks} Lent`, day: dayName };
    } else {
      return { cycle: cycleName, season, week: 'Holy Week', day: dayName };
    }
  }

  // E. Easter Season (Easter Sunday to Pentecost Sunday)
  if (time >= easter.getTime() && time <= pentecost.getTime()) {
    const season = 'Easter';
    if (time === pentecost.getTime()) {
      return { cycle: cycleName, season, week: 'Pentecost', day: 'Sunday' };
    }
    
    const S = new Date(time);
    S.setDate(S.getDate() - dayOfWeek);
    
    const diffWeeks = Math.floor((S.getTime() - easter.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
    if (diffWeeks === 1) {
      return { cycle: cycleName, season, week: 'Easter Week', day: dayName };
    } else {
      return { cycle: cycleName, season, week: `Week of ${diffWeeks} Easter`, day: dayName };
    }
  }

  // F. Season after Pentecost (Ordinary Time)
  if (time > pentecost.getTime() && time < advent.getTime()) {
    const season = 'The Season after Pentecost';
    const eveOfTrinity = new Date(trinitySunday.getTime() - 24 * 60 * 60 * 1000);
    
    if (time === eveOfTrinity.getTime()) {
      return { cycle: cycleName, season, week: undefined, day: 'Saturday' };
    }
    if (time === trinitySunday.getTime()) {
      return { cycle: cycleName, season, week: undefined, day: 'Sunday' };
    }
    
    const S = new Date(time);
    S.setDate(S.getDate() - dayOfWeek);
    
    const may8 = new Date(date.getFullYear(), 4, 8);
    const diffDays = Math.floor((S.getTime() - may8.getTime()) / (24 * 60 * 60 * 1000));
    const properNum = Math.floor(diffDays / 7) + 1;
    
    return { cycle: cycleName, season, week: `Proper ${properNum}`, day: dayName };
  }

  return { cycle: cycleName, season: 'Unknown', week: undefined, day: dayName };
}

function getLectionaryReadings(date, office, dolYear1, dolYear2, dolHolyDays) {
  const key = getLectionaryKey(date);
  if (!key) return null;

  let entry = null;
  if (key.isHolyDay) {
    entry = dolHolyDays.find(item => item.day === key.day);
  } else {
    const db = (key.cycle === 'Year One') ? dolYear1 : dolYear2;
    entry = db.find(item => {
      const seasonMatch = item.season === key.season;
      const weekMatch = item.week === key.week;
      const dayMatch = item.day === key.day;
      const titleMatch = key.title ? item.title === key.title : true;
      return seasonMatch && weekMatch && dayMatch && titleMatch;
    });
  }

  if (!entry) return null;

  let psalmsStr = '';
  if (entry.psalms) {
    const psArr = entry.psalms[office] || entry.psalms.morning || entry.psalms.evening;
    if (Array.isArray(psArr)) {
      psalmsStr = psArr.join(', ');
    } else if (typeof psArr === 'string') {
      psalmsStr = psArr;
    }
  }

  let ot = '';
  let nt = '';
  let gospel = '';

  const lessons = entry.lessons || {};
  const officeLessons = lessons[office];

  if (officeLessons) {
    ot = officeLessons.first || '';
    nt = officeLessons.second || '';
    gospel = officeLessons.gospel || '';
  } else {
    ot = lessons.first || '';
    nt = lessons.second || '';
    gospel = lessons.gospel || '';
  }

  return {
    ot,
    psalms: psalmsStr,
    nt,
    gospel,
    season: key.season,
    week: key.week,
    day: key.day,
    cycle: key.cycle
  };
}

function parsePsalms(passageStr) {
  let clean = passageStr.replace(/&/g, ',');
  let parts = clean.split(/[;,]/);
  let results = [];
  let currentPsalm = null;
  
  for (let part of parts) {
    part = part.trim();
    if (!part) continue;
    
    let isExplicitPsalm = /psalms?/i.test(part);
    let cleanPart = part.replace(/psalms?/gi, '').trim();
    
    if (cleanPart.includes(':')) {
      let [psStr, rangeStr] = cleanPart.split(':');
      let pNum = parseInt(psStr.trim(), 10);
      if (isNaN(pNum)) continue;
      currentPsalm = { psalm: pNum, ranges: [] };
      results.push(currentPsalm);
      parseAndAddRange(currentPsalm, rangeStr);
    } else {
      if (cleanPart.includes('-')) {
        if (currentPsalm && !isExplicitPsalm) {
          parseAndAddRange(currentPsalm, cleanPart);
        } else {
          let [start, end] = cleanPart.split('-').map(s => parseInt(s.trim(), 10));
          if (!isNaN(start) && !isNaN(end)) {
            for (let p = start; p <= end; p++) {
              results.push({ psalm: p, ranges: null });
            }
          }
        }
      } else {
        let val = parseInt(cleanPart, 10);
        if (isNaN(val)) continue;
        
        if (isExplicitPsalm || !currentPsalm || !currentPsalm.ranges) {
          currentPsalm = { psalm: val, ranges: null };
          results.push(currentPsalm);
        } else {
          currentPsalm.ranges.push({ start: val, end: val });
        }
      }
    }
  }
  return results;
}

function parseAndAddRange(psalmObj, rangeStr) {
  if (!psalmObj.ranges) psalmObj.ranges = [];
  if (rangeStr.includes('-')) {
    let [start, end] = rangeStr.split('-').map(s => parseInt(s.trim(), 10));
    if (!isNaN(start) && !isNaN(end)) {
      psalmObj.ranges.push({ start, end });
    }
  } else {
    let v = parseInt(rangeStr.trim(), 10);
    if (!isNaN(v)) {
      psalmObj.ranges.push({ start: v, end: v });
    }
  }
}

function getFilteredPsalmHtml(psalter, pNum, ranges) {
  const psalm = psalter[pNum];
  if (!psalm) return `<div class="scripture-error">Psalm ${pNum} not found in database.</div>`;
  
  let html = `<h2 class="passageref">Psalm ${pNum}</h2>`;
  if (psalm.title) {
    html += `<p class="rubric" style="text-align:center; margin-top:-0.5rem; margin-bottom:1.5rem;">${psalm.title}</p>`;
  }
  
  const lines = psalm.text.split('\n');
  let verses = [];
  let currentVerse = null;
  
  lines.forEach(line => {
    let m = line.match(/^(\d+)\s*(.*)/);
    if (m) {
      if (currentVerse) verses.push(currentVerse);
      currentVerse = { num: parseInt(m[1], 10), text: m[2], lines: [] };
    } else {
      if (currentVerse) {
        currentVerse.lines.push(line.trim());
      }
    }
  });
  if (currentVerse) verses.push(currentVerse);
  
  let filtered = verses;
  if (ranges && ranges.length > 0) {
    filtered = verses.filter(v => {
      return ranges.some(r => v.num >= r.start && v.num <= r.end);
    });
  }
  
  let firstVerse = true;
  filtered.forEach(v => {
    let verseText = v.text;
    if (AppState.activeTypography === 'serif' && firstVerse) {
      const m = verseText.match(/^([A-Za-z])/);
      if (m) {
        verseText = `<span class="liturgical-drop-cap">${m[1]}</span>${verseText.substring(1)}`;
      }
      firstVerse = false;
    }
    html += `<p class="verse-para"><sup class="vnumVis">${v.num}</sup> ${verseText}</p>`;
    v.lines.forEach(l => {
      html += `<p class="verse-para" style="padding-left:1.5rem">${l}</p>`;
    });
  });
  
  return html;
}

// Fetch and load scripture text into the scripture container inside liturgy
async function loadActiveReadingText() {
  const container = document.getElementById('liturgy-reading-box');
  if (!container) return;

  const readings = AppState.currentAppointedReadings;
  if (!readings) return;

  const tab = AppState.activeReadingTab;
  const passage = readings[tab];

  if (!passage) {
    container.innerHTML = `<div class="scripture-error">No passage appointed for this section.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="scripture-loading">
      <div class="spinner"></div>
      <span>Loading ${passage}...</span>
    </div>
  `;

  // Offline BCP Psalter handling
  if (tab === 'psalms') {
    try {
      const parsed = parsePsalms(passage);
      if (parsed.length > 0) {
        const psalter = await getBcpPsalter();
        let htmlOut = '<div class="bibletext">';
        parsed.forEach(p => {
          htmlOut += getFilteredPsalmHtml(psalter, p.psalm, p.ranges);
        });
        
        // Gloria Patri
        let gloriaText = "";
        if (AppState.activeRite === 'rite1') {
          gloriaText = `<h4 class="prayer-title" style="margin-top:2rem;">Gloria Patri</h4>
<div class="indented-text" style="font-style:italic;margin-top:.5rem;">
Glory be to the Father, and to the Son, and to the Holy Ghost: *<br/>
&nbsp;&nbsp;as it was in the beginning, is now, and ever shall be,<br/>
&nbsp;&nbsp;world without end. Amen.
</div>`;
        } else {
          gloriaText = `<h4 class="prayer-title" style="margin-top:2rem;">Gloria Patri</h4>
<div class="indented-text" style="font-style:italic;margin-top:.5rem;">
Glory to the Father, and to the Son, and to the Holy Spirit: *<br/>
&nbsp;&nbsp;as it was in the beginning, is now, and will be for ever. Amen.
</div>`;
        }
        htmlOut += gloriaText;
        htmlOut += '</div>';
        
        container.innerHTML = `
          <h3 class="appointed-passage-heading" style="font-family: var(--font-heading); color: var(--accent-color); margin-top: 0; margin-bottom: 1.25rem; font-size: 1.4rem; font-weight: 600; text-align: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
            ${passage}
          </h3>
          ${htmlOut}
          <span class="scripture-source-credit" style="display: block; margin-top: 1.25rem; font-size: 0.8rem; opacity: 0.7; font-style: italic; text-align: right;">Source: BCP 1979 Psalter (Offline)</span>
        `;
        return;
      }
    } catch(err) {
      console.warn("Failed to render local BCP psalter, falling back to fetch", err);
    }
  }

  try {
    const data = await fetchScripture(passage, AppState.bibleVersion);
    let contentHtml = applyIlluminatedDropCap(data.textHtml);
    if (tab === 'ot' || tab === 'nt' || tab === 'gospel') {
      contentHtml += getReadingResponseHtml(passage, AppState.activeRite);
    }
    container.innerHTML = `
      <h3 class="appointed-passage-heading" style="font-family: var(--font-heading); color: var(--accent-color); margin-top: 0; margin-bottom: 1.25rem; font-size: 1.4rem; font-weight: 600; text-align: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
        ${passage}
      </h3>
      <div class="bibletext">
        ${contentHtml}
      </div>
      <span class="scripture-source-credit" style="display: block; margin-top: 1.25rem; font-size: 0.8rem; opacity: 0.7; font-style: italic; text-align: right;">Source: ${data.source}</span>
    `;
  } catch (error) {
    container.innerHTML = `
      <div class="offline-scripture-card">
        <h4>Reading Offline Fallback</h4>
        <p>We encountered a connection issue while fetching scripture from the web. You can read the appointed passage in your own Bible:</p>
        <span class="offline-citation-badge">${passage}</span>
        <div>
          <button class="offline-bible-btn" id="btn-retry-reading">✕ Retry Connection</button>
        </div>
      </div>
    `;
    
    document.getElementById('btn-retry-reading')?.addEventListener('click', () => {
      loadActiveReadingText();
    });
  }
}

async function updateReadingsForCurrentDate() {
  // Reset collect and overrides
  AppState.feastCollect = null;
  AppState.liturgicalOverrideName = null;
  AppState.activeCommemoration = null;
  
  const month = String(AppState.currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(AppState.currentDate.getDate()).padStart(2, '0');
  const mmDd = `${month}-${day}`;
  const feast = FeastCalendar[mmDd];
  
  // Check for a transferred feast from yesterday if today has no appointed feast
  let transferredFeast = null;
  let yesterdayName = '';
  if (!feast) {
    const yesterday = new Date(AppState.currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    const yMonth = String(yesterday.getMonth() + 1).padStart(2, '0');
    const yDay = String(yesterday.getDate()).padStart(2, '0');
    const yMmDd = `${yMonth}-${yDay}`;
    const yesterdayFeast = FeastCalendar[yMmDd];
    
    // Transferred if yesterdayFeast exists and yesterday was a Sunday
    if (yesterdayFeast && yesterday.getDay() === 0) {
      transferredFeast = yesterdayFeast;
      const yesterdayOptions = { weekday: 'long', month: 'long', day: 'numeric' };
      yesterdayName = yesterday.toLocaleDateString('en-US', yesterdayOptions);
    }
  }
  
  let readings = null;
  let sourceName = '';
  
  // Resolve liturgical day info to see if Sunday or movable major feast takes precedence
  const seasonObj = getLiturgicalSeason(AppState.currentDate);
  const isSunday = AppState.currentDate.getDay() === 0;
  const isPrincipalOrSundayPrecedence = isSunday && (
    seasonObj.key === 'advent' || 
    seasonObj.key === 'lent' || 
    seasonObj.key === 'easter' || 
    seasonObj.key === 'pentecost' || 
    seasonObj.key === 'trinity'
  );
  
  // 1. Check BCP Major Feast
  if (AppState.useFeast && feast && feast.type === 'major' && !isPrincipalOrSundayPrecedence) {
    const office = AppState.activeOffice;
    const feastReadings = feast.readings[office] || feast.readings.morning || feast.readings.evening || feast.readings;
    readings = {
      ot: feastReadings.ot,
      psalms: feastReadings.psalms,
      nt: feastReadings.nt,
      gospel: feastReadings.gospel
    };
    AppState.feastCollect = feast.collect;
    AppState.liturgicalOverrideName = feast.name;
    AppState.activeCommemoration = feast;
    sourceName = `Feast of ${feast.name}`;
  }
  // 2. Check LFF Minor Feast
  else if (AppState.useLff && feast && feast.type === 'minor' && !isPrincipalOrSundayPrecedence) {
    const feastReadings = feast.readings;
    readings = {
      ot: feastReadings.ot,
      psalms: feastReadings.psalms,
      nt: feastReadings.nt,
      gospel: feastReadings.gospel
    };
    AppState.feastCollect = feast.collect;
    AppState.liturgicalOverrideName = feast.name;
    AppState.activeCommemoration = feast;
    sourceName = `LFF: ${feast.name}`;
  }
  // 3. Check Sunday RCL
  else if (AppState.useRcl && AppState.currentDate.getDay() === 0) {
    sourceName = 'Sunday RCL';
    // Show placeholder in UI while fetching
    AppState.currentAppointedReadings = { ot: '...', psalms: '...', nt: '...', gospel: '...' };
    renderLiturgyFlow();
    
    const rcl = await fetchRclReadings(AppState.currentDate);
    if (rcl) {
      readings = rcl;
    }
  }
  
  if (readings) {
    AppState.todayReadings.morning = readings;
    AppState.todayReadings.evening = readings;
    AppState.currentAppointedReadings = readings;
    
    // Set custom label in subbar
    const dayLabel = document.getElementById('liturgical-day-label');
    if (dayLabel) {
      dayLabel.textContent = `${getLiturgicalDayLabel(AppState.currentDate)} (${sourceName})`;
    }
    
    // Update Saint Biography Panel
    if (AppState.activeCommemoration) {
      updateSaintBiographySidebar(AppState.activeCommemoration);
    } else if (feast) {
      updateSaintBiographySidebar(feast, true);
    } else if (transferredFeast) {
      updateSaintBiographySidebar(transferredFeast, false, true, yesterdayName);
    } else {
      updateSaintBiographySidebar(null);
    }
    
    // Render Liturgy
    renderLiturgyFlow();
  } else {
    // Hide Saint Biography Sidebar (but show if an LFF feast is appointed for today or if there is a transferred feast)
    if (feast) {
      updateSaintBiographySidebar(feast, isPrincipalOrSundayPrecedence);
    } else if (transferredFeast) {
      updateSaintBiographySidebar(transferredFeast, false, true, yesterdayName);
    } else {
      updateSaintBiographySidebar(null);
    }
    
    // Resolve BCP lectionary databases
    const dolYear1 = await getDolYearOne();
    const dolYear2 = await getDolYearTwo();
    const dolHolyDays = await getDolHolyDays();
    
    const morningReadings = getLectionaryReadings(AppState.currentDate, 'morning', dolYear1, dolYear2, dolHolyDays);
    const eveningReadings = getLectionaryReadings(AppState.currentDate, 'evening', dolYear1, dolYear2, dolHolyDays);
    
    AppState.todayReadings.morning = morningReadings;
    AppState.todayReadings.evening = eveningReadings;
    
    syncCurrentOfficeAppointedReadings();
    
    // Set custom label in subbar
    const dayLabel = document.getElementById('liturgical-day-label');
    if (dayLabel) {
      if (morningReadings) {
        const weekStr = morningReadings.week ? ` - ${morningReadings.week}` : '';
        dayLabel.textContent = `${morningReadings.cycle} - ${morningReadings.season}${weekStr} - ${morningReadings.day} (Daily Office)`;
      } else {
        dayLabel.textContent = `${getLiturgicalDayLabel(AppState.currentDate)} (Daily Office)`;
      }
    }
  }
  
  // Re-apply theme classes since activeCommemoration may have changed
  applyThemeAndSettings();
}

function updateAppForDate(date) {
  AppState.currentDate = date;
  
  // Automatically prioritize feasts if the new date is a BCP Major Feast
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const mmDd = `${month}-${day}`;
  const feast = FeastCalendar[mmDd];
  
  // Resolve liturgical day info to see if Sunday or movable major feast takes precedence
  const seasonObj = getLiturgicalSeason(date);
  const isSunday = date.getDay() === 0;
  
  // BCP Rules: Sundays of Advent, Lent, Easter Season, and Principal Feasts (Pentecost, Trinity) take absolute precedence
  const isPrincipalOrSundayPrecedence = isSunday && (
    seasonObj.key === 'advent' || 
    seasonObj.key === 'lent' || 
    seasonObj.key === 'easter' || 
    seasonObj.key === 'pentecost' || 
    seasonObj.key === 'trinity'
  );
  
  if (feast && feast.type === 'major' && !isPrincipalOrSundayPrecedence) {
    AppState.useFeast = true;
    AppState.useLff = false;
  } else {
    AppState.useFeast = false;
    AppState.useLff = false;
  }
  
  // Automatically prioritize RCL on Sundays, disable on weekdays
  if (isSunday) {
    AppState.useRcl = true;
  } else {
    AppState.useRcl = false;
  }
  
  const dateDisplay = document.getElementById('current-date-display');
  if (dateDisplay) {
    dateDisplay.textContent = formatDateDisplay(AppState.currentDate);
  }
  
  const dayLabel = document.getElementById('liturgical-day-label');
  if (dayLabel) {
    dayLabel.textContent = getLiturgicalDayLabel(AppState.currentDate);
  }
  
  const picker = document.getElementById('calendar-picker');
  if (picker) {
    const year = AppState.currentDate.getFullYear();
    const month = String(AppState.currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(AppState.currentDate.getDate()).padStart(2, '0');
    picker.value = `${year}-${month}-${day}`;
  }
  
  applyThemeAndSettings();
  updateReadingsForCurrentDate();
  renderEpisodesList();
}

// ==========================================
// PODCAST UI SYNC ENGINE
// ==========================================
async function preloadPodcastFeeds() {
  AppState.isPreloading = true;
  
  const listContainer = document.getElementById('episode-list-container');
  if (listContainer) {
    listContainer.innerHTML = `
      <div class="scripture-loading">
        <div class="spinner"></div>
        <span>Loading podcast feed...</span>
      </div>
    `;
  }

  try {
    console.log("Preloading podcast feeds in background...");
    const [morningRes, eveningRes] = await Promise.allSettled([
      fetchPodcastEpisodes('morning'),
      fetchPodcastEpisodes('evening')
    ]);
    
    if (morningRes.status === 'fulfilled') {
      AppState.episodes.morning = morningRes.value;
      console.log("Morning podcast preloaded successfully.");
    } else {
      console.warn("Failed to preload morning podcast:", morningRes.reason);
    }
    
    if (eveningRes.status === 'fulfilled') {
      AppState.episodes.evening = eveningRes.value;
      console.log("Evening podcast preloaded successfully.");
    } else {
      console.warn("Failed to preload evening podcast:", eveningRes.reason);
    }
    
    AppState.isPreloading = false;
    
    // Once preloaded, update readings and re-render
    await updateReadingsForCurrentDate();
    
    if (listContainer) {
      renderEpisodesList();
    }
  } catch (error) {
    AppState.isPreloading = false;
    console.error("Error preloading podcasts:", error);
    if (listContainer) {
      listContainer.innerHTML = `
        <div class="scripture-error">
          <span>Could not load podcast feed.</span>
          <button class="btn-primary" style="margin-top:0.5rem;" id="btn-retry-podcast">Retry</button>
        </div>
      `;
      document.getElementById('btn-retry-podcast')?.addEventListener('click', loadPodcastSection);
    }
  }
}

async function loadPodcastSection() {
  const listContainer = document.getElementById('episode-list-container');
  if (!listContainer) return;

  const show = AppState.activeShow;
  
  if (AppState.episodes[show].length > 0) {
    renderEpisodesList();
    return;
  }

  if (AppState.isPreloading) {
    listContainer.innerHTML = `
      <div class="scripture-loading">
        <div class="spinner"></div>
        <span>Loading podcast feed...</span>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = `
    <div class="scripture-loading">
      <div class="spinner"></div>
      <span>Loading podcast feed...</span>
    </div>
  `;

  try {
    AppState.episodes[show] = await fetchPodcastEpisodes(show);
    updateReadingsForCurrentDate();
    renderEpisodesList();
  } catch (error) {
    console.error("Podcast load failed", error);
    listContainer.innerHTML = `
      <div class="scripture-error">
        <span>Could not load podcast feed.</span>
        <button class="btn-primary" style="margin-top:0.5rem;" id="btn-retry-podcast">Retry</button>
      </div>
    `;
    document.getElementById('btn-retry-podcast')?.addEventListener('click', loadPodcastSection);
  }
}

function syncCurrentOfficeAppointedReadings() {
  // Morning Prayer gets Morning readings, Evening Prayer gets Evening readings
  if (AppState.activeOffice === 'morning') {
    AppState.currentAppointedReadings = AppState.todayReadings.morning;
    AppState.activeReadingTab = 'ot';
  } else if (AppState.activeOffice === 'evening') {
    AppState.currentAppointedReadings = AppState.todayReadings.evening;
    AppState.activeReadingTab = 'ot';
  } else {
    AppState.currentAppointedReadings = null;
  }
  
  // Re-render liturgy content
  renderLiturgyFlow();
}


// ==========================================
// LITURGICAL COLLECT HELPERS
// ==========================================
const BCP_SUNDAY_COLLECTS = {
  "Advent 1": "Almighty God, give us grace to cast away the works of darkness, and put on the armor of light, now in the time of this mortal life in which your Son Jesus Christ came to visit us in great humility; that in the last day, when he shall come again in his glorious majesty to judge both the living and the dead, we may rise to the life immortal; through him who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Advent 2": "Merciful God, who sent your messengers the prophets to preach repentance and prepare the way for our salvation: Give us grace to heed their warnings and forsake our sins, that we may greet with joy the coming of Jesus Christ our Redeemer; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Advent 3": "Stir up your power, O Lord, and with great might come among us; and, because we are sorely hindered by our sins, let your bountiful grace and mercy speedily help and deliver us; through Jesus Christ our Lord, to whom, with you and the Holy Spirit, be honor and glory, now and for ever. Amen.",
  "Advent 4": "Purify our conscience, Almighty God, by your daily visitation, that your Son Jesus Christ, at his coming, may find in us a mansion prepared for himself; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Christmas 1": "Almighty God, you have poured upon us the new light of your incarnate Word: Grant that this light, enkindled in our hearts, may shine forth in our lives; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
  "Christmas 2": "O God, who wonderfully created, and yet more wonderfully restored, the dignity of human nature: Grant that we may share the divine life of him who humbled himself to share our humanity, your Son Jesus Christ; who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.",
  "Epiphany 1": "Father in heaven, who at the baptism of Jesus in the River Jordan proclaimed him your beloved Son and anointed him with the Holy Spirit: Grant that all who are baptized into his Name may keep the covenant they have made, and boldly confess him as Lord and Savior; who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.",
  "Epiphany 2": "Almighty and everlasting God, who governs all things both in heaven and on earth: Mercifully hear the supplications of your people, and in our time grant us your peace; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Epiphany 3": "Give us grace, O Lord, to answer readily the call of our Savior Jesus Christ and proclaim to all people the Good News of his salvation, that we and the whole world may perceive the glory of his marvelous works; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Epiphany 4": "Almighty and everlasting God, you know that we are set in the midst of so many and great dangers, that by reason of the frailty of our nature we cannot always stand upright: Grant to us such strength and protection as may support us in all dangers and carry us through all temptations; through Jesus Christ our Lord. Amen.",
  "Epiphany 5": "Set us free, O God, from the bondage of our sins, and give us the liberty of that abundant life which you have made known to us in your Son our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Epiphany 6": "O God, the strength of all who put their trust in you: Mercifully accept our prayers; and because in our weakness we can do nothing good without you, give us the help of your grace, that in keeping your commandments we may please you both in will and deed; through Jesus Christ our Lord. Amen.",
  "Epiphany 7": "O Lord, you have taught us that without love whatever we do is worth nothing: Send your Holy Spirit and pour into our hearts your greatest gift, which is love, the true bond of peace and of all virtue, without which whoever lives is accounted dead before you. Grant this for the sake of your only Son Jesus Christ our Lord. Amen.",
  "Epiphany 8": "Most loving Father, whose will it is that both wheat and tares should grow together until the harvest: Give us grace to serve you with patience and trust, leaving the judgment to you; through Jesus Christ our Lord. Amen.",
  "Epiphany Last": "O God, who before the passion of your only-begotten Son revealed his glory upon the holy mountain: Grant to us that we, beholding by faith the light of his countenance, may be strengthened to bear our cross, and be changed into his likeness from glory to glory; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Lent 1": "Almighty God, whose blessed Son was led by the Spirit to be tempted by Satan: Come quickly to help us who are assaulted by many temptations; and, as you know the weaknesses of each of us, let each one find you mighty to save; through Jesus Christ your Son our Lord. Amen.",
  "Lent 2": "O God, whose glory it is always to have mercy: Be gracious to all who have gone astray from your ways, and bring them again with penitent hearts and steadfast faith to embrace and hold fast the unchangeable truth of your Word, Jesus Christ your Son; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Lent 3": "Heavenly Father, you have made us for yourself, and our hearts are restless until they find their rest in you: Show us your mercy, that we may be freed from our sins and find in you our peace and joy; through Jesus Christ our Lord. Amen.",
  "Lent 4": "Gracious Father, whose blessed Son Jesus Christ came down from heaven to be the true bread which gives life to the world: Evermore give us this bread, that he may live in us, and we in him; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Lent 5": "Almighty God, you alone can bring into order the unruly wills and affections of sinners: Grant your people grace to love what you command and desire what you promise; that, among the swift and varied changes of the world, our hearts may surely there be fixed where true joys are to be found; through Jesus Christ our Lord. Amen.",
  "Palm Sunday": "Almighty and everliving God, in your tender love for the human race you sent your Son our Savior Jesus Christ to take upon him our nature, and to suffer death upon the cross, giving us the example of his great humility: Mercifully grant that we may walk in the way of his suffering, and also share in his resurrection; through Jesus Christ our Lord. Amen.",
  "Easter 1": "O God, who for our redemption gave your only-begotten Son to the death of the cross, and by his glorious resurrection delivered us from the power of our enemy: Grant us so to die daily to sin, that we may evermore live with him in the joy of his resurrection; through Jesus Christ our Lord. Amen.",
  "Easter 2": "Almighty and eternal God, who in the Paschal mystery established the new covenant of reconciliation: Grant that all who have been reborn into the fellowship of Christ's Body may show forth in their lives what they profess by their faith; through Jesus Christ our Lord. Amen.",
  "Easter 3": "O God, whose blessed Son made himself known to his disciples in the breaking of bread: Open the eyes of our faith, that we may behold him in all his redeeming work; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Easter 4": "O God, whose Son Jesus is the good shepherd of your people: Grant that when we hear his voice we may know him who calls us each by name, and follow where he leads; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Easter 5": "Almighty God, whom truly to know is everlasting life: Grant us so perfectly to know your Son Jesus Christ to be the way, the truth, and the life, that we may steadfastly follow his steps in the way that leads to eternal life; through Jesus Christ your Son our Lord. Amen.",
  "Easter 6": "O God, you have prepared for those who love you such good things as surpass our understanding: Pour into our hearts such love towards you, that we, loving you in all things and above all things, may obtain your promises, which exceed all that we can desire; through Jesus Christ our Lord. Amen.",
  "Easter 7": "O God, the King of glory, you have exalted your only Son Jesus Christ with great triumph to your kingdom in heaven: Do not leave us comfortless, but send us your Holy Spirit to strengthen us, and exalt us to that place where our Savior Christ has gone before; who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.",
  "Pentecost": "O God, who on this day taught the hearts of your faithful people by sending to them the light of your Holy Spirit: Grant us by the same Spirit to have a right judgment in all things, and evermore to rejoice in his holy comfort; through Jesus Christ your Son our Lord, who lives and reigns with you, in the unity of the same Spirit, one God, for ever and ever. Amen.",
  "Trinity": "Almighty and everlasting God, you have given to us your servants grace, by the confession of a true faith, to acknowledge the glory of the eternal Trinity, and in the power of your divine Majesty to worship the Unity: Keep us steadfast in this faith and worship, and bring us at last to see you in your one and eternal glory, O Father; who with the Son and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
  "Proper 1": "Almighty and everlasting God, whose will it is to restore all things in your well-beloved Son, the King of kings and Lord of lords: Mercifully grant that the peoples of the earth, divided and enslaved by sin, may be freed and brought together under his most gracious rule; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Proper 2": "O God, the strength of all who put their trust in you: Mercifully accept our prayers; and because in our weakness we can do nothing good without you, give us the help of your grace, that in keeping your commandments we may please you both in will and deed; through Jesus Christ our Lord. Amen.",
  "Proper 3": "Grant, O Lord, that the course of this world may be so peaceably ordered by your governance, that your Church may joyfully serve you in all godly quietness; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Proper 4": "O God, your never-failing providence sets in order all things both in heaven and earth: Put away from us, we entreat you, all hurtful things, and give us those things which are profitable for us; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Proper 5": "O God, from whom all good proceeds: Grant that by your inspiration we may think those things that are right, and by your merciful guiding may do them; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Proper 6": "Keep, O Lord, your household the Church in your steadfast faith and love, that by the help of your grace we may proclaim your truth with boldness, and minister your justice with compassion; for the sake of Jesus Christ our Savior, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Proper 7": "O Lord, make us have a perpetual fear and love of your holy Name, for you never fail to help and govern those whom you have set upon the sure foundation of your loving-kindness; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Proper 8": "O Almighty God, who by your Son Jesus Christ did give to your Apostle Peter many excellent gifts, and commanded him earnestly to feed your flock: Make, we beseech you, all bishops and pastors diligently to preach your holy Word, and the people obediently to follow the same; through Jesus Christ our Lord. Amen.",
  "Proper 9": "O God, you have taught us that keeping all your commandments is summarized in love for you and our neighbor: Grant us the grace of your Holy Spirit to love you with our whole heart, and our neighbor as ourselves; through Jesus Christ our Lord. Amen.",
  "Proper 10": "O Lord, mercifully receive the prayers of your people who call upon you, and grant that they may know and understand what things they ought to do, and also may have grace and power faithfully to accomplish the same; through Jesus Christ our Lord. Amen.",
  "Proper 11": "Almighty God, the fountain of all wisdom, you know our necessities before we ask and our ignorance in asking: Have compassion on our weakness, and mercifully give us those things which for our unworthiness we dare not, and for our blindness we cannot ask; through the worthiness of your Son Jesus Christ our Lord. Amen.",
  "Proper 12": "O God, the protector of all who trust in you, without whom nothing is strong, nothing is holy: Increase and multiply upon us your mercy; that, with you as our ruler and guide, we may so pass through things temporal, that we lose not the things eternal; through Jesus Christ our Lord. Amen.",
  "Proper 13": "Let your merciful ears, O Lord, be open to the prayers of your humble servants; and, that they may obtain their petitions, make them to ask such things as shall please you; through Jesus Christ our Lord. Amen.",
  "Proper 14": "Grant to us, Lord, we pray, the spirit to think and do always such things as are right, that we, who cannot exist without you, may by you be enabled to live according to your will; through Jesus Christ our Lord. Amen.",
  "Proper 15": "Almighty God, you have given your only Son to be for us a sacrifice for sin, and also an example of godly life: Give us grace to receive thankfully that his inestimable benefit, and daily to endeavor ourselves to follow the blessed steps of his most holy life; through Jesus Christ our Lord. Amen.",
  "Proper 16": "Grant, O merciful God, that your Church, being gathered together in unity by your Holy Spirit, may show forth your power among all peoples, to the glory of your Name; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Proper 17": "Lord of all power and might, the author and giver of all good things: Graft in our hearts the love of your Name, increase in us true religion, nourish us with all goodness, and bring forth in us the fruit of good works; through Jesus Christ our Lord. Amen.",
  "Proper 18": "Grant us, O Lord, to trust in you with all our hearts; for, as you always resist the proud who confide in their own strength, so you never forsake those who make their boast of your mercy; through Jesus Christ our Lord. Amen.",
  "Proper 19": "O God, because without you we are not able to please you, mercifully grant that your Holy Spirit may in all things direct and rule our hearts; through Jesus Christ our Lord. Amen.",
  "Proper 20": "Grant us, Lord, not to be anxious about earthly things, but to love things heavenly; and, even now while we are placed among things that are passing away, to hold fast to those that shall endure; through Jesus Christ our Lord. Amen.",
  "Proper 21": "O God, you declare your almighty power chiefly in showing mercy and pity: Mercifully grant to us such a measure of your grace, that we, running to obtain your promises, may be made partakers of your heavenly treasure; through Jesus Christ our Lord. Amen.",
  "Proper 22": "Almighty and everlasting God, you are always more ready to hear than we to pray, and to give more than we either desire or deserve: Pour down upon us the abundance of your mercy, forgiving us those things of which our conscience is afraid, and giving us those good things for which we are not worthy to ask, except through the merits and mediation of Jesus Christ our Savior. Amen.",
  "Proper 23": "Lord, we pray that your grace may always precede and follow us, that we may continually be given to all good works; through Jesus Christ our Lord. Amen.",
  "Proper 24": "Almighty and everlasting God, in Christ you have revealed your glory to all the nations: Guard the works of your mercy, that your Church throughout the world may persevere with steadfast faith in the confession of your Name; through Jesus Christ our Lord. Amen.",
  "Proper 25": "Almighty and everlasting God, increase in us the gifts of faith, hope, and charity; and, that we may obtain what you promise, make us love what you command; through Jesus Christ our Lord. Amen.",
  "Proper 26": "Almighty and merciful God, it is only by your gift that your faithful people offer you true and laudable service: Grant that we may run without stumbling to obtain your heavenly promises; through Jesus Christ our Lord. Amen.",
  "Proper 27": "O God, whose blessed Son came into the world that he might destroy the works of the devil and make us children of God and heirs of eternal life: Grant that, having this hope, we may purify ourselves as he is pure; that, when he comes again with power and great glory, we may be made like him in his eternal and glorious kingdom; through Jesus Christ our Lord. Amen.",
  "Proper 28": "Blessed Lord, who caused all holy Scriptures to be written for our learning: Grant us so to hear them, read, mark, learn, and inwardly digest them, that we may embrace and ever hold fast the blessed hope of everlasting life, which you have given us in our Savior Jesus Christ. Amen.",
  "Proper 29": "Almighty and everlasting God, whose will it is to restore all things in your well-beloved Son, the King of kings and Lord of lords: Mercifully grant that the peoples of the earth, divided and enslaved by sin, may be freed and brought together under his most gracious rule; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen."
};

const BCP_SUNDAY_COLLECTS_RITE1 = {
  "Advent 1": "Almighty God, give us grace that we may cast away the works of darkness, and put upon us the armor of light, now in the time of this mortal life in which thy Son Jesus Christ came to visit us in great humility; that in the last day, when he shall come again in his glorious majesty to judge both the quick and the dead, we may rise to the life immortal; through him who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Advent 2": "Merciful God, who sentest thy messengers the prophets to preach repentance and prepare the way for our salvation: Give us grace to heed their warnings and forsake our sins, that we may greet with joy the coming of Jesus Christ our Redeemer; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Advent 3": "Stir up thy power, O Lord, and with great might come among us; and, because we are sorely hindered by our sins, let thy bountiful grace and mercy speedily help and deliver us; through Jesus Christ our Lord, to whom, with thee and the Holy Ghost, be honor and glory, now and for ever. Amen.",
  "Advent 4": "Purify our conscience, Almighty God, by thy daily visitation, that thy Son Jesus Christ, at his coming, may find in us a mansion prepared for himself; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Christmas 1": "Almighty God, who hast poured upon us the new light of thine incarnate Word: Grant that the same light, enkindled in our hearts, may shine forth in our lives; through Jesus Christ our Lord, who liveth and reigneth with thee, in the unity of the Holy Ghost, one God, now and for ever. Amen.",
  "Christmas 2": "O God, who wonderfully createdst, and yet more wonderfully restoredst, the dignity of human nature: Grant that we may share the divine life of him who humbled himself to share our humanity, thy Son Jesus Christ; who liveth and reigneth with thee, in the unity of the Holy Ghost, one God, for ever and ever. Amen.",
  "Epiphany 1": "Father in heaven, who at the baptism of Jesus in the River Jordan didst proclaim him thy beloved Son and anoint him with the Holy Spirit: Grant that all who are baptized into his Name may keep the covenant they have made, and boldly confess him as Lord and Savior; who liveth and reigneth with thee and the Holy Ghost, one God, in glory everlasting. Amen.",
  "Epiphany 2": "Almighty and everlasting God, who dost govern all things both in heaven and on earth: Mercifully hear the supplications of thy people, and in our time grant us thy peace; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Epiphany 3": "Give us grace, O Lord, readily to answer the call of our Savior Jesus Christ and proclaim to all people the Good News of his salvation, that we and the whole world may perceive the glory of his marvelous works; who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Epiphany 4": "Almighty and everlasting God, who knowest us to be set in the midst of so many and great dangers, that by reason of the frailty of our nature we cannot always stand upright: Grant to us such strength and protection as may support us in all dangers and carry us through all temptations; through Jesus Christ our Lord. Amen.",
  "Epiphany 5": "Set us free, O God, from the bondage of our sins, and give us the liberty of that abundant life which thou hast made known to us in thy Son our Savior Jesus Christ; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Epiphany 6": "O God, the strength of all them that put their trust in thee: Mercifully accept our prayers; and because through the weakness of our mortal nature we can do no good thing without thee, grant us the help of thy grace, that in keeping thy commandments we may please thee both in will and deed; through Jesus Christ our Lord. Amen.",
  "Epiphany 7": "O Lord, who hast taught us that all our doings without charity are nothing worth: Send thy Holy Ghost and pour into our hearts that most excellent gift of charity, the very bond of peace and of all virtues, without which whosoever liveth is counted dead before thee. Grant this for the sake of thine only Son Jesus Christ our Lord. Amen.",
  "Epiphany 8": "Most loving Father, whose will it is that both wheat and tares should grow together until the harvest: Give us grace to serve thee with patience and trust, leaving the judgment unto thee; through Jesus Christ our Lord. Amen.",
  "Epiphany Last": "O God, who before the passion of thine only-begotten Son didst reveal his glory upon the holy mountain: Grant unto us that we, beholding by faith the light of his countenance, may be strengthened to bear our cross, and be changed into his likeness from glory to glory; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Lent 1": "Almighty God, whose blessed Son was led by the Spirit to be tempted by Satan: Come quickly to help us who are assaulted by many temptations; and, as thou knowest the weaknesses of each of us, let each one find thee mighty to save; through Jesus Christ thy Son our Lord. Amen.",
  "Lent 2": "O God, whose glory it is always to have mercy: Be gracious to all who have gone astray from thy ways, and bring them again with penitent hearts and steadfast faith to embrace and hold fast the unchangeable truth of thy Word, Jesus Christ thy Son; who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Lent 3": "Heavenly Father, thou hast made us for thyself, and our hearts are restless until they find their rest in thee: Show us thy mercy, that we may be freed from our sins and find in thee our peace and joy; through Jesus Christ our Lord. Amen.",
  "Lent 4": "Gracious Father, whose blessed Son Jesus Christ came down from heaven to be the true bread which giveth life to the world: Evermore give us this bread, that he may live in us, and we in him; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Lent 5": "Almighty God, who alone canst order the unruly wills and affections of sinful men: Grant unto thy people grace to love the thing which thou commandest and desire that which thou dost promise; that, among the sundry and manifold changes of the world, our hearts may surely there be fixed where true joys are to be found; through Jesus Christ our Lord. Amen.",
  "Palm Sunday": "Almighty and everlasting God, who, of thy tender love towards mankind, hast sent thy Son our Savior Jesus Christ to take upon him our flesh, and to suffer death upon the cross, that all mankind should follow the example of his great humility: Mercifully grant that we may both follow the example of his patience, and also be made partakers of his resurrection; through the same Jesus Christ our Lord. Amen.",
  "Easter 1": "O God, who for our redemption didst give thine only-begotten Son to the death of the cross, and by his glorious resurrection hast delivered us from the power of our enemy: Grant us so to die daily unto sin, that we may evermore live with him in the joy of his resurrection; through Jesus Christ our Lord. Amen.",
  "Easter 2": "Almighty and eternal God, who in the Paschal mystery didst establish the new covenant of reconciliation: Grant that all who have been reborn into the fellowship of Christ's Body may show forth in their lives what they profess by their faith; through Jesus Christ our Lord. Amen.",
  "Easter 3": "O God, whose blessed Son did make himself known to his disciples in the breaking of bread: Open the eyes of our faith, that we may behold him in all his redeeming work; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Easter 4": "O God, whose Son Jesus is the good shepherd of thy people: Grant that when we hear his voice we may know him who calleth us each by name, and follow where he leadeth; who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Easter 5": "O Almighty God, whom truly to know is everlasting life: Grant us perfectly to know thy Son Jesus Christ to be the way, the truth, and the life, that we may steadfastly follow his steps in the way that leadeth to eternal life; through the same thy Son Jesus Christ our Lord. Amen.",
  "Easter 6": "O God, who hast prepared for them that love thee such good things as pass man's understanding: Pour into our hearts such love toward thee, that we, loving thee in all things and above all things, may obtain thy promises, which exceed all that we can desire; through Jesus Christ our Lord. Amen.",
  "Easter 7": "O God, the King of glory, who hast exalted thine only Son Jesus Christ with great triumph unto thy kingdom in heaven: We beseech thee, leave us not comfortless, but send to us thy Holy Ghost to comfort us, and exalt us unto the same place whither our Savior Christ is gone before; who liveth and reigneth with thee and the Holy Ghost, one God, world without end. Amen.",
  "Pentecost": "O God, who on this day didst teach the hearts of thy faithful people by sending to them the light of thy Holy Spirit: Grant us by the same Spirit to have a right judgment in all things, and evermore to rejoice in his holy comfort; through Jesus Christ thy Son our Lord, who liveth and reigneth with thee, in the unity of the same Spirit, one God, world without end. Amen.",
  "Trinity": "Almighty and everlasting God, who hast given unto us thy servants grace, by the confession of a true faith, to acknowledge the glory of the eternal Trinity, and in the power of the Divine Majesty to worship the Unity: We beseech thee that thou wouldest keep us steadfast in this faith and worship, and bring us at last to see thee in thy one and eternal glory, O Father; who with the Son and the Holy Ghost livest and reignest, one God, for ever and ever. Amen.",
  "Proper 1": "Almighty and everlasting God, whose will it is to restore all things in thy well-beloved Son, the King of kings and Lord of lords: Mercifully grant that the peoples of the earth, divided and enslaved by sin, may be freed and brought together under his most gracious rule; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Proper 2": "O God, the strength of all them that put their trust in thee: Mercifully accept our prayers; and because through the weakness of our mortal nature we can do no good thing without thee, grant us the help of thy grace, that in keeping thy commandments we may please thee both in will and deed; through Jesus Christ our Lord. Amen.",
  "Proper 3": "Grant, O Lord, we beseech thee, that the course of this world may be so peaceably ordered by thy governance, that thy Church may joyfully serve thee in all godly quietness; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Proper 4": "O God, whose never-failing providence ordereth all things both in heaven and earth: We humbly beseech thee to put away from us all hurtful things, and to give us those things which are profitable for us; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Proper 5": "O God, from whom all good things do come: Grant to us thy humble servants, that by thy holy inspiration we may think those things that be good, and by thy merciful guiding may perform the same; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Proper 6": "Keep, O Lord, we beseech thee, thy household the Church in thy steadfast faith and love, that by the help of thy grace we may proclaim thy truth with boldness, and minister thy justice with compassion; for the sake of Jesus Christ our Savior, who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Proper 7": "O Lord, make us to have a perpetual fear and love of thy holy Name, for thou never failest to help and govern them whom thou dost bring up in thy steadfast fear and love; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Proper 8": "O Almighty God, who by thy Son Jesus Christ didst give to thy Apostle Peter many excellent gifts, and commandedst him earnestly to feed thy flock: Make, we beseech thee, all bishops and pastors diligently to preach thy holy Word, and the people obediently to follow the same; through Jesus Christ our Lord. Amen.",
  "Proper 9": "O God, who hast taught us that all thy commandments are summed up in love for thee and thy neighbor: Grant us the grace of thy Holy Spirit to love thee with our whole heart, and our neighbor as ourselves; through Jesus Christ our Lord. Amen.",
  "Proper 10": "O Lord, mercifully receive the prayers of thy people who call upon thee, and grant that they may both perceive and know what things they ought to do, and also may have grace and power faithfully to fulfill the same; through Jesus Christ our Lord. Amen.",
  "Proper 11": "Almighty God, the fountain of all wisdom, who knowest our necessities before we ask and our ignorance in asking: We beseech thee to have compassion upon our infirmities, and mercifully to give us those things which for our unworthiness we dare not, and for our blindness we cannot ask; through the worthiness of thy Son Jesus Christ our Lord. Amen.",
  "Proper 12": "O God, the protector of all that trust in thee, without whom nothing is strong, nothing is holy: Increase and multiply upon us thy mercy; that, thou being our ruler and guide, we may so pass through things temporal, that we finally lose not the things eternal; grant this, O heavenly Father, for the sake of Jesus Christ our Lord. Amen.",
  "Proper 13": "Let thy merciful ears, O Lord, be open to the prayers of thy humble servants; and, that they may obtain their petitions, make them to ask such things as shall please thee; through Jesus Christ our Lord. Amen.",
  "Proper 14": "Grant to us, Lord, we beseech thee, the spirit to think and do always such things as are right, that we, who cannot exist without thee, may by thee be enabled to live according to thy will; through Jesus Christ our Lord. Amen.",
  "Proper 15": "Almighty God, who hast given thine only Son to be unto us both a sacrifice for sin, and also an ensample of godly life: Give us grace that we may always most thankfully receive that his inestimable benefit, and also daily endeavor ourselves to follow the blessed steps of his most holy life; through the same Jesus Christ our Lord. Amen.",
  "Proper 16": "Grant, O merciful God, that thy Church, being gathered together in unity by thy Holy Spirit, may show forth thy power among all peoples, to the glory of thy Name; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Proper 17": "Lord of all power and might, who art the author and giver of all good things: Graft in our hearts the love of thy Name, increase in us true religion, nourish us with all goodness, and of thy great mercy keep us in the same; through Jesus Christ our Lord. Amen.",
  "Proper 18": "Grant us, O Lord, we beseech thee, to trust in thee with all our hearts; for, as thou dost always resist the proud who confide in their own strength, so thou dost never forsake them that make their boast of thy mercy; through Jesus Christ our Lord. Amen.",
  "Proper 19": "O God, forasmuch as without thee we are not able to please thee, mercifully grant that thy Holy Spirit may in all things direct and rule our hearts; through Jesus Christ our Lord. Amen.",
  "Proper 20": "Grant us, Lord, we beseech thee, not to be anxious about earthly things, but to love things heavenly; and, even now while we are placed among things that are passing away, to hold fast to those that shall endure; through Jesus Christ our Lord. Amen.",
  "Proper 21": "O God, who declarest thy almighty power chiefly in showing mercy and pity: Mercifully grant unto us such a measure of thy grace, that we, running to obtain thy promises, may be made partakers of thy heavenly treasure; through Jesus Christ our Lord. Amen.",
  "Proper 22": "Almighty and everlasting God, who art always more ready to hear than we to pray, and art wont to give more than either we desire or deserve: Pour down upon us the abundance of thy mercy, forgiving us those things whereof our conscience is afraid, and giving us those good things which we are not worthy to ask, but through the merits and mediation of Jesus Christ thy Son our Lord. Amen.",
  "Proper 23": "Lord, we pray thee that thy grace may always prevent and follow us, and make us continually to be given to all good works; through Jesus Christ our Lord. Amen.",
  "Proper 24": "Almighty and everlasting God, who in Christ hast revealed thy glory unto all nations: Guard the works of thy mercy, that thy Church throughout the world may persevere with steadfast faith in the confession of thy Name; through Jesus Christ our Lord. Amen.",
  "Proper 25": "Almighty and everlasting God, increase in us the gifts of faith, hope, and charity; and, that we may obtain that which thou dost promise, make us to love that which thou dost command; through Jesus Christ our Lord. Amen.",
  "Proper 26": "Almighty and merciful God, of whose only gift it cometh that thy faithful people do unto thee true and laudable service: Grant, we beseech thee, that we may run without stumbling to obtain thy heavenly promises; through Jesus Christ our Lord. Amen.",
  "Proper 27": "O God, whose blessed Son was manifested that he might destroy the works of the devil and make us the sons of God and heirs of eternal life: Grant us, we beseech thee, that, having this hope, we may purify ourselves even as he is pure; that, when he shall appear again with power and great glory, we may be made like unto him in his eternal and glorious kingdom; through the same Jesus Christ our Lord. Amen.",
  "Proper 28": "Blessed Lord, who hast caused all holy Scriptures to be written for our learning: Grant that we may in such wise hear them, read, mark, learn, and inwardly digest them, that by patience and comfort of thy holy Word, we may embrace and ever hold fast the blessed hope of everlasting life, which thou hast given us in our Savior Jesus Christ. Amen.",
  "Proper 29": "Almighty and everlasting God, whose will it is to restore all things in thy well-beloved Son, the King of kings and Lord of lords: Mercifully grant that the peoples of the earth, divided and enslaved by sin, may be freed and brought together under his most gracious rule; who liveth and reigneth with thee and the Holy Ghost, now and for ever. Amen."
};

function getSeasonalSundayCollect(sun, key, rite) {
  if (!key) return null;
  const time = sun.getTime();
  const year = sun.getFullYear();
  const easter = getEasterDate(year);
  const pentecost = new Date(easter.getTime() + 49 * 24 * 60 * 60 * 1000).getTime();
  const trinitySunday = new Date(easter.getTime() + 56 * 24 * 60 * 60 * 1000).getTime();
  
  let databaseKey = null;
  
  if (time === pentecost) {
    databaseKey = "Pentecost";
  } else if (time === trinitySunday) {
    databaseKey = "Trinity";
  } else if (key.season === 'Advent') {
    if (key.week === 'Week of 1 Advent') databaseKey = "Advent 1";
    else if (key.week === 'Week of 2 Advent') databaseKey = "Advent 2";
    else if (key.week === 'Week of 3 Advent') databaseKey = "Advent 3";
    else if (key.week === 'Week of 4 Advent') databaseKey = "Advent 4";
  } else if (key.season === 'Christmas') {
    if (key.title && key.title.includes('Second Sunday')) databaseKey = "Christmas 2";
    else databaseKey = "Christmas 1";
  } else if (key.season === 'Epiphany') {
    if (key.week === 'The Epiphany and Following' || key.week === 'Week of 1 Epiphany') databaseKey = "Epiphany 1";
    else if (key.week === 'Week of 2 Epiphany') databaseKey = "Epiphany 2";
    else if (key.week === 'Week of 3 Epiphany') databaseKey = "Epiphany 3";
    else if (key.week === 'Week of 4 Epiphany') databaseKey = "Epiphany 4";
    else if (key.week === 'Week of 5 Epiphany') databaseKey = "Epiphany 5";
    else if (key.week === 'Week of 6 Epiphany') databaseKey = "Epiphany 6";
    else if (key.week === 'Week of 7 Epiphany') databaseKey = "Epiphany 7";
    else if (key.week === 'Week of 8 Epiphany') databaseKey = "Epiphany 8";
    else if (key.week === 'Week of Last Epiphany') databaseKey = "Epiphany Last";
  } else if (key.season === 'Lent') {
    if (key.week === 'Ash Wednesday and Following' || key.week === 'Week of 1 Lent') databaseKey = "Lent 1";
    else if (key.week === 'Week of 2 Lent') databaseKey = "Lent 2";
    else if (key.week === 'Week of 3 Lent') databaseKey = "Lent 3";
    else if (key.week === 'Week of 4 Lent') databaseKey = "Lent 4";
    else if (key.week === 'Week of 5 Lent') databaseKey = "Lent 5";
    else if (key.week === 'Holy Week') databaseKey = "Palm Sunday";
  } else if (key.season === 'Easter') {
    if (key.week === 'Easter Week') databaseKey = "Easter 1";
    else if (key.week === 'Week of 2 Easter') databaseKey = "Easter 2";
    else if (key.week === 'Week of 3 Easter') databaseKey = "Easter 3";
    else if (key.week === 'Week of 4 Easter') databaseKey = "Easter 4";
    else if (key.week === 'Week of 5 Easter') databaseKey = "Easter 5";
    else if (key.week === 'Week of 6 Easter') databaseKey = "Easter 6";
    else if (key.week === 'Week of 7 Easter') databaseKey = "Easter 7";
  } else if (key.season === 'The Season after Pentecost') {
    if (key.week && key.week.startsWith('Proper ')) {
      databaseKey = key.week;
    }
  }
  
  if (databaseKey) {
    if (rite === 'rite1') {
      return BCP_SUNDAY_COLLECTS_RITE1[databaseKey] || BCP_SUNDAY_COLLECTS[databaseKey];
    } else {
      return BCP_SUNDAY_COLLECTS[databaseKey];
    }
  }
  
  return null;
}

function getSeasonalSundayCollectTitle(sun, key) {
  if (!key) return "Weekly Collect";
  const time = sun.getTime();
  const year = sun.getFullYear();
  const easter = getEasterDate(year);
  const pentecost = new Date(easter.getTime() + 49 * 24 * 60 * 60 * 1000).getTime();
  const trinitySunday = new Date(easter.getTime() + 56 * 24 * 60 * 60 * 1000).getTime();
  
  if (time === pentecost) return "Collect for the Day of Pentecost";
  if (time === trinitySunday) return "Collect for Trinity Sunday";
  
  if (key.season === 'Advent') {
    if (key.week === 'Week of 1 Advent') return "Collect for the First Sunday of Advent";
    if (key.week === 'Week of 2 Advent') return "Collect for the Second Sunday of Advent";
    if (key.week === 'Week of 3 Advent') return "Collect for the Third Sunday of Advent";
    if (key.week === 'Week of 4 Advent') return "Collect for the Fourth Sunday of Advent";
  }
  if (key.season === 'Christmas') {
    if (key.title && key.title.includes('Second Sunday')) return "Collect for the Second Sunday after Christmas";
    return "Collect for the First Sunday after Christmas";
  }
  if (key.season === 'Epiphany') {
    if (key.week === 'The Epiphany and Following' || key.week === 'Week of 1 Epiphany') return "Collect for the First Sunday after the Epiphany";
    if (key.week === 'Week of 2 Epiphany') return "Collect for the Second Sunday after the Epiphany";
    if (key.week === 'Week of 3 Epiphany') return "Collect for the Third Sunday after the Epiphany";
    if (key.week === 'Week of 4 Epiphany') return "Collect for the Fourth Sunday after the Epiphany";
    if (key.week === 'Week of 5 Epiphany') return "Collect for the Fifth Sunday after the Epiphany";
    if (key.week === 'Week of 6 Epiphany') return "Collect for the Sixth Sunday after the Epiphany";
    if (key.week === 'Week of 7 Epiphany') return "Collect for the Seventh Sunday after the Epiphany";
    if (key.week === 'Week of 8 Epiphany') return "Collect for the Eighth Sunday after the Epiphany";
    if (key.week === 'Week of Last Epiphany') return "Collect for the Last Sunday after the Epiphany";
  }
  if (key.season === 'Lent') {
    if (key.week === 'Ash Wednesday and Following' || key.week === 'Week of 1 Lent') return "Collect for the First Sunday in Lent";
    if (key.week === 'Week of 2 Lent') return "Collect for the Second Sunday in Lent";
    if (key.week === 'Week of 3 Lent') return "Collect for the Third Sunday in Lent";
    if (key.week === 'Week of 4 Lent') return "Collect for the Fourth Sunday in Lent";
    if (key.week === 'Week of 5 Lent') return "Collect for the Fifth Sunday in Lent";
    if (key.week === 'Holy Week') return "Collect for Palm Sunday";
  }
  if (key.season === 'Easter') {
    if (key.week === 'Easter Week') return "Collect for Easter Day";
    if (key.week === 'Week of 2 Easter') return "Collect for the Second Sunday of Easter";
    if (key.week === 'Week of 3 Easter') return "Collect for the Third Sunday of Easter";
    if (key.week === 'Week of 4 Easter') return "Collect for the Fourth Sunday of Easter";
    if (key.week === 'Week of 5 Easter') return "Collect for the Fifth Sunday of Easter";
    if (key.week === 'Week of 6 Easter') return "Collect for the Sixth Sunday of Easter";
    if (key.week === 'Week of 7 Easter') return "Collect for the Seventh Sunday of Easter";
  }
  if (key.season === 'The Season after Pentecost') {
    if (key.week && key.week.startsWith('Proper ')) {
      return `Collect for ${key.week}`;
    }
  }
  
  return "Weekly Collect";
}

function getPreviousSundayCollect(date, rite) {
  const sun = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = sun.getDay();
  sun.setDate(sun.getDate() - day);
  sun.setHours(0, 0, 0, 0); // normalize
  
  // Check seasonal Sunday collects first to prioritize principal feasts like Trinity Sunday
  const key = getLectionaryKey(sun);
  const seasonalText = getSeasonalSundayCollect(sun, key, rite);
  
  if (seasonalText) {
    return {
      title: getSeasonalSundayCollectTitle(sun, key),
      text: seasonalText
    };
  }
  
  const month = String(sun.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(sun.getDate()).padStart(2, '0');
  const mmDd = `${month}-${dayOfMonth}`;
  
  // Fallback to fixed-date major feast
  const feast = FeastCalendar[mmDd];
  if (feast && feast.type === 'major') {
    return {
      title: `Sunday Collect (Feast of ${feast.name})`,
      text: feast.collect
    };
  }
  
  // Fallback to standard Sunday resurrection collect
  const sundayCollect = LiturgyData.collects[rite].sunday;
  return {
    title: "Sunday Collect",
    text: sundayCollect
  };
}

function getDailyCollect(dayOfWeek, rite) {
  const dayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const key = dayKeys[dayOfWeek];
  const text = LiturgyData.collects[rite][key];
  
  let title = "A Collect for Sundays";
  if (key === 'monday') title = "A Collect for the Renewal of Life";
  else if (key === 'tuesday') title = "A Collect for Peace";
  else if (key === 'wednesday') title = "A Collect for Grace";
  else if (key === 'thursday') title = "A Collect for Guidance";
  else if (key === 'friday') title = "A Collect for Fridays";
  else if (key === 'saturday') title = "A Collect for Saturdays";
  
  return { title, text };
}

// ==========================================
// CALENDAR-TO-PODCAST MAPPING HELPERS
// ==========================================
function findEpisodeForDate(show, date) {
  const episodes = AppState.episodes[show];
  if (!episodes || episodes.length === 0) return null;
  
  if (show === 'morning' || show === 'evening') {
    // Daily podcast matching: same year, month, date
    return episodes.find(ep => {
      const d = ep.pubDate;
      return d.getFullYear() === date.getFullYear() &&
             d.getMonth() === date.getMonth() &&
             d.getDate() === date.getDate();
    });
  } else if (show === 'song') {
    // Weekly podcast matching: published in the week leading up to the Sunday of the selected date.
    // Sunday of the week
    const sunday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const day = sunday.getDay();
    if (day !== 0) {
      sunday.setDate(sunday.getDate() + (7 - day));
    }
    const sundayMidnight = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate(), 23, 59, 59).getTime();
    // Monday of that week (calculated safely to avoid DST transition offsets)
    const monday = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate());
    monday.setDate(monday.getDate() - 6);
    const mondayMidnight = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate(), 0, 0, 0).getTime();
    
    return episodes.find(ep => {
      const t = ep.pubDate.getTime();
      return t >= mondayMidnight && t <= sundayMidnight;
    });
  }
  return null;
}

window.PlayPodcastEpisodeDirect = function(show, pubDateIso) {
  const episodes = AppState.episodes[show];
  if (!episodes) return;
  const targetDate = new Date(pubDateIso);
  const ep = episodes.find(e => e.pubDate.getTime() === targetDate.getTime());
  if (ep) {
    handlePlayPauseAction(ep);
    // Force sync the liturgy buttons state immediately
    syncLiturgyPodcastButtonsState();
  } else {
    console.warn("Episode not found to play direct:", show, pubDateIso);
  }
};

function renderLiturgicalPodcastBanner() {
  const office = AppState.activeOffice;
  const date = AppState.currentDate;
  
  let dailyShow = null;
  if (office === 'morning') dailyShow = 'morning';
  else if (office === 'evening') dailyShow = 'evening';
  
  const dailyEpisode = dailyShow ? findEpisodeForDate(dailyShow, date) : null;
  const songEpisode = findEpisodeForDate('song', date);
  
  if (!dailyEpisode && !songEpisode) return '';
  
  let html = `<div class="liturgical-podcasts-section">`;
  
  if (dailyEpisode) {
    const isPlaying = AppState.playingEpisode && AppState.playingEpisode.audioUrl === dailyEpisode.audioUrl && AudioEngine.isPlaying();
    const durationMin = Math.floor(dailyEpisode.duration / 60);
    const durationSec = dailyEpisode.duration % 60;
    const durStr = `${durationMin}:${durationSec < 10 ? '0' : ''}${durationSec}`;
    
    html += `
      <div class="liturgical-podcast-card ${isPlaying ? 'active' : ''}">
        <div class="podcast-card-left">
          <div class="podcast-card-icon-container">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v1a7 7 0 0 1-14 0v-1"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </div>
          <div class="podcast-card-info">
            <span class="podcast-card-badge">DAILY OFFICE PODCAST</span>
            <span class="podcast-card-title">${dailyEpisode.title}</span>
            <span class="podcast-card-duration">Duration: ${durStr} mins</span>
          </div>
        </div>
        <button class="podcast-card-play-btn" id="liturgy-podcast-daily-play" data-show="${dailyShow}" data-date="${dailyEpisode.pubDate.toISOString()}">
          ${isPlaying ? `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            Pause
          ` : `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Listen
          `}
        </button>
      </div>
    `;
  }
  
  if (songEpisode) {
    const isPlaying = AppState.playingEpisode && AppState.playingEpisode.audioUrl === songEpisode.audioUrl && AudioEngine.isPlaying();
    const durationMin = Math.floor(songEpisode.duration / 60);
    const durationSec = songEpisode.duration % 60;
    const durStr = `${durationMin}:${durationSec < 10 ? '0' : ''}${durationSec}`;
    
    html += `
      <div class="liturgical-podcast-card song ${isPlaying ? 'active' : ''}">
        <div class="podcast-card-left">
          <div class="podcast-card-icon-container">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </div>
          <div class="podcast-card-info">
            <span class="podcast-card-badge song">SAME OLD SONG (WEEKLY LESSONS)</span>
            <span class="podcast-card-title">${songEpisode.title}</span>
            <span class="podcast-card-duration">Duration: ${durStr} mins</span>
          </div>
        </div>
        <button class="podcast-card-play-btn" id="liturgy-podcast-song-play" data-show="song" data-date="${songEpisode.pubDate.toISOString()}">
          ${isPlaying ? `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            Pause
          ` : `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Listen
          `}
        </button>
      </div>
    `;
  }
  
  html += `</div>`;
  return html;
}

// Bind click event listeners directly to the DOM elements for play buttons
// after HTML is injected, using delegation or on first render.
document.addEventListener('click', (e) => {
  const dailyBtn = e.target.closest('#liturgy-podcast-daily-play');
  const songBtn = e.target.closest('#liturgy-podcast-song-play');
  
  if (dailyBtn) {
    e.stopPropagation();
    const show = dailyBtn.getAttribute('data-show');
    const dateStr = dailyBtn.getAttribute('data-date');
    window.PlayPodcastEpisodeDirect(show, dateStr);
  } else if (songBtn) {
    e.stopPropagation();
    const show = songBtn.getAttribute('data-show');
    const dateStr = songBtn.getAttribute('data-date');
    window.PlayPodcastEpisodeDirect(show, dateStr);
  }
});

function syncLiturgyPodcastButtonsState() {
  const dailyBtn = document.getElementById('liturgy-podcast-daily-play');
  const songBtn = document.getElementById('liturgy-podcast-song-play');
  
  const playingEpisode = AppState.playingEpisode;
  const isPlaying = playingEpisode && AudioEngine.isPlaying();
  
  if (dailyBtn) {
    const show = dailyBtn.getAttribute('data-show');
    const dateStr = dailyBtn.getAttribute('data-date');
    const matchesPlaying = playingEpisode && 
                           playingEpisode.feedType === show && 
                           playingEpisode.pubDate.toISOString() === dateStr;
                           
    if (matchesPlaying && isPlaying) {
      dailyBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
        Pause
      `;
      dailyBtn.closest('.liturgical-podcast-card')?.classList.add('active');
    } else {
      dailyBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        Listen
      `;
      dailyBtn.closest('.liturgical-podcast-card')?.classList.remove('active');
    }
  }
  
  if (songBtn) {
    const show = songBtn.getAttribute('data-show');
    const dateStr = songBtn.getAttribute('data-date');
    const matchesPlaying = playingEpisode && 
                           playingEpisode.feedType === show && 
                           playingEpisode.pubDate.toISOString() === dateStr;
                           
    if (matchesPlaying && isPlaying) {
      songBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
        Pause
      `;
      songBtn.closest('.liturgical-podcast-card')?.classList.add('active');
    } else {
      songBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        Listen
      `;
      songBtn.closest('.liturgical-podcast-card')?.classList.remove('active');
    }
  }
}

function renderEpisodesList() {
  const container = document.getElementById('episode-list-container');
  if (!container) return;

  const show = AppState.activeShow;
  const originalList = AppState.episodes[show] || [];

  if (!originalList || originalList.length === 0) {
    container.innerHTML = `<div class="scripture-error">No episodes found.</div>`;
    return;
  }

  let list = originalList;
  const query = (AppState.podcastSearchQuery || '').trim().toLowerCase();
  if (query) {
    list = list.filter(ep => 
      (ep.title && ep.title.toLowerCase().includes(query)) ||
      (ep.description && ep.description.toLowerCase().includes(query))
    );
  }

  if (list.length === 0) {
    container.innerHTML = `<div class="scripture-error">No episodes match your search.</div>`;
    return;
  }

  // Identify matching episode for selected date
  const date = AppState.currentDate;
  const matchingEp = findEpisodeForDate(show, date);
  let matchedEpisodeInList = null;
  if (matchingEp) {
    matchedEpisodeInList = list.find(ep => ep.audioUrl === matchingEp.audioUrl);
  }

  // Prepend match to top of list and tag it
  if (matchedEpisodeInList) {
    list = list.filter(ep => ep.audioUrl !== matchedEpisodeInList.audioUrl);
    list = [Object.assign({}, matchedEpisodeInList, { isLiturgicalMatch: true }), ...list];
  }

  // Slice to prevent rendering performance slowdowns (max 50 episodes visible at once)
  const slicedList = list.slice(0, 50);

  container.innerHTML = slicedList.map((ep, idx) => {
    const isPlaying = AppState.playingEpisode && AppState.playingEpisode.audioUrl === ep.audioUrl;
    
    // Formatting date
    const dateStr = ep.pubDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Formatted duration
    const min = Math.floor(ep.duration / 60);
    const sec = ep.duration % 60;
    const durStr = `${min}:${sec < 10 ? '0' : ''}${sec} mins`;

    const badgeHtml = ep.isLiturgicalMatch 
      ? `<span class="liturgical-match-badge ${show === 'song' ? 'song' : ''}">${show === 'song' ? 'Matches Selected Week' : 'Matches Selected Date'}</span>`
      : '';

    return `
      <div class="episode-card ${isPlaying ? 'playing' : ''} ${ep.isLiturgicalMatch ? 'selected-date-match' : ''}" data-idx="${idx}">
        ${badgeHtml}
        <div class="episode-card-top">
          <h4 class="episode-title">${ep.title}</h4>
          <span class="episode-date">${dateStr}</span>
        </div>
        <p class="episode-description">${ep.description}</p>
        <div class="episode-meta-row">
          <span class="episode-duration">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${durStr}
          </span>
          <button class="episode-play-btn" data-action="play" data-idx="${idx}" aria-label="Play episode"></button>
        </div>
      </div>
    `;
  }).join('');

  // Bind click play action
  container.querySelectorAll('.episode-play-btn, .episode-card').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent nested click trigger
      
      const idx = parseInt(el.getAttribute('data-idx'), 10);
      const episode = slicedList[idx];
      
      handlePlayPauseAction(episode);
    });
  });
}

function handlePlayPauseAction(episode) {
  if (AppState.playingEpisode && AppState.playingEpisode.audioUrl === episode.audioUrl) {
    AudioEngine.toggle();
  } else {
    AppState.playingEpisode = episode;
    
    // Show Bottom Player bar
    const bar = document.getElementById('bottom-player-bar');
    if (bar) {
      bar.classList.add('active');
      document.body.classList.add('player-active');
      syncPlayerMinimizedState();
    }
    
    // Sync Bottom player fields
    let coverArt = '';
    let subtitle = '';
    if (episode.feedType === 'morning') {
      coverArt = 'https://megaphone.imgix.net/podcasts/b5147f2a-e3d0-11ea-8876-63e7979dfd2a/image/AMATO.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress';
      subtitle = 'A Morning at the Office';
    } else if (episode.feedType === 'evening') {
      coverArt = 'https://megaphone.imgix.net/podcasts/bda80f26-e3d0-11ea-b724-33897e0bbb01/image/aneap.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress';
      subtitle = 'An Evening at Prayer';
    } else if (episode.feedType === 'song') {
      coverArt = 'https://hosting-media.riverside.com/media/imports/podcasts/b4f24061-6e87-4503-adce-cdf8ee0914d0/cover.jpg';
      subtitle = 'The Same Old Song';
    }
    
    document.getElementById('player-cover-art').src = coverArt;
    document.getElementById('player-episode-title').textContent = episode.title;
    document.getElementById('player-show-subtitle').textContent = subtitle;
      
    AudioEngine.playEpisode(episode);
  }
}


function setupPodcastSearchBindings() {
  const searchInput = document.getElementById('podcast-search-input');
  const clearBtn = document.getElementById('podcast-search-clear-btn');
  if (!searchInput || !clearBtn) return;

  searchInput.addEventListener('input', () => {
    const val = searchInput.value;
    AppState.podcastSearchQuery = val;
    clearBtn.style.display = val ? 'flex' : 'none';
    renderEpisodesList();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    AppState.podcastSearchQuery = '';
    clearBtn.style.display = 'none';
    searchInput.focus();
    renderEpisodesList();
  });
}


// ==========================================
// AUDIO ENGINE LISTENERS & PLAYER SYNC
// ==========================================
function setupAudioPlayerBindings() {
  const playPauseBtn = document.getElementById('player-play-pause');
  const skipForwardBtn = document.getElementById('player-skip-forward');
  const skipBackBtn = document.getElementById('player-skip-back');
  const speedSelect = document.getElementById('playback-speed-select');
  
  const sliderTrack = document.getElementById('player-slider-track');
  const sliderProgress = document.getElementById('player-slider-progress');
  const sliderThumb = document.getElementById('player-slider-thumb');
  
  const currentTimeLabel = document.getElementById('player-current-time');
  const totalDurationLabel = document.getElementById('player-total-duration');

  // Format Helper
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  AudioEngine.registerCallbacks({
    onPlay: (episode) => {
      playPauseBtn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `;
      // Update lists
      renderEpisodesList();
      syncLiturgyPodcastButtonsState();
    },
    
    onPause: () => {
      playPauseBtn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
      renderEpisodesList();
      syncLiturgyPodcastButtonsState();
    },
    
    onTimeUpdate: (currentTime, duration) => {
      currentTimeLabel.textContent = formatTime(currentTime);
      totalDurationLabel.textContent = formatTime(duration);
      
      const percent = duration > 0 ? (currentTime / duration) * 100 : 0;
      sliderProgress.style.width = `${percent}%`;
      sliderThumb.style.left = `${percent}%`;
    },
    
    onLoadedMetadata: (duration) => {
      totalDurationLabel.textContent = formatTime(duration);
    },
    
    onEnded: () => {
      playPauseBtn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
      syncLiturgyPodcastButtonsState();
    }
  });

  // Controls bindings
  playPauseBtn.addEventListener('click', () => {
    AudioEngine.toggle();
  });

  skipForwardBtn.addEventListener('click', () => {
    AudioEngine.skip(30);
  });

  skipBackBtn.addEventListener('click', () => {
    AudioEngine.skip(-15);
  });

  speedSelect.addEventListener('change', (e) => {
    AudioEngine.setSpeed(parseFloat(e.target.value));
  });

  document.getElementById('player-minimize-btn')?.addEventListener('click', () => {
    AppState.playerMinimized = !AppState.playerMinimized;
    localStorage.setItem('playerMinimized', AppState.playerMinimized);
    syncPlayerMinimizedState();
  });

  // Drag Seek slider
  let isDragging = false;
  
  const handleSeek = (clientX) => {
    const rect = sliderTrack.getBoundingClientRect();
    const pos = (clientX - rect.left) / rect.width;
    const seekTime = Math.max(0, Math.min(pos, 1)) * AudioEngine.getDuration();
    
    const percent = Math.max(0, Math.min(pos * 100, 100));
    sliderProgress.style.width = `${percent}%`;
    sliderThumb.style.left = `${percent}%`;
    
    return seekTime;
  };

  sliderTrack.addEventListener('mousedown', (e) => {
    isDragging = true;
    const time = handleSeek(e.clientX);
    AudioEngine.seek(time);
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      handleSeek(e.clientX);
    }
  });

  window.addEventListener('mouseup', (e) => {
    if (isDragging) {
      isDragging = false;
      const time = handleSeek(e.clientX);
      AudioEngine.seek(time);
    }
  });
  
  // Touch support for timeline seeking
  sliderTrack.addEventListener('touchstart', (e) => {
    isDragging = true;
    const time = handleSeek(e.touches[0].clientX);
    AudioEngine.seek(time);
  });
  
  window.addEventListener('touchmove', (e) => {
    if (isDragging) {
      handleSeek(e.touches[0].clientX);
    }
  });
  
  window.addEventListener('touchend', (e) => {
    if (isDragging) {
      isDragging = false;
      const time = handleSeek(e.changedTouches[0].clientX);
      AudioEngine.seek(time);
    }
  });
}

// ==========================================
// CALENDAR MODAL ENGINE
// ==========================================
let calViewYear = null;
let calViewMonth = null;

function openCalendarModal() {
  const modal = document.getElementById('calendar-modal-overlay');
  if (!modal) return;
  
  calViewYear = AppState.currentDate.getFullYear();
  calViewMonth = AppState.currentDate.getMonth();
  
  renderCalendarGrid(calViewYear, calViewMonth);
  updateStreakBadge();
  
  const searchInput = document.getElementById('calendar-search-input');
  if (searchInput) { searchInput.value = ''; searchInput.focus(); }
  
  const resultsEl = document.getElementById('calendar-feast-results');
  if (resultsEl) { resultsEl.style.display = 'none'; resultsEl.innerHTML = ''; }
  
  modal.classList.add('active');
}

function renderCalendarGrid(year, month) {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const label = document.getElementById('cal-month-label');
  if (label) label.textContent = `${months[month]} ${year}`;
  
  const grid = document.getElementById('calendar-grid');
  if (!grid) return;
  
  const today = new Date();
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  let html = '';
  
  // Empty cells for days before start of month
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-day empty"></div>`;
  }
  
  for (let d = 1; d <= daysInMonth; d++) {
    const mm = String(month + 1).padStart(2, '0');
    const dd = String(d).padStart(2, '0');
    const key = `${mm}-${dd}`;
    const feast = FeastCalendar[key];
    
    const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === d;
    const isSelected = AppState.currentDate.getFullYear() === year && AppState.currentDate.getMonth() === month && AppState.currentDate.getDate() === d;
    const isMajor = feast && feast.type === 'major';
    const hasMinor = feast && feast.type === 'minor';
    
    const date = new Date(year, month, d);
    const seasonInfo = getLiturgicalSeason(date);
    const isMartyr = feast && feast.name && (feast.name.toLowerCase().includes('martyr') || feast.name.toLowerCase().includes('martyrs'));
    const seasonClass = isMartyr ? 'season-martyr' : `season-${seasonInfo.color || seasonInfo.key}`;
    
    let classes = 'cal-day ' + seasonClass;
    if (isToday) classes += ' today';
    if (isSelected) classes += ' selected';
    if (isMajor) classes += ' has-major-feast';
    
    const feastLabel = feast ? `<span class="cal-day-feast">${feast.name.split(',')[0].substring(0,14)}</span>` : '';
    
    // Add completions visual indicator (micro-dots)
    const dateStr = `${year}-${mm}-${dd}`;
    const completions = AppState.habitLogs[dateStr] || [];
    let dotsHtml = '';
    if (completions.length > 0) {
      dotsHtml = `<div class="cal-day-dots-container">` + 
        completions.map(office => `<span class="cal-day-dot ${office}"></span>`).join('') + 
        `</div>`;
    }
    
    html += `<div class="${classes}" data-date="${year}-${mm}-${dd}">
      <span class="cal-day-num">${d}</span>
      ${feastLabel}
      ${dotsHtml}
    </div>`;
  }
  
  grid.innerHTML = html;
  
  // Bind day clicks
  grid.querySelectorAll('.cal-day:not(.empty)').forEach(el => {
    el.addEventListener('click', () => {
      const dateStr = el.getAttribute('data-date');
      const parts = dateStr.split('-');
      const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      updateAppForDate(d);
      document.getElementById('calendar-modal-overlay')?.classList.remove('active');
    });
  });
}

function setupCalendarSearch() {
  const searchInput = document.getElementById('calendar-search-input');
  const resultsEl = document.getElementById('calendar-feast-results');
  if (!searchInput || !resultsEl) return;
  
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q || q.length < 2) {
      resultsEl.style.display = 'none';
      resultsEl.innerHTML = '';
      return;
    }
    
    const months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
    const monthAbbr = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    
    // Search feast calendar
    const results = [];
    for (const [key, feast] of Object.entries(FeastCalendar)) {
      const feastName = feast.name.toLowerCase();
      const [m, d] = key.split('-');
      const monthIdx = parseInt(m, 10) - 1;
      const monthName = months[monthIdx];
      const monthShort = monthAbbr[monthIdx];
      const dayStr = `${monthName} ${parseInt(d, 10)}`;
      const dayShortStr = `${monthShort} ${parseInt(d, 10)}`;
      const numericStr = `${parseInt(m,10)}/${parseInt(d,10)}`;
      const altNumeric = `${m}-${d}`;
      
      if (feastName.includes(q) || dayStr.includes(q) || dayShortStr.includes(q) || numericStr.includes(q) || altNumeric.includes(q)) {
        results.push({ key, feast, monthIdx, day: parseInt(d, 10) });
      }
    }
    
    // Sort by month/day
    results.sort((a, b) => a.monthIdx - b.monthIdx || a.day - b.day);
    
    if (results.length === 0) {
      resultsEl.style.display = 'block';
      resultsEl.innerHTML = `<div style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.85rem;">No feasts or dates found</div>`;
      return;
    }
    
    const months2 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    resultsEl.style.display = 'block';
    const currentYear = new Date().getFullYear();
    resultsEl.innerHTML = results.slice(0, 15).map(({ key, feast, monthIdx, day }) => {
      const date = new Date(currentYear, monthIdx, day);
      const seasonInfo = getLiturgicalSeason(date);
      const isMartyr = feast && feast.name && (feast.name.toLowerCase().includes('martyr') || feast.name.toLowerCase().includes('martyrs'));
      const seasonClass = isMartyr ? 'season-martyr' : `season-${seasonInfo.color || seasonInfo.key}`;
      return `
        <div class="calendar-feast-result-item ${seasonClass}" data-key="${key}">
          <div>
            <div class="feast-result-name">${feast.name}</div>
            <div class="feast-result-type">${feast.type === 'major' ? 'Major Feast' : 'Lesser Feast & Commemoration'}</div>
          </div>
          <span class="feast-result-date">${months2[monthIdx]} ${day}</span>
        </div>
      `;
    }).join('');
    
    // Bind feast result clicks
    resultsEl.querySelectorAll('.calendar-feast-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const k = el.getAttribute('data-key');
        const [m, d] = k.split('-');
        const year = new Date().getFullYear();
        const date = new Date(year, parseInt(m, 10) - 1, parseInt(d, 10));
        updateAppForDate(date);
        document.getElementById('calendar-modal-overlay')?.classList.remove('active');
      });
    });
  });
}

function setupCalendarNavButtons() {
  document.getElementById('cal-prev-month')?.addEventListener('click', () => {
    calViewMonth--;
    if (calViewMonth < 0) { calViewMonth = 11; calViewYear--; }
    renderCalendarGrid(calViewYear, calViewMonth);
  });
  document.getElementById('cal-next-month')?.addEventListener('click', () => {
    calViewMonth++;
    if (calViewMonth > 11) { calViewMonth = 0; calViewYear++; }
    renderCalendarGrid(calViewYear, calViewMonth);
  });
}

// ==========================================
// MODALS & EVENT BOUND DIRECT LINKS
// ==========================================
function setupModalBindings() {
  // Settings modal
  const settingsModal = document.getElementById('settings-modal-overlay');
  const triggerSettings = document.getElementById('trigger-settings');
  const closeSettings = document.getElementById('close-settings');

  triggerSettings.addEventListener('click', () => settingsModal.classList.add('active'));
  closeSettings.addEventListener('click', () => {
    settingsModal.classList.remove('active');
    if (AppState.pitchpipeActiveOscillator) togglePitchpipeTone();
  });
  
  // Bible modal
  const bibleModal = document.getElementById('bible-modal-overlay');
  const triggerBible = document.getElementById('trigger-bible-lookup');
  const closeBible = document.getElementById('close-bible');

  triggerBible.addEventListener('click', () => {
    bibleModal.classList.add('active');
    document.getElementById('bible-search-input')?.focus();
  });
  closeBible.addEventListener('click', () => bibleModal.classList.remove('active'));

  // Calendar modal
  const calendarModal = document.getElementById('calendar-modal-overlay');
  const closeCalendar = document.getElementById('close-calendar');
  closeCalendar?.addEventListener('click', () => calendarModal.classList.remove('active'));

  // Prayer List modal
  const prayerModal = document.getElementById('prayer-modal-overlay');
  const triggerPrayer = document.getElementById('trigger-prayer-list');
  const closePrayer = document.getElementById('close-prayer');
  const btnAddPrayer = document.getElementById('btn-add-prayer');
  const prayerNameInput = document.getElementById('prayer-name-input');

  triggerPrayer?.addEventListener('click', () => {
    prayerModal?.classList.add('active');
    renderPrayerList();
    prayerNameInput?.focus();
  });
  closePrayer?.addEventListener('click', () => prayerModal?.classList.remove('active'));

  btnAddPrayer?.addEventListener('click', () => {
    addPrayerIntention();
  });

  prayerNameInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addPrayerIntention();
    }
  });

  // Close modals clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.remove('active');
      if (AppState.pitchpipeActiveOscillator) togglePitchpipeTone();
    }
    if (e.target === bibleModal) bibleModal.classList.remove('active');
    if (e.target === calendarModal) calendarModal.classList.remove('active');
    if (e.target === prayerModal) prayerModal.classList.remove('active');
  });

  // Settings Buttons Actions
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      saveSetting('theme', btn.getAttribute('data-theme'));
    });
  });

  document.querySelectorAll('.fontsize-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      saveSetting('fontSize', btn.getAttribute('data-size'));
    });
  });

  document.querySelectorAll('.typography-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      saveSetting('activeTypography', btn.getAttribute('data-style'));
      renderLiturgyFlow();
      loadActiveReadingText();
    });
  });

  // Override pill toggle handlers
  document.getElementById('override-feast')?.addEventListener('click', () => {
    saveSetting('useFeast', !AppState.useFeast);
    updateReadingsForCurrentDate();
  });

  document.getElementById('override-lff')?.addEventListener('click', () => {
    saveSetting('useLff', !AppState.useLff);
    updateReadingsForCurrentDate();
  });

  document.getElementById('override-rcl')?.addEventListener('click', () => {
    if (AppState.currentDate.getDay() !== 0) return; // Only toggle on Sundays
    saveSetting('useRcl', !AppState.useRcl);
    updateReadingsForCurrentDate();
  });

  document.getElementById('setting-bible-version').addEventListener('change', (e) => {
    saveSetting('bibleVersion', e.target.value);
    
    // Reload reading pane if active
    if (AppState.currentAppointedReadings) {
      loadActiveReadingText();
    }
  });

  // Bible search button action
  const searchInput = document.getElementById('bible-search-input');
  const searchBtn = document.getElementById('btn-bible-search');
  
  const performLookup = async () => {
    const query = searchInput.value.trim();
    if (!query) return;

    const welcome = document.getElementById('bible-modal-welcome-text');
    const loading = document.getElementById('bible-modal-loading-placeholder');
    const resultBox = document.getElementById('bible-modal-result-content');

    welcome.style.display = 'none';
    loading.style.display = 'flex';
    resultBox.innerHTML = '';

    try {
      const data = await fetchScripture(query, AppState.bibleVersion);
      loading.style.display = 'none';
      resultBox.innerHTML = `
        <h2 class="bible-passage-heading" style="font-family: var(--font-heading); color: var(--accent-color); margin-top: 0; margin-bottom: 1.25rem; font-size: 1.5rem; font-weight: 600; text-align: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
          ${data.reference}
        </h2>
        <div class="bibletext">
          ${data.textHtml}
        </div>
        <span class="scripture-source-credit" style="display: block; margin-top: 1.25rem; font-size: 0.8rem; opacity: 0.7; font-style: italic; text-align: right;">Source: ${data.source}</span>
      `;
    } catch (e) {
      loading.style.display = 'none';
      resultBox.innerHTML = `
        <div class="scripture-error">
          <span>Failed to fetch passage. Please check the spelling or connection.</span>
        </div>
      `;
    }
  };

  searchBtn.addEventListener('click', performLookup);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performLookup();
  });
}

// Global hook so that clicking inline scripture references in Noonday or Compline can trigger the modal automatically
window.LookupScriptureDirect = (ref) => {
  const bibleModal = document.getElementById('bible-modal-overlay');
  if (!bibleModal) return;

  bibleModal.classList.add('active');
  const searchInput = document.getElementById('bible-search-input');
  if (searchInput) {
    searchInput.value = ref;
    // Trigger lookup directly
    document.getElementById('btn-bible-search')?.click();
  }
};

// ==========================================================================
// NEW ENHANCEMENTS: PRIVATE PRAYER & HABIT ENGINE
// ==========================================================================

// --- Prayer List Functions ---
// ==========================================
// SIMPLIFIED LOCAL PRIVATE PRAYERS STORAGE
// ==========================================
function loadPrayers() {
  try {
    const data = localStorage.getItem('prayers') || localStorage.getItem('prayers_Default');
    AppState.prayerList = data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to load prayers", e);
    AppState.prayerList = [];
  }
}

function savePrayers() {
  try {
    localStorage.setItem('prayers', JSON.stringify(AppState.prayerList));
  } catch (e) {
    console.error("Failed to save prayers", e);
  }
}

function addPrayerIntention() {
  const nameInput = document.getElementById('prayer-name-input');
  const categorySelect = document.getElementById('prayer-category-select');
  if (!nameInput || !categorySelect) return;
  
  const name = nameInput.value.trim();
  const category = categorySelect.value;
  if (!name) return;
  
  const newIntention = {
    id: '_' + Math.random().toString(36).substr(2, 9),
    name: name,
    category: category,
    isActive: true
  };
  
  AppState.prayerList.push(newIntention);
  savePrayers();
  renderPrayerList();
  renderLiturgyFlow(); // update embedded cards in liturgy
  
  nameInput.value = '';
  nameInput.focus();
}

function renderPrayerList() {
  const box = document.getElementById('prayer-list-box');
  if (!box) return;
  
  if (AppState.prayerList.length === 0) {
    box.innerHTML = `<div class="prayer-empty-state">No active intercessions. Add names or concerns above to remember them in your daily prayers.</div>`;
    return;
  }
  
  const categoryLabels = {
    sick: 'For the Sick / Suffering',
    departed: 'For the Departed',
    thanks: 'Thanksgiving',
    general: 'Intention'
  };
  
  box.innerHTML = AppState.prayerList.map(item => `
    <div class="prayer-item">
      <div class="prayer-item-left">
        <span class="prayer-item-name">${escapeHtml(item.name)}</span>
        <span class="prayer-item-category">${categoryLabels[item.category] || item.category}</span>
      </div>
      <button class="btn-delete-prayer" onclick="window.DeletePrayerDirect('${item.id}')" title="Delete intention" aria-label="Delete intention">✕</button>
    </div>
  `).join('');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

window.DeletePrayerDirect = (id) => {
  AppState.prayerList = AppState.prayerList.filter(item => item.id !== id);
  savePrayers();
  renderPrayerList();
  renderLiturgyFlow(); // re-render intercessions card
};

function getPersonalIntercessionsCardHtml() {
  if (AppState.prayerList.length === 0) return '';
  
  const categories = { sick: [], departed: [], thanks: [], general: [] };
  AppState.prayerList.forEach(item => {
    if (categories[item.category]) categories[item.category].push(item.name);
  });
  
  let html = `<div class="personal-intercessions-card">
    <h4>Personal Intercessions & Thanksgivings</h4>
    <ul>`;
  
  if (categories.sick.length > 0) {
    html += `<li><strong>For the Sick / Suffering:</strong> ${categories.sick.map(escapeHtml).join(', ')}</li>`;
  }
  if (categories.departed.length > 0) {
    html += `<li><strong>For the Departed:</strong> ${categories.departed.map(escapeHtml).join(', ')}</li>`;
  }
  if (categories.thanks.length > 0) {
    html += `<li><strong>Thanksgivings:</strong> ${categories.thanks.map(escapeHtml).join(', ')}</li>`;
  }
  if (categories.general.length > 0) {
    html += `<li><strong>Intentions:</strong> ${categories.general.map(escapeHtml).join(', ')}</li>`;
  }
  
  html += `</ul></div>`;
  return html;
}

// --- Habit Tracker Functions ---
function loadHabits() {
  try {
    const data = localStorage.getItem('habitLogs');
    AppState.habitLogs = data ? JSON.parse(data) : {};
  } catch (e) {
    console.error("Failed to load habits", e);
    AppState.habitLogs = {};
  }
}

function saveHabits() {
  try {
    localStorage.setItem('habitLogs', JSON.stringify(AppState.habitLogs));
  } catch (e) {
    console.error("Failed to save habits", e);
  }
}

window.MarkOfficeCompleted = (office) => {
  const year = AppState.currentDate.getFullYear();
  const month = String(AppState.currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(AppState.currentDate.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;
  
  if (!AppState.habitLogs[dateStr]) {
    AppState.habitLogs[dateStr] = [];
  }
  
  if (!AppState.habitLogs[dateStr].includes(office)) {
    AppState.habitLogs[dateStr].push(office);
    saveHabits();
    
    // Refresh UI
    renderLiturgyFlow();
    updateStreakBadge();
    
    // Also re-render calendar grid if calViewYear/calViewMonth are defined
    if (typeof calViewYear !== 'undefined' && typeof calViewMonth !== 'undefined') {
      renderCalendarGrid(calViewYear, calViewMonth);
    }
  }
};

function getStreak() {
  let streak = 0;
  const checkDate = new Date();
  checkDate.setHours(0, 0, 0, 0);
  
  const formatDateKey = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${dd}`;
  };
  
  let todayKey = formatDateKey(checkDate);
  let hasToday = AppState.habitLogs[todayKey] && AppState.habitLogs[todayKey].length > 0;
  
  // If no completions today, check yesterday to see if streak is still active
  if (!hasToday) {
    checkDate.setDate(checkDate.getDate() - 1);
    let yesterdayKey = formatDateKey(checkDate);
    let hasYesterday = AppState.habitLogs[yesterdayKey] && AppState.habitLogs[yesterdayKey].length > 0;
    if (!hasYesterday) return 0; // Streak broken
  } else {
    // If today is completed, start counting from today
    streak = 1;
    checkDate.setDate(checkDate.getDate() - 1);
  }
  
  // Count backwards
  while (true) {
    let key = formatDateKey(checkDate);
    if (AppState.habitLogs[key] && AppState.habitLogs[key].length > 0) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

function updateStreakBadge() {
  const badge = document.getElementById('calendar-streak-badge');
  if (!badge) return;
  
  const streak = getStreak();
  if (streak > 0) {
    badge.textContent = `🔥 ${streak}-Day Prayer Streak`;
    badge.style.display = 'inline-flex';
  } else {
    badge.style.display = 'none';
  }
}

function renderHabitCheckInHtml(office) {
  const year = AppState.currentDate.getFullYear();
  const month = String(AppState.currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(AppState.currentDate.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;
  
  const isCompleted = AppState.habitLogs[dateStr] && AppState.habitLogs[dateStr].includes(office);
  const officeTitles = {
    morning: 'Morning Prayer',
    noonday: 'Noonday Prayer',
    evening: 'Evening Prayer',
    compline: 'Compline'
  };
  
  const title = officeTitles[office] || office;
  
  if (isCompleted) {
    return `
      <div class="habit-completion-card">
        <h4>${title} Completed</h4>
        <p>Your spiritual discipline is logged for today. Well done!</p>
        <button class="btn-habit-complete completed">✓ Completed</button>
      </div>
    `;
  } else {
    return `
      <div class="habit-completion-card">
        <h4>Complete Your Office</h4>
        <p>Keep your daily prayer rule active by logging this office.</p>
        <button class="btn-habit-complete" onclick="window.MarkOfficeCompleted('${office}')">✓ Mark Completed</button>
      </div>
    `;
  }
}


// ==========================================
// CHORAL PITCHPIPE ENGINE (WEB AUDIO API)
// ==========================================
function togglePitchpipeTone() {
  if (AppState.pitchpipeActiveOscillator) {
    try {
      AppState.pitchpipeActiveOscillator.stop();
      AppState.pitchpipeActiveOscillator.disconnect();
    } catch (e) {
      console.warn("Failed to stop pitchpipe oscillator cleanly", e);
    }
    AppState.pitchpipeActiveOscillator = null;
    
    const playBtnText = document.getElementById('pitchpipe-play-text');
    const playBtnIcon = document.getElementById('pitchpipe-play-icon');
    if (playBtnText) playBtnText.textContent = "Play Tone";
    if (playBtnIcon) playBtnIcon.textContent = "▶";
    
    document.getElementById('btn-pitchpipe-play')?.classList.remove('playing');
    return;
  }
  
  try {
    if (!AppState.pitchpipeAudioCtx) {
      AppState.pitchpipeAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    if (AppState.pitchpipeAudioCtx.state === 'suspended') {
      AppState.pitchpipeAudioCtx.resume();
    }
    
    const ctx = AppState.pitchpipeAudioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(AppState.pitchpipeFreq, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    AppState.pitchpipeActiveOscillator = osc;
    
    const playBtnText = document.getElementById('pitchpipe-play-text');
    const playBtnIcon = document.getElementById('pitchpipe-play-icon');
    if (playBtnText) playBtnText.textContent = "Stop Tone";
    if (playBtnIcon) playBtnIcon.textContent = "■";
    
    document.getElementById('btn-pitchpipe-play')?.classList.add('playing');
  } catch (err) {
    console.error("Web Audio API not supported or blocked", err);
    alert("Could not start pitchpipe tone. Please check your browser audio settings.");
  }
}

function updatePitchpipeFrequency(freq, note) {
  AppState.pitchpipeFreq = freq;
  AppState.pitchpipeNote = note;
  
  const indicator = document.getElementById('pitchpipe-active-note');
  if (indicator) {
    indicator.textContent = `${note} (${Math.round(freq)} Hz)`;
  }

  // Update Gregorian stave note position
  const staveNote = document.getElementById('pitchpipe-stave-note');
  if (staveNote) {
    let yPos = 21; // G3 default
    if (note === 'F3') yPos = 26;
    else if (note === 'G3') yPos = 21;
    else if (note === 'A3') yPos = 16;
    else if (note === 'Bb3') yPos = 11;
    else if (note === 'C4') yPos = 6;
    staveNote.setAttribute('y', yPos);
  }
  
  if (AppState.pitchpipeActiveOscillator && AppState.pitchpipeAudioCtx) {
    const ctx = AppState.pitchpipeAudioCtx;
    AppState.pitchpipeActiveOscillator.frequency.setValueAtTime(freq, ctx.currentTime);
  }
  
  document.querySelectorAll('.pitch-btn').forEach(btn => {
    const btnNote = btn.getAttribute('data-note');
    btn.classList.toggle('active', btnNote === note);
  });
}

function setupPitchpipeBindings() {
  const playBtn = document.getElementById('btn-pitchpipe-play');
  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      togglePitchpipeTone();
    });
  }
  
  document.querySelectorAll('.pitch-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const freq = parseFloat(btn.getAttribute('data-freq'));
      const note = btn.getAttribute('data-note');
      updatePitchpipeFrequency(freq, note);
    });
  });
  
  // Set initial active state in UI and stave
  updatePitchpipeFrequency(AppState.pitchpipeFreq, AppState.pitchpipeNote);
}

// ==========================================
// APP INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Load LocalStorage Settings
  loadSettings();
  
  // 2. Setup displaying dates
  updateAppForDate(AppState.currentDate);

  // Bind Date Navigation Events
  document.getElementById('btn-prev-day')?.addEventListener('click', () => {
    const d = new Date(AppState.currentDate);
    d.setDate(d.getDate() - 1);
    updateAppForDate(d);
  });

  document.getElementById('btn-next-day')?.addEventListener('click', () => {
    const d = new Date(AppState.currentDate);
    d.setDate(d.getDate() + 1);
    updateAppForDate(d);
  });

  document.getElementById('btn-today')?.addEventListener('click', () => {
    updateAppForDate(new Date());
  });

  // Open calendar modal when clicking date header
  document.getElementById('btn-open-calendar')?.addEventListener('click', () => {
    openCalendarModal();
  });
  
  // 3. Choose dynamic default office tab (Morning/Evening/Noonday/Compline) based on time
  selectDefaultOffice();

  // 4. Register event listeners for tabs
  document.querySelectorAll('#liturgy-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const office = btn.getAttribute('data-office');
      AppState.activeOffice = office;
      
      document.querySelectorAll('#liturgy-tabs .tab-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-office') === office);
      });

      // Visibility of Rite selector
      const riteContainer = document.getElementById('rite-selector-container');
      if (riteContainer) {
        riteContainer.style.visibility = (office === 'noonday' || office === 'compline') ? 'hidden' : 'visible';
      }

      // Sync active readings tab and database
      syncCurrentOfficeAppointedReadings();
    });
  });

  // Rite selector buttons
  document.querySelectorAll('.rite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rite = btn.getAttribute('data-rite');
      saveSetting('activeRite', rite);
      renderLiturgyFlow();
    });
  });

  // Podcast show selectors (Morning vs Evening side)
  document.querySelectorAll('.show-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const show = btn.getAttribute('data-show');
      AppState.activeShow = show;
      
      document.querySelectorAll('.show-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-show') === show);
      });

      // Reset search on tab change
      const searchInput = document.getElementById('podcast-search-input');
      const clearBtn = document.getElementById('podcast-search-clear-btn');
      if (searchInput && clearBtn) {
        searchInput.value = '';
        AppState.podcastSearchQuery = '';
        clearBtn.style.display = 'none';
      }

      loadPodcastSection();
    });
  });

  // 5. Initialize Modals and Audio engine
  setupModalBindings();
  setupAudioPlayerBindings();
  setupPodcastSearchBindings();
  setupCalendarSearch();
  setupCalendarNavButtons();
  setupPitchpipeBindings();

  // Mobile Nav tab event listeners
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pane = btn.getAttribute('data-pane');
      switchMobilePane(pane);
    });
  });

  // 6. Perform initial content rendering
  syncCurrentOfficeAppointedReadings(); // renders liturgy
  preloadPodcastFeeds(); // loads podcasts in the background
});
