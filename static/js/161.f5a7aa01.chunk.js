"use strict";(self.webpackChunkpierg_github_io=self.webpackChunkpierg_github_io||[]).push([[161],{7161:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});i(2791);var s=i(1523),n=i(3174),o=i(4483),r=i(5244),a=i(8036),c=i(184),l=function(e){var t=e.data;return(0,c.jsx)("div",{className:"cell-container",children:(0,c.jsxs)("article",{className:"mini-post",children:[(0,c.jsxs)("header",{children:[(0,c.jsx)("h2",{children:t.title}),(0,c.jsx)("h4",{children:t.subtitle})]}),(0,c.jsx)("div",{className:"image",children:(0,c.jsx)("img",{src:"".concat("").concat(t.image),alt:t.title})}),(0,c.jsx)("div",{className:"description",children:(0,c.jsxs)("div",{className:"descp",children:[(0,c.jsxs)("p",{children:[" ",t.desc," "]}),(0,c.jsxs)("div",{className:"github-link",children:[(0,c.jsxs)("a",{href:t.github,className:"button medium float_right",children:["view of GitHub ",(0,c.jsx)(o.G,{icon:a.zh})]}),t.link&&(0,c.jsx)("a",{href:t.link,className:"button medium float_right",children:"Launch it (BETA)"})]})]})})]})})},h=[{title:"Sym-CPS",subtitle:"Symbiotic Design for Cyber-Physical Systems",github:"https://github.com/uc-berkeley-data-discovery-2022/berkeley-cps-symbiotic-design",image:"/images/projects/sym-cps.png",desc:"Software infrastructure to design, model and optimize Cyber-Physical Systems (e.g. UAVs) at different abstraction layers: topology, component selection, parameter optimization and control."},{title:"CROME",subtitle:"Contract-Based Robotic Mission Specification",link:"https://crome-tool.duckdns.org",github:"https://github.com/pierg/crome-cgg",image:"/images/projects/crome.png",desc:"The tool helps the designer model and deploy robotic missions using contracts. The designer can model the environment, and the goals that the robot must achieve using LTL or Specification Patterns. The tool analyze the goals, build the CGG (a graph of contracts) and realize the controllers via reactive synthesis and simulate the robotic mission.",points:["Tools used: NuSMV (LTL satisfiability, validity checks), Strix (controller synthesis), Docker, React, Flask"]},{title:"Crome-Contracts",subtitle:"Contracts Manipulation Tool",link:"https://contracts-tool.duckdns.org",github:"https://github.com/pierg/crome-contracts",image:"/images/projects/contracts.png",desc:"Implementation of the contract algebra operations where behaviours are expressed in Linear Temporal Logic. A newer web-based version of the tools is currently under development where contracts support multiple formalisms and the `system` specification is greatly simplified.",points:[]},{title:"Crome-Logic",subtitle:"Linear Temporal Logic manipulation library",github:"https://github.com/pierg/crome-logic",image:"/images/projects/logic.png",desc:"The tools allows LTL formulas to be mapped to boolean formulas in conjunctive or disjunctive normal form (CNF/DNF) and then they can be simplified using heuristic logic minimization techniques.",points:["Tools used: NuSMV (LTL satisfiability, validity checks), Spot (LTL tree parser), Espresso (Logic Minimizer)"]},{title:"Crome-Synthesis",subtitle:"Controllers Synthesis and Manipulation Tool",github:"https://github.com/pierg/crome-synthesis",image:"/images/projects/synthesis.png",desc:"Given an LTL formula the tool: 1) breaks it down in conjunctions of `independent` formulas, 2) synthesize them into Mealy machines concurrently, 4) runs the Mealy machine in parallel even in presence of multiple `fix points`.",points:["Tools used: Crome-Logic, Strix (synthesis)"]},{title:"Cogomo",subtitle:"Requirement Engineering Tool",github:"https://github.com/pierg/cogomo",image:"/images/projects/cogomo.png",desc:"Formal requirement analysis and refinement to libraries of components. Features: 1) conflicts/incompleteness detection, 2) greedy optimization algorithm for mapping specification to components in a library.",points:["Tools used: Z3 (SMT solver and unsat-core), Strix (synthesis)"]},{title:"WiseML",subtitle:"Runtime monitoring tool for Safe reinforcement learning",image:"/images/projects/wiseml.png",github:"https://github.com/pierg/wiseml",desc:"Given an LTL formula the tool: 1) breaks it down in conjunctions of `independent` formulas, 2) synthesize them into Mealy machines concurrently, 4) runs the Mealy machine in parallel even in presence of multiple `fix points`.",points:[]},{title:"Movemo",subtitle:"Engineering of Reward Functions for reinforcement learning agents",image:"/images/projects/movemo.png",desc:"Given an LTL formula the tool: 1) breaks it down in conjunctions of `independent` formulas, 2) synthesize them into Mealy machines concurrently, 4) runs the Mealy machine in parallel even in presence of multiple `fix points`.",points:[]}],m=function(){return(0,c.jsx)(r.Z,{title:"Projects",description:"Learn about Piergiuseppe Mallozzi's projects.",children:(0,c.jsxs)("article",{className:"post",id:"projects",children:[(0,c.jsxs)("header",{children:[(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{"data-testid":"heading",children:(0,c.jsx)(s.rU,{to:"/projects",children:"Projects"})}),(0,c.jsx)("p",{children:"A selection of projects that I have developed and that are available open-source."})]}),(0,c.jsxs)("div",{className:"meta",children:[(0,c.jsxs)("h4",{"data-testid":"heading",children:[" ",(0,c.jsx)(o.G,{icon:n.klh})," What I Use "]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("a",{href:"https://mypy.readthedocs.io/en/stable/",children:"mypy "}),"  \u2022",(0,c.jsx)("a",{href:"https://pre-commit.com",children:" pre-commit hooks "}),"  \u2022",(0,c.jsx)("a",{href:"https://anaconda.org",children:" conda "}),"  \u2022",(0,c.jsx)("a",{href:"https://python-poetry.org",children:" poetry "}),"  \u2022",(0,c.jsx)("a",{href:"https://pdm.fming.dev/latest/",children:" pdm "}),"  \u2022",(0,c.jsx)("a",{href:"https://www.docker.com",children:" docker "}),"  \u2022",(0,c.jsx)("a",{href:"https://www.sphinx-doc.org/en/master/",children:" sphinx "}),"  \u2022",(0,c.jsx)("a",{href:"https://nusmv.fbk.eu",children:" nusmv "}),"  \u2022",(0,c.jsx)("a",{href:"https://strix.model.in.tum.de",children:" strix "}),"  \u2022",(0,c.jsx)("a",{href:"https://reactjs.org",children:" react "}),"  \u2022",(0,c.jsx)("a",{href:"https://flask.palletsprojects.com/en/2.2.x/",children:" flask "})]})]})]}),h.map((function(e){return(0,c.jsx)(l,{data:e},e.title)}))]})})}}}]);
//# sourceMappingURL=161.f5a7aa01.chunk.js.map