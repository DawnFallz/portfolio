'use client';

import { useState, useRef } from 'react';
import { Forminit } from 'forminit';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';

import ShineBorder from '@/components/ui/ShineBorder';
import ShinyText from '@/components/ui/ShinyText';
import Title from '@/components/ui/Title';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

const forminit = new Forminit();
const FORM_ID = process.env.NEXT_PUBLIC_FORMINIT_FORM_ID as string;

export default function Contact() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  const turnstileRef = useRef<TurnstileInstance>(null);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.set('cf-turnstile-response', turnstileToken);

    try {
      const { error } = await forminit.submit(FORM_ID, formData);

      if (error) {
        setStatus('error');
        return;
      }

      setStatus('success');
      form.reset();
    } finally {
      setTurnstileToken('');
      turnstileRef.current?.reset();
    }
  }

  const isLoading = status === 'loading';

  return (
    <div id="contact">
      <h1 className="text-center text-balance font-black hover-scale">
        <ShinyText
          text='" Get In Touch "'
          className="font-mont"
          speed={3}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={130}
          direction="left"
          yoyo={false}
          pauseOnHover={true}
          disabled={false}
        />
      </h1>

      <Title className="pl-2">Contact</Title>

      {/* Contact Form */}
      <ShineBorder
        shineColor={['#6366F1', '#A855F7', '#EC4899']}
        borderWidth={5}
        duration={14}
        className="rounded-xl flex flex-col p-4"
      >
        <form
          className="flex flex-col placse-items-center space-y-8"
          onSubmit={handleSubmit}
        >
          <label className="label flex flex-col items-start gap-2">
            <span className="label-text">First Name:</span>
            <input
              type="text"
              name="fi-sender-firstName"
              placeholder="First name"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="label flex flex-col items-start gap-2">
            <span className="label-text">Last Name:</span>
            <input
              type="text"
              name="fi-sender-lastName"
              placeholder="Last name"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="label flex flex-col items-start gap-2">
            <span className="label-text">Email:</span>
            <input
              type="email"
              name="fi-sender-email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="label flex flex-col items-start gap-2">
            <span className="label-text">Message:</span>
            <textarea
              name="fi-text-message"
              placeholder="Message (100-1500 characters)"
              rows={10}
              maxLength={1500}
              minLength={100}
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </label>

          <input type="hidden" name="honeypot" className="hidden" />

          <Turnstile
            ref={turnstileRef}
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={(token) => setTurnstileToken(token)}
            onExpire={() => setTurnstileToken('')}
            onError={() => setTurnstileToken('')}
          />

          <button
            type="submit"
            className="btn bg-gradient rounded-xl"
            disabled={isLoading || !turnstileToken}
          >
            {isLoading && <span className="loading loading-spinner" />}

            {isLoading ? 'Sending...' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="text-white text-center p-4 bg-success border border-gradient rounded-lg">
              <CheckCircleIcon className="inline-block mr-2 size-6" />
              Message sent successfully!
            </p>
          )}

          {status === 'error' && (
            <p className="text-white text-center p-4 bg-error border border-gradient rounded-lg">
              <ExclamationCircleIcon className="inline-block mr-2 size-6" />
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        <small className="text-zinc-400">
          Note: I&apos;m not available for hiring.
        </small>
      </ShineBorder>
    </div>
  );
}
