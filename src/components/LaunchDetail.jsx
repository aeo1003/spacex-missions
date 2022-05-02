import { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import * as API from '../services/launches';

export function LaunchDetail(){
    const [ launch, setLaunch ] = useState({});
    const { id } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(id).then(setLaunch).catch(console.log);
    },[id]);
    return (
        <div>
            <pre>{JSON.stringify(launch)}</pre>
        </div>
    )
}