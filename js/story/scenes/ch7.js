HW.scene("ch7", String.raw`
*chapter 7 Crown Night
*temp cname ""
*if (crowned = "pc")
  *set cname name
*elseif (crowned = "tamsin")
  *set cname "Tamsin"
*elseif (crowned = "sal")
  *set cname "Sal"
*elseif (crowned = "tolly")
  *set cname "Tolly"
*else
  *set cname "Rilla"
*temp nan_here false
*if (nan_state != "exposed")
  *set nan_here true
*set fell_here false
*if ((fell_ready) or (ally_fell))
  *set fell_here true
*temp nan_active false
*if ((nan_state = "protected") or (nan_state = "joined"))
  *set nan_active true
*temp free_pc false
*if ((vows = 0) or ((vows = 1) and (vow_weep) and (not registered_weep)))
  *set free_pc true
*temp surge_used false
*temp force_weep false

Midsummer comes in hot and airless, with thunder sitting on the fells all afternoon like a dog on a doorstep.

By evening the whole of Scarrow has come up to the Stay. They fill the crest road from end to end: mill-hands and Crowhill wives, Rows folk in their Sunday coats, children on shoulders, the [i]Courier[/i]'s photographer on a stepladder, constables in capes. The braziers are lit all along the parapet. The lake is flat as oil and the color of a bruise, and above it, over the fells, the storm is stacking itself up in towers, purple and gold, lit from inside by lightning that doesn't make a sound.
*if (revealed_public)
  They know. That's the difference from every other Crown Night in forty-one years: this crowd knows what it has come to watch. There's no bunting. People are very quiet.
*else
  There's bunting. There's a brass band. Most of the crowd thinks it has come to a coronation.
*if (nan_here)
  At the front, beside Tamsin's mother with her blue hands, sits a very small old woman in a wheeled chair, wrapped in a shawl, with her bright black eyes fixed on the wall. Nan Win has come to see the Stay.
*if (fell_here)
  Master Fell stands at the edge of the masters' enclosure in his best gown, with his hands clasped behind his back to stop them shaking. He sees you looking, and nods, once.
*else
  Master Fell is nowhere to be seen. Nobody is surprised, except you.
*if (honoria_exposed)
  The Council's party stands apart on a railed platform by the lift shed: a dozen Councillors in sashes, and, among them, grey-faced and upright as a tombstone, Honoria Varnish. She has lost the Committee. She has not lost her seat, or her nerve.
*else
  The Council's party stands on a railed platform by the lift shed: a dozen Councillors in sashes, and at their center, in dark green velvet with a single diamond at her throat, Honoria Varnish. Beside her, a constable holds a small iron-bound box. You know what's in it. Everyone who has read the Oathing Act knows what's in it: the Writ of Restraint.

The Warden stands on the dais at the center of the crest, in her black gown, with the whole city in front of her and the whole lake behind. She doesn't raise her voice. She doesn't need to.

"The Crown," says Agnes Brathwaite, "has been contested, and decided. The Heir to the Stay is {cname}."
*if (crowned = "pc")
  *goto crowning_you
*goto crowning_other

*label crowning_you
Your name goes out over the crest and the crowd, and comes back off the water.

You climb the steps to the dais. Your legs are somebody else's. The Warden sets a circlet of crest heather on your head, the only crown the Crown has ever been, and it smells of honey and smoke, and her hands are cold and quite steady.

"You stand ready to serve the Stay," she says. And then, so quietly only you can hear it: "I am sorry."
*if (romance != "")
  In the crowd, you find the one face you're looking for. They're not cheering. They're looking at you as if they're trying to memorize you.
*goto hester_stops

*label crowning_other
*if (crowned = "tamsin")
  Tamsin climbs the steps in her laundry-worn coat with her jaw set like a trap and her Nan's key on its string outside her collar, where everyone can see it. When the Warden sets the heather on her head she doesn't bow. She turns and looks out over the crowd, over the Rows folk at the front, over her Nan in her wheeled chair, and lifts her chin.
*elseif (crowned = "sal")
  Sal climbs the steps unhurried, in a clean smock, with a smudge of beeswax on one cheek. When the Warden sets the heather on their head, Sal takes her hand and holds it for a moment, and says something, and the Warden's face does something you've never seen it do.
*elseif (crowned = "tolly")
  Tolly climbs the steps in white tie, because, he told you this morning, if he's going to be bound for life he intends to be the best-dressed man in the wall. When the Warden sets the heather on his head he looks out over the crowd for his mother, and finds her, and holds her eyes, and smiles.
*else
  Rilla Hesketh climbs the steps in blue silk.
  *if (revealed_public)
    She knows. She's known since the Question. She walks up those steps like someone walking to a scaffold she has decided to build herself, and when the Warden sets the heather on her head she doesn't flinch.
  *else
    She's smiling, golden, waving to Crest Watch. She doesn't know. You watch the Warden set the heather on her head and say [i]You stand ready to serve the Stay,[/i] and you watch Rilla say "I do," laughing, and you feel sick.

"You stand ready to serve the Stay," says the Warden, to {cname}.

*label hester_stops
*page_break Midsummer

Then, under everything, you hear her singing.

Everyone does. It comes up through the crest stones, through the cobbles, through the soles of ten thousand feet: Hester's voice, the note that holds the Stay, stronger than you've ever heard it. The crowd goes silent. The band stops mid-bar. The whole city stands on top of the wall and listens to a blind woman sing in the dark heart of it.

It's beautiful. It's the most beautiful thing you've ever heard. It goes on for a long time.

And then it stops.

Not a fade. Not a falter. It stops, clean, in the middle of the note, like a door closing. And in the silence, so faint you'd think you imagined it if you hadn't heard it every night for nine months, carried up through the Throat of the Oathing Hall and out across the crest, comes a dry, tired, satisfied voice:

[i]"I said Midsummer. I keep my word."[/i]

The hum drops.
*set hum "A"

A-flat. G. The crest shivers under your feet like the deck of a ship. Somewhere below, deep in the wall, something breaks with a sound like a cannon, and a crack runs across the cobbles of the crest road, right through the crowd, and people scream. Over the parapet on the downstream side, the face of the Stay bursts into water: jets from every weep-hole at once, white and roaring, hundreds of them, down four hundred feet into the dark.
*set hum "G"

The storm breaks. The rain comes down like a thrown bucket.

On the dais, the Warden has already turned to the Heir. "{cname}," she says. "With me. Now."
*page_break

*comment ---- compute the night ----
*set strain 2
*if (nan_active)
  *set strain +2
*if (not wet_night_contained)
  *set strain +1
*if (reported_frays)
  *set strain -1
*if (evac_mam)
  *set evac +1
*if (rows_contact)
  *set evac +1
*if (hob_runners)
  *set evac +1
*if (revealed_public)
  *set evac +1
*set writ false
*if ((not honoria_exposed) and (not honoria_turned))
  *set writ true

Chaos on the crest. Constables shouting, the crowd surging for the lift shed and the stairs, a child crying, the band's music stands blowing over the parapet like leaves. The rain is so loud you can barely hear yourself think.
*if (nan_active)
  And under your feet, you can feel it: the frays, all of them at once, pulsing hard, pulling. Somebody downstream isn't stopping. Somebody is pulling harder than ever. You look for Nan Win's wheeled chair at the front of the crowd, and it's empty.
*if (evac_mam)
  Far below, through the rain, faint but clear, a siren starts to wail at Number Three Lock on the Cut: a hand-crank siren, cranked by a lock-keeper who made a promise.
*if (hob_runners)
  Hob Gorringe is already bellowing Footing Watch together at the crest stairs. "RUNNERS! Sally port! [i]Go![/i]" Twenty scholars go past you down the stairs at a dead run.
You have a minute. Maybe less. You know where everyone else is going. The question is where [i]you[/i] are going.

*label crossroads
*choice
  #With the Warden and the Heir, up the Crown Stair to the Keystone Chamber.
    *set path "chamber"
    *goto chamber
  *selectable_if (know_holding) #Down to the Hebble Gallery. Bring every hand you can find.
    *set path "holding"
    *goto holding
  *selectable_if ((eng) and ((marchbank_key) or (vow_door) or (nan_state = "joined"))) #Down to the Old Sluices. Open the gates. Let the lake down.
    *set path "sluices"
    *goto sluices
  *hide_reuse #First, the telephone in the lift shed. Ring the Rows, the constables, the [i]Courier,[/i] anyone who'll wake the Nethers.
    *set sirens true
    *set evac +1
    *set strain +1
    You fight your way to the lift shed through the crowd and get the telephone off its hook and shout into it: the tobacconist's on Beck Street, the Nethers police station, the [i]Courier[/i] office, the fire brigade, anyone the exchange girl can connect you to. [i]The Stay is breaking. Get the Nethers up the hill. Now. Now.[/i] Down in the dark you hear a church bell start to ring, and then another.

    It takes minutes you don't have. When you put the receiver down, the crack in the crest road has spread another ten yards, and water is coming up through it.
    *goto crossroads
  *if ((council_ally >= 2) and (crowned != "pc")) #To the Council's platform. Stand with the Councillor. Somebody has to keep order.
    *set path "council"
    *goto council
  #Run. The Weir Lift. Down, while it still works.
    *set path "runner"
    *goto runner

*comment ==================================================================
*comment THE WRIT (gosub): Honoria seals the room. Returns with writ false if broken.
*label the_writ
*page_break The Writ of Restraint

The door crashes open behind you.

Honoria Varnish stands in it, soaked to the skin, her velvet black with rain and her silver hair plastered to her skull, with two constables at her back. In her hand is an iron seal the size of a fist, heavy and dark, hanging from a chain.

"By the Council's Writ of Restraint," she says, and her voice is quite level, "under the Oathing Act, in a public emergency, every registered Sworn in sight of this seal is bound to stand."

She presses the seal against the door frame.

It's like the air turning to glass. Around you, everyone who has ever sworn a vow at the College (every registered Sworn in Scarrow) goes still. Not frozen, exactly. Held. You can see them trying to move, their faces straining, their eyes wild. The Writ holds them by their words: by every vow written in the Council's registry, beside their names.
*if (tolly_state = "bound")
  Tolly followed you down; he's at the back, white-faced. "Ptolemy," says Honoria, without looking at him. "Don't move." And Tolly, who was never registered, who the Writ can't touch, goes still anyway, because his mother told him to.
*if (free_pc)
  The Writ doesn't hold you.

  You feel it try. It gropes for you the way a hand gropes in a drawer for a key that isn't there, and finds nothing, because there is nothing in the Council's registry with your name on it.
  *if (vows = 0)
    You walked out of the Oathing unsworn. Nothing holds you by your word.
  *else
    You told the Warden, on the first day, [i]Not since I turned eighteen.[/i] Your wild vow was never written down.
*else
  It holds you. You feel it close around the vow you swore in the Oathing Hall like a fist around a coin. Your arms won't move. Your feet won't move.

"The Heir will be bound," says Honoria Varnish. "As the law requires. I am sorry for all of you. I did not make the world."

*label writ_choice
*choice
  *if (free_pc) #Walk through the Writ as if it isn't there, and take the seal out of her hand.
    *set writ false
    *set bold %+10
    You walk across the room. Honoria watches you come, and for the first time since you've known her, she looks afraid. You take the seal out of her hand. It's heavy and very cold. You drop it into the water on the floor, and the air lets go of everyone at once, like a held breath.

    "Unsworn," says Honoria Varnish, very quietly. "Of course. Of course it would be." She doesn't try to stop you. She sits down on the wet steps with her hands in her lap.
    *return
  *if (fell_here) #Master Fell is unsworn. The Writ can't hold him either.
    *set writ false
    *set rel_fell +10
    Ambrose Fell steps forward out of the held crowd.

    "I'm unsworn, Honoria," he says. His voice is shaking, and he keeps walking anyway. "You can't hold me. Nobody's been able to hold me for twenty-two years. That was always the trouble." He takes the seal out of her hand, gently, the way you'd take a knife from a child, and drops it in the water. The air lets go.
    *return
  *if ((ally_tamsin) or (crowned = "tamsin")) #Tamsin. She's hedge-sworn. Never registered. The Writ can't find her.
    *set writ false
    *set rel_tamsin +10
    Tamsin Mottram walks out of the held crowd with her hedge-vow burning in her like a coal, unwritten, unregistered, illegal, and her own. She walks up to Honoria Varnish and holds out her hand.

    "I'll take nothing I've not earned," she says. "I've earned this."

    She takes the seal. She throws it into the dark. The air lets go.
    *return
  *if ((tolly_state != "bound") and (ally_tolly)) #Tolly. He was never registered, and nobody tells him what to do anymore.
    *set writ false
    *set rel_tolly +10
    "Ptolemy," says Honoria. "Stand still."

    And Tolly, free, walks up to his mother through the held air, and looks at her for a long moment, and takes the seal out of her hand.

    "No, Mother," he says, very gently. And drops it into the water. The air lets go.
    *return
  *if ((nan_here) and ((nan_state = "stopped") or (nan_state = "joined"))) #Nan Win. Hedge-sworn at the Wordhouse, thirty-one years ago. Never registered.
    *set writ false
    *set rel_nan +10
    A very small old woman gets out of a wheeled chair, and walks, slowly, across the room.

    "I've been held before, Honoria Varnish," says Win Mottram. "Seventy-one years ago. By better than you." She reaches up and takes the seal out of the Councillor's hand, and turns it over, and looks at it, and drops it on the floor. The air lets go.
    *return
  *if ((not free_pc) and (vows > 0) and (broke = "")) #They hold you by your word. So break it.
    *gosub snap_vow
    *set writ false
    The Writ holds the Sworn. It doesn't hold the forsworn. The instant your vow breaks, its grip on you shatters like ice.

    You walk across the room through the held air with blood running from your nose. You take the seal out of Honoria Varnish's hand. You drop it on the floor.

    The air lets go of everyone at once.
    *return
  #There's nothing to be done. Nobody can move.
    *set writ true
    *return

*comment ==================================================================
*comment SNAP (gosub): break the player's vow for a surge of purchase.
*label snap_vow
*achieve snap
*set surge true
*set surge_used true
*if (force_weep)
  *set broke "vow_weep"
  *set vow_weep false
  *set wept true
  *achieve weep
  You weep. For the first time since you were eight years old, beside your father's grave, in the wind, you weep: great ugly gulping sobs, for Hester, for all of it, for your father, for everything you've carried with dry eyes for ten years.
*elseif (vow_name)
  *set broke "vow_name"
  *set vow_name false
  You say your own name, out loud, for the first time since the Oathing.

  "{name} {surname}."
*elseif (vow_plain)
  *set broke "vow_plain"
  *set vow_plain false
  You say the one thing you can't. You lie. "I am not afraid," you say, out loud, and it isn't true, and the Plain Word screams in you like a torn sail.
*elseif (vow_door)
  *set broke "vow_door"
  *set vow_door false
  Somebody (you'll never know who) is shouting [i]help me, please help me[/i] from across the room, and for the first time since you swore the Given Door, you turn your back and say, "No."
*elseif (vow_hand)
  *set broke "vow_hand"
  *set vow_hand false
  You strike. Your fist, the iron rail, as hard as you can, meaning to hurt, meaning it: and the Open Hand closes into a fist for the first time since the Oathing.
*elseif (vow_anchor)
  *set broke "vow_anchor"
  *set vow_anchor false
  You say it aloud: that you're leaving. That you won't stay. That Scarrow can drown without you. You don't mean to go. It doesn't matter. The Anchor breaks the moment you let go of it in your heart.
*else
  *set broke "vow_weep"
  *set vow_weep false
  *set wept true
  *achieve weep
  You weep. For the first time since you were eight years old, beside your father's grave, you weep.
*set vows -1
The snap goes through you like lightning through a tree.

Everything you swore comes back at once: every scrap of purchase, all of it, torn loose in a single white instant. It hurts more than anything has ever hurt. And for a few seconds afterwards you're holding more power than you've ever held in your life, pouring out of you like water from a burst pipe: the surge.
*set purchase 0
*return

*comment ==================================================================
*label chamber
*page_break The Keystone Chamber

You run up the Crown Stair behind the Warden in the dark, with the Heir between you, and the stair is shaking, and water is coming down the steps in a stream.
*if (crowned != "sal")
  Sal is already there when you burst through the iron door. Of course Sal is already there.
*else
  Sal pushes past you through the iron door before you're even at the top, and goes straight to the chair.

The chamber is roaring. The iron ribs in the walls are ringing like struck bells, all of them at once, out of tune, a terrible jangling chord. Water is running down them. The canary is going mad in its cage.

And in the middle of it all, in her red armchair, with her hands in her lap (not on the rails, [i]in her lap,[/i] folded) sits Hester Quaile, with her head tipped back and her clouded eyes closed.

She's alive. Just. You can see her breathing, shallow and slow. Sal is kneeling beside her, holding one of her hands.

"She let go," says Sal. "She said she would. She let go at the end of the note." Their voice is perfectly steady. "It isn't holding. Nothing's holding it. The chair's empty."

The Warden goes to the rails. She doesn't touch them. She turns and looks at the Heir.
*if (fell_here)
  The door bangs open behind you. Master Fell, soaked, gasping, in his best gown, stops dead on the threshold of the room he has spent twenty-two years not entering.
*if ((tolly_state != "bound") and (rel_tolly >= 50) and (crowned != "tolly"))
  Behind him, Tolly, white-faced, with his tie gone.

Hester's head turns, very slowly, toward the sound of your breathing.

"That's you, duck," she whispers. "I'd know you anywhere."
*if (rain_given)
  She smiles. "You brought me rain."

*if (vow_name)
  "Tell me your name," says Hester. "Before I go. I'd like to know it."
  *choice
    #Tell her. Say your name, out loud. Let the Kept Name break.
      *gosub snap_vow
      Hester smiles, with her eyes closed. "{name}," she says. "That's a good name. I knew it would be."
    #Take her hand, and say nothing. She'll understand.
      *set tender %+5
      Hester squeezes your fingers. "Kept it," she whispers. "Good. Good for you, duck. Keep something."

"Somebody," says the Warden, very quietly, "has to take the chair."

The whole room hears her. The ribs ring. The water runs.

*label chamber_choice
*choice
  *if (crowned != "pc") #Let {cname} take the chair. They were Crowned. It's what the Crown is for.
    *set bound crowned
    *goto chamber_bind
  #Take the chair yourself.
    *set bound "pc"
    *goto chamber_bind
  *if (crowned != "sal") #Sal is already on their feet. They've been ready since they were eleven. Let them.
    *set bound "sal"
    *goto chamber_bind
  *if (fell_here and fell_ready) #Master Fell is walking to the chair. Twenty-two years late. Let him.
    *set bound "fell"
    *goto chamber_bind
  *if (warden_ready) #The Warden has put her hand on the rail. She said she would. Let her.
    *set bound "warden"
    *goto chamber_bind
  *if ((tolly_state != "bound") and (rel_tolly >= 50) and (crowned != "tolly")) #Tolly is stepping forward. It's his choice. Nobody told him to.
    *set bound "tolly"
    *goto chamber_bind
  *if (know_holding) #"No. Not one person. Not again." Run for the Hebble Gallery and the Holding. There might still be time.
    *set strain +1
    *set path "holding"
    You're already running. [i]"The old gallery!"[/i] you shout back up the stair. "Bring everyone! [i]Everyone![/i]"
    *goto holding
  *if (crowned = "pc") #Run. Down the stair, out along the crest, to the lift. You won't. You can't.
    *set path "runner"
    *goto runner

*label chamber_bind
*page_break The Great Vow
*if ((bound != "pc") and (vow_weep) and (broke = ""))
  Your eyes are stinging. Your throat has closed. Something that's been dammed up inside you since you were eight years old, beside your father's grave in the wind, is pressing against the wall.
  *choice
    #Let it come. Weep.
      *set force_weep true
      *gosub snap_vow
      And the surge doesn't go anywhere you send it. It goes into the rails, into the lattice, into the one who's sitting down in the chair, like a gift you didn't know you were giving.
    #Hold it in, the way you always have.
      *set bold %-5
      You hold it in. You've had a lot of practice.
*if (bound = "pc")
  You walk to the red armchair. Sal helps Hester out of it, as gently as moving a sleeping child, and lays her down on the blanket on the floor, with her head in Sal's lap.

  You sit down in the chair. It's warm.

  You put your hands on the brass rails. They're worn so smooth they feel like water, and they're humming, and the moment you touch them you can feel it: all of it, the whole Stay, every stone, every crack, the whole weight of the Heldwater leaning on you like a cow on a gate. It's unbearable. It's the heaviest thing in the world.

  "In your own words," says the Warden. Her voice is not steady.

  *if (vow_name)
    The Great Vow is sworn in your own name. You'd have to say it.
    *gosub snap_vow
  You say it.

  [i]"I will not leave the Stay."[/i]

  And the Stay takes you.
  *goto_scene endings keystone_you
*elseif (bound = "sal")
  Sal kisses Hester's forehead, and lays her down on the blanket with her head on a folded cardigan, and stands up, and walks to the chair.

  They sit. They put their hands on the rails. For a moment their face goes white with the weight of it, and then (you watch it happen) it goes calm. Completely calm. The way it goes when they're with the bees.

  "I will not leave the Stay," says Sal Quaile, in the Plain Word, and every rib in the room answers at once, in tune.
  *goto_scene endings keystone_sal
*elseif (bound = "fell")
  Ambrose Fell walks across the chamber, through the water and the ringing, to the red armchair. He kneels by Hester first.

  "Hester," he says. "I'm here."

  "About bloody time," whispers Hester Quaile. And she lifts one hand and finds his face, and pats it, twice, like a dockworker's mother.

  Fell sits down in the chair. He puts his hands on the rails, and flinches, and doesn't let go.

  "I will not leave the Stay," says Ambrose Fell. And he doesn't.
  *goto_scene endings long_watch
*elseif (bound = "warden")
  Agnes Brathwaite takes off her black gown, and folds it, and lays it over the back of the armchair. Underneath she's wearing an old grey cardigan, like Hester's.

  "Nineteen years," she says, to nobody. "I have asked this of others for nineteen years."

  She sits. She puts her hands on the rails.

  "I will not leave the Stay," says the Warden, in the Plain Word, and her voice doesn't shake at all.
  *goto_scene endings wardens_due
*elseif (bound = "tolly")
  Tolly walks to the chair. He's smiling, badly, with his whole face.

  "Isn't it strange," he says, to you. "It's the first thing that was ever mine. I'd like to keep it." He sits down, and puts his hands on the rails, and gasps at the weight, and holds on.

  "I will not leave the Stay," says Ptolemy Varnish. Nobody told him to.
  *goto_scene endings keystone_tolly
*elseif (bound = "tamsin")
  Tamsin looks at the chair for a long moment. Then she takes the key from around her neck, and puts it in your hand, and closes your fingers over it.

  "Keep that for me," she says. "Don't you dare give it back." Her hands close on yours for one second. Then she walks to the chair, and sits, and puts her hands on the rails, and her face goes white.

  "I will not leave the Stay," says Tamsin Mottram. And then, under her breath, to the wall, to the water, to the drowned village forty fathoms down: "Not until you've given it back."
  *goto_scene endings keystone_tamsin
*else
  *if (revealed_public)
    Rilla Hesketh walks to the chair with her chin up and her hands shaking. She knew this was coming. She's had since the Question to know it. It turns out that doesn't help at all.
  *else
    Rilla Hesketh looks at the chair, and at the Warden, and at the old woman on the floor, and at you, and you watch her understand, all at once, what the Crown is for. Her face goes white as paper.

    "Is this—" she says. "Is this what—"

    "Yes," says the Warden. "I am sorry."
  She sits. She puts her hands on the rails.

  "I will not leave the Stay," says Rilla Hesketh, and her voice cracks down the middle.
  *goto_scene endings keystone_rilla

*comment ==================================================================
*label holding
*page_break The Hebble Gallery

You go down through the Stay against the flood of people coming up.

The stairs are running with water. The galleries are full of shouting and lantern-light and the terrible jangling of the ribs in the walls, out of tune. Twice you have to climb over fallen stone. And all the way down, you're shouting: [i]The old gallery. The Hebble Gallery. Everyone who'll come.[/i]
*if (ally_warden)
  The iron door marked H.G. is already open. The Warden opened it an hour before the Crowning, as she promised, and she's standing inside it in her black gown with a lantern, directing people to seats like an usher at a chapel.
*elseif (saw_gallery)
  The iron door marked H.G. still hangs open on its counterweight, the way you left it in November.
*else
  The iron door marked H.G. is shut and sealed. You get it open with every scrap of purchase you have, and your shoulder, and the Stay's own shaking, which does half the work for you.

Inside, the Hebble Gallery is singing.

All the iron is awake. The seats, the rails, the ribs running up into the wall, the great black spine at the far end: all of it is ringing, a huge ragged chord, and the white frays crawl over everything like frost. The chord is two hundred and six notes, and every one of them is out of tune.
*temp hands 0
*temp allies_n 0
*if (ally_hob)
  *set allies_n +1
*if (ally_rilla)
  *set allies_n +1
*if (ally_tamsin)
  *set allies_n +1
*if (ally_sal)
  *set allies_n +1
*if (ally_tolly)
  *set allies_n +1
*if (ally_fell)
  *set allies_n +1
*if (ally_warden)
  *set allies_n +1
*if (ally_rows)
  *set allies_n +1
*if (ally_hob)
  *set hands +1
  Footing Watch comes in behind you at a run, soaked, with Hob at the head of them carrying a lantern in each hand. "Load path!" he bellows. "Spread the load! Pick a seat!"
*if (ally_rilla)
  *set hands +1
  Crest Watch comes down the far stair in a body, forty of them, with Rilla Hesketh in front in her Crowning silk, torn to the knee.
*if (ally_tamsin)
  *set hands +1
  Tamsin comes through the door and doesn't stop. She walks straight down the row to the seat marked WINIFRED ASHBY, 17, and stands beside it.
*if (ally_sal)
  *set hands +1
  Sal comes in with their hands full of heather and their face calm. "Hester says hurry," they say. "She says she's got about ten minutes left in her."
*if (ally_tolly)
  *set hands +1
  Tolly comes in with eleven people from Crowhill you've never seen before, all in evening dress, all soaked, all looking utterly bewildered. "They were bored," he explains breathlessly. "I told you. You'd be amazed."
*if (ally_fell)
  *set hands +1
  Master Fell comes in last of the masters, and stands in the doorway for a moment, looking at the rows of seats. Then he walks to the nearest one and sits down in it.
*if (ally_warden)
  *set hands +1
*if (ally_rows)
  *set hands +2
  And then, down the old stair from the sally port, soaked and grim and silent, the Rows come in. Mr. Dunnock first, with a lantern. Then Bet Mottram with her blue hands. Then forty, fifty, sixty people from the Rows, in their Sunday coats, who walked up the valley in the storm on a telephone call. They look at the seats, and at the names above them. Some of them are their own names.
*if (standing >= 60)
  *set hands +2
  And more: scholars from every Watch, who came because you asked, or because someone they trust asked, or because word went through the College like fire: [i]the old gallery, the Holding, everyone.[/i]
*elseif (standing >= 40)
  *set hands +1
  And more: a scatter of scholars from every Watch, who came because word went round.
*if (revealed_public)
  *set hands +1
*if (hester_plan)
  *set hands +1
*if (purchase >= 50)
  *set hands +1

*if (nan_active)
  *page_break Win
  At the middle of the row, in the seat marked WINIFRED ASHBY, 17, sits Nan Win.

  She's got up out of her wheeled chair, somehow, and come down through the Stay, somehow, eighty-eight years old, and she's sitting in her own seat with her hands on the iron rails and her eyes shut, and she's pulling. You can see it. The white threads are pouring out of the iron around her like smoke out of a fire. She's not unpicking a jumper now. She's unpicking the Stay with her bare hands, from the inside, from the seat they made her sit in seventy-one years ago.

  "Nan," says Tamsin. "[i]Nan.[/i]"

  "Go home, love," says Nan Win, without opening her eyes. "It's nearly done."

  *choice
    *selectable_if (met_hester) #"Hester's dying, Win. Listen. Listen to the wall."
      *set nan_active false
      *set strain -2
      *set nan_state "stopped"
      She opens her eyes.

      And then all of you hear it, faint, through the jangling iron, through the chord: a voice. Not singing now. Speaking. Dry, tired, and so faint it's barely there.

      [i]"Win. That's enough now, love. That's enough."[/i]

      Nan Win's hands come off the rails.

      "Hester," she whispers. "Oh, Hester. I'm sorry. I'm sorry every night."

      [i]"I know, duck. I know. Sit with me a bit."[/i]

      And Win Mottram puts her hands back on the rails, and this time she doesn't pull. She holds.
      *set hands +1
    *selectable_if ((rel_tamsin >= 55) and ((ally_tamsin) or (crowned = "tamsin"))) #Let Tamsin go to her.
      *set nan_active false
      *set strain -2
      *set nan_state "stopped"
      Tamsin kneels by her grandmother's seat in the water, and puts her hands over the old woman's hands on the rails, and doesn't take them, and doesn't pull them away.

      "Nan," she says. "Please. I want you to see it. I want you to [i]see[/i] Hebble. You can't see it if it's on top of us."

      For a long moment nothing happens. Then Nan Win's hands go still under her granddaughter's, and the white threads around the seat go dull and slack and sink.
      *set hands +1
    *selectable_if ((sway >= 55) or (rel_nan >= 40)) #Kneel by her seat and talk to her. Every argument, every truth, everything you have.
      *set nan_active false
      *set strain -2
      *set nan_state "stopped"
      You talk to her. You tell her about the drawdown, about willing hands, about Hebble in the daylight. You tell her about Hester, holding against her for thirty-one years. You tell her about her mother's letter, if you've read it, and about the kitchen table set for tea. You don't know which part does it.

      Win Mottram's hands go still on the rails.

      "Willing," she says. "You'd all sit in them seats. Willing." She looks down the rows, at the scholars, at the Rows folk, at the Crowhill set in their evening dress. "Well. Well." And she stops pulling, and starts holding.
      *set hands +1
    *selectable_if (vow_hand) #Put your hands over hers and [i]hold.[/i] Not hurting. Holding still.
      *set nan_active false
      *set strain -2
      You put your hands over hers on the rails and hold them still, the way you've held doors and cracks and falling chalk. She fights you. She's stronger than any eighty-eight-year-old has a right to be. But the Open Hand doesn't strike; it holds, and it holds, and her hands can't pull while yours are on them.

      It costs you. You're not going to be sitting in a seat of your own tonight. But the threads go slack.
      *set hands -1
    *if (not surge_used) #Break your vow, and pour the surge into the iron to drown out her pulling.
      *gosub snap_vow
      *set nan_active false
      *set strain -1
      You put your hands on the nearest rail and pour the surge into the Holding, all of it, a white flood, and for a moment the whole gallery rings in tune, and Nan Win's threads are torn out of her hands by the force of it.
    #There's no time. Leave her. Get everyone into the seats.
      You leave her. She keeps pulling. The threads keep pouring out of the iron around her seat.

*if (writ)
  *gosub the_writ

*if (writ)
  *page_break
  Nobody can move. Honoria's constables walk down the rows. They don't hurt anyone. They don't need to. They take the Heir by the arms and walk {cname} out of the Hebble Gallery and up toward the Keystone Chamber, and you stand there held in the air like a fly in amber and watch them go.
  *set bound crowned
  *if (crowned = "pc")
    Then they come for you.
  *goto_scene endings writ_bound

*page_break The Holding

"Sit down," you shout, over the jangling. "Anywhere. Any seat. Put your hands on the rails."

They sit. Scholars, Rows folk, masters, Crowhill evening dress. You sit too, in the nearest seat, under a brass plate that says THOMAS PRUITT, 15. The rails are cold and humming. The load comes up through the iron into your hands like a current.
*if (hester_plan)
  And then, through the iron, you feel her. Hester. Very faint, very far above, in her red chair, reaching down through the great black spine into the Holding with the last of her strength, the way you'd hand a sleeping child to someone at a door. [i]Here,[/i] she says, in all your heads at once. [i]Here. Take it gentle.[/i]

"In your own words," says the Warden, from the first seat, over the roar. "Choose what you'll give. A year. A month. Swear it and hold."

*temp swore ""
*choice
  #[i]"I will keep the Stay for a year and a day."[/i]
    *set swore "year"
  #[i]"I will keep the Stay until the lake is down."[/i]
    *set swore "lake"
    *set hands +1
  #[i]"I will keep the Stay for as long as it needs me."[/i]
    *set swore "life"
    *set hands +1

Along the rows, one after another, in two hundred voices, people swear. [i]A year and a day. A month. Until my children are grown. Until the lake's down. Until Hebble's dry.[/i] The Rows folk swear in the old words, the Hebble words, and some of them are weeping. Tamsin swears in her Nan's seat. Sal swears with their eyes closed.

The chord changes.

It's like a choir finding the note. One by one, two hundred and six seats of iron come into tune, and the jangling becomes a chord, and the chord becomes something so big and so sweet you can feel it in your spine and your teeth and the backs of your eyes, and the hum of the Stay (G, A-flat, A) climbs up out of the dark to meet it.

*if ((hands >= (strain + 3)) and (allies_n >= 2))
  *goto holding_success
*page_break
And stops. At A.

It isn't enough. You can feel it: the load is too much for the hands you've got, even spread. The iron is shaking under your palms. Somewhere in the wall, far below, something groans.
*if (nan_active)
  And through it all, from the middle of the row, the white threads are still pouring from the seat marked WINIFRED ASHBY.
*choice
  *if ((not surge_used) and (vows > 0) and (broke = "") and ((not vow_weep) or (vows > 1))) #Break your vow. Pour the surge into the Holding.
    *gosub snap_vow
    *set hands +3
    You pour it into the rails, all of it, the whole white flood.
    *if ((hands >= (strain + 3)) and (allies_n >= 2))
      *goto holding_success
    It isn't enough. Even that isn't enough.
    *goto holding_fail
  *if ((vow_weep) and (broke = "") and (not surge_used)) #Weep.
    *set force_weep true
    *gosub snap_vow
    *set hands +3
    *if ((hands >= (strain + 3)) and (allies_n >= 2))
      *goto holding_success
    *goto holding_fail
  #Hold on. Hold on. Hold on.
    *goto holding_fail

*label holding_success
*if (hands >= (strain + 5))
  *set hester_lives true
*set nan_sleeps true
*if (nan_state != "exposed")
  *set nan_state "stopped"
*set bound ""
*page_break
—and past it. B-flat.

The Stay's hum comes back up into its true note like someone coming up from deep water into air, and holds there, and holds, and holds, and doesn't waver. Around you two hundred people are gasping, laughing, crying. The white frays on the iron go dull, and crumble, and fall to the floor like old salt.

It holds. Everyone holds a little. Nobody holds it all.
*goto_scene endings many_hands

*label holding_fail
*page_break
You hold on. Everyone holds on. It isn't enough.

The iron screams. A seat at the far end tears out of the floor. Far below, in the heart of the dam, something gives way with a sound like the end of the world.
*choice
  #"OUT! Everybody out! Up the stairs, the crest, the hill!" Get them out while you still can.
    *set pc_fate "free"
    *goto_scene endings the_flood
  #Stay. Hold the breach yourself, with whatever you've got left, so the others have time to get out.
    *set pc_fate "dead"
    *goto_scene endings the_flood
  *if (crowned != "") #Run for the Keystone Chamber. Somebody has to take the chair. It may not be too late.
    *set strain +1
    *set path "chamber"
    *goto chamber

*comment ==================================================================
*label sluices
*page_break The Old Sluices

The sluice chambers are under the Sluice Gallery, on the east side, down a stair nobody has used in seventy years. You go down it with the water coming up it.

At the bottom there's a brick wall, black with damp, with four arches bricked up in it, and set into each brick arch a small iron door. Beyond the doors, Dr. Marchbank told you, are the wheels: iron, taller than a man, that open the gates.
*if (marchbank_key)
  Thwaite's key turns in the first lock like a knife in butter.
*elseif (nan_state = "joined")
  Nan Win is waiting at the bottom of the stair in her shawl. "Thirty years I've been pulling at this seal," she says. "Stand back, love." She puts one hand flat on the bricks, and the Council's old lean, seventy years frayed, comes apart under her palm like wet paper.
*else
  You put your palm on the first iron door and lean on the idea that there is a way through, and the Given Door opens it for you, bolt and bar and seventy years of Council seal.
Behind the door: a wheel. You put your hands on the rim.

*temp holders 0
*if ((ally_warden) or (warden_ready))
  *set holders +1
*if (fell_here)
  *set holders +1
*if (hester_plan)
  *set holders +1
*if (purchase >= 50)
  *set holders +1
*if ((nan_state = "stopped") or (nan_state = "joined"))
  *set holders +1
*if (ally_hob)
  *set holders +1
*if (ally_sal)
  *set holders +1
*if (crowned = "tamsin")
  *set holders +1
*if (ally_rilla)
  *set holders +1

"Somebody has to hold the wall while it drains," Dr. Marchbank said. "Five or six hours." You look back up the stair.
*if (holders >= 1)
  They're coming. Up in the Sluice Gallery above you, you can hear them taking their places along the cracked wall, hands on the stone.
  *if ((ally_warden) or (warden_ready))
    The Warden, in her black gown.
  *if (fell_here)
    Master Fell, unsworn, with nothing to give but his weight and his will.
  *if ((nan_state = "stopped") or (nan_state = "joined"))
    A very small old woman in a shawl, who knows this wall better than anyone alive.
  *if (ally_hob)
    Hob and the rest of Footing Watch.
  *if (ally_sal)
    Sal, humming Hester's note.
  *if (crowned = "tamsin")
    Tamsin, Crowned and unbound, with her hedge-vow blazing.
  *if (ally_rilla)
    Crest Watch, forty strong.
  *if (hester_plan)
    And, faint through the iron, Hester, reaching down from her chair with the very last of her strength, the way she promised.
*else
  Nobody's coming. It's you, and the wheels, and the water.

*if (writ)
  *gosub the_writ
*if (writ)
  *page_break
  Nobody can move. The constables take your hands off the wheel, one finger at a time, not unkindly, and walk you back up the stair.
  *set bound crowned
  *goto_scene endings writ_bound

*if (nan_state = "joined")
  *page_break Nan's way
  Nan Win is beside you at the wheels, with her hand on the rim of the second one.

  "Or," she says quietly, "we open them all. All four. All at once. And let her go."

  You understand her. Not a drawdown. A breaking. The whole Stay, let go on purpose, the lake down the valley in a night instead of a week.
  *if (evac >= 2)
    The Nethers is empty. You can feel it, somehow, through the stone: the streets silent, the houses dark, the whole of the flood-line up on Tanner's Hill in the rain.
  *else
    You don't know if the Nethers is empty. You don't know at all.
  "They'd have to look at it," says Nan. "All of them. Forever."
  *choice
    #Nan's way. Open all four. Let the wall go.
      *set path "sleepless"
      *goto_scene endings sleepless
    #No. Slowly. A quarter-turn an hour. The way Marchbank said.
      Nan looks at you for a long moment. Then she nods, and takes her hand off the wheel. "Slow, then," she says. "I've waited seventy-one years. I can wait six hours."

*page_break The drawdown
You turn the wheel. A quarter-turn. It groans like a living thing.

Somewhere on the other side of the brick, forty feet of iron gate lifts a hand's breadth, and the lake starts to come through.

*temp need 0
*set need strain
*if (holders >= need)
  *goto sluice_hold
*if ((not surge_used) and (vows > 0) and (broke = ""))
  *choice
    #The wall is cracking faster than the lake is falling. Break your vow, and pour the surge into the stone.
      *gosub snap_vow
      *set holders +2
    #Hold on, and hope.
      *set bold %+5
*if (holders >= need)
  *goto sluice_hold
*set pc_fate "free"
*goto_scene endings the_flood

*label sluice_hold
A quarter-turn an hour. All night.

The Stay cracks. You hear it go: a long, splitting groan from the face above you, and water coming through places it's never come through before. But it cracks and doesn't burst, because the people in the gallery above are holding it, hand to stone, in the dark, while the lake goes down a foot an hour.
*if (holders >= (need + 2))
  *set hester_lives true
*set nan_sleeps true
*goto_scene endings open_water

*comment ==================================================================
*label council
*page_break Order

You go to the Council's platform. Honoria Varnish sees you coming through the rain and holds out her hand, as if you've arrived at a dinner.

"Good," she says. "I knew I could rely on you."

The next hour is the hardest work you've ever done, and none of it is heroic. You help the constables clear the crest. You stand at the head of the Crown Stair with your arms out while the crowd surges past to the lift. When your friends come (Tamsin, white with rage, Hob with his runners, Sal, whoever still believes there's another way) you stand in the door with the constables, and you tell them to go home.
*if (writ)
  And when they won't, Honoria lifts the iron seal, and the Writ of Restraint holds them in the air like flies in amber, every registered Sworn on the crest, and you watch the Heir walked up the Crown Stair between two constables, and you don't look away.
*else
  And when they won't, the constables don't have the Writ anymore. So they use their hands. You don't stop them.
*set bound crowned
*goto_scene endings council

*comment ==================================================================
*label runner
*page_break The lift

The Weir Lift shed is chaos: two hundred people trying to fit into a car made for twelve, constables with truncheons, Old Samuel at the levers roaring at everyone to stand back or he'll drop the lot of them.

He sees you. He looks at you for a long time, through the crowd and the rain.
*if (crowned = "pc")
  He knows who you are. Everyone knows who you are tonight. There's still heather in your hair.
"Get in, then," says Old Samuel.

He shoves a path for you. The gate clangs shut. The car drops away from the crest into the roaring dark, down the face of the Stay, with the water jetting past the slats on every side, and Samuel works the levers with his scarred hand, grim as death.

"I've done this before," he says, not looking at you. "Twenty-two years back. Wet Winter. Took a lad down alone in the middle of the night, white as a sheet, with the Crown still on him." He spits out of the slats. "Never said a word to anyone. Not my business. People run. I run a lift."
*if (crowned = "pc")
  *if (fell_here)
    *set bound "fell"
  *elseif (warden_ready)
    *set bound "warden"
  *else
    *set bound "sal"
*else
  *set bound crowned
*goto_scene endings the_runner
`);
