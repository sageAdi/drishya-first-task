import React from 'react';
import Navigation from '../component/NavigationBar'
import Contact from '../component/Contact'
import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'My Story',
  component: Navigation,
};

const Template1 = (args) => <Navigation {...args} />;
export const DefaultNavbar = Template1.bind({});
export const DarkBackground = ()=><Navigation bg='dark'/>;

const Template2 = (args) => <Contact {...args} />;
export const ContactStory = Template2.bind({});

export const SignUpStory = ()=><Contact label='SignUp'/>;
export const SignInStory = ()=><Contact label='SignIn'/>;

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
