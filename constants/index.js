export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-1.webp',
    title: 'Miller’s Planet',
    shortDescription: 'The Tides of Anomaly',
    description: `Time drowns on Miller’s planet. The relentless pull of Gargantua bends the very fabric of reality, distorting seconds into years, reshaping the world beneath its crushing grasp. The ocean stretches endlessly, its surface broken only by the rise and fall of towering waves, mountains of water moving with the precision of a cosmic metronome. It was supposed to be a routine reconnaissance. It wasn’t.<br>
Dr. Laura Miller was the first to land here. The first, and the first to be lost. Her ship, her instruments, her very presence, claimed by the tides before she could transmit a warning. What she found remains unknown. What she left behind is all that we have.<br>
Scattered across the shallow waters, strange geometric relics drift amidst the wreckage of Miller’s mission. They are not natural. Some believe they are fragments of her equipment, warped and reshaped by the relentless strain of gravitational distortion. Others whisper of something more, an anomaly not just of time, but of matter itself, a manifestation of the planet’s unnatural physics. The objects are scattered, some appearing deliberate, some mere wreckage, pulled in by the ceaseless current.<br>
Our task is clear. We must isolate the true artifacts. Among the floating wreckage, certain objects do not belong—triangular shards of debris, distorted remains of past failures. Only the perfect squares hold the key to understanding Miller’s fate. Time is against us. The next wave will come, and when it does, everything—truth, deception, and discovery alike—will be washed away.`,
    objective: 'You are given a 256x256 grayscale image of Miller’s ocean, containing white geometric shapes on a black background. Your mission is to count the exact number of squares in the image while ignoring any triangular objects. The number of shapes per image ranges from 1 to 15, with some being genuine artifacts (squares) and others mere wreckage (triangles). The challenge lies in distinguishing between them, as basic shape-detection methods may fail due to the objects\' varying orientations and potential distortions. The fate of the mission depends on your accuracy—count the squares before the next wave erases them forever.',
    link: 'https://www.kaggle.com/t/879936b2468a4736acc47cd18a6735a5',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-2.webp',
    title: 'Wong’s Planet',
    shortDescription: "The Gatekeepers' Equation",
    description: `Not a door. A choice.<br>
    Dr. Elias Wong’s final words still haunt the annals of astrophysics. Wong was a theoretical physicist and cosmic frontiers, obsessed with the nature of spacetime gateways. Once a quiet mind in the Lazarus Initiative, he diverged from mainstream thought, convinced that wormhole stability wasn’t just physics, it was intent.<br>
    After Mann’s betrayal, Wong pushed further into the unknown, proposing that "They" didn’t just place the wormhole near Saturn but conditioned it to respond to something deeper, something yet undiscovered. He vanished near Wong’s Planet, leaving behind fragmented equations and a final transmission: “Not a door. A choice.”<br>
    The wormhole near Saturn was not the only one. The remnants of another, an unstable anomaly, were detected orbiting Wong’s Planet, flickering, collapsing, and reforming.<br>
    Unlike Saturn’s passage, this one resists us. It fails more than it succeeds. And yet, "They" left it here.<br>
    Who are "They"? Architects of space-time? Intergalactic custodians? Higher-dimensional beings? We still don’t know. But Wong believed they didn’t just open doors; they decided who walked through. This wormhole, he theorized, is a test, one we must pass if humanity is to travel beyond.`,
    objective: 'You are given a dataset containing 36 measured variables that describe the behavior of the unstable wormhole near Wong’s Planet. Your mission is to predict whether the wormhole will successfully stabilize or collapse into failure. The anomaly is unpredictable, flickering between states, defying classical understanding. Standard models fall short—only those who truly decipher its hidden patterns will unlock the next step in humanity’s journey. The fate of interstellar travel depends on your accuracy—predict stability before the gateway seals shut forever.',
    link: 'https://www.kaggle.com/t/8dc5d3fe8f0b43f594efdb4d5b4d33c6',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-3.webp',
    title: 'Mann’s Planet',
    shortDescription: 'The Music of the Forgotten',
    description: `Mann’s betrayal left a wound on history, a name remembered in deception, a world abandoned in silence. But silence is never truly empty.<br>
In the decades since his planet was declared uninhabitable, our researchers turned to the anomalies buried beneath the ice. They found frequencies, strange harmonic structures woven into the wind, shifting across the frozen landscape like a song half-heard through the storm. Some believed it was nothing but the planet itself speaking, a cosmic trick of physics, interference from its volatile atmosphere. But others saw a pattern. A design. A call.<br>
To understand it, we responded the only way we knew how: we answered with music. Using the same acoustic principles embedded in the ice, humanity crafted its own compositions, six distinct soundscapes, each inspired by the echoes we first detected. They were broadcast into the void, carried by orbital beacons looping across the frozen world. And for a time, there was nothing. No response.<br>
Until now.<br>
The beacons have begun transmitting new music back, a signal not of our making. It is unmistakably human in form, yet altered, remixed, twisted by something unseen. Who, or what, has answered us? And more importantly, what do these sounds mean?<br>
Each piece, each melody, must be sorted, studied, understood. Is this mimicry? A response? Or something we cannot yet comprehend?<br>
Mann’s planet still has secrets to tell. We must listen`,
    objective: `Your mission is to develop an audio classification model that can correctly identify six distinct musical traditions from interstellar transmissions. Given a dataset of pre-processed spectral features and raw audio signals, your model must classify each sample into one of the following six classes:\n
Strathea-IV - Rhythmic pulses and harmonic gatherings encoded in the Strathean Echo Fields. (label:strathea_iv)\n
Aegir-27 - Percussive, spoken-word transmissions from Signal Outpost 27, echoing rebellion. (label:aegir_27)\n
Solmara-VI - Melancholic harmonies from the Sixth Lunar Vault, carrying the weight of lost home worlds. (label:solmara_vi)\n
Zephyrion-9 - Fluid, evolving soundscapes of displaced travelers from the Echelon Exodus. (label:zephyrion_9)\n
Veyrah-θ - Hypnotic, trance-like chants aligned with gravitational oscillations in the Theta Sector. (label:veyrah_theta)\n
Xyphos-1 - Ancestral soundscapes preserved in lost data crystals from nomadic scholars. (label:xyphos_1)\n`,
    link: 'https://www.kaggle.com/t/b2de256502db444ab52db8f128b3f349',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-4.webp',
    title: 'Hale’s Planet',
    shortDescription: 'Echoes of a Distant Tongue',
    description: `"Language is not merely communication. It is memory, history, and identity. To understand a world, you must understand how it feels."<br>
Before his disappearance, Dr. Anton Volkov, Hale’s Russian counterpart in the Lazarus missions, believed that Hale’s Planet was not as barren as it seemed. Among the anomalies in its electromagnetic field were structured phonetic sequences, repeating patterns that hinted at something more, something sentient. Volkov theorized that these signals were not just random noise but the remnants of a long-lost civilization, a language waiting to be understood.<br>
Volkov's obsession consumed him. He dedicated years to deciphering the frequencies, mapping them to the closest linguistic structures on Earth. His final theory? The transmissions bore striking similarities to human phonetics across multiple languages, with no single dominant tongue, just an interwoven web of expression. French intonations, Russian syntax, the rhythm of Arabic prose, the musicality of Spanish, and echoes of English and beyond. It was as if Hale’s Planet spoke in the many voices of Earth.<br>
Then, Volkov vanished. Some say he wandered too far into the planet’s ice storms. Others whisper of something else, something that listened. His last logs were fragmented, unfinished, pleading:<br>
"They are speaking back. But I do not understand."<br>
Now, the mission falls to us. We must complete what he started. We have gathered texts across eight languages—Arabic, French, Spanish, Portuguese, Russian, Italian, English, and Norwegian, each infused with sentiment, each a fragment of human emotion. Our goal is not just to classify these texts but to encode them with the emotions they carry, so that when we transmit them back, we are not just sending words—we are sending feelings.<br>
This is more than an analysis. This is an answer.`,
    objective: 'Your challenge is to develop a sentiment analysis model that can classify text into one of three categories: positive, negative, or neutral. Given a dataset of text samples labeled with their respective sentiment, the task involves preprocessing the text, extracting meaningful features, and training a machine learning or deep learning model to accurately predict sentiment for new, unseen text.',
    link: 'https://www.kaggle.com/t/26d4dd8d8f974177b2e0a2b93fb95bbc',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-5.webp',
    title: 'Edmunds’ Planet',
    shortDescription: 'A World Waiting for Life',
    description: `“This is Dr. Wolf Edmunds, Lazarus 12. Atmosphere: thin but breathable. Gravity: stable. Surface: barren… but promising.”<br>
That was the last transmission. The final echo of a dream left unfinished. When Brand arrived years later, the planet lay silent, its vast, rocky plains whispering only of what could have been. But Edmunds’ Planet was never uninhabitable. It was only waiting.<br>
Waiting for life. Waiting for us.<br>
A world can change, given time, vision, and the right hands to shape it. Trees, strong, resilient, vital, hold the key to its revival. They will anchor the soil, thicken the air, and awaken the land from its endless slumber. The mission is clear: detect the trees on Earth that will take root in the stars.<br>
The next step begins now.`,
    objective: 'Your challenge is to detect individual trees from aerial remote sensing data. You’ll work with multiple sensing modalities, including RGB imagery, LiDAR, hyperspectral data, and canopy height models (CHM)—to develop a model that can accurately identify and locate trees. This task mirrors real-world environmental monitoring, where diverse data sources must be used despite missing or incomplete inputs. Your model will be tested on unseen data.',
    link: 'https://www.kaggle.com/t/b874d9bc0c3c388296087623091847d8',
  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading precaution to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
      'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
      'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse and be happy :)',
    subtitle:
      'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
      'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
      'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
    link: 'https://twitter.com/VigneshGupta9',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
    link: 'https://www.linkedin.com/in/vigneshgupta/',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
    link: 'https://www.instagram.com/_viggi.g_/',
  },
];

export const eventStart = new Date('2025-03-01T12:30:00Z'); // 6 PM IST on March 1, 2025
export const eventEnd = new Date('2025-03-05T12:30:00Z'); // 6 PM IST on March 5, 2025
