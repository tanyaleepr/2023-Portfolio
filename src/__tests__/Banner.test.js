import { render, screen } from '@testing-library/react';

import AppBanner from '../components/shared/AppBanner';
import userEvent from '@testing-library/user-event';

const setup = () => render(<AppBanner />);

// Get user event
function setupUserEvent(jsx) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

test('it shows the title in the banner', () => {
	setup();

	expect(screen.getByText(/Hi, I am Tanya Lee/i)).toBeInTheDocument();
});

test('can download cv when clicked on download cv button', async () => {
	const { user } = setupUserEvent(<AppBanner />);

	const downloadCV = screen.getByText(/Download CV/i);

	expect(downloadCV).toBeInTheDocument();

	const downloadCVButton = downloadCV.parentElement.parentElement;

	expect(downloadCVButton).toBeInTheDocument();

	await user.click(downloadCVButton);

});
