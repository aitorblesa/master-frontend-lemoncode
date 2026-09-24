import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('pods/project/project.mapper', () => {
  it('should return empty project when feeding null value', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty project when feeding undefined value', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty employees list when feeding null employees', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'test project',
      externalId: 'ext-1',
      comments: 'test comments',
      isActive: true,
      employees: null,
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'test project',
      externalId: 'ext-1',
      comments: 'test comments',
      isActive: true,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return empty employees list when feeding undefined employees', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'test project',
      isActive: false,
      employees: undefined,
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'test project',
      isActive: false,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return empty employees list when feeding empty employees', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'test project',
      isActive: true,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result.employees).toEqual([]);
  });

  it('should return mapped project when feeding project with employees', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'test project',
      externalId: 'ext-1',
      comments: 'test comments',
      isActive: true,
      employees: [
        { id: '10', employeeName: 'John Doe', isAssigned: true },
        { id: '20', employeeName: 'Jane Doe', isAssigned: false },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'test project',
      externalId: 'ext-1',
      comments: 'test comments',
      isActive: true,
      employees: [
        { id: '10', employeeName: 'John Doe', isAssigned: true },
        { id: '20', employeeName: 'Jane Doe', isAssigned: false },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return new employee objects instead of the same references', () => {
    // Arrange
    // compruebo que el mapper hace copia y no devuelve el mismo objeto
    const project: apiModel.Project = {
      id: '1',
      name: 'test project',
      isActive: true,
      employees: [{ id: '10', employeeName: 'John Doe' }],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).not.toBe(project);
    expect(result.employees).not.toBe(project.employees);
    expect(result.employees[0]).not.toBe(project.employees[0]);
    expect(result.employees[0]).toEqual(project.employees[0]);
  });
});
