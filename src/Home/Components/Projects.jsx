import { Button } from '@mui/material';
import React, { useState } from 'react'

const ProjectsComp = () => {


    const [isHovered, setIsHovered] = useState(false);

    1
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', height: '50vh' }}>
                <div style={{
                    flex: 1, display: 'flex', justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid black'
                }}>
                    <div>
                        <text style={{ fontSize: '64px', color: '#765330' }}>
                            טעימה מהפרויקטים שלנו
                        </text>
                        <br /><br />
                        <br /><br />

                        <button>
                            <img src={'/assets/images/ProjectsPage/project1.png'} alt="Custom Button B" />

                        </button>
                        <button>
                            <img src={'/assets/images/ProjectsPage/project1.png'} alt="Custom Button B" />

                        </button>
                        <button>
                            <img src={'/assets/images/ProjectsPage/project1.png'} alt="Custom Button B" />

                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectsComp