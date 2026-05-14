/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Team } from "./components/sections/Team";
import { Curriculum } from "./components/sections/Curriculum";
import { Courses } from "./components/sections/Courses";
import { Assessment } from "./components/sections/Assessment";
import { Hospitals } from "./components/sections/Hospitals";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Team />
        <Curriculum />
        <Hospitals />
        <Courses />
        <Assessment />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
