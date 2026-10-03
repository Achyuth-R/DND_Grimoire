// D&D 5e SRD background data (open license).
export const BACKGROUNDS = [
  {
    key: 'acolyte',
    name: 'Acolyte',
    feature: { name: "Shelter of the Faithful", desc: "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.\n\nYou might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple." },
    icon: '⛪',
    skills: ['insight', 'religion'],
    tools: [],
    languages: 2,
    desc: `You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric – performing sacred rites is not the same thing as channeling divine power.

Choose a god, a pantheon of gods, or some other quasi-divine being, and work with your DM to detail the nature of your religious service. Were you a lesser functionary in a temple, raised from childhood to assist the priests in the sacred rites? Or were you a high priest who suddenly experienced a call to serve your god in a different way? Perhaps you were the leader of a small cult outside of any established temple structure, or even an occult group that served a fiendish master that you now deny.

Source: Player's Handbook

Skill Proficiencies: Insight, Religion Tool Proficiencies: None Languages: Two of your choice Equipment: A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestmentsValue:0 Weight:0, a set of common clothesValue:5sp Weight:3lbs, and a pouchValue:5sp Weight:1lb containing 15gp`,
 desc: `You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric – performing sacred rites is not the same thing as channeling divine power.

Choose a god, a pantheon of gods, or some other quasi-divine being, and work with your DM to detail the nature of your religious service. Were you a lesser functionary in a temple, raised from childhood to assist the priests in the sacred rites? Or were you a high priest who suddenly experienced a call to serve your god in a different way? Perhaps you were the leader of a small cult outside of any established temple structure, or even an occult group that served a fiendish master that you now deny.

Source: Player's Handbook

Skill Proficiencies: Insight, Religion Tool Proficiencies: None Languages: Two of your choice Equipment: A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestmentsValue:0 Weight:0, a set of common clothesValue:5sp Weight:3lbs, and a pouchValue:5sp Weight:1lb containing 15gp`,
    equipment: 'A holy symbol, a prayer book or prayer wheel, 5 sticks of incense, vestments, common clothes, and a belt pouch containing 15 gp.',
  },
  {
    key: 'criminal',
    name: 'Criminal',
    feature: { name: "Criminal Contact", desc: "You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you." },
    icon: '🗝️',
    skills: ['deception', 'stealth'],
    tools: ['One type of gaming set', "Thieves' tools"],
    languages: 0,
    desc: `You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You're far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.

Source: Player's Handbook

Skill Proficiencies: Deception, Stealth Tool Proficiencies: One type of gaming set, thieves' tools Languages: None Equipment: A crowbarValue:2gp Weight:5lbs, a set of dark common clothesValue:5sp Weight:3lbs including a hood, and a pouchValue:5sp Weight:1lb containing 15gp

Although your capabilities are not much different from those of a burglar or smuggler, you learned and practiced them in a very different context: as an espionage agent. You might have been an officially sanctioned agent of the crown, or perhaps you sold the secrets you uncovered to the highest bidder.`,
 desc: `You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You're far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.

Source: Player's Handbook

Skill Proficiencies: Deception, Stealth Tool Proficiencies: One type of gaming set, thieves' tools Languages: None Equipment: A crowbarValue:2gp Weight:5lbs, a set of dark common clothesValue:5sp Weight:3lbs including a hood, and a pouchValue:5sp Weight:1lb containing 15gp

Although your capabilities are not much different from those of a burglar or smuggler, you learned and practiced them in a very different context: as an espionage agent. You might have been an officially sanctioned agent of the crown, or perhaps you sold the secrets you uncovered to the highest bidder.`,
    equipment: 'A crowbar, a set of dark common clothes including a hood, and a belt pouch containing 15 gp.',
  },
  {
    key: 'folk-hero',
    name: 'Folk Hero',
    feature: { name: "Rustic Hospitality", desc: "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you." },
    icon: '🌾',
    skills: ['animal-handling', 'survival'],
    tools: ["One type of artisan's tools", 'Vehicles (land)'],
    languages: 0,
    desc: `You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.

Source: Player's Handbook

Skill Proficiencies: Animal Handling, Survival Tool Proficiencies: One type of artisan's tools, vehicles (land) Languages: None Equipment: A set of artisan's tools (one of your choice), a shovelValue:2gp Weight:5lbs, an iron potValue:2gp Weight:10lbs, a set of common clothesValue:5sp Weight:3lbs, and a pouchValue:5sp Weight:1lb containing 10gp`,
 desc: `You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.

Source: Player's Handbook

Skill Proficiencies: Animal Handling, Survival Tool Proficiencies: One type of artisan's tools, vehicles (land) Languages: None Equipment: A set of artisan's tools (one of your choice), a shovelValue:2gp Weight:5lbs, an iron potValue:2gp Weight:10lbs, a set of common clothesValue:5sp Weight:3lbs, and a pouchValue:5sp Weight:1lb containing 10gp`,
    equipment: "A set of artisan's tools, a shovel, an iron pot, a set of common clothes, and a belt pouch containing 10 gp.",
  },
  {
    key: 'noble',
    name: 'Noble',
    feature: { name: "Position of Privilege", desc: "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to." },
    icon: '👑',
    skills: ['history', 'persuasion'],
    tools: ['One type of gaming set'],
    languages: 1,
    desc: `You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.

Work with your DM to come up with an appropriate title and determine how much authority that title carries. A noble title doesn't stand on its own-it's connected to an entire family, and whatever title you hold, you will pass it down to your own children. Not only do you need to determine your noble title, but you should also work with the DM to describe your family and their influence on you.

Is your family old and established, or was your title only recently bestowed? How much influence do they wield, and over what area? What kind of reputation does your family have among the other aristocrats of the region? How do the common people regard them?

What's your position in the family? Are you the heir to the head of the family? Have you already inherited the title? How do you feel about that responsibility? Or are you so far down the line of inheritance that no one cares what you do, as long as you don't embarrass the family? How does the head of your family feel about your adventuring career? Are you in your family's good graces, or shunned by the rest of your family?

Does your family have a coat of arms? An insignia you might wear on a signet ring? Particular colors you wear all the time? An animal you regard as a symbol of your line or even a spiritual member of the family?

These details help establish your family and your title as features of the world of the campaign.

Source: Player's Handbook

Skill Proficiencies: History, Persuasion Tool Proficiencies: One type of gaming set Languages: One of your choice Equipment: A set of fine clothesValue:15gp Weight:6lbs, a signet ringValue:5gp Weight:0, a scroll of pedigree, and a purse containing 25gp

A knighthood is among the lowest noble titles in most societies, but it can be a path to higher status. If you wish to be a knight, choose the Retainers feature below instead of the Position of Privilege feature. One of your commoner retainers is replaced by a noble who serves as your squire, aiding you in exchange for training on his or her own path to knighthood. Your two remaining retainers might include a groom to care for your horse and a servant who polishes your armor (and even helps you put it on).

As an emblem of chivalry and the ideals of courtly love, you might include among your equipment a banner or other token from a noble lord or lady to whom you have given your heart – in a chaste sort of devotion. (This person could be your bond.)`,
 desc: `You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.

Work with your DM to come up with an appropriate title and determine how much authority that title carries. A noble title doesn't stand on its own-it's connected to an entire family, and whatever title you hold, you will pass it down to your own children. Not only do you need to determine your noble title, but you should also work with the DM to describe your family and their influence on you.

Is your family old and established, or was your title only recently bestowed? How much influence do they wield, and over what area? What kind of reputation does your family have among the other aristocrats of the region? How do the common people regard them?

What's your position in the family? Are you the heir to the head of the family? Have you already inherited the title? How do you feel about that responsibility? Or are you so far down the line of inheritance that no one cares what you do, as long as you don't embarrass the family? How does the head of your family feel about your adventuring career? Are you in your family's good graces, or shunned by the rest of your family?

Does your family have a coat of arms? An insignia you might wear on a signet ring? Particular colors you wear all the time? An animal you regard as a symbol of your line or even a spiritual member of the family?

These details help establish your family and your title as features of the world of the campaign.

Source: Player's Handbook

Skill Proficiencies: History, Persuasion Tool Proficiencies: One type of gaming set Languages: One of your choice Equipment: A set of fine clothesValue:15gp Weight:6lbs, a signet ringValue:5gp Weight:0, a scroll of pedigree, and a purse containing 25gp

A knighthood is among the lowest noble titles in most societies, but it can be a path to higher status. If you wish to be a knight, choose the Retainers feature below instead of the Position of Privilege feature. One of your commoner retainers is replaced by a noble who serves as your squire, aiding you in exchange for training on his or her own path to knighthood. Your two remaining retainers might include a groom to care for your horse and a servant who polishes your armor (and even helps you put it on).

As an emblem of chivalry and the ideals of courtly love, you might include among your equipment a banner or other token from a noble lord or lady to whom you have given your heart – in a chaste sort of devotion. (This person could be your bond.)`,
    equipment: 'A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp.',
  },
  {
    key: 'sage',
    name: 'Sage',
    feature: { name: "Researcher", desc: "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign." },
    icon: '📜',
    skills: ['arcana', 'history'],
    tools: [],
    languages: 2,
    desc: `You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.

Source: Player's Handbook

Skill Proficiencies: Arcana, History Tool Proficiencies: None Languages: Two of your choice Equipment: A bottle of inkValue:10gp Weight:0.0625lb, a quillValue:2cp Weight:0, a small knifeValue:0 Weight:0, a letter from a dead colleague posing a question you have not yet been able to answer, a set of common clothesValue:5sp Weight:3lbs, and a pouchValue:5sp Weight:1lb containing 10gp`,
 desc: `You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.

Source: Player's Handbook

Skill Proficiencies: Arcana, History Tool Proficiencies: None Languages: Two of your choice Equipment: A bottle of inkValue:10gp Weight:0.0625lb, a quillValue:2cp Weight:0, a small knifeValue:0 Weight:0, a letter from a dead colleague posing a question you have not yet been able to answer, a set of common clothesValue:5sp Weight:3lbs, and a pouchValue:5sp Weight:1lb containing 10gp`,
    equipment: 'A bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, common clothes, and a belt pouch containing 10 gp.',
  },
  {
    key: 'soldier',
    name: 'Soldier',
    feature: { name: "Military Rank", desc: "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized." },
    icon: '🎖️',
    skills: ['athletics', 'intimidation'],
    tools: ['One type of gaming set', 'Vehicles (land)'],
    languages: 0,
    desc: `War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.

When you choose this background, work with your DM to determine which military organization you were a part of, how far through its ranks you progressed, and what kind of experiences you had during your military career. Was it a standing army, a town guard, or a village militia? Or it might have been a noble's or merchant's private army, or a mercenary company.

Source: Player's Handbook

Skill Proficiencies: Athletics, Intimidation Tool Proficiencies: One type of gaming set, vehicles (land) Languages: None Equipment: An insignia of rank, a trophy taken from a fallen enemy (a daggerValue:2gp Weight:1lb, broken blade, or piece of a banner), a set of bone diceValue:1sp Weight:0 or a deck of cardsValue:5sp Weight:0, a set of common clothesValue:5sp Weight:3lbs, and a pouchValue:5sp Weight:1lb containing 10gp`,
 desc: `War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.

When you choose this background, work with your DM to determine which military organization you were a part of, how far through its ranks you progressed, and what kind of experiences you had during your military career. Was it a standing army, a town guard, or a village militia? Or it might have been a noble's or merchant's private army, or a mercenary company.

Source: Player's Handbook

Skill Proficiencies: Athletics, Intimidation Tool Proficiencies: One type of gaming set, vehicles (land) Languages: None Equipment: An insignia of rank, a trophy taken from a fallen enemy (a daggerValue:2gp Weight:1lb, broken blade, or piece of a banner), a set of bone diceValue:1sp Weight:0 or a deck of cardsValue:5sp Weight:0, a set of common clothesValue:5sp Weight:3lbs, and a pouchValue:5sp Weight:1lb containing 10gp`,
    equipment: 'An insignia of rank, a trophy taken from a fallen enemy, a set of bone dice or deck of cards, common clothes, and a belt pouch containing 10 gp.',
  },
  {
    key: 'charlatan',
    name: 'Charlatan',
    feature: { name: "False Identity", desc: "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy." },
    icon: '🎭',
    skills: ['deception', 'sleight-of-hand'],
    tools: ['Disguise kit', 'Forgery kit'],
    languages: 0,
    desc: `You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books. It's a useful talent, and one that you're perfectly willing to use for your advantage.

You know what people want and you deliver, or rather, you promise to deliver. Common sense should steer people away from things that sound too good to be true, but common sense seems to be in short supply when you're around. The bottle of pink colored liquid will surely cure that unseemly rash, this ointment – nothing more than a bit of fat with a sprinkle of silver dust can restore youth and vigor, and there's a bridge in the city that just happens to be for sale. These marvels sound implausible, but you make them sound like the real deal.

Source: Player's Handbook

Skill Proficiencies: Deception, Sleight of Hand Tool Proficiencies: Disguise kit, forgery kit Languages: None Equipment: A set of fine clothesValue:15gp Weight:6lbs, a disguise kitValue:25gp Weight:3lbs, tools of the con of your choice (ten stoppered bottlesValue:2gp Weight:2lbs (individually) filled with colored liquid, a set of weighted diceValue:1sp Weight:0, a deck of marked cardsValue:5sp Weight:0, or a signet ringValue:5gp Weight:0 of an imaginary duke), and a pouchValue:5sp Weight:1lb containing 15gp`,
 desc: `You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books. It's a useful talent, and one that you're perfectly willing to use for your advantage.

You know what people want and you deliver, or rather, you promise to deliver. Common sense should steer people away from things that sound too good to be true, but common sense seems to be in short supply when you're around. The bottle of pink colored liquid will surely cure that unseemly rash, this ointment – nothing more than a bit of fat with a sprinkle of silver dust can restore youth and vigor, and there's a bridge in the city that just happens to be for sale. These marvels sound implausible, but you make them sound like the real deal.

Source: Player's Handbook

Skill Proficiencies: Deception, Sleight of Hand Tool Proficiencies: Disguise kit, forgery kit Languages: None Equipment: A set of fine clothesValue:15gp Weight:6lbs, a disguise kitValue:25gp Weight:3lbs, tools of the con of your choice (ten stoppered bottlesValue:2gp Weight:2lbs (individually) filled with colored liquid, a set of weighted diceValue:1sp Weight:0, a deck of marked cardsValue:5sp Weight:0, or a signet ringValue:5gp Weight:0 of an imaginary duke), and a pouchValue:5sp Weight:1lb containing 15gp`,
    equipment: 'A set of fine clothes, a disguise kit, tools of the con of your choice, and a belt pouch containing 15 gp.',
  },
  {
    key: 'entertainer',
    name: 'Entertainer',
    feature: { name: "By Popular Demand", desc: "You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you." },
    icon: '🎪',
    skills: ['acrobatics', 'performance'],
    tools: ['Disguise kit', 'One type of musical instrument'],
    languages: 0,
    desc: `You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.

Source: Player's Handbook

Skill Proficiencies: Acrobatics, Performance Tool Proficiencies: Disguise kit, one type of musical instrument Languages: None Equipment: A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costumeValue:5gp Weight:4lbs, and a pouchValue:5sp Weight:1lb containing 15gp

A gladiator is as much an entertainer as any minstrel or circus performer trained to make the arts of combat into a spectacle the crowd can enjoy. This kind of flashy combat is your entertainer routine, though you might also have some skills as a tumbler or actor. Using your By Popular Demand feature, you can find a place to perform in any place that features combat for entertainment-perhaps a gladiatorial arena or secret pit fighting club. You can replace the musical instrument in your equipment package with an inexpensive but unusual weapon, such as a trident or net.`,
 desc: `You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.

Source: Player's Handbook

Skill Proficiencies: Acrobatics, Performance Tool Proficiencies: Disguise kit, one type of musical instrument Languages: None Equipment: A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costumeValue:5gp Weight:4lbs, and a pouchValue:5sp Weight:1lb containing 15gp

A gladiator is as much an entertainer as any minstrel or circus performer trained to make the arts of combat into a spectacle the crowd can enjoy. This kind of flashy combat is your entertainer routine, though you might also have some skills as a tumbler or actor. Using your By Popular Demand feature, you can find a place to perform in any place that features combat for entertainment-perhaps a gladiatorial arena or secret pit fighting club. You can replace the musical instrument in your equipment package with an inexpensive but unusual weapon, such as a trident or net.`,
    equipment: 'A musical instrument, the favor of an admirer, a costume, and a belt pouch containing 15 gp.',
  },
  {
    key: 'guild-artisan',
    name: 'Guild Artisan',
    feature: { name: "Guild Membership", desc: "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.\n\nGuilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.\n\nYou must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces." },
    icon: '⚒️',
    skills: ['insight', 'persuasion'],
    tools: ["One type of artisan's tools"],
    languages: 1,
    desc: `You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.

Source: Player's Handbook

Skill Proficiencies: Insight, Persuasion Tool Proficiencies: One type of artisan's tools Languages: One of your choice Equipment: A set of artisan's tools (one of your choice), a letter of introduction from your guild, a set of traveler's clothesValue:2gp Weight:4lbs, and a pouchValue:5sp Weight:1lb containing 15gp

Instead of an artisans' guild, you might belong to a guild of traders, caravan masters, or shopkeepers. You don't craft items yourself but earn a living by buying and selling the works of others (or the raw materials artisans need to practice their craft). Your guild might be a large merchant consortium (or family) with interests across the region. Perhaps you transported goods from one place to another, by ship, wagon, or caravan, or bought them from traveling traders and sold them in your own little shop. In some ways, the traveling merchant's life lends itself to adventure far more than the life of an artisan.

Rather than proficiency with artisan's tools, you might be proficient with navigator's tools or an additional language. And instead of artisan's tools, you can start with a mule and a cart.

Guilds are generally found in cities large enough to support several artisans practicing the same trade. However, your guild might instead be a loose network of artisans who each work in a different village within a larger realm. Work with your DM to determine the nature of your guild. You can select your guild business from the Guild Business table or roll randomly.

As a member of your guild, you know the skills needed to create finished items from raw materials (reflected in your proficiency with a certain kind of artisan's tools), as well as the principles of trade and good business practices. The question now is whether you abandon your trade for adventure, or take on the extra effort to weave adventuring and trade together.

As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.

Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.

You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces.

Guild artisans are among the most ordinary people in the world until they set down their tools and take up an adventuring career. They understand the value of hard work and the importance of community, but they're vulnerable to sins of greed and covetousness.`,
 desc: `You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.

Source: Player's Handbook

Skill Proficiencies: Insight, Persuasion Tool Proficiencies: One type of artisan's tools Languages: One of your choice Equipment: A set of artisan's tools (one of your choice), a letter of introduction from your guild, a set of traveler's clothesValue:2gp Weight:4lbs, and a pouchValue:5sp Weight:1lb containing 15gp

Instead of an artisans' guild, you might belong to a guild of traders, caravan masters, or shopkeepers. You don't craft items yourself but earn a living by buying and selling the works of others (or the raw materials artisans need to practice their craft). Your guild might be a large merchant consortium (or family) with interests across the region. Perhaps you transported goods from one place to another, by ship, wagon, or caravan, or bought them from traveling traders and sold them in your own little shop. In some ways, the traveling merchant's life lends itself to adventure far more than the life of an artisan.

Rather than proficiency with artisan's tools, you might be proficient with navigator's tools or an additional language. And instead of artisan's tools, you can start with a mule and a cart.

Guilds are generally found in cities large enough to support several artisans practicing the same trade. However, your guild might instead be a loose network of artisans who each work in a different village within a larger realm. Work with your DM to determine the nature of your guild. You can select your guild business from the Guild Business table or roll randomly.

As a member of your guild, you know the skills needed to create finished items from raw materials (reflected in your proficiency with a certain kind of artisan's tools), as well as the principles of trade and good business practices. The question now is whether you abandon your trade for adventure, or take on the extra effort to weave adventuring and trade together.

As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.

Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.

You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces.

Guild artisans are among the most ordinary people in the world until they set down their tools and take up an adventuring career. They understand the value of hard work and the importance of community, but they're vulnerable to sins of greed and covetousness.`,
    equipment: "A set of artisan's tools, a letter of introduction from your guild, a set of traveler's clothes, and a belt pouch containing 15 gp.",
  },
  {
    key: 'hermit',
    name: 'Hermit',
    feature: { name: "Discovery", desc: "The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society.\n\nWork with your DM to determine the details of your discovery and its impact on the campaign." },
    icon: '🏔️',
    skills: ['medicine', 'religion'],
    tools: ['Herbalism kit'],
    languages: 1,
    desc: `You lived in seclusion – either in a sheltered community such as a monastery, or entirely alone – for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.

Source: Player's Handbook

Skill Proficiencies: Medicine, Religion Tool Proficiencies: Herbalism kit Languages: One of your choice Equipment: A scroll caseValue:1gp Weight:1lb stuffed full of notes from your studies or prayers, a winter blanketValue:5sp Weight:3lbs, a set of common clothesValue:5sp Weight:3lbs, an herbalism kitValue:5gp Weight:3lbs, and 5gp`,
 desc: `You lived in seclusion – either in a sheltered community such as a monastery, or entirely alone – for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.

Source: Player's Handbook

Skill Proficiencies: Medicine, Religion Tool Proficiencies: Herbalism kit Languages: One of your choice Equipment: A scroll caseValue:1gp Weight:1lb stuffed full of notes from your studies or prayers, a winter blanketValue:5sp Weight:3lbs, a set of common clothesValue:5sp Weight:3lbs, an herbalism kitValue:5gp Weight:3lbs, and 5gp`,
    equipment: 'A scroll case stuffed full of notes, a winter blanket, a set of common clothes, an herbalism kit, and 5 gp.',
  },
  {
    key: 'outlander',
    name: 'Outlander',
    feature: { name: "Wanderer", desc: "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth." },
    icon: '🧭',
    skills: ['athletics', 'survival'],
    tools: ['One type of musical instrument'],
    languages: 1,
    desc: `You grew up in the wilds, far from civilization and the comforts of town and technology. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don't know the specific features of the terrain, you know the ways of the wild.

Source: Player's Handbook

Skill Proficiencies: Athletics, Survival Tool Proficiencies: One type of musical instrument Languages: One of your choice Equipment: A staffValue:2sp Weight:4lbs, a hunting trapValue:5gp Weight:25lbs, a trophy from an animal you killed, a set of traveler's clothesValue:2gp Weight:4lbs, and a pouchValue:5sp Weight:1lb containing 10gp`,
 desc: `You grew up in the wilds, far from civilization and the comforts of town and technology. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don't know the specific features of the terrain, you know the ways of the wild.

Source: Player's Handbook

Skill Proficiencies: Athletics, Survival Tool Proficiencies: One type of musical instrument Languages: One of your choice Equipment: A staffValue:2sp Weight:4lbs, a hunting trapValue:5gp Weight:25lbs, a trophy from an animal you killed, a set of traveler's clothesValue:2gp Weight:4lbs, and a pouchValue:5sp Weight:1lb containing 10gp`,
    equipment: 'A staff, a hunting trap, a trophy from an animal you killed, a set of traveler\'s clothes, and a belt pouch containing 10 gp.',
  },
  {
    key: 'urchin',
    name: 'Urchin',
    feature: { name: "City Secrets", desc: "You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow." },
    icon: '🏚️',
    skills: ['sleight-of-hand', 'stealth'],
    tools: ['Disguise kit', "Thieves' tools"],
    languages: 0,
    desc: `You grew up on the streets alone, orphaned, and poor, You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. You've survived despite all odds, and did so through cunning, strength, speed, or some combination of each.

You begin your adventuring career with enough money to live modestly but securely for at least ten days. How did you come by that money? What allowed you to break free of your desperate circumstances and embark on a better life?

Source: Player's Handbook

Skill Proficiencies: Sleight of Hand, Stealth Tool Proficiencies: Disguise kit, thieves' tools Languages: None Equipment: A small knifeValue:0 Weight:0, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothesValue:5sp Weight:3lbs, and a pouchValue:5sp Weight:1lb containing 10gp`,
 desc: `You grew up on the streets alone, orphaned, and poor, You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. You've survived despite all odds, and did so through cunning, strength, speed, or some combination of each.

You begin your adventuring career with enough money to live modestly but securely for at least ten days. How did you come by that money? What allowed you to break free of your desperate circumstances and embark on a better life?

Source: Player's Handbook

Skill Proficiencies: Sleight of Hand, Stealth Tool Proficiencies: Disguise kit, thieves' tools Languages: None Equipment: A small knifeValue:0 Weight:0, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothesValue:5sp Weight:3lbs, and a pouchValue:5sp Weight:1lb containing 10gp`,
    equipment: 'A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents, common clothes, and a belt pouch containing 10 gp.',
  },
  {
    key: 'sailor',
    name: 'Sailor',
    feature: { name: "Ship's Passage", desc: "When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage." },
    icon: '⛵',
    skills: ['athletics', 'perception'],
    tools: ['Navigator\'s tools', 'Vehicles (water)'],
    languages: 0,
    desc: `You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new.

Discuss the nature of the ship you previously sailed with your Dungeon Master. Was it a merchant ship, a naval vessel, a ship of discovery, or a pirate ship? How famous (or infamous) is it? Is it widely traveled, or does it stay close to home?

Source: Player's Handbook

Skill Proficiencies: Athletics, Perception Tool Proficiencies: Navigator's tools, vehicles (water) Languages: None Equipment: A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5), a set of common clothes, and a belt pouch containing 10 gp`,
    equipment: 'A belaying pin (club), 50 feet of silk rope, a lucky charm, a set of common clothes, and a belt pouch containing 10 gp.',
  },
]

export const getBackground = (key) => BACKGROUNDS.find((b) => b.key === key)
