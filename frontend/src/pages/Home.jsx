import React from 'react';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import MapPlaceholder from '../components/MapPlaceholder';
import ChatbotPanel from '../components/ChatbotPanel';
import FindCard from '../components/FindCard';

export default function Home() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="main-grid">
        <section className="top-row">
          <div className="search-and-info">
            <SearchBox />
            <div className="estimates">Estimated pick up / drop time, distance, nearest boarding</div>
          </div>
          <MapPlaceholder />
          <ChatbotPanel />
        </section>

        <section className="find-section">
          <h2>FIND</h2>
          <div className="find-cards">
            <FindCard title="Lodge" />
            <FindCard title="Hospitals" />
            <FindCard title="ATM / Banks" />
            <FindCard title="Restaurants" />
          </div>
          <div className="search-example">Search e.g. grocery</div>
        </section>
      </main>
    </div>
  );
}
