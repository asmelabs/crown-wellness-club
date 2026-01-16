'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { MailIcon, UserIcon } from 'lucide-react';
import { type _Translator, useTranslations } from 'next-intl';
import { parseAsString, useQueryState } from 'nuqs';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { CTAButton } from '@/components/cta-button';
import { Field, FieldLabel } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupTextarea } from '@/components/ui/input-group';
import { Spinner } from '@/components/ui/spinner';
import { toastManager } from '@/components/ui/toast';

const MAX_MESSAGE_LENGTH = 500;

const formSchema = (t: _Translator) =>
  z.object({
    name: z
      .string({ error: t('name.invalid') })
      .nonempty({ error: t('name.required') })
      .max(100, { error: t('name.maxLength', { maxLength: 100 }) }),
    email: z.email({ error: t('email.invalid') }).max(255, { error: t('email.maxLength', { maxLength: 255 }) }),
    message: z
      .string({ error: t('message.invalid') })
      .nonempty({ error: t('message.required') })
      .max(MAX_MESSAGE_LENGTH, {
        error: t('message.maxLength', { maxLength: MAX_MESSAGE_LENGTH }),
      }),
  });

export function ContactForm() {
  const t = useTranslations('contact.validation');

  const [defaultEmail] = useQueryState('contact-email', parseAsString.withDefault(''));
  const [defaultMessage] = useQueryState('contact-message', parseAsString.withDefault(''));
  const [defaultName] = useQueryState('contact-name', parseAsString.withDefault(''));

  const translatedSchema = formSchema(t);
  const form = useForm({
    resolver: zodResolver(translatedSchema),
    defaultValues: {
      name: defaultName,
      email: defaultEmail,
      message: defaultMessage,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);

    toastManager.add({
      title: 'Thank you for your message',
      description: 'We will get back to you within 24 hours.',
      type: 'success',
    });
  });

  return (
    <form className='space-y-4' onSubmit={onSubmit}>
      <Field>
        <FieldLabel>Your Name</FieldLabel>
        <InputGroup>
          <InputGroupInput {...form.register('name')} placeholder='Enter your name' aria-label='Your name' />
          <InputGroupAddon>
            <UserIcon />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel>Your Email</FieldLabel>
        <InputGroup>
          <InputGroupInput {...form.register('email')} placeholder='Enter your email' aria-label='Your email' />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <FieldLabel>Your Message</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            maxLength={MAX_MESSAGE_LENGTH}
            placeholder='Enter your message'
            aria-label='Your message'
            {...form.register('message')}
          />
        </InputGroup>
      </Field>
      <CTAButton className='w-full' containerClassName='w-full' type='submit' disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? <Spinner /> : 'Submit'}
      </CTAButton>
    </form>
  );
}
