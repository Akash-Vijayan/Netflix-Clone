// Mock data for Netflix clone
const heroMovie = {
    id: 1,
    title: "Stranger Things",
    overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    backdrop: "./Images/Top/strangerthings.jpg",
    poster: "./Images/Top/strangerthings.jpg",
    rating: "TV-14",
    year: "2016",
    genre: "Sci-Fi Drama",
    match: "97",
    cast: "Millie Bobby Brown, Finn Wolfhard, David Harbour",
    genres: "Sci-Fi TV Shows, Horror TV Shows, Teen TV Shows",
    tags: "Supernatural, Mysterious, Dark"
};

const trendingNow = [
    {
        id: 2,
        title: "The Crown",
        poster: "./Images/Trending/TheCrown.jpg",
        backdrop: "./Images/Trending/TheCrown.jpg",
        rating: "TV-MA",
        year: "2016",
        match: "94",
        overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
        cast: "Claire Foy, Olivia Colman, Helena Bonham Carter",
        genres: "Period Dramas, British TV Shows, Biographical Dramas"
    },
    {
        id: 3,
        title: "Money Heist",
        poster: "./Images/Trending/MoneyHeist.jpg",
        backdrop: "./Images/Trending/MoneyHeist.jpg",
        rating: "TV-MA",
        year: "2017",
        match: "96",
        overview: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
        cast: "Úrsula Corberó, Álvaro Morte, Itziar Ituño",
        genres: "Crime TV Shows, Spanish-Language TV Shows, Thrillers"
    },
    {
        id: 4,
        title: "The Witcher",
        poster: "./Images/Trending/TheWitcher.jpg",
        backdrop: "./Images/Trending/TheWitcher.jpg",
        rating: "TV-MA",
        year: "2019",
        match: "91",
        overview: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        cast: "Henry Cavill, Anya Chalotra, Freya Allan",
        genres: "Fantasy TV Shows, Adventure TV Shows, Action & Adventure"
    },
    {
        id: 5,
        title: "Bridgerton",
        poster: "./Images/Trending/Bridgerton.jpg",
        backdrop: "./Images/Trending/Bridgerton.jpg",
        rating: "TV-MA",
        year: "2020",
        match: "89",
        overview: "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
        cast: "Nicola Coughlan, Jonathan Bailey, Simone Ashley",
        genres: "Period Dramas, Romance TV Shows, British TV Shows"
    },
    {
        id: 6,
        title: "Squid Game",
        poster: "./Images/Trending/SquidGame.jpg",
        backdrop: "./Images/Trending/SquidGame.jpg",
        rating: "TV-MA",
        year: "2021",
        match: "95",
        overview: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize.",
        cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-jun",
        genres: "Korean TV Shows, Thrillers, Survival Horror"
    }
];

const netflixOriginals = [
    {
        id: 7,
        title: "House of Cards",
        poster: "../Images/NetflixOriginals/HouseofCards.jpg",
        backdrop: "../Images/NetflixOriginals/HouseofCards.jpg",
        rating: "TV-MA",
        year: "2013",
        match: "92",
        overview: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
        cast: "Kevin Spacey, Robin Wright, Michael Kelly",
        genres: "Political Dramas, TV Dramas, US TV Shows"
    },
    {
        id: 8,
        title: "Orange Is the New Black",
        poster: "../Images/NetflixOriginals/OrangeIsTheNewBlack.jpg",
        backdrop: "../Images/NetflixOriginals/OrangeIsTheNewBlack.jpg",
        rating: "TV-MA",
        year: "2013",
        match: "88",
        overview: "A privileged New Yorker ends up in a women's federal prison when her past catches up with her in this Emmy-winning series.",
        cast: "Taylor Schilling, Kate Mulgrew, Laura Prepon",
        genres: "TV Comedies, TV Dramas, Crime TV Shows"
    },
    {
        id: 9,
        title: "Ozark",
        poster: "../Images/NetflixOriginals/Ozark.jpg",
        backdrop: "../Images/NetflixOriginals/Ozark.jpg",
        rating: "TV-MA",
        year: "2017",
        match: "93",
        overview: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
        cast: "Jason Bateman, Laura Linney, Sofia Hublitz",
        genres: "Crime TV Shows, TV Dramas, TV Thrillers"
    },
    {
        id: 10,
        title: "The Umbrella Academy",
        poster: "../Images/NetflixOriginals/TheUmbrellaAcademy.jpg",
        backdrop: "../Images/NetflixOriginals/TheUmbrellaAcademy.jpg",
        rating: "TV-14",
        year: "2019",
        match: "87",
        overview: "A dysfunctional family of superheroes comes together to solve the mystery of their father's death.",
        cast: "Elliot Page, Tom Hopper, David Castañeda",
        genres: "TV Shows Based on Comics, TV Sci-Fi & Fantasy, TV Action & Adventure"
    },
    {
        id: 11,
        title: "Dark",
        poster: "../Images/NetflixOriginals/Dark.jpg",
        backdrop: "../Images/NetflixOriginals/Dark.jpg",
        rating: "TV-MA",
        year: "2017",
        match: "96",
        overview: "A missing child causes four families to help each other for answers and force them to enter a time loop.",
        cast: "Louis Hofmann, Oliver Masucci, Jördis Triebel",
        genres: "German TV Shows, TV Mysteries, TV Sci-Fi & Fantasy"
    }
];

const actionMovies = [
    {
        id: 12,
        title: "Extraction",
        poster: "../Images/ActionMovies/Extraction.jpg",
        backdrop: "../Images/ActionMovies/Extraction.jpg",
        rating: "R",
        year: "2020",
        match: "89",
        overview: "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent to Bangladesh to rescue a drug lord's kidnapped son.",
        cast: "Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda",
        genres: "Action & Adventure, Crime Movies, Thrillers"
    },
    {
        id: 13,
        title: "The Old Guard",
        poster: "../Images/ActionMovies/TheOldGuard.jpg",
        backdrop: "../Images/ActionMovies/TheOldGuard.jpg",
        rating: "R",
        year: "2020",
        match: "84",
        overview: "A covert team of immortal mercenaries are suddenly exposed and must now fight to keep their identity a secret.",
        cast: "Charlize Theron, KiKi Layne, Matthias Schoenaerts",
        genres: "Action & Adventure, Sci-Fi Movies, LGBTQ Movies"
    },
    {
        id: 14,
        title: "6 Underground",
        poster: "../Images/ActionMovies/6Underground.jpg",
        backdrop: "../Images/ActionMovies/6Underground.jpg",
        rating: "R",
        year: "2019",
        match: "78",
        overview: "After faking his death, a tech billionaire recruits a team of international operatives for a bold mission.",
        cast: "Ryan Reynolds, Mélanie Laurent, Manuel Garcia-Rulfo",
        genres: "Action & Adventure, Comedies, Thrillers"
    },
    {
        id: 15,
        title: "Bird Box",
        poster: "../Images/ActionMovies/BirdBox.jpg",
        backdrop: "../Images/ActionMovies/BirdBox.jpg",
        rating: "R",
        year: "2018",
        match: "82",
        overview: "Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid for safety.",
        cast: "Sandra Bullock, Trevante Rhodes, John Malkovich",
        genres: "Horror Movies, Sci-Fi Movies, Thrillers"
    },
    {
        id: 16,
        title: "Project Power",
        poster: "../Images/ActionMovies/ProjectPower.jpg",
        backdrop: "../Images/ActionMovies/ProjectPower.jpg",
        rating: "R",
        year: "2020",
        match: "85",
        overview: "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
        cast: "Jamie Foxx, Joseph Gordon-Levitt, Dominique Fishback",
        genres: "Action & Adventure, Sci-Fi Movies, Thrillers"
    }
];

const tamilMovies = [
  {
    id: 'pushpa',
    title: 'Pushpa: The Rise',
    backdrop: "../Images/TamilMovies/Puspha.jpg",
    poster: "./Images/TamilMovies/Puspha.jpg",
    description: "A laborer rises in the world of red sandalwood smuggling, fighting against powerful enemies.",
    year: 2021,
    rating: "UA",
    genre: "Action, Drama",
    cast: "Allu Arjun, Rashmika Mandanna, Fahadh Faasil"
  },
  {
    id: 'kgf2',
    title: 'KGF Chapter 2',
    backdrop: "../Images/TamilMovies/kgf2.jpg",
    poster: "../Images/TamilMovies/kgf2.jpg",
    description: "Rocky becomes the uplifter of people in KGF and must battle Adheera and powerful enemies for supremacy.",
    year: 2022,
    rating: "UA",
    genre: "Action, Drama",
    cast: "Yash, Sanjay Dutt, Raveena Tandon"
  },
  {
    id: 'kalki',
    title: 'Kalki 2898 AD',
    backdrop: "../images/TamilMovies/kalki.jpg",
    poster: "./images/TamilMovies/kalki.jpg",
    description: "A futuristic sci-fi film blending Indian mythology with a dystopian world.",
    year: 2024,
    rating: "UA",
    genre: "Sci-Fi, Action",
    cast: "Prabhas, Deepika Padukone, Amitabh Bachchan"
  },
  {
    id: 'coolie',
    title: 'Coolie',
    backdrop: "./images/TamilMovies/Coolie.jpg",
    poster: "./images/TamilMovies/Coolie.jpg",
    description: "Upcoming action film starring Rajinikanth, directed by Lokesh Kanagaraj.",
    year: 2025,
    rating: "UA",
    genre: "Action, Thriller",
    cast: "Rajinikanth"
  },
  {
    id: 'madharaasi',
    title: 'Madharaasi',
    backdrop: "./images/TamilMovies/Madharaasi.jpg",
    poster: "./images/TamilMovies/Madharaasi.jpg",
    description: "A Tamil film with strong emotional storytelling and action-packed sequences.",
    year: 2025,
    rating: "UA",
    genre: "Drama, Action",
    cast: "To Be Announced"
  }
];

const documentaries = [
    {
        id: 17,
        title: "My Octopus Teacher",
        poster: "../Images/Documentaries/MyOctopusTeacher.jpg",
        backdrop: "../Images/Documentaries/MyOctopusTeacher.jpg",
        rating: "G",
        year: "2020",
        match: "91",
        overview: "A filmmaker forges an unusual friendship with an octopus living in a South African kelp forest, learning as the animal shares the mysteries of her world.",
        cast: "Craig Foster",
        genres: "Documentaries, Science & Nature Docs, South African Movies"
    },
    {
        id: 18,
        title: "The Social Dilemma",
        poster: "../Images/Documentaries/TheSocialDilemma.jpg",
        backdrop: "../Images/Documentaries/TheSocialDilemma.jpg",
        rating: "PG-13",
        year: "2020",
        match: "88",
        overview: "Tech experts sound the alarm on their own creations as they expose how social media platforms manipulate users and spread disinformation.",
        cast: "Tristan Harris, Jeff Seibert, Bailey Richardson",
        genres: "Documentaries, Social & Cultural Docs, US Movies"
    },
    {
        id: 19,
        title: "American Factory",
        poster: "../Images/Documentaries/AmericanFactory.jpg",
        backdrop: "../Images/Documentaries/AmericanFactory.jpg",
        rating: "PG-13",
        year: "2019",
        match: "86",
        overview: "In post-industrial Ohio, a Chinese billionaire opens a new factory in the husk of an abandoned General Motors plant.",
        cast: "Bobby Davenport, Sherrod Brown, Dave Burrows",
        genres: "Documentaries, Social & Cultural Docs, US Movies"
    },
    {
    id: 'our-planet',
    title: 'Our Planet',
    backdrop: "../Images/Documentaries/OurPlanet.jpg",
    poster: "../Images/Documentaries/OurPlanet.jpg",
    description: "A documentary series exploring the natural world’s beauty and fragility, narrated by David Attenborough.",
    year: 2019,
    rating: "TV-G",
    genre: "Nature Documentary",
    cast: "David Attenborough"
  },
  {
    id: 'inside-job',
    title: 'Inside Job',
    backdrop: "../Images/Documentaries/InsideJob.jpg",
    poster: "../Images/Documentaries/InsideJob.jpg",
    description: "A documentary film that explores the systemic corruption of the United States by the financial services industry and the consequences of the 2008 global financial crisis.",
    year: 2010,
    rating: "PG-13",
    genre: "Finance Documentary",
    cast: "Matt Damon (Narrator)"
  }
    
];

// Make data globally available
window.movieData = {
    heroMovie,
    trendingNow,
    netflixOriginals,
    actionMovies,
    tamilMovies,
    documentaries
};