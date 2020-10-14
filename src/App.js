import React from 'react';

import TopSection from './app/components/TopSection';
import DeveloperSection from './app/components/DeveloperSection';
import UsersSection from './app/components/UsersSection';
import FormSection from './app/components/FormSection';
import FooterSection from './app/components/FooterSection';
import Header from './app/components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <DeveloperSection />
      <UsersSection />
      <FormSection />
      <FooterSection />
    </div>
  );
}

export default App;
