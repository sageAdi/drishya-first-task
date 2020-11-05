import React from 'react';
import Navigation from '../component/NavigationBar'
import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Navigation',
  component: Navigation,
};

const Template1 = (args) => <Navigation {...args} />;
export const FirstSory = Template1.bind({});

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
