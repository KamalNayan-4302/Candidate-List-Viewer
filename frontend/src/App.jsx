import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [candidates, setCandidates] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [sortOrder, setSortOrder] = useState('asc'); 

    
    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/candidates');
                setCandidates(response.data); 
            } catch (error) {
                console.error('Error fetching candidates:', error);
            }
        };
        fetchCandidates();
    }, []);

    
    const filteredCandidates = candidates.filter(candidate =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedCandidates = [...filteredCandidates].sort((a, b) => {
        return sortOrder === 'asc' ? a.yearsOfExperience - b.yearsOfExperience : b.yearsOfExperience - a.yearsOfExperience;
    });

    return (
        <div style={{ padding: '20px' }}>
            <h1>Candidate List</h1>
            <input
                type="text"
                placeholder="Search by Name or Skills"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
                style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
            />
            <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                Sort by Years of Experience ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
            </button>
            <table style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Skills</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Years of Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCandidates.map(candidate => (
                        <tr key={candidate.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{candidate.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{candidate.skills}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{candidate.yearsOfExperience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;