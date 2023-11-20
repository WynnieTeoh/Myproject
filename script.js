

let currentStoryIndex = 0;

    const storyData = [
      {
        //text 0
        text: "Let's test if you are truly Mable's friend",
        imageSrc: 'Myproject/img01.png',
        choices: [
          { text: "Okay, Let's do it!", nextIndex: 1 },
          { text: "No, I don't want", nextIndex: 2 }
        ]
      },
      {
        //text 1
        text: "Mable says: Aww~ I knew you care about me.",
        imageSrc: 'img02.png',
        choices: [
          { text: "Why do you look bit upset today?", nextIndex: 3 },
          { text: "Do you know you have resting-bitch face?", nextIndex: 4 }
        ]
      },
      {
        //text 2
        text: "Wahhh Cheebai.. You asshole.",
        imageSrc: 'img03.png',
        choices: [
          { text: "Nahh~ I'm just kidding! Of course I'm your friend!", nextIndex: 5 },
          { text: "That makes the two of us.", nextIndex: 6 }
        ]
      },
      {
        //text 3
        text: "There are just too many things happened at once and I don't feel like talking about it now.",
        imageSrc: 'img04.png',
        choices: [
          { text: "Mahai! Tell me now! ", nextIndex: 7 },
          { text: "It's okay, you can tell me when you need someone to talk to.", nextIndex: 9 }
        ]
      },
      {
        //text 4
        text: "Do you know you have lanchao mouth?",
        imageSrc: 'img05.png',
        choices: [
          { text: "Woahh! Why you are so offensive today?", nextIndex: 5 },
          { text: "You have pet pet eyes!", nextIndex: 6 }
        ]
      },
      {
        //text 5
        text: "*sigh* I'm just not in the mood today",
        imageSrc: 'img06.png',
        choices: [
          { text: "Wookay! Let me grab my popcorn.", nextIndex: 3 },
          { text: "Do you want to talk about it?", nextIndex: 7 }
        ]
      },
      {
        //text 6
        text: "You know what? I don't want to talk to you anymore. Bye!",
        imageSrc: 'img07.png',
        choices: [
          { text: "Wait wait wait! I'm just kidding! Don't be mad.", nextIndex: 5 },
          { text: "Okay Bye.", nextIndex: 8 }
        ]
      },
      {
        //text 7
        text: "There are so many things I want to do, but so little time and I'm getting sleep deprivation.",
        imageSrc: 'img08.png',
        choices: [
          { text: "Go to sleep now!.", nextIndex: 11 },
          { text: "I sleep less than 2 hours a day", nextIndex: 12 }
        ]
      },
      {
        //text 8
        text: "*Mable walks away* Congratulations, you are a horrible friend. Mable hates you.",
        imageSrc: 'img09.png',
        choices: []
    
      },
      {
        //text 9
        text: "Aww~ Thank you. I'm glad I have a friend like you.",
        imageSrc: 'img10.png',
        choices: [
          { text: "I'm joking, you can go fuck yourself.", nextIndex: 2 },
          { text: "No worries! You can count on me", nextIndex: 10 }
        ]
      },
      {
        //text 10
        text: "You are Mable's acquaintance.",
        imageSrc: 'img11.png',
        choices: []
    
      },
      {
        //text 11
        text: "Wahh! Ordering me what to do. You think you're my dad?",
        imageSrc: 'img12.png',
        choices: [
          { text: "You say you got not enough sleep ma, then go to sleep lah!", nextIndex: 13 },
          { text: "What are the things that stop you from getting more sleep?", nextIndex: 14 }
        ]
      },
      {
        //text 12
        text: "Are you even alive? I don't think I can do that",
        imageSrc: 'img13.png',
        choices: [
          { text: "No, I'm dead. I'm a ghost haunting you now.", nextIndex: 15 },
          { text: "I'm joking, I think you need to improve your time management", nextIndex: 16 }
        ]
      },
      {
        //text 13
        text: "I can't! There are so many things I need to do!.",
        imageSrc: 'img14.png',
        choices: [
          { text: "Do what?", nextIndex: 14 },
          { text: "Fuck those things! Sleep is more important!", nextIndex: 15 }
        ]
      },
      {
        //text 14
        text: "My job, Freelance, my side business, housechores and entertainment.",
        imageSrc: 'img15.png',
        choices: [
          { text: "Just try to manage your time well", nextIndex: 16 },
          { text: "Aiyoh, then how ah?", nextIndex: 17 }
        ]
      },
      {
        //text 15
        text: "Fuck you lah! I don't want to talk to you anymore *Mable walks off* You are a horrible friend to Mable.",
        imageSrc: 'img16.png',
        choices: []
      },
      {
        //text 16
        text: "It's easier said than done.",
        imageSrc: 'img17.png',
        choices: [
          { text: "It's okay! If you think you can! You can!", nextIndex: 18 },
          { text: "Just fuck everything! YOLO and live the life you want!", nextIndex: 19 }
        ]
      },
      {
        //text 17
        text: "I wish I know how.",
        imageSrc: 'img18.png',
        choices: [
          { text: "You go to sleep now, maybe you will get the answer in your dream.", nextIndex: 18 },
          { text: "I believe you will figure out someday", nextIndex: 18 }
        ]
      },
      {
        //text 18
        text: "Thank you. I feel much better now *Mable smiles* You are a good friend to Mable",
        imageSrc: 'img19.png',
        choices: []
      },
      {
        //text 19
        text: "*Mable is speechless* You are a weird friend to Mable",
        imageSrc: 'img20.png',
        choices: []
      },

      // Add more story elements as needed
    ];

    function makeChoice(choiceIndex) {
        const choice = storyData[currentStoryIndex].choices[choiceIndex - 1];
      
        if (choice) {
          currentStoryIndex = choice.nextIndex;
          updateStory();
        }
      }
      
      function updateStory() {
        const storyElement = document.getElementById('story');
        const buttonContainer = document.getElementById('button-container');
        const storyImage = document.getElementById('story-image');
      
        storyElement.textContent = storyData[currentStoryIndex].text;
        storyImage.src = storyData[currentStoryIndex].imageSrc;
      
        // Clear existing buttons
        buttonContainer.innerHTML = '';
      
        // Create new buttons based on choices
        storyData[currentStoryIndex].choices.forEach((choice, index) => {
          const button = document.createElement('button');
          button.textContent = choice.text;
          button.onclick = () => makeChoice(index + 1);
          buttonContainer.appendChild(button);
        });
      }
      
      // Initial rendering of the story
      updateStory();
