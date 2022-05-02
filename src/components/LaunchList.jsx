import { useState, useEffect} from 'react';
import { Heading } from '@chakra-ui/react';
import { LaunchItem } from './LaunchItem';
import * as API from '../services/launches';

export function LaunchList() {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches().then(setLaunches);
    }, []);

    return (    
        <>
            <Heading align="center" as="h1" size="lg" m={4}>
                SpaceX Launches
            </Heading>
            { }
            { launches.map((launch) => (
                <LaunchItem key={launch.mission_name} {...launch} />
            ))}
        </>
    );
}
