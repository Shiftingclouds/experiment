HW.scene("ch4", String.raw`
*chapter 4 Midwinter
At Midwinter the College lets you go.

It's only for a day: Midwinter Eve, from the first lift down at dawn to the last lift up at dusk. But after three months inside the wall, a day in Scarrow feels like a year. The whole College queues at the lift shed in the dark, stamping and steaming, with parcels and scarves and loud plans, and Old Samuel takes them down twelve at a time, grumbling magnificently, his hand long healed.

You've had invitations. You can only take one.

*choice
  *if (bg = "levy") #Home to the Nethers, to Mam and Pip at Number Three Lock.
    *set leave_choice "home"
    *goto leave_home_levy
  *if (bg = "legacy") #Home to Crowhill, to your mother and the tall cold house on the hill.
    *set leave_choice "home"
    *goto leave_home_legacy
  *if (bg = "outsider") #Hob has asked you home to his family's bakery in the Nethers. Nobody should spend Midwinter alone, he says.
    *set leave_choice "home"
    *goto leave_hob
  *selectable_if ((rel_tamsin >= 30) or (second_of = "tamsin")) #Tamsin has asked you (gruffly, in the form of a trade) to the Rows, to meet her Nan.
    *set leave_choice "rows"
    *goto leave_rows
  *selectable_if ((rel_tolly >= 35) or (bg = "legacy") or (second_of = "tolly")) #Tolly has begged you to come to his mother's Midwinter Ball on Crowhill.
    *set leave_choice "ball"
    *goto leave_ball
  *selectable_if ((rel_sal >= 30) or (second_of = "sal") or (archive_pass)) #Sal is going to the City Archive to read the Founding Rolls, and has asked if you'd like to come.
    *set leave_choice "archive"
    *goto leave_archive

*comment ==================================================================
*label leave_home_levy
Number Three Lock is exactly where you left it: a squat stone cottage beside the Cut, with the lock gates black and dripping in the frost and the Stay going up behind it into the fog like the side of the world. The hum here is so loud the window glass buzzes. You'd forgotten. You'd forgotten how loud home is.

Pip hits you at the gate at a dead run, all elbows, and nearly knocks you into the canal.

He's grown. He's got a gap in his teeth you've never seen. He talks without breathing for eleven minutes, about school, and the ice on the Cut, and a dog down the row that can open doors, and did you do magic yet, did you, did you, can you show him, [i]now?[/i]

*choice
  *if (vows > 0) #Show him.
    *set tender %+5
    *if (vow_plain)
      You tell him you'll show him something true. You pick up a stone from the towpath and say, "This stone will fly," and lean on the words, and it does: it leaps out of your palm and skips seven times across the Cut. Pip screams with joy. Then he says, "Say something that isn't true!" and you try, and your mouth won't, and he laughs so hard he has to sit down.
    *elseif (vow_hand)
      You tell him to throw a snowball at you as hard as he can. He does, with the terrible accuracy of little brothers. It stops a foot from your nose and hangs there, turning, sparkling, while Pip's mouth falls open. Then you let it drop on his head.
    *elseif (vow_door)
      You take him to the lock-keeper's shed, which Mam keeps padlocked and which Pip has been trying to get into since he was four. You lay a finger on the padlock. It falls open in the snow. Pip looks at you as if you've become God.
    *elseif (vow_name)
      You tell him to find you. Then you step back against the cottage wall, and let the world stop looking. Pip spins in a circle, and looks right through you twice, and starts to wail, and you have to grab him quick and hold on while he thumps you.
    *else
      You show him your wild, grief-shaped purchase: a candle flame on the windowsill that stands up straight and still while the draught whistles around it. Pip watches it for a long time, very quietly, which isn't like him.
  *if (vows = 0) #Tell him the truth: you swore nothing, so you can't do magic.
    *set candor %+10
    Pip looks at you as if you've told him you went to the moon and didn't bother looking out of the window. "Nothing?" he says. "[i]Nothing?[/i]"

    "I can see other people's vows," you offer. "Like threads."

    He considers this, then shakes his head in sorrow. "That's rubbish," he says, and hugs you anyway.
  #"Later. First I want to hear about this dog."
    *set tender %+5
    He tells you about the dog. It takes twenty minutes and involves a sausage, a door, and a policeman.

Mam comes out wiping her hands on her apron. She's smaller than you remember, and her hands are the same as ever, rope-scarred and red with cold. She holds your face in them and looks at you for a long time as if she's checking a lock gate for leaks.

"You're thin," she says. "They feed you that turnip muck?"

They do. You tell her so, and she snorts, and you go in to the fire.

It's later, after goose and pudding, with Pip asleep across two chairs with his mouth open, that she tells you about the culverts.

"The weep-drains under the lock," she says, low. "The ones that come through from the Stay. They've been running white since the autumn. Salt, like. Crust on the sills." She turns her cup in her hands. "A man came from the Council in November. Said it was mineral. Said I wasn't to mention it to anyone, as it'd only frighten people." She looks at you. "Then in the spring they took the sirens down off the lock-houses. 'Modernising,' they said. They've not come back." She jerks her chin at the shed. "There's only the old hand-crank left at Number Three. Your grandad's. It still works. I oil it."

*choice
  *selectable_if (know_frays) #"Mam. If the hum ever drops and doesn't come back up, crank that siren and get the whole Nethers up the hill. Promise me."
    *set evac_mam true
    *set duty %-5
    *set candor %+5
    She looks at you for a long moment. She's a lock-keeper; she knows water, and she knows what it means when someone who's been up inside the wall comes home and says that.

    "I promise," she says. "And you'll promise me something back. If it goes, you'll not be the one standing in the hole."

    *if (vow_plain)
      You open your mouth, and find that you can't say it. Not [i]I promise.[/i] Not unless you mean it. The Plain Word holds your tongue like a hand.

      Mam sees. Her face goes very still. "Right," she says quietly. "Right, then." And she reaches out and grips your hand so hard it hurts.
    *else
      "I promise," you say.
    *journal Mam will crank the old siren at Number Three Lock and get the Nethers up the hill if the hum ever drops and stays down.
  *selectable_if (not vow_plain) #"It's fine, Mam. Honestly. The Stay's held seventy years. It's mineral, like the man said."
    *set tender %+10
    *set candor %-10
    She searches your face. You hold steady. Eventually she nods, and her shoulders come down, and she pours you another cup of tea. "You'd know," she says. "You're up there." It's the first time in your life you've heard her sound relieved to be told something.
  #Don't say anything. Just sit with her by the fire, and listen to the hum.
    *set bold %-5
    You sit. The fire settles. The window buzzes. After a while Mam says, "It's louder this year, isn't it," and you say, "Yes," and neither of you says anything else.

Just before you leave, Pip wakes up and gives you a drawing he's been saving. It's the Stay again, with its face, but this time there's a figure inside it, in the middle of the wall, holding it up with both arms. It's labelled YOU.

"Are you going to be the Keystone?" he asks. "Like the lady inside the wall? Teacher says she holds it all up by herself."

*if (know_crown)
  You can't answer him. You hold the drawing and can't say a single word.
*else
  "I don't think so, Pip," you say. "That's a very special job."

  "You'd be good at it," says Pip, and goes back to sleep.
*goto evening

*comment ==================================================================
*label leave_home_legacy
The house on Crowhill is exactly as you left it: tall and grey and correct, with the snow lying perfectly on the box hedges as though somebody arranged it. From the front steps you can see the whole of Scarrow spread out below, and the Stay at the head of the valley, pale in the fog. From up here the hum is almost nothing. You'd forgotten that. From Crowhill, you can hardly hear the wall at all.

Your father meets you in the hall, in his gardening coat, smelling of the orchid house, and hugs you without a word, which is how your father says most things. Your mother arrives at four, from a Committee meeting, in her court coat, and kisses your forehead as though stamping it, and asks whether you've signed anything.

Dinner is excellent and very quiet. Your mother asks about your lectures, and listens to the answers, and asks sharp questions about them. She is interested in everything except the one thing you mention.

"They've opened the Crown to first-years," you say.

"The Board's decision," says your mother, too quickly. "Not the Committee's." She puts down her fork. "Are you entered?"
*if (entered)
  You tell her you are. Something moves behind her face, very fast, and is gone. "I see," she says, and picks up her fork again, and doesn't eat anything else.
*else
  You tell her you're not, that you're seconding a friend. She breathes out. It's a small breath. You'd never have noticed it if you hadn't been watching for something.

Later, when your father has gone back to his orchids and your mother has been called to the telephone, you go past her study. The door is ajar. The lamp is on. On the desk, on top of a pile of Committee papers, is a thick grey folder with a typed label.

[i]REPORT ON THE CONDITION OF THE STAY. O. MARCHBANK, D.ENG. CONFIDENTIAL TO THE STAY COMMITTEE.[/i]

*choice
  #Read it. Quickly, standing up, with one ear on the hall.
    *set know_report true
    *set candor %-5
    *goto legacy_read
  #Take it. She won't notice until morning.
    *set know_report true
    *set has_report true
    *set report_source "mother"
    *set duty %-15
    *set candor %-10
    *achieve midwinter_thief
    *goto legacy_read
  #Wait for her to come back, and ask her about it to her face.
    *set candor %+15
    *set bold %+5
    *goto legacy_confront
  #Leave it. It's hers. Whatever it says, she'll have her reasons.
    *set duty %+10
    You leave it. Walking away is harder than you expected. The label stays behind your eyes all through the rest of the evening, and all the way back down the hill.
    *goto evening

*label legacy_read
You read it fast. Most of it is numbers: loads, seepage rates, the thickness of the stone at forty levels, graphs that go up. But the summary on the first page is written for Councillors, in plain words, and you read it twice.

[i]The Stay is structurally inadequate and has always been so; it stands because it is held. The rate of deterioration has increased markedly in the last three years, for reasons not fully understood. It is the author's professional opinion that without substantial reinforcement or a controlled drawdown of the Heldwater, the Stay will fail within fourteen to twenty months, and that when it fails it will fail suddenly. The author strongly recommends that the Nethers flood warning system be restored immediately and that the Committee proceed at once with drawdown.[/i]

At the bottom, in your mother's neat hand: [i]Committee: received. Not to be circulated. Warden informed under seal.[/i]

Fourteen to twenty months. You found the first fray in October.
*journal Dr. Marchbank's report to the Council: the Stay will fail within fourteen to twenty months without reinforcement or drawdown. The Committee has buried it.
*if (has_report)
  You slide the folder inside your coat and go back to the drawing room, and sit very still, and your heart is going like the Sump bell.

  Your mother doesn't notice that night. In the morning, as you're leaving for the lift, she stops you on the front steps and straightens your scarf, and says, very quietly, looking at the scarf and not at you: "Be careful what you carry." Then she goes back inside and shuts the door.
*else
  You put the folder back exactly as it was, square to the edge of the desk, and go back to the drawing room, and sit very still. When your mother comes back she looks at you once, sharply, and you look back at her, and neither of you says anything at all.
*goto evening

*label legacy_confront
When your mother comes back from the telephone she finds you standing in her study with the grey folder in your hands.

She doesn't shout. She's never shouted in her life. She shuts the door behind her, and sits down in her own client's chair, and looks at you the way she looks at a witness.

"That's a draft," she says. "The Committee is considering it."

"It says the Stay will fail."

"It says an engineer believes the Stay will fail. Engineers believed the Stay couldn't be built." She folds her hands. "The Stay has held for seventy-one years. It will hold."

*choice
  #"Do you believe that? Actually believe it?"
    *set candor %+5
    For a long moment your mother doesn't answer. Then she says, not quite steadily, "I don't make the decisions. I tell them what's legal."

    It's the first time in your life you've heard her say something that isn't an argument.
    *set know_report true
  #"The Nethers doesn't even have sirens anymore. Did you know that?"
    *set tender %+5
    *set duty %-5
    "The warning system is being modernised," she says. Then she stops, and looks at the window, down the hill at the lights of the Nethers, and doesn't finish the sentence.
    *set know_report true
  #"Then you won't mind if I take it back to the College with me."
    *set bold %+10
    *set duty %-10
    She looks at you for a very long time. You can see her weighing it the way she weighs a case: the risk, the precedent, what it costs her, what it costs you.

    "I didn't see you take it," she says at last. "I'm going to go and say goodnight to your father. When I come back, I won't have seen you take it." She stands. At the door she stops, without turning round. "Be careful what you carry," she says. And goes.
    *set know_report true
    *set has_report true
    *set report_source "mother"
    *achieve midwinter_thief
*journal Dr. Marchbank's report to the Council: the Stay will fail within fourteen to twenty months without reinforcement or drawdown. The Committee has buried it.
*goto evening

*comment ==================================================================
*label leave_hob
The Gorringes' bakery is on Tanner's Row, deep in the Nethers, three streets from the river, in the shadow of the Stay. It smells of yeast and woodsmoke from half a mile away. Hob's mother is four foot ten and runs the place like a battleship. Hob's father is Hob, thirty years older and with flour in his beard. There are seven more Gorringes, all enormous, all ginger, and all of them are delighted to have a foreigner at the table.

But first Hob takes you down to the harbor, to the Lisk Seamen's Mission, because he's worked out that's where your post would come, and he's right.

There is a letter from your mother. It's short. It's always short. [i]The minister preached on the sin of binding. Everyone looked at me. I looked back. Are you eating? The Haarlem boat came in with no herring; everyone is poor this winter. I am well. Do not do anything that frightens you unless it must be done. Your mother.[/i]

You read it three times on the Mission steps with the wind off the Strait in your face, and your eyes sting, and nothing happens, because nothing ever happens. Hob stands a little way off and looks at the boats, and doesn't say anything, which is exactly right.

Midwinter dinner at the Gorringes' is loud, enormous, and involves a loaf the size of a cartwheel baked in the shape of the Stay. You eat until you can't move. Hob's youngest sister asks you whether it's true that in Lisk you can go to prison for making a promise, and you say, more or less, and the whole table goes quiet and then furious on your behalf, and Mrs. Gorringe gives you a third slice of the Stay.

Afterwards Hob takes you out into the back yard, where a stone culvert comes out of the ground and runs down to the river. He lifts his lantern.

The water in the culvert is running white.

"It's coming through from the Stay," he says. "All the old drains in the Nethers come from the wall. This one's been white since October." He squats beside it. "The Council took the sirens down in the spring. Modernising. They've not come back." He's quiet a moment. "If the Stay goes, the Footings'll know first. We're at the bottom. We'd feel it before anyone."

He picks up a pebble and turns it in his fingers.

"I've been thinking. Footing Watch could be out the sally port at the toe in four minutes. From there the Nethers is a ten-minute run. Thirty runners could wake the whole Nethers in half an hour: bang on every door, get them up the hill." He shakes his head. "It's daft. Nobody'd sanction it."

*choice
  #"It's not daft. Draw up the routes. I'll help you train them."
    *set hob_runners true
    *set rel_hob +15
    *set duty %-5
    Hob looks at you for a long moment. Then his beard splits into that slow sunrise of a smile. "Right," he says. "Right. I've a map of the Nethers in my head already. I grew up running these streets." He stands, brushing off his knees. "We'll call it drills. Nobody minds drills."
    *journal Hob will train Footing Watch as runners: out the sally port at the toe, through the Nethers, waking every door, in half an hour.
  #"If the Stay goes, half an hour won't be enough."
    *set candor %+5
    "No," says Hob. "Probably not." He throws the pebble into the culvert, and the white water swallows it. "But it'd be more than the Council's got."
  #"You should tell the Warden what you've seen."
    *set duty %+10
    *set rel_hob +5
    "I did," says Hob. "In October. She thanked me very exactly and said she'd made a note." He shrugs. "She always makes a note."

When you leave, Mrs. Gorringe wraps half a loaf in a cloth and presses it on you, and you realise (a little late) that it's a Midwinter gift, and that in the Nethers you don't refuse one.
*goto evening

*comment ==================================================================
*label leave_rows
Hebble Rows is eight streets of back-to-back houses crammed between the gasworks and the river at the very bottom of the Nethers, so close to the Stay that the fog there never lifts. The houses were built seventy-one years ago, fast and cheap, for three hundred people who'd just lost their valley. They have stood ever since, black with soot and damp, and the people in them have stayed.

Tamsin walks you down Mill Lane (every street in the Rows is named after a street in Hebble) and says nothing the whole way, and you realise she's nervous. She has never, you suspect, brought anyone home.

Her mother is on the doorstep: a thin, tired woman with a kind face and hands dyed deep blue to the elbow from twenty years at the vats. "Bet," she says, shaking your hand, and then, to Tamsin, "Your Nan's been up since three. She's made enough soup for an army."

Nan Win Mottram is eighty-eight. She is about the size of a large cat, and she sits by the range in a chair with the stuffing coming out, knitting something white, very fast, without looking at her hands. Her eyes are bright and black and perfectly awake. When you come in she looks you up and down once, the way a jeweller looks at a stone.
*set met_nan true
*set rel_nan +10

"So you're the one," she says.

*choice
  #"The one what, Mrs. Mottram?"
    *set candor %+5
    "The one she won't stop not talking about," says Nan, and Tamsin says "[i]Nan,[/i]" in a voice you've never heard her use, and goes scarlet to the ears, and Nan cackles like a kettle.
    *set rom_tamsin +5
  #"Depends which one she's told you about."
    *set tender %-5
    Nan cackles like a kettle. "Oh, I like this one," she says to Tamsin. "Sit down, love. Sit. You'll eat."
  #Bow, formally, as you would to a Councillor.
    *set rel_nan +5
    Nan looks delighted. "Manners!" she says. "In my kitchen! Tamsin, where d'you find it?"

You eat. There's soup (barley and bacon and something green) and bread, and more soup. Nan doesn't eat. She knits, and watches you, and talks. She tells you about Hebble as if she walked out of it this morning: the mill on the beck, the Wordhouse with its squat tower and its bell, the fair on Lammas day, the sheep, the way the valley smelled after rain. She knows every house. She knows who lived in every house, and what they grew, and who they married, and who they didn't speak to.

Tamsin sits across from you with her elbows on the table and listens as if she's never heard any of it before, though you can see her lips moving along with the names.

Later, much later, when Bet has gone to her night shift and it's dark outside and the fire is low, Nan's hands are still going. The white thing on her needles has grown into most of a jumper.

*if ((know_frays) or (lore >= 35) or (bold <= 40))
  *set clue_knitting true
  You find you're watching the wool.

  It's very white. Whiter than any wool you've ever seen, with a faint crystalline shine where the firelight catches it. It looks like salt. It looks, in fact, exactly like the threads in the galleries.
  *if (touched_fray)
    When Nan's back is turned you touch the ball of wool in her basket, very lightly. It's cold. Colder than wool has any right to be. And there, just for a moment, you feel it: a tug. The same patient tug you felt in the Third Gallery, running away from you through the thread. Except this time it's running [i]upstream.[/i]
  *journal Nan Win knits with white wool that looks exactly like the frays in the galleries.
*else
  The fire crackles. The needles click. It's very peaceful.

"Do you never sleep, Mrs. Mottram?" you ask.

"Not in thirty-one years," says Nan, comfortably. "I swore I wouldn't. Never you mind what for." Her needles don't stop. "At dawn I'll unpick this and start again. Keeps my hands busy." She smiles at you, a sweet old smile with three teeth missing. "Everybody needs something to do in the night."

*if (saw_gallery)
  *choice
    #"I saw your name, Mrs. Mottram. In a gallery under the Stay. Winifred Ashby, seventeen."
      *set know_holding true
      *set lore +5
      The needles stop.

      It's the first time they've stopped all night. Tamsin looks at her grandmother, and Nan looks at the fire, and for a long moment the only sound in the kitchen is the hum, faint down here, far off.

      "They made us sit in rows," says Nan Win quietly. "In the dark, like chapel. Two hundred and six of us, with our hands on the iron. [i]I will not leave the valley.[/i] That's what we swore. That's what they made us swear, with the constables at the door and the water coming up behind us." She looks at her hands. "I was seventeen. My mam wouldn't swear. She stayed in the house instead. The water came up." A breath. "Thirty years I sat in that room, three nights in seven, holding up their wall. Till they built the Keystone, and put that girl in it, and let the rest of us go."

      "Hester Quaile," says Tamsin.

      "Hester Quaile," says Nan. "Nineteen years old. She swore herself in so we could walk out. Two hundred of us. I owe that woman everything I have." Her needles start again, very fast. "Everything."
      *journal Nan Win was one of the two hundred and six made to swear the Holding: rows of villagers holding the Stay through the iron in the Hebble Gallery, for thirty years, until Hester Quaile became the Keystone and set them free.
      *set rel_nan +5
    #Say nothing about it. Not here, not tonight.
      *set candor %-5
      You keep it to yourself. Nan's needles click on.

Before you go, Nan beckons you close with a finger like a twig.

"You mind my girl," she says, low, so Tamsin can't hear. "She thinks she has to carry everything herself. She got that from me." Her black eyes hold yours. "Don't you let her."
*achieve soup

Down at the end of Mill Lane, in the ruins of the old Hebble Wordhouse (a roofless chapel the Rows folk built in the first year, and let fall down), the Hebble Society is holding its Midwinter meeting by lamplight: thirty people in coats, and a thin, earnest schoolmaster with a petition.
*set met_dunnock true

"Mr. Ezra Dunnock," Tamsin says. "He's been petitioning the Council for thirty years. They've never answered once."

Mr. Dunnock shakes your hand as if you're a delegation. He tells you about the Settlement, and the petitions, and the Rows phone tree: "Every house knows the next house. If the Stay ever goes, I can have the Rows up Tanner's Hill in forty minutes. We drill it every year, whatever the Council says." He smiles, tiredly. "Nobody else in Scarrow drills. They think we're mad."

*choice
  #"If the Stay ever goes, you won't hear it from the Council. You'll hear it from me."
    *set rows_contact true
    *set duty %-5
    Mr. Dunnock looks at you, and then at Tamsin, and then back at you, and he stops smiling. "You're up there," he says. "Inside it." He writes something in a little notebook and tears out the page. It's a telephone number, the only one in the Rows, at the tobacconist's on Beck Street. "Any hour," he says. "Any hour at all."
    *journal Mr. Dunnock of the Hebble Society can empty the Rows in forty minutes on a telephone call to the tobacconist's on Beck Street.
  #Sign his petition, and wish him luck.
    *set tender %+5
    You sign. He thanks you as if you've given him a pound. There are eleven thousand signatures on the petition. It has been sent to the Council every Midwinter for thirty years.

Walking back to the lift in the dark, up through the Nethers with the fog in your throat, Tamsin says, without looking at you, "She liked you." And then: "She doesn't like anybody." And then nothing at all, all the way to the lift shed. But she walks close enough that your arms keep brushing, and she doesn't move away.
*set rel_tamsin +10
*set rom_tamsin +5
*goto evening

*comment ==================================================================
*label leave_ball
Varnish House is the largest house on Crowhill, and on Midwinter Eve every window in it is lit. Carriages and motorcars nose up the drive in the snow. There's a string quartet in the hall, a champagne fountain in the orangery, and a ballroom the size of the Great Hall with three chandeliers and a sprung floor, and half of the Council of Scarrow is dancing on it.

Tolly meets you at the door. He's in white tie and looks like a prince in a picture book, and he grabs your arm like a drowning man.

"Thank God," he says. "Thank [i]God.[/i] Stay near me. If I start doing anything strange, it's not me, it's her."

"Ptolemy, darling."

Councillor Honoria Varnish is tall and silver-haired and quite beautiful, in dark green velvet with a single diamond at her throat. Her voice is low and warm and carries without being raised, like a cello in a church. She offers you her hand as though it's a small gift.
*set met_honoria true

"You must be the friend," she says. "Ptolemy writes of you every Sunday." She smiles, and you understand, with a small cold drop in your stomach, that she knows a great deal about you. "You'll dance, won't you? Everyone must dance at Midwinter. It's the law." She laughs, lightly, at her own joke. Then, without any change of tone at all: "Ptolemy. Dance with Miss Hesketh, darling. She's by the fountain."

Tolly's feet are already moving. He's across the ballroom before his face has caught up, and you watch him bow to Rilla Hesketh (who is there in blue silk, laughing), and take her hand, and dance, perfectly, beautifully, with no expression on his face at all.

Honoria Varnish watches him with fond satisfaction. "He dances so well," she says. "He was a sickly child. You'd never know." She turns the full weight of her attention on you. "Now. Tell me about the College. I hear there's been some trouble with the galleries. Mineral deposits, I'm told. Tiresome."

*choice
  #"More than tiresome, Councillor. They're spreading."
    *set candor %+10
    *set bold %+5
    She tilts her head, interested, the way a cat is interested. "Are they," she says. "How observant you are." She pats your arm. "Dr. Marchbank will be pleased to have such a diligent student." And she moves away into the crowd, and you have the distinct feeling that your name has just been written down somewhere.
  #"I wouldn't know, Councillor. I'm only a first-year."
    *set candor %-10
    "How modest," says Honoria Varnish. She doesn't believe you. You can tell she doesn't believe you, and that she's pleased you had the sense to say it. "Enjoy the fountain." And she moves away into the crowd.
    *set council_ally +1
  *if (vow_plain) #"I can't discuss that with you, Councillor." (It's the only true thing you can say.)
    *set candor %+5
    Her eyebrows go up very slightly. "Ah," she says. "The Plain Word. How restful for your friends." She smiles. "And how very limiting for you." She moves away into the crowd.

The Ball goes on around you: music, laughter, the smell of hothouse lilies. You have perhaps an hour before anyone will miss you.

*choice
  #Slip out of the ballroom and see what the rest of Varnish House is hiding.
    *set bold %+5
    *goto ball_explore
  #Find Tolly as soon as the dance ends. He needs you more than the house does.
    *set tender %+10
    *goto ball_balcony

*label ball_explore
The upstairs corridors are quiet and dim. You follow the sound of voices to a half-open door: a library, all leather and lamplight, where Honoria Varnish is standing at the fire with two men in Council sashes. You flatten yourself against the wall.

"—fourteen months, Marchbank says."

"Marchbank says a great many things." That's Honoria. "Marchbank said the Stay couldn't survive the Wet Winter, and the Keystone found her way."

"She was thirty-eight then. She's sixty."

"And the Crown will be settled by Midsummer," says Honoria, calmly. "The Heir will be ready. The Committee has done everything the law requires. We've opened the trials as wide as the Board would allow."

"And if it's one of the first-years?"

"Then it's one of the first-years. The young are best; everyone knows that. The Hesketh girl is the likeliest."

"And your boy?"

A pause. The fire snaps. "My son will lose," says Honoria Varnish. "I'll see to it."
*set know_report true
*journal Overheard at Varnish House: the Council knows the Stay has fourteen months. "The Heir will be ready." Honoria will see to it that Tolly loses.

The men murmur. Somebody laughs. You hear the chink of glasses, and footsteps coming toward the door.

Along the corridor, another door stands open onto a study: a desk, a green lamp, and a grey folder lying square in the middle of the blotter.

*choice
  *selectable_if ((vow_name) or (finesse >= 50) or (candor <= 35)) #Walk into the study, take the grey folder, and walk out again as if you belong there.
    *set has_report true
    *set report_source "honoria"
    *set duty %-10
    *achieve midwinter_thief
    *if (vow_name)
      You let the world stop noticing you. A footman passes you in the corridor, carrying a tray, and his eyes slide over you like water over a stone. You walk into Honoria Varnish's study, and pick up the grey folder, and walk out, and nobody sees you at all.
    *else
      You walk in. You pick it up. You walk out, at an ordinary pace, with the folder under your arm like a sheet of music, and when a footman passes you in the corridor you nod at him, and he nods back.

    In the cloakroom you look at the label: [i]REPORT ON THE CONDITION OF THE STAY. O. MARCHBANK, D.ENG. CONFIDENTIAL TO THE STAY COMMITTEE.[/i] You read the first page standing among the fur coats: [i]…will fail within fourteen to twenty months, and when it fails it will fail suddenly…[/i]

    You fold it inside your jacket, against your ribs, and go back to the Ball, and drink a glass of champagne without tasting it at all.
    *journal You have Dr. Marchbank's report on the Stay, stolen from Honoria Varnish's study.
  #Go back down before you're missed. You've heard enough.
    *set bold %-5
    You slip back down the stairs as the library door opens behind you, and you're standing by the champagne fountain, apparently admiring it, when Honoria Varnish comes back into the ballroom. Her eyes pass over you. They don't stop. You think they don't stop.
*goto ball_balcony

*label ball_balcony
You find Tolly out on the balcony, alone, in the snow, in his white tie, with a glass of champagne he isn't drinking. The dance is over. Below the balustrade the whole of Scarrow is spread out, all its lights, and at the head of the valley the Stay stands pale in the dark with the lake behind it, and from up here you can't hear it at all.

He's shaking again. Not from the cold.

"I danced with Rilla," he says. "I was very good. I always am." He laughs, and it cracks down the middle. "She told me to dance, and I danced, and the whole time I was—" He stops.

*choice
  #"You were what?"
    *set rom_tolly +10
    *set rel_tolly +5
    He turns and looks at you, and his face is very open and very frightened.

    "Thinking about you," he says. "The whole time. It's the first time she's ever told me to do something and I've been thinking about something else." He puts down the glass, carefully, on the balustrade. "I think that might be the most important thing that's ever happened to me, and I don't know what to do with it."
    *choice
      #Take his hand. Just that.
        *set rom_tolly +10
        His hand is freezing. His fingers close on yours so hard it hurts, and he doesn't say anything, and neither do you, and you stand there in the snow above the city until the quartet starts again inside.
      #"You don't have to know yet."
        *set rom_tolly +5
        *set tender %+5
        He breathes out. "No," he says. "No, I suppose I don't. That's a new one too." He smiles, a real one. "Nobody's ever told me I don't have to."
  #Put your coat round his shoulders and stand with him.
    *set rel_tolly +10
    *set tender %+10
    He lets you. He leans into you a little, a warm weight in the snow. "You're a good friend," he says. "I don't think I've had one before. Not a real one. Mother chooses my friends." He looks down at the city. "She didn't choose you. I keep thinking about that."

When you go back inside, Honoria Varnish is watching the balcony doors from across the ballroom. She raises her glass to you, very slightly, and smiles.
*goto evening

*comment ==================================================================
*label leave_archive
The City Archive is in the cellars of the Guildhall in Old Market: forty rooms of shelving under vaulted brick, lit by bare electric bulbs that buzz, and staffed on Midwinter Eve by one very old clerk in fingerless gloves who clearly hoped nobody would come.

"The Founding Rolls," says Sal. "Of the Stay. Please."

The clerk looks at them over his spectacles. "Restricted," he says. "Council warrant only."

Sal looks at you. They can't lie, and they won't pretend. It's up to you.

*choice
  *selectable_if (archive_pass) #Show him Mr. Ebbing's College pass. The College has reading rights here.
    *set lore +3
    The clerk looks at the pass for a long time. Then he looks at the signature. "Quentin Ebbing," he says, and something softens in his face. "He's been in here every Tuesday for twenty years. Never once asked for the Rolls." He stands up, creaking. "About time somebody did."
  *selectable_if (sway >= 35) #Talk to him. Midwinter, the cold, his gloves, his long service. Find the man under the clerk.
    *set sway +3
    It takes twenty minutes. By the end of it you know about his daughter in Lisk, his chilblains, and his opinion of the Council's archive budget, which is unprintable. "Restricted," he says again, standing up, creaking. "Which is to say, nobody's ever asked. Ten minutes. I'll be having my tea."
  *selectable_if (vow_name) #Let his eyes slide off you, and walk past into the stacks.
    You simply walk past him. His eyes go to Sal, and stay there, and never find you at all. Sal keeps him talking (entirely honestly) about the weather, while you go through the stacks until you find the right shelf.
  #Sal asks him again: exactly, and truthfully, why they want it.
    *set rel_sal +5
    "My great-aunt is the Keystone," says Sal. "She told me once: [i]Read the Rolls, Sal, before you sign anything. Then you'll know what you're signing.[/i] I've signed something. I'd like to know what it was." They wait. "That's all true. I'm sworn to the Plain Word. You can check."

    The clerk looks at Sal for a long time. Then he gets up, creaking, and fetches a key.

The Founding Rolls are in a tin box on the lowest shelf of the last room. There are two bundles.

The first is a long roll of heavy paper, sewn in sections, headed in copperplate: [i]THE HOLDING OF THE STAY. Roll of the Sworn. By Warrant of the Aldermen of Scarrow, under compulsion.[/i] Below are names, in columns, with ages. Two hundred and six. JOHN ASHBY, 38. MARY ASHBY, 36. THOMAS PRUITT, 15. Beside many of them, in a different ink, a later hand has written a date and a single word: [i]died.[/i]

Near the bottom of the third column: WINIFRED ASHBY, 17.
*set know_rolls true
*journal The Founding Rolls: two hundred and six villagers of Hebble were made to swear "the Holding" under the Aldermen's warrant, to hold the Stay while it was built. Winifred Ashby, aged 17, was one.

"Under compulsion," says Sal quietly. They trace the words with one finger without touching the paper. "The school books say Hebble was resettled with consent."

The second bundle is thinner and newer, bound in green tape: [i]Proposal for the Consolidation of the Holding into a Single Keystone. I. Sallis, Warden. Adopted by the Board.[/i] Forty-one years old.

You read it together, under the buzzing bulb. It is very clear. The Holding, the second Warden wrote, required two hundred souls "to be kept in a condition of servitude inconsistent with a modern city"; it was expensive, and it was unruly, and the Rows had begun to organise. A single volunteer, bound by the Great Vow in a new lattice at the crown of the arch, could do the same work, "with far greater dignity and at far less cost." The Holding gallery was to be sealed, "but not dismantled, for the lattice may yet be needed should the Keystone fail and no Heir stand ready."

And then, near the end, a paragraph that makes Sal stop reading and sit back in their chair.

[i]The Keystone's Heir shall be chosen annually by trial, to be styled the Crown, so as to ensure a willing and capable successor of suitable youth. Should the Keystone fail during the Heir's year, the Heir shall be bound in her place.[/i]
*set know_holding true
*set know_crown true
*set reveal_from "archive"
*journal Warden Sallis's Consolidation: the old Holding gallery was sealed but "not dismantled, for the lattice may yet be needed." And: "The Keystone's Heir shall be chosen annually by trial, to be styled the Crown... Should the Keystone fail during the Heir's year, the Heir shall be bound in her place."

You read it twice. Then you look at Sal.

"Yes," says Sal simply. "I knew. The Crowned is the next Keystone. That's what it's for." They look at you, and you watch them understand. "You didn't know." Quietly: "I thought everybody knew. I thought that's why nobody but me ever really wanted it."

*choice
  #"Sal. Rilla doesn't know. Tolly doesn't know. [i]Nobody[/i] knows."
    *set candor %+5
    *set rel_sal +5
    Sal is silent for a long time. "No," they say at last. "No, I don't suppose they do." They look down at the green-taped bundle. "Hester always said the Board liked to call things by beautiful names. I thought she was being rude about the food."
  #"And you entered anyway. Knowing."
    *set rel_sal +5
    "Yes," says Sal. "That's why I entered." They fold their hands on the table. "Somebody has to hold it. I'd rather it was someone who knew what they were holding."
  #Put the papers down, and put your hand over theirs.
    *set rom_sal +10
    *set tender %+5
    Sal looks at your hand on theirs as though it's a new kind of animal. They don't move theirs away. "You're upset for me," they say, wonderingly. "Nobody's ever been upset for me about it before. They're usually impressed."
*goto evening

*comment ==================================================================
*label evening
*page_break The last lift up

By dusk the weather has turned.

It comes down the valley from the fells like a wall: black cloud, and then rain so hard it bounces, and then wind. By the time you reach the lift station the whole College is crammed into the shed, soaked, shouting over the drumming on the glass roof.
*if (leave_choice = "ball")
  Tolly arrives in a hired motorcar, still in his white tie under his coat.
*elseif (leave_choice = "rows")
  Tamsin stands beside you, shoulder to shoulder, rain streaming off her.
*elseif (leave_choice = "archive")
  Sal stands beside you, silent, with the rain running off their shaven head.
*elseif (bg = "outsider")
  Hob stands beside you with half a loaf under his coat, like a man protecting a baby.
Everyone is looking up at the Stay.

It's weeping. Not the usual threads; every weep-hole on the face is running, hundreds of them, so that the whole wall shines in the lamplight like something that's been crying for a long time. The lake is up. You can feel it, even down here: the hum has a strain in it, a tightness, like a rope just before it goes.

"Wet night coming," says Old Samuel, grimly, throwing the lever. "You lot'll be busy."
*page_break The Wet Night

The alarm bell in the Footings goes at twenty past eleven.

You're half-asleep when it starts, and then you're on your feet with your boots in your hand before you know you've heard it: the big brass bell by the Sump door, clanging, clanging, and Hob's voice under it, not soft at all now: "UP. ALL OF YOU. SLUICE GALLERY. NOW."

You feel the hum as you run. It has dropped. Not half a tone, like the day of the lift. More. It's gone down to A-flat and it's [i]staying there,[/i] groaning, and the whole Stay is shivering with it.
*set hum "A♭"

The Sluice Gallery is on the east side, above the Old Sluices, and when you get there it's already full of people and water.

A seam has opened in the upstream wall of the gallery. It runs from floor to ceiling, a black crack as wide as your hand, and water is coming through it under the whole weight of the lake: a flat hissing sheet of it, fanning across the passage, hitting the far wall with a noise like a train. The floor is ankle-deep and rising. And all over the stone around the crack, crawling, pulsing, thick as moss, are the white threads.

The Warden is there, in a greatcoat over her nightgown, with her hands flat on the wall and her face grey with effort, leaning. Master Fell is there, in his dressing gown, soaked to the skin, hauling sandbags like a navvy. Three fourth-years from Sluice Watch are leaning on the crack with all their purchase, and it is widening anyway, a finger's breadth at a time, with a sound like teeth grinding.

"Footings!" shouts Hob. "Here! Now!"

Tamsin is already there, with her feet planted, saying [i]"Hold, hold, hold"[/i] under her breath. Sal has their palms against the wall beside the crack, and their eyes closed, and they're humming, one steady note, and you realise it's the same note the voice in the stone is singing: Hester's note. Tolly is white to the lips and passing sandbags down a line.

You have seconds to choose where you're useful.

*choice
  *selectable_if ((purchase >= 40) or (vow_hand)) #Put your hands on the stone beside the crack and hold it.
    *set nerve +3
    *if (vow_hand)
      *set wet_night_contained true
      You put your palms on the wet stone and [i]hold.[/i] Not push; hold. It's the thing you swore for. The Open Hand can't strike, but it can stand in a door against a storm, and that's what you do: you stand in the crack with your whole self and refuse to let it widen by one more hair.

      The grinding stops. The crack doesn't close, but it stops. Beside you the Sluice Watch fourth-years sag with relief. The Warden turns her head and looks at you, once, and nods.
    *else
      *set wet_night_contained true
      You put your palms on the wet stone beside the crack and lean with everything you've got. It's like trying to hold a door shut against a crowd of a thousand. Your arms shake. Your ears sing. But the grinding slows, and slows, and stops. The crack holds. It doesn't close, but it holds.
  *selectable_if (finesse >= 40) #Don't fight the water. Find the fray and stitch it: a thin, exact lean along the seam.
    *set wet_night_contained true
    *set finesse +3
    Everyone else is pushing against the whole lake. You don't. You look for the thread, the way Fell taught you: the exact white line in the stone where the wall is coming undone. It runs up the crack like a seam up a sleeve.

    You put two fingers on it, and lean, very thin, very precise, not against the water but along the fray, [i]stitching,[/i] pulling the loosened stone back together grain by grain the way you'd darn a sock. It's the hardest thing you've ever done. It takes all your attention and none of your strength.

    The crack stops widening. Then, slowly, it narrows by a finger's breadth, and the sheet of water drops to a hard jet, and Master Fell, from the sandbags, says "[i]Oh,[/i] well done," in a voice you'll remember for the rest of your life.
  *selectable_if (nerve >= 35) #Grab a sandbag and a mallet of oakum and get right into the spray at the foot of the crack.
    *set wet_night_contained true
    *set nerve +5
    *set bold %+5
    You go into the water. The jet hits you like a kicking horse, and you go down on one knee, and get up, and jam the first sandbag into the foot of the crack, and then the second, and then you're hammering oakum into the seam with a mallet while the spray takes the skin off your knuckles. Hob sees what you're doing and wades in beside you, and between you, you choke the bottom of the crack with sand and tarred rope until the water coming through it is a spray instead of a sheet.
  *selectable_if (sway >= 35) #Nobody's organising the sandbag line. Organise it.
    *set wet_night_contained true
    *set sway +5
    *set standing +5
    The line is chaos: first-years colliding, bags splitting, Tolly passing sandbags to nobody. You climb onto a ledge and start shouting, and to your astonishment people listen. In a minute you've got a chain from the stores to the crack, twenty scholars long, with the strongest at the wet end and the mill-town pair counting the bags. The sandbags start arriving at the foot of the crack twice as fast. The Sluice Watch leaners get a wall of sand behind them to push against.
  #Do whatever Hob tells you to do. He knows this wall better than anyone.
    *set duty %+10
    Hob puts you on the pump: a big iron hand-pump by the drain, to keep the water from rising past the gallery sill. You pump until your shoulders burn and then keep pumping. It's not heroic. It keeps the floor from flooding while better people fight the crack.

*if (not wet_night_contained)
  The crack keeps widening.

  There's a crack like a gunshot, and a piece of stone the size of a wardrobe door breaks out of the wall above the seam, and the water comes through in a solid black rush. It knocks the line flat. Tolly goes down under it, and is swept, tumbling, along the gallery floor toward the open stairwell and the long drop into the dark—

  *choice
    #Throw yourself after him.
      *set wet_saved "tolly"
      *set rel_tolly +15
      *set nerve +5
      You catch his collar at the lip of the stairwell, and for a second you're both going over, and then Hob's enormous hand closes on your belt and hauls you both back like a pair of landed fish.
    #Grab the nearest iron ring in the wall and make yourself a chain for him to catch.
      *set wet_saved "tolly"
      *set rel_tolly +10
      *set finesse +2
      You hook your arm through the ring and stretch out your hand, and his fingers close on yours, and the water tears at both of you and doesn't get either.
  And then—
*else
  For a long moment the whole gallery holds its breath, with the water hissing and the stone groaning and nobody moving at all. And then—

—then you hear her.

The voice in the stone. It has been singing all night under the noise, strained and thin. Now it rises. It comes up out of the wall all around you, huge, a single sustained note that you feel in your teeth and your spine and your wet feet, and the hum climbs to meet it: A-flat, A, and up, and up, [i]B-flat,[/i] and holds there, trembling, and the crack in the Sluice Gallery grinds, and shifts, and closes, like a mouth.

The water stops.

Everything stops. In the silence you can hear everyone breathing. Then, very slowly, the note in the stone fades away, and the hum is left behind: B-flat again. Almost. It's a little flatter than it was. You'd never notice it, if you hadn't been listening all your life.
*set hum "B♭"
*achieve wet_night
*if (wet_night_contained)
  *set standing +5
  *set rel_warden +5
  *set rel_hob +5
Master Fell sits down in the water with his back against the wall, and puts his face in his hands.
*page_break Dawn

At dawn the College is a wreck of wet scholars asleep in corridors, on benches, on the Great Hall floor under Thwaite's raised bronze hand. Nobody has been to bed. The storm has blown itself out over the fells, and the lake is flat and grey and innocent, and the hum is B-flat, almost, and everyone is too tired to talk.

You can't sleep. You have questions, and they won't wait.
*if (know_crown)
  You already know what the Crown is for. You read it in black and white in the cellars of the Guildhall. What you need now is to hear somebody say it out loud.
*temp asked_warden false

*choice
  #Go and find the Warden. Ask her exact questions. She can't lie.
    *set reveal_from "warden"
    *goto reveal_warden
  #Go and find Master Fell. He knows something. He's known it all along.
    *set reveal_from "fell"
    *goto reveal_fell
  #Ask Sal. Sal can't lie either, and Sal will simply tell you.
    *set reveal_from "sal"
    *goto reveal_sal
  #Ask Tamsin. Whatever she's doing, she's doing it for a reason.
    *set reveal_from "tamsin"
    *goto reveal_tamsin

*label reveal_warden
The Warden's study is a small cold room at the top of the crest buildings, with a window over the lake and nothing on the walls. She's at her desk, still in her greatcoat, writing. She doesn't look up when you knock.

"Scholar {surname}," she says. "Sit. You have questions. I have ten minutes."

*temp wq 0
*label warden_hub
*choice
  *hide_reuse #"Is the Stay failing?"
    *set wq +1
    The Warden puts down her pen.

    "I cannot speak of the condition of the Stay," she says, "to anyone who does not sit on the Board of this College. I swore that, when I took this office. The Council required it as a condition of my appointment." She looks at you steadily. "I have kept it for nineteen years."

    It isn't a no. You understand, suddenly and completely, that it isn't a no.
    *set rel_warden +3
    *goto warden_hub
  *hide_reuse #"What is the Crown for?"
    *set wq +1
    *set know_crown true
    *if (hint_ask_warden)
      You ask it exactly, the way Fell told you to, the way she told you on the first day: [i]What is the Crown for?[/i]
    She looks at you for a long moment. Something in her face changes, and it looks, oddly, like relief.

    "The Crowned is the Keystone's Heir," says Agnes Brathwaite. "Should the Keystone fail during the Crowned's year, the Crowned will be taken to the Keystone Chamber and will swear the Great Vow. [i]I will not leave the Stay.[/i] They will take her place in the lattice, and they will hold the Stay for the rest of their life." A pause. "That is what the Crown is for. It has been for forty-one years."

    "And people don't know."

    "People are told that the Crowned stands ready to serve the Stay. That is true." Her voice is perfectly level. "Nobody asks what it means. In nineteen years, you are the fourth scholar to ask me." She picks up her pen again, and puts it down. "The other three did not enter."
    *set rel_warden +8
    *journal The Warden: "Should the Keystone fail during the Crowned's year, the Crowned will swear the Great Vow and take her place, for the rest of their life."
    *goto warden_hub
  *hide_reuse #"Is Hester dying?"
    *set wq +1
    "Hester Quaile is sixty years old," says the Warden, "and has held this wall for forty-one years."

    "That's not an answer."

    "No," says the Warden. "It is the most I can give you." She holds your eyes. "Listen to what I cannot say, Scholar. It is sometimes louder than what I can."
    *set rel_warden +3
    *goto warden_hub
  *if (know_crown) *hide_reuse #"Why open the Crown to first-years? This year of all years?"
    *set wq +1
    "Because the Board wished for as many candidates as possible," says the Warden. "And because the Great Vow costs a life, and the longer the life, the greater the purchase." She says it quite flatly, as if reading from a book she has read too many times. "The younger the swearer, the longer the lever." A pause. "I argued against it. I was outvoted. I have been outvoted for nineteen years."
    *set rel_warden +5
    *goto warden_hub
  *if (know_crown) #Thank her, and go.
    As you reach the door, she speaks again, without looking up.

    "Scholar. You asked the right question." A pause. "Keep asking them."
*goto reveal_after

*label reveal_fell
Master Fell's rooms are on the Second Gallery: two small rooms, immaculate, full of books arranged by height, and a larger tank for Magistrate by the stove. He's sitting by the stove in a clean dressing gown, with his wet one hung precisely over a chair, and his hands wrapped round a cup of tea he isn't drinking. He looks a hundred years old.

He isn't surprised to see you. "Sit down," he says. "I suppose it's time."

*if (know_crown)
  "I know what the Crown is for," you say. "I want to know how [i]you[/i] know."
*else
  "What is the Crown for?" you say. "Really?"

He tells you.

"Twenty-two years ago I was a Footing, like you. Third-year. I ran the Gallery and won it, and ran the Question and won that too, and dived the Deep, and was Crowned at Midsummer in front of the whole city. I was the golden boy. You'd not believe it to look at me." He smiles faintly. "The Crowned is the Keystone's Heir. If the Keystone fails in your year, you take her place. For life. Nobody told me that either. I found out the way you'll all find out: the night it mattered."

He turns the cup in his hands.

"That winter was the Wet Winter. Worse than last night. The lake came over the crest. Hester was thirty-eight, and she'd been holding it for nineteen years, and she started to fail. They came for me at two in the morning. The Warden (not this one; old Warden Tulk) came to my room with a lantern and said, [i]It's time, Ambrose.[/i]"

He stops. For a while he just looks at the stove.

"I ran," says Ambrose Fell. "I went out of the window and down the outside of the crest buildings, and I took the Weir Lift down in the dark, on my own, working the levers myself. I'd sworn an oath when I was Crowned, [i]I will stand ready,[/i] and I broke it. The snap nearly killed me. It burned out every scrap of purchase I had. I was in the infirmary in Scarrow for a month. I've never sworn anything since. I've never been able to."

"And the Stay?"

"Held." He looks at you with red-rimmed eyes. "Hester held it. She swore a second vow in the dark, alone, with nobody to take her place: [i]I will not see.[/i] She gave her sight to buy the purchase to hold the wall through that winter, because the boy who should have been there was in a hired room in Scarrow having hysterics." He puts down the cup very carefully. "She's been blind for twenty-two years because of me. And I came back here to teach, because it was the only thing I could think of to do. I've been teaching children to lean ever since, and not one of them has ever asked me why I can't."
*set know_crown true
*set know_fell true
*set rel_fell +10
*journal Master Fell was Crowned twenty-two years ago. In the Wet Winter, when Hester faltered, they came to bind him, and he ran. Hester swore "I will not see" to hold the Stay alone, and has been blind ever since.

*choice
  #"You were a boy. They never told you. That isn't cowardice. That's a trap."
    *set tender %+10
    *set rel_fell +10
    Fell shakes his head slowly. "That's very kind," he says. "It's also very nearly true, which is the most dangerous sort of kind." He looks at you. "Don't let them catch you the way they caught me. That's all I've got. That's all I've been trying to say."
  #"Does she know you're here? Hester?"
    *set rel_fell +5
    "She knows everything that happens in this wall." He laughs, not quite steadily. "She's never sent for me. Twenty-two years, and she's never sent for me. I don't blame her." A pause. "I've never gone to see her, either. I can't. I've tried. I get to the door."
  #"Then why are you telling me? Why now?"
    *set candor %+5
    *set rel_fell +5
    "Because last night I sat in the water and listened to her hold it," says Fell. "Sixty years old. Blind. Holding the whole lake with one note. And I thought: this year, she won't be able to. This year it will be one of you." He looks at you steadily. "And I thought: if they're going to be caught, they should at least see the trap."
*goto reveal_after

*label reveal_sal
You find Sal on the crest, sitting in the heather by the beehives in the grey dawn, with a blanket round their shoulders. The hives are silent. They're listening, you think, to the hum.

*if (know_crown)
  "You knew," you say, sitting down beside them. "In the archive. You knew already."

  "Yes," says Sal. "I've always known."
*else
  "Sal. What is the Crown for?"

  Sal turns and looks at you with surprise, the way you'd look at someone who asked you what water was for.

  "The Crowned is the next Keystone," they say. "That's what it's for. If Hester fails while you're Crowned, you go into the chamber and swear the Great Vow and hold the wall instead of her. For the rest of your life." They pause. "You didn't know."

  You didn't know.

  "I thought everyone knew," says Sal slowly. "I thought that's why nobody but me really wanted it. I thought the others were being brave." They look out at the flat grey lake. "Rilla doesn't know, does she. Tolly doesn't know."
  *set know_crown true
  *journal Sal: "The Crowned is the next Keystone. If Hester fails while you're Crowned, you swear the Great Vow and hold the wall instead of her. For the rest of your life."

"Last night was the worst it's been since the Wet Winter," Sal says. "She told me, afterwards. She said she can't do many more nights like that." They pull the blanket tighter. "She said Midsummer. She said she'll hold till Midsummer, and not a day more, because she's tired, and she's earned it." Their voice doesn't waver. "So whoever is Crowned this year will be bound. I've known that since the autumn. It's why I asked the Warden to open it to first-years. I wanted to be allowed to try."

*choice
  #"[i]You[/i] asked her to open it?"
    *set candor %+5
    "I asked," says Sal. "The Council agreed, for its own reasons. I don't think the Warden forgave either of us." They look at you. "I wanted it to be someone who knew. Someone who loves her. Not someone who thought it was a prize."
  #"Sal. Do you want to die in a room in a wall?"
    *set rel_sal +5
    *set candor %+10
    Sal thinks about this with complete seriousness. "I don't think of it as dying," they say. "Hester isn't dead. She's the most alive person I know." A pause. "But I've thought about it every day since I was eleven. I'm not doing it by accident. That's all I can promise you. Whatever happens, I won't be doing it by accident."
  #Sit with them in the heather and don't say anything at all.
    *set rom_sal +10
    *set tender %+10
    You sit. After a while Sal's head comes down on your shoulder, very lightly, the way a bird lands. "Thank you," they say. They don't explain what for. You don't need them to.
*goto reveal_after

*label reveal_tamsin
Tamsin is in the laundry, at dawn, after a night in the Sluice Gallery, feeding wet sheets through the mangle as though nothing had happened. Her hands are raw. She doesn't stop when you come in.

*if (know_crown)
  "You know what the Crown is," you say. "You've always known."
*else
  "What is the Crown really for, Tamsin?"

She turns the mangle handle, three turns, four. Then she stops.

"My Nan told me when I was twelve," she says. "The Crowned is the Keystone's heir. When the Keystone goes, the Crowned goes in. For life." She wipes her hands on her apron. "Why do you think I'm doing this?"
*set know_crown true

"The Keystone holds the Stay," says Tamsin. "The whole Stay. All that purchase, forty-one years of it. Everything in the wall answers to her. The sluices too." She looks at you, and her eyes are very bright and very hard. "The Keystone could let the lake down. Slowly. A finger's breadth a year. So slow nobody could stop it and nobody downstream would drown. Thirty years, and the water'd be off Hebble. The church. The mill. Nan's house." Her hand goes to the key at her throat. "They'd have to see it. All of Scarrow. They'd have to look at what they drowned."

"And you'd be in the wall. For the rest of your life."

"Aye." She says it the way she says everything: flatly, like an address. "That's the price. Nothing's free."
*set know_tamsin_plan true
*journal Tamsin's plan: win the Crown, become the Keystone, and use the Keystone's hold on the Stay to let the lake down, a finger's breadth a year, until Hebble is uncovered. She knows it means a life in the wall.

*choice
  #"You'd give your whole life for a village you've never seen?"
    *set candor %+5
    "I've seen it," says Tamsin. "Every night since I was born. Nan made sure." She turns the mangle again. "It's not for the village. It's for the people in the village. It's for my Nan, who hasn't slept in thirty-one years. It's so that somebody, [i]once,[/i] gets something back."
  #"There has to be another way."
    *set rel_tamsin +5
    "Find it, then," says Tamsin, not unkindly. "I've been looking since I was twelve." She hesitates, which you've never seen her do. "If you find it, I'll trade you anything I've got for it."
  #Take her raw hands in yours, even though she can't take them.
    *if (rom_tamsin >= 15)
      *set rom_tamsin +10
      Her whole body goes rigid. You feel her fingers try to pull away and fail and try again. "You [i]can't,[/i]" she says, and her voice breaks on it. "I haven't—I can't take—"

      "I'm not giving you anything," you say. "I'm just holding on."

      She stands there with her hands in yours and her eyes shut, shaking, and she doesn't take them, and she doesn't pull away. After a long time she says, very quietly, "That's a lawyer's answer." But she's almost smiling.
    *else
      *set rel_tamsin -3
      She pulls her hands back, fast, and holds them against her apron. "Don't," she says. "I told you. Don't." And turns back to the mangle.
*goto reveal_after

*label reveal_after
*page_break What now

So that's the Crown.

Rilla Hesketh, who wants to change the Nethers. Tamsin, who wants to give Hebble back. Sal, who wants to follow Hester into the dark out of love. Tolly, who doesn't want anything he's allowed to have. And the Keystone has said Midsummer.
*if (entered)
  And you. Your name is on the roll, in your own hand, under Sal's.
*else
  And you, with your name on the roll as a second, pledged to help your friend win the one thing that would put them in the wall for life.

*if (entered)
  *choice
    #Stay in. If someone has to be Crowned, better you than someone you love.
      *set duty %+5
      *set bold %+10
      You go to the Crown roll in the Great Hall that afternoon, and look at your name on it, and don't cross it out.
    #Stay in. You don't intend to be the one who holds it. You intend to change what the Crown is.
      *set duty %-10
      *set bold %+5
      You go to the Crown roll in the Great Hall that afternoon, and look at your name on it, and don't cross it out. You're not staying in to win. You're staying in because entrants get a voice at the Question, in front of the Board and the Council. You want to be standing there when they ask.
    #Withdraw. Quietly. And second one of your friends instead: someone should be at their side for this.
      *set entered false
      *set withdrew true
      *set bold %-5
      The Warden accepts your withdrawal without comment, and without surprise. "Whose second will you be?" she asks.

      *choice
        #Tamsin's. She won't stop, so someone had better be with her.
          *set second_of "tamsin"
          *set rel_tamsin +10
          Tamsin looks at you when you tell her, for a long time. "Aggie's glad," she says. "She was only doing it because I paid her." A pause. "What's your price?"

          "Nothing."

          "Nothing's not a price."

          "Then I'll think of one."
        #Tolly's. He'll need someone who knows to help him lose.
          *set second_of "tolly"
          *set rel_tolly +10
          Tolly's second was Wilf, from the mill towns, who hands the job over to you with visible relief. Tolly just looks at you, and swallows, and says, "Oh, thank God," very quietly.
        #Sal's. If they're walking into this knowing, they shouldn't walk in alone.
          *set second_of "sal"
          *set rel_sal +10
          Sal's second was Hob. Hob hands the job over to you with a long look and a hand on your shoulder. Sal only nods, and says, "Good. I hoped it would be you."
*elseif (second_of = "tamsin")
  *choice
    #Keep helping her. It's her life, and her choice, and she chose it with her eyes open.
      *set rel_tamsin +5
      *set duty %+5
    #Help her, for now. But you're going to find another way before Midsummer, whatever she says.
      *set duty %-5
    #Resolve, privately, to make sure she loses. You'll carry that alone.
      *set candor %-10
      *set tender %+5
*elseif (second_of = "sal")
  *choice
    #Keep helping them. It's their life, and their choice, and they chose it knowing.
      *set rel_sal +5
      *set duty %+5
    #Help them, for now. But you're going to find another way before Midsummer.
      *set duty %-5
    #Resolve, privately, to make sure they lose. You'll carry that alone.
      *set candor %-10
      *set tender %+5
*else
  *choice
    #Tell Tolly. He deserves to know what his mother entered him in.
      *set candor %+10
      *set rel_tolly +5
      Tolly listens without interrupting, which is how you know how bad it is. At the end he says, "Right," and then, "Right," again, and then he goes and sits in the Sump by the dead piano for an hour and plays the same four notes over and over.

      Later he finds you. "She told me to enter," he says. "She didn't tell me to win." And he laughs, a bit wildly. "I'm going to be the worst entrant in the history of the Crown."
    #Don't tell him yet. He can't disobey her either way. Let him have a little longer not knowing.
      *set candor %-10
      *set tender %+5
      You don't tell him. At supper he makes the whole Sump laugh about the Midwinter Ball, and you laugh too, and it sits in your stomach like a stone.

*if (not rilla_out)
  One more thing. Rilla Hesketh is the favorite. Rilla Hesketh is going to change the Nethers. And Rilla Hesketh thinks the Crown is a ceremony.

  *choice
    #Tell Rilla. Tonight. Everything.
      *set told_rilla true
      *set rilla_out true
      *set rel_rilla +20
      *set candor %+10
      You find her in the Crest Watch common room, surrounded by friends, and ask her to step outside. She listens to you on the cold crest with the lake behind her, and her face goes slowly white, and when you've finished she says, "No," and then, "No, that's not—" and then she stops.

      "Ask the Warden," you say. "Ask her exactly what it's for."

      She goes. You wait. When she comes back, twenty minutes later, she walks straight past you to the parapet and grips it with both hands and stands there, looking at the water, for a long time.

      "I withdrew," she says finally. "Just now. She let me." Her voice is very steady. "I was going to change the Nethers. I was going to do it from the Council." She laughs, and it isn't a laugh. "I'd have done it from a room in a wall."

      She turns and looks at you. "Thank you," says Rilla Hesketh. "I won't forget it. If there's ever anything, [i]anything,[/i] you come to me."
      *journal Rilla Hesketh withdrew from the Crown when you told her what it was for. She says she owes you.
    #Don't. It's not your secret to spread, and it might start a panic.
      *set duty %+5
      *set candor %-5
      You say nothing. Rilla waves to you across the Great Hall at supper, cheerful, golden, and you wave back.
*finish
`);
