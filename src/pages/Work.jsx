import React from "react";

import Container from "react-bootstrap/Container";
import "../asstes/css/components/ArticleListItem/ArticleListItem.css";
import Articleitem from "../components/organisms/ArticleItem.jsx";
import whiteBox from "../asstes/img/whitebox-2.png";
import voiceRecognition from "../asstes/img/voiceRecognition.jpg";
import weeklyReport from "../asstes/img/weeklyreport.png";
import donkihote from "../asstes/img/donkihote.png";
import payrole from "../asstes/img/payrole.jpg";
import fryer from "../asstes/img/fryer.jpg";
import hrm from "../asstes/img/hrm.png";
import wireHouse from "../asstes/img/wireHouse.jpg";
import smartScooter from "../asstes/img/smartscooter.jpg";
import nitssu from "../asstes/img/nitssu.png";
import tokushimaru from "../asstes/img/tokushimaru.png";
import apple from "../asstes/img/apple.png";


class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      workedListItem: [
        {
          heading: "Apple Retail Tool",
          itemDescription:"Backstage ART for Apple. I was responsible for separating the app (SPA) into three (SPA) parts (Admin, Site, CMS) .Now its faster and the user experience has been improved.PHP(Laravel), Vue (3), Nuxt js, Mysql, Mongodb, Autodesk forge,Tableau based ART 4.0 for Apple. I was leading around 10 developers here in terms of problem solvin",
          itemTools:
            "Laravel 9, TypeScript,Vue3,Nuxt3, MySql, Mongodb, ES6, Bootstrap, scss, npm, pnpm",
          image: apple,
        },
	  {
          heading: "tokushimaru.jp",
          itemDescription:
            "It is a Japanese portal(E-commerce system) system that`s support 100 of modules and functions like for more information https://www.tokushimaru.jp",
          itemTools:
            "Laravel 6, JavaScript, MySql, ES6, Bootstrap, scss, npm",
          image: tokushimaru,
        },
		{
          heading: "Nittsu System Co.Ltd",
          itemDescription:
            "It is a Japanese ERP system that`s support 100 of modules and functions like for more information https://www.nittsusystem.co.jp",
          itemTools:
            "Java 8, JPA, EJB, SQLServer,EclipseLink , TypeScript, KnouckoutJS",
          image: nitssu,
        },
        {
          heading: "White Box ",
          itemDescription:
            "It is a cloud sales support tool that you can hire IT engineer you want . A japanese IT engineers recruitment's system.Where partner company and Sier(System integrator ) company can share engineers and projects. From the engineers who belong to Sier company and  partner companies, the White Box allows you to find the engineer you want right away and grasp the operating status, so you can lighten the burden of work and shift to more planned SES work.",
          itemTools:
            "Java 11, Spring(boot), Mysql, Vuejs, NuxtJS, Buefy, Bulma, Docker, Redis, AWS",
          image: whiteBox,
        },
        {
          heading: "Voice recognition system",
          itemDescription:
            "Develop for both desktop and mobile version .Develop micro service with Python with help of google speech API",
          itemTools:
            "Python, Django, Java, Java swing, Mysql, Android SDK, Google cloud speech API ",
          image: voiceRecognition,
        },
        {
          heading: "IST-Weekly Report System",
          itemDescription:
            "developed  for information strategy and technology co. ltd (IST) .It has include with some modules and features like create weekly or daily report ,send weekly status report as mail function, preview weekly report  and some setting related function like user management, holiday settings etc .Those functions or modules enables  manager to track IST employees weekly status report ",
          itemTools: "PHP, Laravel, JavaScript, Mysql, AWS",
          image: weeklyReport,
        },
        {
          heading: "DonkiHo System",
          itemDescription:
            "Its a large scale projects that’s maintain large scale data for client e-commerce business.",
          itemTools: "Java, Python, JavaScript",
          image: donkihote,
        },
        {
          heading: "Human Resource Management System(HRMS) ",
          itemDescription:
            "Human Resource Management System(HRMS)  is developed for Synergy Inc Bangladesh.I had worked with some features like (Employee Join Management, Overtime Management, Yearly Budget  Management, Job advance management, Leave Management System)",
          itemTools:
            "Java, Spring MVC framework, Hibernate, Mysql  and JavaScript ",
          image: hrm,
        },
        {
          heading: "Ware House Management tool (WMS) ",
          itemDescription:
            "Ware House Management tool (WMS) is developed for Synergy Inc that`s manage the company product stocks.",
          itemTools:
            "Java, Spring MVC framework, Hibernate, Mysql  and JavaScript ",
          image: wireHouse,
        },
        {
          heading: "Payroll Management System(PRMS)",
          itemDescription:
            "The PRMS is developed  for synergy Inc that’s manage employee monthly salary and others salary related issues",
          itemTools: "PHP, JavaScrpt, Mysql",
          image: payrole,
        },
        {
          heading: "Fryer System Management Tools ",
          itemDescription:
            "Fryer System Management Tools for Restaurant. Developed for  web,Android(AIONIC),IOS (AIONIC) . My  role is design and development  life cycle of this tools, leading the team, developing the JSON API with php Codeigniter",
          itemTools: "PHP, Codeigniter, Anjular JS, Mysql ",
          image: fryer,
        },
        {
          heading: "smart scooters (smartscooters.co.uk)",
          itemDescription:
            "(This is  Ecommerce site using PHP,Mysql,OpenCart ) I have edited and converting the version from Opencart 2.x to Opencart 3.x .",
          itemTools: "PHP, Mysql, OpenCart ",
          image: smartScooter,
        },
      ],
    };
  }

  render() {
    const style = {
      fontWeight: "bold",
    };

    return (
      <Container>
        <h1>Work</h1>
        <p>
          (<strong style={style}>in progress</strong> - but here are few of the
          projects I've worked on)
        </p>
        {this.state.workedListItem.map((person) => (
          <Articleitem
            heading={person.heading}
            itemDescription={person.itemDescription}
            itemTools={person.itemTools}
            image={person.image}
          />
        ))}
      </Container>
    );
  }
}
export default Work;
