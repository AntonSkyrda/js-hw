let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const main = document.createElement("main");

for (const course of coursesArray) {
    const divItem = document.createElement("div");
    divItem.className = "item";
    const h2 = document.createElement("h2");
    h2.className = "title";
    h2.innerText = course.title;
    const duration = document.createElement("div");
    duration.className = "duration";
    const durationMonth = document.createElement("p");
    durationMonth.className = "duration-month";
    durationMonth.innerText = `Month duration: ${course.monthDuration}`;
    const durationHours = document.createElement("p");
    durationHours.className = "duration-hours";
    durationHours.innerText = `Hours: ${course.hourDuration}`;
    duration.append(durationMonth, durationHours);
    const modules = document.createElement("h3");
    modules.className = "modules";
    modules.innerText = "Course Modules:";
    const topicsList = document.createElement("ul");
    topicsList.className = "topics";
    for (const topic of course.modules) {
        const topicItem = document.createElement("li");
        topicItem.className = "topic";
        topicItem.innerText = topic;
        topicsList.appendChild(topicItem);
    }
    divItem.append(h2, duration, modules, topicsList);
    main.appendChild(divItem);
}

document.body.appendChild(main);
