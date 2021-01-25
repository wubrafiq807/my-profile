import React from "react";
import Card from "react-bootstrap/Card";
import istvn from "../asstes/img/istvn.jpg";
import connective from "../asstes/img/connective.jpg";
import smartscooter from "../asstes/img/smartscooter.jpg";
import synergyInc from "../asstes/img/synergyInc.png";
import rssoftware from "../asstes/img/rssoftware.png";
import threesi from "../asstes/img/3si.png";

const Achievement = () => (
  <div>
    <h1>ACHIEVEMENT</h1>

    <Card>
      <Card.Body>
        <Card.Text>
          Helped <a href="https://3si.vn/en">3S Intersoft JSC</a>  Teams by guiding developers, integrating industry standards code
          quality, testing, QA, deployment, performance and developed
          microservices, modules that improved the company business and make the
          company more customer focused.
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={threesi} />
    </Card>
	<Card>
      <Card.Body>
        <Card.Text>
          Helped Information strategy and technology Vietnam-ISTVN transform
          from startup to scale up by integrating industry standards code
          quality, testing, QA, deployment, performance and developed
          microservices, modules that improved the company business and make the
          company more customer focused.
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={istvn} />
    </Card>
    <Card>
      <Card.Body>
        <Card.Text>
          Participated in connecting startups Bangladesh events-2016 and led the
          team. This helps the team gaining knowledge about Java and the web
          application around java platform
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={connective} />
    </Card>
    <Card>
      <Card.Body>
        <Card.Text>
          Successfully edited a few sections of hhttps://www.smartscooters.co.uk
          site where performance wasn’t optimal. CDN, Lazy loading, caching,
          remove render blocking scripts, JS profiling, optimize critical render
          path and few other techniques was used to improve the site loading
          time. After the improvements those pages load around 2 seconds faster
          and saw increased traffic. Accessibility was also improved to AA.
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={smartscooter} />
    </Card>
    <Card>
      <Card.Body>
        <Card.Text>
          Helped Synergy Inc Bangladesh transform from paper based task to IT
          solution by developing like HRMS,Parole, Ware House Management system
          ,Yearly budget management system, Job advance management system. And
          help the company to grow company profit more than 10% faster than
          before.
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={synergyInc} />
    </Card>
    <Card>
      <Card.Body>
        <Card.Text>
          Helped RS Software to make their profit more by working with multiple
          projects at a time with different client’s as well as get positive
          client feedback. Due to customer focused team player.
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={rssoftware} />
    </Card>
  </div>
);

export default Achievement;
