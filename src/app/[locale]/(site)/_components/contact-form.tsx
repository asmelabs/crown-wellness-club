import { MailIcon, MessageCircleIcon, UserIcon } from 'lucide-react';
import { CTAButton } from '@/components/cta-button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupTextarea } from '@/components/ui/input-group';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  return (
    <form className='space-y-4'>
      <Field>
        <FieldLabel>Your Name</FieldLabel>
        <InputGroup>
          <InputGroupInput placeholder='Enter your name' aria-label='Your name' />
          <InputGroupAddon>
            <UserIcon />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel>Your Email</FieldLabel>
        <InputGroup>
          <InputGroupInput placeholder='Enter your email' aria-label='Your email' />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel>Your Phone</FieldLabel>
        <InputGroup>
          <InputGroupTextarea placeholder='Enter your message' aria-label='Your message' />
        </InputGroup>
      </Field>
      <CTAButton className='w-full' containerClassName='w-full'>
        Get in touch
      </CTAButton>
    </form>
  );
}
