import styles from '../styles/Home.module.css';

export async function getServerSideProps({ params }) {
  console.log("Doing serverside rendering...");
  return { props: { ssrData: {name: "Some SSR data", timestamp: (new Date()).toUTCString()}} };
}

const App = ({ssrData}) => {
  return (
    <div className={styles.container}>
      Hi {ssrData.timestamp}
    </div>
  )
}

export default App;