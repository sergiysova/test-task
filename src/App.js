import React from 'react';

import TopSection from './app/components/TopSection';
import DeveloperSection from './app/components/DeveloperSection';
import UsersSection from './app/components/UsersSection';
import FormSection from './app/components/FormSection';
import Header from './app/components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <DeveloperSection />
      <UsersSection />
      <FormSection />
    </div>
  );
}

export default App;
