HW.scene("ch2", String.raw`
*chapter 2 What Is Kept
The College of the Stay teaches four things, the second-years tell you: how to promise, how to lean, how the dam works, and how it came to be. The first you'll do once. The rest take four years, and most people never finish the last one.

Practical Leaning is on Mondays, in a long attic room at the top of the crest buildings with a window the whole width of the lake. There is a tank of brown water on the windowsill with an eel in it. The eel is called Magistrate. It watches the class with an air of settled disapproval.

"A vow," says Master Fell, "is a lever."

He draws one on the board: a long plank, a little triangle for the fulcrum, a box at the short end marked THE WORLD. He looks tidier by daylight than he did in his dressing gown, which is to say extremely tidy. His chalk is sharpened. His cuffs are pinned. His handwriting is, as promised, terrible.

"The long arm is what it costs you. Give up something small and you have a short lever, and you'll move a teacup. Give up something that matters (really matters, to you, not to your mother or your minister) and you have a long one." He taps the box. "Purchase. It's an old sailor's word. A grip. The thing that lets a small man move a heavy rope. You'll get your purchase at the Oathing, those of you who want it, and after that the rest of your lives will be spent learning how not to waste it."

He sets a candle on the desk and leans on it. You can see him do it: a settling in the shoulders, a narrowing of the eyes.

Nothing happens. The candle does not light.

A few people laugh. Master Fell smiles at them as if they've done something clever. "Quite right. I have almost no purchase at all. I'm the only unsworn master in the College." He wipes his hands on a very clean handkerchief. "Which makes me uniquely qualified to tell you what it costs. Next question for the room, and you'll all answer it, and none of you will answer it honestly, and that's fine: what would you never give up?"

He goes along the rows. "My dignity," says a Crest Watch boy, to laughter. "Pudding," says someone else. Sal Quaile says, "The truth. I already did, though, so it's cheating." Tolly Varnish says, very brightly, "My mother," and gets the biggest laugh of the morning, and doesn't laugh himself.

Tamsin Mottram says, "Nothing's free," which isn't an answer, and Fell looks at her for a long moment and says, "No. It isn't." Then he looks at you.

*choice
  #"My family."
    *set tender %+10
    "Mm," says Fell. "That's the one they always come for." He moves on before you can ask who [i]they[/i] are.
  #"My freedom."
    *set duty %-10
    "Then you'll have the shortest lever in the room," says Fell, "and the lightest step." He sounds, of all things, envious.
  #"My own mind."
    *set bold %+5
    *set candor %+5
    "Good," says Fell. "Keep it. They'll ask for it in instalments."
  #"I'd rather not say."
    *set candor %-10
    Fell's face does something complicated and approving. "That," he says, "is the first honest thing anyone's said all morning."

Water and Stone is on Tuesdays, in a vaulted room full of brass gauges and plaster models of the Stay cut in half like a loaf. Dr. Odile Marchbank is small and square and grey, with ink on her fingers and reading glasses pushed up into hair that looks as if it lost a fight.
*set met_marchbank true

"The Stay," she says, before anyone has sat down, "is a hundred and ninety feet thick at the base. A masonry arch dam this tall, in this valley, should be four hundred." She lets that sit. "The difference is being made up by a woman in a room. Write that down. It will be on the examination."

She shows you seepage logs: twenty years of numbers from the weep-holes, written up every night by the Watches in pencil, and plotted on a long sheet of graph paper pinned to the wall. The line goes up. Not steeply. Steadily.

A Gallery Watch girl asks what that means. Dr. Marchbank takes off her glasses, cleans them, and puts them back on. "Ask me in a year," she says, and her mouth goes flat as a ruler.

History and Oath Law is on Wednesdays, in a book-lined room that smells of glue and dust, with Mr. Quentin Ebbing, the College archivist: a long, stooped, fussy man in a velvet waistcoat who says "Ah" before every sentence as if clearing it for traffic.
*set met_ebbing true

"Ah. Seventy-one years ago," says Mr. Ebbing, "Josiah Thwaite, Master-Sworn, raised the Stay across the Aske in a single season: the greatest act of leaning in the history of this or any nation." The valley beyond, he says, was "cleared, and its inhabitants resettled with compensation, and the Aske tamed at last." Scarrow no longer drowns every spring. The mills have water all year. "And for forty-one years, ah, the Stay has been held by the Keystone, Hester Quaile, a volunteer of singular courage." He moves on to the Oathing Act: no vows before eighteen, and no swearing on another's behalf. "Cradle-swearing," he says, with a little moue of distaste, "is a barbarism of the old families, now very properly illegal." Two seats down from you, Tolly Varnish goes the color of paper.

Tamsin Mottram puts her hand up. "What did they pay? Hebble. The compensation. How much?"

Mr. Ebbing blinks at her. For a moment something in his long face looks almost frightened. "Ah," he says. "The records are, ah, incomplete." And he turns the page.

By the end of the first week you know which of the three has got its hooks into you.

*choice
  #Master Fell's. You stay behind after Practical Leaning with a question.
    *set class_focus "fell"
    *set finesse +10
    *set rel_fell +10
    *set met_fell true
    Your question is about the candle: why it didn't light, if he'd leaned on it. Fell looks pleased in a hunted sort of way, as though nobody has asked him a follow-up question in years.

    "Because purchase is the muscle," he says, "and finesse is the hand. I've a very good hand and no muscle at all." He takes a stick of chalk and blows on it, and the dust hangs in the air in a perfect little cube, turning slowly, before it falls. "Most of the College will teach you to lift heavier things. I'll teach you to lift them precisely. It matters more than they think." He looks at the cube of dust as it falls apart. "It matters most when there isn't enough."
  #Dr. Marchbank's. You stay behind after Water and Stone and ask about the line on the graph.
    *set class_focus "marchbank"
    *set lore +5
    *set eng true
    She won't talk about the line. "Ask me in a year," she says again, and there's something dangerous in the flatness of it, like a lid screwed down hard. But when you ask about the drawings instead (the cross-sections, the hatched stone, the little arrows for load) she thaws by a degree, and pulls out a long yellowed sheet from a flat drawer.

    "The Old Sluices," she says. "Four tunnels through the base, on the east side, with iron gates the size of a house. Thwaite built them so the lake could be let down if it ever needed to be. Sealed in the year of the Mill Compact, when the mill-owners decided they'd rather have the water where they could count it." She taps the gates with a pencil. "Open those, and you could draw the Heldwater down forty feet in a week. If anyone had the nerve. And the key." She rolls the drawing up again. "Nobody has either."
    *journal The Old Sluices, four sealed tunnels through the base of the Stay, could lower the lake forty feet in a week, given the nerve and the key.
  #Mr. Ebbing's. You stay behind after History and ask what "incomplete" meant.
    *set class_focus "ebbing"
    *set lore +8
    *set archive_pass true
    Mr. Ebbing looks at you over his spectacles for a long, uncomfortable time.

    "Ah," he says at last. "It meant, ah, incomplete." Then he does something unexpected. He takes a pasteboard card from a drawer, signs it with a fountain pen, blots it, and hands it to you. It says ARCHIVE: READER, and your name, and the date.

    "Nobody has asked me a question after class since the Act," he says. "The College archive is in the Third Gallery, behind the green door. Most of what you want isn't there." A pause. "Some of it is." He looks, briefly, like a man who has just done something brave and would like very much to sit down.
    *journal Mr. Ebbing gave you a reader's pass to the College archive, behind the green door in the Third Gallery.
*page_break Night Watch

In the third week, Footing Watch starts night patrols.

Every night two scholars walk the Second and Third Galleries from ten until one with a lantern, a pencil, a logbook and a tuning fork. At each weep-hole you hold the lantern close, count the drips for a minute, and write down the number. At each junction you strike the fork and put it to the wall. The galleries are narrow and wet and go on for miles inside the dam, and the lantern light doesn't reach very far.

"Pick your partner," says Hob Gorringe, with his pencil poised over the roster. "First patrol, you get a choice. After that, you get what I give you."

*choice
  #Tamsin Mottram.
    *set patrol_with "tamsin"
  #Tolly Varnish.
    *set patrol_with "tolly"
  #Sal Quaile.
    *set patrol_with "sal"

*if (patrol_with = "tamsin")
  *goto patrol_tamsin
*elseif (patrol_with = "tolly")
  *goto patrol_tolly
*else
  *goto patrol_sal

*label patrol_tamsin
Tamsin arrives eleven minutes late, from her laundry shift, with a wicker basket of folded sheets on her hip that she has to drop at the Sluice laundry on the way. She doesn't apologize. She says, "Sheets first, then the walls," and sets off without checking whether you're following.

The basket is heavy. You can tell from the way she carries it: on her hip, then on her other hip, then both arms. Her knuckles are red and cracked from the mangle. On the fourth flight of stairs you put a hand out to take one handle.

Her whole body jerks as if you've burned her.

She doesn't let go. She [i]can't[/i] let go. You see it happen: her fingers lock on the wicker, the tendons standing out in her wrist, and her face goes grey and tight with something that isn't anger. It looks like pain. You let go of the basket, fast, and she sags against the wall, breathing hard.

"Don't," she says. "Don't do that. Don't ever just—give me things."

*choice
  #"You're sworn. That's what that was. You're sworn, and it's something about taking."
    *set lore +3
    *set candor %+5
    She looks at you a long moment, then laughs once, without much humor. "Clever." She hitches the basket up. "Aye. I'm sworn."
  #"I'm sorry. I didn't mean anything by it."
    *set tender %+10
    "I know you didn't." She hitches the basket up. "That's what makes it so bloody difficult."
  #Say nothing. Wait.
    *set bold %-5
    She hitches the basket up, and climbs another three stairs, and stops. "You're going to find out anyway," she says, without turning round.

"Hedge-sworn," she says. "When I was fourteen. In the Rows, in the ruins of the old Hebble Wordhouse, where the Rows folk used to meet." She starts climbing again, slowly, talking to the stairs. "Midwinter. The Council sent a man round with charity baskets. Ham, tea, oranges. A card with the Committee's crest on it. My mam took one, because there wasn't anything else in the house, and then she sat at the table with it and cried. Not because she was grateful." Tamsin's voice doesn't change at all. "So I went down to the Wordhouse that night and I said, [i]I will take nothing I have not earned.[/i] And it took."

The laundry door is at the top of the stairs. She shoulders it open and dumps the basket on a table, and flexes her hands.

"So that's it. I can't take charity. I can't take gifts. Can't take a hand up the stairs, if it's a favor. Can't take a compliment unless I think I've earned it, and I never think I've earned it." She shrugs. "I can trade. I can work. I can be paid. Anything else, my hands won't close on it."

It's illegal. You both know it's illegal. She's just told you anyway.
*set know_tamsin_vow true
*set rel_tamsin +10
*journal Tamsin is hedge-sworn, illegally, since she was fourteen: "I will take nothing I have not earned." She can trade, but she cannot accept a gift.

*choice
  #"Then let's trade. You teach me the galleries, and I'll carry the sheets on laundry nights."
    *set sway +5
    *set rel_tamsin +10
    *set tamsin_trade "galleries"
    She stares at you. Then, slowly, as if testing a floorboard: "The galleries are worth more than sheets."

    "Then I'll carry the sheets [i]and[/i] owe you."

    "Done." She holds out her hand, and you shake it, and her fingers close on yours with no trouble at all. It's a good handshake: hard, dry, quick. "You're a quick study," she says. It sounds as if she's surprised to be saying it.
  #"That's the saddest thing I've ever heard."
    *set tender %+10
    *set rel_tamsin -5
    Her face shuts like a door. "It's not sad. It's [i]mine.[/i] It's the only thing in the whole world that nobody gave me." She picks up her lantern. "Come on. The walls won't log themselves."
  #"So I can never buy you a drink."
    *set tender %-10
    *set rel_tamsin +5
    "You can buy me a drink," says Tamsin, "if I've won it off you at cards." The corner of her mouth moves. "I'm very good at cards."

*goto fray

*label patrol_tolly
Tolly turns up to patrol in a quilted smoking jacket, carrying the lantern, the logbook, the tuning fork and a hip flask, and informs you that the flask is "for emergencies, and for the dark, which is an emergency."

He is a surprisingly good patrol partner. He counts drips in a whisper, like a man at a séance, and writes the numbers in a beautiful copperplate hand, and at every junction he strikes the fork and holds it to the stone and closes his eyes to listen. "B-flat," he reports each time, with enormous satisfaction, "B-flat, B-flat, still B-flat. God bless B-flat."

At the Second Gallery post room there's a pigeonhole for Footing Watch's night post. There's a letter in it for him. The envelope is thick and cream, and the hand on it is strong and slanting.

Tolly looks at it for a moment before he picks it up. Then he opens it, standing in the lantern light, and reads it, and you watch his hands.

[i]Darling. The Board will open the Crown to first-years this year. It will be announced at the Michaelmas Feast. You will enter your name when it is announced. Write Sunday. Mother.[/i]

He reads it out loud. You didn't ask him to. His voice is perfectly light, and his left hand has closed into a fist so tight the letter is crumpling in the right one.

"Well," he says. "There we are. I'll be entering the Crown." He folds the letter very small. "I'm told it's a great honor."

*choice
  #"Tolly. What does she have on you?"
    *set candor %+10
  #"You don't have to do what she says. You're eighteen."
    *set duty %-10
  #Take the letter out of his hand, gently, before he tears it.
    *set tender %+10
    *set rel_tolly +5

He laughs, a strange thin sound in the wet gallery.

"I was told never to discuss it," he says. "So I'm not going to discuss it. I'm going to [i]describe[/i] it. That's different. I've had eighteen years to find the gaps."

He sits down on the step with the lantern between his feet.

"When I was one, I had scarlet fever. Nearly died. My mother sat up with me for eleven nights. And on the eleventh night, she stood over my cot and she swore a vow for me. In my name." His voice goes very flat and precise, the way people's voices do when they've told a story to themselves a great many times. "[i]I will not disobey my mother.[/i]" He shrugs. "I suppose she thought a child who does as he's told doesn't touch the stove. Doesn't run into the road. Doesn't die." He looks at the crumpled letter. "I didn't die. So there's that."

You think about the pâté. [i]Eat the pâté first.[/i] His hand moving before he'd finished reading.

"It's not like being hypnotized," Tolly says. "People think it would be like being hypnotized. It's not. I'm all here. I want things. I want lots of things. It's just that when she says, my body has already started before I've finished wanting anything else." He smiles at you, a wobbly, brilliant, terrible smile. "Anyway. It's illegal. It would ruin her. So, you know." He puts a finger to his lips. "Not discussed."
*set know_tolly_vow true
*set rel_tolly +10
*journal Tolly was cradle-sworn by his mother when he was one: "I will not disobey my mother." It is illegal, and it holds.

*choice
  #"I won't tell a soul. On my word."
    *set rel_tolly +10
    *set duty %+5
    "On your word," Tolly repeats, and something in his face eases. "Up here that means something, you know. Up here it's practically a mortgage."
  #"Somebody should know. The Warden could help you."
    *set duty %+10
    *set rel_tolly -3
    Tolly shakes his head. "The Warden could ruin my mother. Which would be lovely for about an afternoon, and then my mother would tell me to do something about it." He looks at you steadily. "Do you see? Anything that hurts her, she can make me stop."
  #"Then we'll find a gap in it. There's always a gap."
    *set bold %+5
    *set rel_tolly +8
    Tolly looks at you as if you've handed him something heavy and warm. "You don't know that," he says.

    "No. But you said it yourself: you've had eighteen years to find the gaps. Now there's two of us looking."

*goto fray

*label patrol_sal
Sal's patrol route, it turns out, goes up rather than down: up out of the galleries, up an iron ladder, through a hatch, and out onto the upstream face of the east abutment, where the Stay meets the fell and the heather comes right down to the waterline. Twelve white hives stand in two rows on a ledge above the lake, like a small village.

"They count as part of the Stay," Sal says, when you point out that this isn't a gallery. "The Warden said so. I asked her very precisely."

It's a clear night. The lake is black and absolutely still, with every star in it. The bees are asleep, a low comfortable murmur inside the boxes, like a room full of people breathing. Sal sits down cross-legged in the heather and puts the lantern out.

"You can ask me anything," they say. "I'll tell you the truth. It's a good place for it."

*temp asks 0
*label sal_asks
*if (asks >= 2)
  *goto sal_done
*choice
  *hide_reuse #"Is Hester dying?"
    *set asks +1
    "Yes," says Sal. "Slowly. We all are." A pause. "She's doing it faster than most people."

    You wait. Sal doesn't add anything, and you realise that is the whole of the truth they have, and they won't pad it.
    *set rel_sal +3
    *goto sal_asks
  *hide_reuse #"What's it like, being the Keystone?"
    *set asks +1
    Sal thinks about it for a long time, looking at the water.

    "There's a room in the middle of the wall," they say. "Round. Iron in the walls, like ribs. She sits in the middle with her hands on two brass rails, and she holds the whole Stay, all the time, awake and asleep. She can't leave. She can't ever leave. People visit on Sundays. She tells very rude jokes." Sal smiles. "She says it's like being a lighthouse keeper, except that you're also the light."
    *set rel_sal +3
    *goto sal_asks
  *hide_reuse #"Do you really want to be the Keystone?"
    *set asks +1
    "Yes," says Sal. The Plain Word. There's no doubt in it anywhere.

    "Why?"

    "Because someone has to hold it." They pull a stalk of heather and turn it in their fingers. "And because she's the best person I know. When she's gone, somebody should do what she did, the way she did it. Out of love. Not because they were told to." They look at you. "I'm not afraid of it. People think I should be. I've sat in that room every Sunday since I was four. It's not a prison to me. It's where she is."
    *set rel_sal +5
    *goto sal_asks
  *hide_reuse #"Do you like me?"
    *set asks +1
    *set rom_sal +5
    "Yes," says Sal. "Not very much yet. I've only just met you." They consider. "More than I expected to."

    It is, you think, the most honest compliment you have ever been paid, and possibly the strangest.
    *set rel_sal +5
    *goto sal_asks
  *hide_reuse #"What's the worst thing you know?"
    *set asks +1
    Sal is quiet for so long you think they won't answer. Then:

    "The walls remember everyone who ever held them," they say. "Hester says she can hear them. In the stone, under the hum. Two hundred and six voices." They pull their knees up. "She says they aren't happy."
    *journal Hester says she can hear two hundred and six voices in the walls of the Stay, and that they aren't happy.
    *set rel_sal +3
    *goto sal_asks

*label sal_done
You sit a while longer in the heather, listening to the bees breathe. Then Sal relights the lantern and says, "Walls," and you climb back down through the hatch into the Third Gallery to log the weep-holes, because that's the job.
*goto fray

*label fray
*page_break

It's on the way back, deep in the Third Gallery, that you see it.

At first you think it's frost. A thin white line in the mortar between two blocks at shoulder height, fine as a hair, catching the lantern light. But the galleries never get cold enough for frost. You hold the lantern closer.

It's salt. Or it looks like salt: a white crystalline thread, a few inches long, lying in the joint. And it's moving.

Not much. You have to stare to be sure. But the thread is [i]pulsing,[/i] very slowly, like something being drawn through the eye of a needle: a tiny tug, then a pause, then a tug. With each tug the mortar around it crumbles a hair's breadth, and a grain of grit falls to the floor.

*if (patrol_with = "tamsin")
  Tamsin has gone very still beside you. She doesn't say anything. She's looking at the thread, and her hand has gone to the key at her throat, and she's holding it so hard her knuckles are white.

  "Seen anything like that before?" you ask.

  "No," says Tamsin. A pause, too long. "Leave it. It's nothing."
*elseif (patrol_with = "tolly")
  "Is it," says Tolly, very quietly, "supposed to do that?"

  "I shouldn't think so."

  "No. No, I shouldn't think so either." He takes a nip from the emergency flask. "I'm going to write down that I saw it, and then I'm going to have a lie down for about a week."
*else
  Sal crouches, their face close to the stone, not touching. "Hester says there's something in the walls she doesn't like," they say. "She's been saying it for years. She says it comes from downstream." They look up at you. "I thought she meant a feeling."
*set know_frays true
*journal There are salt-white threads in the mortar of the galleries, pulsing, as if something were being slowly drawn out of the stone.

*choice
  #Put your fingertip on it.
    *set touched_fray true
    *set bold %+10
    It's cold. Colder than stone has any right to be. And the moment you touch it, you feel the pull: a steady, patient tug, like a fish on a line, running away from you through the wall. It has a direction. You can feel which way it goes, the way you can feel which way is down. It goes through the wall, out of the dam, down the valley, [i]downstream.[/i] Toward the city.

    You snatch your hand back. Your fingertip is white and numb, as though you've touched ice.
    *journal When you touched a fray, it pulled away from you: out of the Stay, downstream, toward Scarrow.
  #Don't touch it. Look at it closely: the joint, the grit, the pattern.
    *set bold %-5
    *set lore +5
    You make yourself look properly. The thread lies along the mortar and not across it, following the joint exactly, the way a stitch follows a seam. Where it has already passed, the mortar is not cracked. It is [i]loosened,[/i] as though the thing that held it together has been drawn out. You've seen that before, you think, on a jumper with a pulled thread: the knitting doesn't tear. It comes undone.

*choice
  #Report it. Tonight to Hob, in the morning to Dr. Marchbank.
    *set reported_frays true
    *set duty %+10
    *set rel_hob +5
    Hob listens without interrupting. Then he takes the lantern himself, goes and looks, comes back and writes something in the Watch log in capital letters, and underlines it twice.

    In the morning you tell Dr. Marchbank. She listens without interrupting either, and at the end she takes off her glasses and pinches the bridge of her nose.

    "Chalk the joint," she says. "Any more you find, chalk those too, and put the numbers in the log. And thank you, Scholar." She says the thank-you as if it costs her something. "Nobody's reported one of those to me in writing before. That means I can do something about it."
  #Keep it to yourself for now. Chalk a mark on the wall and come back alone.
    *set duty %-10
    *set candor %-5
    You chalk a small cross on the stone beside the thread and say nothing to Hob. When you come back the next night, alone, the thread has moved three inches along the joint. There's a little heap of grit beneath it. You chalk another cross.

    Whatever it is, you think, it isn't in a hurry. But it isn't stopping, either.
*page_break The Night of Words

At the end of the first month comes the Oathing.

The night before, by tradition, every first-year sits up in the Great Hall until dawn: the Night of Words. The second- and third-years read to you from the Vow Book, a huge water-stained ledger chained to a lectern, which lists every vow ever sworn at the College, with notes on what it cost and what it bought.

The Great Hall is long and cold and full of candles. At the far end stands a bronze statue of Josiah Thwaite, twice life size, with his hand raised as though he's about to stop the river with it. His nose is rubbed gold by seventy years of students touching it for luck.

The reader for your table is a fourth-year from Crest Watch with a halo of fair hair, ink on her cuffs, and a laugh you can hear across the hall. "Rilla Hesketh," she says, sitting down on the table rather than the bench. "I'm your vow-reader, which means I read you the book and then tell you all the parts the book leaves out."
*set met_rilla true
*set rel_rilla +10

Everybody knows who Rilla Hesketh is. First in her year, three years running. Captain of Crest Watch. She'll win the Crown this year, everyone says, the way they'd say it'll rain on Midwinter. She is also, it turns out, kind: she makes the mill-town pair laugh, she knows everyone's name by the end of the first hour, and when Tolly makes a joke about his mother she doesn't laugh, and changes the subject so smoothly he doesn't notice.

"I've got two vows," she tells you. "[i]I will not eat meat,[/i] which bought me about enough purchase to open a jar. And [i]I will not break a confidence,[/i] which bought me rather a lot, because I'm a terrible gossip." She grins. "Choose something that hurts a bit. That's the whole secret. If it doesn't hurt, it doesn't hold."

Around you, people make up their minds. Sal is already sworn, and sits reading the Vow Book for pleasure. Tamsin says, "I'm swearing nothing new. I've got one. It's enough," and then shuts her mouth hard, as though she's said too much. Tolly says, lightly, "I can't swear anything without a note from home," and Rilla glances at him, and then at you, and doesn't ask.

The candles burn down. Rilla reads. And you think about what you'd give.

*if (vow_weep)
  You already carry one. You've carried it since you were eight. The question is whether to carry another.

*choice
  #The Plain Word. [i]"I will not lie."[/i]
    *set first_vow "plain"
    Rilla reads it from the book. "The Plain Word. Most common vow at the College, and the one people most regret. You give up every lie: white lies, kind lies, lies to spare a dying man. In return, your word weighs. People believe you. And you'll hear it when they lie to you, like a coin that rings wrong." She looks up. "The Warden's sworn it. So's your friend Quaile. It makes you very restful to be around, and very hard to be kind."
  #The Open Hand. [i]"I will not strike to harm."[/i]
    *set first_vow "hand"
    Rilla reads it from the book. "The Open Hand. You can never again hurt a living soul on purpose. Not to save your own life. Not to save anyone's. In return, you can hold things: stop a blow in the air, hold a door against a flood, set a broken bone so it stays set." She looks up. "Warders on the Wet Galleries swear it. Healers too. It's the quiet vow. People underestimate it until the day they need it."
  #The Given Door. [i]"I will not refuse one who asks me for help."[/i]
    *set first_vow "door"
    Rilla reads it from the book. "The Given Door. You may never refuse anyone who asks for your help. Anyone. Anything within your power. In return, the way opens for you: locks, gates, bolted doors, lost paths, the road home in fog." She looks up. "It's a lovely vow. It's also the one that gets people killed, because sooner or later somebody who doesn't love you works out what you swore."
  #The Kept Name. [i]"I will not speak my own name."[/i]
    *set first_vow "name"
    Rilla reads it from the book. "The Kept Name. You never again say who you are. Not to a friend, not to a lover, not to a court. In return, the world stops looking at you: eyes slide off, doors don't notice you, guards forget you as you pass." She looks up. "Spies swear it. And grieving people, sometimes. People who'd rather not be anybody for a while."
  #Nothing. [i]I will swear nothing.[/i]
    *set first_vow "none"
    Rilla doesn't read from the book for this one. She just looks at you with interest. "You can, you know. People don't. Two or three a decade walk out of the Oathing unsworn." She taps the ledger. "No purchase. No leaning, not really. You'll be the weakest person in every room up here." A pause. "And nobody on earth will be able to hold you by your word. Some people think that's worth more than everything in this book."

*if (first_vow = "none")
  *goto oathing
Rilla closes the book on her finger. "Sure?" she says. "It's forever. That's rather the point."

*choice
  #"I'm sure."
    *set bold %+5
  #"No. Let me think again."
    *set bold %-5
    You sit with the Vow Book until the candles are stubs, and turn the pages, and think.

    *choice
      #The Plain Word, after all.
        *set first_vow "plain"
      #The Open Hand, after all.
        *set first_vow "hand"
      #The Given Door, after all.
        *set first_vow "door"
      #The Kept Name, after all.
        *set first_vow "name"
      #Nothing. You'll swear nothing.
        *set first_vow "none"

*label oathing
*page_break Dawn

At dawn they take you down to the Oathing Hall, one at a time.

The Warden is there, and a clerk from the Council with a registry book and a stamp, and the air coming up through the Throat is so cold it makes your eyes water. The brass lines on the floor gleam. WHAT IS KEPT, KEEPS.

You step onto the iron grille. Beneath your boots there is nothing but dark, going down and down into the heart of the Stay, and the hum comes up out of it so strong you can feel it in your teeth.

"In your own words," says the Warden. "Down into the Throat. Take your time."

*if (first_vow = "none")
  *set bold %+5
  *set duty %-10
  *set finesse +10
  *set lore +5
  You look down into the dark. And you say, clearly, so it carries:

  "I swear nothing."

  A murmur behind you. The Council clerk looks up from his registry, pen raised, and slowly puts it down. The Warden's face does not change at all.

  From very far below, carried up on the cold air, comes a voice. It's a woman's voice, dry and amused, the voice that sings in the walls at night.

  [i]"Heard,"[/i] it says.

  Even that, you think. She hears even that.
  *achieve unsworn
  *journal You walked out of the Oathing unsworn. Nothing holds you by your word.
*else
  *if (first_vow = "plain")
    *set vow_plain true
    *set candor %+30
  *elseif (first_vow = "hand")
    *set vow_hand true
    *set tender %+20
  *elseif (first_vow = "door")
    *set vow_door true
    *set tender %+10
    *set bold %+10
  *else
    *set vow_name true
    *set candor %-20
  *set vows +1
  *set purchase +30
  *set duty %+5
  You look down into the dark, and you say it.
  *if (first_vow = "plain")
    [i]"I will not lie."[/i]
  *elseif (first_vow = "hand")
    [i]"I will not strike to harm."[/i]
  *elseif (first_vow = "door")
    [i]"I will not refuse one who asks me for help."[/i]
  *else
    [i]"I will not speak my own name."[/i]

  The words go down into the Throat and don't come back. And then something happens that nobody warned you about: the stone takes hold. You feel it close around the words like a hand around a coin. There's a pressure behind your breastbone, and a click, deep and definite, like a key turning in a very old lock.

  And from very far below, carried up on the cold air, comes a voice. It's a woman's voice, dry and amused, the voice that sings in the walls at night.

  [i]"Heard,"[/i] it says.

  The Council clerk stamps his registry. Your vow is written down now, in a book in the Council House, next to your name. When you step off the grille your legs are shaking, and your whole body feels strange and new and taut, like a bow somebody has just strung.
  *achieve sworn
*page_break

Master Fell takes the first-years for their first real lesson in leaning three days later, in the attic room, with Magistrate watching from the windowsill.

*if (first_vow = "plain")
  "Three statements," he says to you. "One is false. Tell me which." He says: [i]I have never been to Lisk. I dislike eels. I was born in Scarrow.[/i] And you hear it, you actually [i]hear[/i] it: the second sentence lands wrong, like a coin that's lead instead of silver. "You like the eel," you say. Fell smiles. "I love the eel," he says. "Now say something true, and lean on it."

  You say, "This window is open," to the shut window, and you can't. Your mouth won't make the shape. So instead you say, "I am going to open that window," and lean, and it swings open so hard it bangs the wall, and the whole class jumps. "Your word weighs," Fell says. "Now you'll have to be careful where you put it down."
*elseif (first_vow = "hand")
  He throws a stick of chalk at your head without warning. You don't think; you lean. The chalk stops a foot from your face and hangs there in the air, turning slowly, until you remember to breathe and it drops. Then he has Hob (who has come up specially, and is enjoying himself enormously) push on a door while you hold it shut. Hob weighs twenty stone. The door doesn't move.

  "You can't hurt anyone," Fell says. "That's the price. But you can [i]hold.[/i] And there'll come a day when holding is the only thing that matters." He looks, just for a moment, very tired.
*elseif (first_vow = "door")
  He locks the attic door with a big iron key, drops the key in Magistrate's tank, and says, "Out." You look at the door. You lean, not on the lock, exactly, but on the idea that there's a way through, and the bolt slides back by itself with a clack.

  "Any door," says Fell. "Any lock. Any path, if there's one to be found." He fishes his key out of the tank with a pair of tongs, and Magistrate glares. "And any fool who asks you nicely. Remember that part. Somebody else will."
*elseif (first_vow = "name")
  He calls the register. When he reaches your name he looks up, and looks right at you (you're in the front row) and frowns, and looks past you at the back of the room. "Absent?" he says. Somebody laughs. You have to put your hand up and wave it before his eyes find you, and even then they don't quite want to stay.

  "Eyes slide off you now," Fell says, with interest. "Doors won't notice you. Nor will people, if you don't want them to." He makes a note. "Be careful. It's very easy to disappear by accident. It's much harder to come back."
*else
  Fell keeps you back after the others have gone, and sits on the edge of his desk.

  "You'll feel left out," he says. "They'll be lifting chalk and opening doors, and you'll be sitting there. I know. I sat there." He takes a pinch of chalk dust and blows it gently into the air between you. "But the unsworn have one thing nobody else has. There's nothing in our eyes." He points. "Look at Hob, when he comes back in. Don't look [i]at[/i] him. Look at the air [i]around[/i] him."

  When Hob comes back in you do. And you see it: very faint, like heat-shimmer, a line of tension running out from Hob into the world, taut as a fishing line. His vow. You can [i]see[/i] his vow.

  "The unsworn see clearest," Fell says. "It's not much. But it's yours, and nobody gave it to you."
  *set finesse +5
*if (vow_weep)
  At the end of the lesson Fell stops you at the door. "You've two kinds of purchase in you," he says, studying you with his head on one side. "The new one, and an old one. The old one's shaped like grief." He hesitates. "It's very strong. Be careful with it. Things that strong don't like being kept forever."
*page_break The Michaelmas Feast

The Michaelmas Feast is the first time you see the whole College together in one place: a hundred and thirty scholars at four long tables in the Great Hall, one for each Watch, with the masters on a dais at the end under Thwaite's raised bronze hand. There is roast goose, and a great deal of it. There is cider. There is a choir.

Then the Warden stands, and the hall goes quiet so fast you can hear the candles.

"The Crown," says Agnes Brathwaite, "will be contested this year, as every year."

A ripple of sound. Everyone knows about the Crown. Three trials, one in each term: the Gallery, in the autumn, through the lower galleries of the Stay; the Question, in the winter, before the Board and the Council; and the Deep, in the spring, under the Heldwater itself. The scholar with the highest standing at the end is Crowned at Midsummer, on the crest, in front of the whole city, as Heir to the Stay. Crowned scholars sit on the Board. Crowned scholars go on to the Council, the Bench, the great Sworn houses. Half the portraits on Crowhill are of people who were Crowned.

"This year," the Warden goes on, "by resolution of the Board, the trials will be open to scholars of every year. First-years included."

The ripple becomes a roar.

"The roll is on this table," says the Warden, over it. "Any scholar may enter. Each entrant will name a second, who will assist them in the trials. The Crowned," and here her voice doesn't change at all, but you notice, for some reason, that she has chosen every word, "stands ready to serve the Stay. That is all."

She sits. And the hall goes mad.

Rilla Hesketh is on her feet at the Crest table with her friends thumping her on the back, laughing, shaking her head. Up on the dais, Master Fell has put down his fork. He doesn't pick it up again. His face is the color of the tablecloth.

Tolly Varnish stands up.

He doesn't look at anyone. He walks the whole length of the hall to the dais like a man walking in his sleep, takes the pen, signs the roll in his beautiful copperplate, and walks back, and sits down, and picks up his cider with a hand that isn't quite steady.

"I didn't decide that," he says to you, very quietly. "I want you to know I didn't decide that."

Tamsin Mottram is already on her way up. She signs in four hard strokes and comes back with her jaw set like a trap. Sal Quaile goes up after her, unhurried, and signs, and on the way back touches Thwaite's golden nose, not for luck, it seems to you, but the way you'd touch the shoulder of someone you pity.

Around you, people are making up their minds. The roll is on the table. The whole hall seems to be looking at Footing Watch.

*set crown_started true
*journal The Crown is open to first-years this year. Three trials; the winner is Crowned at Midsummer. "The Crowned stands ready to serve the Stay."

*choice
  #Enter the Crown yourself.
    *set entered true
    *set bold %+10
    *set standing +10
    You walk up the length of the hall. The pen is heavy. You sign your name under Sal's, and the ink shines wet in the candlelight, and the Warden watches you do it without any expression at all.

    When you get back to the Footing table, Hob Gorringe is waiting with his enormous arms folded. "You'll need a second," he says. "Footing Watch looks after its own." He holds out a hand the size of a spade. "If you'll have me."

    You'll have him.
    *set rel_hob +10
    *set rel_tamsin +5
    Across the table, Tamsin looks at you with narrowed eyes, as though you've just walked onto a piece of ground she thought was hers. "Good," she says, after a moment. "I'd rather beat someone who's trying."
  #Second Tamsin Mottram. She'll need someone, and she'll never ask.
    *set second_of "tamsin"
    *set rel_tamsin +10
    She doesn't ask. She's sitting with her arms folded, glaring at the roll as though it's insulted her, and nobody is offering to second her, because she has spent a month making sure nobody would.

    You sit down next to her. "You'll need a second."

    "I can't take it," she says, low and furious. "You know I can't take it."

    "Then don't take it. Buy it."

    She looks at you for a long moment. "What's the price?"

    *choice
      #"Teach me to swim. Properly. Before the Deep."
        *set tamsin_trade "swim"
        *set nerve +5
        "Deal," she says. "You'll hate it. The water's cold enough to stop your heart."
      #"Tell me about Hebble. All of it. Everything your Nan told you."
        *set tamsin_trade "hebble"
        *set lore +5
        *set rel_tamsin +5
        She goes very still. "That's not a small price," she says. "That's most of what I've got." Then, after a moment: "Deal."
      #"One favor, to be named later."
        *set tamsin_trade "favor"
        *set sway +5
        She narrows her eyes. "That's a dangerous price."

        "I'm a dangerous person."

        "You're not," she says. "But fine. Deal." She spits in her palm, Rows fashion, and holds it out, and you shake on it.
    *if (tamsin_trade != "favor")
      You shake on it. Her hand closes on yours with no trouble at all.
  #Second Tolly. He's shaking.
    *set second_of "tolly"
    *set rel_tolly +15
    He's shaking. He's hiding it well, the way he hides everything, in a flood of chatter about goose, but his cider is slopping over the rim of his cup.

    "Tolly. I'll second you."

    He stops talking so suddenly it's like a tap turned off. "You'd do that?"

    "Somebody's got to make sure you don't win."

    He laughs, a real one, helpless and grateful, and then puts his face in his hands for a moment, right there at the Footing table. "Please," he says through his fingers. "Please. I can't do this with a stranger."
  #Second Sal. They've already asked you, with a look.
    *set second_of "sal"
    *set rel_sal +12
    *set rom_sal +3
    They sit down opposite you, and fold their hands, and say, "Will you be my second? I'd like it to be you." Just like that. No preamble.

    "Why me?"

    "You asked me the right questions on the first night," says Sal. "And you'll tell me the truth if I'm doing it wrong." They consider. "I don't know many people who would."

The choir starts again. The hall settles, slowly, back into goose and cider and gossip. And up on the dais, Master Fell gets up without a word and walks out of the side door, and doesn't come back.
*if (entered)
  Tamsin catches your eye across the table. "May the best one win," she says, and it doesn't sound like a pleasantry. It sounds like a threat, or a promise, or both.
*finish
`);
