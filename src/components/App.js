import SalesForm from "./SalesForm";

function App() {
  return (
    <div style={styles.wrapper}>
      <header className="App-header">
        Sales Trends Chart and Form
      </header>
      <main>
        <SalesForm />
      </main>
    </div>
  );
}

const styles = {
  wrapper: {
    background: 'gray',
    height: '100vh'
  }
}

export default App;
