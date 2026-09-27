HW.scene("ch3", String.raw`
*chapter 3 The Gallery
*temp comp ""
*if (entered)
  *set comp "Hob"
*elseif (second_of = "tamsin")
  *set comp "Tamsin"
*elseif (second_of = "tolly")
  *set comp "Tolly"
*else
  *set comp "Sal"
*temp t1 0
*temp lingered false
*temp tamsin_left false
*temp helped_tamsin false

The first trial of the Crown is run at night, at the end of the autumn term, on a night of hard frost.

By then the College has settled into its winter shape: fires in the common rooms, fog on the lake every morning, the hum in the Footings a little louder in the cold. You have learned the eight hundred and six steps well enough to climb them half-asleep. You have learned that Stay stew is mostly turnip. You have logged four hundred and twelve weep-holes, and your fingers have started, all by themselves, to count drips.

*if (reported_frays)
  You have also learned to find the frays. Since you reported the first one, Dr. Marchbank has had every Watch chalking them, and the galleries are covered in little white crosses now, dozens of them, sometimes three or four to a yard. Nobody says what they are. The crosses keep appearing.
*elseif (know_frays)
  You have also, alone, found eleven more of the white threads. You chalk each one with a small cross and tell nobody. The first one has moved a foot and a half along its joint since the night you found it.

The rules of the Gallery are read out on the crest at midnight, by the Warden, in front of every entrant and every second, with the whole College shivering behind them in scarves.

"The entrants will descend into the lower galleries at intervals of five minutes, in the order drawn. Each will make their way to the Sump, ring the Sump bell, take a brass tally from the hook beneath it, and return here. The order of return decides the placing. Leaning is permitted. Hindering another entrant is forbidden." A pause. "Helping one is permitted. It is rarely done."

There are nine entrants in all. Rilla Hesketh draws first and grins and bows to the crowd, and gets a cheer that echoes off the lake. Then a Sluice Watch fourth-year, then two from Gallery Watch, and then {@entered|you|{@second_of = "tamsin"|Tamsin, with you as her second|{@second_of = "tolly"|Tolly, with you as his second|Sal, with you as their second}}}, and then the rest of Footing Watch after, five minutes apart.

Hob finds you before the start. He has a map: a real one, on linen, drawn in brown ink thirty years ago by some long-dead Gallery Watch captain, with every passage of the lower Stay on it, and every drain, and every stair.

"Three ways down," he says, running a thick finger over it. "The Long Stair: safe, slow, and everyone takes it. The East Culvert: flooded, fast, forty feet underwater through a drain, cold enough to stop your heart. And this." His finger stops on a passage that runs straight as a ruler from the Third Gallery toward the Sump. At its mouth someone has drawn a heavy black bar and written, very small: [i]H.G. — SEALED.[/i]
*if (lore >= 35)
  You know those letters. You've heard them in the library, whispered by third-years: [i]the Hebble Gallery.[/i] A part of the Stay sealed so long ago nobody remembers why.
*else
  "What's H.G.?" you ask. Hob shrugs his enormous shoulders. "Nobody knows. It's been sealed since before the Warden's time. There's a door." He taps it. "But it's a straight line to the Sump."
*page_break Into the dark

*if (entered)
  At twenty-five past midnight the marshal drops her flag, and you and Hob go down.
*else
  At twenty-five past midnight the marshal drops her flag, and you and {comp} go down.

The first flights are easy: the familiar stairs, the Second Gallery, the post room, the lamps turned down to blue beads. Then the lamps stop. Below the Third Gallery the Stay is not for students. The steps are worn into troughs, the walls are furred with white mineral, and the air smells of iron and old water. Your lantern makes a small gold room around you that moves as you move, and outside it there is only the hum, louder with every flight.
*if (second_of = "tolly")
  Tolly is talking. He has been talking since the flag dropped, in a steady cheerful stream, about his grandfather's yacht and the proper way to eat an oyster and a man he once saw at the races who could whistle through his ears. He is holding your coat-tail in his fist like a child. You let him.
*elseif (second_of = "sal")
  Sal walks the dark as if it's home. They put a hand on the wall now and then, lightly, the way you'd touch a horse's flank, and once they stop, and tilt their head, and say, "She's awake. She knows we're down here." They sound pleased about it.
*elseif (second_of = "tamsin")
  Tamsin goes down the steps two at a time, fast and silent, with her lantern held low so the light doesn't blind her. She doesn't speak. Once, when you slip on the wet stone, her hand shoots out and grabs your collar and hauls you upright, and lets go, all without breaking stride. [i]Giving,[/i] you think. She can give. She just can't take.
*else
  Hob goes first, stooping under the low arches, and hums to himself very softly: B-flat, exactly in tune with the wall. "Habit," he says, when you ask. "Keeps me honest."

At the foot of the Third Gallery stair the way splits three ways, just as Hob's map said.

*choice
  #The Long Stair. Slow and certain. Everybody takes it for a reason.
    *set bold %-5
    *goto route_stairs
  #The East Culvert. Forty feet underwater, through the drain, in the dark.
    *set bold %+10
    *goto route_culvert
  *selectable_if ((vow_door) or (finesse >= 45) or (lore >= 45)) #The sealed door marked H.G. A straight line to the Sump, if you can get through it.
    *set bold %+5
    *goto route_door

*label route_stairs
The Long Stair goes down in a square spiral around a black shaft, three hundred and forty steps, each one worn into a dip in the middle by seventy years of Watch boots. It is slow. It is safe. Halfway down you hear someone below you, and see a lantern bobbing: one of the Gallery Watch entrants, who drew ahead of you. You don't gain on them. You don't lose ground either.
*if (second_of = "tolly")
  Tolly counts the steps out loud, all three hundred and forty of them, and by the bottom the counting has turned into a kind of prayer.
*set t1 1
*goto sump_stair

*label route_culvert
The East Culvert is a round stone drain, just wide enough to crawl into, and it slopes down into black water that doesn't move. Somewhere at the other end, forty feet away, it comes up in the Sump Stair. You can't see the other end. You can't see anything past the first yard of water.

*if (second_of = "tolly")
  Tolly looks at the water. He goes completely still.

  "I can't," he says. "I'm sorry. I can't. I'll drown. I'll panic and I'll drown and my mother will have to be told, and she'll be so [i]annoyed.[/i]"

  *choice
    #"Then we take the stairs. It doesn't matter, Tolly."
      *set tender %+10
      *set rel_tolly +10
      He looks at you as if you've given him a pardon. You take the stairs. You lose time. Tolly, halfway down, says quietly, "Thank you," and nothing else for three hundred steps.
      *set t1 1
      *goto sump_stair
    #"Hold my belt. Breathe when I breathe. Don't let go."
      *set bold %+5
      *set rel_tolly +5
      He holds your belt. You fill your lungs, and he fills his, and you go under together.
*elseif (second_of = "sal")
  Sal looks at the water with interest. "I've never done this," they say. "I've always wanted to." They take three long breaths, very calm, and nod to you.
*elseif (second_of = "tamsin")
  "I'll go first," says Tamsin. "If I stop kicking, pull my ankle." She doesn't wait for an answer. She's gone into the black water like an otter.
*else
  Hob looks at the culvert, then at himself, then at the culvert. "I'll not fit," he says. "I'll take the stairs and meet you at the bottom. Mind the cold. It hits you in the chest."

The cold hits you in the chest.

It's like being punched by the whole lake at once. Every muscle you own locks tight, and your lungs try to empty themselves, and the dark is absolute. You pull yourself along the drain by the slimy stone, hand over hand, and your lungs start to burn at ten feet, and scream at twenty, and at thirty—

*if ((nerve >= 40) or (bold >= 65))
  *set t1 2
  *set nerve +3
  —at thirty you stop thinking about it, because thinking about it is what kills you, and you just pull, and pull, and your head breaks the surface in the Sump Stair in a gasp that echoes like a gunshot. You're through. You're shaking so hard your teeth rattle, but you're through, and you're well ahead of anyone on the stairs.
  *if (second_of = "tolly")
    A second later Tolly comes up beside you, spluttering, his hand still locked on your belt. He is laughing, or sobbing, or both. "I didn't die," he says. "Did you see? I didn't die."
*else
  *set t1 0
  *set nerve +2
  —at thirty you panic. You can't help it. Your body decides for you: it turns you round and hauls you back the way you came, and you come up in the culvert mouth with your lungs on fire and your eyes streaming, retching lake water onto the stones.

  There's nothing for it but the stairs. By the time you've got your breath back and climbed down all three hundred and forty of them, soaked and shaking, you've lost more time than you'd have saved.
  *if (second_of = "tamsin")
    Tamsin is waiting at the bottom. She's been waiting some time. She looks at you, drenched and grey, and says only, "The cold gets everyone once," and doesn't say anything else about it, which is its own kind of kindness.
*goto sump_stair

*label route_door
The door is where the map says it will be: at the end of a short dead-end passage off the Third Gallery, low and round-topped and made of iron gone black with age. There's no handle. There's a lock the size of a fist, and across the lock, pressed into a blob of old red wax, is a seal: the Council's crest, and a date seventy-one years gone.

*if (vow_door)
  You put your palm flat on the iron and lean: not on the lock, but on the simple idea that there is a way through. The wax cracks. The lock turns over with a clunk like a dropped anvil, and the door swings inward on a breath of cold, stale, humming air.
*elseif (finesse >= 45)
  You get the lock open the slow way, with two bent hairpins and a thin lean of purchase no stronger than a breath, feeling for each ward the way Master Fell taught you to feel for the edges of a cube of chalk dust. It takes four minutes. The wax cracks. The door swings inward on a breath of cold, stale, humming air.
*else
  The lock is a decoy. You've read about this: in Thwaite's day, the Sworn masons hung their heavy doors on counterweights. Hob's map has a tiny notch drawn on the frame. You find the notch, and the iron ring hidden behind it, and pull, and somewhere in the wall a weight drops with a long grinding rattle. The wax cracks. The door swings inward on a breath of cold, stale, humming air.

Beyond it is the Hebble Gallery.

It's a long vaulted room, much longer than your lantern can reach, and it is full of iron.

Down both sides, in rows, stand iron seats. They are not chairs exactly. Each one is a low iron stool bolted to the floor, with two iron rails rising in front of it at the height of a sitting person's hands, worn smooth and bright where hands have held them. From the back of each seat an iron rib runs up into the wall and disappears into the stone. There are dozens. Scores. They go on past the edge of the light, row after row, like pews in a drowned church.

Above each seat is a small brass plate with a name on it.

The hum in here isn't one note. It's a chord: dozens of notes, very faint, stacked on top of each other, under the great B-flat of the wall, like a choir heard through a closed door.

And everywhere, over everything, are the white threads. Not one or two, like the frays in the galleries: hundreds. They crawl over the iron like frost, like the work of some enormous patient spider, pulsing, pulsing, all pulling the same way.
*set saw_gallery true
*achieve two_hundred_six
*journal Behind a sealed door in the lower Stay is the Hebble Gallery: rows of iron seats with handrails, each seat with a name above it, all wired into the wall. The frays are thickest there.

*if (second_of = "tamsin")
  Tamsin has stopped dead in the doorway. She lifts her lantern to the nearest brass plate, and reads it, and reads the next, and the next.

  "These are Hebble names," she says. Her voice has gone strange and high. "Ashby. Mottram. Pruitt. Gethin. These are Hebble names. That's my great-grandfather. That's—" She's walking along the row now, faster, lantern up, reading. "Nan used to say the old ones held the wall with their hands. I thought she meant—I thought it was a [i]saying—[/i]"

  She stops in front of one seat. The frays are thicker here than anywhere, a whole white nest of them, radiating out from the iron like cracks from a stone thrown through glass. The plate above it says: WINIFRED ASHBY, 17.

  "That's my Nan," says Tamsin Mottram. "Ashby was her name before she married. That's my Nan's seat."
  *set rel_tamsin +10
  *journal One seat in the Hebble Gallery is marked WINIFRED ASHBY, 17: Tamsin's grandmother. The frays are thickest around it.
*elseif (second_of = "sal")
  Sal stands very still in the middle of the aisle, with their eyes closed, listening to the chord.

  "This is what she hears," they say softly. "All the time. This is the two hundred and six." They open their eyes. "I didn't know they were [i]real.[/i] I thought she meant it the way people mean ghosts."
*elseif (second_of = "tolly")
  "Oh," says Tolly, in a very small voice. "Oh, I don't like this at all. This is a room where something happened." He reads a plate, and another. "They were children, some of them. This one says fifteen."
*else
  Hob lifts his lantern and turns in a slow circle, and for once his big calm face is not calm at all. "Load path," he says, under his breath. "Every seat's a load path. They're all tied into the wall." He puts his hand on one of the iron ribs, and snatches it back. "It's still live. After seventy years. It's still [i]carrying.[/i]"

*choice
  #Stop. Read the names. Somebody should.
    *set lingered true
    *set tender %+10
    *set lore +5
    You walk slowly down the nearest row with the lantern held up, and read them. ANNIS GETHIN, 41. JOHN ASHBY, 38. MARY ASHBY, 36. THOMAS PRUITT, 15. ELLEN MOTTRAM, 52. Two hundred and six, if the rows go on the way they seem to. Some of the plates have a second date scratched into the brass beside the name, rough, as if with a nail. You realise they're the dates people died.

    Near the middle of the row, one seat has more white threads spread around it than any other, a whole nest of them. The name above it is WINIFRED ASHBY, 17.
    *if (second_of != "tamsin")
      *journal One seat in the Hebble Gallery is marked WINIFRED ASHBY, 17. The frays are thickest around it.
    *set t1 1
  #Go on. This is a race. Whatever this is, it will still be here tomorrow.
    *set bold %+5
    You make yourself turn away. At the far end of the gallery the iron ribs all run together into one great black iron spine that goes straight up through the ceiling, toward the heart of the Stay. Beyond it there's another door, unsealed, and beyond that a short stair, and at the bottom of the stair you can hear water. The Sump. You're nearly there, and you're well ahead of everyone.
    *set t1 3
*goto sump_stair

*label sump_stair
*page_break The Sump Stair

All the ways down come together at the Sump Stair: a last steep flight of iron steps bolted to the wall, with gratings for landings, dropping into the lowest chamber of the Stay. The Sump is flooding. That isn't supposed to happen. The water is already over the bottom landing and climbing, brown and quick, with white threads writhing in the stone above it.

*if (second_of = "tamsin")
  *goto pinned_you
*goto pinned_tamsin

*label pinned_tamsin
Halfway down the flight, a landing has given way.

The grating has torn out of the wall on one side and dropped a yard, and pinned under the corner of it, waist-deep in rising water, is Tamsin Mottram. Her leg is caught between the iron and the step. Her lantern is out. Her second, Aggie Pruitt from the mill towns, is nowhere; gone for a marshal, you find out later. Tamsin has both hands braced on the grating and is heaving at it, and it isn't moving, and the water is at her ribs.

Above you on the stair, a lantern is climbing: Rilla Hesketh, on her way back up with her tally already in her fist. She sees Tamsin. She stops. "I'll fetch the marshal," she calls down. "Two minutes!" And she's gone, taking the stairs three at a time.

Two minutes, you think. The water is rising a hand's breadth a minute.

Tamsin sees you. Her face does something complicated.

"Go on," she says through her teeth. "It's a race. Go on."
*if (second_of = "sal")
  "No," says Sal beside you, quietly and at once. "Not like that. I don't want to win like that." They look at you. "Your choice. You're my second. But that's what I want."
*elseif (second_of = "tolly")
  "Oh, [i]God,[/i]" says Tolly. "Right. Right. I'm going to lose anyway. Let me lose usefully." He's already starting down the steps.

*label pinned_choice
*choice
  *if (not know_tamsin_vow) *disable_reuse #Grab her hand and pull her out.
    *set tender %+5
    You get down beside her on the stair and grab her wrist, and she screams.

    It isn't the leg. It's her hand. Her fingers have gone rigid, clawed, refusing to close around yours. Her whole arm is shaking with the effort of not taking the help. "Don't," she gasps, "don't, I [i]can't,[/i] let go, let [i]go—[/i]" You let go. She sags against the grating, grey-faced, with the water at her chest.

    She's sworn, you realise. Something about taking. She would rather drown than take your hand.
    *set know_tamsin_vow true
    *goto pinned_choice
  *selectable_if ((know_tamsin_vow) or (sway >= 35)) #"I'm getting you out, and you'll owe me for it. Every bit of it. That's the deal."
    *set helped_tamsin true
    *set sway +3
    *set rel_tamsin +15
    *set tender %+5
    Something unlocks in her face. "Owed," she says. "Owed. Deal. [i]Deal.[/i]" And when you reach for her hand, her fingers close on yours as easily as anyone's.

    You get your shoulder under the grating and heave, and she pulls, and her leg comes free with a sound you don't like. She crawls up onto the dry step above and lies there gasping, holding her shin.

    "I always pay my debts," she says, when she can talk. "Remember that."
    *achieve owed
  *selectable_if ((nerve >= 35) or (purchase >= 30)) #Don't touch her. Lift the grating, and let her pull herself free.
    *set helped_tamsin true
    *set bold %+5
    *set rel_tamsin +10
    *if (vow_hand)
      You lean the way Fell taught you, [i]hold,[/i] and the grating lifts a hand's breadth and stays there, trembling in the air.
    *elseif (purchase >= 30)
      You lean on the iron with everything you've got, and it groans and rises a hand's breadth.
    *else
      You brace your back against the wall and your boots against the grating and shove until something in your spine creaks, and the iron rises a hand's breadth.
    It's enough. Tamsin wrenches her leg out from under it and hauls herself up onto the dry step, without once touching you.

    She lies there gasping, holding her shin. After a while she says, "You didn't give me anything. You lifted a grating." A pause. "I'll allow it."
  #Go on. She told you to. It's a race, and a marshal is coming.
    *set tamsin_left true
    *set bold %+5
    *set tender %-10
    *set rel_tamsin -5
    You go past her. It's the hardest ten steps you have ever taken. She doesn't call after you. When you look back from the bottom, she has both hands on the grating again and her jaw set, and she isn't looking at you at all.
*if (helped_tamsin)
  *set t1 -1
  *set standing +5
  *if (second_of = "sal")
    Sal nods, as if you've confirmed something they'd hoped about you. "Thank you," they say. "Now let's go and ring a bell."
  *elseif (second_of = "tolly")
    Tolly, soaked to the armpits, beams at you. "Look at that. We're heroes. Mother will be livid."
*goto sump

*label pinned_you
Halfway down the flight, a landing gives way under you.

There's a shriek of tearing iron and then you're in the water, and the grating is on top of you, and your leg is caught between the iron and the step. The water is at your ribs, brown and cold and rising fast. You heave at the grating. It doesn't move.

Tamsin is already below you, three steps from the bottom, the tally hook in sight. She turns and looks back up at you.

For one long second you watch her do the sum. The bell is right there. Rilla Hesketh is somewhere behind you both. This is the thing she came up the Weir Lift for.

Then she's climbing back up the stairs toward you.

She puts her back to the wall and her boot to the grating and says, under her breath, [i]"Hold,"[/i] and leans, and the iron lifts, slowly, screaming. "Out," she says. "Out, now, [i]move.[/i]" You drag your leg free. She lets the grating drop with a crash that echoes all the way up the shaft.

You're both gasping. You open your mouth to thank her, and she points a finger in your face.

"I'm not taking anything," she says. "I'm [i]giving.[/i] It's allowed. Shut up." Then, after a second, grudgingly: "And now you owe me."
*set rel_tamsin +15
*set t1 -1
*goto sump

*label sump
*page_break The Sump

The Sump is the lowest room in the Stay. It's a round stone chamber, high as a chapel, with water on the floor and water running down every wall, and at the center, hanging from a chain that disappears into the dark above, is the Sump bell: bronze, green with age, big enough to stand inside. A marshal sits on a dry ledge beside it in oilskins, with a lamp and a book, looking bored and damp.

You ring the bell.

It's louder than anything you've ever heard. The note goes up the walls and into the stone and comes back doubled, and for a second the whole Stay seems to ring with it, B-flat, perfectly in tune, like the wall is answering.
*if (know_frays)
  In the lamplight you can see the frays in the Sump walls, thick as veins. They are all pulling the same way: out, through the stone, downstream.
You take a brass tally from the hook, cold and heavy, stamped with a crown. The marshal writes something in her book without looking up.

And from somewhere far above, faint through four hundred feet of stone, you hear someone singing, a woman's voice, straining a little, holding a note against the ring of the bell until the bell gives up and the wall is quiet again.

*if (t1 >= 2)
  You're back on the crest before the moon has moved a finger's width.
*else
  The climb back up is endless. By the time you come out onto the crest your legs are shaking and the sky over the fells has begun to go grey.

*label results
*page_break Dawn on the crest

*temp team ""
*temp teamname ""
*if (entered)
  *set team "pc"
  *set teamname name & " " & surname
*elseif (second_of = "tamsin")
  *set team "tamsin"
  *set teamname "Tamsin Mottram"
*elseif (second_of = "tolly")
  *set team "tolly"
  *set teamname "Tolly Varnish"
*else
  *set team "sal"
  *set teamname "Sal Quaile"
*temp place 4
*if (t1 >= 3)
  *set place 1
*elseif (t1 = 2)
  *set place 2
*elseif (t1 = 1)
  *set place 3
*if (team = "tamsin")
  *comment Tamsin is fast; with you as her second she places a step higher than your route alone would.
  *if (place > 1)
    *set place -1
*if (team = "tolly")
  *if (place < 4)
    *set place +1
*set t1_score t1
*temp p1 ""
*temp p2 ""
*temp p3 ""
*temp slot 1
*temp who ""
*temp whoname ""
*comment the rest of the field, in their natural order
*set who "rilla"
*set whoname "Rilla Hesketh"
*gosub award
*if ((team != "tamsin") and (not tamsin_left))
  *set who "tamsin"
  *set whoname "Tamsin Mottram"
  *gosub award
*if (team != "sal")
  *set who "sal"
  *set whoname "Sal Quaile"
  *gosub award
*set who "other"
*set whoname "Dunstan Oakes of Sluice Watch"
*gosub award
*if (team != "tolly")
  *set who "tolly"
  *set whoname "Tolly Varnish"
  *gosub award
*set who "other"
*set whoname "Maud Kettle of Gallery Watch"
*gosub award
*comment the player's team
*if (place <= 3)
  *if (team = "pc")
    *set cs_pc + (4 - place)
  *elseif (team = "tamsin")
    *set cs_tamsin + (4 - place)
  *elseif (team = "sal")
    *set cs_sal + (4 - place)
  *else
    *set cs_tolly + (4 - place)
  *if (place = 1)
    *set p1 teamname
  *elseif (place = 2)
    *set p2 teamname
  *else
    *set p3 teamname

The Warden reads the placings at dawn, on the crest, with the lake going silver behind her and the whole College standing in the cold.

"First: {p1}. Second: {p2}. Third: {p3}."

*if (place = 1)
  *if (team = "pc")
    *achieve first_through
    *set standing +15
    For a moment you don't understand that it's your name. Then Footing Watch is roaring, all of it, the mill-town pair jumping up and down and Hob lifting you off your feet as if you weigh nothing at all, and the Crest table is clapping with good grace, and Rilla Hesketh walks over and shakes your hand. "Well run," she says, and means it. "I'll have you in the Question."
  *else
    *set standing +8
    Footing Watch goes up in a roar. {teamname} looks, for a moment, completely stunned.
*elseif (place <= 3)
  *set standing +4
  Footing Watch cheers anyway, loud enough to make up the difference.
*else
  *if (team = "pc")
    Your name isn't read at all. Hob puts a hand on your shoulder, heavy as a sandbag, and leaves it there.
  *else
    {teamname}'s name isn't read at all.
*if (tamsin_left)
  Tamsin Mottram comes up out of the stairwell a quarter of an hour after everyone else, limping, soaked to the neck, with a marshal at her elbow and a tally in her fist. She walks straight past you without looking.
*elseif (helped_tamsin)
  Tamsin Mottram is standing at the back of the crowd with her weight on one leg and a bandage round her shin. When your eyes meet, she nods at you. Once. It's the nod of someone keeping a ledger.
*if ((team = "tolly") and (place <= 3))
  Tolly looks as if he's been handed a live eel. "That's not supposed to happen," he whispers. "I wasn't supposed to be [i]good[/i] at this."
*page_break The crest, that night

That night Footing Watch builds its fire in a brazier on the crest, the way every Watch does on the night of the Gallery, and drinks mulled cider, and sings rude songs about the other three Watches, and watches the lights of Scarrow come on four hundred feet below like a spilled box of sparks. The Heldwater is black and perfectly still on the other side of the road. Somewhere under your feet, Hester is humming.

There's time, before the cider runs out, for a quiet word with a couple of people.
*temp chats 0
*label party
*if (chats >= 2)
  *goto party_done
*choice
  *hide_reuse #Tamsin is by herself at the parapet, looking at the water.
    *set chats +1
    *if (tamsin_left)
      She hears you coming and doesn't turn round. "You did right," she says, before you can speak. "It was a race. I told you to go." A pause. "I'd have done the same." Another pause, longer. "I think."

      *choice
        #"You wouldn't have. That's the difference between us."
          *set rel_tamsin +5
          *set candor %+5
          She turns and looks at you properly, and her mouth twists. "Don't," she says. "Don't make me into a saint. I'd have gone past you if it meant the Crown." She looks back at the water. "I'd have hated myself after. I wanted to see if you would."
        #Just stand beside her and look at the lake.
          *set rel_tamsin +5
          You stand beside her. After a while, without looking at you, she hands you her cup of cider, and you drink from it, and hand it back. It's not forgiveness. It's something like it, in the Rows dialect.
    *else
      *set rel_tamsin +5
      *set rom_tamsin +5
      *if (saw_gallery)
        "Seventy-one years," she says, without turning round. "Those names have been down there in the dark for seventy-one years and nobody's even [i]read[/i] them." Her hand is at the key on its string. "They told us Hebble was paid. They told us it was bought fair. That room wasn't bought. That room was [i]made.[/i]"
      *else
        "My Nan says you can hear the Hebble bell from up here on still nights," she says, without turning round. "Under the water. She says it rings for the ones who stayed." She snorts. "I've never heard it. Doesn't stop me listening."

      *choice
        #"Tell me about her. Your Nan."
          *set rel_tamsin +5
          *set rom_tamsin +5
          Tamsin is quiet for a long time. "She's eighty-eight," she says. "She knits. She makes soup at three in the morning, because she doesn't sleep. She hasn't slept in thirty-one years, she says, and I believe her. She's the cleverest person I've ever met and she's never been past the fourth standard at school." Her voice softens in a way you've never heard. "She raised me. My mam works nights at the dye-works; she's got blue hands to the elbow. Nan raised me. She taught me every name in Hebble." She glances at you. "You'd like her. She'd eat you alive."
        #"You were magnificent on that stair. You know that?"
          *set rom_tamsin +10
          Her head turns. For a second she looks absolutely furious. Then you watch her hand move, as if to push the compliment away, and stop, and fall back to her side.

          "I haven't earned that," she says. But she doesn't say you're wrong. And the tips of her ears, in the brazier light, have gone red.
  *hide_reuse #Tolly is roasting chestnuts in the brazier and burning every one.
    *set chats +1
    *set rel_tolly +5
    *set rom_tolly +5
    He's burning them with tremendous style. He has an audience of second-years, and he's telling them about the time his mother's prize peacock got into the Council chamber, with actions. When he sees you he hands you a blackened chestnut as if it were a medal, and then, when the second-years have drifted off, he sits down on the parapet with his back to the drop and his feet dangling toward the lake, and goes quiet.

    "I wrote to her," he says. "Mother. Sunday, as instructed. I told her about the Gallery." He smiles at nothing. "She'll write back and tell me I did very well, or very badly, and either way she'll tell me what to do next, and I'll do it." He picks at the chestnut. "Do you know, I don't actually know what I'd do, if nobody told me. I've never found out. I lie awake sometimes trying to imagine it. Like trying to imagine a new color."

    *choice
      #"Then imagine it now. Right now. What do you want?"
        *set rom_tolly +10
        *set rel_tolly +5
        He looks at you for a long moment, and the firelight is in his eyes, and he doesn't say anything at all. Then he laughs, shakily, and looks away at the lake. "Give me time," he says. "I'm working on it. Ask me again at Midsummer."
      #"I'd tell you to eat that chestnut. It's the only one you haven't burned."
        *set tender %-5
        *set rel_tolly +5
        He looks down at the chestnut. It's charcoal. He eats it anyway, with enormous dignity, and chokes, and you pound him on the back, and he's laughing too hard to breathe. "That," he gasps, "is the first order I've ever enjoyed."
  *hide_reuse #Sal has brought a stone flask of mead from their own hives, and they're sharing it.
    *set chats +1
    *set rel_sal +5
    *set rom_sal +5
    It tastes of heather and smoke and something green. "The bees make it from the crest heather," Sal says. "It's the only thing in Scarrow that's grown on the Stay. Hester says it tastes like the wall. She says it tastes like being held."

    They're sitting a little apart from the fire, with their knees up, and they make room for you without comment.

    *choice
      #"Can I ask you something true?"
        *set rom_sal +10
        "Always," says Sal.

        You ask. It doesn't matter what; what matters is that they answer it completely, without hesitation or embarrassment, and then ask you something back, and you find that you answer it the same way. It's like walking out onto ice and finding it holds. When the flask is empty you're sitting shoulder to shoulder, and neither of you remembers deciding to.
      #"Does it really taste like being held?"
        *set tender %+5
        *set rel_sal +5
        Sal thinks about it. "I don't know," they say. "Nobody's ever held me like that." They hand you the flask. "You tell me."
  *hide_reuse #Rilla Hesketh has come over from the Crest Watch fire to toast the Footings.
    *set chats +1
    *set rel_rilla +10
    She's brought a bottle of something much better than cider, and she toasts Footing Watch loudly and sincerely, and gets cheered, and then she comes and sits beside you on the cold cobbles with her scarf pulled up to her nose.

    "I'm going to win, you know," she says, cheerfully. "It isn't arrogance. I've worked out the odds. I'll be Crowned at Midsummer and I'll sit on the Board for a year, and then I'll go to the Council, and in twenty years I'll be the one standing where the Warden stands." She tips her head back to look at the stars. "I'm going to change things. That's what the Crown is [i]for.[/i]"

    *choice
      #"What would you change?"
        *set rel_rilla +5
        "The Nethers," she says, at once. "Half of Scarrow lives under this wall and nobody on Crowhill has been down there since they were christened. The flood drills are a joke. The sirens don't work." She looks at you. "You'd be surprised how few people ask what I'd do with it. They only ask if I'll get it."
      #"And if the Crown's for something else?"
        *set candor %+5
        Rilla laughs. "Like what? It's a ceremony. A very old ceremony, with a very grand name." She stands and brushes off her coat. "The Crowned 'stands ready.' It's like the Mayor's Swordbearer. Nobody's drawn that sword in a hundred years." She smiles down at you. "Goodnight, Footing."

*label party_done
*page_break

It's after two when you head back to the Footings, down the eight hundred and six steps, alone.

On the landing above the Second Gallery somebody is sitting in the dark. You nearly fall over him. It's Master Fell, in his dressing gown, with a bottle of the College's cooking sherry beside him, three-quarters empty.
*set met_fell true

"Ah," he says, blinking up at you. "Footing. Well run. Well [i]run.[/i]" His careful bow is undone. His slippers aren't side by side. "They cheered you. I heard them. You could hear them all the way down here."

He takes hold of your sleeve, suddenly, hard.

"Don't win," says Ambrose Fell. "Whatever you do. Don't let them—don't let anyone you—" He stops. His face works. "Don't win," he says again, helplessly, like a man who's only allowed one sentence.

*choice
  #"Don't win [i]what,[/i] exactly? What aren't you telling us?"
    *set bold %+5
    *if (sway >= 35)
      *set hint_ask_warden true
      *set rel_fell +5
      You crouch down and look him in the eye, and hold his gaze until he looks away first. For a moment you think he's going to tell you. It's there, right behind his teeth. Then something closes, like a shutter.

      "Ask the Warden," he says, very low. "Ask her what the Crown is [i]for.[/i] Exactly those words. She can't lie. She won't say it unless you ask." He lets go of your sleeve. "And don't tell her I told you to. I'm a coward, Scholar. You should know that about me."
      *journal Master Fell, drunk: "Ask the Warden what the Crown is for. Exactly those words. She can't lie."
    *else
      He shakes his head, and keeps shaking it. "I can't," he says. "I'm sorry. I'm a coward, Scholar. You should know that about me. Everyone else does." He lets go of your sleeve, and picks up the bottle, and looks at it, and puts it down again.
  #Take the bottle away from him, gently, and help him up.
    *set tender %+10
    *set rel_fell +10
    He lets you. He's lighter than he looks. You get him up the stairs to his rooms on the Second Gallery, one careful step at a time, and at his door he holds on to the frame and says, not looking at you, "Twenty-two years. I used to be a Footing. Did you know that? I ran the Gallery too." He closes the door very gently in your face.
    *journal Master Fell ran the Gallery himself, twenty-two years ago, as a scholar of Footing Watch.
  #Leave him. He's a grown man and a master, and this isn't your business.
    *set tender %-5
    *set duty %+5
    You step round him and go on down. Behind you, in the dark, you hear him say, to no one, "Don't win," one more time, and then the chink of the bottle against the step.

*finish

*comment ------------------------------------------------------------------
*label award
*if (slot = place)
  *set slot +1
*if (slot <= 3)
  *if (who = "rilla")
    *set cs_rilla + (4 - slot)
  *elseif (who = "tamsin")
    *set cs_tamsin + (4 - slot)
  *elseif (who = "sal")
    *set cs_sal + (4 - slot)
  *elseif (who = "tolly")
    *set cs_tolly + (4 - slot)
  *if (slot = 1)
    *set p1 whoname
  *elseif (slot = 2)
    *set p2 whoname
  *else
    *set p3 whoname
*set slot +1
*return
`);
