import React from 'react'
import classes from './BlogEditor.module.scss';
import {Editor, EditorState, RichUtils} from 'draft-js';

function BlogEditor() {

    const [state,setState] = React.useState({
        editorState: EditorState.createEmpty()
    })

    const editorChangeHandler = (editorState) => {
        setState({editorState})
    }

    
    return (
        <div className={classes.editor}>
            <Editor
                editorState={state.editorState}
                onChange={editorChangeHandler}
            />
        </div>
    )
}

export default BlogEditor
