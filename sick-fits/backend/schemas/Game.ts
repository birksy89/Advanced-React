import {
  integer,
  select,
  text,
  relationship,
  timestamp,
} from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
// import { rules, isSignedIn } from '../access';

export const Game = list({
  // access: {
  //   create: isSignedIn,
  //   read: rules.canReadProducts,
  //   update: rules.canManageProducts,
  //   delete: rules.canManageProducts,
  // },
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    startDateTime: timestamp({
      isRequired: true,
      defaultValue: new Date().toISOString(),
    }),

    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Scheduled', value: 'SCHEDULED' },
        { label: 'Played', value: 'PLAYED' },
        { label: 'Cancelled', value: 'CANCELLED' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    club: relationship({
      ref: 'Club.games',
      isUnique: true,
      hooks: { afterChange: () => console.log('Club After Change') },
    }),
    players: relationship({
      ref: 'User',
      many: true,
      isUnique: true,
    }),
  },
});
