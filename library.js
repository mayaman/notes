const adj = ["gentle", "crisp", "spiritual", "sophisticated", "fantastic", "chic", "sharp", "joyful", "synthetic", "cute", "potent", "youthful", "comfortable", "complex", "layered", "forbidden", "lush", "bewitching", "splurge-worthy", "cutesy", "heavenly", "timeless", "modern", "dark", "decadent", "graceful", "complex",  "heavy", "warm", "subtle", "girly", "pretty", "photorealistic", "delicious", "dainty", "creamy", "delicate", "soft", "familiar", "comforting", "grandma-ish", "simple", "soapy", "tumblr/myspace", "fragrant", "seductive", "sultry", "zesty", "luscious", "juicy", "lavish", "clean", "green", "lovely", "gentle", "classy", "charming", "sunny", "sour", "musky", "sexy", "strong", "straightforward", "pleasant", "powdery", "delectable", "smooth", "rich", "senses-tingling", "mouthwatering", "pure", "lavish", "gourmand", "light", "floral", "sparkly", "captivating", "luxurious", "dark", "intriguing", "luscious", "unique", "mysterious", "radiant", "delicate", "luminous", "groundbreaking", "powdery", "sweet", "fun", "sugary", "fresh", "deep", "feminine", "flirty", "cozy", "classic", "vibrant"];
const adj_an = ["unisex", "herbaceous", "attractive", "earthy", "elegant", "innocent", "intoxicating", "easy", "enchanting", "exquisite", "erotic", "ethereal", "opulent", "inoffensive", "aquatic", "effervescent", "essential", "enveloping", "airy", "addictive", "innovative"];
const adj_mixed = adj.concat(adj_an);
const color = ["black", "pink", "blue", "green"];
const adverb = ["wonderfully", "charmingly", "mouthwateringly", "deliberately", "classically", "relatively", "surprisingly", "infinitely", "perfectly", "slightly", "indulgently", "easily", "somewhat", "artfully", "especially"]
const noun = ["charm", "essence", "complexity", "exoticism", "freedom", "treasure", "romance", "perfection", "pleasure", "glamour", "sensuality", "versatility", "beauty", "femininity", "elegance", "piquancy", "vulnerability", "memories", "surprise", "freshness", "nostalgia", "happiness", "indulgence", "delight", "delicacy", "depth", "brightness", "sentiment"];
const nspc = [",", "...", "!", "-"];
const season = ["winter", "spring", "autumn", "summer"];
const hour = ["2", "3", "4", "5", "6", "7", "8"];
const thing = ["summer in italy", "first kiss", "tube of chapstick", "brand-new car", "holiday in the sun", "delicately beautiful insect", "majestic castle", "handful of caramel popcorn", "summer music festival", "butter cookie", "bouquet of wildflowers", "rainbow", "bubble bath", "dryer sheet", "rose", "rose-colored curtain", "strawberry shortcake", "milkshake", "marshmallow", "white rabbit"];
const punctuation = ["!", "!!", "!!!", "...", " :)", " <3", " <33", "!! :)"];
const activity = ["being a classy and sexy woman walking the streets", "lighting your heart with nostalgic dreamy summer lanterns", "unfolding a hand-me-down wool blanket", "sitting on an antique loveseat near an invitingly large fireplace", "getting punched in the nostrils by a cinnamon incense stick", "sniffing your scarf after a fun night out", "venturing to the far grassy hills", "sitting with hello kitty figurines on my desk", "getting out of a warm bubble bath", "waking in expensive white bedding", "entering a room where cookies have been baking all day", "drinking warm milk in porcelain mugs on a cold winter night", "enjoying a simple breakfast of a hot cup of foamed cappuccino", "waking up in a charming Italian town", "leaning against a great golden lion who is purring like a race car", "closing your eyes and dreaming that your spirit is at peace", "encountering scents drifting from a distant garden on the quiet breeze", "waiting for the languor of evening shadows", "rising up to meet the mysteries at hand for the evening", "eating cotton candy in a dream", "walking into a garden in full bloom", "entering a stage set with paper lanterns and parasols", "wearing a piece of contemporary art", "gorging yourself silly while swinging your red ruby slippers back and forth", "wearing something unapologetically luxurious", "being in love", "getting noticed when you walk into a room", "petting a mischievous tiger cub", "being tugged gently by summer winds", "spending afternoons under parasols", "drinking a cup of green tea in an upmarket equestrian store", "enjoying a date night out", "enjoying a rice krispie treat after school", "finding yourself in the appreciation of life", "introducing yourself to each colour of the sunset", "holding a glowing white blossom right in your hand", "falling head over heels", "buying a plane ticket straight to a tropical island", "lounging on satin sheets", "being fed ice cream", "licking whipped cream off of your fingers", "watching the sun set over the ocean"];

let reviewStructures = [
    ["it’s not", "adj_mixed", "or", "adj_mixed", "but it’s a nice smell"],
    ["smells like", "adj", "notes", "on me"],
    ["so ", "adj_mixed", "and", "adj_mixed"],
    ["adj_mixed", "and", "adj_mixed", ",", "probably a safe blind buy"],
    ["smells pretty", "adj_mixed"],
    ["adj_mixed", "and yet very", "adj_mixed", "scent"],
    ["very", "adj_mixed", "scent"],
    ["it’s a", "adj", ",", "adverb", "worn fragrance"],
    ["lasts the entire day on me"],
    ["it’s a", "adj", ",", "adj_mixed", ",", "and even", "adverb", "adj_mixed", "fragrance"],
    ["I really love this", "notes", "and", "notes", "version"],
    ["the", "adj_mixed", "design of the bottle takes on a", "adj", "color"],
    ["this", "adj_mixed", "bottle is adorned with a", "adj", "color"],
    ["accentuated by a", "adj", "notes", "accord"], 
    ["embodies the", "noun", "of Parisian style"],
    ["adverb", "blends the", "noun", "of a", "adj", ",", "adj_mixed", "notes", "with the", "adj_mixed", "noun", "of a", "adj", ",", "adj_mixed", "notes", "accord"],
    ["a", "adj", "scent between", "noun", "and", "noun"],
    ["i still have my bottle from back then, it just smells like", "noun", ",", "noun", "girl era !!"],
    ["adj_mixed", "adj_mixed", "and", "adverb", "adj_mixed", "scent"],
    ["there is nothing", "adj_mixed", "here"],
    ["noun", "in a bottle"],
    ["it’s not very", "adj_mixed", "on me, but it’s there"],
    ["this", "adj_mixed", "adj_mixed", "adj_mixed", "scent enveloped me"],
    ["a", "adj", "somewhat", "adj_mixed", "notes"],
    ["my favourite", "adj_mixed", "scent"],
    ["first whiff in warm weather:", "adj_mixed", "noun"],
    ["base notes after 1 hour:", "notes", ",", "notes", ",", "notes"],
    ["noun", "in a bottle"],
    ["enjoy wearing this on a", "adj", "day outside"],
    ["a", "adj", "adj_mixed", "adj_mixed", "adj_mixed", "adj_mixed", "scent"],
    ["3 words:", "adj_mixed", "adj_mixed", "adj_mixed"],
    ["it is", "adj_mixed", ",", "but a bit", "adj_mixed", "..."],
    ["scent itself is VERY", "adj_mixed", ",", "borderline", "adj_mixed"],
    ["my absolute most complimented fragrance of all time"],
    ["lasts about", "hour", "hours"],
    ["my", "season", "staple for sure"],
    ["very", "adj_mixed"],
    ["adj_mixed", "everyday scent"],
    ["a very", "adj_mixed", "", "fragrance"],
    ["mmm this smells so", "adj_mixed", "and", "adj_mixed", "and", "adj_mixed"],
    ["very", "adj_mixed", "to smell in the air"],
    ["such a fun", "season", "scent"],
    ["the bottle is", "adj_mixed", "and", "adj_mixed"],
    ["the opening is very", "adj_mixed"],
    ["quite a linear", "notes", "notes", "and", "notes", "fragrance"],
    ["it opens as this", "notes", "smell"],
    ["straight up", "notes"],
    ["smells like", "activity"],
    ["still brings me back to", "adj_mixed", "times"],
    ["one of the most", "adj_mixed", "perfumes"],
    ["a little more", "adj_mixed", "than I was expecting"],
    ["this wears beautifully in the heat and can hold its own in humidity"],
    ["a perfect balance of", "adj_mixed", "and", "adj_mixed"],
    ["adverb", "unisex"],
    ["adj_mixed", "smell of a", "thing"],
    ["this is distinctly", "adj_mixed", "noun", "core"],
    ["feels", "adj_mixed", "and", "adj_mixed"],
    ["notes", "note stayed with me for a long time"],
    ["kind of like a", "thing"],
    ["a", "adj", "whisper of a perfume"],
    ["a pure delight"],
    ["so so", "adj_mixed", "and", "adj_mixed"],
    ["what can I say other than wow mmhmmm yes"],
    ["I cannot stop smelling this... such a", "adj", "memory"],
    ["definitely a skin scent"],
    ["strong projection and long lasting"],
    ["one for the", "adj_mixed", "girls"],
    ["adj_mixed", "and", "adj_mixed", "hint of", "notes"],
    ["a masterpiece"],
    ["adverb", "adj_mixed"],
    ["adverb", "adj_mixed", "fragrance"],
    ["worth the money"],
    ["adverb", "adj_mixed", "notes"],
    ["I wear this on", "adj_mixed", "days"],
    ["one spray is enough"],
    ["when I am in a", "adj", "mood", ",", "I wear this"],
    ["gives the allure of being", "adj_mixed", ",", "adj_mixed", ",", "and", "adj_mixed"],
    ["leans more toward the", "adj_mixed", "side"],
    ["you can totally feel the", "notes"],
    ["something a", "adj", "girl would wear"],
    ["adj_mixed", "as hell"],
    ["on a woman like myself, this is", "adj_mixed"],
    ["men love this, women love this"],
    ["true", "noun", "in a bottle"],
    ["more", "adj_mixed", "overtones"],
    ["adj_mixed", "undertones"],
    ["good longevity"],
    ["something", "adverb", "adj_mixed", "about this accord"],
    ["right in-between", "adj_mixed", "and not"],
    ["association:", "adj_mixed", "stranger you meet on a", "season", "holiday"],
    ["way more", "adj_mixed", "than I imagined"],
    ["if you want to get compliments (from girls) then this is an", "adj_an", "choice"],
    ["THE BEST gourmand to wear in the", "season"],
    ["the bottle is even more", "adj_mixed", "in person"],
    ["my new", "adj_mixed", "scent"],
    ["this gives me strong", "notes", "vibes"],
    ["opening is", "adj_mixed", "but after 2 minutes it is so", "adj_mixed", "on my skin"],
    ["simply stunned by the", "noun", "of this fragrance"],
    ["this would be a", "adj", "scent to wear around a", "adj", "crush"],
    ["the bottle is quite", "adj_mixed"],
    ["adj_mixed", "enough for", "season"],
    ["soooo", "adj_mixed"],
    ["noun", "in a bottle"],
    ["EVERYONE LOVES THIS"],
    ["if I smelt this on a girl i’d collapse on the street"],
    ["a", "adj", "fragrance for a girl growing into womanhood"],
    ["this is what i'd wear if i was", "activity"],
    ["very", "adj_mixed", "scent trail"],
    ["this is for", "adj_mixed", "girls"],
    ["a few sprays are more than enough"],
    ["bottle is", "adj_mixed", "and totally matches the vibe"],
    ["it feels", "adj_mixed", "yet", "adj_mixed"],
    ["a", "adj", "thing", "type of scent~ in a good way"],
    ["I feel", "adj_mixed", "whenever I wear this"],
    ["soooooooo", "adj_mixed", "so", "adj_mixed", "so", "adj_mixed"],
    ["feeling like a girl having a vanilla latte and a slightly sweet croissant at a French cafe"],
    ["imagine a", "thing", "turning into", "noun"],
    ["men go crazy for this one"],
    ["exudes a", "adj", "noun"],
    ["mmm", "adverb", "adj_mixed"],
    ["I was scared of the", "notes", "note", "but it blends so well here"],
    ["it resembles a", "adj", "and", "adj", "thing"],
    ["the", "noun", "of this on initial spray is", "adj_mixed"],
    ["literally", "season", "in a bottle"],
    ["the aroma surrounding you will be", "adj_mixed"],
    ["it definitely has a", "adj", "vibe"],
    ["a", "adj", "and", "adj_mixed", "noun"],
    ["a scent that wears", "adj_mixed", "and", "adj_mixed"],
    ["a", "adj", "twist of", "notes"],
    ["this scent will evoke", "adj_mixed", "memories"],
    ["adverb", "adj_mixed", "notes", "scent"],
    ["a must try for", "notes", "lovers"],
    ["like a", "thing"],
    ["mmm simply", "adverb", "adj_mixed"]
];

let descriptionStructures = [
    ["represents the", "noun", "of a woman’s character"],
    ["the most", "adj", "notes", "scent we’ve smelled yet"],
    ["a", "adj", "experience for the senses that takes you far beyond a", "adj", "notes", "essence"],
    ["a", "adj", "and", "adj_mixed", "dive into", "adj", "noun"],
    ["a", "adj", "noun"],
    ["a", "adj", ",", "adj_mixed", "noun"],
    ["radiates", "adj_mixed", ",", "adj_mixed", "noun"],
    ["a", "adj", "experience for the senses"],
    ["takes you far beyond a", "adj", "adj_mixed", "essence"],
    ["opens with an", "adj_an", "burst of", "adj_mixed", "notes", "and", "notes"],
    ["slinks toward a", "adj", "notes", "accord"],
    ["a", "adj", "and", "adj_mixed", "vibe"],
    ["a", "adj", "adj_mixed", "swirl where a", "adj", "snake will embrace you with its", "adj_mixed", "trail"],
    ["a", "adj", "encounter", "with a", "adj", "stranger"],
    ["adj", "notes", "frosting"],
    ["at once", "adj_mixed", "and", "adj_mixed"],
    ["not an overly", "adj_mixed", "scent"],
    ["a", "adj", "take on a", "adj", "fragrance"],
    ["notes", "balances this", "adj_mixed", "composition"],
    ["the perfect fragrance for romance"],
    ["we can’t get enough of the", "adj_mixed", "noun"],
    ["more than a perfume,", "it is a", "adj", "work of art"],
    ["adj_mixed", "and", "adverb", "adj_mixed"],
    ["has a", "adj", "aura"],
    ["hints of", "adj_mixed", "notes", "up the", "adj_mixed", "factor"],
    ["doesn’t apologize for its", "adj", "noun"],
    ["celebrating", "adj_mixed", "noun"],
    ["melts into the skin in the most", "adj_mixed", "way"],
    ["truly", "adj_mixed", "and worth every penny"],
    ["for the", "adj_mixed", "type of woman"],
    ["an aromatic shimmer of", "notes"],
    ["will sail you through", "adj_mixed", "and", "adj_mixed", "nights"],
    ["built around a", "adj", "notes"],
    ["adds a touch of", "adj_mixed", "energy"],
    ["sucks you in with a mouthwateringly", "adj_mixed", "accord"],
    ["a", "adj", "and", "adj", "drydown"],
    ["adj_mixed", "enough to put", "adj_mixed", "thoughts in your mind"],
    ["opens with a", "tingly sparkle of", "notes"],
    ["it lingers for hours"],
    ["supported by a", "adj", ",", "adj_mixed", "base of", "notes"],
    ["expresses the", "noun", "of the Parisian woman"],
    ["adj_mixed", "enough not to demand major commitment before spritzing"],
    ["will carry you effortlessly into champagne hour"],
    ["not an", "adj_an", "feel but more like", "adj_mixed", "exuberance"],
    ["it never crosses the line into", "adj_mixed", "territory"],
    ["conjures", "adj_mixed", "dreams"],
    ["heavenly", "notes", "laced with", "notes", "and", "notes"],
    ["the", "adj_mixed", "notes", "eases into a", "adj", ",", "adj", "notes"],
    ["this is like a dessert you would eat in a dream"],
    ["like the", "adj_mixed", "smell of", "season"],
    ["an icon of", "adj_mixed", "noun"],
    ["the heart bursts forth in", "notes", "waves"],
    ["captures the", "adj_mixed", "noun", "of the", "adj_mixed", "fruit"],
    ["adj_mixed", "with the", "adj_mixed", "noun", "of", "season"],
    ["we are honored to be one of the few select retailers on the planet to offer this", "adj_mixed", "noun"],
    ["fits of giggles fueled by", "notes"],
    ["a polite suggestion of", "notes"],
    ["imagine", "activity"],
    ["like", "activity"],
    ["picture you are", "activity"],
    ["just like", "activity"],
    ["picture this:", "activity"],
    ["you will be", "activity"],
    ["the first impression is that of", "activity"],
    ["reminds us of", "activity"],
    ["the vibe:", "activity"]
];