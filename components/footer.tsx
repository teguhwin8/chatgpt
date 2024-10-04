import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Belikan aku{' '}
      <ExternalLink href="https://saweria.co/teguhwin8">Kopi</ExternalLink> dan
      Follow{' '}
      <ExternalLink href="https://www.tiktok.com/@teguhcoding.id">
        Tiktok aku
      </ExternalLink>{' '}
      yaaa. Terima kasih. 🙂
    </p>
  )
}
