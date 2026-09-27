HW.scene("ch6", String.raw`
*chapter 6 The Deep
The thaw comes early and badly.

Snow melts on the fells all at once, and the becks come down white, and the Heldwater rises a foot in a week. The Stay weeps day and night. Twice in March the hum dips to A in the small hours and stays there for a minute, two minutes, while every tuning fork in the Footings shivers on its shelf, and then (slowly, with an effort you can feel in your teeth) Hester hauls it back up.

The frays are everywhere now. Footing Watch chalks forty in a single night.
*if (revealed_public)
  The city is watching, now. There's a crowd at the Weir Lift most mornings, and a [i]Courier[/i] reporter who sleeps in the lift shed, and a Council "commission of inquiry" that has met twice and adjourned twice.
  *if (honoria_exposed)
    Honoria Varnish has not been seen on the crest since the Question. They say she's on Crowhill, and that she has not resigned, and that she has lawyers.

In the second week of March, Dr. Marchbank calls Footing Watch into the Water and Stone room, shuts the door, and pins a map of Scarrow to the wall.

*if (reported_frays)
  "You gave me the first one," she says, looking straight at you. "In writing. I've been measuring them ever since." She taps the map. "Every fray runs the same way. Out of the Stay, through the culverts, down the river. Toward the city." She takes off her glasses. "Somebody is doing this. Somebody downstream, leaning up the water into the wall, a thread at a time. Has been for years."
*else
  "Every fray in the Stay runs the same way," she says, and taps the map. "Out of the wall, through the culverts, down the river. Toward the city." She takes off her glasses. "Somebody is doing this. Somebody downstream, leaning up the water into the wall, a thread at a time. Has been for years."

"Tonight," says Hob Gorringe, very quietly, "Footing Watch is going to find out who."
*page_break The tracing

You go out through the sally port at the toe of the Stay at midnight: a low iron door at the very bottom of the dam, where Footing Watch keeps its tools, opening onto the river bank under the wall. The night is black and loud with water. Scarrow's lights are straight ahead, down the valley.

The thread is easy to find, once you know how to look. It lies in the water of the main culvert where it comes out of the Stay, a fine white line under the surface, pulsing, running away downstream in the dark.

You follow it.

It takes two hours. Along the culvert to the river. Along the river bank, under the mill wheels, past the dye-works with the blue water steaming. Into the Nethers, where the thread leaves the river and runs up a drain, and then another, under the cobbles, glinting through the gratings: Tanner's Row, Gas Street, into the Rows. Mill Lane.

Tamsin has gone quiet somewhere around the dye-works.

By the time the thread turns into Mill Lane she's stopped talking altogether, and her face in the lantern-light has gone the color of candle wax. At the corner she stops dead. Then, without a word, she starts to run.

You run after her. Hob shouts. The others fall behind.

She stops outside Number Nine: {@leave_choice = "rows"|the house where you sat eating soup at three in the morning at Midwinter.|her Nan's house, named for a house forty fathoms down.} The kitchen window is lit. It's twenty past three.

Through the glass you can see a small figure in a chair by the range, knitting very fast, without looking at her hands. The wool is white. It comes off a ball in a basket by her feet, and the ball is fed by a thread that runs across the kitchen floor, and under the back door, and out into the yard, and down the drain.

Nan Win Mottram is singing under her breath. You can't hear the words, but you know the tune. It's the note. It's Hester's note, the one that holds the Stay, sung very slightly flat, like a key turned the wrong way in a lock.
*set know_nan true
*achieve sleepless
*journal The saboteur is Nan Win Mottram. Every night for thirty-one years she has knitted and unpicked a white jumper, and her lean runs up the water into the Stay, unpicking it a thread at a time.
*page_break Number Nine, Mill Lane

Tamsin opens the kitchen door.

Nan's needles don't stop. She looks up at her granddaughter, and at you behind her, and her bright black eyes take in the lantern and the mud on your boots and the look on Tamsin's face, and something in her own face goes very tired and very old.

"Took you long enough," she says. "Shut the door, love. You're letting the cold in."

"Nan," says Tamsin. "Nan, what are you [i]doing?[/i]"

And Win Mottram tells you.

"Thirty-one years ago," she says, knitting, "the Council signed their Settlement. Said Hebble'd been paid. Said we'd gone of our own free will. Wrote it down, and signed it, and put it in the law." The needles click. "That was the week my Tam died. Your granddad, love. Holding lung. Thirty years in them seats and his chest went like wet paper. I buried him on the Tuesday and on the Friday I read the Settlement in the [i]Courier.[/i]"

She finishes a row, and turns the work.

"So I went down to the old Wordhouse that night and I swore it. [i]I will not sleep while the Stay stands.[/i] And it took. And I've not slept since." She smiles a little, at nothing. "You'd think you'd go mad. You don't. You just get very, very patient."

"And every night you pull a thread," you say.

"Every night I knit a row, and every dawn I unpick it, and every thread I unpick comes out of their wall." She holds up the white wool, and it glitters like salt. "Slow. So slow. I wanted it slow. I wanted it to take thirty years, so they'd have thirty years to see it coming, and empty the valley, and drain it proper, and build it right. I wanted them to [i]have[/i] to drain it." Her voice doesn't rise. "I wanted them to have to look at Hebble."

"It's going to break, Nan," says Tamsin. Her voice is shaking. "It's going to break and the water will come down on the Rows first. On [i]us.[/i]"

"The Rows'll be up Tanner's Hill in forty minutes," says Nan. "Why d'you think I made Ezra Dunnock drill them every year since you were a baby?" She looks at her granddaughter, and her eyes are wet. "I've thought of everything, my girl. Everything but my hands. My hands aren't what they were. I pull harder than I mean to, now. It's gone faster since the autumn. I've been frightened since the autumn." She looks at the wool. "And her."

"Hester," you say.

"Hester Quaile." The needles stop, for the first time. "She let me go. Nineteen years old, and she swore herself into that wall so two hundred of us could walk out into the light. I owe her everything I've got." Win Mottram looks at you, and her face is naked. "I know what every thread costs her. I'm sorry every night. And every night I pull another."
*set rel_nan +5
*if (nan_hint)
  You think of Hester, in her red chair: [i]I know who. I won't say. I'm not sure I'd stop them if I could.[/i]

Tamsin has sat down on the floor with her back against the dresser and her face in her hands. The range ticks. The white thread runs across the floor and under the door.

It's your choice. Tamsin can't make it. She's looking at you, from the floor, and you realise she's waiting for you to.

*label nan_choice
*choice
  *selectable_if ((know_holding) and ((hester_plan) or (eng) or (saw_gallery))) #"There's another way to give Hebble back. Willing hands in the old gallery, holding a little each, while the lake is drawn down properly. Nobody bound forever. Nobody drowned. Stop pulling, and help me do it."
    *set nan_state "stopped"
    *set rel_nan +15
    *set rel_tamsin +10
    *goto nan_stopped
  *selectable_if ((sway >= 60) or (rel_tamsin >= 60) or (rel_nan >= 30)) #Kneel by her chair and beg her to stop. For Tamsin. For Hester. For the Rows.
    *set nan_state "stopped"
    *set rel_nan +10
    *set rel_tamsin +10
    *set tender %+10
    *goto nan_stopped
  #"I'm going to the Warden. I'm sorry. This has to end tonight."
    *set nan_state "exposed"
    *set duty %+15
    *goto nan_exposed
  #Say nothing to anyone. It's her life, and her grief, and her vow. You'll find another way to save the Stay.
    *set nan_state "protected"
    *set duty %-10
    *set rel_nan +10
    *goto nan_protected
  #"Then let's finish it. Properly. Empty the valley first, then let the wall go, and make them look." Join her.
    *set nan_state "joined"
    *set duty %-25
    *set bold %+10
    *set rel_nan +20
    *goto nan_joined

*label nan_stopped
*if (tamsin_left)
  *set rel_tamsin +5
Win Mottram looks at you for a long, long time. The needles rest in her lap.
*if (know_holding)
  "The old gallery," she says slowly. "Willing hands. A year each, or a month, and home for tea at night." Her mouth twists. "They'd never. Crowhill'd never sit in them seats."

  "Then Crowhill can stay home. Let the Nethers sit, and the College, and the Rows. [i]Choosing,[/i] this time."

  Something moves behind her eyes, like light behind a door.
"I'll stop pulling," says Nan Win at last. Her voice is very small. "I'll not stop being awake; I can't, it's sworn. But I'll stop pulling." She looks at the white wool in her lap, and then she does something you'll never forget: she takes the thread where it runs across the floor, and bites it through with her three remaining teeth, and lets the end fall.

Outside, in the drain, the white line in the water goes slack and dull, and drifts, and sinks.

Tamsin makes a sound you've never heard from her, and crawls across the kitchen floor on her knees, and puts her head in her grandmother's lap, and Nan Win strokes her hair with a hand as small as a bird.
*set rel_tamsin +10
*journal Nan Win has stopped unpicking the Stay. She is still awake: her vow still stands. But she has bitten through the thread.
*goto after_nan

*label nan_exposed
*if (tamsin_left)
  *set rel_tamsin -10
Tamsin's head comes up.

"No," she says. "No. You [i]can't.[/i] She's eighty-eight. They'll hang her. They'll put her in the Crowhill gaol and she'll die there, awake, in the dark—"

"I know," you say. "I'm sorry. I'm sorry. Every night she keeps pulling, the Stay gets closer to coming down on everyone in this street."

Nan Win looks at you, and then at her granddaughter, and something in her settles, like a boat coming to rest.

"Let them come, love," she says to Tamsin. "Let them come. I'm tired." And she goes on knitting, while you go out into the lane in the grey dawn and find Hob, and tell him, and watch his face.

The constables come at seven. Nan Win goes with them in her coat and her slippers, with her knitting in a bag, and the whole of the Rows stands in their doorways in silence and watches her go, and then watches you. Mr. Dunnock, at the end of the lane, looks at you for a long moment and turns his back.

They take her up to the Council gaol on Crowhill, a long way from the river, and on the first night the frays in the Stay stop pulsing, and lie dull and white in the joints like frost.
*set rel_tamsin -35
*set rel_nan -30
*set rows_contact false
*set standing -5
*journal You told the Warden. Nan Win Mottram was arrested and taken to the Council gaol on Crowhill, far from the river. The frays have stopped moving. Tamsin has not spoken to you since.
*goto after_nan

*label nan_protected
*set rel_tamsin +5
You don't say anything to anyone.

Hob asks you on the walk back, in the grey dawn, what you found. You tell him the thread got lost in the drains under Gas Street. He looks at you for a long time, and then nods slowly, and doesn't ask again. You think he knows. You think he's decided not to.

Tamsin walks beside you all the way back to the sally port without a word. At the iron door she stops.

"Thank you," she says. And then, like it's been pulled out of her with pliers: "I don't know if you're right."

"Neither do I."

Behind you, down the valley, in a kitchen in the Rows, an old woman is knitting.
*journal You have kept Nan Win's secret. She is still unpicking the Stay, every night.
*goto after_nan

*label nan_joined
*set rel_tamsin +5
*set eng true
Win Mottram looks at you, and her face does something slow and astonished and fierce, like a fire catching.

"Well," she says. "Well, well. There's a thing."

She tells you everything. How the Stay was built, from the inside, by someone who sat in it for thirty years and listened to every stone: where the iron runs, where the old seals are, how the Old Sluices on the east side were bricked up and sealed with a Council lean seventy years ago and how that lean has been fraying for a decade. How a sluice gate, opened a quarter-turn an hour, would let the lake down a foot an hour and put the Nethers knee-deep by dawn. How many minutes the Rows need. How many minutes the rest of the Nethers would need, if anyone told them.

"We'd empty the valley first," she says. "Every soul. The Rows, the Nethers, the lock-houses. Then open the gates, and let her go, slow as we can. And the wall would crack, and the lake would come down, and at dawn they'd all be standing on Tanner's Hill, looking at Hebble."

Tamsin, on the floor, is staring at you both as if you've grown horns.

"You're both mad," she says. And then, after a long silence, very low: "Tell me how we'd warn the Nethers."
*journal You have joined Nan Win. She knows the Stay from the inside: where the old sluice seals are, and how to open them. Her way ends with an empty valley, a broken wall, and Hebble in the daylight.
*goto after_nan

*label after_nan
*if ((tolly_state = "bound") and (tolly_plan != ""))
  *goto tolly_free
*goto oathing2

*comment ==================================================================
*label tolly_free
*page_break Tolly
*if (tolly_plan = "court")
  *goto tolly_court
*elseif (tolly_plan = "persuade")
  *goto tolly_persuade
*else
  *goto tolly_snap

*label tolly_court
Nurse Pegg, as it turns out, lives on Gas Street, in the Rows, three doors from the tobacconist's, with her niece and a parrot. She is ninety and nearly blind and entirely sharp, and when you tell her what you want she sits back in her chair and folds her hands on her stick.

"Eleven nights," she says. "I sat up with that baby eleven nights, and his mother with me. And on the eleventh she stood up over the cot, white as a sheet, and said it. [i]I will not disobey my mother.[/i] In his name. I heard it take. It went through that nursery like a draught." She looks at you with milky, indignant eyes. "I told her it was wicked. She pensioned me off five years later. Very handsome pension. Very quiet." She thumps her stick on the floor. "I'll say it to any court you like. I'm ninety. What'll they do, hang me?"

The Court of the Word sits in the Guildhall on the first Monday of April.
*if (met_ebbing)
  Mr. Ebbing stands as your counsel. He has read the Oathing Act three hundred times, he tells you, and never once got to use it. He is terrified, and his hands shake, and when he stands up in court his voice doesn't shake at all.
*else
  You stand as counsel yourself, with the Oathing Act open in front of you and your heart going like the Sump bell.
Nurse Pegg testifies. Sal testifies, under the Plain Word, that Ptolemy Varnish is visibly and heavily bound, and that anyone Sworn can see the line of it running out of him like a hawser. The Council's own Oath Registry is produced, and shows no vow registered in his name. Honoria Varnish's barrister (a silver-haired man who charges, Tolly says, more per hour than Old Samuel earns in a year) argues that the vow is a private family matter, and that the nurse is senile, and that the Court has no jurisdiction over a mother's love.

The judge is an old, lean woman sworn to the Plain Word, like the Warden. She listens to everything. Then she takes off her spectacles.

*if ((lore >= 50) or ((archive_pass) and (lore >= 40)) or (met_ebbing and (lore >= 40)))
  *set tolly_state "free"
  *set honoria_exposed true
  *set rel_tolly +20
  *achieve loophole
  "Section nine," she says, "is quite clear. The Court finds that a vow was sworn on behalf of Ptolemy Varnish, unlawfully, by his mother. The vow is void." She looks at Tolly, in the dock, white as paper. "Young man. You are released."

  It doesn't snap. It unwinds. You see it: the taut line that has always run out of him like a rope goes slack, and then goes soft, and then simply isn't there. Tolly sways. He puts both hands flat on the rail of the dock. He breathes.

  At the back of the court, Honoria Varnish stands up in her grey coat, and looks at her son for a long moment, and then walks out without a word. By the evening the [i]Courier[/i] has it on the front page: [i]COUNCILLOR CRADLE-SWORE SON.[/i] By the end of the week she has resigned from the Stay Committee, and the Council has referred her to the Crown prosecutor, and Varnish House is shuttered.

  Tolly sits on the steps of the Guildhall afterwards in the April sun, with his tie undone, laughing and crying at the same time.

  "She can't tell me anything," he keeps saying. "She can't tell me [i]anything.[/i]"
  *journal The Court of the Word voided Tolly's vow. He is free. Honoria Varnish has been exposed and has resigned from the Stay Committee.
*else
  *set rel_tolly +5
  "The Court is not satisfied," she says slowly, "that the evidence of a single elderly witness, however sincere, meets the standard for voiding a vow. The petition is refused." She looks at Tolly for a long moment. "I am sorry, young man. I believe you. Belief is not proof."

  Tolly doesn't move. He sits in the dock with his hands folded. When he comes out onto the Guildhall steps his face is perfectly composed, and he says, "Well, that was worth a try," in a bright light voice, and then walks very quickly round the corner and is sick in the gutter.

  On Sunday his mother's letter says only: [i]No more of this, darling.[/i] And there is no more of it. He can't.
  *journal The Court of the Word refused Tolly's petition. He is still bound, and his mother has forbidden him to try again.
*goto oathing2

*label tolly_persuade
You go to Varnish House on a wet April evening. Honoria Varnish receives you in the library, by the same fire where she told two Councillors that her son would lose. She doesn't offer you a chair.

"I wondered when you'd come," she says.

*choice
  *selectable_if (has_report) #"Release him. Tonight, in front of me. Or the report goes to the [i]Courier[/i] in the morning."
    *set tolly_state "free"
    *set duty %-15
    *set candor %+5
    *set rel_tolly +20
    *achieve released
    Honoria looks at you for a long time. You watch her do the sum, the way Tamsin did it on the Sump Stair: risk, cost, consequence.

    "Ptolemy," she says, without raising her voice. He's been waiting in the hall; he comes in white-faced. She doesn't look at him. She looks at you.

    "I release you," says Honoria Varnish.

    You see it go out of him like a rope cut. He staggers, and catches himself on a chair, and stands there breathing.

    "You may keep your report," says Honoria, very softly. "You'll find it's worth less than you think. I'll be ready for it." She turns back to the fire. "Goodnight."
    *journal You blackmailed Honoria Varnish with the report. She released Tolly from his vow. She is still in power, and she is ready for you.
  *selectable_if ((sway >= 55) or (rel_tolly >= 70)) #Don't threaten her. Talk to her about the eleventh night. About what she was afraid of.
    *set tolly_state "free"
    *set honoria_turned true
    *set tender %+10
    *set rel_tolly +20
    *achieve released
    You talk. You don't talk about law or reports or the Council. You talk about a baby with scarlet fever, and a woman who sat up with him for eleven nights, and what it must have felt like, on the eleventh, to think that if only he'd [i]do as he was told,[/i] he'd live.

    Honoria Varnish doesn't interrupt you. At some point she sits down, in the leather chair by the fire, without seeming to notice she's done it.

    "I couldn't lose him," she says at last. Her voice is quite steady. "I couldn't. So I made it so that I couldn't. And I have been losing him every day since." She looks at the fire. "Every single day. He does everything I say, and I have never once known what he thinks."

    She's quiet for a long time.

    "Ptolemy," she says at last, not loudly. He's been waiting in the hall. He comes in.

    Honoria stands. She looks at her son, properly, for what might be the first time in eighteen years.

    "I release you," she says. "Oh, my darling. I release you."

    It goes out of him like a rope cut. He staggers, and she catches him, and for a long moment Honoria Varnish holds her son in her arms in her library, by the fire, and neither of them says anything at all.
    *journal Honoria Varnish released Tolly from his vow of her own will. Something in her has changed.
  #"Please." It's all you've got.
    *set rel_tolly +5
    Honoria Varnish smiles, not unkindly. "No," she says. "But I appreciate the courtesy of being asked." She rings for the footman. "Ptolemy will walk you out."

    He does. At the door he squeezes your hand, hard, and says, "Thank you for trying," in a voice that tells you he never expected anything else.
*goto oathing2

*label tolly_snap
He decides on the first warm night of April.

His mother's Sunday letter has a line in it: [i]Come home at Lady Day, darling; the Hesketh girl's mother is giving a dinner.[/i] It's a small command. It's the smallest command she's given all year.

"That one," Tolly says. He's sitting on the crest with the letter in his lap and his face grey in the lamplight. "It's a little one. If I'm going to break it, better a little one." He laughs shakily. "Master Fell broke his at twenty-two and it nearly killed him. I've had mine since I was one. It's in my bones." He looks at you. "Will you hold on to me?"

*choice
  #"I'll hold on to you."
    *set rel_tolly +10
    *set rom_tolly +5
  #"Tolly, you don't have to do this. Not tonight."
    *set tender %+5
    "Yes, I do," he says. "If I don't do it tonight, I'll never do it. I know myself." He smiles, badly. "I know myself very well. I've had a great deal of time to study."

He stands up on the crest in the wind. He takes a breath. You take his hands.

"Mother," says Ptolemy Varnish, clearly, to the lake. "No."

The snap is like lightning striking the crest.

It goes through him and through you, where your hands are joined: a white shock, a tearing, a sound like a hawser parting under load. His whole body arches. His eyes roll up. He'd go over the parapet if you weren't holding him.

*if ((vow_hand) or (finesse >= 55) or (purchase >= 60))
  *set tolly_state "free"
  *set rel_tolly +20
  *achieve no_mother
  *if (vow_hand)
    You [i]hold.[/i] It's what you swore for. The Open Hand can't strike, but it can stand in a doorway against a storm, and you stand in the doorway of Tolly Varnish's body and hold him together while eighteen years of vow tears itself out of him.
  *elseif (finesse >= 55)
    You don't fight it. You find the line of the vow as it snaps, the way you'd find the line of a fray, and you lean along it, thin and exact, easing it out of him the way you'd ease a fishhook out of a hand.
  *else
    You pour everything you've got into him: every scrap of purchase, all at once, a wall around him against the backlash.
  And it passes.

  He's on his knees on the cobbles, gasping, with blood coming out of his nose and his hands still locked in yours. Then he looks up at you, and his eyes are his own.

  "I said no," he says, wondering. "I said [i]no.[/i] And I'm still here."
  *journal Tolly broke his cradle vow on the crest, with you holding him through the snap. He is free.
*else
  *set tolly_state "free"
  *set tolly_hurt true
  *set rel_tolly +15
  *achieve no_mother
  You hold on with everything you've got, and it isn't enough. The snap tears through him and throws you both down on the cobbles, and when you get up he doesn't. He's breathing. He's bleeding from both ears. He doesn't wake up for two days.

  When he does, in the infirmary, he can't hear anything on his left side, and his hands shake, and the doctor says they may always shake. He listens to all this with his head on one side. Then he looks at you, sitting by the bed.

  "Am I free?" he says.

  You tell him he is.

  "Then it was cheap," says Tolly Varnish, and goes back to sleep smiling.
  *journal Tolly broke his cradle vow. The snap nearly killed him. He is deaf on one side and his hands shake. He says it was cheap.

*comment ==================================================================
*label oathing2
*page_break The Deep Oathing

Before the Deep, by old tradition, entrants and their seconds may go down to the Oathing Hall and swear a second vow, for the purchase it gives them under the water. Few do. Most first-years barely know what to do with the first.

You stand on the brass lines in the cold, with the Throat breathing at your feet, and think about it.

*choice
  *if (not vow_plain) #The Plain Word. [i]"I will not lie."[/i]
    *set vow_plain true
    *set vows +1
    *set purchase +25
    *set candor %+25
    You say it into the dark. The stone takes it like a hand closing on a coin. [i]"Heard,"[/i] says Hester, very faint and very tired.
  *if (not vow_hand) #The Open Hand. [i]"I will not strike to harm."[/i]
    *set vow_hand true
    *set vows +1
    *set purchase +25
    *set tender %+15
    You say it into the dark. The stone takes it like a hand closing on a coin. [i]"Heard,"[/i] says Hester, very faint and very tired.
  *if (not vow_door) #The Given Door. [i]"I will not refuse one who asks me for help."[/i]
    *set vow_door true
    *set vows +1
    *set purchase +25
    You say it into the dark. The stone takes it like a hand closing on a coin. [i]"Heard,"[/i] says Hester, very faint and very tired.
  *if (not vow_name) #The Kept Name. [i]"I will not speak my own name."[/i]
    *set vow_name true
    *set vows +1
    *set purchase +25
    You say it into the dark. The stone takes it like a hand closing on a coin. [i]"Heard,"[/i] says Hester, very faint and very tired.
  #The Anchor. [i]"I will not leave Scarrow."[/i] Tie yourself to the city under the wall, forever.
    *set vow_anchor true
    *set vows +1
    *set purchase +30
    *set duty %+10
    It's the oldest vow in the book, Rilla said once: the one the first Sworn of Scarrow took, before there was a Stay. It binds you to the city. It gives you purchase over the city's water, its stone, its drains, its river. You say it into the dark, and the stone takes it, and for a moment you can feel the whole of Scarrow under your feet like a living thing.

    [i]"Heard,"[/i] says Hester. And then, fainter, you'd swear: [i]"Oh, duck."[/i]
  #Nothing. What you've sworn is enough. Or what you haven't.
    *set bold %-5
    *if (vows = 0)
      You step back off the grille unsworn, as you came. The Council clerk sighs and closes his registry. Somewhere far below, you'd swear someone laughs.
    *else
      You step back off the grille. What you've sworn is enough to carry.
*page_break The Deep

The Deep is dived on the first calm morning of May.

Three barges are moored in a line on the Heldwater, a mile up the lake from the Stay, over the place where the chart says [i]Hebble (submerged).[/i] Each barge carries an iron diving bell on a chain, big as a garden shed, open at the bottom, full of trapped air. The whole College is out on the water in rowing boats, and half of Scarrow is lined up along the crest with telescopes.

The rules are old and simple. Entrants and seconds go down in the bells to the bottom, twenty fathoms, where the bells sit on the cobbles of the drowned village. From there they swim (breath held, or leaning) thirty yards to the Wordhouse of Hebble. On the stone table in the Wordhouse lies the tongue of the Hebble bell: a bronze clapper as long as your arm, carried down every spring by the previous year's Crowned and left there. The first to bring it back to their bell wins the Deep.

"The Deep counts for more than the other two together," the Warden says, on the lead barge. "It always has." She looks along the line of entrants.
*if (revealed_public)
  "Everybody here," she adds, very quietly, "knows what they are diving for."
*if (tolly_state != "bound")
  Tolly finds you on the barge, before the bells go down. He's in a diving shirt, and his face is very calm.

  "I want to tell you something," he says. "Nobody told me to. I decided it myself." He takes a breath. "I'm going to try to win it. The Deep. The Crown." He looks at you steadily. "If somebody has to go into that wall, I'd rather it was me than Tamsin, or Sal, or—" He stops. "Than you. It's the first thing I've ever chosen. I wanted you to know it was a choice."
  *set rel_tolly +5

The bell goes down.
*if (entered)
  You're in it with Hob, crouched on the iron bench in the green dark, with the air getting thick and warm and the pressure pushing on your ears like thumbs.
*elseif (second_of = "tamsin")
  You're in it with Tamsin, crouched on the iron bench in the green dark, with the air getting thick and warm and the pressure pushing on your ears like thumbs. She has the key out of her collar and in her fist.
*elseif (second_of = "sal")
  You're in it with Sal, crouched on the iron bench in the green dark. Sal has their eyes closed. "It's so quiet," they say. "I didn't know the lake was so quiet."
*else
  You're in it with Tolly, crouched on the iron bench in the green dark. He's holding your hand. He doesn't seem to know he's doing it.
The bell settles with a bump. The water inside it laps at your ankles. Below the rim of the bell, in the light of the lamps, there are cobbles.

You take a breath, and duck under the rim, and swim out into Hebble.
*page_break Hebble

It's green.

Everything is green: the light, the water, the silt that hangs in it like smoke. The lamps make soft gold rooms in the green, and in the gold rooms, as you swim, things appear. A lane between stone houses. A cart, on its side, with its shafts still up. Doorsteps. Window boxes. A garden wall, with a gate, shut. A pram.

The houses are all still standing. Their roofs are on. Their doors are closed. It looks exactly like a village where everyone has gone to bed.

It's the loneliest thing you have ever seen.
*if (vows > 0)
  Your purchase keeps the cold off, just about, and holds a little air around your mouth like a cupped hand. You can do this. You can do this for a while.
*else
  You're unsworn. There's no lean to keep the cold off. It hits your chest like a fist and your lungs start counting the moment you leave the bell. You have perhaps a minute and a half.
The lane runs straight ahead toward a squat stone tower: the Wordhouse. Other lamps are moving toward it through the green, ahead of you and behind. And off to the right, a side lane runs down between the houses. There's a name carved on the corner stone, furred with silt, but you can read it.

MILL LANE.
*temp detour false
*if (second_of = "tamsin")
  Tamsin stops dead in the water beside you. She looks down Mill Lane. She looks at the Wordhouse, where the lamps are converging. She looks at the key in her fist.

  Then she looks at you, and you can see the whole year in her face.
  *choice
    #Go with her down Mill Lane. The Crown can wait. This can't.
      *set detour true
    #Point at the Wordhouse. Win first. Come back for the house.
      *set rel_tamsin -5
      She holds your eyes for one long second. Then she nods, and kicks toward the Wordhouse, and doesn't look back at Mill Lane. You're not sure you'll ever know if that was right.
*elseif (rel_tamsin >= 50)
  Ahead of you, a lamp has stopped at the corner of Mill Lane. It's Tamsin. She's looking down the lane, and then back at the Wordhouse, and then she turns and sees you, and in the green light her face asks you something she'd never say out loud.
  *choice
    #Follow her down Mill Lane. Let the race go.
      *set detour true
      *if (second_of = "sal")
        *set rel_sal -5
      *elseif (second_of = "tolly")
        *set rel_tolly -3
    #Go on to the Wordhouse. You have your own race to swim.
      She watches you go past. After a moment, she follows you, and doesn't look back at Mill Lane.

*if (detour)
  *goto mill_lane
*goto wordhouse

*label mill_lane
Number Nine, Mill Lane, is a stone cottage with a green door and a brass knocker gone black. The window boxes still have soil in them. Tamsin hangs in the water in front of the door with the key in her hand, and for a moment she doesn't move at all.

Then she puts the key in the lock, and turns it, and it turns.

The door swings in on a slow puff of silt. Inside is a kitchen. There's a table, set for tea: three cups, a teapot, a loaf on a board, all furred grey and soft with seventy years of silt. There's a range. There's a chair by the range, just like the one in the Rows. There's a mantelpiece with a clock on it, stopped at twenty to four.

On the mantelpiece, beside the clock, there's a tin box.
*set visited_house true
*achieve the_key

Tamsin opens it. Inside, wrapped in oilskin, tied with string, dry as the day it was sealed, is a letter. On the outside, in a careful, laboured hand: [i]For Win.[/i]

You don't read it there. You can't; your lungs are screaming, and hers must be too. Tamsin puts it inside her diving shirt, against her skin, and takes one last look round the kitchen: the cups, the chair, the stopped clock.

Then she turns and swims back up Mill Lane, fast, and doesn't look back, and you follow her.

Later, much later, on the barge, wrapped in blankets and shaking, you read it together.

[i]Win. If you read this, the water came and I stayed. I would not let them make me leave, and I would not swear their oath, and that was my choice, and nobody else's. Don't you dare stay angry for me, love. Anger's a long cold thing to carry, and you've only got the two hands. Live. Marry that Mottram boy. Sleep of a night. Your loving Mam.[/i]

Tamsin reads it three times. Then she folds it up very small and puts it inside her shirt again, and puts her face in her blanket, and doesn't say anything for a long time.

"Sleep of a night," she says eventually, muffled. "Seventy-one years. She never got it."
*set nan_letter true
*set rel_tamsin +20
*set rom_tamsin +10
*journal In the drowned kitchen of Number Nine, Mill Lane, you found a letter from Nan Win's mother, never delivered: "Don't you dare stay angry for me, love... Live. Sleep of a night."

By the time you surfaced, the Deep was over.
*temp tongue ""
*if (tolly_state != "bound")
  *set tongue "tolly"
*elseif (not rilla_out)
  *set tongue "rilla"
*else
  *set tongue "sal"
*goto deep_result_set

*label wordhouse
The Wordhouse of Hebble is a squat stone chapel with a square tower. Its door is gone. Inside, the lamps show rows of benches, pale with silt, and a stone table at the far end, and on the stone table, gleaming bronze in the gold light, the tongue of the Hebble bell.

You get there at the same time as everyone else.
*if (not rilla_out)
  Rilla Hesketh's lamp is coming in through the door. Sal's is at the side window.
*else
  Sal's lamp is at the side window. Dunstan Oakes of Sluice Watch is coming in through the door.
*if ((tamsin_left) and (second_of != "tamsin"))
  Tamsin is already inside, kicking hard for the table.
*elseif (second_of != "tamsin")
  Tamsin is right behind you.
*if (tolly_state != "bound")
  And Tolly, free Tolly, is ahead of all of you, swimming as though his life depends on it, because he's decided that someone's does.
*temp tongue ""

*if (entered)
  Your hand can reach it first. It's close enough to touch.
  *choice
    #Take it. If someone has to go into the wall, it'll be you.
      *set tongue "pc"
    #Let Tamsin take it. It's what she came for. It's what she's always wanted.
      *set tongue "tamsin"
      *set rel_tamsin +5
    #Let Sal take it. They love Hester. They chose this with their eyes open.
      *set tongue "sal"
      *set rel_sal +5
    *if (tolly_state != "bound") #Let Tolly take it. He's reaching for it with both hands. It's his first choice.
      *set tongue "tolly"
      *set rel_tolly +5
    #Knock it off the table into the silt, where nobody will find it in time. Let the Crown fall to chance.
      *set tongue "none"
      *set bold %+10
*elseif (second_of = "tamsin")
  Tamsin's hand is inches from it.
  *choice
    #Help her. Push her the last yard. It's her life, and her choice.
      *set tongue "tamsin"
      *set rel_tamsin +5
    #Grab her ankle. Hold her back. You'd rather she hated you than lived in a wall.
      *set rel_tamsin -15
      *set tender %+5
      *if (not rilla_out)
        *set tongue "rilla"
      *else
        *set tongue "sal"
*elseif (second_of = "sal")
  Sal's hand is inches from it.
  *choice
    #Help them. It's what they want. It's what they've always wanted.
      *set tongue "sal"
      *set rel_sal +5
    #Get between them and the table. Just for a second. Just long enough.
      *set rel_sal -10
      *set tender %+5
      *if (not rilla_out)
        *set tongue "rilla"
      *else
        *set tongue "tamsin"
*else
  *if (tolly_state != "bound")
    Tolly's hand is inches from it. He looks back at you, through the green water, and his eyes are asking.
    *choice
      #Let him. It's his first choice. You won't take it from him.
        *set tongue "tolly"
        *set rel_tolly +10
      #Grab him. Hold him back. You didn't free him so he could walk into a wall.
        *set rel_tolly -5
        *set tender %+5
        *if (not rilla_out)
          *set tongue "rilla"
        *else
          *set tongue "tamsin"
  *else
    Tolly makes a tremendous show of swimming for it, and at the last moment, gracefully, as instructed, drifts wide. The tongue goes to the next hand.
    *if (not rilla_out)
      *set tongue "rilla"
    *else
      *set tongue "tamsin"

*if (tongue = "none")
  The clapper tumbles off the table into the silt, and vanishes in a brown cloud. Everyone scrabbles. It's Sal who finds it, by feel, lying flat on the floor with their arms buried to the elbows.
  *set tongue "sal"

*label deep_result_set
*set deep_winner tongue
*if (deep_winner = "pc")
  *set cs_pc +5
*elseif (deep_winner = "tamsin")
  *set cs_tamsin +5
*elseif (deep_winner = "sal")
  *set cs_sal +5
*elseif (deep_winner = "rilla")
  *set cs_rilla +5
*elseif (deep_winner = "tolly")
  *set cs_tolly +5

*if (not visited_house)
  *if (deep_winner = "pc")
    You swim back through the green with the bronze tongue heavy in your arms and your lungs on fire, and come up into the bell gasping, and Hob's great hands haul you out onto the iron bench, and the bell starts to rise.
  *else
    *if (deep_winner = "tamsin")
      It's Tamsin who comes back with the tongue.
    *elseif (deep_winner = "sal")
      It's Sal who comes back with the tongue.
    *elseif (deep_winner = "rilla")
      It's Rilla Hesketh who comes back with the tongue, not knowing, still not knowing, what she's carrying.
    *elseif (deep_winner = "tolly")
      It's Tolly who comes back with the tongue, holding it against his chest like something alive.
    You swim back through the green behind them, and come up into your bell gasping, and the bell starts to rise.
*if (vow_door)
  *page_break
  On the way back, as the lamps swarm back toward the bells, the Wordhouse roof gives way.

  It's slow, the way things are slow underwater: a beam lets go, and then another, and then the whole back of the roof comes down in a billow of silt. Someone is under it. A lamp, pinned. A hand, waving. It's Dunstan Oakes of Sluice Watch, and his voice comes to you through the water, distorted and bubbling, but clear enough: [i]help me—[/i]

  The Given Door closes on you like a hand. You can't refuse. You don't even try.

  You go back. You get the beam off him, you and whatever purchase you've got left, and haul him out into the lane, and get him to his bell with your vision going black at the edges. You come up in your own bell so late the barge crew have started to haul it with nobody in it.

  Dunstan Oakes finds you on the barge afterwards, grey and shaking, and grips your hand and doesn't let go for a long time.
  *set standing +10
  *set nerve +5
*page_break The Crown

That night the Board posts the final standings on the door of the Great Hall. By morning, the whole city knows.

*comment Final tally. The Deep winner breaks ties.
*temp best ""
*temp bestscore -1
*if ((deep_winner = "pc") and entered)
  *set best "pc"
  *set bestscore cs_pc
*elseif (deep_winner = "tamsin")
  *set best "tamsin"
  *set bestscore cs_tamsin
*elseif (deep_winner = "sal")
  *set best "sal"
  *set bestscore cs_sal
*elseif ((deep_winner = "rilla") and (not rilla_out))
  *set best "rilla"
  *set bestscore cs_rilla
*elseif (deep_winner = "tolly")
  *set best "tolly"
  *set bestscore cs_tolly
*if ((entered) and (cs_pc > bestscore))
  *set best "pc"
  *set bestscore cs_pc
*if (cs_tamsin > bestscore)
  *set best "tamsin"
  *set bestscore cs_tamsin
*if (cs_sal > bestscore)
  *set best "sal"
  *set bestscore cs_sal
*if ((not rilla_out) and (cs_rilla > bestscore))
  *set best "rilla"
  *set bestscore cs_rilla
*set crowned best

*if (crowned = "pc")
  *achieve crowned_self
  *set standing +10
  The name on the door is yours.

  You stand in front of it in the grey early morning, with the College filing past behind you in silence, and read it three times, and it still doesn't look like your name. [i]Crowned-elect.[/i] At Midsummer you'll stand on the crest in front of the whole city and be named Heir to the Stay.
  *if (know_crown)
    You know what that means. Everyone in the College knows what that means now. People you've never spoken to touch your shoulder as they pass, lightly, the way you'd touch a coffin.
  Hob stands beside you for a long time without saying anything. Then he says, "Footing Watch looks after its own," and his voice cracks down the middle.
*elseif (crowned = "tamsin")
  The name on the door is Tamsin Mottram's.

  She reads it standing in the corridor in her laundry apron, with a basket on her hip, and her face doesn't move at all. Then she puts the basket down, very carefully, and walks away down the corridor, and you find her an hour later on the crest, at the parapet, looking at the water with dry eyes.

  "Well," she says. "That's done, then." Her hand is at the key on its string. "Thirty years," she says. "A finger's breadth a year. I've done the sums."
*elseif (crowned = "sal")
  The name on the door is Sal Quaile's.

  Sal reads it, and nods, once, as if they've been told the time. Then they go up the Crown Stair to tell Hester, and they're gone all day, and when they come back down their eyes are red and their face is completely calm.

  "She cried," they tell you. "I've never heard her cry. She said she was proud of me." A pause. "She also said I was a bloody fool. She said both. I think she meant both."
*elseif (crowned = "tolly")
  The name on the door is Ptolemy Varnish's.

  Tolly reads it, and laughs, and keeps laughing until he has to sit down on the floor of the corridor with his back against the wall. When he stops, his face is wet and calm.

  "I did that," he says. "Nobody told me to. I did it myself." He looks up at you. "Isn't it strange? It's the first thing that's ever been [i]mine.[/i]"
*else
  The name on the door is Rilla Hesketh's.
  *if (revealed_public)
    She reads it in front of the whole College, and everyone watches her read it, because everyone knows what it means. She goes very white. Then she lifts her chin, and turns, and walks away down the corridor with her back straight, and nobody sees her again until evening.
  *else
    She reads it with a whoop, and her friends from Crest Watch lift her onto their shoulders and carry her round the Great Hall, and she's laughing, golden, triumphant, and she still doesn't know. She's the only person on the crest who's going to find out on the night.
*journal The Crown has been decided. The Crowned-elect will be named at Midsummer.

*if ((nan_letter) and ((nan_state = "protected") or (nan_state = "joined")))
  *page_break The letter
  That night Tamsin takes the letter down to the Rows.

  You go with her. You sit in the kitchen of Number Nine, Mill Lane, at three in the morning, while the needles click and the white thread runs across the floor, and Tamsin puts the oilskin packet in her grandmother's lap.

  Win Mottram reads it once. Her hands go still. She reads it again. Then she puts it down in her lap on top of the knitting, and stares at the range, and her face crumples like paper.

  "Sleep of a night," she whispers. "Oh, Mam. Oh, Mam."

  She cries for a long time. Tamsin holds her. You sit at the table and listen to the hum, very faint down here, and to the range ticking, and at some point you realise the needles have stopped for good.

  When it's nearly dawn, Nan Win picks up the white thread where it runs across the floor, and bites it through, and lets the end fall.

  "I'll not sleep," she says. "I can't. It's sworn. But I'm done pulling." She looks at you both with wet, bright eyes. "She told me not to carry it. Seventy-one years, and I never read my post."
  *set nan_state "stopped"
  *set rel_nan +20
  *set rel_tamsin +10
  *journal Nan Win read her mother's letter, and bit through the thread. She has stopped unpicking the Stay.
*page_break Before Midsummer

Midsummer is five weeks away. Hester has said Midsummer. Everyone knows what that means now, or will on the night.

Five weeks isn't long. You'll have time to do a few things properly, not everything.
*temp acts 3
*if (standing >= 60)
  *set acts 4
  (People listen to you now. It buys you time: other people will do some of the running for you.)
*label plan_hub
*if (acts <= 0)
  *goto plan_done
*if (acts = 1)
  Time for one more thing.
*choice
  *if (know_holding) *disable_reuse #Find hands for the Holding. Go and ask people to sit in the old gallery on the night.
    *set acts -1
    *gosub recruit
    *goto plan_hub
  *disable_reuse #Prepare the city. If the Stay goes, the Nethers needs to be awake before the water arrives.
    *set acts -1
    *gosub prepare_evac
    *goto plan_hub
  *if ((eng) or (class_focus = "marchbank") or (honoria_exposed)) *disable_reuse #Go to Dr. Marchbank about the Old Sluices, and the key.
    *set acts -1
    *gosub marchbank
    *goto plan_hub
  *if (rain_quest and (not rain_given)) *disable_reuse #Bring Hester her rain.
    *set acts -1
    *gosub rain
    *goto plan_hub
  *if (hester_message_given) *disable_reuse #Go and see Master Fell.
    *set acts -1
    *gosub fell_visit
    *goto plan_hub
  *disable_reuse #Go and see the Warden.
    *set acts -1
    *gosub warden_visit
    *goto plan_hub
  *if (romance != "") *disable_reuse #Spend a night with the one you love, while there's still time.
    *set acts -1
    *gosub love_night
    *goto plan_hub
  *if (council_ally >= 1) *disable_reuse #Go to Crowhill. Offer the Council your help keeping order on Crown Night.
    *set acts -1
    *gosub council_visit
    *goto plan_hub
  *disable_reuse #Train. Hard. Whatever's coming, you'd like to be better at meeting it.
    *set acts -1
    *gosub train
    *goto plan_hub
  #Let the days go by. Walk on the crest. Watch the water.
    *set acts 0
    *set tender %+5
    You let the days go. You walk on the crest in the long light evenings and watch the lake, and try to remember every detail of it, in case.
    *goto plan_hub

*label plan_done
The weeks go. The lake rises and falls. The hum dips and recovers, dips and recovers, and every time it dips a little further and recovers a little less.

And then it's Midsummer.
*finish

*comment ==================================================================
*label recruit
You go and ask people to do the hardest thing you've ever asked anyone: to come down into the dark on Crown Night, and sit in an iron seat with a dead stranger's name above it, and swear a vow, and hold.
*temp asks 0
*label recruit_hub
*if (asks >= 3)
  *goto recruit_done
*choice
  *hide_reuse #Hob, and Footing Watch.
    *set asks +1
    *if (rel_hob >= 40)
      *set ally_hob true
      Hob listens to the whole thing without interrupting, as he always does. Then he nods slowly. "Load path," he says. "Spread the load. It's the first thing they teach you." He puts out a hand the size of a spade. "Footing Watch takes the weight. That's the job. We'll be there. All of us."
    *else
      Hob listens, and frowns, and shakes his head slowly. "I'd want to see the numbers," he says. "I'd want Dr. Marchbank to see the numbers. I'm not putting first-years in a live lattice on a hunch." He means it kindly. It's still a no.
    *goto recruit_hub
  *hide_reuse #Rilla Hesketh, and Crest Watch.
    *set asks +1
    *if ((told_rilla) or (rel_rilla >= 40) or (revealed_public))
      *set ally_rilla true
      Rilla hears you out in the Crest Watch common room, with her friends crowding round. When you've finished, she stands up.
      *if (crowned = "rilla")
        "It's me they'll bind," she says. "On the night. Unless this works." Her voice is very steady. "Crest Watch. Who's coming?"
      *else
        "I owe you," she says. "I said I'd remember." She turns to her Watch. "Who's coming?"
      Every hand in the room goes up.
    *else
      Rilla listens politely, and then laughs, not unkindly. "A hundred scholars sitting in the dark in a sealed gallery, swearing vows on the word of a first-year? The Council would have us all expelled by breakfast." She pats your arm. "Leave it to the Board, Footing."
    *goto recruit_hub
  *hide_reuse #Tamsin.
    *set asks +1
    *if ((rel_tamsin >= 50) and (crowned != "tamsin"))
      *set ally_tamsin true
      "Trade you," she says, before you've even finished. "I'll sit in their seat. You find me a way to get the lake off Hebble while I do." She holds out her hand. "Deal?"

      It's a deal.
    *elseif ((rel_tamsin >= 50) and (crowned = "tamsin"))
      *set ally_tamsin true
      She hears you out on the crest, with her arms folded, looking at the water.

      "If it works," she says slowly, "I don't have to go into the wall." She doesn't look at you. "And if it doesn't, I do." A long pause. "Aye. I'll sit in their seat first. Nan's seat. If there's any chance." She finally turns her head. "Find me hands, then."
    *else
      Tamsin looks at you with flat eyes. "Why would I trust you?" she says. And walks away.
    *goto recruit_hub
  *hide_reuse #Sal.
    *set asks +1
    *if ((rel_sal >= 55) or (romance = "sal"))
      *set ally_sal true
      Sal listens to all of it, very still. Then they're quiet for a long time.

      "What is kept, keeps," they say at last. "I always thought that meant one person keeping. Keeping faith. Holding on." They look at their hands. "But a hive keeps. Every bee holds a little. None of them holds it all." They look up at you. "I think Hester would like that better. I think I would." A breath. "Yes. I'll sit in the seats."
    *else
      "No," says Sal, gently. "I know what I'm for. I've always known." They squeeze your hand. "I'm sorry. I'd like to be the kind of person who could change their mind. I'm not."
    *goto recruit_hub
  *hide_reuse #Tolly.
    *set asks +1
    *if ((tolly_state != "bound") and (rel_tolly >= 40))
      *set ally_tolly true
      "Yes," says Tolly, instantly. Then he looks astonished. "I said yes. Just like that. Nobody told me to." He grins. "I'll bring the Crowhill set, if I can pry any of them out of their drawing rooms. You'd be amazed how many of them are bored."
    *elseif (tolly_state = "bound")
      Tolly's face goes grey. "I can't," he says. "She'll hear. It'll be in Sunday's letter, and she'll tell me not to, and then I won't be able to." He grips your arm. "Don't tell me anything else. Please. Don't tell me when, or where. I'll only have to write it down."
    *else
      Tolly hesitates. "I'm not sure I'm brave enough," he says honestly. "I've only just learned to say no. I haven't learned yes."
    *goto recruit_hub
  *hide_reuse #Master Fell.
    *set asks +1
    *if ((rel_fell >= 50) and (hester_message_given))
      *set ally_fell true
      Fell looks at you over Magistrate's tank for a long time. "I'm unsworn," he says. "I've nothing to give the lattice." Then: "No. That's the coward talking. I've a life. I've twenty-two years of it I owe somebody." He puts down the tongs. "I'll be there. This time, I'll be there."
    *else
      Fell shakes his head, very pale. "I can't," he says. "I'm sorry. I ran once. I'll run again. I know what I am." He turns back to the eel.
    *goto recruit_hub
  *hide_reuse #The Warden.
    *set asks +1
    *if ((rel_warden >= 50) or (revealed_public))
      *set ally_warden true
      The Warden listens without moving. When you've finished, she looks out of her window at the lake for a long time.

      "It is against the Council's instructions," she says. "It is against the Board's resolution. It is very likely against the law." She turns. "I will open the Hebble Gallery on Crown Night. I will sit in the first seat myself." A pause. "I should have done this nineteen years ago."
    *else
      "I cannot sanction it," says the Warden. "I am sorry, Scholar. I have made a note." She always makes a note.
    *goto recruit_hub
  *if ((rows_contact) or (nan_state = "stopped")) *hide_reuse #The Rows. Mr. Dunnock, and the Hebble Society, and whoever else will come.
    *set asks +1
    *set ally_rows true
    *if (nan_state = "stopped")
      It's Nan Win who does the asking, in the end. She stands up in the ruins of the old Wordhouse, eighty-eight years old and seventy-one years awake, and tells the Hebble Society what she did, and what she's stopped doing, and what's going to happen on Crown Night. There's a long silence. Then Mr. Dunnock stands up beside her. Then the whole room.
    *else
      Mr. Dunnock listens to you in the tobacconist's back room, with his hands folded. "The old seats," he says softly. "Our seats." He's quiet a long while. "They made us, last time. If we sit in them now, it'll be because we chose to." He looks up. "The Rows will come."
    *goto recruit_hub
  #That's enough asking for now.
    *goto recruit_done
*label recruit_done
*return

*comment ------------------------------------------------------------------
*label prepare_evac
If the Stay goes, the water will reach the Nethers in minutes. The Council's sirens are gone. So you make your own.
*temp preps 0
*label evac_hub
*if (preps >= 2)
  *return
*choice
  *if (not hob_runners) *hide_reuse #Train Footing Watch as runners with Hob: out the sally port, through the Nethers, every door.
    *set preps +1
    *if (rel_hob >= 35)
      *set hob_runners true
      Hob has the routes in his head already; he grew up running them. You drill Footing Watch at night, twice a week, out the sally port and down through the sleeping Nethers, until the slowest of you can do Tanner's Row to Gas Street in four minutes flat.
    *else
      Hob says he'll think about it. He's still thinking about it at Midsummer.
    *goto evac_hub
  *if ((bg = "levy") and (not evac_mam)) *hide_reuse #Go home to Number Three Lock. Tell Mam everything, and ask her to be ready with the old siren.
    *set preps +1
    *set evac_mam true
    Mam listens, with her hands round her cup, and doesn't interrupt. When you've finished she goes out to the shed and oils the old hand-crank siren, and cranks it once, and the whole Cut hears it wail. "Just so they know what it sounds like," she says.

    Pip insists on learning to crank it too. He can't turn it fast enough yet. He practises every day.
    *goto evac_hub
  *if ((met_dunnock) and (not rows_contact) and (nan_state != "exposed")) *hide_reuse #Telephone the tobacconist's on Beck Street, and ask for Mr. Dunnock.
    *set preps +1
    *set rows_contact true
    Mr. Dunnock is quiet on the line for a long time. "The Rows will be ready," he says at last. "The Rows have always been ready. Ring this number on the night, and we'll be on Tanner's Hill in forty minutes."
    *goto evac_hub
  *if ((revealed_public) or (has_report)) *hide_reuse #Go to the [i]Courier[/i]. Put the flood routes on the front page, so the whole city knows where to run.
    *set preps +1
    *set evac +1
    The woman from the [i]Courier[/i] (her name is Amelia Crake, and she has not slept properly since the Question) prints a map of the flood routes across the middle pages, with the Nethers shaded grey, and a headline: [i]IF THE HUM STOPS: WHERE TO RUN.[/i] The Council protests. Nobody listens to the Council anymore.
    *goto evac_hub
  #That's all you can do for now.
    *return

*comment ------------------------------------------------------------------
*label marchbank
Dr. Marchbank is in the Water and Stone room at midnight, surrounded by drawings of the Old Sluices.
*if (honoria_exposed)
  "They can't hold me to silence about a report the whole city's read," she says, before you've said a word. "The vow was [i]I will not publish.[/i] It's published." She sounds almost cheerful.
*else
  "I can't publish it," she says, before you've said a word. "I swore. But I never swore not to [i]teach.[/i]"
She shows you. Four gates, on the east side, under the Sluice Gallery, bricked up and sealed with a Council lean seventy years old and fraying now. Behind the bricks, iron wheels as tall as a man. A quarter-turn an hour on each gate, she says, and the lake comes down a foot an hour. The Nethers floods to the knee by dawn. The Stay's load halves by morning.

"Somebody would have to hold the wall while it drained," she says. "It'll crack. It'll want holding for five or six hours. Longer if it's gone bad." She looks at you. "And the Nethers would have to be empty first. Everybody out. I won't do it with people in their beds."

Then she takes a key out of her waistcoat pocket: iron, as long as your hand, black with age. She puts it on the drawing between you.

"The master key to the sluice chambers," she says. "Thwaite's own. It's been in my desk for eleven years." She doesn't pick it up again. "I'm going to step out for eleven minutes. There's nothing on this table you should take."

She steps out. The key is on the table.
*set eng true
*set marchbank_key true
*journal Dr. Marchbank has shown you the Old Sluices: four gates, a quarter-turn an hour, the lake down a foot an hour. Someone must hold the wall for five or six hours while it drains, and the Nethers must be empty first. You have Thwaite's key.
*return

*comment ------------------------------------------------------------------
*label rain
The first real rain of summer comes on a Thursday night, hard and warm, off the fells.

You go up onto the crest in it with a stone jar, and stand in the dark until the jar is full and you're soaked to the skin, and then you carry it down the Crown Stair in both hands, careful as if it's full of eggs.
*if (vow_door)
  (She asked. You couldn't have refused her. You'd never have wanted to.)
Hester hears you coming. "What have you got?" she says. "You're dripping. You're [i]dripping.[/i] What've you—"

"Tip your head back," you say.

She does. And you pour the rain over her face, slowly, the whole jar, warm summer rain off the fells, and it runs through her white hair and down her cheeks and into the collar of her cardigan, and she opens her mouth, like a girl on a dock, and catches it.

She doesn't say anything for a long time. Her hands stay on the rails. Her face is wet, and it isn't all rain.

"Pier Street," she says finally. "The smell of it. Oh, that's Pier Street." She laughs, a wet, cracked, marvelous sound. "Oh, duck. Oh, you daft, lovely—" She stops. "Forty-one years."
*set rain_given true
*set rel_hester +20
*achieve rain
*if (not hester_plan)
  When she can talk again, she says: "I'll give you something back. You'll need it." She grips your wrist. "On the night, when I let go (and I will, I've said Midsummer), I'll not just let go. I'll hand it over to whoever's there to take it. Bring me hands, or bring me the Heir, but bring me somebody, and I'll give it to them gentle. I'll not drop it on you."
  *set hester_plan true
*else
  When she can talk again, she says: "Bring me hands, on the night. I'll hand it over gentle. I promised." She squeezes your wrist. "Now I've got two reasons to keep that promise."
*return

*comment ------------------------------------------------------------------
*label fell_visit
Master Fell is in his attic room, and he's different.

It takes you a moment to see how. His cuffs aren't pinned. His chalk isn't sharpened. There's a book face-down open on his desk (Fell, who shelves by height) and he's sitting on the windowsill with his feet up, looking at the lake.

"I went," he says, before you ask. "On the Sunday. Up the Crown Stair, all the way. I knocked." He laughs, not quite steadily. "She said, [i]Ambrose, you took your bloody time.[/i] And then she made me put the kettle on."

He looks at you.

"She told me the same thing she told you. Nothing to forgive." He shakes his head. "She says the thing I've got to do isn't to be forgiven. It's to stop running." A long breath. "I've been thinking about what that would mean. On the night."
*if (rel_fell >= 50)
  *set fell_ready true
  *set rel_fell +10
  He stands up, and he's steadier than you've ever seen him.

  "If it comes to it," says Ambrose Fell, "and there's nobody else, then this time I'll be there. I'll take the chair. I'm forty-four, my lever's shorter than it was, but it's long enough to be worth something." He smiles, a real one. "Twenty-two years late. But I'll be there."
  *journal Master Fell says that if it comes to it, this time he will take the chair.
*else
  *set rel_fell +5
  He doesn't finish the thought. You can see him not finishing it. "I'm working on it," he says. "Give me time."
*return

*comment ------------------------------------------------------------------
*label warden_visit
The Warden is at her window, as she always seems to be now.

"Scholar," she says. "Sit."

You talk about Midsummer. You talk about the Heir, and the chair, and what happens on the night. She answers every question you ask exactly, and when she can't answer, she's silent, and you've learned how to hear her silences.
*if ((rel_warden >= 60) or (revealed_public and (rel_warden >= 45)))
  *set warden_ready true
  *set rel_warden +5
  At the end she's quiet for a long time.

  "I am sixty-three," she says. "The lever is short. If I swore the Great Vow, I'd hold the Stay for five years. Perhaps six." She looks at you. "Long enough for a city to build a proper dam, if it were shamed into it." Her voice is perfectly level. "If there is no other way on the night, I will take the chair. I want you to know that. I have asked others to do it for nineteen years. I would like, once, to do the thing I have asked."
  *journal The Warden: "If there is no other way on the night, I will take the chair. Five years, perhaps six."
*else
  *set rel_warden +5
  At the end she stands up, which means you're dismissed. "Thank you for asking," she says. "Exactly. As always."
*return

*comment ------------------------------------------------------------------
*label love_night
*set love_scene true
*if (romance = "tamsin")
  *set rel_tamsin +10
  You spend it in the laundry, among the warm sheets, with the boilers ticking and the hum overhead. Tamsin talks, for once: about Hebble, about her mam's blue hands, about what she'd do if she had a life with nothing owed in it. You listen. At some point she falls asleep on your shoulder, mid-sentence, and you realise you've never seen her sleep before, and you don't move until morning.
*elseif (romance = "tolly")
  *set rel_tolly +10
  You spend it on the crest, and then in his rooms, and then on the crest again at dawn, because Tolly can't sit still for joy. He has decided a great many things lately, all by himself. He tells you all of them, in order, with footnotes.
  *if (tolly_state = "bound")
    Just before dawn he goes quiet, and says, "I'll have to write this down on Sunday. All of it." And then, very softly, "I don't care. Let her read it. Let her read every word."
*else
  *set rel_sal +10
  You spend it on the crest by the hives, in the short summer dark, with Sal's head on your chest and the bees asleep. Sal tells you every true thing they can think of, one after another, and you tell them yours, until there aren't any left and you're just breathing.
*return

*comment ------------------------------------------------------------------
*label council_visit
*set council_ally +2
*set duty %+10
Honoria Varnish's house on Crowhill is quiet these days. She receives you in the library.
*if (honoria_exposed)
  She has lost the Committee, and her name is in the papers, and she looks older. But the Council still owns the Writ of Restraint, and in an emergency somebody will have to hold it, and she has made sure that somebody is her.
"On Crown Night," says Honoria, "there will be people on the crest who think they know better than the law. People who will try to stop the Heir from doing what the Heir must do. Some of them, I'm afraid, are your friends." She looks at you steadily. "I would like there to be someone on the crest that night who understands that order is a kindness. That a city is a promise, and that somebody has to keep it."

You tell her you'll be there.

"Good," says Honoria Varnish. "The Council remembers its friends." She holds out her hand. "And so, you'll find, do I."
*journal You have promised Honoria Varnish your help keeping order on Crown Night.
*return

*comment ------------------------------------------------------------------
*label train
*choice
  #With Master Fell: finesse, precision, the thin exact lean.
    *set finesse +10
    Fell works you until you can stitch a cube of chalk dust back together in the air after it falls apart.
  #In the lower galleries, alone: nerve, cold water, the dark.
    *set nerve +10
    You swim the East Culvert every night for a month until the cold doesn't stop your heart anymore.
  #In Mr. Ebbing's archive: lore, the law, the Stay's own history.
    *set lore +10
    You read everything Ebbing has. At the end he gives you his own notes on the Holding, twenty years of them, in a shoebox tied with string.
  #Among the College: sway. Talk to people. Listen. Be seen.
    *set sway +10
    *set standing +10
    You eat at every Watch's table. You learn everyone's name. By Midsummer, people stop talking when you come into a room, and wait to hear what you think.
*return
`);
