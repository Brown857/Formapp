  import React, { useState } from "react";
  import './form.css';

  import type1 from "../../Assets/type1.png";
  import type2 from "../../Assets/type2.png";
  import type3 from "../../Assets/type3.png";
  import type4 from "../../Assets/type4.png";
  import type5 from "../../Assets/type5.png";
  import type6 from "../../Assets/type6.png";
  import type7 from "../../Assets/type7.png";
  
  const Form = () => {
        const imageSources = [type1, type2, type3, type4, type5, type6, type7];
      

    const categories = [
      {
        title: "I. Aggressive Behaviors",
        key: "aggressiveBehaviors",
        behaviors: [
          "Hits or punches others",
          "Pushes others",
          "Pinches others",
          "Pulls hair/ear/body parts of others",
          "Slaps others",
          "Kicks others",
          "Spits on others",
          "Bites others",
          "Attacks or pokes others with weapons",
          "Throws objects at others",
          "Cruel on animals for no reason",
        ],
      },
      {
        title: "II. Destructive Behaviors",
        key: "destructiveBehaviors",
        behaviors: [
          "Bangs objects",
          "Slams doors",
          "Tears up clothes, books, papers or magazines",
          "Breaks objects/glass/toys",
          "Damages furniture",
          "Fire-setting",
        ],
      },
      {
        title: "III. Repetitive Behavior: Self Injurious",
        key: "selfInjuriousBehaviors",
        behaviors: [
          "Bangs head",
          "Bites self",
          "Cuts or mutilates self",
          "Pulls own hair",
          "Hits self",
          "Scratches self",
          "Peels skin/wounds",
          "Puts objects into eye/nose/ear",
          "Threatens to kill oneself",
        ],
      },
      {
        title: "IV. Repetitive Behaviors: Non-injurious",
        key: "nonInjuriousBehaviors",
        behaviors: [
          "Bites nails",
          "Sucks thumb",
          "Nods head",
          "Shakes parts of body",
          "Rocks body",
          "Swings round and round",
          "Grinds teeth",
          "Makes peculiar sounds",
          "Bites end of pen/pencil",
          "Overuses cell phones",
        ],
      },
      {
        title: "V. Repetitive Behaviors: Odd",
        key: "oddBehaviors",
        behaviors: [
          "Laughs to self inappropriately",
          "Talks to self",
          "Hoards unwanted objects",
          "Plays with unwanted objects",
          "Kisses, hugs, and licks people unnecessarily",
          "Smells objects",
          "Picks nose",
        ],
      },
      {
        title: "VI. Antisocial Behaviors",
        key: "antisocialBehaviors",
        behaviors: [
          "Lies or twists the truth to his own advantage or blames others",
          "Cheats in games or no sense of fair play",
          "Steals",
          "Pawns things to get money",
          "Extorts money/things from others",
          "Runs away from school",
          "Makes obscene gestures",
          "Exposes body parts inappropriately",
          "Touches own private parts in public",
          "Makes sexual advances towards members of opposite sex",
          "Touches others' private parts in public",
          "Gambles",
          "Uses alcohol, tobacco, or drugs",
        ],
      },
      {
        title: "VII. Misbehaviors with Others",
        key: "misbehaviorsWithOthers",
        behaviors: [
          "Pulls objects from others",
          "Takes others' possessions without their permission openly",
          "Makes loud noise when others are working or reading",
          "Interrupts in between when others are talking",
          "Uses abusive/vulgar language",
          "Forces others to do according to his/her way (bossy)",
          "Intimidates others",
          "Argues without purpose",
          "Passes unwanted comments on others",
          "Stares at others",
          "Makes face to tease others",
          "Laughs or mocks at others",
          "Trips others when they are walking across",
          "Gossips/spreads rumors about others",
          "Writes nasty things about others",
        ],
      },
      {
        title: "VIII. Rebellious Behaviors",
        key: "rebelliousBehaviors",
        behaviors: [
          "Refuses to obey commands",
          "Does opposite of what is requested",
          "Takes very long time intentionally to complete given task",
          "Wanders outside classroom",
        ],
      },
      {
        title: "IX. Temper Tantrums",
        key: "temperTantrums",
        behaviors: [
          "Cries excessively",
          "Screams",
          "Stamps foot",
          "Rolls on floor",
        ],
      },
      {
        title: "X. Hyperactivity",
        key: "hyperactivity",
        behaviors: [
          "Does not sit at one place for required time",
          "Restlessness",
          "Runs or climbs unnecessarily",
          "Interrupts work with unnecessary movement",
        ],
      },
      {
        title: "XI. Inappropriate Social Behaviors",
        key: "inappropriateSocialBehaviors",
        behaviors: [
          "Shyness",
          "Withdrawn behavior",
          "Lack of initiative",
          "Lack of empathy",
          "Lack of social skills",
        ],
      },
    ];
    const [formData, setFormData] = useState({
      name: "",
      sex: "",
      dateOfBirth: "",
      age: "",
      placeOfBirth: "",
      birthWeight: "",
      feed: "",
      latch: "",
      sixMonth: "",
      formula: "",
      duration: "",
      weaningAge: "",
      weaningType: "",
      colicIssues: "",
      pottyTrainingAge: "",
      height: "",
      weight: "",
      headCircumference: "",
      muac: "",
      sft: "",
      bmiPercentile: "",
      bmrPercentile: "",
      hemoglobin: "",
      clinical: "",
      appearanceFatLoss: false,
      appearanceSunkenCheeks: false,
      hairDryBrittle: false,
      hairCorkscrewHair: false,
      nailsSpooning: false,
      nailsTransverseLines: false,
      skinDryScaly: false,
      skinPallor: false,
      foodFrequency: {
          cereals: ['', '', '', ''],
          rice: ['', '', '', ''],
          ragi: ['', '', '', ''],
          wheat: ['', '', '', ''],
          jowar: ['', '', '', ''],
          pulses: ['', '', '', ''],
          milkProducts: ['', '', '', ''],
          vegetables: ['', '', '', ''],
          fruits: ['', '', '', ''],
          meat: ['', '', '', ''],
          processedFood: ['', '', '', ''],
        },
        constipation: String,
        brainFog: String,
        nausea: String,
        eatingPattern: String,
        heartburn: String,
        breathingIrregularities: String,
        ibs: String,
        ruminating: String,
        regurgitation: String,
        stoolingPain: String,
        smellyStool: String,
        fallSick: String,
        antibioticUsage: String,
        foodAllergy: String,
        selfMutilation: String,
        soundSleep: String,
    
      //meternal health
      //demographic data
        namemother: '',
        agemother: '',
        socio: '',
        qualifications: '',
        occupation: '',
        
        //Micellaneous
        primiparousMother: "",
    antenatalProblem: "",
    feverWithRash: "",
    anemia: "",
    pih: "",
    antepartumHemorrhage: "",
    modeOfDelivery: "",
    highRiskGroup: "",
    prematurity: "",
    lowBirthWeight: "",
    hospitalizationFirstFourDays: "",
    cnsInfection: "",
    cpOrDevelopmentalDelay: "",
    dysmorphicSyndrome: "",
    seizureDisorder: "",


        //Mother
        
        motherheight: "",
        motherweight: "",
        motherheadCircumference: "",
        mothermuac: "",
        mothersft: "",
        motherbmiPercentile: "",
        motherbmr: "",
        motherhemoglobin: "",
        motherclinical: "",
        mothersubcutaneousFatLoss: false,
        mothersunkenCheeks: false,
        motherdryBrittleHair: false,
        mothercorkscrewHair: false,
        motherspooningNails: false,
        mothertransverseLines: false,
        motherdryScalySkin: false,
        motherpallor: false,

        motherFoodFrequency: {
          cereals: ['', '', '', ''],
          rice: ['', '', '', ''],
          ragi: ['', '', '', ''],
          wheat: ['', '', '', ''],
          jowar: ['', '', '', ''],
          pulses: ['', '', '', ''],
          milkProducts: ['', '', '', ''],
          vegetables: ['', '', '', ''],
          fruits: ['', '', '', ''],
          meat: ['', '', '', ''],
          processedFood: ['', '', '', ''],
        },
        behaviors: {
      aggressiveBehaviors: {},
      destructiveBehaviors: {},
      selfInjuriousBehaviors: {},
      nonInjuriousBehaviors: {},
      oddBehaviors: {},
      antisocialBehaviors: {},
      misbehaviorsWithOthers: {},
      rebelliousBehaviors: {},
      temperTantrums: {},
      hyperactivity: {},
      inappropriateSocialBehaviors: {}
    },

    domainIntensity: Array(11).fill(Array(3).fill("")),

    milestoneData: [
      {
        age: "~ 1 month",
        fields: [
          { category: "Turns head in supine, Chin up in prone", value: "" },
          { category: "Hands fisted near face", value: "" },
          { category: "Sucks well", value: "" },
          { category: "Gazes at black-white objects, Follows face", value: "" },
          { category: "Discriminates mother voice, Cries out of distress", value: "" },
          { category: "Startles to loud noise", value: "" },
          { category: "Makes sounds other than crying", value: "" },
        ],
      },
      {
        age: "~ 2 months",
        fields: [
          { category: "Chest up in prone, Tries to steady head briefly when held", value: "" },
          { category: "Hands unfisted 50%, Retains rattle if placed in hand, Holds hands together", value: "" },
          { category: "Opens mouth at sight of breast or bottle", value: "" },
          { category: "Follows large highly contrasting objects, Recognizes mother", value: "" },
          { category: "Reciprocal smiling - responds to adult voice & smile", value: "" },
          { category: "Alerts to voice/sound", value: "" },
          { category: "Coos (e.g., 'oooh' and 'aah'), Social smile (6 wks), Gurgles when vocalizing", value: "" },
        ],
      },

      {
        age: "~3months",
        fields: [
          { category: "Props on forearms in prone, Rolls to side", value: "" },
          { category: "Hands unfisted 50%, Inspects fingers, Bats at objects", value: "" },
          { category: "Brings hands to mouth", value: "" },
          { category: "Reaches for parent's face, Follows objects moved in circle (when in supine), Regards toys", value: "" },
          { category: "Expression of disgust (sour taste, loud sound), Visually follows person moving across the room", value: "" },
          { category: "Regards speaker", value: "" },
          { category: "Chuckles, Vocalizes when talked to", value: "" },
        ],
      },

      {
        age: "~4 months",
        fields: [
          { category: "Sits with trunk support, No head lag when pulled to sit, Props on wrists, Rolls front to back", value: "" },
          { category: "Clutches at clothes, Reaches persistently, Plays with rattle, Holds hands predominantly open", value: "" },
          { category: "Briefly holds onto breast or bottle", value: "" },
          { category: "Mouths objects, Stares longer at novel faces than familiar ones, Shakes rattle, Reaches for ring/rattle", value: "" },
          { category: "Smiles spontaneously at pleasurable sight/sound, Stops crying at parent voice, To and fro alternating vocalizations", value: "" },
          { category: "Orients head in direction of voice, Stops crying to soothing voice", value: "" },
          { category: "Laughs out loud, Vocalizes when alone", value: "" },
        ],
      },

      {
        age: "~5 months",
        fields: [
          { category: "Sits with pelvic support Rolls back to front Parachute sits with arms supporting trunk(anterior protection)", value: "" },
          { category: "Grasps cube using whole hand(palmer grasp) Transfer objects:hand-mouth-hand Holds hands together Reaches/grasps dangling ring", value: "" },
          { category: "Gums/mouth pureed food", value: "" },
          { category: "Turns head to look for dropped spoon regards pellet or small cracker", value: "" },
          { category: "Recognizes caregiver visually forms attachment-relationship to caregiver", value: "" },
          { category: "Begins to respond to name", value: "" },
          { category: "Says Ah-goo(or other vowel+consanant combinations)Razz,squeal Expresses anger with sounds other than crying.", value: "" },
        ],
      },
      {
        age: "~6 months",
        fields: [
          { category: "Sits momentarily propped on hands, Pivots in prone (on belly), Prone-bears weight on one hand", value: "" },
          { category: "Transfers hand-hand, Rakes pellet, Takes second cube - holds onto one, Reaches with one hand", value: "" },
          { category: "Feeds self crackers, Places hands on bottle", value: "" },
          { category: "Touches reflection and vocalizes, Removes cloth on face, Bangs & shakes toys", value: "" },
          { category: "Stranger anxiety: recognizes familiar vs. unfamiliar people", value: "" },
          { category: "Stops momentarily to “no”, Gestures for “up”", value: "" },
          { category: "Reduplicate babble with consonants, Listens then vocalizes when adult stops, Smiles/Vocalizes to mirror", value: "" },
        ],
      },
      {
        age: "~7 months",
        fields: [
          { category: "Bounces when held, Sits without support - steady, Puts arms out to sides for balance (Lateral protection)", value: "" },
          { category: "Grasps using side of hand (radial-palmar grasp)", value: "" },
          { category: "Refuses excess food", value: "" },
          { category: "Explores different aspects of a toy, Observes cube in each hand, Finds partially hidden object", value: "" },
          { category: "Looks from object to parent and back when wanting help (e.g., with a wind-up toy)", value: "" },
          { category: "Looks toward familiar object when named, Attends to music", value: "" },
          { category: "Increasing variety of syllables, Repeats same syllables (e.g., “mamamama”)", value: "" },
        ],
      },
      {
        age: "~8 months",
        fields: [
          { category: "Gets into sitting, Commando crawls, Pulls to sitting/kneeling", value: "" },
          { category: "Bangs spoon after a demo, Grasps with all four fingers and side of thumb (Scissor grasp), Takes cube out of cup, Pulls large peg out", value: "" },
          { category: "Holds own bottle, Finger feeds Cheerios or string beans", value: "" },
          { category: "Seeks object after it falls silently to the floor", value: "" },
          { category: "Lets parents know when happy vs. upset, Engages in gaze monitoring: adult looks away and child follows adult glance with own eyes", value: "" },
          { category: "Responds to “come here”, Looks for family members when asked, “Where’s Mama? etc.”", value: "" },
          { category: "Says “Mama” (non-specific), Non-reduplicate babble (e.g., “wapa”), Imitates sounds", value: "" },
        ],
      },
      {
        age: "~9 months",
        fields: [
          { category: "“Stands” on feet and hands, Begins creeping, Pulls to stand, Crawls with all four limbs straightened (Bear walks)", value: "" },
          { category: "Grasps with two finger and thumb below (Radial-digital), Bangs 2 cubes together", value: "" },
          { category: "Bites, chews cookie", value: "" },
          { category: "Inspects parts of a bell, Rings bell after demo, Pulls string to obtain an attached toy out of reach", value: "" },
          { category: "Uses sounds to get attention, Separation anxiety, Follows a point “Oh look at...”, Recognizes familiar people visually", value: "" },
          { category: "Enjoys gesture games, Orients to name well, Turns head upward and diagonally to view source of sound", value: "" },
          { category: "“Mama” (non-specific), Increased non-reduplicate babble (e.g., “wapa” + “mada”), Imitates sounds, Gestures (e.g., reaching, pointing)", value: "" },
        ],
      },
      {
        age: "~10 months",
        fields: [
          { category: "Creeps well, Cruises around furniture: two hands, Stands--one hand held, Walks--two hands held", value: "" },
          { category: "Clumsy release of cube, Grasps pellet with side of index finger and thumb (inferior pincer grasp), Isolates index finger and pokes", value: "" },
          { category: "Drinks (not sucks) from cup held for him/her", value: "" },
          { category: "Uncovers toy under cloth, Pokes at pellet in bottle, Tries to put cube in cup, but may not be able to let go", value: "" },
          { category: "Experiences fear, Looks preferentially when name is called", value: "" },
          { category: "Enjoys Peek-A-Boo, Waves “bye-bye” back", value: "" },
          { category: "Says “Dada” (specific), Waves bye-bye, Adds new consonant sounds to babbling", value: "" },
        ],
      },
      {
        age: "~11 months",
        fields: [
          { category: "Walks--one hand held, Pivots in sitting, Cruises furniture holding on with one hand, Stands for a few seconds", value: "" },
          { category: "Throws objects, Stirs with spoon", value: "" },
          { category: "Cooperates in dressing", value: "" },
          { category: "Finds toy under cup, Looks at pictures in book", value: "" },
          { category: "Gives objects to adult for action after demonstration (lets adult know he needs help)", value: "" },
          { category: "Stops activity when told “no”, Bounces to music", value: "" },
          { category: "Says first word, Vocalizes to songs", value: "" },
        ],
      },

      
      {
        age: "~12 months",
        fields: [
          { category: "Stands well with arms high and legs splayed (Posterior protection), Independent steps", value: "" },
          { category: "Scribbles after demo, Fine pincer grasp of pellet, Holds crayon, Attempts tower of two cubes", value: "" },
          { category: "Cooperates in dressing, Finger feeds part of meal, Takes hat off", value: "" },
          { category: "Rattles spoon in cup, Lifts box lid to find toy", value: "" },
          { category: "Shows objects to parent to share interest, Points in order to get desired object (Proto-imperative pointing)", value: "" },
          { category: "Follows 1-step command with gesture, Recognizes names of two objects--looks at each correctly when named", value: "" },
          { category: "Points in order to get desired object (Proto-imperative pointing), Uses several gestures with vocalizing (waving, reaching, etc.)", value: "" },
        ],
      },
      {
        age: "~13 months",
        fields: [
          { category: "Walks with arms high and out (high guard)", value: "" },
          { category: "Attempts to release pellet in bottle", value: "" },
          { category: "Drinks from cup with some spilling", value: "" },
          { category: "Dangles ring by string, Reaches around clear barrier to obtain object, Unwraps toy in cloth", value: "" },
          { category: "Shows desire to please caregiver, Solitary play, Functional play", value: "" },
          { category: "Looks appropriately when asked “Where’s the ball?”, etc.", value: "" },
          { category: "Uses three words, Immature jargoning (Inflections without real words)", value: "" },
        ],
      },
      {
        age: "~14 months",
        fields: [
          { category: "Stands without pulling up, Falls by collapse, Walks well", value: "" },
          { category: "Attempts to release pellet in bottle, Imitates back-and-forth scribble, Adds third cube to a two cube tower, Puts round peg in & out of hole", value: "" },
          { category: "Removes socks/shoes, Chews well, Puts spoon in mouth typically turning it over", value: "" },
          { category: "Dumps pellet out of bottle after demo", value: "" },
          { category: "Points at object to express interest (e.g., to get parent to name it) (Proto-declarative pointing), Purposeful exploration of toys through trial and error", value: "" },
          { category: "Follows one-step command without gesture (e.g., “give it”)", value: "" },
          { category: "Names one object, Points at object to express interest (e.g., to get parent to name it) (Proto-declarative pointing)", value: "" },
        ],
      },

      
      {
        age: "~ 15 months",
        fields: [
          { category: "Stoops to pick up toy, Creeps up stairs, Runs stiff-legged, Walks carrying toy, Climbs on furniture", value: "" },
          { category: "Builds 3-4 cube tower, Places 10 cubes in cup, Releases pellet into bottle", value: "" },
          { category: "Uses spoon--some spill, Attempts to brush own hair, Fusses to be changed", value: "" },
          { category: "Turns pages in book, Places circle in single shape puzzle", value: "" },
          { category: "Shows empathy (someone else cries, child looks sad), Hugs adult in reciprocation, Recognizes without a demo that a toy requires activation and hands it to an adult if can't operate", value: "" },
          { category: "Points to 1 body part, Points to 1 object of 3, Gets object from another room upon demand", value: "" },
          { category: "Uses 3-5 words, Mature jargoning with real words", value: "" },
        ],
      },
      {
        age: "~ 16 months",
        fields: [
          { category: "Stands on one foot with slight support, Walks backwards, Walks up stairs--one hand held", value: "" },
          { category: "Puts several round pegs in board (with urging), Scribbles spontaneously", value: "" },
          { category: "Picks up and drinks from cup, Fetches and carries objects (same room)", value: "" },
          { category: "Dumps pellet out without demo, Places circle in formboard, Finds toy observed to be hidden under layers of covers", value: "" },
          { category: "Kisses by touching lips to skin, Periodically visually relocates caregiver, Self-conscious: embarrassed when aware of people observing", value: "" },
          { category: "Understands simple commands “Bring to mommy”, Points to one picture when named", value: "" },
          { category: "Uses 5-10 words", value: "" },
        ],
      },
      {
        age: "~ 18 months",
        fields: [
          { category: "Creeps down stairs, Runs well, Seats self in small chair, Throws ball--standing", value: "" },
          { category: "Makes 4 cube tower, Crudely imitates vertical stroke", value: "" },
          { category: "Removes garment, Gets onto adult chair unaided, Moves about house without adult", value: "" },
          { category: "Matches pairs of objects, Re-places circle in formboard after it has been turned around (usually with trial and error)", value: "" },
          { category: "Passes M-CHAT, Engages in pretend play with other people (e.g., tea party, birthday party), Begins to show shame (when does wrong) & possessiveness", value: "" },
          { category: "Points to 2 of 3 objects when named, Points to 3 body parts, Points to self, Understands “mine”, Points to familiar people when named", value: "" },
          { category: "Uses 10-25 words, Uses giant words (all gone, stop that), Imitates environmental sounds (e.g., animals), Names one picture on demand", value: "" },
        ],
      },
      {
        age: "~ 20 months",
        fields: [
          { category: "Squats in play, Carries large object, Goes up stairs held by one hand", value: "" },
          { category: "Completes round peg board without urging, Makes 5-6 cube tower, Completes square peg board", value: "" },
          { category: "Places only edibles in mouth, Feeds self with spoon--entire meal", value: "" },
          { category: "Returns to search for object hidden under cloth after not finding it in adult’s closed fists, Places square in form board", value: "" },
          { category: "Begins to have thoughts about feelings, Engages in tea party with stuffed animals or dolls, Kisses with pucker", value: "" },
          { category: "Points to three pictures, Begins to understand her / him / me", value: "" },
          { category: "Holophrases (“Mommy?” and points at keys, meaning “These are Mommy’s keys”), Two-word combinations, Answers requests with “no”", value: "" },
        ],
      },
      {
        age: "~ 22 months",
        fields: [
          { category: "Goes up stairs holding rail, putting both feet on each step, Kicks ball with demo, Walks with one foot on walking board", value: "" },
          { category: "Closes box with lid, Imitates vertical line, Imitates circular scribble", value: "" },
          { category: "Uses spoon well, Drinks from cup well, Unzips zippers, Puts shoes on partway", value: "" },
          { category: "Completes formboard with three shapes", value: "" },
          { category: "Watches other children intensely, Begins to show defiant behavior", value: "" },
          { category: "Points to 4-5 pictures when named, Points to 5-6 body parts, Points to 4 pieces of clothing when named", value: "" },
          { category: "Uses 25-50 words, Asks for more, Adds 1-2 words per week", value: "" },
        ],
      },
      {
        age: "~ 24 months",
        fields: [
          { category: "Walks down stairs holding rail, both feet on each step, Kicks ball without demo, Throws overhand", value: "" },
          { category: "Makes a single-line “train” of cubes, Imitates circle, Imitates horizontal line", value: "" },
          { category: "Opens door using knob, Sucks through straw, Takes off clothes without buttons, Pulls off pants", value: "" },
          { category: "Sorts objects, Matches objects to pictures, Shows use of familiar objects", value: "" },
          { category: "Parallel play, Begins to mask emotions for social etiquette", value: "" },
          { category: "Follows two-step command, Understands me / you, Points to 5-10 pictures, 2-word sentences (noun+verb), Telegraphic speech 50% intelligibility, Refers to self by name, Names 3 pictures", value: "" },
          { category: "Uses two-word sentences (noun+verb), Telegraphic speech, 50+ words in vocabulary, Refers to self by name, Adds new consonant sounds (e.g., “g”, “h”)", value: "" },
        ],
      },
      {
        age: "~ 2 years, 4 months",
        fields: [
          { category: "Jumps from bottom step, one foot leading, Walks on toes after demo, Walks backward 10 steps", value: "" },
          { category: "Strings large beads (awkwardly), Unscrews jar lid, Turns paper pages (often several at once)", value: "" },
          { category: "Holds self and/or verbalizes toilet needs, Pulls pants up with assistance", value: "" },
          { category: "Matches shapes, Matches colors", value: "" },
          { category: "Reduction in separation anxiety", value: "" },
          { category: "Understands “just one”, Repeats 2 digits, Begins to use pronouns (I, me, you), Names 10-15 pictures", value: "" },
          { category: "Uses 2-word sentences, Adds new consonants (g, d), Imitates other children", value: "" }
        ]
      },
      {
        age: "~ 2 years, 6 months",
        fields: [
          { category: "Goes up stairs with rail, alternating feet, Jumps in place, Stands with both feet on balance beam, Walks with one foot on balance beam", value: "" },
          { category: "Makes an 8-cube tower, Makes “a train” of cubes and includes a stack", value: "" },
          { category: "Washes hands, Puts things away, Brushes teeth with assistance", value: "" },
          { category: "Re-places circle in formboard after it has been turned around (little or no trial and error), Points to small details in pictures", value: "" },
          { category: "Imitates adult activities (e.g., sweeping, talking on phone, pretending to hunt animals)", value: "" },
          { category: "Follows 2 prepositions: “Put block in . . . on box”, Points to objects by use: “ride in”... “put on feet”... “write with”", value: "" },
          { category: "Echolalia and jargoning gone, Names objects by use, Refers to self with correct pronoun, Recites parts of well-known story/fills in words", value: "" }
        ]
      },
      {
        age: "~ 2 years, 9 months",
        fields: [
          { category: "Walks swinging arms opposite of legs (synchronous gait)", value: "" },
          { category: "Makes 9-10 cube tower, Puts 6 square pegs in pegboard, Imitates cross", value: "" },
          { category: "Toilet trained, Puts on coat unassisted", value: "" },
          { category: "Points to self in photos, Points to body parts according to function (“what do you hear with...?”)", value: "" },
          { category: "Begins to take turns, Tries to help with household tasks", value: "" },
          { category: "Understands three prepositions, Understands dirty, wet", value: "" },
          { category: "Gives first and last name, Counts to 3, Begins to use past tense, Enjoys being read to (short books)", value: "" }
        ]
      },
      {
        age: "~ 3 years, 0 months to ~ 3 years, 6 months",
        fields: [
          { category: "Balances on one foot for 3 seconds, Goes up stairs alternating feet, no rail, Pedals tricycle, Walks heel to toe, Catches ball—arms stiff", value: "" },
          { category: "Copies circle, Cuts with scissors: side to side (awkwardly), Imitates bridge of cubes, Strings small beads well", value: "" },
          { category: "Eats independently, Pours liquid, Puts on shoes without laces, Spreads with knife, Unbuttons", value: "" },
          { category: "Draws a 2–3 part person, Understands big/small, more/less, Knows own gender, Knows own age, Matches letters/numerals", value: "" },
          { category: "Starts to share with/without prompt, Fears imaginary things, Imaginative play, Uses words to describe what someone else is thinking (“Mom thought I was asleep”)", value: "" },
          { category: "Points to parts of pictures (nose of cow, door of car), Understands action words: “playing…washing…blowing”, Names body parts when functions described, Understands negatives, Groups objects (foods, toys), Understands long/short", value: "" },
          { category: "Uses 200+ words, 3 word sentences, Uses pronouns correctly, 75% intelligibility, Acquires new consonant sounds (e.g., “f”, “t”, “j”, “s”), Uses plurals, Names body parts by use, Asks to be read to", value: "" }
        ]
      },
      {
        age: "~ 4 years, 0 months to ~ 4 years, 6 months",
        fields: [
          { category: "Balances on one foot 4-8 sec, Hops on one foot 2-3 times, Standing broad jump 1-2 ft, Gallops, Throws ball overhead 10 ft, Catches bounced ball", value: "" },
          { category: "Copies square, Imitates making a complex gate with cubes, Ties single knot, Cuts 5 inch circle, Uses tongs to transfer, Writes part of first name, Works from left to right, top to bottom", value: "" },
          { category: "Goes to toilet alone, Wipes after BM, Washes face/hands, Brushes teeth alone, Buttons, Uses fork well", value: "" },
          { category: "Draws a 4–6 part person, Can give amounts (usually less than 5) correctly, Completes simple analogies (e.g., dad/boy: mother/???, Ice/cold: fire/???, Ceiling/up: floor/???), Points to 5–6 colors, Points to letters/numerals when named, Rote counts to 4, “Reads” several common signs/store names", value: "" },
          { category: "Deception—interested in “tricking” others and concerned about being tricked by others, Has a preferred friend, Labels happiness, sadness, fear, and anger in self, Group play", value: "" },
          { category: "Follows three-step commands, Points to things that are the same versus different, Names things when actions are described (e.g., it swims in water, you cut with it, it’s something you read, it tells time..)", value: "" },
          { category: "Repeats 4-6 syllable sentence, Uses 300-1000 words, Tells stories, May repeat words in sentences (e.g., “Mom, Mom, I...I want...”), 100% intelligibility with few articulation errors, Uses “feeling” words, Uses words that tell about time", value: "" }
        ]
      },
      {
        age: "~ 5 years, 0 months to ~ 5 years, 6 months",
        fields: [
          { category: "Walks down stairs, alternating feet, without using rail Balances on one foot for >8 sec, Hops on one foot 15 feet, Skips, Running broad jump 2-3 ft, Walks backward heel-toe, Jumps backward", value: "" },
          { category: "Copies triangle, Builds stairs from-model, Puts paper clip on paper, Can use clothspins to transfer small objects, Cuts with scissors, Writes first name", value: "" },
          { category: "Spreads with knife, Independent dressing, Bathes independently", value: "" },
          { category: "Draws a 8-10 part person, Gives amounts (<10), Identifies coins, Names letters/numerals out of order, Rote counts to 10, Names 10 colors, Uses letter names as sounds to invent spelling (e.g., NDN), By end of kindergarten: Knows sounds of consonants and short vowels, Reads 25 words", value: "" },
          { category: "Has a group of friends, Apologizes for mistakes, Responds verbally to good fortune of others", value: "" },
          { category: "Knows right and left on self, Points to different one in a series, Understands 'er' endings (e.g., batter, skater), Understands adjectives: bushy, long, thin, pointed, Enjoys rhyming words and alliterations, Produces words that rhyme, Points correctly to 'side', 'middle', 'corner'", value: "" },
          { category: "Repeats 6-8 syllable sentence, Defines simple words, Knows telephone number, Responds to why questions, Retells stories with clear beginning, middle, end, Word repetitions in sentences wane (single sound repetitions e.g., s-s-s-s, absent)", value: "" }
        ]
      },
      {
        age: "~ 6 years, 0 months to ~ 6 years, 6 months",
        fields: [
          { category: "Stands on one foot for 10 sec with eyes closed, Catches small bounced ball, Runs well with arms moving in opposition", value: "" },
          { category: "Copies diamond, Builds stairs from memory, Writes short sentences, Forms letters with down-going and counterclockwise strokes, Draws a person with >12 parts, Combines multiple shapes to make a figure", value: "" },
          { category: "Ties shoes, Combs hair, Looks both ways at street", value: "" },
          { category: "Reads 250 words by end of 1st grade, Counts to 20 by end of 1st grade, Simple addition/subtraction by end of 1st grade", value: "" },
          { category: "Has best friend of same sex, Plays board games, Distinguishes fantasy from reality", value: "" },
          { category: "Enjoys jokes, Engages in basic classification tasks, Begins to understand concepts like “yesterday”, “tomorrow”", value: "" },
          { category: "Fluent speech with articulation similar to adults, Uses complex sentences, Begins to read independently", value: "" }
        ]
      },
      {
        age: "~ 7years to 8 years ",
        fields: [
          { category: "Rides bicycle independently, Bats ball placed on cone,Does somersaults", value: "" },
          { category: "Writing rate increases,Stays on line when writing,Spaces between words,Size of letters becomes uniform,Letter reversals disappear", value: "" },
          { category: "Sticks with tasks (with TV off) for up to 20 minutes,Pays attention to teacher when in a group,Completes homework on own,Answers and delivers phone messages,Completes household chores (with reminders)", value: "" },
          { category: "Knows sounds of consonant digraphs (e.g., ch, sh),Knows sounds of vowel dipthongs (e.g., oo, ou),Reads words with -r-controlled vowels (e.g., bird, burn),Starts reading to learn not just learning to read,Remembers spelling words", value: "" },
          { category: "Avoids hurting others in play,Learns from mistakes,Helps younger children,Takes turns in conversations,Delays gratification and waits to take turn", value: "" },
          { category: "Understands opposites and word analogies,Answers who, why, when, where and how questions,Knows right from left on others,Understands days and months,Interested in the opinions of peers", value: "" },
          { category: "Masters r sound in speech,Tells time,Uses complex and compound sentences,Talks about a range of topics", value: "" }
        ]
      }
    ],

    // Sleep-related fields
    bedtime: [],
    sleepBehavior: [],
    weeknightss: [],
    morningWakeUp: [],
    weekdaysWakeUp: "",
    weekendsWakeUp: "",
    weeknights: "",
    bedtimeweekends: "",
    sleepHours: "",
    sleepMinutes: "",
    
    fecesDescriptions: [],
    });

    // Function to handle input changes
    const imageSelectFunction = (altId, description) => {
      setFormData((prevData) => {
        const updatedDescriptions = prevData.fecesDescriptions.filter(
          (item) => item.altId !== altId
        );
        updatedDescriptions.push({ altId, description });
  
        return {
          ...prevData,
          fecesDescriptions: updatedDescriptions,
        };
      });
    };

    const renderQuestions = (section, questions) => (
      <tbody>
        {questions.map((question, index) => (
          <tr key={index}>
            <td>
              {index + 1}. {question}
            </td>
            {[7, 5, 4, 1, 0].map((value) => (
              <td key={value}>
                <input
                  type="radio"
                  name={`${section}-question-${index}`}
                  value={value}
                  checked={
                    formData[section]?.find(
                      (item) => item.question === question
                    )?.score === value
                  }
                  onChange={(e) =>
                    handleSleepChange(section, question, parseInt(e.target.value))
                  }
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );

    const handleSleepChange = (section, question, value) => {
      setFormData((prevData) => {
        // Ensure the section is initialized as an array if undefined
        const updatedSection = Array.isArray(prevData[section]) ? [...prevData[section]] : [];
        
        const existingIndex = updatedSection.findIndex(
          (item) => item.question === question
        );
    
        if (value === null) {
          // Remove the entry if deselected
          if (existingIndex !== -1) updatedSection.splice(existingIndex, 1);
        } else {
          // Update or add entry
          if (existingIndex === -1) {
            updatedSection.push({ question, score: value });
          } else {
            updatedSection[existingIndex].score = value;
          }
        }
    
        return { ...prevData, [section]: updatedSection };
      });
    };
    
  
    const handleTextInputChange = (field, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };

    const handleMilestoneChange = (milestoneIndex, fieldIndex, event) => {
      const updatedMilestones = [...formData.milestoneData];
      updatedMilestones[milestoneIndex].fields[fieldIndex].value = event.target.value;
      setFormData({ ...formData, milestoneData: updatedMilestones });
    };
    

    const handleDomainChange = (rowIndex, colIndex, value) => {
      setFormData((prevState) => {
        const updatedDomainIntensity = prevState.domainIntensity.map((row, rIdx) =>
          rIdx === rowIndex
            ? row.map((cell, cIdx) => (cIdx === colIndex ? value : cell))
            : row
        );
        return { ...prevState, domainIntensity: updatedDomainIntensity };
      });
    };
  
    const renderDomainRow = (label, rowIndex) => {
      const intensities = formData.domainIntensity[rowIndex] || ["", "", ""];
  
      return (
        <tr key={rowIndex}>
          <td colSpan="2">{label}</td>
          {intensities.map((intensity, colIndex) => (
            <td colSpan="2" key={colIndex}>
              <input
                type="text"
                value={intensity || ""}
                onChange={(e) => handleDomainChange(rowIndex, colIndex, e.target.value)}
              />
            </td>
          ))}
        </tr>
      );
    };

  
    const handleBehaviorChange = (e, categoryKey, behavior) => {
      const { value } = e.target;
  
      setFormData((prev) => ({
        ...prev,
        behaviors: {
          ...prev.behaviors,
          [categoryKey]: {
            ...prev.behaviors[categoryKey],
            [behavior]: value,
          },
        },
      }));
    };
    

    const handleMotherFoodFrequencyChange = (category, index, value) => {
      setFormData((prevState) => {
        const updatedCategory = [...(prevState.motherFoodFrequency[category] || ['', '', '', ''])];
        updatedCategory[index] = value;
    
        return {
          ...prevState,
          motherFoodFrequency: {
            ...prevState.motherFoodFrequency,
            [category]: updatedCategory,
          },
        };
      });
    };
    

    const handleFoodFrequencyChange = (category, index, value) => {
      setFormData((prevState) => {
        const updatedCategory = [...(prevState.foodFrequency[category] || ['', '', '', ''])];
        updatedCategory[index] = value; // Update the corresponding value in the array

        return {
          ...prevState,
          foodFrequency: {
            ...prevState.foodFrequency,
            [category]: updatedCategory, // Maintain the array structure for the category
          },
        };
      });
    };
    const handleChange = (event) => {
      const { name, value, type, checked } = event.target;
    
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value, // Handle checkbox or text input
      }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch("http://localhost:5000/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log("Form submitted successfully:", result);
          alert("Form submitted successfully!");
        } else {
          console.error("Failed to submit form");
          alert("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred during submission.");
      }
    };
  
    
  return (
    <form onSubmit={handleSubmit}>
      <h2>Demographic Data</h2>
      <div className="form-container">
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Sex: </label>
        <select name="sex" value={formData.sex} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>Date of Birth: </label>
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
      </div>
      <div>
        <label>Age: </label>
        <input type="text" name="age" value={formData.age} onChange={handleChange} />
      </div>
      <div>
        <label>Place of Birth: </label>
        <input type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} />
      </div>
      <div>
        <label>Birth Weight: </label>
        <input type="text" name="birthWeight" value={formData.birthWeight} onChange={handleChange} />
      </div>
      </div>

      <div className="form-container">

      <h2>Subjective Global Assessment - First 1000 Days</h2>
      <div>
        <label>Was your baby fed during the golden hour - Yes / No, if No, why?</label>
        <input type="text" name="feed" value={formData.feed} onChange={handleChange} />
      </div>
      <div>
        <label>Was the baby able to latch?</label>
        <input type="text" name="latch" value={formData.latch} onChange={handleChange} />
      </div>
      <div>
        <label>Was your baby exclusively breastfed for 6 months?</label>
        <input type="text" name="sixMonth" value={formData.sixMonth} onChange={handleChange} />
      </div>
      <div>
        <label>Was your baby fed on formula?</label>
        <input type="text" name="formula" value={formData.formula} onChange={handleChange} />
      </div>
      <div>
        <label>How long was your baby breastfed?</label>
        <input type="text" name="duration" value={formData.duration} onChange={handleChange} />
      </div>
      <div>
        <label>At what age was the weaning started?</label>
        <input type="text" name="weaningAge" value={formData.weaningAge} onChange={handleChange} />
      </div>
      <div>
        <label>What was the type of weaning?</label>
        <input type="text" name="weaningType" value={formData.weaningType} onChange={handleChange} />
      </div>
      <div>
        <label>Were there any colic issues?</label>
        <input type="text" name="colicIssues" value={formData.colicIssues} onChange={handleChange} />
      </div>
      <div>
        <label>When was the potty training started?</label>
        <input type="text" name="pottyTrainingAge" value={formData.pottyTrainingAge} onChange={handleChange} />
      </div>
    

      <h2>Anthropometric</h2>
      <div>
        <label>Height: </label>
        <input type="text" name="height" value={formData.height} onChange={handleChange} />
      </div>
      <div>
        <label>Weight: </label>
        <input type="text" name="weight" value={formData.weight} onChange={handleChange} />
      </div>
      <div>
        <label>Head Circumference: </label>
        <input type="text" name="headCircumference" value={formData.headCircumference} onChange={handleChange} />
      </div>
      <div>
        <label>MUAC: </label>
        <input type="text" name="muac" value={formData.muac} onChange={handleChange} />
      </div>
      <div>
        <label>SFT: </label>
        <input type="text" name="sft" value={formData.sft} onChange={handleChange} />
      </div>
      <div>
        <label>BMI Percentile: </label>
        <input type="text" name="bmiPercentile" value={formData.bmiPercentile} onChange={handleChange} />
      </div>
      <div>
        <label>BMR: </label>
        <input type="text" name="bmrPercentile" value={formData.bmrPercentile} onChange={handleChange} />
      </div>

      <h2>BioChemical</h2>
      <div>
        <label>Hemoglobin: </label>
        <input type="text" name="hemoglobin" value={formData.hemoglobin} onChange={handleChange} />
      </div>
      <div>
        <label>Clinical: </label>
        <input type="text" name="clinical" value={formData.clinical} onChange={handleChange} />
      </div>

      </div>
      
      <div className="appearance-form">
    
      <h3>1. General Appearance</h3>
      <div>
        <label>
          <input type="checkbox" name="appearanceFatLoss" checked={formData.appearanceFatLoss} onChange={handleChange} />
          Loss of subcutaneous fat
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="appearanceSunkenCheeks" checked={formData.appearanceSunkenCheeks} onChange={handleChange} />
          Sunken or Hollow Cheeks
        </label>
      </div>

      <h3>2. Hair</h3>
      <div>
        <label>
          <input type="checkbox" name="hairDryBrittle" checked={formData.hairDryBrittle} onChange={handleChange} />
          Dry Brittle Hair
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="hairCorkscrewHair" checked={formData.hairCorkscrewHair} onChange={handleChange} />
          Corkscrew Hair
        </label>
      </div>

      <h3>3. Nails</h3>
      <div>
        <label>
          <input type="checkbox" name="nailsSpooning" checked={formData.nailsSpooning} onChange={handleChange} />
          Spooning
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="nailsTransverseLines" checked={formData.nailsTransverseLines} onChange={handleChange} />
          Transverse Lines
        </label>
      </div>

      <h3>4. Skin</h3>
      <div>
        <label>
          <input type="checkbox" name="skinDryScaly" checked={formData.skinDryScaly} onChange={handleChange} />
          Dry and Scaly
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="skinPallor" checked={formData.skinPallor} onChange={handleChange} />
          Pallor
        </label>
      </div>
</div>
<div className="food-frequency-container">
    
      <div>
        <h3>Food Frequency</h3>
        <table border="1" cellSpacing="0" cellPadding="10">
          <thead>
            <tr>
              <th>Category</th>
              <th>Daily</th>
              <th>Weekly</th>
              <th>Often</th>
              <th>Rarely</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(formData.foodFrequency).map((category, index) => (
              <tr key={index}>
                <td>{category.charAt(0).toUpperCase() + category.slice(1)}</td>
                {formData.foodFrequency[category].map((value, idx) => (
                  <td key={idx}>
                    <input
                      type="text"
                      value={value || ''}
                      onChange={(e) => handleFoodFrequencyChange(category, idx, e.target.value)}
                      placeholder="Enter input"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
</div>


<div className="form-container">
      <div>
  
  <h3>Gut Health</h3>
  <div>
    <label>1. Does your child experience constipation?</label>
    <input
      type="text"
      name="constipation"
      value={formData.constipation}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>2. How often is your child brain fogged?</label>
    <input
      type="text"
      name="brainFog"
      value={formData.brainFog}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>3. Does your child feel nauseous, if yes how often? Is there any food /s trigger it?</label>
    <input
      type="text"
      name="nausea"
      value={formData.nausea}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>4. Do you see any changes in eating pattern after a panic attack? Can it be described</label>
    <input
      type="text"
      name="eatingPattern"
      value={formData.eatingPattern}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>5. Does your child complain about heart burn and abdominal pain?</label>
    <input
      type="text"
      name="heartburn"
      value={formData.heartburn}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>6. Do you notice irregularities in breathing?</label>
    <input
      type="text"
      name="breathingIrregularities"
      value={formData.breathingIrregularities}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>7. Is the child diagnosed with IBS?</label>
    <input
      type="text"
      name="ibs"
      value={formData.ibs}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>8. Do you find your child ruminating often?</label>
    <input
      type="text"
      name="ruminating"
      value={formData.ruminating}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>9. Do you notice regurgitation of recently ingested food?</label>
    <input
      type="text"
      name="regurgitation"
      value={formData.regurgitation}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>10. Does the child experience pain on stooling?</label>
    <input
      type="text"
      name="stoolingPain"
      value={formData.stoolingPain}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>11. Smelly stool?</label>
    <input
      type="text"
      name="smellyStool"
      value={formData.smellyStool}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>12. How often do they fall sick?</label>
    <input
      type="text"
      name="fallSick"
      value={formData.fallSick}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>13. Any recent antibiotic usage?</label>
    <input
      type="text"
      name="antibioticUsage"
      value={formData.antibioticUsage}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>14. Any food allergy?</label>
    <input
      type="text"
      name="foodAllergy"
      value={formData.foodAllergy}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>15. Any self-mutilation?</label>
    <input
      type="text"
      name="selfMutilation"
      value={formData.selfMutilation}
      onChange={handleChange}
    />
  </div>
  <div>
    <label>16. Does the child get a sound sleep?</label>
    <input
      type="text"
      name="soundSleep"
      value={formData.soundSleep}
      onChange={handleChange}
    />
  </div>
</div>

<div>
<h2>Maternal Health</h2>
      <h3>Demographic Data</h3>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          name="namemother" 
          value={formData.namemother} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Age:</label>
        <input 
          type="text" 
          name="agemother" 
          value={formData.agemother} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Socio-economic Status:</label>
        <input 
          type="text" 
          name="socio" 
          value={formData.socio} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Qualifications:</label>
        <input 
          type="text" 
          name="qualifications" 
          value={formData.qualifications} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Occupation:</label>
        <input 
          type="text" 
          name="occupation" 
          value={formData.occupation} 
          onChange={handleChange} 
        />
      </div>
      <h2>Micellaneous</h2>
      <div>
        <label>Primiparous mother:</label>
        <input 
          type="text" 
          name="primiparousMother" 
          value={formData.primiparousMother} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Antenatal problem:</label>
        <input 
          type="text" 
          name="antenatalProblem" 
          value={formData.antenatalProblem} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Fever with rash:</label>
        <input 
          type="text" 
          name="feverWithRash" 
          value={formData.feverWithRash} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Anemia:</label>
        <input 
          type="text" 
          name="anemia" 
          value={formData.anemia} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>PIH/ preeclampsia/ eclampsia:</label>
        <input 
          type="text" 
          name="pih" 
          value={formData.pih} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Antepartum hemorrhage:</label>
        <input 
          type="text" 
          name="antepartumHemorrhage" 
          value={formData.antepartumHemorrhage} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Mode of delivery:</label>
        <input 
          type="text" 
          name="modeOfDelivery" 
          value={formData.modeOfDelivery} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Risk factor of High-risk Group:</label>
        <input 
          type="text" 
          name="highRiskGroup" 
          value={formData.highRiskGroup} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Prematurity:</label>
        <input 
          type="text" 
          name="prematurity" 
          value={formData.prematurity} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Low birth weight:</label>
        <input 
          type="text" 
          name="lowBirthWeight" 
          value={formData.lowBirthWeight} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Hospitalization in the first four days of life:</label>
        <input 
          type="text" 
          name="hospitalizationFirstFourDays" 
          value={formData.hospitalizationFirstFourDays} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>History of CNS infection:</label>
        <input 
          type="text" 
          name="cnsInfection" 
          value={formData.cnsInfection} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Suspected CP or developmental delay:</label>
        <input 
          type="text" 
          name="cpOrDevelopmentalDelay" 
          value={formData.cpOrDevelopmentalDelay} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Known dysmorphic syndrome or chromosomal abnormalities:</label>
        <input 
          type="text" 
          name="dysmorphicSyndrome" 
          value={formData.dysmorphicSyndrome} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Seizure disorder:</label>
        <input 
          type="text" 
          name="seizureDisorder" 
          value={formData.seizureDisorder} 
          onChange={handleChange} 
        />
      </div>
    
</div>
<div>
                <h2>Nutritional Status of Mother</h2>
                <h3>Anthropometric</h3>
                <div>
                    <label>1. Height:</label>
                    <input type="text" name="motherheight" value={formData.motherheight} onChange={handleChange} />
                </div>
                <div>
                    <label>2. Weight:</label>
                    <input type="text" name="motherweight" value={formData.motherweight} onChange={handleChange} />
                </div>
                <div>
                    <label>3. Head Circumference:</label>
                    <input type="text" name="motherheadCircumference" value={formData.motherheadCircumference} onChange={handleChange} />
                </div>
                <div>
                    <label>4. MUAC (Mid-Upper Arm Circumference):</label>
                    <input type="text" name="mothermuac" value={formData.mothermuac} onChange={handleChange} />
                </div>
                <div>
                    <label>5. SFT (Skinfold Thickness):</label>
                    <input type="text" name="mothersft" value={formData.mothersft} onChange={handleChange} />
                </div>
                <div>
                    <label>6. BMI Percentile:</label>
                    <input type="text" name="motherbmiPercentile" value={formData.motherbmiPercentile} onChange={handleChange} />
                </div>
                <div>
                    <label>7. BMR (Basal Metabolic Rate):</label>
                    <input type="text" name="motherbmr" value={formData.motherbmr} onChange={handleChange} />
                </div>
            </div>

            <div>
                <h3>BioChemical</h3>
                <div>
                    <label>Hemoglobin:</label>
                    <input type="text" name="motherhemoglobin" value={formData.motherhemoglobin} onChange={handleChange} />
                </div>
                <div>
                    <label>Clinical:</label>
                    <input type="text" name="motherclinical" value={formData.motherclinical} onChange={handleChange} />
                </div>
            </div>


            </div>
            <div className="appearance-form">
            <div>
                <h3>1. General Appearance</h3>
                <div>
                    <label>
                        <input type="checkbox" name="mothersubcutaneousFatLoss" checked={formData.mothersubcutaneousFatLoss} onChange={handleChange} />
                        Loss of subcutaneous fat
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="mothersunkenCheeks" checked={formData.mothersunkenCheeks} onChange={handleChange} />
                        Sunken or hollow cheeks
                    </label>
                </div>

                <h3>2. Hair</h3>
                <div>
                    <label>
                        <input type="checkbox" name="motherdryBrittleHair" checked={formData.motherdryBrittleHair} onChange={handleChange} />
                        Dry brittle hair
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="mothercorkscrewHair" checked={formData.mothercorkscrewHair} onChange={handleChange} />
                        Corkscrew hair
                    </label>
                </div>

                <h3>3. Nails</h3>
                <div>
                    <label>
                        <input type="checkbox" name="motherspooningNails" checked={formData.motherspooningNails} onChange={handleChange} />
                        Spooning
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="mothertransverseLines" checked={formData.mothertransverseLines} onChange={handleChange} />
                        Transverse lines
                    </label>
                </div>

                <h3>4. Skin</h3>
                <div>
                    <label>
                        <input type="checkbox" name="motherdryScalySkin" checked={formData.motherdryScalySkin} onChange={handleChange} />
                        Dry and scaly skin
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="motherpallor" checked={formData.motherpallor} onChange={handleChange} />
                        Pallor
                    </label>
                </div>
              </div>

              </div>



              <div className="food-frequency-container">
              <div>
                <h3>Food Frequecy (Mother)</h3>
              <table border="1" cellSpacing="0" cellPadding="10">
                <thead>
    <tr>
      <th>Category</th>
      <th>Daily</th>
      <th>Weekly</th>
      <th>Often</th>
      <th>Rarely</th>
    </tr>
  </thead>
  <tbody>
    {Object.keys(formData.motherFoodFrequency).map((category, index) => (
      <tr key={index}>
        <td>{category.charAt(0).toUpperCase() + category.slice(1)}</td>
        {formData.motherFoodFrequency[category].map((value, idx) => (
          <td key={idx}>
            <input
              type="text"
              value={value}
              onChange={(e) => handleMotherFoodFrequencyChange(category, idx, e.target.value)}
              placeholder="Enter input"
            />
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
</div>
</div>

<div className="table-container">
      <h2>Problem Behavior Checklist</h2>
     
        <table className="behavior-table">
          <tbody>
            {categories.map((category) => (
              <React.Fragment key={category.key}>
                <tr>
                  <td colSpan="2">
                    <strong>{category.title}</strong>
                  </td>
                </tr>
                {category.behaviors.map((behavior) => (
                  <tr key={behavior}>
                    <td>{behavior}</td>
                    <td>
                      <input
                        type="text"
                        value={formData.behaviors[category.key][behavior] || ""}
                        onChange={(e) =>
                          handleBehaviorChange(e, category.key, behavior)
                        }
                        placeholder="Enter response"
                      />
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
    </div>

            
    <div className='domain-container'>
      <table className="domain-table">
        <thead>
          <tr>
            <th colSpan="2"><strong>Domain</strong></th>
            <th colSpan="2"><strong>Intensity 1</strong></th>
            <th colSpan="2"><strong>Intensity 2</strong></th>
            <th colSpan="2"><strong>Intensity 3</strong></th>
          </tr>
        </thead>
        <tbody>
          {renderDomainRow("Aggressive Behaviors", 0)}
          {renderDomainRow("Destructive Behaviors", 1)}
          {renderDomainRow("Repetitive Self Injurious Behaviors", 2)}
          {renderDomainRow("Repetitive Non-injurious Behaviors", 3)}
          {renderDomainRow("Repetitive Odd Behaviors", 4)}
          {renderDomainRow("Antisocial Behaviors", 5)}
          {renderDomainRow("Misbehaviors with Others", 6)}
          {renderDomainRow("Rebellious Behaviors", 7)}
          {renderDomainRow("Temper Tantrums", 8)}
          {renderDomainRow("Hyperactivity", 9)}
          {renderDomainRow("Inappropriate Social Behaviors", 10)}
        </tbody>
      </table>
    </div>

    <div className="milestone-chart">
      <h2>Milestone Chart</h2>
      <table>
        <thead>
          <tr>
            <th>Chronological Age</th>
            <th>Gross Motor</th>
            <th>Fine Motor / Writing</th>
            <th>Self-Help</th>
            <th>Cognitive / Academic</th>
            <th>Social / Emotional</th>
            <th>Receptive Language</th>
            <th>Expressive Language</th>
          </tr>
        </thead>
        <tbody>
          {formData.milestoneData.map((milestone, milestoneIndex) => (
            <tr key={milestoneIndex}>
              <td>{milestone.age}</td>
              {milestone.fields.map((field, fieldIndex) => (
                <td key={fieldIndex}>
                  <p>{field.category}</p>
                  <textarea
                    value={field.value}
                    onChange={(e) => handleMilestoneChange(milestoneIndex, fieldIndex, e)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="section-container">
          {/* BEDTIME Section */}
      <div className="BEDTIME-container">
        <h2>BEDTIME</h2>
        <p>Write in your child's usual bedtime:</p>
        <p>
  Weeknights:
  <input
    type="text"
    value={formData.weeknightss}
    onChange={(e) => handleTextInputChange("weeknightss", e.target.value)}
    placeholder="__:__ am/pm"
  />
  Weekends:
  <input
    type="text"
    value={formData.bedtimeweekends}
    onChange={(e) => handleTextInputChange("bedtimeweekends", e.target.value)}
    placeholder="__:__ am/pm"
  />
</p>

        <table className="table-container">
          <thead>
            <tr>
              <th>Question</th>
              <th>7<br />Always</th>
              <th>5-6<br />Usually</th>
              <th>2-4<br />Sometimes</th>
              <th>1<br />Rarely</th>
              <th>0<br />Never</th>
            </tr>
          </thead>
          {renderQuestions("bedtime", [
            "Child goes to bed at the same time at night. ",
            "Child falls asleep within 20 minutes after going to bed.",
            "Child falls asleep alone in own bed. ",
            "Child falls asleep in parent’s or sibling’s bed. ",
            " Child falls asleep with rocking or rhythmic movements. ",
            "Child needs special object to fall asleep (doll, special blanket, stuffed animal, etc.). ",
            "Child needs parent in the room to fall asleep. ",
            "Child resists going to bed at bedtime.",
            " Child is afraid of sleeping in the dark.",
          ])}
        </table>
      </div>

      {/* SLEEP BEHAVIOR Section */}
      <div className="SLEEP-BEHAVIOR-container">
        <h2>SLEEP BEHAVIOR</h2>
        <p>Write in your child’s usual amount of sleep each day (combining nighttime sleep and naps):</p>
        <p>
          <input
            type="text"
            placeholder="hours"
            onChange={(e) => handleTextInputChange("sleepHours", e.target.value)}
          />
          <input
            type="text"
            placeholder="minutes"
            onChange={(e) => handleTextInputChange("sleepMinutes", e.target.value)}
          />
        </p>
        <table className="table-container">
          <thead>
            <tr>
              <th>Question</th>
              <th>7<br />Always</th>
              <th>5-6<br />Usually</th>
              <th>2-4<br />Sometimes</th>
              <th>1<br />Rarely</th>
              <th>0<br />Never</th>
            </tr>
          </thead>
          {renderQuestions("sleepBehavior", [
            "Child sleeps about the same amount each day.",
            "Child is restless and moves a lot during sleep.",
            "Child moves to someone else’s bed during the night (parent, sibling, etc.). ",
            "Child grinds teeth during sleep (your dentist may have told you this). ",
            "Child snores loudly. ",
            "Child awakens during the night and is sweating, screaming, and inconsolable. ",
            "Child naps during the day. "
          ])}
        </table>
      </div>

      {/* WAKING DURING THE NIGHT Section */}
      <div className="WAKING-container">
        <h2>WAKING DURING THE NIGHT</h2>
        <table className="table-container">
          <thead>
            <tr>
              <th>Question</th>
              <th>7<br />Always</th>
              <th>5-6<br />Usually</th>
              <th>2-4<br />Sometimes</th>
              <th>1<br />Rarely</th>
              <th>0<br />Never</th>
            </tr>
          </thead>
          {renderQuestions("wakingNight", [
            "Child wakes up once during the night.",
            "Child wakes up more than once during the night."
          ])}
        </table>
      </div>

     {/* MORNING WAKE-UP Section */}
     <div className="MORNING-WAKE-UP-container">
        <h2>MORNING WAKE-UP</h2>
        <p>Write in the time your child usually wakes up in the morning:</p>
        <p>
          Weekdays:
          <input
            type="text"
            value={formData.weekdaysWakeUp}
            onChange={(e) => handleTextInputChange("weekdaysWakeUp", e.target.value)}
            placeholder="__:__ am/pm"
          />
          Weekends:
          <input
            type="text"
            value={formData.weekendsWakeUp}
            onChange={(e) => handleTextInputChange("weekendsWakeUp", e.target.value)}
            placeholder="__:__ am/pm"
          />
        </p>
        <table className="table-container">
          <thead>
            <tr>
              <th>Question</th>
              <th>7<br />Always</th>
              <th>5-6<br />Usually</th>
              <th>2-4<br />Sometimes</th>
              <th>1<br />Rarely</th>
              <th>0<br />Never</th>
            </tr>
          </thead>
          {renderQuestions("morningWakeUp", [
            " Child wakes up by him/herself. ",
            " Child wakes up very early in the morning (or, earlier than necessary or desired). ",
            "Child seems tired during the daytime. ",
            ". Child falls asleep while involved in activities."

          ])}
        </table>
      </div>
      </div>

      <div className="feces-form-container">
        <h2>Feces Table</h2>
        <table className="feces-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {imageSources.map((src, index) => (
              <tr key={index + 1}>
                <td>
                  <img
                    src={src}
                    alt={`Type ${index + 1}`}
                    className="feces-image"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder={`Describe Type ${index + 1}`}
                    onChange={(e) =>
                      imageSelectFunction(`Type ${index + 1}`, e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
