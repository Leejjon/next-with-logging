import Amplify, {Logger} from 'aws-amplify';
import config from "../aws-exports.js";
import SomePage from "./page";

Amplify.configure({
    ...config,
    ssr: true
});

const browserLogger = new Logger('Log to browser');

export async function getServerSideProps({params}) {
    console.log("Still doing serverside rendering...");
    return {props: {ssrData: {name: "Some SSR data", timestamp: (new Date()).toUTCString()}}};
}

const App = ({ssrData}) => {
    return (
        <div onClick={() => {
            browserLogger.warn('Clicking??');
        }}>{ssrData.timestamp}<SomePage /></div>
    )
}

export default App;