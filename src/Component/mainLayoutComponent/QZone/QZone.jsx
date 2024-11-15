import React, { useEffect, useState } from 'react';


function QZone() {
    const [qZone,setQZone] = useState([]);

    useEffect(()=>{
        fetch('../../../../public/QZone.json')
        .then(res=>res.json())
        .then(data=>setQZone(data))
    },[])

    return (
        <div className="qZone">
            <h2>Q-Zone</h2>
            {qZone?.map(item => (
                <div key={item.id} className="qzone-item">
                    <img src={item.image} alt={item.category} className="qZone-image" />
                    <p>{item.category}</p>
                </div>
            ))}
        </div>
    );
}

export default QZone;
