export type ProjectType = {
    datetime: string;
    title: string;
    shorttitle: string;
    images: string[];
    description: string;
    url: string | null;
    code_url: string | null;
    links: string[];
    features: string[];
    tech: string[];
    category: string;
}

export const projects: ProjectType[] = [
    {
        "datetime": "2023-08-01",
        "title": "CBee.AI",
        "shorttitle": "cbee",
        "images": ["/project-images/cbee/1.jpg", "/project-images/cbee/2.jpg", "/project-images/cbee/3.jpg", "/project-images/cbee/4.jpg", "/project-images/cbee/5.jpg", "/project-images/cbee/6.jpg"],
        "description": "CBee.ai is a webApp giving users access to Generative AI tools for Digital Marketers with features such as Text to Video, URL To Video, Google Drive video suggestions, video customisations and more, pioneering the field of automated portrait style social media video generation.\nThis webApp has been handed over and is currently being maintained by the CBee.ai team after its successful launch.",
        "url": "https://cbee.ai",
        "code_url": null,
        "links": [],
        "features": ["SEO Optimised", "Generative AI used to generate videos", "Highly customisable videos from the designs to the script"],
        "tech": ["React", "Python", "FastAPI", "GPT-3.5 API", "Azure Cognitive Services", "Azure Speech Services", "AWS S3 API", "Nginx", "Linux"],
        "category": "Website"
    },
    {
        "datetime": "2024-01-01",
        "title": "Employee Conversational Training Module",
        "shorttitle": "traj",
        "images": ["/project-images/traj/1.jpg", "/project-images/traj/2.jpg"],
        "description": "This module was built as an improvement to the existing training process for new employees. The module is a chatbot that GUIdes the user through the training process through a hands on scenario conversation. It utilises the GPT-3.5 API to add highly sophisticated language processing and accurate scoring. The module is built to be highly configurable, allowing the admin to add, edit and delete questions and answers as needed.",
        "url": null,
        "code_url": null,
        "links": [],
        "features": ["Text to Speech", "Conversational and friendly interface", "Ability to add, edit and delete roleplays", "Completely integrated with existing MCQ infrastructure allowing for ease of adoption"],
        "tech": ["HTML", "CSS", "JavaScript", "Python", "Flask", "GPT-3.5 API", "MySQL"],
        "category": "Website"
    },
    {
        "datetime": "2022-09-01",
        "title": "Cleaning Supervision Module",
        "shorttitle": "dm",
        "images": ["/project-images/dm/1.jpg", "/project-images/dm/2.jpg", "/project-images/dm/3.jpg", "/project-images/dm/4.jpg"],
        "description": "This site was built for cleaning supervisors to use during their regular Cleaning contract with Dubai Municipality for various locations around Dubai. The site streamlines the process, giving supervisors an efficient way to record data and gives superiors an automated method to generate reports and oversee day to day operations easily.\nFulfilling the need to digitise a manual system, reducing data entry work massively and saving the company precious time.",
        "url": null,
        "code_url": null,
        "links": [],
        "features": ["Checklist Management", "Geotagging and timestamping checklist entries", "Highly configurable settings that allow administrators to add, edit and delete users, roles and locations", "Exporting the reports in excel in different necessary formats."],
        "tech": ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"],
        "category": "Website"
    },
    {
        "datetime": "2022-07-01",
        "title": "Prime FM Company Website",
        "shorttitle": "pfm-homepage",
        "images": ["/project-images/homepage/1.jpg", "/project-images/homepage/2.jpg", "/project-images/homepage/3.jpg"],
        "description": "This site was built for a new emerging FM company, the site quickly took first ranking in a google search for the terms \"Prime FM UAE\" and \"Prime FM\" due to excellent SEO optimisation. The site also features an Admin panel where the site owner can add his own updates to the site.",
        "url": "https://www.primefm-me.com",
        "code_url": null,
        "links": [],
        "features": ["SEO Optimised", "Google Captcha for forms", "Admin Panel"],
        "tech": ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"],
        "category": "Website"
    },
    {
        "datetime": "2022-08-01",
        "title": "Solar Panel Maintenance Module",
        "shorttitle": "solar",
        "images": ["/project-images/solar/1.jpg", "/project-images/solar/2.jpg", "/project-images/solar/3.jpg"],
        "description": "This site was built for maintenance employees to use during Solar panel maintence for villas. The company using this site received a contract from DEWA for 100+ villas and is seeking more. The site streamlines the process, giving employees an efficient way to record data and gives supervisors a smooth review process.\nHence digitising a system that would traditionally be manually written and transferred to excel. Reducing data entry work massively and saving the company precious time.",
        "url": null,
        "code_url": null,
        "links": [],
        "features": ["Simultaneous work order creation", "Pick up where you left off in the form (autosaving)", "Geotagging and timestamping images", "Taking and recording CLIent signature", "Exporting the reports in excel, including images", "Manage different view, edit, create permissions for different account types (Supervisors, Employees, CLIents)"],
        "tech": ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"],
        "category": "Website"
    },
    {
        "datetime": "2024-01-01",
        "title": "Building Checklist Module",
        "shorttitle": "building",
        "images": ["/project-images/building/1.jpg", "/project-images/building/2.jpg", "/project-images/building/3.jpg", "/project-images/building/4.jpg", "/project-images/building/5.jpg"],
        "description": "This site was built for maintenance employees to use during their daily checks on Building equipment in large buildings. It is currently in daily use on the field. It elminates the need to carry around a printed notepad checklist, and enables the ability to instantly generate reports and check daily work status. The data can also be filtered to build custom reports based on the need of the hour.\nThe Daily checklists are highly customisable, forms, buildings, units and categories can be added and removed as simply as adding or deleting a row/column from the database.",
        "url": null,
        "code_url": null,
        "links": [],
        "features": ["Daily Checklist creation for various properties", "Shows the list of units in the building per checklist", "Allows admins to generate and export (to excel) reports as needed (with filters)", "Option to view daily progress (Completed, ongoing, incomplete)", "Can easily add, remove or edit forms, units and buldings as needed with no changes in the API and frontend code.", "Manage different view, edit, create permissions for different account types (Supervisors, Employees)."],
        "tech": ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"],
        "category": "Website"
    },
    {
        "datetime": "2023-11-01",
        "title": "CIIED Website",
        "shorttitle": "ciiedpage",
        "images": ["/project-images/ciiedpage/1.jpg", "/project-images/ciiedpage/2.jpg", "/project-images/ciiedpage/3.jpg"],
        "description": "CIIED is the Centre for Incubation, Innovation & Entrepreneurship, Dubai, for BITS Pilani, Dubai Campus. As CIIED's Web Developer I built the Website, and I maintain and update it's content. I have made adding events (the most frequently updated part of the site) into a simple task by automating it with a JSON file.",
        "url": "https://ciied.netlify.App/",
        "code_url": null,
        "links": [],
        "features": ["SEO Optimised", "JSON Automation for quick and easy updation", "Clean and simple Design"],
        "tech": ["HTML", "CSS", "JavaScript"],
        "category": "Website"
    },
    {
        "datetime": "2023-12-01",
        "title": "Emissions Tracker",
        "shorttitle": "emissions",
        "images": ["/project-images/emissions/1.jpg", "/project-images/emissions/2.jpg", "/project-images/emissions/3.jpg"],
        "description": "It is a Carbon Emissions Tracker, as global warming intensifies and the threat grows larger, this Website serves as a great source of awareness, you can use it to keep track of your emissions, use the search bar to find a source of emissions and add it to your record. It may suprise users to know how large the emissions are even for simple tasks.",
        "url": "https://emissiontracker.netlify.App",
        "code_url": "https://github.com/Fir121/Carbon-Footprint-Tracker",
        "links": [],
        "features": [],
        "tech": ["HTML", "CSS", "JavaScript"],
        "category": "Website"
    },
    {
        "datetime": "2021-08-01",
        "title": "StreamGrounds",
        "shorttitle": "streamgrounds",
        "images": ["/project-images/streamgrounds/1.jpg", "/project-images/streamgrounds/2.jpg", "/project-images/streamgrounds/3.jpg", "/project-images/streamgrounds/4.jpg"],
        "description": "At StreamGrounds users can download torrents and store them, so they can watch them from any device just like NETFLIX (but without content limitations ;).\nUser accounts are linked to my service called TheGrounds with sign ups based on a referral system.\nScreenshots show a sample torrent of a public domain Charlie Chaplin movie torrent.\nCurrently the Website deletes movies after 14 days to save space since my home server (RPi 4) is limited.",
        "url": "https://thegrounds.pythonanywhere.com/streamgrounds",
        "code_url": null,
        "links": [],
        "features": ["Intuitive workflow", "Downloads sharing between users to eliminate initial download time", "Pick Up where you left off watching"],
        "tech": ["HTML", "CSS", "JavaScript", "Python", "Bash", "Flask", "Raspberry Pi", "Ngrok", "Nginx", "Linux"],
        "category": "Website"
    },
    {
        "datetime": "2021-09-01",
        "title": "FairGrounds",
        "shorttitle": "fairgrounds",
        "images": ["/project-images/fairgrounds/1.jpg", "/project-images/fairgrounds/2.jpg", "/project-images/fairgrounds/3.jpg", "/project-images/fairgrounds/4.jpg"],
        "description": "FairGrounds allows users to upload and share files with just a link. I built it based on the WeTransfer concept, but WeTransfer deletes the files after a week or so, FairGrounds has no such limitation.\nFairGrounds works amazingly fast for small to medium files, but due to server limitations big files may be slow.",
        "url": "https://thegrounds.pythonanywhere.com/fairgrounds",
        "code_url": null,
        "features": ["Automatic emails can be sent for sharing", "Links never expire", "Can send any file types, to combined sizes as large as 10GB"],
        "links": [],
        "tech": ["HTML", "CSS", "JavaScript", "Python", "Bash", "Flask", "Raspberry Pi", "Ngrok", "Nginx", "Linux"],
        "category": "Website"
    },
    {
        "datetime": "2021-12-01",
        "title": "Social",
        "shorttitle": "social",
        "images": ["/project-images/social/1.jpg", "/project-images/social/2.jpg", "/project-images/social/3.jpg"],
        "description": "Social is a fully functioning prototype for a truly Social, Social Network, basically a social Network where people can help their community.",
        "url": "https://thesocialnetwork.netlify.App/#/",
        "code_url": "https://github.com/Fir121/Social",
        "links": ["https://medium.com/@f20210116/journey-to-social-a-truly-social-social-network-fb17e6452d7f", "https://youtu.be/E62ho-K_emY"],
        "features": ["Sign Up, Log In", "A working posts feed and comments section", "Lists of volunteering opportunities and ability to \"volunteer now\""],
        "tech": ["Flutter", "Dart", "Flask", "Postman", "MySQL"],
        "category": "Website"
    },
    {
        "datetime": "2021-01-01",
        "title": "PharmaChain",
        "shorttitle": "pharmachain",
        "images": ["/project-images/pharmachain/1.jpg", "/project-images/pharmachain/2.jpg", "/project-images/pharmachain/3.jpg"],
        "description": "PharmaChain is a prototype of a mobile Application that allows you to order medicines with full transparency, and reliability.\nPharmaChain uses Blockchain technology to provide complete tracking and security over the entire process. It also keeps track of temperature and expiry conditions for pharmaceuticals and uses a smart contract to take action if needed.\nPharmaChain was a finalist at the Technocare E-Cell MUJ Hackathon.",
        "url": "https://pharmachain.pythonanywhere.com/",
        "code_url": null,
        "links": ["https://www.youtube.com/watch?v=TC9nzvURWAs"],
        "features": ["Blockchain based data storage for reliability in the supply chain", "Fully functioning order cart, checkout system", "Ability to add prescriptions and automate orders"],
        "tech": ["Flutter", "Dart", "Flask", "Blockchain"],
        "category": "App"
    },
    {
        "datetime": "2021-02-01",
        "title": "Scooty",
        "shorttitle": "scooty",
        "images": ["/project-images/scooty/1.jpg"],
        "description": "Scooty was an App built to solve an RTA (Roads and Transport Authority) Dubai problem with e-scooters.\nThe App promotes safe e-scooter driving, it can issue training and subsequently licenses. \nIt allows users to gain points for their rides based on their safety score.\nAdditionally, the prototype has a working computer vision helmet detection system.\nScooty won first place at the RTA Public Transport Hackathon 2022.",
        "url": null,
        "code_url": null,
        "links": ["https://drive.google.com/file/d/1h9Y0J2fnoCHTXmxT2g-JgtL-QE34j3eV/view?usp=sharing"],
        "features": [],
        "tech": ["Figma", "Python", "Ionic"],
        "category": "App"
    },
    {
        "datetime": "2020-01-01",
        "title": "TheUnderGround",
        "shorttitle": "theunderground",
        "images": ["/project-images/theunderground/1.jpg", "/project-images/theunderground/2.jpg", "/project-images/theunderground/3.jpg"],
        "description": "When WhatsApp changed their privacy features back in the peak of lockdown I took it personally, I took it upon myself to build an alternative for me and my friends which lead to the development of TheUnderGround, the first CLI software of TheGrounds. \nOver time it has developed several features. Initially it was a very basic software, with hit enter to update messages and http get based messaging, but later I hosted a python server in my raspberry pi 4 and using TCP sockets achieved real time messaging additionally, using a multithreading Approach I was able to achieve a CLI curses style input so messages can be printed at the same time as input was entered. \nTheUnderGround gave me a much deeper understanding of messaging, data encryption, and account management.",
        "url": "https://thegrounds.pythonanywhere.com/theunderground",
        "code_url": null,
        "links": [],
        "features": ["Real-time messaging", "Can send text, images, and audio", "Fun features such as funky, self-deleting, autocorrected messages, dad jokes etc", "Settings bar with several options: skins, message updates, initialisation settings etc", "Full Privacy!"],
        "tech": ["Python", "Flask", "MySQL", "Raspberry Pi"],
        "category": "CLI"
    },
    {
        "datetime": "2020-02-01",
        "title": "TheAboveGround",
        "shorttitle": "theaboveground",
        "images": ["/project-images/theaboveground/1.jpg", "/project-images/theaboveground/2.jpg", "/project-images/theaboveground/3.jpg"],
        "description": "TheAboveGround too was created in response to a rumoured privacy infringement during the pandemic, it is a CLI voice chatting software, since it’s so lightweight it’s great to use to chat with friends while gaming, multi-tasking or even just for casual chatting. \nIt can handle up to 10 people or more concurrently in a call, limited only due to sever bandwidth, server being a Raspberry Pi 4 at home, Additionally, people can text chat during the call. \nThis project was great to learn about UDP sockets, implemented with python.",
        "url": "https://thegrounds.pythonanywhere.com/theaboveground",
        "code_url": null,
        "links": [],
        "features": ["Real-time voice calls with several people", "Fully encrypted data over a UDP socket", "Very Lightweight yet still performs the same as Other voice chatting software such as zoom/google meet"],
        "tech": ["Python", "Raspberry Pi"],
        "category": "CLI"
    },
    {
        "datetime": "2020-03-01",
        "title": "TheMusicGround",
        "shorttitle": "themusicground",
        "images": ["/project-images/themusicground/1.jpg", "/project-images/themusicground/2.jpg", "/project-images/themusicground/3.jpg", "/project-images/themusicground/4.jpg"],
        "description": "TheMusicGround as the name suggests is a CLI software to listen to music (makes use of YouTube as a source). \nIt takes the help of several different music-based API’s to facilitate it’s many features. The python-vlc module helps in playing the audio seamlessly.",
        "url": "https://thegrounds.pythonanywhere.com/themusicground",
        "code_url": null,
        "links": [],
        "features": ["Search by Song, Artists, and Lyrics", "Custom Playlists based on your listening preferences", "Songs can be downloaded for offline mode", "Podcasts are available", "Web Radio stations are available from 100+ countries", "Shazam API allows for song recognition", "User Playlists can be shared", "Also has strong error handling and an error logger to catch the inevitable bugs for later debugging."],
        "tech": ["Python", "VLC", "FFmpeg", "Flask", "MySQL"],
        "category": "CLI"
    },
    {
        "datetime": "2023-06-01",
        "title": "Academic Planner",
        "shorttitle": "acplanner",
        "images": ["/project-images/acplanner/1.jpg", "/project-images/acplanner/2.jpg", "/project-images/acplanner/3.jpg", "/project-images/acplanner/4.jpg"],
        "description": "Students have very tight schedules, they are required to deal with multiple deadlines, exams, attendance criteria etc., due to this burden it is difficult for students to plan their Academics and still strike an optimal balance. The purpose of this project was to introduce an innovative solution that would combat this issue – An Academic Planner. Students may keep track of their courses, events, holidays, attendances, and grades over the course of a semester.\nBuilt with Java, with BPDC students in mind.",
        "url": null,
        "code_url": "https://github.com/Fir121/Academic_Planner",
        "links": [],
        "features": [],
        "tech": ["Java", "Java Swing"],
        "category": "GUI"
    },
    {
        "datetime": "2021-06-01",
        "title": "Currency Rates Tracker",
        "shorttitle": "currency",
        "images": ["/project-images/currency/1.jpg", "/project-images/currency/2.jpg", "/project-images/currency/3.jpg", "/project-images/currency/4.jpg"],
        "description": "Allows user to Track and visualise data of several currency types, from conversion to charts and live price updates.\nWon Second place at the Curtin Dubai Writing and Hackathon Competition 2021",
        "url": null,
        "code_url": null,
        "links": [],
        "features": [],
        "tech": ["Python", "Tkinter"],
        "category": "GUI"
    },
    {
        "datetime": "2020-06-01",
        "title": "Universal Converter",
        "shorttitle": "converter",
        "images": ["/project-images/converter/1.jpg", "/project-images/converter/2.jpg", "/project-images/converter/3.jpg"],
        "description": "Allows user to convert between several different units, under categories of Mass, Length, Speed, Temperature, Currency and Date.\nWon Third place at the Curtin Dubai Writing and Hackathon Competition 2020",
        "url": null,
        "code_url": "https://github.com/Fir121/Currency-Converter",
        "links": [],
        "features": [],
        "tech": ["Python", "Tkinter"],
        "category": "GUI"
    },
    {
        "datetime": "2020-08-01",
        "title": "Bank Account Manager",
        "shorttitle": "bank",
        "images": ["/project-images/bank/1.jpg", "/project-images/bank/2.jpg"],
        "description": "Users can manage their bank accounts, built with a MySQL connector, with basic encryption. For a school project.",
        "url": null,
        "code_url": null,
        "links": ["https://drive.google.com/file/d/1a_2T5aAfdFM6rzfHIdzLDwcqpsLLa7OX/view?usp=sharing"],
        "features": [],
        "tech": ["Python", "Tkinter"],
        "category": "GUI"
    },
    {
        "datetime": "2021-04-01",
        "title": "Contract Maker",
        "shorttitle": "contract",
        "images": ["/project-images/contract/1.jpg", "/project-images/contract/2.jpg"],
        "description": "Contract Maker is a telegram bot built to help a relative manage their property renting needs.\nThis bot was custom built so the user could generate contracts with a simple chatbot instead of a long process of manually entering all the data for each new tenant. \nAdditionally, the bot generates monthly income reports and sends a reminder a few weeks before each renewal via email.\nThis program has reduced time spent on contract creation by nearly 90% which is a testament to automation and it’s benefits.",
        "url": null,
        "code_url": null,
        "links": [],
        "features": ["Automatically calculates the ending date of the contract", "User can view any existing contracts as a pdf or a word file", "Photo scan feature allows the user to send a screenshot of the tenants aadhar/Other and the bot extracts the information"],
        "tech": ["Python", "Raspberry Pi", "Chatbot"],
        "category": "Other"
    },
    {
        "datetime": "2021-04-01",
        "title": "Test Reminder Bot",
        "shorttitle": "bits",
        "images": ["/project-images/bits/1.jpg"],
        "description": "I built bits test to remind me of upcoming quizzes, tests or assignments.\nBits_test bot allows me to add/delete courses and later view upcoming components.\nAdditionally it sends me an email a few days before any upcoming component.",
        "url": null,
        "code_url": null,
        "links": [],
        "features": [],
        "tech": ["Python", "Raspberry Pi", "Chatbot"],
        "category": "Other"
    },
]