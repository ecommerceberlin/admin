import React from 'react'
import { DataProviderContext } from 'react-admin'



export * from './tickets'
export * from './groups'
export * from './events'
export * from './general'


export const useGet = (path, usePublicApi=false) => {


  const [data, setData] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const dataProvider = React.useContext(DataProviderContext);

  React.useEffect(()=>{

    let isCancelled = false;

    if(path && isString(path)){
      dataProvider.get(path, usePublicApi).then(({data}) => {
        if(!isCancelled){
          setLoading(false)
          setData(data)
        }
      }).catch(error => {
        if(!isCancelled){
          setLoading(false)
          setError(error)
        }
      })
    }

    return () => {
      isCancelled = true;
    };

  }, [path, usePublicApi])

  return {data, loading, error}

}