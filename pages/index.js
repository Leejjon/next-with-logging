import Amplify, {AWSCloudWatchProvider, Logger} from 'aws-amplify';
import config from "../aws-exports.js";

Amplify.configure({
    Logging: {
        logGroupName: 'plugin-1',
        logStreamName: '1-plugin'
    },
    ...config,
    // ssr: true
});

const browserLogger = new Logger('Log to browser');
const ssLogger = new Logger('Log to cloudwatch');

Amplify.register(ssLogger);
ssLogger.addPluggable(new AWSCloudWatchProvider());

const App = () => {
    return (
        <div onClick={() => {
            browserLogger.warn('Clicking??');
            ssLogger.warn('Clicking??');
        }}>Boe</div>
    )
}

export default App;