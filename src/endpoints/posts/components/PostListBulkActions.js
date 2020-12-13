import React from "react";
import {MassChangeFlags, ChangeValueFromPredefinedSet, MoveOrCopyToOtherGroup} from '../../../components'
import categories from '../categories'




const PostListBulkActions = (props) => (

    <React.Fragment>

      <ChangeValueFromPredefinedSet {...props} choices={categories} label="Change Category" />
    
       <MassChangeFlags {...props} data={["is_published", "is_promoted", "is_sticky"]} label="Change visibility" />

        <MoveOrCopyToOtherGroup {...props} label="Move/Copy" />

    </React.Fragment>
);


export default PostListBulkActions