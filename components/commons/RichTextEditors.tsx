import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import Tiptap from './Tiptap'

interface RichTextEditorProps{
    label:string
}

const RichTextEditors:React.FC<RichTextEditorProps> = ({
    label
}) => {
    const form = useForm({
        mode: 'onChange',
    })
    return (
        <main>
            <Form {...form}>
                <form>
                    <div>

                        <FormField
                            name='description'
                            control={form.control}
                            render={ ({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                
                                <FormControl>
                                    <Tiptap
                                        onChange={field.onChange} 
                                        description={field.name} />
                                </FormControl>
                                </FormItem>
                            )}
                        >

                        </FormField>

                    </div>
                </form>
            </Form>
        </main>
    )
}

export default RichTextEditors