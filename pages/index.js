import Amplify, {AWSCloudWatchProvider, Logger} from 'aws-amplify';
import config from "../aws-exports.js";

Amplify.configure({
    Logging: {
        logGroupName: 'plugin-1',
        logStreamName: '1-plugin'
    },
    ...config,
    ssr: true
});

const browserLogger = new Logger('Log to browser');
const ssLogger = new Logger('Log to cloudwatch');

Amplify.register(ssLogger);
ssLogger.addPluggable(new AWSCloudWatchProvider());

export async function getServerSideProps({params}) {
    console.log("Doing serverside rendering...");
    try {
      ssLogger.warn('Clicking??');
    } catch (error) {

    }
    return {props: {ssrData: {name: "Some SSR data", timestamp: (new Date()).toUTCString()}}};
}

const App = ({ssrData}) => {
    return (
        <div onClick={() => {
            browserLogger.warn('Clicking??');
        }}>{ssrData.timestamp}</div>
    )
}

export default App;