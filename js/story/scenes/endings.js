HW.scene("endings", String.raw`
*comment Every ending is reached with *goto_scene endings <label>.
*label writ_bound
*set by_writ true
*if (bound = "pc")
  *goto keystone_you
*elseif (bound = "tamsin")
  *goto keystone_tamsin
*elseif (bound = "sal")
  *goto keystone_sal
*elseif (bound = "tolly")
  *goto keystone_tolly
*else
  *goto keystone_rilla

*comment ==================================================================
*label many_hands
*set world "held_many"
*page_break Dawn
At dawn the storm blows itself out over the fells, and the Heldwater lies flat and silver under a washed sky, and the Stay hums B-flat, true as a bell.

Two hundred and six seats in the Hebble Gallery are full. More people are coming down the stairs to take turns: scholars, Rows folk, mill-hands, a policeman in his cape, three nuns from the Keeping sisterhood on Old Market, a Councillor's wife from Crowhill still in her pearls. Someone has set up a trestle table by the door with an urn of tea. Hob Gorringe is writing names on a roster in pencil, with shifts. [i]A year and a day. A month. Until the lake's down.[/i] Nobody holds it all. Everybody holds a little. When your shift is over, you go up the stairs into the daylight, and someone else sits down.
*if (hester_lives)
  *set rain_given true
  *achieve forty_one
  And in the Keystone Chamber, in her red armchair, with her hands in her lap and nothing at all on her shoulders for the first time in forty-one years, Hester Quaile is alive.

  They carry her up to the crest at noon, chair and all, eight scholars on poles, because she asked. Her vow says she cannot leave the Stay. The crest is part of the Stay. It is raining again, a soft summer rain off the fells, and they set her down on the cobbles in the middle of the crest road with the whole lake in front of her, and she tips her head back, and opens her mouth, and catches it.

  "Oh," says Hester Quaile. "Oh, that's Pier Street." And she laughs, and laughs, and the whole crest laughs with her, and nobody minds that they're all getting soaked.
*else
  In the Keystone Chamber, in her red armchair, with her hands in her lap and nothing at all on her shoulders for the first time in forty-one years, Hester Quaile died a little after four in the morning, as the load went out of her into two hundred pairs of hands.

  Sal was with her. They say she was smiling. They say the last thing she said was [i]That's better. Oh, that's much better,[/i] and then, [i]Thank you, ducks,[/i] to nobody in particular, to everybody, to the whole wall.
*gosub epilogue
*ending many_hands

*comment ==================================================================
*label open_water
*set world "drained"
*if (evac >= 2)
  *set casualties "none"
*elseif (evac = 1)
  *set casualties "few"
*else
  *set casualties "some"
*page_break Dawn
All night the lake goes out through the Old Sluices, a quarter-turn an hour, a foot an hour, roaring down the valley in four white columns that you can hear from the crest like a train that never ends.

The Nethers floods. It floods to the knee, then to the waist on the lowest streets, and the Cut goes over its banks, and the dye-works turns the whole river blue from the mill-race to the sea.
*if (casualties = "none")
  But the Nethers is empty. Every house. Every bed. Hob's runners, the Rows phone tree, Mam's siren, the [i]Courier[/i]'s map: somewhere up on Tanner's Hill in the rain, forty thousand people are standing in blankets, watching the water come down their own streets. Not one of them is in it.
*elseif (casualties = "few")
  Most of the Nethers got out. Not all. When they count, in the grey days after, it's eleven: the old, the sick, a drunk asleep in a cellar on Gas Street, a family on Dye Row who didn't hear. Eleven names. You'll know every one of them by heart before the summer's out.
*else
  Not enough of the Nethers got out. Nobody woke them in time. When they count, in the grey days after, it's more than a hundred: people who slept through the hum, and through the rain, and woke with the water already on the stairs. You'll know every one of those names by heart. You'll have time to learn them.

And the Stay holds. It cracks from crest to footing with a sound like the sky tearing, and the face of it spits stone and water all night, and it holds, because the people in the Sluice Gallery hold it, hand to stone, until the lake is too low to need them.

At dawn you climb up onto the crest with your hands raw and your legs shaking, and look north.

The Heldwater is forty feet lower than it was at midnight. And a mile up the valley, standing up out of the grey water in the first light like something rising out of sleep, is a squat stone tower. The Wordhouse of Hebble. Its bell-tower. Its roof. And around it, as you watch, as the whole of Scarrow on Tanner's Hill watches, the tops of the houses. Chimney pots. Slates. The line of a lane.

Somebody on the crest starts to cry. Then somebody else.
*if (hester_lives)
  *achieve forty_one
  In the Keystone Chamber, with nothing left to hold, Hester Quaile takes her hands off the rails for good. By noon they have carried her up to the crest in her red armchair, because the crest is part of the Stay and her vow still holds, and she sits there in the soft rain after the storm, with her face turned north toward a village she can't see, and says, "Tell me. Tell me what it looks like. Tell me all of it."
*else
  In the Keystone Chamber, with nothing left to hold, Hester Quaile died a little before dawn, with Sal's hand in hers. They say that at the end she lifted her head, as if she'd heard something, a bell, very far away, and said, [i]Oh, there it is,[/i] and smiled.
*gosub epilogue
*ending open_water

*comment ==================================================================
*label sleepless
*set world "sleepless"
*if (evac >= 2)
  *set casualties "none"
*else
  *set casualties "many"
*set nan_sleeps true
*page_break The breaking
You open all four gates, and Nan Win lays her small hands on the stone, and between you, you let the Stay go.

It takes an hour. The wall groans, and cracks, and bows outward in the middle like a sail, and then, a little after three in the morning, with a sound nobody who hears it will ever forget, the crown of the arch gives way.

The Heldwater goes down the valley in a single wave, black and white and roaring, forty feet high.
*if (casualties = "none")
  And the valley is empty. Every soul: the Rows, the Nethers, the lock-keepers, the dye-works night shift, even the drunks on Gas Street, hauled out of their cellars by Hob's runners and Ezra Dunnock's phone tree and a hundred Rows folk who have drilled for this every year for thirty years without knowing why. When the wave comes through the Nethers there is nobody in it. It takes the mills, the dye-works, the gasworks, four thousand houses, the Council's warehouses, and the Crowhill lower gardens. It doesn't take a single life.
*else
  And the valley isn't empty. Not all of it. Not nearly enough of it. You'll never know the number exactly; nobody will. You'll spend the rest of your life knowing it was your hand on the wheel.

Nan Win sits on the wet stone of the sluice chamber with her back against the wall and her hands in her lap. Above you the Stay is gone. Somewhere far up the valley, in the dark, the water is draining off Hebble for the first time in seventy-one years.

"There," she says. "There, now."

And she closes her eyes, and falls asleep, sitting up, for the first time in thirty-one years.
*achieve sleep_win
*gosub epilogue
*ending sleepless

*comment ==================================================================
*label the_flood
*set world "flood"
*if (evac >= 3)
  *set casualties "few"
*elseif (evac = 2)
  *set casualties "dozens"
*elseif (evac = 1)
  *set casualties "hundreds"
*else
  *set casualties "thousands"
*set nan_sleeps true
*page_break The breaking
The Stay breaks at twenty to four in the morning.

It doesn't fall all at once. Nothing that big does. The crown of the arch bows outward, and cracks, and the cracks run down the face of the wall like lightning running down a tree, and the lake finds them. And then the middle of the Stay simply goes: two hundred feet of stone and seventy-one years of vows, pushed out into the dark by eleven miles of water that has been waiting all that time to leave.
*if (pc_fate = "dead")
  You're still in the Hebble Gallery when it goes. You stayed. Somebody had to hold the breach while the last of them got up the stairs, and you had your hands on the iron, and you held, and held, and you felt every one of them go past you and up into the air. Tamsin. Hob. The Rows folk. Sal. The last scholar out of the door looked back at you, and you shouted at them to [i]go,[/i] and they went.

  And then there was only you, and the iron, and the whole weight of the lake. You held it for as long as you could. It was longer than anyone would have believed.
*else
  You're on the crest stairs when it goes, with the last of them in front of you, climbing, and the stair tilts under your feet like the deck of a ship.
The wave goes down the valley forty feet high.
*if (casualties = "few")
  The Nethers is almost empty when it arrives. Hob's runners, the Rows phone tree, sirens, telephones, church bells: by the time the water comes, the flood line is up on Tanner's Hill in the rain. It takes the mills, the dye-works, four thousand houses. It takes, in the end, nineteen lives. Nineteen is a great many. It is not what it could have been.
*elseif (casualties = "dozens")
  Half the Nethers got out. Half didn't hear, or didn't believe, or couldn't move fast enough. When they count, in the weeks after, it's more than two hundred.
*elseif (casualties = "hundreds")
  Hardly anybody in the Nethers knew it was coming. The warning was too little, too late. When they count, in the weeks after, it's more than two thousand.
*else
  Nobody in the Nethers knew it was coming. There were no sirens. There was nobody running. When the wave came down the valley, forty thousand people were asleep in their beds under the wall, exactly where they had always been told they were safe.
*if (nan_state != "exposed")
  On Tanner's Hill, in the rain, in her wheeled chair, watching the valley empty, Win Mottram falls asleep sitting up, for the first time in thirty-one years. Nobody notices for a long time. When Tamsin finally does, she lets her sleep.
  *achieve sleep_win
*gosub epilogue
*ending the_flood

*comment ==================================================================
*label keystone_you
*set world "keystone"
*page_break The chair
The Stay takes you.

It's like being poured into a mould. All at once you are enormous: four hundred feet high and a quarter-mile long, with eleven miles of water leaning on your chest and a whole city asleep at your feet. You feel every stone. You feel every crack, every drip, every fray. You feel the scholars running on the stairs like mice in your walls. You feel the wind on the crest, and the rain, and the lake.

It's the heaviest thing in the world. After a while, it's just heavy.

The hum comes back up to B-flat, and holds.
*if (by_writ)
  The constables leave you there. Honoria Varnish stands in the doorway for a moment, soaked, and looks at you in the chair, and inclines her head, like a woman acknowledging a debt paid. Then she goes.
Hester Quaile died a little after four in the morning, on the floor of the chamber, on a blanket, with her head in Sal's lap. They carried her up to the crest to die, in the end, because she asked: the crest is part of the Stay, and her vow still held. It was raining.
*if (rain_given)
  "I've had my rain," she said, when they set her down. "Duck brought it me. Once was enough." But she opened her mouth and caught it anyway.
*else
  She tipped her head back and opened her mouth and caught it, like a girl on a dock. "Oh," she said. "Oh, that's Pier Street." And that was the last thing.
You felt her go. You were the wall. You felt everything.
*gosub epilogue
*ending keystone_you

*comment ==================================================================
*label keystone_tamsin
*set world "keystone"
*page_break The chair
The hum comes back up to B-flat, and holds.

And then, three days later, very slightly, it changes.

Nobody notices at first except Dr. Marchbank, who has been measuring everything for a year and can't stop. The lake level, she writes in her log, has fallen by a finger's breadth. Nothing to do with the weather. Nothing to do with the sluices, which are sealed. The Heldwater is simply, very slowly, going down, as if something at the bottom of it has decided to let it go.
*if (by_writ)
  The Council put her there by force. The Council doesn't know yet what it put in that chair.
Tamsin Mottram sits in the red armchair in the heart of the Stay with her hands on the brass rails and her eyes shut, and does the sums, and lets the water down a finger's breadth a month. Slow enough that no one downstream will ever get their feet wet. Slow enough that nobody can stop it. She's worked it out. Thirty years.

Hester Quaile died that night, on the floor of the chamber, with Sal holding one hand and Tamsin, already in the chair, reaching down to hold the other. The last thing she said, they tell you, was: [i]Oh, you clever girl. You clever, stubborn girl.[/i]
*gosub epilogue
*ending keystone_tamsin

*comment ==================================================================
*label keystone_sal
*set world "keystone"
*page_break The chair
The hum comes back up to B-flat, and holds, and something in it is different. Sweeter. Everyone in the Stay notices it, though nobody can say what it is. Hob says it's the harmonics. The first-years say it sounds like bees.
*if (by_writ)
  They didn't need to force Sal. Sal would have walked up the stairs on their own. The constables stand in the doorway looking awkward, and then go away.
Hester Quaile died a little after four in the morning, in Sal's arms, in the red armchair, because Sal wouldn't let them move her out of it: they sat in the chair with Hester on their lap like a child, and held the wall, and held her, both at once. The last thing she said was, [i]You bloody fool. You lovely bloody fool. I'm so proud of you.[/i]

Sal says she meant both. Sal can't lie.
*gosub epilogue
*ending keystone_sal

*comment ==================================================================
*label keystone_tolly
*set world "keystone"
*page_break The chair
The hum comes back up to B-flat, and holds.
*if (by_writ)
  Honoria Varnish, standing in the doorway with the Writ in her hand, watches her son sit down in the chair of his own will, and her face does something nobody on Crowhill has ever seen it do.
Hester Quaile died a little after four in the morning, on the floor of the chamber, with Tolly (already in the chair, already holding the whole weight of the lake) leaning down to hold her hand. She told him three very rude jokes, one after another, in a voice like a thread. He laughed at all of them. That was the last thing she heard: somebody laughing.

When Honoria Varnish came up the Crown Stair at dawn, soaked and grey, and stood in the door of the chamber, her son looked up at her from the red armchair.

"Hello, Mother," said Ptolemy Varnish. "I'm afraid you can't tell me to come home. I've sworn not to leave." And he smiled, with his whole face. "It's the first thing I've ever decided. Isn't that marvelous?"
*gosub epilogue
*ending keystone_tolly

*comment ==================================================================
*label keystone_rilla
*set world "keystone"
*page_break The chair
The hum comes back up to B-flat, and holds.
*if (revealed_public)
  Rilla Hesketh knew. She'd known since the Question. She sat down in the red armchair with her chin up and her hands shaking, and put them on the rails, and held.
*else
  Rilla Hesketh found out what the Crown was for at eleven minutes past eleven on Midsummer night, with the Stay breaking around her, and sat down in the chair anyway, because she was Rilla Hesketh, and the city was under the wall, and there was nobody else. She was twenty-one.
*if (by_writ)
  The Council's constables walked her there. She didn't struggle. Afterwards, when she could talk, she said the worst part wasn't the chair. It was being walked.
Hester Quaile died a little after four in the morning, on the floor of the chamber. Before she went she asked Rilla her name, and when Rilla told her, Hester said, "Oh, I remember you. You ran the Gallery like a hare. You'll do, duck. You'll do." And Rilla Hesketh, twenty-one years old, in torn Crowning silk, with the whole lake on her shoulders, wept.
*gosub epilogue
*ending keystone_rilla

*comment ==================================================================
*label long_watch
*set world "keystone"
*page_break The chair
The hum comes back up to B-flat, and holds.

Ambrose Fell sits in the red armchair with his hands on the brass rails. His face has gone the grey of wet chalk with the weight of it. His hands are steady. Hester Quaile lies on the floor beside him on Sal's blanket, with her head on his knee.

"Twenty-two years," says Fell. "I'm sorry. I'm so sorry, Hester."

"I know, love," says Hester. "Shut up now. Let me listen to you hold it." She listens for a while. "You're doing it too tidily," she says. "You always were too tidy."

She died a little after four, with her head on his knee, listening to him hold the wall.
*gosub epilogue
*ending long_watch

*comment ==================================================================
*label wardens_due
*set world "keystone"
*page_break The chair
The hum comes back up to B-flat, and holds. Not quite as strong as it was. You can hear the strain in it, a thinness in the note, like an old woman's voice. She's sixty-three. The lever is short.

"Five years," says Agnes Brathwaite, from the red armchair, in the Plain Word, so everyone in the chamber knows it for a fact. "Perhaps six. The city has five years to build a dam that doesn't need a person in it." She looks at you. "Tell them that, Scholar. Exactly."

Hester Quaile died a little after four, on the floor of the chamber. Before she went she said to the Warden, "Agnes. You took your time." And the Warden, in the Plain Word, said, "Yes. I did." And Hester laughed.
*gosub epilogue
*ending wardens_due

*comment ==================================================================
*label council
*set world "keystone"
*page_break Order
By dawn the crest is clear, and quiet, and the hum is B-flat, and the Heir is in the chair.
*if (bound = "tamsin")
  Tamsin Mottram fought the constables all the way up the Crown Stair. Not to escape. To get there first. You were holding the door.
*elseif (bound = "sal")
  Sal walked up the Crown Stair on their own. They stopped at the door you were holding, and looked at you, and said, in the Plain Word, "You were wrong about this. I'm not angry. I'm sorry for you." And went in.
*elseif (bound = "tolly")
  Tolly walked up the Crown Stair laughing. At the door he stopped and said to you, "You're on my mother's side. Of course you are. Everyone is, in the end." And went in.
*else
  Rilla Hesketh walked up the Crown Stair between two constables. At the door she looked at you as if she'd never seen you before.
Hester Quaile died a little after four in the morning. You were standing guard at the foot of the Crown Stair when the Warden came down to say so. She didn't look at you.

Honoria Varnish shook your hand on the crest in the morning light, in front of the [i]Courier[/i]'s photographer. "Order," she said, "is a kindness. It's the only kindness that scales." She smiled. "The Council remembers its friends."
*gosub epilogue
*ending council

*comment ==================================================================
*label the_runner
*page_break The bottom
*set world "keystone"
The car hits the bottom of the Weir Lift with a bang that goes through your knees. Samuel throws the gate. You step out onto the wet cobbles of the Nethers, under the weeping wall, in the rain.

Behind you, four hundred feet up, the hum is G, and falling.

You walk. You don't run; there's no point in running now. You walk up through the Nethers and over the Cut and up the long hill toward the station, with your collar up, and behind you, some time around four in the morning, the hum climbs back up to B-flat, and holds.

Somebody took the chair.
*if (bound = "fell")
  You find out who from the [i]Courier[/i], three days later, in a station tea-room a hundred miles away. [i]MASTER OF THE COLLEGE TAKES KEYSTONE'S CHAIR.[/i] Ambrose Fell. Twenty-two years ago, he ran. On Crown Night, when the Heir ran, he didn't. The paper quotes one line he said, at the chamber door, to the Warden: [i]Not twice.[/i]
*elseif (bound = "warden")
  You find out who from the [i]Courier[/i], three days later, in a station tea-room a hundred miles away. [i]WARDEN TAKES KEYSTONE'S CHAIR AS HEIR FLEES.[/i] Agnes Brathwaite, sixty-three. The paper says the Stay will hold for five years. Perhaps six.
*elseif (bound = "sal")
  You find out who from the [i]Courier,[/i] three days later, in a station tea-room a hundred miles away. [i]KEYSTONE'S KIN TAKES CHAIR.[/i] Sal Quaile. Of course it was Sal. Sal was always going to be the one who stayed.
*elseif (bound = "tamsin")
  You find out from the [i]Courier[/i], three days later, in a station tea-room a hundred miles away. Tamsin Mottram, the Heir, swore the Great Vow at ten past four. The paper doesn't say what you know: that she's already started doing the sums.
*elseif (bound = "tolly")
  You find out from the [i]Courier[/i], three days later, in a station tea-room a hundred miles away. Ptolemy Varnish, the Heir, swore the Great Vow at ten past four. The paper has a photograph of him from the Crowning: white tie, heather crown, smiling.
*elseif (bound = "rilla")
  You find out from the [i]Courier[/i], three days later, in a station tea-room a hundred miles away. Rilla Hesketh, the Heir, swore the Great Vow at ten past four. There's a photograph of her from the Crowning, golden, laughing, not knowing.
*if (vow_anchor)
  *set broke "vow_anchor"
  *set vow_anchor false
  *achieve snap
  You were sworn never to leave Scarrow. The snap takes you at the city boundary stone, on the train, somewhere past the last lock of the Cut. You wake up in a hospital in a town whose name you don't know, with no purchase left in you at all, and the nurse says you kept saying one word in your sleep. She thinks it was [i]sorry.[/i]
*gosub epilogue
*ending the_runner

*comment ==================================================================
*comment EPILOGUE SLIDES
*label epilogue
*page_break Epilogue
*chapter Epilogue What the Water Keeps
*if (world = "held_many")
  The Holding kept the Stay for four years, in shifts, on willing hands. Nobody was bound for life. On the busiest nights there were three hundred people in the Hebble Gallery; on the quietest, eighty. There was always someone. There was a waiting list. The [i]Courier[/i] started printing the roster.

  The lake came down a foot a week that first autumn, through the Old Sluices, while the city argued, and then (when the Council, shamed past arguing, finally paid) the engineers came. They built a new dam a mile upstream, lower, of concrete and steel, with sluices that work and not a single vow in it. When it was finished, the Holding was released, seat by seat, with a ceremony in the Hebble Gallery that went on for eleven hours, and at the end of it the old Stay stood empty and silent for the first time in seventy-five years.

  It doesn't hum anymore. People from Scarrow say they can't sleep for the quiet.
*elseif (world = "drained")
  The Council never refilled the Heldwater. It couldn't: the Stay was cracked from crest to footing, and nobody would sit in its chair, and anyway the whole city had seen what was underneath. The inquiry sat for two years. The Settlement was repealed. The mill-owners sued the Council, and the Council sued the mill-owners, and in the end the city built a new dam, lower, of concrete, a mile upstream, with sluices that work and not a single vow in it.

  The old Stay still stands, cracked and dry and silent, with the valley open behind it. It doesn't hum anymore. School parties come to look at it.
*elseif ((world = "flood") or (world = "sleepless"))
  The Stay is gone. There's a gap at the head of the valley where it stood, a ragged notch of broken stone with the river running through it, small and ordinary, the way the Aske ran before anyone tried to hold it. Scarrow rebuilt the Nethers higher up the hill. It took eleven years.
*else
  The Stay stands, and hums B-flat, and there is someone in the chair.
  *if (revealed_public or honoria_exposed)
    But the city knows now. After Crown Night, and the Question, nobody in Scarrow could pretend anymore that the Keystone was a ceremony.
    *if (bound = "tamsin")
      And when, a year later, the [i]Courier[/i] printed Dr. Marchbank's measurements showing that the Heldwater was going down a finger's breadth a month, and would go on doing so for thirty years, and that there was nothing the Council could do about it, the city looked at the woman in the chair, and did the only thing left to it. It started building a new dam.
    *else
      The Council's inquiry sat for three years, and at the end of it, grudgingly, expensively, the city began to build a new dam: lower, of concrete, a mile upstream. It will take fifteen years. There will be someone in the chair until then.
  *else
    The city doesn't know. Not really. The Crown goes on. There'll be a Crowning next Midsummer, with bunting, and a band.

*if (world != "keystone")
  *heading Hebble
  *if (world = "held_many")
    The Wordhouse tower came up out of the water in the second autumn, and then the roofs, and then the lanes, grey with silt, and by the next spring you could walk down Mill Lane in borrowed boots.
  *else
    By midsummer of the next year the silt had dried, and you could walk down Mill Lane in borrowed boots.
  *if (world = "sleepless")
    The flood scoured most of it away. The Wordhouse tower still stands, and the mill, and a handful of houses at the top of the valley. Number Nine, Mill Lane, is not one of them. Tamsin found its doorstep, and the green door, face down in the mud a hundred yards downstream, with the lock still in it.
  *else
    Every house was still standing. Every door was still shut. The Rows folk walked up the valley on the first dry Sunday, two thousand of them, in their best coats, and Tamsin Mottram unlocked the green door of Number Nine, Mill Lane, with her Nan's key, and it turned.
  They rehung the bell in the Wordhouse tower the following Lammas, and rang it, and you could hear it from the crest. The Rows folk have gone back, some of them. Hebble is a village again. Small, muddy, obstinate. Its school has eleven children in it.

*heading Hester Quaile
*if (hester_lives)
  Hester lived three more years, in the old Keystone Chamber, which she refused to leave (she couldn't, and she wouldn't have anyway), with the iron door propped open and a stream of visitors that never stopped. On wet days they carried her up to the crest. She never missed a rain. She died in her sleep, in her red armchair, in the autumn of the third year, a little after the new dam was finished, and the whole city came up to the crest for the funeral, and it rained.
*else
  Hester Quaile is buried on the crest, in the heather by Sal's beehives, with the whole lake in front of her. It was the only place she could be buried: the crest is part of the Stay, and she had sworn not to leave it, and nobody could think of a reason to make her break her word now. Her stone says HESTER QUAILE, KEYSTONE, and under it, at Sal's insistence, the only epitaph Sal would allow: SHE KEPT HER WORD.
  *if (rain_given)
    Someone leaves a jar of rainwater on it every Midsummer. Nobody admits to it.

*if (bound != "tamsin")
  *heading Tamsin Mottram
  *if (nan_state = "exposed")
    Tamsin never spoke to you again. She visited her Nan in the Crowhill gaol every Sunday until Win Mottram died there, awake, two winters later, in a cell with no window on the river. Tamsin stood for the Council in the Nethers ward the year after, and won, and spent twenty years making Crowhill's life a misery. When your paths crossed, which they did, often, she was always perfectly polite. It was worse than anything she could have said.
  *elseif (world = "held_many")
    She sat her Nan's seat three nights a week for a year and a day, and when the lake came off Hebble she was the first into it. Afterwards she read law, at night, in the laundry, paid for by nobody. She stood for the Council in the Nethers ward, and won by the biggest margin in the city's history. She was the first person from the Rows ever to sit in the Council House. On her first day she put Nan's key on the table in front of her, where everyone could see it.
  *elseif (world = "drained")
    She stood on Tanner's Hill at dawn and watched Hebble come up out of the water, and didn't say a word, and didn't cry. Later she read law, at night, paid for by nobody, and stood for the Council in the Nethers ward, and won. She was the first person from the Rows ever to sit in the Council House.
  *elseif ((world = "flood") or (world = "sleepless"))
    She got the Rows up Tanner's Hill in thirty-eight minutes, with her mother on her back. She never forgave the Council, and never forgave herself, and never stopped working: for the Rows, for the Nethers, for every family that lost a house to the water. She sits on the Council now. She's the angriest person in it.
  *else
    She was not the Heir. She was never going to stop. She spent the rest of her life at the Hebble Society, and then in the Council House, and then as the Nethers' member for the Aske, fighting for the drawdown, for the Settlement to be repealed, for the lake to come off Hebble. It took her nineteen years.
  *if ((romance = "tamsin") and (nan_state != "exposed"))
    *if (pc_fate = "dead")
      She never married. She keeps a photograph on her desk in the Council House, and a second key on the string beside her Nan's: the key to a cell in the Footings, eight hundred and six steps down, where somebody used to sleep.
    *elseif (bound = "pc")
      She comes up the Crown Stair every night. Every night, for the rest of her life. She brings you the day's news, and the laundry gossip, and whatever she's won off someone at cards. She sits on the stool beside the red armchair with her hand over yours on the rail. She can't take it. She holds on anyway.
    *else
      You married her in the rebuilt Wordhouse of Hebble, or somewhere else that meant as much. She insisted on a contract. Everything you had for everything she had. An even trade. It was the best bargain either of you ever made, and she tells people so, in exactly those words, often, to their great embarrassment.
      *achieve earned

*if (bound != "tolly")
  *heading Ptolemy Varnish
  *if (tolly_state = "bound")
    Tolly is still his mother's. He sits on the Council now, in the seat she chose for him, and votes the way she tells him to, and makes the best speeches in the chamber, and is charming to everyone, and writes to you every Sunday. The letters are cheerful and full of nothing. Once a year, at Midwinter, one comes that isn't. You keep those in a box.
    *if (romance = "tolly")
      He loves you. He's never been told not to. It's the one thing she forgot to forbid, and he guards it like a candle in a draught.
  *else
    Tolly spent the first year of his freedom finding out what he liked. It turned out to be: sea-bathing in winter, the oboe, arguing, dogs, very bad paintings (his own), very good ones (other people's), cooking, and saying no to things. He says no to things constantly. He says it's like a muscle; it needs exercise.
    *if (tolly_hurt)
      He's deaf on the left side, and his hands shake when he's tired. He says it was cheap.
    *if (honoria_turned)
      He and his mother have lunch on the first Sunday of every month. It's excruciating. They keep doing it.
    *elseif (honoria_exposed)
      He hasn't spoken to his mother since. He says he might, one day. He says the nice thing about being free is that he gets to decide when.
    *if (romance = "tolly")
      *if (bound = "pc")
        He comes up the Crown Stair every evening at six, in white tie, with a hamper, and dines with you in the Keystone Chamber, and tells you everything he's decided that day. You will never, in forty years, hear the end of it.
      *elseif (pc_fate = "dead")
        He never married. Every Midsummer he goes up to the crest in white tie with a hamper for two, and sits on the parapet with his feet toward the water, and eats his half.
      *else
        You married him. He asked. Nobody told him to. He practised the question in the mirror for three weeks and then, when the moment came, forgot every word of it and just said [i]please,[/i] and it was perfect.
        *achieve disobedient

*if (bound != "sal")
  *heading Sal Quaile
  *if (world = "held_many")
    Sal became the first Keeper of the Holding: not a chair, a job. They kept the roster and the tea urn, and sat a shift every night, and taught every new volunteer how to put their hands on the rails and what to swear. When the Holding was released at last, Sal was the one who read the names. All of them. It took eleven hours.
  *elseif (bound != "")
    Sal goes up the Crown Stair every Sunday, with biscuits, to sit with whoever is in the chair. They were ordained in the Keeping the following spring. They preach one sermon a year, on Midsummer, on the crest, always on the same text: [i]What is kept, keeps.[/i] It's never the same sermon twice.
  *else
    Sal kept the bees on the crest until the Stay was taken down, and then moved every hive, one by one, to the heather above Hebble. They were ordained in the Keeping, and preach one sermon a year, always on the same text: [i]What is kept, keeps.[/i]
  *if (romance = "sal")
    *if (bound = "pc")
      They come up the Crown Stair every day. They bring honey. They tell you every true thing that happened since yesterday, one after another, until there aren't any left, and then they sit with their hand over yours on the rail and you both just breathe.
    *elseif (pc_fate = "dead")
      Sal never married. They say, in the Plain Word, that they never will. Nobody has ever been able to argue with them about it.
    *else
      You married Sal on the crest, among the hives, in the rain. They said their vows in the Plain Word. So did you, whatever you'd sworn. The bees came out to watch.
      *achieve honey

*if (bound != "fell")
  *heading Ambrose Fell
  *if (fell_here)
    He was there. That's the thing people say about Master Fell now, at the College, when first-years ask about the man with the eel: [i]On Crown Night, he was there.[/i] He stopped pinning his cuffs. He let his chalk go blunt. The following Midwinter he walked down to the Oathing Hall and swore, for the first time in twenty-three years, a single small vow: [i]I will not run.[/i] It gave him almost no purchase at all. He said it was the best bargain he ever made.
  *else
    Fell wasn't on the crest on Crown Night. Nobody knows where he was. In the autumn he left the College, and Magistrate went with him, and the last anyone heard he was teaching in a village school on the Lisk coast, where nobody has ever heard of the Stay. Every year, on Midsummer, a letter arrives for the Warden with a Lisk postmark and nothing in it but a pressed sprig of heather.

*if (bound != "warden")
  *heading Agnes Brathwaite
  *if ((revealed_public) or (world != "keystone"))
    The Warden gave evidence to the Council's inquiry for eleven days. On the first morning she stood up in the Council House and said, "I swore to the Council, as a condition of my appointment, that I would not speak of the Stay's condition beyond the Board. I am about to break that vow." The snap put her in the infirmary for a month. When she came out she testified for ten more days, in the Plain Word, every word of it true. The Council has not appointed a Warden under a gag since.
  *else
    The Warden kept her silence, and her office, and her vow. She retired at seventy, and went to live in a cottage on the fells above the lake, and walks down to the crest every morning to stand at the parapet for a while. People who pass her there say she looks like someone listening for a question.

*heading Win Mottram
*if (nan_state = "exposed")
  Win Mottram died in the Crowhill gaol, two winters after Crown Night, in a cell with no window on the river. She was awake.
*elseif (nan_sleeps)
  *if ((world = "held_many") or (world = "drained"))
    When the engineers took down the old Stay, stone by stone, three years after Crown Night, Win Mottram (ninety-one years old and seventy-four years awake) sat in her wheeled chair on Tanner's Hill and watched the last course of the wall come down. Then she went home to Number Nine, Mill Lane (the real one, in Hebble, with the mud scrubbed off the floor) and lay down, and slept for nineteen hours.
  *else
    She slept on Tanner's Hill that night, in the rain, sitting up, for the first time in thirty-one years. She slept most of the next week. When she woke up, she said, she'd dreamed of her mam.
  *achieve sleep_win
*elseif (nan_state = "stopped")
  The Stay stood, so Win Mottram never slept again. But she never pulled another thread, either. She kept knitting (white wool, every night) and in the mornings she didn't unpick it. By the time she died, awake, at ninety-three, she'd knitted a jumper for every child in the Rows.
*else
  The Stay stood, so Win Mottram never slept again. And every night, until the night she died, awake, at ninety, she pulled another thread.

*if (bound != "rilla")
  *heading Rilla Hesketh
  *if ((told_rilla) or (revealed_public) or (ally_rilla))
    She went to the Council after all, as she always said she would, and changed the Nethers, as she always said she would. The sirens went back up on every lock-house within the year. There are flood drills in every school. She says she learned what the Crown was for just in time to learn what the Council was for.
  *else
    She went to the Council, as she always said she would, and did good work, and never quite understood why Footing Watch looked at her the way it did on Crown Night.

*heading Hob Gorringe
*if ((world = "held_many") or (world = "drained"))
  Hob built the new dam. Not by himself, he'd say, but he was Chief Engineer of the Aske Works at thirty-one, the youngest in the city's history, and his name is on the plaque. He designed the sluices so they could be opened by a child. He says that was the whole point.
*elseif ((world = "flood") or (world = "sleepless"))
  Hob's runners woke four thousand doors in the Nethers that night. Afterwards he rebuilt the Nethers, higher up the hill, street by street. There's a bakery on the new Tanner's Row. It makes a loaf in the shape of a dam, every Midwinter.
*else
  Hob graduated, and went to work for the Council's engineers, and spent twenty years drawing a dam that doesn't need a person in it, and taking the drawings to every Councillor who would look at them.

*heading Honoria Varnish
*if (honoria_turned)
  Honoria Varnish resigned from the Council the week after Crown Night, and gave evidence to the inquiry, and was not prosecuted, though she could have been. She lives quietly on Crowhill now. She has taken up gardening. Her son says she's terrible at it, and that it's the first thing he's ever seen her be terrible at, and that she seems happier.
*elseif ((honoria_exposed) and (tolly_plan = "court"))
  Honoria Varnish was tried for cradle-swearing under section nine of the Oathing Act, and convicted, and fined, and struck off the Council. She lives on Crowhill in a house with the shutters closed.
*elseif (honoria_exposed)
  Honoria Varnish lost her seat at the next election. She still lives on Crowhill. She still believes she was the only adult in the room.
*else
  Honoria Varnish chairs the Stay Committee still. The Council re-elected her unopposed.
  *if (path = "council")
    She has, in her desk, a list of the people who will sit on the Council after her. Your name is at the top.

*heading Your family
*if (bg = "levy")
  *if ((world = "flood") and (not evac_mam))
    Mam heard the hum stop. She knew what it meant: she'd known water all her life. She got Pip up Tanner's Hill before the wave came, and then she went back down for the Frasers at Number Four, who were old, and the Dunns at Number Six, who had a baby.

    She didn't come back up.

    Pip lives with you now. He's twelve. He still draws the Stay, even though it's gone. He draws it with a face. It isn't smiling anymore.
  *elseif (world = "flood")
    Mam cranked the old siren at Number Three Lock until her arms gave out, and the whole Cut heard it, and ran. Number Three Lock is gone. Mam and Pip aren't. Pip tells everyone at school that his mother saved the Nethers with a hand-crank. It's nearly true.
  *else
    Mam still keeps Number Three Lock.
    *if (world != "keystone")
      It's quiet now, without the hum. She says she can't sleep for it. Pip is fourteen, and wants to be an engineer. He's drawn the new dam a hundred times. It doesn't have a face. He says dams shouldn't need faces.
    *else
      The hum still walks the spoons across the table. Pip is fourteen now, and has decided he's going to sit the Levy exam. He wants to go up the Weir Lift. He wants to know who's in the wall.
*elseif (bg = "legacy")
  *if ((honoria_exposed) and (report_source = "mother"))
    Your mother gave evidence at the inquiry. She said, "I told them what was legal. I never told them what was right. I should have." She was not prosecuted. She resigned as counsel to the Committee and went into practice in the Nethers, for tenants, for nothing much. Your father says she's never been happier. She says he's never been more wrong. They both come to your door on Sundays.
  *else
    Your mother still sits as counsel to the Stay Committee. She's never once asked you about Crown Night. On your birthday, every year, a letter comes from Crowhill with one line in it, in her neat hand: [i]Be careful what you carry.[/i] You've come to think it means she's proud of you.
*else
  *if (wept)
    You wrote to your mother in Lisk the week after Crown Night. It was the shortest letter you ever sent her. [i]I cried.[/i] She wrote back by return: [i]Good. Come home when you can. The minister can say what he likes.[/i]
  *else
    You wrote to your mother in Lisk the week after Crown Night, and told her everything you could, which wasn't much. She wrote back: [i]Do not do anything that frightens you unless it must be done. I suppose it had to be done.[/i]

*heading You
*if (bound = "pc")
  You are the Keystone. You sit in the red armchair in the heart of the Stay with your hands on the brass rails, and hold the Heldwater off Scarrow, and you will do so for the rest of your life.

  It's not what anyone thinks. It's heavy, and then it's just heavy. You can feel the whole city at your feet. You can feel the rain, now, a little, through four hundred feet of stone; you think you learned how from Hester. People come up the Crown Stair on Sundays. The first-years come, terrified, and you tell them very rude jokes.
  *if (revealed_public or honoria_exposed)
    Somewhere downstream, a mile up the valley, the city is building a dam that won't need anyone in it. Fifteen years, they say. You intend to be the last.
  *else
    You don't know if they'll ever build a dam that doesn't need someone in it. You've started making them ask.
*elseif (pc_fate = "dead")
  Your name is the first on the memorial on the crest, above the notch where the Stay broke. Somebody carved it, and somebody else keeps it clean. Under it, in smaller letters, is one line, and it was Tamsin who chose it, or Sal, or Tolly, or Hob; they argued about it for a month. [i]Held the breach until the last of them were out.[/i]
*elseif (path = "runner")
  You live in a town on the coast, a long way from Scarrow, where nobody has heard of the Stay. You teach, a little. You don't talk about the College. On Midsummer night, every year, you don't sleep. You lie awake and listen for a hum that isn't there.
  *if (bound = "fell")
    Every year a letter comes with a Scarrow postmark. It's from the Keystone Chamber, dictated to a first-year, in a voice you'd know anywhere. [i]Nothing to forgive,[/i] it says. [i]Nothing to forgive. Come and see me.[/i] You never go. One year, you think, you will.
*elseif (path = "council")
  You finished at the College top of your year. You went straight to the Council. You're very good at it. You understand, now, better than anyone, that order is a kindness, and that a city is a promise, and that somebody has to keep it.

  In twenty-two years, the Keystone will begin to fail. You'll be on the Committee by then. You'll open the Crown to first-years.
*elseif (world = "held_many")
  You sat your shifts in the Holding, three nights a week, until the Holding was released. You finished at the College, eventually, though you missed a great many lectures. Afterwards (well, afterwards is a long story, and it's yours). But every year on Midsummer you go down into the old Hebble Gallery, which is kept now as a chapel, and sit for an hour in the seat marked THOMAS PRUITT, 15, with your hands on the cold rails. It doesn't carry anymore. You go anyway.
*elseif (world = "drained")
  You turned the wheels. That's what they say about you in the Nethers, and in the Rows, and in Hebble, which has children in it again: [i]that's the one who turned the wheels.[/i] You finished at the College, eventually. What you did after that is a long story, and it's yours.
*elseif (world = "sleepless")
  You and Win Mottram were charged with the destruction of the Stay. The trial lasted four months and split the city down the middle. She died, asleep, during the second month. You were acquitted, in the end, on a single juror, a lock-keeper from the Nethers who said she'd heard the hum drop every night for a year and that nobody on Crowhill ever had. You don't live in Scarrow anymore. You go back, every Lammas, to hear the Hebble bell.
*elseif (world = "flood")
  You were on the crest when the wall went, and on Tanner's Hill at dawn, and in the Nethers for a year afterwards, digging. You never finished at the College. There wasn't a College anymore. What you did after that is a long story. Most of it is about building things that don't need anyone to hold them up.
*else
  You finished at the College. Every Sunday for the rest of your life, you've climbed the Crown Stair with biscuits for whoever is in the chair. You've never missed one.
*if (vow_door and (broke != "vow_door"))
  *achieve every_door
*if (vow_name and (broke != "vow_name"))
  *achieve nobodys_name
*if (vows > 0)
  *if (broke = "")
    You kept your word, all the way to the end. Up here, that's the whole of the law.
  *else
    You broke your word, once, on the night it mattered. It cost you everything it bought. You've never been sorry.
*else
  *if (first_vow = "none")
    Nobody ever held you by your word. You walked out of the Oathing unsworn, and you walked through Crown Night the same way.
*page_break The end

[i]What is kept, keeps.[/i]
*return
`);
