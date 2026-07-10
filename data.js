const GAME_DATA = {
  stations: ["tatzpit","shomera","beitbad","gat","goren","bor"],
  creatures: {
    tatzpit:{emoji:"🌬️", he:{name:"אווירון", place:"התצפית", role:"שומר אוויר ההרים", contribution:"אוויר הרים צלול כיין"}, fr:{name:"Aviron", place:"le point de vue", role:"gardien de l’air des montagnes", contribution:"l’air pur des montagnes"}, image:"assets/characters/aviron.png", color:"#4bb7d2"},
    shomera:{emoji:"🛖", he:{name:"שומרון", place:"השומרה", role:"שומר האש והמעשנה", contribution:"טמפרטורת בישול מושלמת"}, fr:{name:"Shomeron", place:"la tour de garde", role:"gardien du feu et du fumoir", contribution:"la température parfaite"}, image:"assets/characters/shomeron.png", color:"#b88649"},
    beitbad:{emoji:"🫒", he:{name:"זייתון", place:"בית הבד", role:"שומר שמן הזית", contribution:"שמן הזית"}, fr:{name:"Zeiton", place:"le pressoir à olives", role:"gardien de l’huile d’olive", contribution:"l’huile d’olive"}, image:"assets/characters/zeiton.png", color:"#7fa13d"},
    gat:{emoji:"🍇", he:{name:"גתון", place:"הגת", role:"שומר היין", contribution:"היין לשתייה"}, fr:{name:"Gaton", place:"le pressoir à vin", role:"gardien du vin", contribution:"le vin"}, image:"assets/characters/gaton.png", color:"#7a44a0"},
    goren:{emoji:"🌾", he:{name:"דישון", place:"הגורן", role:"שומר החיטה", contribution:"הקמח ללחם"}, fr:{name:"Dishon", place:"l’aire de battage", role:"gardien du blé", contribution:"la farine du pain"}, image:"assets/characters/dishon.png", color:"#d99b24"},
    bor:{emoji:"💧", he:{name:"בורי", place:"בור המים", role:"שומר המים", contribution:"מי הגשמים"}, fr:{name:"Bori", place:"la citerne", role:"gardien de l’eau", contribution:"l’eau"}, image:"assets/characters/bori.png", color:"#4aaed1"}
  },
  ui: {
    he:{
      title:"שומרי התבלין", subtitle:"היצורים מחכים...", start:"התחילו במסע", lang:"שפה", storyTitle:"אוי לא...", story:["יצורי הגן נעלמו.","בלי יצורי הגן אי אפשר להשלים את התבלין הסודי.","ובלי התבלין הסודי...","אי אפשר להגיש את ארוחת הצהריים."], next:"המשך", rulesTitle:"חוקי המשחק", rules:["הסתובבו בגן.","מצאו תחנה.","סרקו את ה־QR.","ענו על השאלות ותתפסו יצורים.","טעיתם? תוכלו לנסות שוב.","אספו את כל היצורים לפני ארוחת הצהריים.","אולי גם תזכו בבונוס סודי..."], nameTitle:"בחרו שם למסע", namePlaceholder:"שם למסע", begin:"צאו לדרך", map:"מפת ההתקדמות", creatures:"יצורים", stars:"כוכבים", bonuses:"בונוסים", time:"זמן", nextHideout:"מקום המסתור הבא", scanHint:"סרקו את קוד ה־QR בתחנה שאליה הוביל אתכם הרמז.", wrongStationTitle:"נראה שהגעתם למקום של שומר אחר...", wrongStationText:"חזרו לרמז האחרון וחפשו את מקום המסתור הבא.", alreadyTitle:"כבר מטייל איתכם", alreadyText:"אין צורך לאסוף אותו שוב. המשיכו למצוא את חבריו.", found:"מצאתם את מקום המסתור של", patient:"אפשר לחכות בסבלנות. הרבה סבלנות...", answerQuestions:"לענות על השאלות", wait:"נחכה בסבלנות...", waitResult:"נראה שהוא לא יוצא לבד. תצטרכו לענות על השאלות.", tryAgain:"ניסיון נוסף", correct:"נכון", continue:"המשך", captured:"הצטרף לאוסף שלכם!", backMap:"חזרה למפה", bonusTitle:"⭐ בונוס סודי!", bonusText:"הגעתם בדיוק לאחד מזמני התבלין הסודיים. אל תשאלו איך. השומרים לא מגלים.", endTitle:"כל הכבוד!", endLines:["הצלחתם לאסוף את כל שומרי התבלין.","התבלין הסודי הושלם.","אפשר להגיש את ארוחת הצהריים."], screenshot:"צלמו מסך ושלחו בקבוצה.", thanks:"תודה שביקרתם בגן התנ״כי ביד השמונה.", reset:"איפוס משחק", chooseLang:"בחרו שפה"},
    fr:{
      title:"Les Gardiens des Épices", subtitle:"Les créatures vous attendent...", start:"Commencer l’aventure", lang:"Langue", storyTitle:"Oh non...", story:["Les créatures du jardin ont disparu.","Sans elles, impossible de compléter l’épice secrète.","Et sans l’épice secrète...","impossible de servir le déjeuner."], next:"Continuer", rulesTitle:"Règles du jeu", rules:["Promenez-vous dans le jardin.","Trouvez une station.","Scannez le QR code.","Répondez aux questions et collectez les créatures.","Une erreur ? Vous pouvez réessayer.","Collectez toutes les créatures avant le déjeuner.","Peut-être découvrirez-vous aussi un bonus secret..."], nameTitle:"Choisissez un nom pour l’aventure", namePlaceholder:"Nom de l’aventure", begin:"C’est parti", map:"Carte de progression", creatures:"Créatures", stars:"Étoiles", bonuses:"Bonus", time:"Temps", nextHideout:"Prochaine cachette", scanHint:"Scannez le QR code à la station indiquée par l’indice.", wrongStationTitle:"On dirait que vous êtes chez un autre gardien...", wrongStationText:"Revenez au dernier indice et cherchez la prochaine cachette.", alreadyTitle:"vous accompagne déjà", alreadyText:"Inutile de le collecter à nouveau. Continuez à chercher ses amis.", found:"Vous avez trouvé la cachette de", patient:"Vous pouvez attendre patiemment. Très patiemment...", answerQuestions:"Répondre aux questions", wait:"Attendons un peu...", waitResult:"Il ne sortira pas tout seul. Il faudra répondre aux questions.", tryAgain:"Réessayer", correct:"Correct", continue:"Continuer", captured:"a rejoint votre collection !", backMap:"Retour à la carte", bonusTitle:"⭐ Bonus secret !", bonusText:"Vous êtes tombés exactement sur l’un des temps secrets de l’épice. Ne demandez pas comment. Les gardiens ne disent rien.", endTitle:"Bravo !", endLines:["Vous avez collecté tous les Gardiens des Épices.","L’épice secrète est complète.","Le déjeuner peut être servi."], screenshot:"Faites une capture d’écran et envoyez-la au groupe.", thanks:"Merci d’avoir visité le Jardin biblique de Yad HaShmona.", reset:"Réinitialiser", chooseLang:"Choisissez une langue"}
  },
  hints:{
    he:{tatzpit:"חפשו את המקום שבו הנוף והאוויר מוסיפים את המרכיב שאי אפשר להחזיק ביד.", shomera:"חפשו את המקום שממנו אפשר להשגיח על הכרם והמטע.", beitbad:"חפשו את המקום שבו הפכו זיתים לשמן.", gat:"חפשו את המקום שבו הענבים הפכו לתירוש וליין.", goren:"חפשו את המקום שבו הרוח עזרה להפריד בין גרעין למוץ.", bor:"חפשו את המקום שבו שמרו כל טיפת גשם לעונה היבשה."},
    fr:{tatzpit:"Cherchez l’endroit où le paysage et l’air apportent l’ingrédient qu’on ne peut pas tenir dans la main.", shomera:"Cherchez l’endroit d’où l’on surveillait la vigne et le verger.", beitbad:"Cherchez l’endroit où les olives devenaient de l’huile.", gat:"Cherchez l’endroit où les raisins devenaient du moût et du vin.", goren:"Cherchez l’endroit où le vent aidait à séparer le grain de la balle.", bor:"Cherchez l’endroit où l’on gardait chaque goutte de pluie pour la saison sèche."}
  }
};
const QUESTIONS = {
  he:{
    gat:[
      {text:"כיצד היה נהוג לדרוך את הענבים בגת?",answers:[{text:"עם סנדלים כדי לתת ארומה של אדמה",correct:false,feedback:"🍇 ארומה של סנדל היא לא בדיוק תו יין מבוקש..."},{text:"עם סנדלים כדי לרסק גם את החרצנים",correct:false,feedback:"🍇 דווקא את החרצנים השתדלו שלא לשבור, כדי לא להוסיף מרירות ליין."},{text:"יחפים, כדי למעוך את הענבים בלי לשבור את החרצנים",correct:true,feedback:""},{text:"היו משכיבים אדם בגת ודורכים עליו",correct:false,feedback:"🍇 אם כך היו מייצרים יין, כנראה שלא היה נשאר מי שישתה אותו..."}],explanation:"דריכה יחפה אפשרה למעוך את הענבים בלי לרסק את החרצנים, שעלולים להוסיף מרירות."},
      {text:"לאחר הדריכה, לאן זרם מיץ הענבים?",answers:[{text:"לבאר מים כדי לקרר אותו",correct:false,feedback:"🍇 באר מים נועדה למים, לא לתירוש."},{text:"לכלי חרס שהוטמן באדמה",correct:false,feedback:"🍇 כלי חרס יכולים לשמש לאחסון, אבל קודם התירוש צריך לזרום אל בור האיגום."},{text:"דרך תעלה אל בור איגום",correct:true,feedback:""},{text:"אל בית הבד",correct:false,feedback:"🍇 בית הבד שייך לזיתים. גתון מבקש סדר."}],explanation:"התירוש זרם ממשטח הדריכה דרך תעלה אל בור איגום, ושם נאסף להמשך התהליך."},
      {text:"למה ייצרו יין כמעט בכל כפר?",answers:[{text:"כי לא ידעו לשתות מים",correct:false,feedback:"🍇 הם בהחלט ידעו לשתות מים. יין היה חלק חשוב מהתרבות, הטקסים והמסחר."},{text:"כי היין היה זול יותר ממים",correct:false,feedback:"🍇 יין דרש כרמים, בציר, דריכה ותסיסה. זול יותר זה לא הסיפור."},{text:"כי היין היה משקה בסיסי, טקסי ומסחרי",correct:true,feedback:""},{text:"כי התורה אסרה לשתות מים בחגים",correct:false,feedback:"🍇 התורה לא אסרה לשתות מים בחגים."}],explanation:"יין היה חלק מחיי היום־יום, מטקסים, מארוחות וממסחר."},
      {text:"כמה ענבים בערך נדרשים להפקת ליטר יין?",answers:[{text:"שני ענבים",correct:false,feedback:"🍇 רגע... איך בדיוק משני ענבים ייצא ליטר יין?"},{text:"בערך קילוגרם וחצי",correct:true,feedback:""},{text:"עשרים קילוגרם",correct:false,feedback:"🍇 עשרים קילו? זה כבר נשמע כמו יין שמתבייש לצאת."},{text:"אשכול אחד בדיוק",correct:false,feedback:"🍇 גם אשכול אחד לא יספיק לליטר יין."}],explanation:"ליטר יין דורש בדרך כלל בערך קילוגרם וחצי ענבים, תלוי בזן ובתהליך."}
    ],
    shomera:[
      {text:"מה הייתה המטרה העיקרית של השומרה?",answers:[{text:"מגורים קבועים של משפחה חקלאית",correct:false,feedback:"🛖 משפחה שלמה? קצת צפוף שם..."},{text:"מקום לאחסון תבואה במשך כל השנה",correct:false,feedback:"🌾 לאחסון תבואה היו מחסנים ואסמים. השומרה נועדה לשמירה בשטח."},{text:"נקודת תצפית ומגורים זמניים לשמירה על הכרם או המטע",correct:true,feedback:""},{text:"בסיס צבאי של הצבא הרומי",correct:false,feedback:"🏛️ אם הרומאים היו בונים כאן בסיס, הוא היה נראה קצת יותר גדול..."}],explanation:"השומרה שימשה את החקלאי בעונת היבול לתצפית, שמירה ולינה זמנית."},
      {text:"מדוע השומרה נבנתה בדרך כלל במקום גבוה?",answers:[{text:"כדי להיות קרובה יותר לעננים",correct:false,feedback:"🛖 עננים זה יפה, אבל השומרה צריכה לראות את השטח."},{text:"כדי להתרחק מחרקים",correct:false,feedback:"🛖 חרקים יש גם למעלה, לצערנו."},{text:"כדי לראות למרחק ולהשגיח על השטח",correct:true,feedback:""},{text:"כדי שהרוח תייבש את הענבים",correct:false,feedback:"🛖 מה פתאום ענבים? הרוח כאן עסוקה בלייבש את הכביסה."}],explanation:"מקום גבוה איפשר תצפית טובה והגנה על היבול."},
      {text:"מי היה האויב הגדול של החקלאי בזמן הבציר?",answers:[{text:"רק חיילים זרים",correct:false,feedback:"🛖 חיילים זרים הם לא הבעיה היומיומית בכרם."},{text:"רק חיות בר",correct:false,feedback:"🛖 חיות בר זה כיוון טוב, אבל זו לא הסיבה היחידה שבנו שומרה."},{text:"גנבים וגם בעלי חיים שחיפשו מזון",correct:true,feedback:""},{text:"דבורים ששתו את מיץ הענבים",correct:false,feedback:"🐝 גם אם הדבורים אוהבות מתוק, הן לא הסיבה שבנו שומרה."}],explanation:"החקלאי שמר על היבול גם מגנבים וגם מבעלי חיים."},
      {text:"איזה ביטוי מקראי מתאר מקום שמירה בכרם?",answers:[{text:"עיר בצורה",correct:false,feedback:"🏰 עיר בצורה נועדה להגן על עיר שלמה, לא על כרם קטן."},{text:"ארמון המלך",correct:false,feedback:"👑 ארמון המלך קצת מפואר מדי בשביל שומרה..."},{text:"סוכה בכרם",correct:true,feedback:""},{text:"בית היין",correct:false,feedback:"🍇 בית היין שייך לגתון. שומרון שומר על הכרם, לא על היין."}],explanation:"הביטוי 'סוכה בכרם' מתאים למבנה שמירה זמני בשטח חקלאי."}
    ],
    goren:[
      {text:"מה עשו בגורן?",answers:[{text:"ייצרו יין",correct:false,feedback:"🌾 יין? זה נשמע כמו העבודה של גתון."},{text:"הפרידו את גרעיני הדגן מהמוץ",correct:true,feedback:""},{text:"כבשו זיתים לשמן",correct:false,feedback:"🌾 זיתים בבית הבד, לא כאן."},{text:"חצבו קברים",correct:false,feedback:"🌾 קברים? זה כבר סיור אחר לגמרי."}],explanation:"בגורן הפרידו את גרעיני הדגן מן המוץ והקש."},
      {text:"למה הגורן צריכה להיות במקום פתוח וחשוף לרוח?",answers:[{text:"כדי שהרוח תעיף את המוץ הקל ותשאיר את הגרעינים",correct:true,feedback:""},{text:"כדי שהחיטה תתבשל בשמש",correct:false,feedback:"🌾 חיטה לא מתבשלת בשמש. היא צריכה דיש, זרייה וטחינה."},{text:"כדי שהעובדים לא יירדמו",correct:false,feedback:"🌾 אם העובדים נרדמו, זו כבר בעיית ניהול."},{text:"כדי לקרוא לעופות לבוא לאכול",correct:false,feedback:"🌾 עופות אולי היו שמחים, אבל החקלאים פחות."}],explanation:"בזרייה הרוח מעיפה את המוץ הקל, והגרעינים הכבדים נשארים קרובים."},
      {text:"מהו דיש?",answers:[{text:"דריכת ענבים ברגליים",correct:false,feedback:"🌾 דריכת ענבים שייכת לגת. דישון נשאר עם הדגן."},{text:"ריסוק זיתים באבן",correct:false,feedback:"🌾 זיתים בבית הבד, לא כאן."},{text:"הפרדת הגרעינים מהשיבולים באמצעות דריכה או מורג",correct:true,feedback:""},{text:"טבילה במקווה",correct:false,feedback:"🌾 מקווה זו ליגה אחרת של קדושה."}],explanation:"דיש הוא פעולת הפרדת הגרעינים מן השיבולים, לעיתים בעזרת מורג או דריכה."},
      {text:"מהו מוץ?",answers:[{text:"גרעין החיטה הטוב",correct:false,feedback:"🌾 דווקא את הגרעין רצו לשמור."},{text:"החלקים הקלים והיבשים שנפרדים מהדגן",correct:true,feedback:""},{text:"שם קדום ללחם",correct:false,feedback:"🍞 אם זה היה שם קדום ללחם, כנראה שהאופים היו מתבלבלים..."},{text:"תבלין חריף מתקופת המקרא",correct:false,feedback:"🌶️ מוץ אולי עף ברוח, אבל חריף הוא ממש לא."}],explanation:"המוץ הוא החלק הקל והיבש שמופרד מן הדגן בתהליך העיבוד."}
    ],
    bor:[
      {text:"למה בורות מים היו חשובים במיוחד בהרי יהודה?",answers:[{text:"כי כל יישוב היה על שפת אגם",correct:false,feedback:"💧 אגם ליד כל יישוב? זה היה מקל על כולם, אבל לא."},{text:"כי באזור ההר אין תמיד מעיינות זמינים בכל מקום",correct:true,feedback:""},{text:"כי אסור היה לשתות ממעיינות",correct:false,feedback:"💧 דווקא מעיינות היו מקור מים מצוין כשאפשר היה להגיע אליהם."},{text:"כי מים עתיקים טעימים יותר",correct:false,feedback:"💧 מים מיושנים אולי מתאימים ליין... לא לשתייה."}],explanation:"באזור ההר לא בכל מקום יש מעיין זמין, ולכן אגירת מי גשמים הייתה חיונית."},
      {text:"מה מונע מהמים לחלחל החוצה מן הבור?",answers:[{text:"טיח אטום על הדפנות",correct:true,feedback:""},{text:"שכבת צמר כבשים",correct:false,feedback:"🐑 צמר אולי מחמם בחורף, אבל הוא לא אוטם בור מים."},{text:"מלח גס בתחתית",correct:false,feedback:"🧂 מלח לא אוטם בורות מים, והוא גם היה מקלקל את המים."},{text:"שומרים שעמדו וסגרו חורים עם האצבע",correct:false,feedback:"💧 שומר עם אצבע בבור? זו עבודה לכל החיים..."}],explanation:"בורות מים טויחו כדי למנוע חלחול של המים אל הסלע."},
      {text:"איזה מים נאספו בדרך כלל בבור?",answers:[{text:"מי ים",correct:false,feedback:"🌊 מי ים בבור מים? זה היה הופך כל כוס תה לאתגר..."},{text:"מי מעיינות",correct:false,feedback:"💧 מעיינות הם מקור מים מצוין, אבל בור מים נועד בעיקר לאסוף מי גשמים."},{text:"מי נהר",correct:false,feedback:"🏞️ בהרי יהודה אין נהרות שאפשר למלא מהם בורות מים."},{text:"מי גשמים",correct:true,feedback:""}],explanation:"בור המים נועד לאסוף מי גשמים ונגר עילי בעונה הרטובה."},
      {text:"מה אפשר ללמוד מבור מים על החיים בעת העתיקה?",answers:[{text:"שלא היה צורך לתכנן מראש",correct:false,feedback:"💧 דווקא להפך. בור מים הוא הוכחה לכמה חשוב היה לחשוב חודשים קדימה."},{text:"שהגשם ירד כל השנה",correct:false,feedback:"🌧️ הלוואי... אם כך, לא היה צריך להשקיע בבניית בורות מים."},{text:"שהמים היו משאב יקר שדרש תכנון ואגירה",correct:true,feedback:""},{text:"שכל משפחה שתתה רק יין",correct:false,feedback:"🍷 יין היה חשוב, אבל כשצמאים באמת... מים מנצחים."}],explanation:"בור מים מלמד שמים היו משאב יקר, ושחיים בהר דרשו תכנון ואגירה."}
    ],
    beitbad:[
      {text:"מה הפיקו בבית הבד?",answers:[{text:"קמח",correct:false,feedback:"🫒 קמח שייך לדישון ולגורן. זייתון עובד עם זיתים."},{text:"דבש",correct:false,feedback:"🫒 דבש זה טעים, אבל בבית הבד לא רדו דבש."},{text:"שמן זית",correct:true,feedback:""},{text:"יין",correct:false,feedback:"🫒 יין? גתון כבר מטפל בזה."}],explanation:"בבית הבד ריסקו וסחטו זיתים כדי להפיק שמן."},
      {text:"מה קרה לזיתים אחרי שרוסקו?",answers:[{text:"בישלו אותם בסיר גדול",correct:false,feedback:"🫒 זיתים לא הפכו לשמן בגלל מרק טוב."},{text:"ייבשו אותם בשמש",correct:false,feedback:"🫒 שמש יש בשפע, אבל כאן צריך לחץ."},{text:"הכניסו את העיסה לעקלים ולחצו עליה כדי להפיק שמן",correct:true,feedback:""},{text:"ערבבו אותם עם מים כדי להפיק שמן מהר יותר",correct:false,feedback:"🫒 מים לא מקצרים דרך לשמן טוב."}],explanation:"את עיסת הזיתים הכניסו לעקלים ולחצו עליה כדי להוציא את השמן."},
      {text:"למה שימש שמן הזית בעת העתיקה?",answers:[{text:"רק לבישול",correct:false,feedback:"🫒 רק לבישול? שמן הזית היה הרבה יותר עסוק מזה."},{text:"רק להדלקת מנורות",correct:false,feedback:"🫒 אור זה חשוב, אבל שמן הזית עשה עוד כמה עבודות."},{text:"למאכל, להדלקה, לרפואה, למשיחה ולפולחן",correct:true,feedback:""},{text:"בעיקר לצביעת בגדים",correct:false,feedback:"🫒 בגדים זה נחמד, אבל זה לא היה עיקר הסיפור של שמן הזית."}],explanation:"שמן הזית היה חומר מרכזי למאכל, אור, רפואה, פולחן ומשיחה."},
      {text:"מדוע נחשב עץ הזית לעץ מיוחד כל כך?",answers:[{text:"כי הוא גדל רק בארץ ישראל",correct:false,feedback:"🫒 רגע... ומה עם עצי הזית באיטליה, ספרד, יוון, לבנון ושאר אגן הים התיכון?"},{text:"כי הוא מניב פירות כבר בשנה הראשונה",correct:false,feedback:"🫒 בשנה הראשונה? הלוואי."},{text:"כי הוא מסוגל לחיות מאות שנים ולהמשיך להניב גם לאחר שנפגע",correct:true,feedback:""},{text:"כי אי אפשר לכרות אותו",correct:false,feedback:"🪓 הלוואי שאי אפשר היה לכרות עץ זית..."}],explanation:"עצי זית יכולים לחיות מאות שנים, ולעיתים להמשיך להתחדש גם אחרי פגיעה קשה."}
    ],
    tatzpit:[
      {text:"ביום עם ראות טובה במיוחד, עד לאן ניתן לראות מכאן?",answers:[{text:"הרי חברון",correct:false,feedback:"🌬️ הרי חברון בכיוון אחר. אווירון מבקש להסתכל מערבה."},{text:"הרי הגליל",correct:false,feedback:"🌬️ אופטימיות זה חשוב... אבל לא עד כדי כך."},{text:"הים התיכון",correct:true,feedback:""},{text:"הרי אדום",correct:false,feedback:"🌬️ בשביל הרי אדום צריך להסתובב בערך 180 מעלות."}],explanation:"בימים בהירים במיוחד ניתן לראות מכאן מערבה עד הים התיכון."},
      {text:"מה מאפיין את הרי ירושלים לעומת מישור החוף?",answers:[{text:"הם עשויים בעיקר מבזלת",correct:false,feedback:"🌬️ בזלת? זה כבר נשמע יותר כמו רמת הגולן."},{text:"הם עשויים בעיקר מאבן גיר, ולכן יש בהם מערות ובורות מים",correct:true,feedback:""},{text:"הם בנויים בעיקר מדיונות חול",correct:false,feedback:"🌬️ דיונות? זה נשמע כמו חוף, לא כמו הרי ירושלים."},{text:"הם נוצרו מהתפרצויות געשיות",correct:false,feedback:"🌬️ הרי ירושלים מרשימים, אבל לא בגלל הרי געש."}],explanation:"אבן הגיר של הרי ירושלים מאפשרת חציבה של מערות, מקוואות ובורות מים."},
      {text:"מכאן מתחיל המעבר החשוב מהשפלה אל...",answers:[{text:"אילת",correct:false,feedback:"🌬️ אילת תחכה לטיול אחר."},{text:"ירושלים",correct:true,feedback:""},{text:"בקעת הירדן",correct:false,feedback:"🌬️ בקעת הירדן נמצאת בסיפור אחר של הארץ."},{text:"החרמון",correct:false,feedback:"🌬️ אם הגעתם לחרמון, כנראה שהרמז הבא היה ממש לא ברור."}],explanation:"האזור יושב על ציר העלייה מן השפלה אל הרי ירושלים."},
      {text:"העמק שניבט ממערב נקרא עמק איילון. במה הוא מוכר במיוחד?",answers:[{text:"כהשראה לשם של אילון",correct:true,feedback:""},{text:"כמקום שבו גידלו בעיקר אורז",correct:false,feedback:"🌬️ אורז בעמק איילון? אווירון מרים גבה."},{text:"כגבול הדרומי של החרמון",correct:false,feedback:"🌬️ החרמון רחוק מכאן יותר מכמה נשימות הרים."},{text:"כמפרץ ימי עמוק",correct:false,feedback:"🌬️ מפרץ ימי? אם יש כאן ים, מישהו שכח לעדכן את המפה."}],explanation:"עמק איילון הוא אחד המרחבים הבולטים הנראים מן התצפית מערבה."}
    ]
  }
};
QUESTIONS.fr = {
  gat:[
    {text:"Comment avait-on l’habitude de fouler les raisins dans le pressoir à vin ?",answers:[
      {text:"En portant des sandales, pour leur donner un arôme de terre",correct:false,feedback:"🍇 Un arôme de sandale n’est pas exactement une note recherchée dans le vin…"},
      {text:"En portant des sandales, afin d’écraser aussi les pépins",correct:false,feedback:"🍇 Au contraire, on essayait de ne pas briser les pépins, afin de ne pas donner d’amertume au vin."},
      {text:"Pieds nus, afin d’écraser les raisins sans briser les pépins",correct:true,feedback:""},
      {text:"On couchait une personne dans le pressoir et on la piétinait",correct:false,feedback:"🍇 Si l’on fabriquait le vin ainsi, il ne resterait probablement plus personne pour le boire…"}
    ],explanation:"Le foulage pieds nus permettait d’écraser les raisins sans broyer les pépins, qui risquent d’ajouter de l’amertume."},
    {text:"Après le foulage, où s’écoulait le jus de raisin ?",answers:[
      {text:"Dans un puits, afin de le refroidir",correct:false,feedback:"🍇 Un puits est destiné à l’eau, pas au moût."},
      {text:"Dans une jarre en terre cuite enfouie dans le sol",correct:false,feedback:"🍇 Les jarres pouvaient servir au stockage, mais le moût devait d’abord s’écouler dans la cuve de collecte."},
      {text:"Par un canal, jusqu’à une cuve de collecte",correct:true,feedback:""},
      {text:"Vers le pressoir à olives",correct:false,feedback:"🍇 Le pressoir à olives est réservé aux olives. Gaton demande un peu d’ordre."}
    ],explanation:"Le moût s’écoulait depuis l’aire de foulage, par un canal, jusqu’à une cuve où il était recueilli pour la suite du processus."},
    {text:"Pourquoi produisait-on du vin dans presque chaque village ?",answers:[
      {text:"Parce que les habitants ne savaient pas boire d’eau",correct:false,feedback:"🍇 Ils savaient bien sûr boire de l’eau. Le vin occupait une place importante dans la culture, les rites et le commerce."},
      {text:"Parce que le vin coûtait moins cher que l’eau",correct:false,feedback:"🍇 Le vin exigeait des vignes, des vendanges, le foulage et la fermentation. Son faible coût n’est pas l’explication."},
      {text:"Parce que le vin était une boisson courante, rituelle et commerciale",correct:true,feedback:""},
      {text:"Parce que la Torah interdisait de boire de l’eau pendant les fêtes",correct:false,feedback:"🍇 La Torah n’interdisait pas de boire de l’eau pendant les fêtes."}
    ],explanation:"Le vin faisait partie de la vie quotidienne, des rites, des repas et du commerce."},
    {text:"Quelle quantité de raisins faut-il approximativement pour produire un litre de vin ?",answers:[
      {text:"Deux raisins",correct:false,feedback:"🍇 Attendez… comment deux raisins pourraient-ils produire un litre de vin ?"},
      {text:"Environ un kilo et demi",correct:true,feedback:""},
      {text:"Vingt kilos",correct:false,feedback:"🍇 Vingt kilos ? On dirait que le vin hésite vraiment à sortir."},
      {text:"Une seule grappe, exactement",correct:false,feedback:"🍇 Une seule grappe ne suffit pas non plus pour produire un litre de vin."}
    ],explanation:"Il faut généralement environ un kilo et demi de raisins pour produire un litre de vin, selon le cépage et le procédé."}
  ],
  shomera:[
    {text:"Quelle était la fonction principale de la tour de garde ?",answers:[
      {text:"Servir de résidence permanente à une famille d’agriculteurs",correct:false,feedback:"🛖 Une famille entière ? Cela aurait été un peu serré…"},
      {text:"Stocker les céréales pendant toute l’année",correct:false,feedback:"🌾 Les céréales étaient conservées dans des entrepôts et des greniers. La tour de garde servait à surveiller les cultures sur place."},
      {text:"Servir de poste d’observation et d’habitation temporaire pour surveiller la vigne ou le verger",correct:true,feedback:""},
      {text:"Servir de base militaire à l’armée romaine",correct:false,feedback:"🏛️ Si les Romains avaient construit une base ici, elle aurait sans doute été un peu plus grande…"}
    ],explanation:"Pendant la saison des récoltes, la tour de garde servait à observer les alentours, protéger les cultures et y dormir temporairement."},
    {text:"Pourquoi construisait-on généralement la tour de garde en hauteur ?",answers:[
      {text:"Pour être plus près des nuages",correct:false,feedback:"🛖 Les nuages sont beaux, mais la tour devait surtout permettre de voir le terrain."},
      {text:"Pour s’éloigner des insectes",correct:false,feedback:"🛖 Malheureusement, il y a aussi des insectes en hauteur."},
      {text:"Pour voir au loin et surveiller le terrain",correct:true,feedback:""},
      {text:"Pour que le vent sèche les raisins",correct:false,feedback:"🛖 Des raisins ? Le vent est déjà occupé à sécher le linge."}
    ],explanation:"Un emplacement élevé permettait de mieux observer les alentours et de protéger les récoltes."},
    {text:"Quels étaient les principaux ennemis de l’agriculteur pendant les vendanges ?",answers:[
      {text:"Uniquement les soldats étrangers",correct:false,feedback:"🛖 Les soldats étrangers n’étaient pas le problème quotidien de la vigne."},
      {text:"Uniquement les animaux sauvages",correct:false,feedback:"🛖 Les animaux sauvages sont une bonne piste, mais ce n’était pas la seule raison de construire une tour de garde."},
      {text:"Les voleurs ainsi que les animaux à la recherche de nourriture",correct:true,feedback:""},
      {text:"Les abeilles qui buvaient le jus de raisin",correct:false,feedback:"🐝 Même si les abeilles aiment le sucre, ce n’est pas pour elles que l’on construisait une tour de garde."}
    ],explanation:"L’agriculteur protégeait les récoltes à la fois contre les voleurs et contre les animaux."},
    {text:"Quelle expression biblique désigne un abri de surveillance dans une vigne ?",answers:[
      {text:"Une ville fortifiée",correct:false,feedback:"🏰 Une ville fortifiée protège une ville entière, pas une petite vigne."},
      {text:"Le palais du roi",correct:false,feedback:"👑 Le palais du roi est un peu trop luxueux pour une tour de garde…"},
      {text:"Une cabane dans la vigne",correct:true,feedback:""},
      {text:"La maison du vin",correct:false,feedback:"🍇 La maison du vin appartient à Gaton. Shomeron surveille la vigne, pas le vin."}
    ],explanation:"L’expression « une cabane dans la vigne » correspond à une construction temporaire destinée à la surveillance des cultures."}
  ],
  goren:[
    {text:"Que faisait-on sur l’aire de battage ?",answers:[
      {text:"On produisait du vin",correct:false,feedback:"🌾 Du vin ? Cela ressemble plutôt au travail de Gaton."},
      {text:"On séparait les grains de céréales de la balle",correct:true,feedback:""},
      {text:"On pressait les olives pour produire de l’huile",correct:false,feedback:"🌾 Les olives vont au pressoir à olives, pas ici."},
      {text:"On creusait des tombes",correct:false,feedback:"🌾 Des tombes ? Cela appartient à une toute autre visite."}
    ],explanation:"Sur l’aire de battage, on séparait les grains de céréales de la balle et de la paille."},
    {text:"Pourquoi l’aire de battage devait-elle se trouver dans un endroit ouvert et exposé au vent ?",answers:[
      {text:"Pour que le vent emporte la balle légère et laisse les grains",correct:true,feedback:""},
      {text:"Pour que le blé cuise au soleil",correct:false,feedback:"🌾 Le blé ne cuit pas au soleil. Il doit être battu, vanné puis moulu."},
      {text:"Pour empêcher les ouvriers de s’endormir",correct:false,feedback:"🌾 Si les ouvriers s’endormaient, c’était déjà un problème de gestion."},
      {text:"Pour inviter les oiseaux à venir manger",correct:false,feedback:"🌾 Les oiseaux auraient peut-être apprécié, mais les agriculteurs beaucoup moins."}
    ],explanation:"Pendant le vannage, le vent emporte la balle légère, tandis que les grains plus lourds retombent à proximité."},
    {text:"Qu’est-ce que le battage ?",answers:[
      {text:"Le foulage des raisins avec les pieds",correct:false,feedback:"🌾 Le foulage des raisins appartient au pressoir à vin. Dishon reste avec les céréales."},
      {text:"Le broyage des olives avec une pierre",correct:false,feedback:"🌾 Les olives vont au pressoir à olives, pas ici."},
      {text:"La séparation des grains des épis au moyen du piétinement ou d’un traîneau de battage",correct:true,feedback:""},
      {text:"Une immersion dans un bain rituel",correct:false,feedback:"🌾 Le bain rituel appartient à un tout autre domaine."}
    ],explanation:"Le battage consiste à séparer les grains des épis, parfois au moyen d’un traîneau de battage ou par piétinement."},
    {text:"Qu’est-ce que la balle ?",answers:[
      {text:"Le bon grain de blé",correct:false,feedback:"🌾 C’est justement le grain que l’on voulait conserver."},
      {text:"Les parties légères et sèches qui se séparent des céréales",correct:true,feedback:""},
      {text:"Un ancien nom donné au pain",correct:false,feedback:"🍞 Si c’était un ancien nom du pain, les boulangers se seraient probablement trompés…"},
      {text:"Une épice piquante de l’époque biblique",correct:false,feedback:"🌶️ La balle s’envole peut-être au vent, mais elle n’est pas du tout piquante."}
    ],explanation:"La balle est constituée des parties légères et sèches séparées des céréales pendant leur traitement."}
  ],
  bor:[
    {text:"Pourquoi les citernes étaient-elles particulièrement importantes dans les montagnes de Judée ?",answers:[
      {text:"Parce que chaque village se trouvait au bord d’un lac",correct:false,feedback:"💧 Un lac près de chaque village ? Cela aurait facilité la vie de tout le monde, mais ce n’était pas le cas."},
      {text:"Parce que, dans les montagnes, il n’y a pas toujours de source accessible à proximité",correct:true,feedback:""},
      {text:"Parce qu’il était interdit de boire l’eau des sources",correct:false,feedback:"💧 Les sources constituaient au contraire une excellente source d’eau lorsqu’elles étaient accessibles."},
      {text:"Parce que l’eau ancienne a meilleur goût",correct:false,feedback:"💧 L’eau vieillie convient peut-être au vin… pas à la boisson."}
    ],explanation:"Dans les régions montagneuses, les sources ne sont pas disponibles partout. Le stockage de l’eau de pluie était donc essentiel."},
    {text:"Qu’est-ce qui empêchait l’eau de s’infiltrer hors de la citerne ?",answers:[
      {text:"Un enduit imperméable appliqué sur les parois",correct:true,feedback:""},
      {text:"Une couche de laine de mouton",correct:false,feedback:"🐑 La laine tient peut-être chaud en hiver, mais elle n’imperméabilise pas une citerne."},
      {text:"Du gros sel au fond",correct:false,feedback:"🧂 Le sel n’imperméabilise pas les citernes et aurait en plus rendu l’eau impropre."},
      {text:"Des gardiens qui bouchaient les trous avec leurs doigts",correct:false,feedback:"💧 Un gardien avec le doigt dans un trou ? Ce serait un emploi à vie…"}
    ],explanation:"Les citernes étaient enduites afin d’empêcher l’eau de s’infiltrer dans la roche."},
    {text:"Quel type d’eau recueillait-on généralement dans une citerne ?",answers:[
      {text:"De l’eau de mer",correct:false,feedback:"🌊 De l’eau de mer dans une citerne ? Chaque tasse de thé serait devenue une épreuve…"},
      {text:"De l’eau de source",correct:false,feedback:"💧 Les sources sont une excellente ressource, mais une citerne servait principalement à recueillir l’eau de pluie."},
      {text:"De l’eau de rivière",correct:false,feedback:"🏞️ Dans les montagnes de Judée, il n’y a pas de rivières permettant de remplir les citernes."},
      {text:"De l’eau de pluie",correct:true,feedback:""}
    ],explanation:"La citerne servait à recueillir l’eau de pluie et les eaux de ruissellement pendant la saison humide."},
    {text:"Que nous apprend une citerne sur la vie dans l’Antiquité ?",answers:[
      {text:"Qu’il n’était pas nécessaire de planifier à l’avance",correct:false,feedback:"💧 Au contraire. Une citerne montre à quel point il fallait prévoir plusieurs mois à l’avance."},
      {text:"Qu’il pleuvait toute l’année",correct:false,feedback:"🌧️ Si seulement… Dans ce cas, il n’aurait pas été nécessaire de construire des citernes."},
      {text:"Que l’eau était une ressource précieuse qui exigeait planification et stockage",correct:true,feedback:""},
      {text:"Que chaque famille ne buvait que du vin",correct:false,feedback:"🍷 Le vin était important, mais lorsqu’on a vraiment soif… l’eau gagne."}
    ],explanation:"Une citerne montre que l’eau était une ressource précieuse et que la vie en montagne exigeait planification et stockage."}
  ],
  beitbad:[
    {text:"Que produisait-on dans le pressoir à olives ?",answers:[
      {text:"De la farine",correct:false,feedback:"🫒 La farine appartient à Dishon et à l’aire de battage. Zeiton travaille avec les olives."},
      {text:"Du miel",correct:false,feedback:"🫒 Le miel est délicieux, mais on n’en extrayait pas dans le pressoir à olives."},
      {text:"De l’huile d’olive",correct:true,feedback:""},
      {text:"Du vin",correct:false,feedback:"🫒 Du vin ? Gaton s’en occupe déjà."}
    ],explanation:"Dans le pressoir à olives, on broyait et pressait les olives afin d’en extraire l’huile."},
    {text:"Que faisait-on des olives après les avoir broyées ?",answers:[
      {text:"On les faisait cuire dans une grande marmite",correct:false,feedback:"🫒 Les olives ne devenaient pas de l’huile grâce à une bonne soupe."},
      {text:"On les faisait sécher au soleil",correct:false,feedback:"🫒 Le soleil est abondant, mais ici il faut surtout de la pression."},
      {text:"On plaçait la pâte dans des scourtins, puis on la pressait pour en extraire l’huile",correct:true,feedback:""},
      {text:"On les mélangeait à de l’eau pour produire l’huile plus rapidement",correct:false,feedback:"🫒 L’eau n’est pas un raccourci vers une bonne huile."}
    ],explanation:"La pâte d’olives était placée dans des scourtins, puis pressée afin d’en extraire l’huile."},
    {text:"À quoi servait l’huile d’olive dans l’Antiquité ?",answers:[
      {text:"Uniquement à cuisiner",correct:false,feedback:"🫒 Uniquement à cuisiner ? L’huile d’olive avait beaucoup plus de travail que cela."},
      {text:"Uniquement à alimenter les lampes",correct:false,feedback:"🫒 L’éclairage était important, mais l’huile d’olive avait encore plusieurs autres usages."},
      {text:"À l’alimentation, à l’éclairage, à la médecine, aux onctions et au culte",correct:true,feedback:""},
      {text:"Principalement à teindre les vêtements",correct:false,feedback:"🫒 Les vêtements sont importants, mais ce n’était pas l’usage principal de l’huile d’olive."}
    ],explanation:"L’huile d’olive était essentielle pour l’alimentation, l’éclairage, la médecine, le culte et les onctions."},
    {text:"Pourquoi l’olivier était-il considéré comme un arbre si particulier ?",answers:[
      {text:"Parce qu’il ne pousse qu’en terre d’Israël",correct:false,feedback:"🫒 Attendez… et les oliviers d’Italie, d’Espagne, de Grèce, du Liban et du reste du bassin méditerranéen ?"},
      {text:"Parce qu’il produit des fruits dès sa première année",correct:false,feedback:"🫒 Dès la première année ? Si seulement."},
      {text:"Parce qu’il peut vivre plusieurs centaines d’années et continuer à produire même après avoir été endommagé",correct:true,feedback:""},
      {text:"Parce qu’il est impossible de l’abattre",correct:false,feedback:"🪓 Si seulement il était impossible d’abattre un olivier…"}
    ],explanation:"Les oliviers peuvent vivre plusieurs centaines d’années et parfois se régénérer même après de graves dommages."}
  ],
  tatzpit:[
    {text:"Par un jour de visibilité exceptionnelle, jusqu’où peut-on voir depuis ce point ?",answers:[
      {text:"Jusqu’aux monts de Hébron",correct:false,feedback:"🌬️ Les monts de Hébron se trouvent dans une autre direction. Aviron vous demande de regarder vers l’ouest."},
      {text:"Jusqu’aux montagnes de Galilée",correct:false,feedback:"🌬️ L’optimisme est important… mais peut-être pas à ce point."},
      {text:"Jusqu’à la mer Méditerranée",correct:true,feedback:""},
      {text:"Jusqu’aux monts d’Édom",correct:false,feedback:"🌬️ Pour voir les monts d’Édom, il faudrait se tourner d’environ 180 degrés."}
    ],explanation:"Par temps particulièrement clair, on peut voir vers l’ouest jusqu’à la mer Méditerranée."},
    {text:"Qu’est-ce qui caractérise les montagnes de Jérusalem par rapport à la plaine côtière ?",answers:[
      {text:"Elles sont principalement constituées de basalte",correct:false,feedback:"🌬️ Du basalte ? Cela ressemble davantage au plateau du Golan."},
      {text:"Elles sont principalement constituées de calcaire, ce qui permet la présence de grottes et de citernes",correct:true,feedback:""},
      {text:"Elles sont principalement formées de dunes de sable",correct:false,feedback:"🌬️ Des dunes ? Cela évoque plutôt la côte que les montagnes de Jérusalem."},
      {text:"Elles ont été créées par des éruptions volcaniques",correct:false,feedback:"🌬️ Les montagnes de Jérusalem sont impressionnantes, mais pas à cause de volcans."}
    ],explanation:"Le calcaire des montagnes de Jérusalem permettait de creuser des grottes, des bains rituels et des citernes."},
    {text:"C’est ici que commence l’importante montée depuis la Shéphélah vers…",answers:[
      {text:"Eilat",correct:false,feedback:"🌬️ Eilat attendra une autre excursion."},
      {text:"Jérusalem",correct:true,feedback:""},
      {text:"La vallée du Jourdain",correct:false,feedback:"🌬️ La vallée du Jourdain appartient à une autre histoire géographique du pays."},
      {text:"Le mont Hermon",correct:false,feedback:"🌬️ Si vous êtes arrivés au mont Hermon, l’indice suivant n’était vraiment pas clair."}
    ],explanation:"La région se trouve sur l’axe de montée depuis la Shéphélah vers les montagnes de Jérusalem."},
    {text:"La vallée visible à l’ouest s’appelle la vallée d’Ayalon. Pour quelle raison est-elle particulièrement connue ici ?",answers:[
      {text:"Elle a inspiré le prénom d’Eilon",correct:true,feedback:""},
      {text:"On y cultivait principalement du riz",correct:false,feedback:"🌬️ Du riz dans la vallée d’Ayalon ? Aviron hausse un sourcil."},
      {text:"Elle constitue la limite sud du mont Hermon",correct:false,feedback:"🌬️ Le mont Hermon se trouve à bien plus que quelques bouffées d’air d’ici."},
      {text:"C’est une profonde baie maritime",correct:false,feedback:"🌬️ Une baie maritime ? S’il y a une mer ici, quelqu’un a oublié de mettre la carte à jour."}
    ],explanation:"La vallée d’Ayalon est l’un des grands paysages visibles depuis ce point de vue vers l’ouest."}
  ]
};