function extractJSON(t)
{
    switch (t)
    {
        case "experiences" :
        {
            $.getJSON("../json/experiences.json", function(json) {
                $.each(json.experiences, function(i, exp)
                {
                    i = i + 1;
                    var div_main = document.createElement("div");
                    div_main.id = "exp_" + i;
                    div_main.className = "exps";
                    var div_head = document.createElement("div");
                    div_head.id = "exp_" + i + "_head";
                    var div_div = document.createElement("div");
                    if (!$.isArray(exp.tasks) || !exp.tasks.length)
                        div_div.innerHTML = "<span class='title'>" + exp.head.title + "</span>";
                    else
                        div_div.innerHTML = "<span class='title pointer' onclick='toggleCollapse(this);'><img id='collapse_img_exp_" + i + "' class='collapse_img' src='../img/plus.png'/>" + exp.head.title + "</span>";
                    var div_company = document.createElement("div");
                    div_company.className = "company";
                    var div_company_name = document.createElement("div");
                    div_company_name.className = "company_name";
                    div_company_name.innerText = exp.head.company.company_name;
                    var div_company_location = document.createElement("div");
                    div_company_location.className = "company_location";
                    div_company_location.innerText = exp.head.company.company_location;
                    var div_dates = document.createElement("div");
                    div_dates.className = "dates";
                    div_dates.innerText = exp.head.dates.from + " to " + exp.head.dates.to;
                    var div_tasks = document.createElement("div");
                    div_tasks.className = "tasks";
                    var ul_tasks = document.createElement("ul");
                    ul_tasks.type = "circle";
                    $.each(exp.tasks, function(j, task)
                    {
                        var li_task = document.createElement('li');
                        if (jQuery.type(task) === "string")
                        {
                            li_task.innerText = task;
                            li_task.className = "li_plus";
                            ul_tasks.appendChild(li_task);
                        }
                        else if (jQuery.type(task) === "array")
                        {
                            var ul_subtasks = document.createElement("ul");
                            ul_subtasks.className = "ul_plus";
                            for (var i = 0; i < task.length; i++)
                            {
                                var li_subtask = document.createElement("li");
                                li_subtask.className = "li_plus";
                                li_subtask.innerText = task[i];
                                ul_subtasks.appendChild(li_subtask);
                            }
                            ul_tasks.lastChild.appendChild(ul_subtasks);
                        }
                    });
                    div_company.appendChild(div_company_name);
                    div_company.appendChild(div_company_location);
                    div_head.appendChild(div_div);
                    div_head.appendChild(div_company);
                    div_head.appendChild(div_dates);
                    div_main.appendChild(div_head);
                    div_tasks.appendChild(ul_tasks);
                    div_main.appendChild(div_tasks);
                    document.getElementById("experiences_body").appendChild(div_main);
                });
            });
            break;
        }
        case "presentations":
        {
            $.getJSON("../json/presentations.json", function(json) {
                var ul_pres = document.createElement("ul");
                ul_pres.className = "ul_plus";
                $.each(json.presentations, function(i, pres) {
                    var li_pres = document.createElement("li");
                    li_pres.className = "li_plus";
                    li_pres.innerText = pres.presentation;
                    ul_pres.appendChild(li_pres);
                });
                document.getElementById("presentations_body").appendChild(ul_pres);
            });
            break;
        }
        case "extracurriculars":
        {
            $.getJSON("../json/extracurriculars.json", function(json) {
                var ul_ec = document.createElement("ul");
                ul_ec.className = "ul_plus";
                $.each(json.extracurriculars, function(i, ec) {
                    var li_ec = document.createElement("li");
                    li_ec.className = "li_plus";
                    li_ec.innerText = ec.extracurricular;
                    ul_ec.appendChild(li_ec);
                });
                document.getElementById("extracurriculars_body").appendChild(ul_ec);
            });
            break;
        }
        case "skills":
        {
            $.getJSON("../json/skills.json", function(json) {
                $.each(json.skills, function(i, skill) {
                    var div_skill = document.createElement("div");
                    div_skill.className = "skill";
                    div_skill.innerText = skill.skill;
                    document.getElementById("skills_body").appendChild(div_skill);
                });
            });
            break;
        }
        case "interests":
        {
            $.getJSON("../json/interests.json", function(json) {
                $.each(json.interests, function(i, interest) {
                    var div_interest = document.createElement("div");
                    div_interest.className = "interest";
                    div_interest.innerText = interest.interest;
                    document.getElementById("interests_body").appendChild(div_interest);
                });
            });
            break;
        }
    }
}