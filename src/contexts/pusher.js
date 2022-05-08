import React from 'react'
import {createPusherInstance} from '../api'
import { isFunction, get, isEmpty } from '../helpers';
import {useCache, useSetCache} from './cache'
import { useToken } from './user';

export const usePusher = (eventName, active=false, resolver=null) => {

    const cached = useCache(eventName)
    const setCache = useSetCache()
    active = Boolean(active)

    React.useEffect(() => {

        let instance;

        if(active){
           
            instance = createPusherInstance()

            instance.subscribe("eventjuicer")

            instance.bind(eventName, function({data}){
                setCache(eventName, data)
            })
        }

        return (()=> {
            if(active){
                instance.unsubscribe("eventjuicer")
            }
        })
    }, [active, eventName, setCache])


    return React.useMemo(() => isFunction(resolver)? resolver(cached): cached, [eventName, resolver, cached])

}
