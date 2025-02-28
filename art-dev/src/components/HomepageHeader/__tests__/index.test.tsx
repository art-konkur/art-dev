import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomepageHeader } from '..';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Mock the Docusaurus context
jest.mock('@docusaurus/useDocusaurusContext', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('HomepageHeader', () => {
  beforeEach(() => {
    (useDocusaurusContext as jest.Mock).mockReturnValue({
      siteConfig: {
        title: 'کوشک کنکور هنر',
        tagline: 'مرجع جامع آمادگی برای کنکور هنر'
      }
    });
  });

  it('renders the site title', () => {
    render(<HomepageHeader />);
    expect(screen.getByText('کوشک کنکور هنر')).toBeInTheDocument();
  });

  it('renders the site tagline', () => {
    render(<HomepageHeader />);
    expect(screen.getByText('مرجع جامع آمادگی برای کنکور هنر')).toBeInTheDocument();
  });

  it('renders the start learning button', () => {
    render(<HomepageHeader />);
    const button = screen.getByText('شروع یادگیری برای کنکور هنر - ۱۵ دقیقه');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/docs/intro');
  });
});
