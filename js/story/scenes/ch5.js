HW.scene("ch5", String.raw`
*chapter 5 The Question
The winter term comes in grey and stays grey.

The hum is B-flat again, near enough. The Sluice Gallery has been shored with timber and iron, and the crack in its wall is chalked and numbered and watched day and night by Sluice Watch in shifts. The frays keep coming. Dr. Marchbank has stopped pretending they're mineral and started measuring them with calipers. And the College goes on: lectures, patrols, Stay stew, Sunday letters home. Nobody talks about the Wet Night. Everybody talks about the Question, which is in five weeks, before the Board and the Council, in the Great Hall.

On the second Sunday of term, Sal comes to find you in the Sump.

"Hester wants to see you," they say. "The one from the lift. She asked for you by name." A pause. "Well. By description. She said, [i]the one that did something in the lift that I felt in my back teeth.[/i]" Another pause. "I told her that could be several people. She said, [i]Then bring me the one you like best.[/i]"

*if (rel_sal >= 45)
  They hold your eyes a moment longer than they need to.

The way to the Keystone Chamber is the Crown Stair: a spiral so narrow your shoulders brush both walls, climbing up through the middle of the dam from the Third Gallery. There's no lamp on it. Sal doesn't need one. The hum gets louder with every turn until it isn't a sound anymore but a pressure, like being underwater, and then the stair ends at a small round iron door with no handle.

Sal knocks: three, then two.

"Come in, then," says a voice from inside, the voice from the walls, the voice that said [i]Heard.[/i] "Don't let the draught in. Sal, love, did you bring the biscuits?"
*page_break The Keystone Chamber

It's like being inside a bell.

The room is round and not very large, and the walls are iron: great iron ribs rising from the floor and curving in overhead, close together, black and ancient, humming, all running inward to meet at the center of the ceiling like the spokes of an umbrella seen from beneath. It's warm. It smells of paraffin, and old books, and oranges.

In the middle of the room, bolted to the floor, is an armchair.

Not an iron throne. An armchair, overstuffed, faded red velvet, with the stuffing coming out of one arm and a crocheted blanket over the back. In front of it, at the height of a seated person's hands, two brass rails rise out of the floor, worn gold and smooth as glass. And in the chair sits a small, broad, white-haired woman in a cardigan, with her hands resting on the rails and her face turned toward the door.
*set met_hester true
*set rel_hester +20

Her eyes are pale and clouded, like milk in water. She's smiling.

"There you are," says Hester Quaile. "Come where I can hear you. Sal, put the kettle on, there's a love."

There's a gas ring, and a kettle, and a shelf of books with raised dots instead of letters. There's a wireless set, and a birdcage with a yellow canary in it, and a spittoon, which she informs you she uses. On the walls between the iron ribs, in frames, are dozens of photographs she can't see: a young woman in a College gown, dockworkers on a quay, a wedding, a line of scholars on the crest squinting into the sun.

"The canary's a joke," she says, following your silence. "Some Warden's idea of company. It's the only other thing in here that can't leave, so we get on." She pats the arm of the chair. "Sit. There's a stool. Sal, is it pretty? The one from the lift?"

"I don't think that's a fair question," says Sal, from the kettle.

"I didn't ask if it was fair, I asked if it was true." Hester cackles, a big wheezing laugh like a bellows. "Go on, duck. Tell me your name, so I've something to call you."

*if (vow_name)
  You open your mouth, and the Kept Name shuts it.

  Hester tilts her head, listening to the silence. Then she laughs again, delighted. "Kept Name, is it? Oh, I felt that one go down the Throat. Very good. Very mysterious." She settles back. "I'll call you duck, then. Everybody's duck in the end."
*else
  You tell her. She repeats it, slowly, as if tasting it. "{name}," she says. "Good. That'll do nicely."

Her hands stay on the rails the whole time. Once, reaching for the biscuit Sal gives her, she lifts one hand away, and you feel it: a lurch in the floor, a sag in the hum, like a stair that isn't there. She puts the hand back. The hum steadies.

"Forty-one years," she says, crunching. "You'd think I'd have learned to eat one-handed." She turns her face toward you. "Go on, then. You've questions. Everybody has questions. Nobody ever asks them, they just sit there looking sorry for me. Ask me."

*temp hq 0
*label hester_hub
*if (hq >= 4)
  *goto hester_done
*choice
  *hide_reuse #"What's it like?"
    *set hq +1
    *set rel_hester +5
    Hester considers it. Not the way people usually consider questions, but the way a craftsman considers a joint.

    "Like holding a door shut in a gale," she says. "For forty-one years. Like being a lighthouse keeper, except you're the light as well. Like being the only one awake in a big house full of sleepers who'll drown if you nod off." She crunches her biscuit. "I can feel all of it. Every stone. Every drip. The lake leaning on me like a cow on a gate. I can feel you lot, running about in the galleries like mice in the walls. I felt you ring the Sump bell."

    She's quiet a moment.

    "Shall I tell you the worst of it? It's not the dark. It's not the chair. It's that nobody ever says thank you." She laughs, not quite as loud. "It's like thanking the floor."
    *goto hester_hub
  *hide_reuse #"Why did you do it? You were nineteen."
    *set hq +1
    *set rel_hester +5
    "Because there were two hundred and six people chained to this wall," says Hester, "and I could let them go with one sentence."

    She lets that sit.

    "Do you know how rare that is? To be able to fix a thing with a sentence? Most people go their whole lives and never once get to. I was a dockworker's girl from Pier Street with a Levy place and a big mouth, and one day Warden Sallis stood up in the Great Hall and said, [i]We need one volunteer.[/i] And I thought: well, I've got nothing else planned." She laughs. "I'd do it again. I'd do it again tomorrow."

    Her hands tighten on the rails, just slightly.

    "And I hate them for asking. I hate them every day. Both, duck. Both at once. You'll find that's allowed. Nobody tells you, but it's allowed."
    *goto hester_hub
  *if (met_fell) *hide_reuse #"Master Fell."
    *set hq +1
    *set rel_hester +5
    The name goes into the room like a stone into a pond.

    Hester doesn't say anything for a long time. Over at the kettle, Sal has gone very still.

    "Ambrose," she says at last. "How is he? Still tidy? Still keeping that eel?" She doesn't wait for an answer. "He thinks I hate him. He thinks I gave my eyes for him." She shakes her head slowly. "I gave my eyes for the city. For the Nethers. For every soul asleep under this wall that night. He was only the one who wasn't there." A pause. "He was twenty-two. He'd been told it was a prize."

    She turns her clouded eyes toward you, and for a moment it's as if she can see you perfectly.

    "Tell Ambrose there's nothing to forgive," says Hester Quaile. "Tell him from me. He won't believe it from me; he's never once come up those stairs to hear it. Maybe he'll believe it from you."
    *set hester_message true
    *journal Hester's message for Master Fell: "Tell Ambrose there's nothing to forgive."
    *goto hester_hub
  *hide_reuse #"Sal says you hear voices in the walls."
    *set hq +1
    *set rel_hester +5
    *set know_holding true
    "Two hundred and six of them," says Hester. "Under the hum. You've got to listen hard." She lifts her chin. "The old gallery, under this room. The Holding. They sealed it when they built me, but they never pulled it out. Cost too much. All that iron's still there, all those seats, still tied into the wall. It still carries." She taps a rail. "Sallis ran all its load up through the spine into this chamber, into me. But the voices are still down there. Everyone who ever sat in those seats left a bit of themselves in the stone. They're not happy. They weren't asked."

    She's quiet a moment.

    "A hundred hands holding a little each is a kinder thing than one pair holding all of it," she says. "Any fool can see that. But a hundred people argue, and one person does as she's told. That's why they built me."
    *journal Hester: the Holding lattice under her chamber was never torn out. It still carries. "A hundred hands holding a little each is a kinder thing than one pair holding all of it."
    *goto hester_hub
  *hide_reuse #"How long have you got?"
    *set hq +1
    *set rel_hester +3
    "Till Midsummer," says Hester, at once.

    Sal, at the kettle, doesn't turn round.

    "I've said Midsummer, and I keep my word. That's what I am, duck: somebody who keeps her word. It's the only thing I've got left that's mine." Her fingers stroke the brass. "The Wet Night took it out of me. I've not many more of those in me. So I'll hold till the Crown's decided and the Heir's standing ready, and then I'm going to let go of these rails, and I'm going to sleep, and somebody else can have the chair."
    *journal Hester will hold until Midsummer, and then let go.
    *goto hester_hub
  *if (know_holding) *hide_reuse #"Could the Holding work again? Many hands instead of one?"
    *set hq +1
    *set rel_hester +8
    *set hester_plan true
    Hester sits up.

    "Could it," she says, not a question. "Could it." She's quiet a long moment, and you realise she's listening: not to you, but to the wall, to the iron beneath her, the way a sailor listens to a ship. "Aye. It could. It's all still there. It'd want willing hands this time, mind. Not a village with a constable at its back. People who'd sit down in those seats because they chose to, and hold a little each, a year or a month, and go home at night to their tea." A breath. "And somebody'd have to draw the lake down while they held it, so it wouldn't have to be held forever. That's the other half. Drain it down and build it proper. The engineers' way. Costs money. The Council'll never pay."

    She turns her clouded eyes on you, fierce.

    "Find them, then," she says. "If you're serious. Find me hands. Bring them down to the old gallery on the night, and I'll hand it over to them. I'll hand it over gladly."
    *journal Hester: "Find me hands. Bring them to the old gallery on the night, and I'll hand it over to them." The Holding could work, with willing hands, and a drawdown of the lake.
    *goto hester_hub
  *if (know_frays) *hide_reuse #"Someone's unpicking the Stay. The white threads in the galleries."
    *set hq +1
    *set rel_hester +5
    *set nan_hint true
    Hester's face changes. For the first time since you came in, she stops smiling.

    "Aye," she says. "Someone downstream. Thirty-odd years now. Patient as winter. A thread a night, pulled out through the water, and every thread's one more I've got to hold." She's quiet. "It's why I'm tired, duck. Not just the years. I've been holding against someone pulling for thirty-one years."

    "Do you know who?"

    "I know who." Her hands are very still on the rails. "I won't say. Not yet. It's not mine to say." A long breath. "And I'm not sure I'd stop them if I could. I've never been sure."
    *journal Hester knows who is unpicking the Stay, from downstream, for thirty-one years. She won't say. She isn't sure she'd stop them.
    *goto hester_hub
  #"I should let you rest."
    *goto hester_done

*label hester_done
When the tea's drunk and the biscuits are gone, Hester reaches out one hand (the other stays on the rail) and finds your wrist, unerringly, and holds it. Her grip is astonishingly strong.

"I want something from you, duck," she says. "A favor. Will you do it?"

*if (vow_door)
  You feel the Given Door close around the words before you've even thought about it. You can't refuse. You wouldn't have anyway.
*choice
  #"Anything."
    *set tender %+5
    *set rel_hester +5
  #"That depends what it is."
    *set bold %-5
    Hester snorts. "Careful one. Good."

"Bring me rain," says Hester Quaile.

"I can feel the lake. I can feel the whole wall and every drip in it. I can't feel weather. There's four hundred feet of stone between me and the sky." Her grip tightens. "I've not felt rain on my face in forty-one years. I used to stand on the dock in it with my mouth open. My mam used to clip my ear." She lets go of your wrist. "Bring me rain. In a jar, if you have to. I don't care how daft it is."
*set rain_quest true
*journal Hester's favor: "Bring me rain." She hasn't felt rain in forty-one years.

When you leave, Sal walks you back down the Crown Stair in the dark without a word. At the bottom, in the Third Gallery, they stop.

"She liked you," they say. "She doesn't ask most people for anything." A pause. "She's never asked me for anything, and I've been going up those stairs every Sunday for fourteen years."
*set rel_sal +5
*page_break Sunday letters

The week before the Question, Councillor Honoria Varnish comes to the College.

The Council's Stay Committee sits with the Board of the College once a term, and this term it sits early, in the Warden's parlor, with the door shut. You see Honoria cross the crest in a long grey coat, with two Councillors a step behind her like pages, and the whole College goes quiet as she passes, the way birds go quiet under a hawk.

She sends for Tolly afterwards. He's gone for twenty minutes.

When he comes back to the Sump he walks straight past everyone to the dead piano and sits down at it and plays the same four notes, over and over, until the mill-town pair get up and leave the room. Then he stops, and turns round on the stool, and looks at you.

"She's told me two things," he says. His voice is perfectly light. "The first is that I'm to lose the Crown. Gracefully, she said. [i]Lose gracefully, darling.[/i] Which is a relief, honestly; I was going to anyway." He laughs. "The second is that I'm to tell her, every Sunday, in my letter, everything that you do."

He looks at his hands on his knees.

"She said your name. She knows your name. She said, [i]Your friend {name}. Tell me what they do.[/i] Every Sunday." His voice cracks, finally. "And I will. I'll have to. I'll sit down on Sunday and my hand will write it all down, everything I've seen, everything you've said in front of me, and I'll post it, and I won't be able to stop."

He takes a long breath.

"So I'm asking you, as your friend: please be extremely boring this week. Do boring things. Eat turnips. Log weep-holes. I can only tell her what I see."
*set tolly_spy true
*set rel_tolly +5

*if (not know_tolly_vow)
  *set know_tolly_vow true
  And then (because he has to explain, and because he's been waiting four months for somebody to ask) he tells you about the vow. [i]I will not disobey my mother.[/i] Sworn over his cot when he was one and dying of scarlet fever. Illegal. Unbreakable. Eighteen years old.
  *journal Tolly was cradle-sworn by his mother when he was one: "I will not disobey my mother." It is illegal, and it holds.

*choice
  #"Then we'll find a way to get you out of it. There has to be one."
    *set rel_tolly +5
    *goto tolly_plans
  #"Then I'll give you something to report." You'll be as boring as a sermon, in front of him.
    *set candor %-5
    *set rel_tolly +5
    *set tolly_spy false
    Tolly stares at you, and then laughs, helplessly, the first real laugh since he came back. "You're going to be [i]boring[/i] at me," he says. "On purpose. For my mother." He wipes his eyes. "That's the most romantic thing anyone's ever done for me." Then, sobering: "It won't last. She'll know. She always knows."
    *goto tolly_plans
  #Take his hands and hold them still, so they stop shaking.
    *set tender %+10
    *set rom_tolly +5
    *set rel_tolly +5
    He lets you. His hands are icy. "I'm going to betray you every Sunday," he says quietly, "and you're holding my hands." He shakes his head. "I don't understand you at all."
    *goto tolly_plans

*label tolly_plans
You sit with him at the dead piano and go through it, the way you'd go through a lock with a bent pin: every gap, every wall.

*choice
  *selectable_if ((lore >= 45) or (archive_pass)) #The law. Cradle vows can be annulled by the Court of the Word, if you can prove they were sworn unlawfully.
    *set tolly_plan "court"
    *set lore +3
    You've read it in Ebbing's lectures, or in the archive, or both: [i]Oathing Act, section nine. A vow sworn on behalf of another shall be void upon proof to the Court of the Word that it was so sworn.[/i] You'd need proof. Tolly can't give evidence: he's been told never to discuss it. But the Council's own Oath Registry will show no vow registered for Ptolemy Varnish, and yet any Sworn with half an eye can see he's bound. And there might be a witness.

    "Nurse Pegg," says Tolly slowly. "My nurse. She was there, the night Mother swore it. She's ninety. She lives in the Rows now, with her niece." He looks at you. "Mother pensioned her off when I was six. She'd know. She'd [i]remember.[/i]"

    It would mean a hearing. It would mean his mother in the dock, and the whole of Crowhill watching. "It would ruin her," Tolly says, very quietly. "It would absolutely ruin her." He's quiet a moment. "Do it anyway."
    *journal Plan: petition the Court of the Word to void Tolly's cradle vow. You'll need Nurse Pegg, who lives in the Rows, and a hearing. It will ruin Honoria.
  *selectable_if ((has_report) or (sway >= 50)) #His mother. Only she can release him cleanly. Make her do it.
    *set tolly_plan "persuade"
    *if (has_report)
      You have something she wants. You've seen her face when she talks about the report; you know what it would mean on the front page of the [i]Courier.[/i]
    *else
      You've met her. She's a woman who thinks she is the only adult in every room. People like that can be reasoned with, if you speak their language: cost, consequence, legacy.
    "She'd never," says Tolly. "Never. She'd sooner cut off her hand." But he's looking at you with something that might be the beginning of hope. "Would she?"
    *journal Plan: persuade Honoria Varnish to release Tolly from his vow herself.
  #The snap. He could simply disobey her, once, deliberately, and let the vow break.
    *set tolly_plan "snap"
    *set bold %+5
    Tolly goes very white. "People die of the snap," he says. "Master Fell nearly did, and he'd only sworn it at twenty-two. I've had this since I was one. It's in my [i]bones.[/i]" He looks at his hands. "But if I did it, and somebody was there, somebody who knew what they were doing, who could hold me—" He swallows. "Not yet. I'm not brave enough yet. In the spring. Give me till the spring."
    *journal Plan: when Tolly is ready, he will disobey his mother on purpose and break the vow. The snap could kill him. He'll need someone to hold him through it.
  #Nothing yet. There's no way out that won't hurt him. Wait, and watch for one.
    *set tolly_plan ""
    *set bold %-5
    You tell him the truth: you don't know yet. He nods as if he expected it. "That's all right," he says. "I've waited eighteen years. I'm very good at it."
*page_break The Question

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
*temp t2 0

*if (team = "tamsin")
  The night before the Question, Tamsin lets you read her speech.

  She's drawn her proposition early (the Board hands them out a week ahead) and it's a cruel one: [i]That the Stay owes nothing to Hebble.[/i] She has to argue [i]for[/i] it.

  She's written it out on laundry dockets in pencil, tiny and dense and furious. It's brilliant. It's cold, and exact, and devastating, and it builds the Council's case so well you almost believe it, and then the last line turns the whole thing over like a knife: [i]And that is exactly what the Council believes, and every word of it is in the Settlement, and every word of it is a lie.[/i]

  "They'll mark me down for the last line," says Tamsin. "Out of order. I don't care." She looks at you. "Do you?"

  *choice
    #"Say it. Say every word."
      *set rel_tamsin +10
      *set duty %-10
      *set t2 1
      She nods, once, as if you've passed a test she didn't admit she was setting.
    #"Cut the last line. Win the Crown first. Say it from the chair."
      *set rel_tamsin -5
      *set duty %+5
      *set t2 3
      She looks at you for a long time. Then she tears the last docket off, and folds it very small, and puts it in her pocket. "From the chair," she says. "You'd better be right."
    *selectable_if ((lore >= 40) or (sway >= 40)) #"Keep it. But sharpen the rest so they can't mark you down for anything else."
      *set rel_tamsin +5
      *set lore +2
      *set t2 2
      You work on it together until two in the morning, by the laundry boiler, cutting every word that isn't doing work. By the end the speech is so tight there's nowhere to put a pin, and the last line is still there.
*elseif (team = "sal")
  The night before the Question, Sal asks you to listen to their speech.

  Their proposition is [i]That no one should be asked to give what they would not give freely.[/i] They argue it the only way Sal can: plainly, truthfully, about Hester. About the chair and the rails and the canary. About what it means to give your whole life to a thing, and to give it gladly, and to be allowed to. It's the most beautiful thing you've ever heard, and it makes you want to put your fist through a wall.

  *choice
    #Help them polish it. It deserves to win.
      *set rel_sal +5
      *set t2 3
      You help. There's not much to do. You mostly listen, and tell them where they lose you, and they fix it, instantly and exactly, because Sal can't bear to be misunderstood.
    #Tell them it's too long, and that they should cut the part about Hester's hands. (It isn't too long. It's perfect.)
      *if (vow_plain)
        You open your mouth to say it and the Plain Word closes it. You can't. You can't tell Sal something that isn't true.

        So you tell them the truth instead: that it's perfect, and that you're afraid of it. Sal looks at you for a long time. "I know," they say. "I'm afraid of it too." And they go and win.
        *set t2 3
        *set rel_sal +5
      *else
        *set candor %-10
        *set t2 1
        Sal believes you. Of course Sal believes you; Sal has never lied in their life, and doesn't expect it from people they like. They cut the part about Hester's hands. It's still good. It isn't perfect anymore.

        You lie awake that night for a long time.
*elseif (team = "tolly")
  The night before the Question, Tolly reads you his proposition off the card, in a voice of pure, delighted horror: [i]That obedience is a virtue.[/i]

  "Someone on the Board has a sense of humor," he says. "Or else Mother wrote it." He puts the card down. "I'm going to lose. I've been told to. Gracefully." He picks the card up again. "But I don't have to lose [i]quietly.[/i]"
  *set t2 0
*else
  You draw your proposition a week before, from a velvet bag held out by Mr. Ebbing, who looks as nervous as you are. You unfold the slip.

  [i]That what is kept, keeps.[/i]

  The College motto. The words over the Oathing Hall door. You spend the week thinking about what's kept up here, and who keeps it, and who pays.

The Great Hall has been turned into a courtroom.

At the far end, under Thwaite's raised bronze hand, a long table has been set for the Board: the Warden in the center, grey and still; Mr. Ebbing, in a waistcoat that has clearly been pressed for the occasion; two old governors in fur collars. Beside them, at a second table, sits the Council's Stay Committee: Councillor Honoria Varnish, in grey silk, and two Councillors you recognise.
*if (leave_choice = "ball")
  (One of them is the man from the library. He looks right at you, and doesn't know you.)
Behind the entrants' bench sit the seconds, and behind them the whole College, and up in the gallery the public: aldermen, mill-owners, Crowhill wives, and a sharp young woman in a man's hat with a notebook on her knee, who you're told is from the [i]Scarrow Courier.[/i]

*if (rilla_out)
  Rilla Hesketh is not on the entrants' bench. She's in the gallery, very pale, with her arms folded, watching the Board as though she'd like to set fire to it.
*else
  Rilla Hesketh goes first, and argues [i]That the Council serves the whole city[/i] so brilliantly that half the gallery applauds, and Honoria Varnish inclines her head to her with a small approving smile.

Tolly goes next. He argues [i]That obedience is a virtue.[/i] He does it perfectly: every precedent, every authority, every proverb, in his beautiful cavalry-charge voice. And then, at the end, with his hands behind his back, he says, "I have been perfectly obedient every day of my life. And I have never, once, been virtuous." And sits down.

There's a silence. Up at the Committee table, Honoria Varnish's face does not move at all.

Sal speaks, and the hall goes so quiet you can hear the hum.
*if ((team = "sal") and (t2 < 3))
  It's very good. Everyone says so afterwards. You keep thinking about the part about her hands.
*else
  When they finish, nobody claps for a long moment, because nobody can quite bear to break the silence. Then the whole College does.

Tamsin speaks, and argues [i]That the Stay owes nothing to Hebble[/i] so coldly, so exactly, so terribly well that you see Councillors nodding along.
*if ((team = "tamsin") and (t2 = 3))
  Then she stops, and gathers her dockets, and sits down, and her hand is in her pocket, clenched around a folded slip of paper.
*else
  And then she says, into the silence, "And that is exactly what the Council believes. And every word of it is in the Settlement. And every word of it is a lie."

  Uproar. The Board's gavel. Mr. Ebbing, of all people, has to hide his mouth behind his hand. Honoria Varnish smiles a thin, polite smile, and makes a note.

*if (team = "pc")
  And then it's you.
  *goto question_pc
*else
  And then it's the end, and the Warden rises, and says the words from the old rules of the Crown that nobody has heard in years because nobody ever uses them:

  "Does any second wish to put a question to the Board?"

  The seconds' bench is silent. Seconds' Questions are a relic, like the Mayor's Swordbearer. The Board must answer them, truthfully, under the Warden's vow. Nobody ever asks.

  You stand up.
  *goto question_second

*label question_pc
You walk to the lectern. You unfold your slip, though you know what it says. The whole hall is looking at you, and the Board, and the Committee, and the woman from the [i]Courier[/i] with her pencil raised.

[i]That what is kept, keeps.[/i]

*choice
  #Argue it. Straight, and as well as you can. This is a trial, and you mean to win it.
    *set duty %+5
    *goto question_argue
  *selectable_if (know_crown) #Argue it, and then turn it: [i]what is kept[/i] includes secrets. Ask the Warden, in front of everyone, what the Crown is for.
    *set bold %+10
    *set duty %-15
    *goto question_reveal
  *selectable_if (has_report) #Put the slip down, take out Dr. Marchbank's report, and read its first page aloud.
    *set bold %+15
    *set duty %-20
    *goto question_report
  *selectable_if (know_rolls) #Argue that nothing was kept for Hebble. Read out the Founding Rolls: [i]under compulsion.[/i]
    *set bold %+10
    *set duty %-10
    *goto question_rolls

*label question_argue
You argue it.
*if ((sway >= 50) and (lore >= 45))
  *set t2 3
  *set standing +10
  It comes out better than you had any right to expect. You talk about the Stay, and the Keeping, and a lock-keeper's hands, and a vow in the dark, and you build it stone by stone until the whole argument stands up by itself and holds. When you finish, there's a moment of quiet, and then the College stamps its feet on the floor, the way it does for the best speeches, like thunder under the hall.
*elseif ((sway >= 35) or (lore >= 40))
  *set t2 2
  *set standing +5
  It's good. You feel it land: a nod from Mr. Ebbing, a sharpening of attention from the Committee table. You stumble once, in the middle, and recover. When you sit down the College claps, warmly.
*else
  *set t2 1
  It's honest, and it's clear, and it isn't enough. You feel the hall's attention drift away somewhere around the third minute. When you sit down there's polite applause, and Hob, behind you, puts a big hand on your shoulder and squeezes.
*goto question_scores

*label question_second
The Warden looks at you over the long table. Something moves in her face.

"The Board will hear a second's question," she says. "It will answer truthfully."

*choice
  #Ask a proper question, about the history of the Crown, that shows your principal in a good light.
    *set duty %+5
    *if ((sway >= 40) or (lore >= 40))
      *set t2 +1
      You ask it, and it's good: the Board likes it, and the answer makes {teamname}'s speech look better in hindsight. You see two governors make notes.
    *else
      You ask it. It's fine. The Board answers it. Nobody seems to notice either way.
    *goto question_scores
  *selectable_if (know_crown) #"Warden. What is the Crown for?"
    *set bold %+10
    *set duty %-15
    *goto question_reveal
  *selectable_if (has_report) #"Warden. Has the Board been shown Dr. Marchbank's report on the condition of the Stay?" And take it out of your coat.
    *set bold %+15
    *set duty %-20
    *goto question_report
  *selectable_if (know_rolls) #"Warden. Was Hebble resettled with its consent?"
    *set bold %+10
    *set duty %-10
    *goto question_rolls
  #Sit down again. Not today.
    *set bold %-10
    You sit down. The Warden watches you do it, and something in her face closes again.
    *goto question_scores

*label question_reveal
*set revealed_public true
*achieve right_question
*if (team = "pc")
  You argue it, and then, three minutes in, you turn it round. [i]What is kept, keeps.[/i] But what is kept can also be kept [i]back.[/i] You turn from the lectern and face the long table.
"Warden Brathwaite," you say, and your voice carries all the way to the gallery. "What is the Crown for?"

For a moment nobody breathes. You see Honoria Varnish's hand go still on her pen.

The Warden stands up. She is sworn to the Plain Word. She has been waiting nineteen years for someone to ask her this in a room where anyone could hear.

"The Crowned," says Agnes Brathwaite, "is the Keystone's Heir. Should the Keystone fail during the Crowned's year, the Crowned will be taken to the Keystone Chamber, and will swear the Great Vow, and will hold the Stay in her place for the rest of their life."

The silence in the Great Hall is total. You can hear the hum.

"Will the Keystone fail this year?"

The Warden opens her mouth. And closes it. And stands there, in front of the College and the Council and the public gallery and the woman from the [i]Courier,[/i] sworn to the Plain Word and sworn to silence, and says nothing at all.

It's the loudest silence you have ever heard.

Then the hall erupts.
*if (not rilla_out)
  *set rilla_out true
  Rilla Hesketh is on her feet on the entrants' bench, white as paper. "Is that true?" she's saying, to the Board, to anyone. "Is that [i]true?[/i]" And when nobody answers, she walks to the Board's table, and in front of everyone, in a steady voice, says, "I withdraw," and walks out of the Great Hall with her head up.
  *set rel_rilla +10
Scholars are standing on benches. The gallery is shouting. The woman from the [i]Courier[/i] is writing so fast her pencil snaps and she carries on with the stub. At the Committee table, Honoria Varnish has risen, and is speaking in her low carrying voice, and slowly, because she never raises it, the hall begins to listen.

"The Keystone's service," says Honoria Varnish, "is the highest honor this city can bestow. It has always been freely chosen. It has always been known to the Board. The Council has managed the Keystone's condition with the greatest care and the greatest respect for forty-one years, and will continue to do so." She looks at you, briefly, the way you'd look at a stain. "We are grateful to the scholar for reminding us of the gravity of the Crown. The trials will proceed."
*set standing +15
*set rel_warden +10
*journal You asked the Warden, in front of the whole city, what the Crown is for. She told them. Then she could not say whether Hester would fail this year, and her silence said it for her.
*if (has_report)
  *choice
    #And then take out the report, and read its first page into the uproar.
      *goto question_report
    #That's enough. You've said what needed saying.
      *goto question_scores
*goto question_scores

*label question_report
*set honoria_exposed true
*set revealed_public true
*achieve right_question
You take out the grey folder, and open it, and read.

"[i]Report on the condition of the Stay. O. Marchbank, D. Eng. Confidential to the Stay Committee. It is the author's professional opinion that without substantial reinforcement or a controlled drawdown of the Heldwater, the Stay will fail within fourteen to twenty months, and that when it fails it will fail suddenly. The author strongly recommends that the Nethers flood warning system be restored immediately—[/i]"

Honoria Varnish is on her feet. "That document is the property of the Council—"

"[i]—and that the Committee proceed at once with drawdown.[/i]" You look up. "It's dated eighteen months ago. It says [i]received, not to be circulated.[/i] It's initialled by the Committee." You look at the Committee table. "The sirens in the Nethers were taken down six months after this was written."

Up in the gallery, the woman from the [i]Courier[/i] has stopped writing, because she's realised she doesn't need to. She's staring at the Committee table with her mouth open. So is everyone.

Dr. Marchbank, at the back of the hall among the masters, has put her face in her hands. When she lifts it, she's smiling like someone who's just been let out of prison.

*if (not rilla_out)
  *set rilla_out true
  Rilla Hesketh stands up on the entrants' bench, very white. "I withdraw," she says, to nobody in particular, and walks out.
Honoria Varnish does not raise her voice. She never raises her voice. But she has gone the color of wet paper, and when she speaks the cello in it has cracked.

"This hearing is adjourned," she says. And the Warden, very slowly, lifts her gavel and does not bring it down, and lets the Councillor's words hang in the air, unsupported, for everyone to see.
*set standing +20
*set rel_warden +10
*journal You read Dr. Marchbank's buried report aloud at the Question, in front of the Council and the Courier. Honoria Varnish's Committee is exposed.
*goto question_scores

*label question_rolls
*set revealed_public true
*set know_rolls true
You tell them what you read in the cellars of the Guildhall.

You tell them the heading: [i]The Holding of the Stay. By Warrant of the Aldermen of Scarrow, under compulsion.[/i] You tell them there were two hundred and six names. You tell them the ages. Thomas Pruitt, fifteen. Winifred Ashby, seventeen. You tell them that beside many of the names, in another ink, somebody later wrote a date and the word [i]died.[/i]

"The school books say Hebble was resettled with its consent," you say. "It wasn't. It was chained to this wall for thirty years."

Silence. Then, from the Board's table, a voice: thin, fussy, shaking. Mr. Ebbing has stood up.

"Ah," says Mr. Quentin Ebbing. "It's true." He's gripping the table. "I have read them. I have read them every Tuesday for twenty years. I have a copy in my desk." He swallows. "I should have said so a long time ago."

The Rows folk in the gallery (there are a few, you realise now: Mr. Dunnock among them, very upright) are on their feet. Across the hall, Tamsin Mottram is staring at you as if you've walked across the lake to her.
*set rel_tamsin +15
*set standing +10
*if (tamsin_trade = "hebble")
  *set rel_tamsin +5
Honoria Varnish says, smoothly, that the historical record is complex and that the Settlement has resolved these matters to the satisfaction of all parties. Nobody in the Great Hall believes her. You can feel it: the whole room shifting under her, like a floor.
*journal You read the Founding Rolls aloud at the Question: Hebble was held "under compulsion". Mr. Ebbing stood up and confirmed it.
*goto question_scores

*label question_scores
*page_break The Board's marks

*if (team = "tolly")
  *set t2 0
*temp place 4
*if (revealed_public and (team = "pc"))
  *set t2 0
*if (t2 >= 3)
  *set place 1
*elseif (t2 = 2)
  *set place 2
*elseif (t2 = 1)
  *set place 3
*temp p1 ""
*temp p2 ""
*temp p3 ""
*temp slot 1
*temp who ""
*temp whoname ""
*if (team != "sal")
  *set who "sal"
  *set whoname "Sal Quaile"
  *gosub award2
*if (not rilla_out)
  *set who "rilla"
  *set whoname "Rilla Hesketh"
  *gosub award2
*if (team != "tamsin")
  *set who "tamsin"
  *set whoname "Tamsin Mottram"
  *gosub award2
*set who "other"
*set whoname "Dunstan Oakes of Sluice Watch"
*gosub award2
*set who "other"
*set whoname "Maud Kettle of Gallery Watch"
*gosub award2
*if (place <= 3)
  *if (team = "pc")
    *set cs_pc + (4 - place)
  *elseif (team = "tamsin")
    *set cs_tamsin + (4 - place)
  *elseif (team = "sal")
    *set cs_sal + (4 - place)
  *if (place = 1)
    *set p1 teamname
  *elseif (place = 2)
    *set p2 teamname
  *else
    *set p3 teamname
*set t2_score t2

The Board confers for an hour behind a closed door, while the Great Hall buzzes like a kicked hive. Then the Warden comes out and reads the marks in her flat, exact voice, as though nothing whatever has happened.

"The Question. First: {p1}. Second: {p2}. Third: {p3}."
*if (revealed_public and (team = "pc"))
  Your name is not read. "The Board," says the Warden, without inflection, "finds that the scholar did not argue the proposition." She pauses. "The Board notes that the scholar asked a question." She sits down.
*if (revealed_public)
  *page_break The Council's answer

  The [i]Courier[/i] runs it the next morning, across the whole front page. [i]THE CROWN'S SECRET.[/i]
  *if (honoria_exposed)
    And under it, in type almost as big: [i]"STAY WILL FAIL": COUNCIL BURIED ENGINEER'S WARNING.[/i]
  Scarrow reads it at breakfast, and doesn't finish its breakfast.

  For three days the College is a storm. Scholars march on the Warden's study. Crest Watch refuses to patrol. Three Gallery Watch entrants withdraw from the Crown on the first morning, and four more on the second.
  *if (honoria_exposed)
    In the city there are crowds outside the Council House, and a brick through a Crowhill window. The Council removes Honoria Varnish as chair of the Stay Committee "pending review," and announces a commission of inquiry into "the long-term future of the Stay," and nobody believes a word of it.
  On the fourth day, the Council answers.

  It posts a notice on the doors of the Great Hall, signed by the whole Committee. The Crown, it says, is a "civic necessity." Given "the Keystone's condition, which the Council has always known and managed," the Crown will be contested to its conclusion. And, "to preserve public order and the proper succession," no entrant remaining on the roll after this date may withdraw.

  Tamsin reads it with her arms folded. Sal reads it and nods, as if confirming something. Tolly reads it and has to sit down on the steps.
  *if (entered)
    You read it, and your own name is still on the roll.
  *set standing +5
  *journal The Council has forbidden anyone still on the Crown roll to withdraw.

  That night the Warden sends for you.

  She's at her window, looking at the lake. She doesn't turn round.

  "Nineteen years," she says. "Nineteen years I have been waiting for someone to ask me that question where anyone could hear the answer." She is quiet for a while. "I would like you to understand that I am not angry. I would also like you to understand that they will close ranks now, and hold the Crown whether anyone likes it or not, because they cannot think of anything else to do." She turns. Her face is grey and tired and, for the first time since you've known her, not quite steady. "Thank you, Scholar. I don't expect it will do any good. But thank you."
  *set rel_warden +10
*page_break After

*if ((has_report) and (not honoria_exposed))
  Three days after the Question, Honoria Varnish finds you.

  She does it the way she does everything, without raising her voice: you come out of Water and Stone and she's standing in the corridor outside, alone, in her long grey coat, as if she's been waiting for a bus.

  "Walk with me," she says.

  You walk. Out along the crest, in the wind, with the lake on one side and the long drop to Scarrow on the other.

  "You have something of mine," says Honoria Varnish.
  *if (report_source = "mother")
    "Your mother's a clever woman. Not clever enough to lock her study." She smiles slightly. "I've known since Midwinter."
  *else
    "My study. Midwinter. I have a very good memory for faces, and a footman with a very good memory for the order of things on my desk." She smiles slightly.
  "I'm not going to threaten you. Threats are for people without anything to offer. I'm going to make you an offer."

  She stops, and turns to face you, with her back to the lake.

  "Give me the report," she says. "Tonight. Bring it to the Warden's parlor at nine. Ptolemy will be there. And in front of you, I will release him."

  You stare at her.

  "His vow," says Honoria Varnish. "[i]I release you.[/i] Three words. The only person who can say them without killing him is me. He'll be free. You want that, don't you? He writes to me every Sunday, and I can read between his lines. I know exactly how much you want that." Her voice doesn't change at all. "That report will not save your precious Stay. It will only frighten a great many people who can do nothing about it. My son's freedom is a thing I can give you tonight."

  *choice
    #"Deal." For Tolly.
      *set has_report false
      *set tolly_state "free"
      *set tolly_plan "deal"
      *set council_ally +1
      *set duty %+10
      *set rel_tolly +20
      *achieve released
      At nine o'clock you're in the Warden's parlor, and so is Tolly, pale and bewildered, and so is Honoria. You hand her the grey folder. She checks it, page by page, the way she checks everything. Then she turns to her son.

      "Ptolemy," she says. "I release you."

      You see it happen. You see it go out of him, like a rope cut. He staggers. He sits down very suddenly on the Warden's hearthrug, and puts both hands flat on the floor, and breathes, and breathes, as if he's never breathed before.

      "Mother?" he says.

      Honoria looks down at him. For a moment, just a moment, her face does something you would never have believed it could do. Then she picks up the folder and goes to the door.

      "I don't break bargains," she says, to you, without turning round. "It's bad for business." And she goes.

      Tolly sits on the rug for a long time. Then he looks up at you, and laughs, and it's the strangest, wildest, most frightened sound. "I don't know what to do," he says. "Nobody's told me what to do. I don't know what to [i]do.[/i]"
      *journal You traded the report to Honoria Varnish for Tolly's freedom. She released him from his vow in front of you. The evidence is gone.
    #"No." The city needs the truth more than one boy needs his freedom. Even this boy.
      *set duty %-10
      *set council_ally -1
      Honoria Varnish looks at you for a long moment.

      "I thought you'd say that," she says. "People like you always do." She turns up the collar of her coat. "Remember, when it comes, that I offered." And she walks away along the crest, into the wind, and doesn't look back.
      *journal You refused Honoria Varnish's bargain: the report for Tolly's freedom.
    #"I'll think about it." And never go.
      *set candor %-5
      She smiles. "Of course," she says. "Nine o'clock. The offer won't be made twice." You don't go. At ten past nine, Tolly finds you in the Sump and says, bewildered, that his mother came to the College tonight and sat in the Warden's parlor for ten minutes looking at the clock, and then left without a word.
*if (hester_message)
  *page_break A message

  You find Master Fell in his attic room one evening in late winter, feeding Magistrate small pieces of raw fish from a pair of tongs.

  "Hester asked me to give you a message," you say.

  The tongs stop. Magistrate, disappointed, retreats under a rock.

  Fell doesn't turn round. You tell him.

  "[i]Tell Ambrose there's nothing to forgive.[/i]"

  For a long time he doesn't move at all. Then he puts down the tongs, very carefully, parallel to the edge of the tank, and sits down on the windowsill, and looks out at the lake.

  "She said that," he says. It isn't quite a question.
  *if (vow_plain)
    "I'm sworn to the Plain Word, Master Fell. I can't tell you anything that isn't true."

    He turns and looks at you, and his face breaks open.
  *else
    "She said that. Word for word."

    He turns and looks at you, searching your face for the lie. He doesn't find one. His face breaks open.
  "Twenty-two years," says Ambrose Fell. "Twenty-two years I've been climbing those stairs as far as the door." He presses the back of his wrist to his mouth. "I'll go. I'll go on Sunday. God help me, I'll go."
  *set hester_message_given true
  *set rel_fell +15
  *journal You gave Master Fell Hester's message. He says he'll go up the Crown Stair on Sunday.
*page_break A winter night

*if ((rom_tamsin >= 20) or (rom_tolly >= 20) or (rom_sal >= 20))
  It's the coldest night of the year, and the College is asleep, and you aren't.
  *choice
    *if (rom_tamsin >= 20) #Go down to the laundry, where the boilers keep it warm all night. She'll be there.
      *goto love_tamsin
    *if (rom_tolly >= 20) #Go up to the crest in the snow. You know he'll be out there, not sleeping.
      *goto love_tolly
    *if (rom_sal >= 20) #Climb the iron ladder to the beehives. Sal goes there when they can't sleep.
      *goto love_sal
    #Stay in your cell and listen to the hum. Some things are better left alone this year.
      *set bold %-5
      You lie in the dark and listen to the hum, and to Hester, very faint, humming under it. It's enough. It'll have to be.
      *finish
*else
  It's the coldest night of the year. You lie awake in the Footings listening to the hum, and to Hester, very faint, humming under it, and you think about Midsummer, and you don't sleep until nearly dawn.
  *finish

*label love_tamsin
The laundry is warm and wet and smells of soap and hot iron, and it's lit only by the red glow from the boiler doors. Tamsin is sitting on a stack of clean sheets with her back to the wall and her boots off, not sleeping.

She doesn't look surprised to see you. She moves over.

For a long time neither of you says anything. The boilers tick. The hum goes on.

"I know what you want," says Tamsin, eventually, to the boilers. "I'm not stupid. I've known since the stair." She's gripping her own knees. "And I can't. You know I can't. If you give me—if you just [i]give[/i] me something like that, I can't take it. My hands won't. I'll stand there like a post and you'll think I don't—" She stops. Her jaw works. "I've never been given anything I could keep."

*choice
  #"Then don't take it. Let's trade. Everything I've got, for everything you've got. Even."
    *set romance "tamsin"
    *set rel_tamsin +15
    *set rom_tamsin +20
    She turns and stares at you.

    "That's not a fair trade," she says. "I've got nothing."

    "Then I'm getting a bargain."

    She laughs, a sudden cracked sound, and then she's crying, which you've never seen, and she's furious about it, and she grabs your collar in both fists and pulls, and her hands close on you with no trouble at all. You taste soap and salt. It's a trade. It's an even trade. It's the best bargain either of you has ever struck.
    *achieve earned
  #"You don't have to take anything. I'm not giving. I'm just here."
    *set romance "tamsin"
    *set rel_tamsin +15
    *set rom_tamsin +15
    She looks at you for a long time in the red light. Then she lets go of her knees, slowly, and leans, very slightly, until her shoulder is against yours.

    "Lawyer," she says. But she stays there. And after a while, very carefully, as though she's testing ice, she turns her face into your neck, and you both sit there on the clean sheets until the boilers go quiet at dawn.
    *achieve earned
  #Let it go. She's right; it would hurt her. Just sit with her, as a friend.
    *set rel_tamsin +10
    *set tender %+5
    You sit with her until dawn, shoulder to shoulder, not touching. When the first shift comes in, she stands and pulls her boots on and says, not looking at you, "Thanks." And it's the first time you've ever heard her say it without paying for it first.
*finish

*label love_tolly
He's out on the crest in the snow, just as you knew he would be, sitting on the parapet with his back to the drop and his feet toward the lake, in a coat that cost more than the lift, with snow in his hair.

*if (tolly_state = "free")
  "I've been sitting out here every night since she let me go," he says, when you sit down beside him. "Trying to work out what I want. Like I said. Like trying to imagine a new color."
*else
  "I can't sleep," he says, when you sit down beside him. "Sunday tomorrow. I have to write to her." He laughs. "I've been sitting out here trying to work out what I'll say. I know exactly what I'll say. I just keep hoping I'll surprise myself."

He turns and looks at you. The lamp on the crest behind him makes a halo of the snow in his hair.

"I worked it out, actually," he says. "What I want. You asked me, at the Gallery. You said, [i]imagine it now.[/i]" His voice is very steady, for once. No jokes. "It's you. I want you. It's the first thing I've ever wanted that nobody told me to."

*choice
  #Kiss him.
    *set romance "tolly"
    *set rel_tolly +15
    *set rom_tolly +20
    He makes a small startled sound against your mouth, and then he's kissing you back, clumsily, eagerly, as if he's never been allowed to do anything clumsily in his life, and the snow is coming down on both of you, and down below the whole of Scarrow is asleep under the wall.

    When you pull apart he's laughing, breathless. "Nobody told me to do that," he says, wondering. "Nobody told me to do that at all."
    *achieve disobedient
  #"Say it again. Slower."
    *set romance "tolly"
    *set rel_tolly +15
    *set rom_tolly +15
    He says it again, slower. And then, because he's Tolly, he keeps going: a whole speech, baroque and ridiculous and completely sincere, about your hands and your temper and the way you look at the lake, until you have to stop him the only way that works.
    *achieve disobedient
  #"Tolly. You deserve someone who wants that too. I'm not sure I'm that person."
    *set rel_tolly +5
    *set tender %+5
    He's quiet for a moment. Then he nods, and smiles, and it's a real smile, only a little bent at one corner. "That's all right," he says. "Do you know, that's all right. I wanted something, and I said so, and nobody told me to." He looks out at the lake. "That's new. I'll take new."
*finish

*label love_sal
The bees are clustered in their hives for the winter, a warm low murmur in the dark, and Sal is sitting in the frosted heather with a blanket round their shoulders and the whole frozen lake in front of them, full of stars.

They make room for you in the blanket without being asked.

"I want to tell you something true," says Sal, after a while. "I've been trying to work out how for weeks. Being sworn to the Plain Word doesn't make it any easier, it turns out. It only means I can't say it wrong."

They look at you, grey eyes very steady.

"I love you," says Sal Quaile. "I think I have since you asked me the right questions on the first night. I'm sworn to the Plain Word, so that's either very romantic or very alarming. I don't know which. I've never said it before."

*choice
  #"I love you too." And mean it, completely.
    *set romance "sal"
    *set rel_sal +15
    *set rom_sal +20
    *if (vow_plain)
      You say it, and the Plain Word lets you, because it's true. Sal hears that. You see them hear it: the weight of it, the ring of true metal. Their face opens like a window.
    *else
      Sal looks at you for a long time, the way they look at everything, taking you apart to see if it's true. Whatever they find, their face opens like a window.
    They kiss you very seriously, as if it's a thing they've read about and want to get exactly right. Then they laugh, surprised at themselves, and kiss you again, not seriously at all.
    *achieve honey
  #Don't answer with words. Put your forehead against theirs.
    *set romance "sal"
    *set rel_sal +15
    *set rom_sal +15
    Sal goes still. Then they breathe out, a long slow breath that you feel on your mouth. "That's an answer," they say softly. "I'll take that as an answer." And they don't move away, and neither do you, and the bees murmur in the dark like people asleep in the next room.
    *achieve honey
  #"Sal, you're going to walk into that chamber. I can't love someone I'm going to lose to a wall."
    *set rel_sal +5
    *set candor %+10
    Sal is quiet for a long time.

    "That's true," they say finally. "That's a true thing." They look out at the frozen lake. "I'd still rather you'd said the other thing. But I'd rather you said the true thing than the kind one." They lean against you, lightly. "Stay a bit anyway. It's cold."
*finish

*comment ------------------------------------------------------------------
*label award2
*if (slot = place)
  *set slot +1
*if (slot <= 3)
  *if (who = "rilla")
    *set cs_rilla + (4 - slot)
  *elseif (who = "tamsin")
    *set cs_tamsin + (4 - slot)
  *elseif (who = "sal")
    *set cs_sal + (4 - slot)
  *if (slot = 1)
    *set p1 whoname
  *elseif (slot = 2)
    *set p2 whoname
  *else
    *set p3 whoname
*set slot +1
*if (slot = place)
  *set slot +1
*return
`);
