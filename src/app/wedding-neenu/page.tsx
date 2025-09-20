'use client'

import React, { useState } from 'react';
import Head from 'next/head';

const WeddingNeenu: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Head>
                <title>Wedding Invitation: Neenu & Deepak</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <style>{`
                    html, body {
                        overflow-y: auto !important;
                        overflow-x: hidden !important;
                        height: auto !important;
                        -webkit-overflow-scrolling: touch;
                    }
                    
                    /* Ensure mobile scrolling works properly */
                    @media (max-width: 768px) {
                        html, body {
                            overflow: auto !important;
                            height: 100% !important;
                            position: relative !important;
                        }
                        
                        .wedding-container {
                            flex-direction: column !important;
                        }
                        
                        .md-half-width {
                            width: 100% !important;
                            padding: 2rem !important;
                        }
                        
                        /* Mobile-specific iframe sizing */
                        iframe {
                            width: 100% !important;
                            height: 250px !important;
                            min-height: 200px !important;
                        }
                        
                        /* Adjust modal for mobile */
                        .mobile-modal {
                            max-width: 90vw !important;
                            max-height: 80vh !important;
                            margin: 1rem !important;
                        }
                    }
                    
                    /* Desktop responsive styles */
                    @media (min-width: 769px) {
                        .md-half-width {
                            width: 50% !important;
                        }
                    }
                `}</style>
            </Head>
            
            <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                backgroundColor: '#FBF9F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '1rem',
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch'
            }}>
                {/* Main Card Container */}
                <div style={{
                    width: '100%',
                    maxWidth: '64rem',
                    margin: '0 auto',
                    backgroundColor: 'white',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    borderRadius: '0.5rem',
                    overflow: 'visible'
                }}>
                    <div className="wedding-container" style={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        flexWrap: 'wrap'
                    }}>
                        {/* Left Side: Features the couple's names and the main invitation */}
                        <div style={{
                            width: '100%',
                            padding: '3rem',
                            textAlign: 'center',
                            backgroundColor: '#F8F4F0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }} className="md-half-width">
                            <p style={{
                                fontSize: '1.125rem',
                                color: '#4B5563'
                            }}>
                                Join us for the wedding celebration of
                            </p>
                            
                            <h1 style={{
                                fontFamily: "'Great Vibes', cursive",
                                fontSize: '4rem',
                                margin: '1.5rem 0',
                                color: '#9A7B4F'
                            }}>
                                Neenu
                            </h1>
                            <p style={{
                                fontSize: '2.25rem',
                                color: '#9A7B4F'
                            }}>
                                &
                            </p>
                            <h1 style={{
                                fontFamily: "'Great Vibes', cursive",
                                fontSize: '4rem',
                                margin: '1.5rem 0',
                                color: '#9A7B4F'
                            }}>
                                Deepak
                            </h1>
                            
                            <div style={{
                                width: '120px',
                                height: '1px',
                                background: 'linear-gradient(to right, transparent, #D4C1A8, transparent)',
                                margin: '1.5rem auto'
                            }} />
                            
                            <p style={{
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                color: '#374151'
                            }}>
                                on Sunday, 02 November 2025
                            </p>
                        </div>

                        {/* Right Side: Contains all the specific details of the event */}
                        <div style={{
                            width: '100%',
                            padding: '3rem',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }} className="md-half-width">
                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    fontSize: '1rem',
                                    color: '#6B7280',
                                    marginBottom: '0.5rem'
                                }}>
                                    Parents of the Bride
                                </p>
                                <p style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: '#1F2937'
                                }}>
                                    Smt. Gurmeet kaur & Sh. Ram Kishan
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    fontSize: '1rem',
                                    color: '#6B7280',
                                    marginBottom: '0.5rem'
                                }}>
                                    Parents of the Groom
                                </p>
                                <p style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: '#1F2937'
                                }}>
                                    Smt. Vandana Rani & Sh. Naresh Mehra
                                </p>
                            </div>

                            <div style={{
                                width: '120px',
                                height: '1px',
                                background: 'linear-gradient(to right, transparent, #D4C1A8, transparent)',
                                margin: '1.5rem auto'
                            }} />

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem',
                                margin: '1.5rem 0'
                            }}>
                                <div>
                                    <p style={{
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        fontSize: '1rem',
                                        color: '#6B7280',
                                        marginBottom: '0.25rem'
                                    }}>
                                        Arrival
                                    </p>
                                    <p style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 'bold',
                                        color: '#1F2937'
                                    }}>
                                        10:00 am
                                    </p>
                                </div>
                                <div>
                                    <p style={{
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        fontSize: '1rem',
                                        color: '#6B7280',
                                        marginBottom: '0.25rem'
                                    }}>
                                        Lunch
                                    </p>
                                    <p style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 'bold',
                                        color: '#1F2937'
                                    }}>
                                        02:00 pm
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p style={{
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    fontSize: '1rem',
                                    color: '#6B7280',
                                    marginBottom: '0.25rem'
                                }}>
                                    Venue
                                </p>
                                <p style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: '#1F2937'
                                }}>
                                    Vishal farm
                                </p>
                                <p style={{
                                    fontSize: '1.125rem',
                                    color: '#4B5563'
                                }}>
                                    talwara road, Mukerian
                                </p>
                            </div>
                            
                            <div style={{
                                width: '120px',
                                height: '1px',
                                background: 'linear-gradient(to right, transparent, #D4C1A8, transparent)',
                                margin: '1.5rem auto'
                            }} />

                            <div style={{ margin: '1.5rem 0' }}>
                                <p style={{
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    fontSize: '1rem',
                                    color: '#6B7280'
                                }}>
                                    RSVP
                                </p>
                                <p style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: '#1F2937',
                                    marginTop: '0.25rem'
                                }}>
                                    Vadhopal Family
                                </p>
                            </div>
                            
                            {/* Gemini API Feature Button */}
                            <button 
                                onClick={() => setShowModal(true)}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#9A7B4F',
                                    color: 'white',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '0.5rem',
                                    border: 'none',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                    fontFamily: 'inherit'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8a6d46'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9A7B4F'}
                            >
                                ✨ Go to Wedding Location
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Modal for displaying blessings */}
                {showModal && (
                    <div style={{
                        position: 'fixed',
                        inset: '0',
                        zIndex: '50',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}>
                        <div 
                            style={{
                                position: 'fixed',
                                inset: '0',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)'
                            }}
                            onClick={closeModal}
                        />
                        <div className="mobile-modal" style={{
                            backgroundColor: 'white',
                            borderRadius: '0.5rem',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            padding: '2rem',
                            maxWidth: '32rem',
                            width: '100%',
                            margin: '0 auto',
                            position: 'relative',
                            zIndex: '10'
                        }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginBottom: '1rem',
                                color: '#9A7B4F',
                                fontFamily: "'Great Vibes', cursive"
                            }}>
                                Wedding Location
                            </h2>
                             <div style={{
                                 color: '#374151',
                                 maxHeight: '50vh',
                                 overflowY: 'auto',
                                 WebkitOverflowScrolling: 'touch'
                             }}>

                            <div style={{
                                width: '100%',
                                backgroundColor: '#9A7B4F',
                                color: 'white',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.5rem',
                                border: 'none',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                                fontFamily: 'inherit',
                                marginBottom: '3rem'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8a6d46'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9A7B4F'}
                            onClick={() => window.open("https://maps.app.goo.gl/uxvTZ5S6314qRRyZ9", "_blank")}
                            >
                                Open in google maps
                            </div>

                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.9237928073953!2d75.625248!3d31.948601900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b9ed248b9f76f%3A0x9484dade3197b6e0!2sVishal%20Farm%20-%20Best%20Banquet%20Hall%20in%20Mukerian!5e1!3m2!1sen!2sin!4v1758357737634!5m2!1sen!2sin" 
                                width="100%" 
                                height="280" 
                                style={{border: 0}} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            </div>
                            <button 
                                onClick={closeModal}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    color: '#6B7280',
                                    fontSize: '1.5rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#1F2937'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}
            </div>
            
            <style jsx>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                
                @media (min-width: 768px) {
                    .md-half-width {
                        width: 50% !important;
                    }
                }
            `}</style>
        </>
    );
};

export default WeddingNeenu;
