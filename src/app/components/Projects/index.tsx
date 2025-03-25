'use client'

import React from 'react';
import visit from "../../images/visit.svg";
import "./projects.scss";
import Image from 'next/image';

const projectsArray = [
    {
        title: "MD Exam",
        link: "https://mdexam.com/",
        description: "MD Exam is an online platform that helps people with their weight loss journey. It connects them with doctors and health experts to guide them in living healthier lives through telemedicine and personalized plans."
    },
    {
        title: "Myntra Studio",
        link: "https://www.myntra.com/studio/home",
        description: "Myntra Studio is a dedicated page on Myntra where influencer posts are showcased for marketing purposes. As a third-party freelancer, I contributed to the project by designing its user interface."
    },
    {
        title: "Google Gemini AI (prompt engineer)",
        link: "https://gemini.google.com/",
        description: " I worked as a third-party freelancer with Turing, contributing to the Google Gemini AI project. My role involved designing, testing, and optimizing AI prompts to improve the model's accuracy and relevance in generating responses. "
    },
    {
        title: "Emed4u",
        link: "https://emed4u.com/",
        description: "Emed4u is an online healthcare management system that allows patients to consult doctors, book appointments, and manage their health records from the comfort of their homes."
    },
    {
        title: "Galleri5",
        link: "https://www.galleri5.com/",
        description: "Galleri5 uses artificial intelligence to help brands, retailers, and influencers create effective marketing strategies. It connects creators with businesses, helping them understand trends and maximize sales through AI-driven insights."
    },
    {
        title: "Stallion Match",
        link: "https://stallionmatch.com/",
        description: "Stallion Match is a platform designed for horse breeders. It provides tools for breeders to analyze the genetic potential of horses, track breeding history, and make better decisions to ensure the success of their breeding programs."
    },
    {
        title: "Morph Fitness Trainer",
        link: "https://play.google.com/store/apps/details?id=com.morph.train&hl=en",
        description: "Morph Fitness Trainer is an app that lets users find and hire fitness trainers for at-home workouts. It aims to make fitness more accessible by allowing people to easily connect with qualified trainers for personalized gym sessions."
    }
];

interface ModalProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

const ModalComponent = ({ openModal, setOpenModal }: ModalProps) => {
    if (!openModal) return null;

    return (
        <div className="overlay">
            <div className="modal">
                <button className="close-button" onClick={() => setOpenModal(false)}>×</button>
                <h2 className="modal-title">My Work</h2>
                <div className="projects-grid">
                    {projectsArray.map((project, index) => (
                        <div key={index} className="project-card">
                           <div className='titleProject' onClick={() => window.open(project?.link, "_blank")}>
                                <h3>{project.title}</h3>
                                <div className="visitIcon">
                                    <Image alt="visit" src={visit} />
                                </div>
                            </div>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
