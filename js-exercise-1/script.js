const testimonials = [
    {
        name: "Godwin Dzvapatsva",
        imgURL: "https://i.postimg.cc/L5PRrDZF/godwin-2.jpg",
        position: "Head of curriculum and learning",
        description: "Monique is a pleasure to work with and contributes positively to the class through her communication prowess. Monique has demonstrated an aptitude for HTML, CSS & Bootstrap that has left me speechless. Monique is progressing at a very rapid pace."
    },
    {
        name: "Cassidy Manuel",
        imgURL: "https://i.postimg.cc/Y0djCbCG/cassidymanuel.jpg",
        position: "Colleague",
        description: "Monique is a confident, hardworking, respectable and fast learner. She is a team player but does well on her and she has an amazing personality."
    },
    {
        name: "Reagan Carolussen",
        imgURL: "https://i.postimg.cc/nzQ6zzVv/marshalinojankowski.jpg",
        position: "Colleague",
        description: "Monique is a talented individual. With great initiative, she works hard and strives to make the best work possible. I would highly recommend her to any team. Monique is a confident, hardworking, respectable and fast learner. She is a team player but does well on her and she has an amazing personality."
    },
    {
        name: "Shane Stevens",
        imgURL: "https://i.postimg.cc/JhjNzCVs/shanestevens.jpg",
        position: "Colleague",
        description: "Monique is a natural at developing and design. She is a cool, calm and collected when it comes to her work and her capabilities. I am sure that she is destined for greatness within the near future in every aspect of life."
    },
    {
        name: "Emile Van Wyk",
        imgURL: "https://i.postimg.cc/CK009bwW/emilevanwyk.jpg",
        position: "Colleague",
        description: "Monique: attentive, inquisitive, hardworking, passionate, these are a few words I can use to describe her. She is a diligent student who is always researching new ways of expeditiously completing her work out-putting professional-level projects which makes her a great addition to any team and definitely the first pick for me."
    },
    {
        name: "Marshalino Jankowski",
        imgURL: "https://i.postimg.cc/nzQ6zzVv/marshalinojankowski.jpg",
        position: "Colleague",
        description: "Monique is an outstanding individual with a presentable appearance that always finds time to wear a smile. Her work is outstanding and her reso lve even stronger, she will not stop until she has achieved everything she has set out to do whether it be in everyday life or in the workplace."
    }
];

const resume = [
    {
        logo: "https://i.postimg.cc/28w8mHKC/LCA.jpg",
        year: "2022",
        title: "Life Choices Academy",
        description: "My journey with Life Choices Academy and software developments begins.."
    },
    {
        logo: "https://i.postimg.cc/ryHK3Z33/YMM.png",
        year: "2021",
        title: "Youth Media Movement",
        description: "I joined a course which revolved around upskilling youth with 4IR skills. We completed MTA Software Fundamentals and digital literacy, drone technology with Brighter Futures tuitions, 3D printing and SEDA entrepreneurial training course."
    },
    {
        logo: "https://i.postimg.cc/gj4F97k5/exl-service-logo2.jpg",
        year: "2020",
        title: "EXL Services",
        description: "Started my first job as a Claims Handler for a BPO call center. My responsibility was to take inbound calls from policyholders notifying us about a loss they've experienced. I would go through the claim process with them and provide/retrieve all information necessary."
    },
    {
        logo: "https://i.postimg.cc/FstJ1npc/Mondale-High-School.jpg",
        year: "2015",
        title: "Mondale High School",
        description: "I attended the prestigious Mondale High School, where my subjects pertained to the commerce industry. Here I learned what it means to be discipled, dedicated and determined. I completed my matric with a bachelors pass."
    }
];

const projects = [
    {
        image: "https://i.postimg.cc/Kcsh5dwk/first-portfolio.jpg",
        title: "First Portfolio draft",
        description: "Built with HTML5 and CSS3"
    },
    {
        image: "https://i.postimg.cc/BnPSDqvn/groupsite.jpg",
        title: "Group website",
        description: "Built with HTML5 and CSS3"
    },
    {
        image: "https://i.postimg.cc/k5NThb5Y/jellyfish.jpg",
        title: "Jellyfish website",
        description: "Built with HTML5 and CSS3"
    },
    {
        image: "https://i.postimg.cc/05zB9rXj/holiday.jpg",
        title: "Holiday Destination",
        description: "Built with HTML5 and CSS3"
    }
];

console.log(testimonials);
const projectContainer = document.getElementById("testimonials");
testimonials.forEach((testimonials) => {
    testimonialSection.innerHTML += `
    <img src=${testimonials.imgURL} width="50%"/>
      <h1>${testimonials.name}</h1>
      <h2>${testimonials.position}</h2>
      <p>${testimonials.description} </p>
    `;
  });