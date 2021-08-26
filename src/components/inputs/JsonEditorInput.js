
import { JsonEditor as Editor } from 'jsoneditor-react';
import { useInput, required, Labeled} from 'react-admin';

import 'jsoneditor-react/es/editor.min.css';

/**
 * 
 * https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
 * https://github.com/marmelab/react-admin/blob/43c4fafc8bcedebc386c7d3dc3b63cfd56420a17/packages/ra-ui-materialui/src/input/Labeled.tsx
 */
const JsonEditorInput = (props) => {

    const {
        input: { name, onChange, ...rest },
        meta: { touched, error },
        isRequired
    } = useInput(props);

    const handleChange = () => {}


    return (
    <Labeled label="JSON" fullWidth><Editor
    value={{"asd": 1111, "xxx": [{"el": 111},{"yyy": "2"}]}}
    onChange={handleChange}
    mode="code"
    />
    </Labeled>
    );

}

export default JsonEditorInput