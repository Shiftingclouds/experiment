HW.scene("ch1", String.raw`
*chapter 1 The Face of the Stay
The Weir Lift takes eleven minutes to climb the face of the Stay, and for the first four of them you can still tell yourself you are only going somewhere.

The car is a varnished wooden box the size of a pantry, hauled up four hundred feet of stone on a cable as thick as your wrist. Through the window slats Scarrow falls away beneath you: {~the dye-works bleeding blue into the river, the Cut shining like a knife laid down on a table, a hundred thousand chimneys all breathing at once|slate roofs packed tight as herring in a crate, the canal flashing between them, smoke going up from every chimney in the city like a congregation getting to its feet|the river, the Cut, the mills and the steeples, the whole smoking city shrinking to the size of a map somebody has left out in the rain}. On the other side, close enough to touch if the slats were wider, is the wall.

Close up, the Stay is not the clean white arch on the postcards. It is limestone gone the color of old teeth, streaked with long rust-red tears beneath its weep-holes, and it sweats. Water beads on it in the morning cold and runs down in threads. Somewhere behind it (you can't see it from here; nobody in Scarrow ever sees it from here) eleven miles of lake is leaning on the other side of this wall like a crowd against a door.

And the Stay hums. Everyone knows that. B-flat, the tuning-fork men say, though down in the city you stop hearing it about the time you're old enough to argue with your mother. Up here you can't not hear it. It comes up through the floor of the car and into the bones of your feet.

You have one hand on the brass rail. In the other, you are holding—

*choice
  #—a letter from home, gone soft as cloth from being folded and unfolded.
    *set bg "levy"
    *set nerve 30
    *set sway 25
    *set lore 15
    *set finesse 15
    *set purchase 5
    Mam's letter is mostly instructions. [i]Mind the lift. Mind the damp. Mind your manners with the Crowhill lot, and don't let them mind you.[/i] Folded inside it is the real letter: a drawing in wax crayon by your brother Pip, who is ten and believes this is the most important thing that has ever happened to anyone. He has drawn the Stay with a face. It is smiling. On top of it stands a figure with enormous hands, labelled YOU.

    You grew up at Number Three Lock on the Cut, in the lock-keeper's cottage, in the Nethers: the lowest wards of the city, right under the wall, where the hum is loud enough to walk the spoons across the table. You passed the Levy examination in the spring. The city pays your fees. In exchange the city owns seven years of you after you graduate, which Mam says is a better bargain than the mills ever offered anybody.

    The letter goes into your inside pocket, over your heart, because nobody's looking.
    *commit_stats
  #—nothing at all. My trunk went up yesterday with the family porter, and my hands don't know what to do with themselves.
    *set bg "legacy"
    *set lore 30
    *set finesse 25
    *set nerve 15
    *set sway 20
    *set purchase 5
    *set rel_tolly 45
    Your mother saw you to the lift station in her court coat, because the Council's Stay Committee sits at nine, and she is its counsel, and the Committee does not wait for anybody's child. Her parting instruction was [i]Be kind to the Varnish boy, and don't sign anything.[/i] Then she kissed your forehead as if she were stamping a document, and went.

    Your family has been Sworn for five generations. Your grandfather sat on the College's Board of Governors; his portrait hangs on Crowhill, looking disappointed in oils. Your parents are famous, in a small way, for the one thing they refused to do. When you were born they would not cradle-swear you. They would not stand over your crib and make a promise in your name, the way the old families still quietly do. The [i]Courier[/i] called your mother "a modern woman." Your grandmother didn't speak to her for a year.

    So you arrive at the College of the Stay the way almost nobody from Crowhill does: owing nothing, bound by no word but your own. Your hands still don't know what to do. You put them in your pockets. You take them out again.
    *commit_stats
  #—a ferry ticket from the Lisk crossing, worn through at the crease.
    *set bg "outsider"
    *set purchase 25
    *set nerve 25
    *set finesse 15
    *set lore 15
    *set sway 15
    *set bold %+10
    *set vow_weep true
    *set vows 1
    Lisk is two days across the Strait: flat country, grey sea, grey churches, and a God who does not approve of what they do in Scarrow. [i]Only God binds,[/i] the ministers say. A promise that takes hold of the world is a theft from Heaven.

    You were eight when you stole. It was at your father's graveside, in the wind, with your mother's hand crushing yours, and you said it the way children say things, [i]I won't cry, I won't, I will not weep,[/i] and something in the world heard you and said [i]done.[/i]

    You have not cried since. Not when your mother sold the boat. Not when the minister called it a curse in front of the whole congregation. Not on the ferry, watching Lisk go down into the sea behind you. Things happen near you, sometimes: a door that won't close, a lamp that won't gutter in a gale. When the College's recruiter came through the fishing villages asking after children like that, your mother packed your bag before he'd finished his tea.

    The ticket goes back into your pocket. You're not sure why you kept it.
    *commit_stats

You are not alone in the car.

Old Samuel runs the Weir Lift, and has run it, he told you at the bottom, for thirty years "without once dropping a scholar, though God knows I've been tempted." He stands at his levers like a man at the wheel of a ship, a stubby pipe clenched unlit in his teeth.

On the bench opposite sits a young woman in a laundress's coat, patched at both elbows, reading a book whose spine has been broken so many times it opens by itself. Her hair is scraped back hard. Her boots are older than she is. On a grubby string around her neck hangs a big iron key, rusted to the color of dried blood. She has not looked up once.

And beside you, taking up a good deal more of the car than his body strictly requires, is a young man in a coat that cost more than the lift. He has been talking since the doors closed.

"—which is why I've never trusted funiculars, as a class. Too much faith involved. A staircase, now. A staircase never asked anyone to believe in anything." He turns the full beam of his attention on you. He has a face like a well-bred spaniel's, all eyes and eagerness, and a voice that could order off a wine list or a cavalry charge. "Ptolemy Varnish. Tolly, please. Ptolemy sounds like a pharaoh with a head cold. And you are—"

*if (bg = "legacy")
  He stops. His eyes go wide.

  "Good God," says Tolly Varnish. "It's [i]you.[/i] Madame Orlova's Academy of Deportment, the winter I was nine. The foxtrot. You [i]bit[/i] me."

  *choice
    #"You deserved it. You trod on my foot six times."
      *set tender %-10
      *set rel_tolly +5
      "Seven," says Tolly, delighted. "I was keeping count too. I was going for a record." He shows you the back of his hand, where there is, you are almost sure, no scar at all. "I told everyone it was a duel."
    #"I've been meaning to apologize for nine years."
      *set tender %+10
      *set rel_tolly +5
      "Nine years! That's the most anyone's thought about me in my life." He looks genuinely touched, then genuinely suspicious. "You're not going to bite me again, are you? Only this coat is new."
    #"I'm sure I don't know what you're talking about."
      *set candor %-10
      *set rel_tolly +3
      "Oh, [i]very[/i] good," Tolly says, with admiration. "Deny everything. Mother says that's the whole of the law." His grin wobbles for a moment on the word [i]Mother,[/i] then steadies. "I've forgotten your given name, though. At home you were only ever 'the Biter.' Mother wouldn't have it said at dinner."
  Which leaves the small matter of your name.
*else
  He waits, eyebrows up, the picture of a man who has never once been refused an answer.

*choice
  *if (bg = "levy")
    #"Nell Tebbutt."
      *set name "Nell"
      *set surname "Tebbutt"
    #"Jory Hollin."
      *set name "Jory"
      *set surname "Hollin"
    #"Kit Pellow."
      *set name "Kit"
      *set surname "Pellow"
    #"Bryony Fairweather."
      *set name "Bryony"
      *set surname "Fairweather"
    #"Ned Ashworth."
      *set name "Ned"
      *set surname "Ashworth"
  *if (bg = "legacy")
    #"Clemency Lisle."
      *set name "Clemency"
      *set surname "Lisle"
    #"Peregrine Ashdown."
      *set name "Peregrine"
      *set surname "Ashdown"
    #"Octavia Merriwether."
      *set name "Octavia"
      *set surname "Merriwether"
    #"Lucian Vance."
      *set name "Lucian"
      *set surname "Vance"
    #"Rowan Everard."
      *set name "Rowan"
      *set surname "Everard"
  *if (bg = "outsider")
    #"Marit Terhorst."
      *set name "Marit"
      *set surname "Terhorst"
    #"Joren Vinke."
      *set name "Joren"
      *set surname "Vinke"
    #"Sanne de Wael."
      *set name "Sanne"
      *set surname "de Wael"
    #"Teodor Maas."
      *set name "Teodor"
      *set surname "Maas"
    #"Ilse Oosterling."
      *set name "Ilse"
      *set surname "Oosterling"
  #My name is something else.
    *input_text name Your first name:
    *input_text surname Your family name:

"{name} {surname}," Tolly repeats, as if he's filing it somewhere safe. "Splendid. Now, they'll make you do the Asking upstairs, they're fanatical about it, words being what everything up there is made of. So I may as well get in first. He, she, they, or something I haven't thought of?"

*choice
  #"He."
    *gosub pron_he
  #"She."
    *gosub pron_she
  #"They."
    *gosub pron_they

"{!they}," says Tolly, nodding. "And he, for me. Most days." He turns, emboldened, toward the bench. "And you, madam? You've read the same page four times since the bottom. I've been counting. It's a wonderful book, I'm sure, but it isn't [i]that[/i] wonderful."

Without looking up, the young woman says, "Mottram."

"Mottram! Splendid. Just Mottram, like a cathedral?"

She turns a page she hasn't read. "Tamsin Mottram. There. You've got my name and I've got yours, and we can stop."

"And it's 'she,' or—"

"She. Stop."

Tolly subsides for almost nine seconds, which you suspect is a personal record.
*page_break

At minute six, the Stay changes its note.

You feel it before you hear it: a sag in the floor of the world, like a stair that isn't there. The hum drops. Not much, half a tone, a string gone slack. Every hair on your arms stands up. Tamsin Mottram's head comes up out of her book like a dog's.

*set hum "A"
Then the car stops.

It stops the way a dropped plate stops: all at once, with a bang that goes through your knees. The cable sings. The car swings out from the wall and back, and for one sick second you can see straight down between the floorboards to the roofs of the Nethers, three hundred feet below, {~toy-small and very hard-looking|small as a model railway and not half so forgiving|tidy as a tray of type, and as hard}.

A weep-hole in the face of the Stay beside the car coughs. It actually coughs, a wet stone throat clearing. Then a jet of water as thick as your arm comes out of it sideways, straight through the window slats, and hits Tolly Varnish full in the chest.

"Ah," says Tolly. "[i]Ah.[/i] Is this—tell me this is a normal Tuesday."

"It's Thursday," says Tamsin, standing up.

Old Samuel is shouting. The great brake lever has snapped back on its ratchet and caught his hand against the iron housing. He heaves at it with the other, face gone grey, pipe gone somewhere. "Dog's thrown," he says through his teeth. "Safety dog's thrown and it's caught my—the brake'll hold, it'll hold, but I can't—somebody—"

The car swings again. The jet hammers the slats and shoves the car out from the wall, and each time it swings back its iron roof-shoe scrapes the stone with a noise like a knife on a plate.

*temp lift ""
*choice
  #"Samuel, hold still. Let me see your hand." The hurt man comes first.
    *set lift "samuel"
    *set tender %+15
    *set bold %+5
    *set sway +5
    You get down beside him, braced against the swing, and put both your hands over his trapped one. "Look at me. Not at it." His knuckles are white and bleeding where the lever bites. Under the lever there's a thumb-release, stiff with forty years of grease. You find it by feel and throw your whole weight on it while Samuel swears in a steady, almost devotional way, and the lever gives an inch, and his hand comes free, torn across the back.

    He clutches it to his chest. "Dog's still thrown," he pants. "It's on the rack, up top. Somebody's got to knock it back or we sit here till they winch us, and they'll not winch us in this."

    That's when Tamsin Mottram does the thing.
  #Climb out through the roof hatch and knock the safety dog free yourself.
    *set lift "roof"
    *set bold %+20
    *set nerve +5
    The roof hatch is a square of iron on a spring. You get a boot on the bench, a hand on the frame, and haul yourself up into the wind, which is waiting for you. Up here there is nothing between you and the whole sky except a greasy cable and your own two hands. The wall of the Stay slides toward you and away, toward you and away, weeping.

    You see the safety dog: an iron tooth, jammed crooked in a toothed rack on the guide rail. You kick it. It doesn't move. You kick it again and the car bucks, and your foot goes out from under you, and for a moment you are holding the cable with both hands and nothing else, and Scarrow is very, very far down.

    Then the car stops swinging. All at once, as if a hand has been laid flat on it.

    You look down through the hatch, and see why.
  #Stop. Look. Everyone is panicking about the wrong thing, and you want to know what the right thing is.
    *set lift "look"
    *set bold %-15
    *set lore +5
    *set finesse +5
    You make yourself stand still. The car swings out, swings back. The cable isn't slipping. The brake is doing exactly what a brake is for. Nobody is falling. What's wrong is smaller and stupider than that: the jet from the weep-hole shoves the car out from the wall on every swing, and the safety dog (you can see it through the slats, an iron tooth jammed crooked in its rack) can't drop back while the car keeps bucking.

    "It's the water," you say. "It's pushing us. If something held the car still for a moment, the dog would fall back on its own."

    Samuel stares at you. Tamsin Mottram looks at you properly for the first time: a short, hard look, as though she's checking your sum.

    "Right," she says.
  *if (bg = "outsider") #Do the thing you never talk about. Hold the car still.
    *set lift "lean"
    *set purchase +5
    *set bold %+10
    You haven't done it on purpose since you were nine and the minister was watching.

    You do it now. It is like setting your back against a door in a gale, except the gale is the water and the door is you. You don't push the jet away. You simply refuse to be moved by it. The car stops swinging. For one second, two, three, the whole spitting weight of the lake presses against something that isn't there, and your ears ring and your back teeth ache as if you've bitten down on tin—

    "Hold," says a quiet voice beside you. "I've got it. Let go."

Tamsin Mottram is standing in the middle of the car with her feet planted wide. She says one word under her breath, [i]"Hold,"[/i] and the car stops. The jet doesn't stop; the car does. It hangs from its cable as still as a plumb-bob while the water batters it, as if the air around it has set like plaster. Her lips have gone white. There is sweat at her hairline, though it's cold enough to see your breath.

[i]Leaning,[/i] you think. That's what that is. That's what they come up here to learn. But first-years can't lean. You have to be sworn to lean, and nobody is sworn before the Oathing.

With a clack you feel in your teeth, the safety dog drops back into its rack.
{@lift = "roof"|"Now!" you shout down the hatch, and Samuel throws the lever one-handed.|Samuel throws the lever one-handed.} The car lurches, catches, and begins to climb again. Tamsin lets go. She sits down very suddenly on the bench and picks up her book, and her hands are shaking so badly the pages rattle.

Up through the soles of your feet, the hum climbs back to B-flat, like somebody clearing their throat after a lie.
*set hum "B♭"

*if (lift = "roof")
  You climb back down through the hatch, soaked to the skin and wind-burned, and sit down hard. Nobody says anything about it. Samuel gives you a look that might, in a warmer man, be approval.

Samuel looks at the girl with the key for a long moment. "You're sworn," he says.

"No," says Tamsin Mottram.

"Course not," says Samuel. "Me neither." And he looks down at his torn hand and starts, very carefully, to wrap it in his handkerchief.

Beside you, Tolly Varnish is sitting in a spreading puddle, drenched from collar to knees, and he is shaking. Not a little. His teeth are going. He is trying to laugh and it isn't coming out right.

*choice
  #Make him laugh. "Good news: if we'd fallen, the paperwork would have been somebody else's problem."
    *set tender %-10
    *set rel_tolly +10
    It takes a second to land. Then Tolly barks out a laugh so sudden it's nearly a sob, and says, "Oh, thank God, a [i]wit,[/i]" and laughs properly, wet through, until the shaking has somewhere to go. "Mother would have sued the lake," he says. "She'd have [i]won.[/i]"
  #Sit down beside him in the wet and stay there until the shaking stops.
    *set tender %+15
    *set rel_tolly +10
    You sit. The puddle soaks through your trousers at once. You don't say anything, and neither does he, and after a while his shoulder stops jumping against yours. "Sorry," he says finally, to his knees. "Sorry. I'm not—I'm usually much better at being a coward in private." You tell him it's fine. He looks at you as if nobody has told him that in some years.
  #Leave him his dignity. Watch the wall instead, and let him collect himself.
    *set candor %-5
    *set rel_tolly +6
    You turn and look out through the slats at the weeping stone, and give him the gift of not being looked at. When you turn back he has wrung out his cuffs and arranged his face, and there's only a little tremor left in his voice when he says, "Well. That's the most exciting thing that's happened to me since the foxtrot." You're fairly sure he knows exactly what you did.

*if (lift = "samuel")
  *set rel_tamsin +5
  Tamsin Mottram is watching you over the top of her book. "You did the right thing first," she says, as if grading a paper. Then she goes back to not reading.
*elseif (lift = "look")
  *set rel_tamsin +10
  Tamsin Mottram is watching you over the top of her book. "You saw it," she says. It isn't quite a compliment. It isn't quite not. Then she goes back to not reading.
*elseif (lift = "roof")
  *set rel_tamsin +5
  Tamsin Mottram is watching you over the top of her book. "That was stupid," she says. A pause. "It was brave. It was mostly stupid." Then she goes back to not reading.
*else
  *set rel_tamsin +10
  Tamsin Mottram is watching you, not over her book but straight on, and her eyes are narrowed. "You," she says, very low, so the others can't hear. "You're not sworn either, are you." It's not a question, so you don't answer it. After a moment the corner of her mouth moves, and she goes back to her book.
*if ((lift = "samuel") or (lift = "look") or (lift = "lean"))
  *achieve steady_hands
*page_break Up to the crest

The car docks at the top in a glass-roofed shed full of gulls, and you step out into the wind, and there it is.

The Heldwater.

You see it all at once, the way people say you see the sea for the first time: not as water but as a direction. Everything north of here is lake. It fills the valley from wall to wall, eleven miles of it, {~flat and pewter-grey under a low sky, with the fells standing up out of it like shoulders|dark as slate and wrinkled by the wind, the fells on either side going down into it without a shore|a sheet of beaten lead, stippled with wind, the hills drowning in it on either side}. From up here, on the crest of the Stay, the water is so close you could step off the parapet into it. It laps at the stone a yard below your boots, calm as a bath, and on the other side of the road, four hundred feet below, is Scarrow.

That's the whole secret of the place, really. You're standing on the only thing between those two facts.

The crest road runs along the top of the wall, thirty feet wide and cobbled, with iron lamp-posts and braziers every fifty yards. Along its downstream side, built right onto the Stay, stands the College: tall, narrow buildings of the same pale stone, tied to one another by bridges and covered stairs. Their windows face the city. Chimneys, bells, a copper dome gone green. Everything leans slightly toward the lake, the way people lean into a wind.

Someone is waiting at the lift shed. They are wearing a beekeeper's veil, a canvas smock, and very old boots, and they are holding a smoker that's still going, so that they stand in their own small weather of blue smoke.

"Three," says the beekeeper, looking at each of you in turn. "Good. Great-aunt Hester says you're all right. She felt the car stop. She asked me to come up and count you." They lift the veil. Underneath is a calm, bony face, a shaven head, grey eyes that look at you with complete attention and no embarrassment at all. "Sal Quaile. They, if you're Asking."
*set met_sal true

Tolly, still dripping, says, "Your great-aunt [i]felt[/i] us? Who on earth is your great-aunt?"

"Hester Quaile," says Sal. And, when that gets nothing from Tolly but a polite blank: "The Keystone."

Even Tolly has heard of the Keystone.

*choice
  #"She felt the car stop? From inside the dam?"
    *set lore +3
    *set rel_sal +5
    "She feels all of it," Sal says, as if explaining that water is wet. "The whole Stay. The way you feel your teeth. When the lift stopped she felt it like a stone in her shoe." They consider. "She said the girl did well. She didn't say which girl. I think she meant it to be annoying."
  #"Why are you wearing a beekeeper's veil?"
    *set rel_sal +5
    *set tender %-5
    "Because of the bees," says Sal.

    You wait. So does Sal. After a while it becomes clear that this is the whole answer, and that it is entirely true, and that Sal is quietly enjoying your face.

    "They're on the crest," Sal adds, relenting. "Twelve hives. It's the only place in Scarrow where the heather comes right up to the water. You can visit them. They don't sting unless you lie to them."
  #"Tell your great-aunt thank you. For counting us."
    *set tender %+10
    *set rel_sal +8
    Sal looks at you for a long moment. "I'll tell her," they say. "She'll like that. Nobody thanks her. It's like thanking the floor."

Behind you Old Samuel is shutting the lift gate one-handed, the other hand wrapped in a bloody handkerchief. He catches your eye.
*if (lift = "roof")
  "Next time," he says, "stay off my roof." But he touches two fingers to his cap as he says it.
*elseif (lift = "samuel")
  "You've good hands," he says, gruffly. "Don't let them turn you into one of the clever ones." He touches two fingers to his cap.
*else
  "You'll do," he says, which from Samuel, you will learn, is the Freedom of the City. He touches two fingers to his cap.
*page_break The Oathing Hall

The Weighing takes place in the Oathing Hall, which is at the heart of the crest where the College buildings crowd together under the green dome.

It is a round room, cold as a church, and it smells of wet stone. The floor is inlaid with lines of brass that run from the walls to the center like the spokes of a wheel, and at the center, where they meet, is a round iron grille about as wide as a cartwheel. Air comes up through the grille, steady and chill, carrying the hum with it. This, a second-year whispers to the line of new students, is [i]the Throat.[/i] It goes all the way down into the heart of the Stay. When you swear a vow here, you swear it down there.

There are twenty-nine of you, first-years in travelling clothes, shuffling on the brass. Above the door, carved deep enough to lay a finger in, is the College's motto: WHAT IS KEPT, KEEPS.

The Warden stands beside the Throat.

Agnes Brathwaite is tall, and grey, and holds herself like a tool that has been well made for a single purpose and has had that purpose for a long time. She has a plain black gown, a plain grey face, and eyes that don't move around the room so much as take it apart. She does not introduce herself. Everyone knows who she is.

"You will each come forward," she says, "and I will ask you two questions. Answer them truthfully. I will know if you do not." She says this without emphasis, the way you'd tell a guest where the coats go. "I am sworn to the Plain Word, and I hear a lie the way a tuner hears a flat string. It is not a trick. It is not a test. It is only that I prefer to begin as I mean to go on."

She calls names. You watch.

Tolly goes up with his chin high and his coat still dripping. "Why have you come to the Stay, Scholar Varnish?"

"Because my mother told me to, Warden."

"Yes," says the Warden. You get the odd sense that she has heard something more than the words. "Are you sworn?"

A long pause. Tolly's hands are clenched at his sides. "My mother says I'm not to discuss it, Warden."

The Warden's face does not change at all. "Then we shan't," she says. "Thank you." Tolly walks back to the line looking as if he's been let off a hanging.

Then: "Scholar Mottram. Why have you come to the Stay?"

"To win," says Tamsin Mottram.

The whole line hears it land. The Warden only nods. "Are you sworn?"

"No."

A pause. You watch the Warden's head tilt, very slightly, exactly like a tuner hearing a flat string.

"Scholar Mottram," she says, "the Oathing Act requires the registration of vows sworn after one's eighteenth birthday. I ask about those."

Something happens in Tamsin's face: a door opening a crack and shutting again. "No vows since my birthday, Warden."

"Thank you," says the Warden. And that is all. Tamsin walks back to the line with her jaw like a rock. The Warden, you think, has just caught somebody in a lie, and handed them a truth to stand on instead.

"Scholar {surname}."

You walk out onto the brass. The air from the Throat is cold on your ankles. The hum is very loud here. It's not a sound anymore; it's a place.

"Why have you come to the Stay?"

*temp lied false
*label weighing
*choice
  #"To protect the people under it." My people.
    *set why "protect"
    *set duty %+10
    *set tender %+5
    *if (bg = "levy")
      "My family lives under this wall, Warden. My brother's ten. I want to be the sort of person who can do something about that."
    *elseif (bg = "legacy")
      "Everybody I grew up with lives above the flood line, Warden. Most of Scarrow doesn't. Somebody from Crowhill ought to care about that."
    *else
      "I've seen a flood, Warden. In Lisk the sea comes in over the dikes every twenty years and takes a village. I'd like to be on the side of the wall."

    The Warden regards you. "Every Levy scholar who has ever stood there has given me some version of that answer," she says, "and roughly half of them meant it." A pause. "You mean it."
    *set rel_warden +8
  #"To be powerful enough that nobody can make me small again."
    *set why "power"
    *set bold %+10
    *set duty %-5
    "Honest," says the Warden. There isn't any warmth in it, or any disapproval either; she might be noting the temperature. "Power is available here. It is not free. Nothing here is free. You will learn the price of each piece of it before you pay, which is more than most people are offered."
    *set rel_warden +5
  #"Because it was the way out."
    *set why "escape"
    *set candor %+15
    Something almost like surprise moves across the Warden's face and is gone. "That is true," she says, "and it is the best reason I have heard today. Most people who come here are running from something. Very few of them say so."
    *set rel_warden +10
  #"To find out what's really going on in here."
    *set why "truth"
    *set duty %-10
    *set candor %+5
    The Warden looks at you for what feels like a long time. "Then you will be disappointed often," she says, "and enlightened occasionally. That is the usual rate." And then, quieter, so only you can hear it: "Ask exact questions, Scholar. They are the only kind that get exact answers."
    *set rel_warden +6
    *set hint_ask_warden true
  *disable_reuse #"Because it's a great honor, Warden." (You don't believe a word of it.)
    *set lied true
    *set candor %-15
    The Warden doesn't blink. "Try again," she says, in exactly the tone she used for everything else. Behind you, somebody in the line smothers a laugh. Your face goes hot.
    *achieve tried_lying
    *goto weighing

"Are you sworn?"

*if (bg != "outsider")
  "No, Warden."

  "Thank you." And that is the Weighing. Your feet carry you back to the line.
  *if (not lied)
    *achieve truth_weighs
*else
  The ticket in your pocket. Your father's grave. [i]I will not weep.[/i]

  *label sworn_q
  *choice
    #Tell her the truth. "Once. When I was eight. By accident. 'I will not weep.'"
      *set registered_weep true
      *set candor %+15
      *set rel_warden +10
      A flicker crosses the Warden's face, the first thing like feeling you've seen there. "A wild vow," she says. "Kept since you were eight." She looks at you a moment longer. "You must have very strong eyes." She makes a note in a small black book. "It will be registered with the others. Thank you."
      *if (not lied)
        *achieve truth_weighs
    #Use the words that worked for Tamsin: "Not since I turned eighteen, Warden."
      *set registered_weep false
      *set candor %-10
      *set rel_warden +5
      The Warden's eyes rest on you. You can almost hear her weighing it: true, every word, and shaped to a purpose. "Thank you," she says, and there is the faintest dry note in it, as though you have been noticed for being quick. She writes nothing down.
    *disable_reuse #"No, Warden."
      *set lied true
      "Try again," says the Warden.
      *achieve tried_lying
      *goto sworn_q
  Your feet carry you back to the line.
*page_break Down to the Footings

There are four Watches at the College of the Stay, named for the parts of a dam: Crest, Sluice, Gallery and Footing. You are Footing Watch. So, you discover, are Tamsin Mottram, Tolly Varnish, and Sal Quaile, along with two quiet first-years from the mill towns who spend the first evening holding hands under the table.

Footing Watch lives at the bottom.

You get there by eight hundred and six steps, or by a groaning service lift the Watch calls the Bucket, down through the inside of the dam. The Footings are the long vaulted rooms in the toe of the Stay, where it meets the bedrock: the lowest and dampest rooms in the College, and the loudest. The walls sweat. The floor is warm, because the boiler pipes run under it. It is eleven degrees in summer and eleven degrees in winter, and the hum is so strong down here that there's a cup on the common-room mantel with a crack in it from the note.

"You get used to it," says the captain of Footing Watch, "and then you can't sleep anywhere else."
*set met_hob true

Hob Gorringe is a fourth-year, and he is enormous: six and a half feet of slow-moving ginger bulk with a beard like a hedge and a pencil behind each ear. He speaks so softly that everyone has to lean in, which you suspect is the point.

"Watch rules. There's one." He holds up a tuning fork, brass, as long as his hand. "Every morning and every night, somebody strikes the fork and holds it to the wall." He does it: a clear note, and the wall hums back in the same note, and for a moment the room seems to ring like a bell. "If the wall answers in B-flat, you go to bed. If it doesn't," and he nods at a brass bell on a bracket by the door, big as a bucket, "you ring that. Then you run upstairs and wake the Warden. Then you run back down here and do whatever she says. In that order."

He hands each of you a fork of your own. Yours is cold and heavier than it looks.

"The Footings take the load," Hob says. "Everything above us presses down on us. That's the job. Crest Watch gets the view, Sluice gets the machinery, Gallery gets the maps. We get the weight." He smiles for the first time, a big slow thing like a sunrise in a beard. "Best Watch there is. Supper's at seven."

Supper is in the Sump, the Footings' common room: a long scrubbed table, a stove, a piano with three dead keys, and a cauldron of something the second-years call "Stay stew" in a tone of voice that settles what's in it. The mill-town pair sit close. Hob reads an engineering journal. The rest of you have the evening to yourselves.
*temp talks 0

*label dinner
*if (talks >= 2)
  *goto dinner_done
*if (talks = 1)
  There's time for one more conversation before the lamps go down.
*else
  You have time, before the lamps go down, to talk properly to one or two people.
*choice
  *hide_reuse #Tamsin Mottram is at the far end of the table, eating fast.
    *set talks +1
    *set rel_tamsin +8
    She eats like someone whose next meal is a matter of opinion. When you sit down across from her she doesn't look up.

    "Laundry shift at eight," she says. "Talk quick."

    You open your mouth to ask about the lift, and she says, "No. Not that." Then, as if against her own judgement: "I'll trade you. A question for a question. That's fair."

    *choice
      #"Where are you from?"
        "The Rows," she says. "Hebble Rows, in the Nethers. Down by the gasworks." She puts her spoon down. "Ask me where Hebble is."

        You ask.

        "Under the lake." She says it flatly, like an address. "Seventy-one years. Three hundred people lived in that valley, and they built this wall across the end of it, and the water came up, and that was Hebble. Church, school, forty houses, a mill. It's all still down there. My Nan was born in it." She touches the iron key at her throat without seeming to know she's doing it. "Nobody ever asks about Hebble. Nobody up here's ever even heard of it. Your turn."
        *set lore +3
        *journal Tamsin's family came from Hebble, the village drowned under the Heldwater seventy-one years ago.
      #"What's the key for?"
        She looks at you for a long moment, and you think she won't answer. Then she does.

        "My Nan's front door," she says. "Number Nine, Mill Lane, Hebble." She tucks the key back inside her collar. "It's forty fathoms down. The house is still there. The door's still locked. She gave me the key when I was twelve, and told me, [i]Don't you ever let them tell you it's gone.[/i]" She picks up her spoon. "Your turn."
        *journal Tamsin wears the key to her grandmother's house in Hebble, the village drowned under the lake.
    She looks straight at you. "Why are you really here? Not what you told the Warden. What you tell yourself."

    *choice
      #Tell her the truth.
        *set candor %+10
        *set rel_tamsin +5
        You tell her. It comes out plainer than you meant it to. She listens without interrupting, the way you'd listen to someone giving you directions somewhere you actually need to go.

        "Fair," she says at last. "That's a real answer." She stands, stacks her bowl, and pauses. "Most people up here don't have one."
      #"That's two questions. I only owe you one."
        *set tender %-10
        *set rel_tamsin +8
        For a second she looks as if she might throw the stew at you. Then something happens at the corner of her mouth.

        "Fair," she says. "You'll owe me, then." She stands, stacks her bowl. "I always collect."
  *hide_reuse #Tolly is unpacking a hamper his mother sent, with the air of a man defusing a bomb.
    *set talks +1
    *set rel_tolly +8
    The hamper contains a pot of pâté, a tin of candied violets, a cold roast pheasant, and a card in a strong, slanting hand. Tolly reads the card aloud: "[i]Darling. Eat the pâté first; it won't keep. Write every Sunday. Mother.[/i]"

    You watch his hand go to the pâté before he's finished reading the word [i]first.[/i] It's a small thing. He opens the pot, takes a spoon, and eats a mouthful, and then he looks at the spoon with an odd, blank expression, as if he isn't sure how it got there.

    Then the expression is gone. "Pheasant?" he offers, brightly. "Violet? Mother always sends enough for a regiment, on the theory that I'll make friends by feeding people. She's usually right." He lowers his voice. "She'll be [i]appalled[/i] about Footing. She'll write to the Warden. The Warden will write back something perfectly polite and perfectly unchangeable, and Mother will be furious for a month." He beams. "It's the only thing that's cheered me up all day."

    *choice
      #"Why come at all, if it's her idea?"
        *set candor %+5
        Tolly opens his mouth, closes it, and looks at the pâté. "It's a family tradition," he says. "Varnishes go to the Stay. Varnishes sit on the Council. Varnishes do as they're told." He laughs, a bit too quickly. "That last one's the family motto. We had it embroidered on the cushions."
      #"The pheasant, please. And tell me the worst thing about Crowhill."
        *set tender %+5
        *set rel_tolly +4
        Tolly carves you a leg with enormous ceremony and then tells you, at length and with actions, about the Crowhill Midwinter Ball of three years ago, a runaway swan, and a Councillor's wig. By the end of it one of the mill-town pair is laughing so hard she has to put her head down on the table, and Tolly looks, for a moment, entirely happy.
  *hide_reuse #Sal Quaile is at the stove, scraping soot out of their bee-smoker with a teaspoon.
    *set talks +1
    *set rel_sal +8
    "It clogs," Sal says, when you ask. "Everything clogs up here. The damp gets into it." They hold the smoker up to the lamp and squint down its spout. "You can ask me things. I'm sworn to the Plain Word, same as the Warden, so I can't lie to you. People find it restful, or else they find it very alarming. There isn't much in between."

    *choice
      #"Why Footing? You could have asked for any Watch."
        "It's the loudest," says Sal. "You can hear her better down here." They mean Hester, you realise: the Keystone, somewhere up above you in the dark heart of the wall. "When I was little I used to come and sit on the steps down here with my ear to the stone. She'd sing to me. Not words. Just holding the note." They put down the smoker. "I'm going to be the Keystone after her. When she's gone. I've always known."

        They say it the way you'd say you were going to be a carpenter.
        *journal Sal Quaile means to become the next Keystone, after their great-aunt Hester.
      #"Does it get lonely? Never being able to lie?"
        Sal considers this with real care. "No," they say. "It gets quiet. People stop asking me things they don't want to know." They look at you. "You asked, though."

        "Is that good?"

        "Yes," says Sal. The Plain Word, you think. They mean exactly that.
        *set rel_sal +4
*goto dinner

*label dinner_done
At ten, Hob strikes his fork and holds it to the wall. The wall answers, B-flat, true as a bell. He turns the lamps down one by one, and Footing Watch goes to bed.
*page_break

Your cell is the size of a big cupboard: a cot, a shelf, a curtain for a door, and a slot in the wall that breathes cold air from somewhere deep in the dam. There's no window. There's nothing above you but four hundred feet of stone, and nothing on the other side of that stone but the lake.

You lie there and listen to the hum.

And then, somewhere around midnight, underneath the hum, someone begins to sing.

It is a woman's voice, low and unhurried, without words. It doesn't come from anywhere; it comes from the walls, the way the hum does, from the stone itself. But it moves. It rises and settles and holds a note for a long time, and when it holds the note, the hum holds with it, the way a tired horse steadies under a hand.

*choice
  #Follow it. Pull on your boots and find out where it's coming from.
    *set bold %+10
    *set met_fell true
    *set rel_fell +10
    The galleries at night are lit by lamps turned down to a blue bead. You follow the singing up a spiral stair, along a passage that drips, through a door marked INSPECTION: 3RD GALLERY, and it gets louder and louder until, at a junction where four passages meet, it's everywhere at once.

    There's a man sitting on the bottom step of the junction in a plaid dressing gown, with a lantern at his feet and a tin of shortbread on his knee.

    He doesn't seem surprised to see you. He seems, if anything, faintly apologetic, as though you've caught him at something. "She sings when it's bad," he says. "And when it's good. Mostly when it's bad." He offers the tin. "Shortbread? It's stale. I buy it stale, it's cheaper, and nobody tries to share it."

    He is fortyish, thin, and neat in a way that looks effortful: his dressing gown is belted with a precise bow, and his slippers are side by side. His hair is going grey in a streak at the front, like a badger's. His face is kind, and tired, and there's something in it you can't place, like a word on the tip of your tongue.

    "Ambrose Fell," he says. "I teach Practical Leaning, which is neither. You'll have me on Mondays." He listens to the singing a while. "She's holding a lot tonight. The lift gave her a fright. That was you, was it? The flinch?" He sighs. "Go to bed, Scholar. Nothing good has ever come of first-years following noises in the dark. Believe me. I was one."

    *choice
      #"Who is she?"
        "Hester," he says. "The Keystone." He says her name very carefully, like carrying something full to the brim. "She's been singing to this wall since before you were born. Since before I was a student, and that's a long time ago now." He stands, and picks up his lantern. "Go to bed," he says again, more gently, and he waits at the junction until you've gone.
        *set rel_fell +5
      #"What did you mean, you were one?"
        "A first-year? Everyone is, eventually." He smiles, and it doesn't reach his eyes. "I'm the one they'll warn you about. The dull lecturer. Terrible handwriting. Keeps an eel." He stands, and picks up his lantern. "Goodnight, Scholar."
        *set lore +2
      #Sit down beside him and listen, without asking anything.
        *set tender %+10
        *set rel_fell +10
        He looks at you, surprised, and then moves the shortbread tin to make room. You sit on the cold step, and neither of you says anything, and the voice in the stone holds its note, and holds it, and holds it. After a long while Fell says, not to you exactly, "Forty-one years," and nothing else. When the singing finally sinks back under the hum, he stands, and nods to you as if you'd done him a kindness, and goes.
  #Write home, by the light of the lamp.
    *set tender %+10
    *if (bg = "levy")
      You write to Pip. You tell him the lift stopped halfway up and a girl held it in the air with a word. You tell him about the lake. You tell him the Stay doesn't look like his drawing, and then you cross that out and write that it does, a bit, around the eyes. You tell him somebody is singing inside the wall, and that it's nice, and that he's not to worry.

      Then you lie back and listen, and you don't feel as if you're lying to him at all.
    *elseif (bg = "legacy")
      You start a letter to your mother, and it comes out stiff, the way letters to her always do. [i]Dear Mother, arrived safely.[/i] You tell her about the flinch, and Old Samuel's hand, and the jet of water from the weep-hole. You ask her, in a line that looks stranger once it's written than it did in your head, whether the Committee knows how often that happens.

      You don't send it. You fold it into your trunk and lie back and listen to the singing, and the question sits there in the dark with you.
    *else
      You write to your mother in Liskish, which looks wrong up here, all hooks and doubled vowels on the College's thick cream paper. You tell her about the lake, which is bigger than the harbor at home and quieter than any sea. You tell her there's a woman who sings inside the wall, and that nobody here thinks it's a sin.

      You don't tell her about the lift. You don't tell her what you did. Some things you've never written down, and you're not going to start in a cupboard four hundred feet underneath a lake.
  #Put the pillow over your head and try to sleep.
    *set bold %-10
    You sleep, eventually. You dream of water.

    In the dream you're walking down a lane between stone houses, and the light is green and wavering, and it's very quiet. Your feet don't quite touch the ground. At the end of the lane is a front door with a big iron keyhole, and behind you, somewhere up the valley, a bell is ringing, slow and muffled, as if it's ringing under a blanket.

    You wake with the singing still going, and your fork on the shelf humming by itself, very faintly, B-flat.

*finish

*comment ------------------------------------------------------------------
*comment Pronoun subroutines
*label pron_he
*set pron "he"
*set they "he"
*set them "him"
*set their "his"
*set theirs "his"
*set themself "himself"
*set are "is"
*set s "s"
*set have "has"
*set were "was"
*return
*label pron_she
*set pron "she"
*set they "she"
*set them "her"
*set their "her"
*set theirs "hers"
*set themself "herself"
*set are "is"
*set s "s"
*set have "has"
*set were "was"
*return
*label pron_they
*set pron "they"
*set they "they"
*set them "them"
*set their "their"
*set theirs "theirs"
*set themself "themself"
*set are "are"
*set s ""
*set have "have"
*set were "were"
*return
`);
