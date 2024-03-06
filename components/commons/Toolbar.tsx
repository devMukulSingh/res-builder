import { Heading2 } from 'lucide-react'
import {
    Bold,
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
    if(!editor) return null;
    return (
        <main className='border border-input bg-transparent'>
            <Toggle
                size="sm"
                pressed={editor.isActive("heading")}
                onPressedChange={() =>
                    editor.chain().focus().toggleHeading({
                        level: 2
                    }).run()
                }
            >
                <Heading2 className='h-4 w-4' />

            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("heading")}
                onPressedChange={() =>
                    editor.chain().focus().toggleHeading({
                        level: 2
                    }).run()
                }
            >
                <Heading2 className='h-4 w-4' />

            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("heading")}
                onPressedChange={() =>
                    editor.chain().focus().toggleHeading({
                        level: 2
                    }).run()
                }
            >
                <Heading2 className='h-4 w-4' />

            </Toggle>
        </main>
    )
}

export default Toolbar