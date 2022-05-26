import React from "react";

const MyPortfolio = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Misbahul Haq Faysal</h2>
          <p>faysal000012@gmail.com</p>
          <p className="mt-3">
            Education: Studying in class 11 at Govt. Tolaram
            College,Narayanganj.{" "}
          </p>
          <p>Group: Science</p>
          <h2 className="mt-3 mb-2">Technologies I know as a web developer:</h2>
          <p>✔ HTML </p>
          <p>✔ CSS</p>
          <p>✔ Bootstrap</p>
          <p>✔ Tailwind CSS</p>
          <p>✔ Javascript</p>
          <p>✔ React</p>
          <p>✔ React Router</p>
          <p>✔ Firebase</p>
          <p>✔ Node JS</p>
          <p>✔ Express JS</p>
          <p>✔ Mongodb</p>

          <h3 className="mt-4 mb-3">Some Of My Best Projects</h3>
          <a
            className="text-blue-400"
            href="https://monitor-mania-a3123.web.app/"
            target="blank"
          >
            Project 1
          </a>
          <a
            className="text-blue-400"
            href="https://lawyer-david-brewster.web.app/home"
            target="blank"
          >
            Project 2
          </a>
          <a
            className="text-blue-400"
            href="https://preeminent-cajeta-a9c2b4.netlify.app/"
            target="blank"
          >
            Project 3
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
