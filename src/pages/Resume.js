import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import teaching from '../data/resume/teaching';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Teaching',
  'Skills',
  'Publications',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Piergiuseppe Mallozzi's Resume. Curriculum Vitae. CV."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Courses data={courses} />
      <Experience type="Awards" id="experience" data={positions} />
      <Experience type="Teaching" id="teaching" data={teaching} />
      <Skills skills={skills} categories={categories} />
      <References />

    </article>
  </Main>
);

export default Resume;
