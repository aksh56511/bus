const BASE = 'http://localhost:3000';

export async function getBuses() {
  const res = await fetch(`${BASE}/api/buses`);
  return res.json();
}

export async function createBus(payload) {
  const res = await fetch(`${BASE}/api/buses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function getTrips() {
  const res = await fetch(`${BASE}/api/trips`);
  return res.json();
}

export async function createTrip(payload) {
  const res = await fetch(`${BASE}/api/trips`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function register(username, password) {
  const res = await fetch(`${BASE}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return res.json();
}

export async function login(username, password) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return res.json();
}

export async function queryChatbot(prompt) {
  const res = await fetch(`${BASE}/api/chatbot/query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  return res.json();
}
