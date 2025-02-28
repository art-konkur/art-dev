import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomepageHeader } from '..';

jest.mock('@docusaurus/useDocusaurusContext', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    siteConfig: {
      title: 'کوشک کنکور هنر',
      tagline: 'مرجع جامع آمادگی برای کنکور هنر'
    }
  }))
}));

describe('HomepageHeader', () => {
  it('renders the site title', () => {
    render(<HomepageHeader />);
    expect(screen.getByText('کوشک کنکور هنر')).toBeInTheDocument();
  });

  it('renders the site tagline', () => {
    render(<HomepageHeader />);
    expect(screen.getByText('مرجع جامع آمادگی برای کنکور هنر')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<HomepageHeader />);
    expect(screen.getByText('راهنمای جامع و تخصصی برای موفقیت در کنکور هنر. با ما، رویاهای هنری خود را محقق کنید!')).toBeInTheDocument();
  });

  it('renders the start learning button', () => {
    render(<HomepageHeader />);
    const button = screen.getByText('🌀 ورود به دنیای هنر');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/docs/intro');
  });
});
