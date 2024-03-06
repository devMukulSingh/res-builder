import { useEditor, EditorContent  } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

interface TiptapProps{
    description:string,
    onChange : (richText:string) => void
}

const Tiptap:React.FC<TiptapProps> = ({
    description,
    onChange
}) => {
    const editor = useEditor({
        extensions: [StarterKit.configure()],
        content: description,
        editorProps: {
            attributes: {
                class: "rounded-md border min-h-[150px] border-input bg-black"
            },
        },
        onUpdate({editor}){
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