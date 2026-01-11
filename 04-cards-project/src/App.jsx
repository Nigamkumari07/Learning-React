import React from "react";
import Card from "./components/Card";
function App() {
  const jobOpenings = [
    {
      brandLogo:
        "https://tse1.mm.bing.net/th/id/OIP.fdZ1QXChVTeaa5YbnGoaZgHaHa?pid=Api&P=0&h=180",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&P=0&h=180",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Java Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://tse2.mm.bing.net/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?pid=Api&P=0&h=180",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$55/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://tse4.mm.bing.net/th/id/OIP._gmdrZwZCMJSC-nHx1L37gHaHa?pid=Api&P=0&h=180",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?pid=Api&P=0&h=180",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://tse1.mm.bing.net/th/id/OIP.zq-DhDIq95BIbP8XagovJAHaFj?pid=Api&P=0&h=180",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://tse3.mm.bing.net/th/id/OIP.Oy5wfKuZ37KcuXONE7zjnQHaEK?pid=Api&P=0&h=180",
      companyName: "Uber",
      datePosted: "2 months ago",
      post: "Frontend React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://tse2.mm.bing.net/th/id/OIP.UCA4FH2AlIb8LUC0_cRm9wHaGq?pid=Api&P=0&h=180",
      companyName: "Airbnb",
      datePosted: "3 days ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://tse3.mm.bing.net/th/id/OIP.jdQ0-zCqys8HUsVr1-EE6AHaEK?pid=Api&P=0&h=180",
      companyName: "Oracle",
      datePosted: "2 weeks ago",
      post: "Java Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$52/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://tse1.mm.bing.net/th/id/OIP.t_iPq8x9sx07Scb5vcJizQHaFG?pid=Api&P=0&h=180",
      companyName: "Salesforce",
      datePosted: "1 month ago",
      post: "Software Developer Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$30/hr",
      location: "Hyderabad, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return (
          <Card
            company={elem.companyName}
            post={elem.post}
            brandLogo={elem.brandLogo}
            tag1={elem.tag1}
            pay={elem.pay}
            tag2={elem.tag2}
            datePosted={elem.datePosted}
          />
        );
      })}
    </div>
  );
}

export default App;
