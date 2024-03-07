import JoditEditor from 'jodit-react';
import { Jodit } from '@/node_modules/jodit/esm/index.js';
import { useMemo, useRef, useState } from 'react';
import { Textarea } from '../ui/textarea';

interface RichTextEditorProps {
	placeholder: string
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ placeholder }) => {
	const [content, setContent] = useState<string>('');
	const editor = useRef<Jodit | null>(null);

	editor.current = Jodit.make('#editor', {
		buttons: ['bold']
	})

	// const config = useMemo(
	// 	{
	// 		placeholder: placeholder || 'Start typings...'
	// 	},
	// 	[placeholder]
	// );

	return (
		<>
			<textarea id="editor" />
			<JoditEditor
				ref={editor}
				value={content}
				// config={config}
				onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
				onChange={newContent => { }}
			/>
		</>
	);
};

export default RichTextEditor