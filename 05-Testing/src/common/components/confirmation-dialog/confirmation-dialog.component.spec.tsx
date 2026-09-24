import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

// props por defecto para no repetirlas en cada test
const createDefaultProps = () => ({
  isOpen: true,
  onAccept: vi.fn(),
  onClose: vi.fn(),
  title: 'Test title',
  labels: {
    closeButton: 'Cancel',
    acceptButton: 'Accept',
  },
  children: <p>Are you sure?</p>,
});

describe('common/components/confirmation-dialog/confirmation-dialog.component', () => {
  it('should show title, content and buttons when isOpen is true', () => {
    // Arrange
    const props = createDefaultProps();

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Accept' })).toBeInTheDocument();
  });

  it('should not show the dialog when isOpen is false', () => {
    // Arrange
    const props = { ...createDefaultProps(), isOpen: false };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByText('Test title')).not.toBeInTheDocument();
  });

  it('should render title when it is a React node', () => {
    // Arrange
    const props = {
      ...createDefaultProps(),
      title: <span data-testid="custom-title">Custom title</span>,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(screen.getByTestId('custom-title')).toHaveTextContent(
      'Custom title'
    );
  });

  it('should call onClose and not onAccept when clicking close button', async () => {
    // Arrange
    const props = createDefaultProps();
    const user = userEvent.setup();

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    // Assert
    expect(props.onClose).toHaveBeenCalledTimes(1);
    expect(props.onAccept).not.toHaveBeenCalled();
  });

  it('should call onAccept and onClose when clicking accept button', async () => {
    // Arrange
    const props = createDefaultProps();
    const user = userEvent.setup();

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    await user.click(screen.getByRole('button', { name: 'Accept' }));

    // Assert
    expect(props.onAccept).toHaveBeenCalledTimes(1);
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('should call onAccept before onClose when clicking accept button', async () => {
    // Arrange
    // guardo el orden de las llamadas en un array
    const callOrder: string[] = [];
    const props = {
      ...createDefaultProps(),
      onAccept: vi.fn(() => callOrder.push('accept')),
      onClose: vi.fn(() => callOrder.push('close')),
    };
    const user = userEvent.setup();

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    await user.click(screen.getByRole('button', { name: 'Accept' }));

    // Assert
    expect(callOrder).toEqual(['accept', 'close']);
  });
});
