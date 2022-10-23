function extractJSON(t)
{
    switch (t)
    {
        case "intro":
            $.getJSON("./json/intro.json", function(json) {
                document.getElementById("intro").innerHTML = json.intro;
            });
            break;
        case "title":
            $.getJSON("./json/title.json", function(json) {
                document.getElementById("top_container_left_div_title").innerHTML = json.title;
            });
            break;
        case "news":
        case "news_reduced":
            $.getJSON("./json/news.json", function(json) {
                var ul_news = document.createElement("ul");
                ul_news.className = "ul_plus";
                $.each(json.news, function(i, news)
                {
                    if(t == "news_reduced" && i >= 5)
                        return false;
                    var li_news = document.createElement("li");
                    li_news.className = "li_plus";
                    li_news.innerHTML = news.date + " : " + news.news
                    if (news.link)
                        li_news.innerHTML += " <span class='news_link'>(<a href='" + news.link + "' target='_blank' class='show_icon'>details</a>)</span>"
                    ul_news.appendChild(li_news);
                });
                document.getElementById("news_body").innerHTML = '';
                document.getElementById("news_body").appendChild(ul_news);
            });
            break;
        case "experiences" :
        {
            $.getJSON("./json/experiences.json", function(json) {
                document.getElementById("experiences_body").innerHTML = '';
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
                        div_div.innerHTML = "<span class='title pointer' onclick='toggleCollapse(this);'><div id='collapse_div' class='collapse'>+</div>" + exp.head.title + "</span>";
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
                    var arr = [];
                    for (task in exp.tasks)
                        arr.push(task);
                    if (arr.length == 2 && jQuery.type(exp.tasks[0]) === "string" && jQuery.type(exp.tasks[1]) === "array")
                    {
                        ul_tasks.innerHTML = exp.tasks[0];
                        var ul_subtasks = document.createElement("ul");
                        ul_subtasks.className = "ul_plus";
                        for (var i = 0; i < exp.tasks[1].length; i++)
                        {
                            var li_subtask = document.createElement("li");
                            li_subtask.className = "li_plus";
                            li_subtask.innerText = exp.tasks[1][i];
                            ul_subtasks.appendChild(li_subtask);
                        }
                        ul_tasks.appendChild(ul_subtasks);
                        ul_tasks.style.paddingLeft = 0;
                    }
                    else
                    {
                        $.each(exp.tasks, function(j, task)
                        {
                            var li_task = document.createElement('li');
                            if (jQuery.type(task) === "string")
                            {
                                li_task.innerHTML = task;
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
                    }
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
        case "moocs":
        case "moocs_reduced":
        {
            $.getJSON("./json/moocs.json", function(json) {
                var ul_moocs = document.createElement("ul");
                ul_moocs.className = "ul_plus";
                $.each(json.moocs, function(i, mooc) {
                    if (t == "moocs_reduced" && i >= 5)
                        return false;
                    var li_mooc = document.createElement("li");
                    li_mooc.className = "li_plus";
                    li_mooc.innerHTML = "<a href='" + mooc.link + "' target='_blank' class='moocLink show_icon'>" + mooc.name + "</a>&nbsp;&nbsp;|&nbsp;(<i>" + mooc.issuer + "</i>)";
                    ul_moocs.appendChild(li_mooc);
                });
                document.getElementById("moocs_body").innerHTML = '';
                document.getElementById("moocs_body").appendChild(ul_moocs);
                if (ul_moocs.getElementsByTagName("li").length == 5)
                    document.getElementById("moocs_toggle").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;>> Show all";
                else
                    document.getElementById("moocs_toggle").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<< Show less";
            });
            break;
        }
        case "publications":
        {
            $.getJSON("./json/publications.json", function(json) {
                var ul_pubs = document.createElement("ul");
                ul_pubs.className = "ul_plus";
                $.each(json.publications, function(i, pub) {
                    var li_pub = document.createElement("li");
                    li_pub.className = "li_plus";
                    pubTitleFormatted = "[<b><i>" + ((pub.type == 'c') ? "Conference" : "Journal") + " Paper</i></b>] "
                    if (pub.other) {
                        for (o of pub.other) {
                            pubTitleFormatted += "[<b><span class='glow'>" + o + "</span></b>] "
                        }
                    }
                    pubTitleFormatted += pub.title
                    if (pub.link)
                        li_pub.innerHTML = "<a href='" + pub.link + "' target='_blank' class='pubLink show_icon'>" + pubTitleFormatted + "</a>";
                    else
                        li_pub.innerHTML = pubTitleFormatted;
                    ul_pubs.appendChild(li_pub);
                });
                document.getElementById("publications_body").innerHTML = '';
                document.getElementById("publications_body").appendChild(ul_pubs);
            });
            break;
        }
        case "preprints":
        {
            $.getJSON("./json/preprints.json", function(json) {
                var ul_ppts = document.createElement("ul");
                ul_ppts.className = "ul_plus";
                $.each(json.preprints, function(i, ppt) {
                    var li_ppt = document.createElement("li");
                    li_ppt.className = "li_plus";
                    if (ppt.link)
                        li_ppt.innerHTML = "<a href='" + ppt.link + "' target='_blank' class='pptLink show_icon'>" + ppt.title + "</a>";
                    else
                        li_ppt.innerHTML = ppt.title;
                    ul_ppts.appendChild(li_ppt);
                });
                document.getElementById("preprints_body").innerHTML = '';
                document.getElementById("preprints_body").appendChild(ul_ppts);
            });
            break;
        }
        case "presentations":
        {
            $.getJSON("./json/presentations.json", function(json) {
                var ul_pres = document.createElement("ul");
                ul_pres.className = "ul_plus";
                $.each(json.presentations, function(i, pres) {
                    var li_pres = document.createElement("li");
                    li_pres.className = "li_plus";
                    li_pres.innerHTML = pres.presentation;
                    ul_pres.appendChild(li_pres);
                });
                document.getElementById("presentations_body").innerHTML = '';
                document.getElementById("presentations_body").appendChild(ul_pres);
            });
            break;
        }
        case "reviews":
        {
            $.getJSON("./json/reviews.json", function(json) {
                var ul_rev = document.createElement("ul");
                ul_rev.className = "ul_plus";
                $.each(json.reviews, function(i, rev) {
                    var li_rev = document.createElement("li");
                    li_rev.className = "li_plus";
                    if (rev.link)
                        li_rev.innerHTML = "<a href='" + rev.link + "' target='_blank' class='revLink show_icon'>" + rev.review + "</a>";
                    else
                        li_rev.innerHTML = rev.review;
                    ul_rev.appendChild(li_rev);
                });
                document.getElementById("reviews_body").innerHTML = '';
                document.getElementById("reviews_body").appendChild(ul_rev);
            });
            break;
        }
        case "grants":
        {
            $.getJSON("./json/grants.json", function(json) {
                var ul_g = document.createElement("ul");
                ul_g.className = "ul_plus";
                $.each(json.grants, function(i, g) {
                    var li_g = document.createElement("li");
                    li_g.className = "li_plus";
                    li_g.innerHTML = g.grant;
                    ul_g.appendChild(li_g);
                });
                document.getElementById("grants_body").innerHTML = '';
                document.getElementById("grants_body").appendChild(ul_g);
            });
            break;
        }
        case "extracurriculars":
        {
            $.getJSON("./json/extracurriculars.json", function(json) {
                var ul_ec = document.createElement("ul");
                ul_ec.className = "ul_plus";
                $.each(json.extracurriculars, function(i, ec) {
                    var li_ec = document.createElement("li");
                    li_ec.className = "li_plus";
                    li_ec.innerHTML = ec.extracurricular;
                    ul_ec.appendChild(li_ec);
                });
                document.getElementById("extracurriculars_body").innerHTML = '';
                document.getElementById("extracurriculars_body").appendChild(ul_ec);
            });
            break;
        }
        case "skills":
        {
            $.getJSON("./json/skills.json", function(json) {
                document.getElementById("skills_body").innerHTML = '';
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
            $.getJSON("./json/interests.json", function(json) {
                document.getElementById("interests_body").innerHTML = '';
                $.each(json.interests, function(i, interest) {
                    var div_interest = document.createElement("div");
                    div_interest.className = "interest " + interest.interest.toLowerCase();
                    if (interest.interest == "Photography")
                    {
                        div_interest.className += " glow2";
                        div_interest.onclick = function() {
                            window.open("https://mega.nz/#F!z0BGnYiK!mriad4KwAC2iy_2rHBUt8g", '_blank');
                        }
                    }
                    div_interest.innerText = interest.interest;
                    document.getElementById("interests_body").appendChild(div_interest);
                });
            });
            break;
        }
    }
}