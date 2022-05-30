

import React from "react"
import { useResourceContext, useUpdate, useRecordContext } from "react-admin"

export const useUpdateFlag = (source) => {

    const resource = useResourceContext()
    const record = useRecordContext()
    const [update, {isLoading, error}] = useUpdate(resource, {
        id: record.id,
        data: {[source]: + !record[source]},
        previousData: record
    })

    return [Boolean(record[source]), React.useCallback(()=> update(), [update]), isLoading]

}


