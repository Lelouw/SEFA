import { NavItem } from './nav-item';

export let menu: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: 'dashboard'
  },
  //edit this menu for user access
  {
    displayName: 'Users',
    iconName: 'group',
    route: 'contacts',
    children: [
      {
        displayName: 'Direct Repotees',
        iconName: 'list',
        route: 'contacts/view-contacts'
      },
      // {
      //   displayName: 'Add Users',
      //   iconName: 'add_box',
      //   route: 'contacts/add-contact'
      // }
    ]
  },
  {
    displayName: 'Accounts',
    iconName: 'business',
    route: 'accounts',
    children: [
      {
        displayName: 'View Accounts',
        iconName: 'list',
        route: 'accounts/view-accounts'
      },
      // {
      //   displayName: 'Add Account',
      //   iconName: 'add_box',
      //   route: 'accounts/add-account'
      // }
    ]
  },
  {
    displayName: 'Activities',
    iconName: 'grading',
    route: 'activities',
    children: [
      {
        displayName: 'View Activities',
        iconName: 'list',
        route: 'activities/view-activities'
      },
      {
        displayName: 'Add Activity',
        iconName: 'add_box',
        route: 'activities/add-activity'
      }
    ]
  },
  // {
  //   displayName: 'Deals',
  //   iconName: 'paid',
  //   route: 'deals',
  //   children: [
  //     {
  //       displayName: 'View Deals',
  //       iconName: 'list',
  //       route: 'deals/view-deals'
  //     },
  //     {
  //       displayName: 'Add Deal',
  //       iconName: 'add_box',
  //       route: 'deals/add-deal'
  //     }
  //   ]
  // },
  // {
  //   displayName: 'User',
  //   iconName: 'face',
  //   route: 'user',
  //   children: [
  //     {
  //       displayName: 'Email',
  //       iconName: 'markunread_mailbox',
  //       route: 'user/email/inbox'
  //     },
  //     {
  //       displayName: 'Account Info',
  //       iconName: 'account_box',
  //       route: 'user/account-info'
  //     },
  //     {
  //       displayName: 'Profile Image',
  //       iconName: 'image',
  //       route: 'user/profile-image'
  //     }
  //   ]
  // },
  {
      displayName: 'Sign Out',
      iconName: 'highlight_off'
  }
];
