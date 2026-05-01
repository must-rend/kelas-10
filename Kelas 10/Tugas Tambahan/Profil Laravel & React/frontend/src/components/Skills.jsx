import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  // Fallback dummy data
  const dummySkills = [
    { id: 1, name: 'React.js', category: 'Frontend', level_percentage: 90 },
    { id: 2, name: 'HTML & CSS', category: 'Frontend', level_percentage: 95 },
    { id: 3, name: 'Tailwind CSS', category: 'Frontend', level_percentage: 85 },
    { id: 4, name: 'Laravel', category: 'Backend', level_percentage: 85 },
    { id: 5, name: 'PHP', category: 'Backend', level_percentage: 80 },
    { id: 6, name: 'MySQL', category: 'Backend', level_percentage: 75 },
    { id: 7, name: 'Git & GitHub', category: 'Tools', level_percentage: 85 },
    { id: 8, name: 'Figma', category: 'Tools', level_percentage: 70 },
  ];

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/skills')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setSkills(data);
        } else {
          setSkills(dummySkills);
        }
      })
      .catch(err => {
        console.error('Failed to fetch skills', err);
        setSkills(dummySkills);
      });
  }, []);

  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Keahlian
        </motion.h2>

        <div className="skills-container">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div 
                key={category}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              >
                <h3 className="category-title">{category}</h3>
                <div className="skills-list">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.id} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level_percentage}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <motion.div 
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level_percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
