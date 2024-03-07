import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import ListItem from '@tiptap/extension-list-item';
import { Color } from '@tiptap/extension-color'
import { TextStyle } from '@tiptap/extension-text-style'
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

interface TiptapProps {
    description: string,
    onChange: (richText: string) => void
}

const Tiptap: React.FC<TiptapProps> = ({
    description,
    onChange
}) => {
    const editor = useEditor({
        extensions: [
            ListItem.configure({
                HTMLAttributes: {
                    class: 'my-custom-class',
                    itemTypeName: 'listItem',
                    keepMarks: true,
                    keepAttributes: false,

                },
            }),
            OrderedList.configure({
                HTMLAttributes: {
                    class: 'my-custom-class',
                    itemTypeName: 'listItem',
                    keepMarks: true,
                    keepAttributes: false,
                },
            }),
            BulletList.configure({
                HTMLAttributes: {
                    class: 'my-custom-class',
                },
                itemTypeName: 'listItem',
                keepMarks: true,
                keepAttributes: false,
            }),
            StarterKit.configure()
        ],
        content: description,
        editorProps: {
            attributes: {
                class: "rounded-md border min-h-[150px] border-input bg-white"
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
            console.log(editor.getHTML());
        }
    })
    return (
        <main className="flex flex-col justify-center min-h-[250px]">
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </main>
    )
}

export default Tiptap