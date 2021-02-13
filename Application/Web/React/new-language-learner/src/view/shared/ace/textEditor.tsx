import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
import BaseComponent from '../helper/baseComponent';

export default class TextEditor extends BaseComponent {
    render() {
        const onChange = (newValue: string) => {
            // 
        };

        // Render editor
        return (
            <AceEditor
                mode="java"
                theme="github"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
            />
        );
    }
}