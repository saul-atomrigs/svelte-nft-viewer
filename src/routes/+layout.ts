import { Auth } from 'aws-amplify';
import { awsConfig } from '$lib/constants';

console.log({ awsConfig });
Auth.configure(awsConfig);
