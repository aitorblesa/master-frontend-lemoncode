import { renderHook, act } from '@testing-library/react';
import { createEmptyLookup, Lookup } from '#common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('common/components/confirmation-dialog/confirmation-dialog.hook', () => {
  it('should return dialog closed and empty item by default', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it('should return functions onAccept, onClose and onOpenDialog', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should open dialog and save item when calling onOpenDialog', () => {
    // Arrange
    const item: Lookup = { id: '1', name: 'Item to delete' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('should close dialog when calling onClose', () => {
    // Arrange
    const item: Lookup = { id: '1', name: 'Item to delete' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(item);
    });
    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
    // onClose no limpia el item, solo cierra el dialogo
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('should reset item to empty lookup when calling onAccept', () => {
    // Arrange
    const item: Lookup = { id: '1', name: 'Item to delete' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(item);
    });
    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
    // onAccept no cierra el dialogo (lo cierra el componente llamando a onClose)
    expect(result.current.isOpen).toBe(true);
  });

  it('should be closed and with empty item after accept and close (same flow as component)', () => {
    // Arrange
    const item: Lookup = { id: '1', name: 'Item to delete' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(item);
    });
    act(() => {
      result.current.onAccept();
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });

  it('should replace item when calling onOpenDialog twice', () => {
    // Arrange
    const firstItem: Lookup = { id: '1', name: 'First item' };
    const secondItem: Lookup = { id: '2', name: 'Second item' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(firstItem);
    });
    act(() => {
      result.current.onOpenDialog(secondItem);
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(secondItem);
  });
});
