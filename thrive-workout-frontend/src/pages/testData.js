const testData = 
[
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/UcvY9fRgNeiV4m",
    id: "0001",
    name: "3/4 sit-up",
    target: "abs",
    secondaryMuscles: [
      "hip flexors",
      "lower back"
    ],
    instructions: [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Place your hands behind your head with your elbows pointing outwards.",
      "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
      "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/I-Of0Ev43i4Zt7",
    id: "0002",
    name: "45° side bend",
    target: "abs",
    secondaryMuscles: [
      "obliques"
    ],
    instructions: [
      "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
      "Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.",
      "Pause for a moment at the bottom, then slowly return to the starting position.",
      "Repeat on the other side.",
      "Continue alternating sides for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/vqnn-xmm4fINTJ",
    id: "0003",
    name: "air bike",
    target: "abs",
    secondaryMuscles: [
      "hip flexors"
    ],
    instructions: [
      "Lie flat on your back with your hands placed behind your head.",
      "Lift your legs off the ground and bend your knees at a 90-degree angle.",
      "Bring your right elbow towards your left knee while simultaneously straightening your right leg.",
      "Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.",
      "Continue alternating sides in a pedaling motion for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/vKAWsPzehvwbAa",
    id: "1512",
    name: "all fours squad stretch",
    target: "quads",
    secondaryMuscles: [
      "hamstrings",
      "glutes"
    ],
    instructions: [
      "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
      "Extend one leg straight back, keeping your knee bent and your foot flexed.",
      "Slowly lower your hips towards the ground, feeling a stretch in your quads.",
      "Hold this position for 20-30 seconds.",
      "Switch legs and repeat the stretch on the other side."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/Y99VpeCGG19urP",
    id: "0006",
    name: "alternate heel touchers",
    target: "abs",
    secondaryMuscles: [
      "obliques"
    ],
    instructions: [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Extend your arms straight out to the sides, parallel to the ground.",
      "Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.",
      "Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.",
      "Continue alternating sides for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "https://v2.exercisedb.io/image/I4XMjCBFhqaGoJ",
    id: "0007",
    name: "alternate lateral pulldown",
    target: "lats",
    secondaryMuscles: [
      "biceps",
      "rhomboids"
    ],
    instructions: [
      "Sit on the cable machine with your back straight and feet flat on the ground.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "lower legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/-EA4vBhetgIhoR",
    id: "1368",
    name: "ankle circles",
    target: "calves",
    secondaryMuscles: [
      "ankle stabilizers"
    ],
    instructions: [
      "Sit on the ground with your legs extended in front of you.",
      "Lift one leg off the ground and rotate your ankle in a circular motion.",
      "Perform the desired number of circles in one direction, then switch to the other direction.",
      "Repeat with the other leg."
    ]
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "3293",
    name: "archer pull up",
    target: "lats",
    secondaryMuscles: [
      "biceps",
      "forearms"
    ],
    instructions: [
      "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
      "Engage your core and pull your shoulder blades down and back.",
      "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
      "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
      "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
      "Alternate sides with each repetition."
    ]
  },
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/Bi8xVYeWIyqo56",
    id: "3294",
    name: "archer push up",
    target: "pectorals",
    secondaryMuscles: [
      "triceps",
      "shoulders",
      "core"
    ],
    instructions: [
      "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
      "Extend one arm straight out to the side, parallel to the ground.",
      "Lower your body by bending your elbows, keeping your back straight and core engaged.",
      "Push back up to the starting position.",
      "Repeat on the other side, extending the opposite arm out to the side.",
      "Continue alternating sides for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/syexFkqm09g-Ms",
    id: "2355",
    name: "arm slingers hanging bent knee legs",
    target: "abs",
    secondaryMuscles: [
      "shoulders",
      "back"
    ],
    instructions: [
      "Hang from a pull-up bar with your arms fully extended and your knees bent at a 90-degree angle.",
      "Engage your core and lift your knees towards your chest, bringing them as close to your elbows as possible.",
      "Slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/Sv6SbN1kjlv7cR",
    id: "2333",
    name: "arm slingers hanging straight legs",
    target: "abs",
    secondaryMuscles: [
      "shoulders",
      "back"
    ],
    instructions: [
      "Hang from a pull-up bar with your arms fully extended and your legs straight down.",
      "Engage your core and lift your legs up in front of you until they are parallel to the ground.",
      "Hold for a moment at the top, then slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/wKh-S8vA0Tf7WM",
    id: "3214",
    name: "arms apart circular toe touch (male)",
    target: "glutes",
    secondaryMuscles: [
      "hamstrings",
      "quadriceps",
      "calves"
    ],
    instructions: [
      "Stand with your feet shoulder-width apart and arms extended to the sides.",
      "Keeping your legs straight, bend forward at the waist and reach down towards your toes with your right hand.",
      "As you reach down, simultaneously lift your left leg straight up behind you, maintaining balance.",
      "Return to the starting position and repeat the movement with your left hand reaching towards your toes and your right leg lifting up behind you.",
      "Continue alternating sides for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/hcbbkHUzwGrwny",
    id: "3204",
    name: "arms overhead full sit-up (male)",
    target: "abs",
    secondaryMuscles: [
      "hip flexors",
      "lower back"
    ],
    instructions: [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Extend your arms overhead, keeping them straight.",
      "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is upright.",
      "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/Qibh9TehUK0L99",
    id: "3212",
    name: "arms overhead torso twist",
    target: "obliques",
    secondaryMuscles: [
      "abs"
    ],
    instructions: [
      "Stand with your feet shoulder-width apart and your arms extended straight overhead.",
      "Engage your core and twist your torso to the right, bringing your arms down and across your body.",
      "Return to the starting position and twist your torso to the left, again bringing your arms down and across your body.",
      "Continue alternating sides for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/vOcysuIx32Zo6F",
    id: "2307",
    name: "arms-out fly",
    target: "pectorals",
    secondaryMuscles: [
      "anterior deltoids"
    ],
    instructions: [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Extend your arms out to the sides at shoulder height, with your palms facing up.",
      "Keeping a slight bend in your elbows, slowly bring your arms together in front of you, squeezing your chest muscles.",
      "Pause for a moment at the peak of the movement, then slowly return your arms to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/6eTFcd4O2xvlY3",
    id: "3206",
    name: "arms-up squat (male)",
    target: "quadriceps",
    secondaryMuscles: [
      "hamstrings",
      "glutes",
      "calves"
    ],
    instructions: [
      "Stand with your feet shoulder-width apart and your arms extended straight up overhead.",
      "Keeping your back straight and chest up, push your hips back and bend your knees to lower into a squat position.",
      "Pause for a moment at the bottom of the squat, then push through your heels to return to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/4XdSbDhC0i5ocQ",
    id: "3207",
    name: "arms-up straight leg lift (male)",
    target: "abs",
    secondaryMuscles: [
      "hip flexors"
    ],
    instructions: [
      "Lie flat on your back with your legs extended straight and your arms extended straight up overhead.",
      "Engaging your abs, lift your legs up towards the ceiling, keeping them as straight as possible.",
      "Slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/Bi8xVYeWIyqo56",
    id: "2292",
    name: "arms-wide push up",
    target: "pectorals",
    secondaryMuscles: [
      "triceps",
      "shoulders",
      "core"
    ],
    instructions: [
      "Start in a push-up position with your hands wider than shoulder-width apart.",
      "Lower your body by bending your elbows, keeping your back straight and core engaged.",
      "Push back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/r5Rbn5n-n98xne",
    id: "3209",
    name: "arms-wide squat (male)",
    target: "quadriceps",
    secondaryMuscles: [
      "hamstrings",
      "glutes",
      "calves"
    ],
    instructions: [
      "Stand with your feet wider than shoulder-width apart and your arms extended straight out to the sides.",
      "Keeping your back straight and chest up, push your hips back and bend your knees to lower into a squat position.",
      "Pause for a moment at the bottom of the squat, then push through your heels to return to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/g85-7EDqYH6yGz",
    id: "3197",
    name: "backward arms-up squat",
    target: "quadriceps",
    secondaryMuscles: [
      "hamstrings",
      "glutes",
      "calves"
    ],
    instructions: [
      "Stand with your feet shoulder-width apart and your arms extended straight up overhead.",
      "Keeping your back straight and chest up, take a large step backward with one foot.",
      "Lower your body by bending your front knee, keeping your back knee off the ground.",
      "Pause for a moment at the bottom of the squat, then push through your front heel to return to the starting position.",
      "Repeat on the other side, stepping back with the opposite foot.",
      "Continue alternating sides for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/jE6WuBQ6kMqUQz",
    id: "3203",
    name: "backward arms-up torso twist",
    target: "obliques",
    secondaryMuscles: [
      "abs"
    ],
    instructions: [
      "Stand with your feet shoulder-width apart and your arms extended straight up overhead.",
      "Engage your core and twist your torso to the right, bringing your arms down and across your body.",
      "Return to the starting position and twist your torso to the left, again bringing your arms down and across your body.",
      "Continue alternating sides for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/5mOWjP0g1BPCGh",
    id: "3208",
    name: "backward bent knee legs",
    target: "abs",
    secondaryMuscles: [
      "hip flexors"
    ],
    instructions: [
      "Lie flat on your back with your arms extended straight up overhead.",
      "Bend your knees and lift your legs towards your chest, keeping them bent at a 90-degree angle.",
      "Slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/4aQ9fA-GC8N4-9",
    id: "1503",
    name: "backward leg swing",
    target: "hamstrings",
    secondaryMuscles: [
      "glutes"
    ],
    instructions: [
      "Stand facing a wall or sturdy object for balance.",
      "Shift your weight onto one leg and hinge forward slightly at the hips.",
      "Keeping your back straight and core engaged, swing your opposite leg backward as far as comfortably possible.",
      "Slowly return to the starting position and repeat the movement on the same leg for the desired number of repetitions.",
      "Switch legs and repeat."
    ]
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/OLlzxoN0tH59FO",
    id: "1507",
    name: "backward lunge",
    target: "quadriceps",
    secondaryMuscles: [
      "hamstrings",
      "glutes"
    ],
    instructions: [
      "Stand with your feet hip-width apart and your hands on your hips.",
      "Step back with your right foot, landing on the ball of your foot.",
      "Lower your body by bending both knees until your left thigh is parallel to the ground.",
      "Pause for a moment, then push through your left heel to return to the starting position.",
      "Repeat on the other side, stepping back with your left foot.",
      "Continue alternating sides for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/pah7Elm3KBqo1F",
    id: "2295",
    name: "backward push up",
    target: "rhomboids",
    secondaryMuscles: [
      "triceps",
      "biceps"
    ],
    instructions: [
      "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
      "Walk your hands backward until they are slightly behind your shoulders.",
      "Lower your body towards the ground by bending your elbows, keeping your back straight.",
      "Push back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/vUxWwNtCO0RSHu",
    id: "3196",
    name: "backward push up leg extension",
    target: "pectorals",
    secondaryMuscles: [
      "triceps",
      "core"
    ],
    instructions: [
      "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
      "Walk your hands backward until they are slightly behind your shoulders.",
      "Bend your elbows and lower your body towards the ground.",
      "Push back up to the starting position and extend one leg straight out behind you.",
      "Return to the starting position and repeat with the opposite leg.",
      "Continue alternating legs for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/rJQSL2kf_K-hBf",
    id: "3194",
    name: "backward shoulder stretch",
    target: "deltoids",
    secondaryMuscles: [
      "triceps"
    ],
    instructions: [
      "Stand with your feet shoulder-width apart and your arms extended straight out behind you at shoulder height.",
      "Cross your right arm over your left arm at the elbows, wrapping them around each other.",
      "Slowly lift your elbows towards the ceiling until you feel a stretch in your shoulders.",
      "Hold this position for 20-30 seconds.",
      "Release the stretch and repeat on the other side."
    ]
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/63ygnR7X31sl9C",
    id: "3195",
    name: "backward shoulder-to-floor stretch",
    target: "hamstrings",
    secondaryMuscles: [
      "calves"
    ],
    instructions: [
      "Sit on the ground with your legs extended straight out in front of you.",
      "Lean back slightly and place your hands on the ground behind you for support.",
      "Slowly walk your hands back as far as possible while keeping your legs straight.",
      "Hold this position for 20-30 seconds, feeling a stretch in your hamstrings and lower back.",
      "Slowly return to the starting position."
    ]
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/0I4opP6kz8S-NM",
    id: "3193",
    name: "backward standing leg extension",
    target: "quadriceps",
    secondaryMuscles: [
      "glutes",
      "calves"
    ],
    instructions: [
      "Stand with your feet shoulder-width apart and your hands on your hips.",
      "Shift your weight onto your right leg and lift your left foot off the ground, bending your knee.",
      "Extend your left leg straight out behind you, squeezing your quadriceps at the top of the movement.",
      "Slowly lower your left leg back down to the starting position.",
      "Repeat for the desired number of repetitions, then switch legs."
    ]
  },
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IoqoqZFYWWmsFS",
    id: "3198",
    name: "backward supine push up",
    target: "pectorals",
    secondaryMuscles: [
      "triceps",
      "core"
    ],
    instructions: [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Place your hands on the ground by your sides, palms facing down and fingertips pointing towards your feet.",
      "Engage your chest and push through your palms to lift your upper body off the ground, keeping your head and shoulders on the mat.",
      "Pause for a moment at the top, then lower yourself back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/sOPbtq5RzDqsdA",
    id: "3192",
    name: "backward torso twist",
    target: "obliques",
    secondaryMuscles: [
      "abs"
    ],
    instructions: [
      "Stand with your feet shoulder-width apart and your arms extended straight out in front of you at shoulder height.",
      "Engage your core and twist your torso to the right, bringing your arms across your body.",
      "Return to the starting position and twist your torso to the left, again bringing your arms across your body.",
      "Continue alternating sides for the desired number of repetitions."
    ]
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/xP7x3rj5zDaWwW",
    id: "3199",
    name: "backward wide leg extension",
    target: "abs",
    secondaryMuscles: [
      "hip flexors"
    ],
    instructions: [
      "Lie flat on your back with your arms extended straight up overhead.",
      "Bend your knees and lift your legs towards your chest, keeping them wide apart.",
      "Slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  }
]



export default testData