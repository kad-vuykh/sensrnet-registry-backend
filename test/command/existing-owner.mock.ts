export class ExistingOwnerEventStoreMock {
    connect = (): void => void 0;
    exists = (): boolean => true;
    getEvents = (): [] => [];
}
