'use client'

import React, { useState } from 'react';
import Head from 'next/head';

const WeddingNeenu: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [blessingsContent, setBlessingsContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchBlessings = async () => {
        setShowModal(true);
        setIsLoading(true);
        setBlessingsContent('');

        const userQuery = "Write a few short, heartfelt wedding blessing messages for a couple, Neenu and Deepak. Keep them concise and elegant, suitable for a wedding card. Generate 3-4 distinct options.";
        const apiKey = ""; // API key will be automatically provided by the environment
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        try {
            const payload = {
                contents: [{ parts: [{ text: userQuery }] }],
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }

            const result = await response.json();
            const candidate = result.candidates?.[0];

            let generatedText = "Sorry, we couldn't generate blessings at this moment. Please try again later.";
            if (candidate && candidate.content?.parts?.[0]?.text) {
                generatedText = candidate.content.parts[0].text;
            }
            
            setBlessingsContent(generatedText);
        } catch (error) {
            console.error('Error fetching blessings:', error);
            setBlessingsContent("Could not fetch blessings. Please check the console for more details.");
        } finally {
            setIsLoading(false);
        }
    };

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
            </Head>
            
            <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                backgroundColor: '#FBF9F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '1rem'
            }}>
                {/* Main Card Container */}
                <div style={{
                    width: '100%',
                    maxWidth: '64rem',
                    margin: '0 auto',
                    backgroundColor: 'white',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    borderRadius: '0.5rem',
                    overflow: 'hidden'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
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
                                onClick={fetchBlessings}
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
                                ✨ Suggest Blessings
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
                        <div style={{
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
                                Wedding Blessings
                            </h2>
                            <div style={{
                                color: '#374151',
                                maxHeight: '60vh',
                                overflowY: 'auto'
                            }}>
                                {isLoading ? (
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '2.5rem 0'
                                    }}>
                                        <div style={{
                                            width: '3rem',
                                            height: '3rem',
                                            border: '4px solid #D4C1A8',
                                            borderTop: '4px solid transparent',
                                            borderRadius: '50%',
                                            animation: 'spin 1s linear infinite'
                                        }} />
                                    </div>
                                ) : (
                                    <div style={{ whiteSpace: 'pre-wrap' }}>
                                        {blessingsContent.split('\n').filter(line => line.trim() !== '').map((line, index) => (
                                            <p key={index} style={{
                                                padding: '1rem',
                                                backgroundColor: '#F9FAFB',
                                                borderRadius: '0.5rem',
                                                borderLeft: '4px solid #D4C1A8',
                                                marginBottom: '1rem'
                                            }}>
                                                {line.replace(/^\d+\.\s*/, '')}
                                            </p>
                                        ))}
                                    </div>
                                )}
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
