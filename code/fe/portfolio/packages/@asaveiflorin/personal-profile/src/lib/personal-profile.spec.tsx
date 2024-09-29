import { render } from '@testing-library/react';

import { PersonalProfile } from './personal-profile';

describe('PersonalProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PersonalProfile />);
    expect(baseElement).toBeTruthy();
  });
});
