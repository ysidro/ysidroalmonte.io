// Site Title
document.getElementById("site_title").innerHTML = `${user_bio.name} ${user_bio.last_name} | ${user_bio.professional_title}`;

//User information output
document.getElementById("user_name").innerHTML = `${user_bio.name} ${user_bio.last_name}`;
document.getElementById("professional_title").innerHTML = user_bio.professional_title;
document.getElementById("about").innerHTML = user_bio.about;

//Main Skills Progress Bars
skills.forEach(skill => document.getElementById("skills_list").innerHTML += `
    <tr>
        <td class="skill">${skill.title}</td>
            <td class="progress">
                <progress max="10" value="${skill.level}"></progress>
            </td>
        <td class="progress_text">${skill.level}/10</td>
    </tr>
`);

//Job Experience List
jobs.forEach(job => document.getElementById("experience").innerHTML += 
    `<span class="experience">
        <h4>${job.title} <span>(${job.monts} months)</span></h4>
        <p>${job.description}</p>
    </span>`
);