import Link from 'next/link';
import type { IconType } from 'react-icons';

import Dropdown from '@/components/primitives/Dropdown';

import { cn } from '@/lib/utils';

export type ListItems = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | IconType;
  href?: string;
  dropdown?: ListItems[];
}

export default function ListItem({ 
  items ,
  className = "",
}: { 
  items: ListItems[]; 
  className?: string;
}) {
  return (
    <ul className="flex flex-col p-4 space-y-4">
      {items.map((item) => {
        const Icon = item.icon;

        const content = (
          <>
            <Icon className="mr-3 w-6 h-6" />
            {item.label}
          </>
        );

        return (
          <li key={item.label} className={cn("list-none", className)}>
            {item.href ? (
              <Link 
                href={item.href} 
                className="inline-flex p-2 rounded-lg"
              >
                {content}
              </Link>
            ) : (
              <button 
                type="button" 
                className="inline-flex p-2 rounded-lg"
              >
                {content}
              </button>
            )}

            {item.dropdown && (
              <Dropdown>
                <ListItem items={item.dropdown} className={className} />
              </Dropdown>
            )}
          </li>
        );
      })}
    </ul>
  );
}
