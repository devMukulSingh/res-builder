import { Heading2, Redo, Undo } from 'lucide-react'
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Strikethrough,

} from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { Editor } from '@tiptap/react'

interface ToolbarProps {
    editor: Editor | null
}

const Toolbar: React.FC<ToolbarProps> = ({
    editor
}) => {
    if (!editor) return null;
    return (
        <main className='border border-input bg-transparent'>
            <Toggle
                size="sm"
                pressed={editor.isActive("bold")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBold().run()
                }
            >
                <Bold className='h-4 w-4' />

            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("italic")}
                onPressedChange={() =>
                    editor.chain().focus().toggleItalic().run()
                }
            >
                <Italic className='h-4 w-4' />

            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("strike")}
                onPressedChange={() =>
                    editor.chain().focus().toggleStrike().run()
                }
            >
                <Strikethrough className='h-4 w-4' />

            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("bulletList")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBulletList().run()
                }
            >
                <List className='h-4 w-4' />

            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("orderedList")}
                onPressedChange={() =>
                    editor.chain().focus().toggleOrderedList().run()
                }
            >
                <ListOrdered className='h-4 w-4' />

            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("undo")}
                onPressedChange={() =>
                    editor.chain().focus().undo().run()
                }
            >
                <Undo className='h-4 w-4' />

            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("redo")}
                onPressedChange={() =>
                    editor.chain().focus().redo().run()
                }
            >
                <Redo className='h-4 w-4' />

            </Toggle>
        </main>
    )
}

export default Toolbar