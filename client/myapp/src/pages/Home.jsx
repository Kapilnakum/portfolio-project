import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-20">
      {/* HERO SECTION */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2">
          Hi, I'm Kapil Nakum
        </h1>

        {/* EXTRA ROLES */}
        <p className="text-sm md:text-base text-indigo-600 mb-6">
          Full-Stack Developer · Software Developer · Java Developer
        </p>

        {/* SUMMARY */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Final Semester student of Computer Engineering from{" "}
          <span className="font-semibold">
            L. D. College of Engineering, Ahmedabad
          </span>.Computer Engineering undergraduate specializing in Full-Stack Development and DevOps, 
                  with hands-on experience building and deploying scalable web applications. Strong 
                  proficiency in Node.js, Express.js, MongoDB, RESTful APIs, JavaScript and 
                  React, with experience implementing JWT-based authentication, role-based access control,
                  and real-time features using Socket.IO. Practical exposure to AWS cloud services (EC2, S3, IAM, RDS),
                  Linux fundamentals, and CI/CD concepts, along with application deployment and version control using Git
                  and GitHub. Passionate about backend optimization, cloud infrastructure, and delivering reliable, production-ready solutions.
        </p>

        {/* CONTACT + EDUCATION INFO */}
        <div className="bg-white/80 backdrop-blur border border-blue-100 rounded-lg p-4 mb-8 text-sm text-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <strong>Mobile:</strong> 9687906759
            </div>

            <div>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:kapilnakum1212@gmail.com"
                className="text-blue-600 hover:underline"
              >
                kapilnakum1212@gmail.com
              </a>
            </div>

            <div>
              <strong>Degree:</strong> Computer Engineering
            </div>

            <div>
              <strong>College:</strong> L. D. College of Engineering, Ahmedabad
            </div>

            <div className="sm:col-span-2">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition">
              Hire Me
            </button>
          </Link>

          <a href="/Kapil_Nakum_Resume.pdf" download>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition">
              Download Resume
            </button>
          </a>

          <Link to="/admin-login">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition">
              Admin Login
            </button>
          </Link>
        </div>
      </div>

      {/* PROJECTS SECTION (UNCHANGED STRUCTURE) */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-12">
          Academic Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* FARMVIBE */}
          <div className="bg-white/80 backdrop-blur border border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                FARMVIBE
              </h3>

              <ul className="list-disc list-inside space-y-3 text-sm text-gray-700 leading-relaxed">
                <li>
                  Marketplace platform connecting farmers and buyers for
                  listings, bargaining, auctions, and used tools/vehicle resale
                  with secure authentication and role-based dashboards.
                </li>
                <li>
                  Developed end-to-end workflows for product listing,
                  negotiation, counter-offers, deal/auction processing,
                  real-time offer updates, and order tracking.
                </li>
                <li>
                  Achieved a <strong>30–40%</strong> reduction in average deal
                  closure time through structured bargaining flow.
                </li>
                <li>
                  Implemented JWT authentication, RBAC, role-based dashboards,
                  and real-time auctions using Socket.IO.
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200 text-sm text-gray-600">
              <strong>Technologies:</strong> Node.js, Express.js, MongoDB, REST
              API, JWT, Socket.IO, JavaScript, HTML, CSS
            </div>
          </div>

          {/* SMART CITY */}
          <div className="bg-white/80 backdrop-blur border border-indigo-100 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Smart City Portal
              </h3>

              <ul className="list-disc list-inside space-y-3 text-sm text-gray-700 leading-relaxed">
                <li>
                  Built a full-stack Smart City Services portal integrating
                  digital services for citizens and authorities.
                </li>
                <li>
                  Increased user engagement by <strong>15–25%</strong> using
                  real-time notifications and backend-driven analytics.
                </li>
                <li>
                  Designed modular backend architecture supporting concurrent
                  users and future expansion.
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200 text-sm text-gray-600">
              <strong>Technologies:</strong> Node.js, Express.js, MongoDB, REST
              API, JavaScript, HTML, CSS
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
