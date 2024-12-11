import React, { useEffect, useState, useRef } from 'react';

const WebSocketComponent = () => {
    const [saveInput, setSaveInput] = useState('');
    const [fetchInput, setFetchInput] = useState('');
    const [message, setMessage] = useState('');
    const [fetchedId, setFetchedId] = useState(null);
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8001/ws/droidal/');

        ws.current.onopen = () => {
            console.log('WebSocket Connected');
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log(data);

            if (data.status === 'success') {
                if (data.id) {
                    setFetchedId(data.id);
                }
                setMessage(data.message || '');
            } else if (data.status === 'error') {
                setMessage(data.message);
            }
        };

        ws.current.onclose = () => {
            console.log('WebSocket Disconnected');
        };

        return () => {
            ws.current.close();
        };
    }, []);

    const saveMessage = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({ action: 'save', message: saveInput }));
            console.log('Save request sent:', saveInput);
            setSaveInput('');
        } else {
            console.log('WebSocket is not open');
        }
    };

    const fetchMessageId = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({ action: 'fetch', message: fetchInput }));
            console.log('Fetch request sent:', fetchInput);
            setFetchInput('');
        } else {
            console.log('WebSocket is not open');
        }
    };

    return (
        <div>
            <h1>WebSocket Component</h1>
            <div style={styles.container}>
                <div style={styles.column}>
                    <h2>Save a Message</h2>
                    <input
                        type="text"
                        value={saveInput}
                        onChange={(e) => setSaveInput(e.target.value)}
                        placeholder="Type a message to save"
                    />
                    <button onClick={saveMessage}>Save Message</button>
                </div>
                <div style={styles.verticalLine}></div>
                <div style={styles.column}>
                    <h2>Fetch Message ID</h2>
                    <input
                        type="text"
                        value={fetchInput}
                        onChange={(e) => setFetchInput(e.target.value)}
                        placeholder="Type a message to fetch ID"
                    />
                    <button onClick={fetchMessageId}>Fetch ID</button>
                </div>
            </div>
            <div>
                <h3>Response Message: {message}</h3>
                {fetchedId !== null && <h3>Fetched ID: {fetchedId}</h3>}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    column: {
        width: '45%',
    },
    verticalLine: {
        borderLeft: '2px solid #000',
        height: '100%',
        margin: '0 20px',
    },
};

export default WebSocketComponent;
