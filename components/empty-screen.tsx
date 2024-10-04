import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">Selamat datang di TeguhBot AI</h1>
        <p className="leading-normal text-muted-foreground">
          Ini adalah code open source yang dibuat dengan{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>,{' '}
          <ExternalLink href="https://sdk.vercel.ai">
            Vercel AI SDK,
          </ExternalLink>
          dan{' '}
          <ExternalLink href="https://vercel.com/storage/kv">
            Vercel KV
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          Model OpenAI yang digunakan adalah <strong>gpt-4o-mini</strong>. Jika
          ada kritik dan saran, silahkan hubungi saya di{' '}
          <ExternalLink href="https://wa.me/6285868474405">
            Whatsapp
          </ExternalLink>{' '}
        </p>
        <p className="leading-normal text-muted-foreground">
          Jika ingin nyawer atau donasi ke saya, silahkan{' '}
          <ExternalLink href="https://saweria.co/teguhwin8">
            klik di sini
          </ExternalLink>{' '}
        </p>
      </div>
    </div>
  )
}
